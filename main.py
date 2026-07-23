import http.server
import socketserver
import webbrowser
import threading
import os
import sys
import json
import csv
import hashlib
from urllib.parse import parse_qs, urlparse

# Ensure UTF-8 output encoding for Windows console
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = int(os.environ.get('PORT', 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(DIRECTORY, 'data')
RESULTS_JSON = os.path.join(DATA_DIR, 'results.json')
RESULTS_CSV = os.path.join(DATA_DIR, 'results.csv')
USERS_JSON = os.path.join(DATA_DIR, 'users.json')

def ensure_data_dir():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)

def load_users():
    ensure_data_dir()
    if not os.path.exists(USERS_JSON):
        # Create empty list if it doesn't exist
        try:
            with open(USERS_JSON, 'w', encoding='utf-8') as f:
                json.dump([], f)
        except Exception:
            pass
        return []
    try:
        with open(USERS_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading users: {e}")
        return []

def save_users(users):
    ensure_data_dir()
    try:
        with open(USERS_JSON, 'w', encoding='utf-8') as f:
            json.dump(users, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Error saving users: {e}")

def load_results():
    ensure_data_dir()
    if not os.path.exists(RESULTS_JSON):
        return []
    try:
        with open(RESULTS_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading results: {e}")
        return []

def save_results_to_files(results):
    ensure_data_dir()
    # Save to JSON
    with open(RESULTS_JSON, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    # Save to CSV with UTF-8 BOM for Microsoft Excel compatibility
    try:
        with open(RESULTS_CSV, 'w', encoding='utf-8-sig', newline='') as f:
            writer = csv.writer(f)
            writer.writerow([
                "Mã bản ghi",
                "Họ và tên",
                "SBD/SĐT",
                "Vị trí ứng tuyển",
                "Phần thi",
                "Điểm số",
                "Số câu đúng",
                "Tổng số câu",
                "Tỷ lệ (%)",
                "Kết quả",
                "Thời gian nộp"
            ])
            for item in results:
                cand = item.get('candidate', {})
                score_str = f"{item.get('correctCount', 0)}/{item.get('totalCount', 0)}"
                pct = item.get('percentage', 0)
                writer.writerow([
                    item.get('id', ''),
                    cand.get('name', ''),
                    cand.get('id', ''),
                    cand.get('job', ''),
                    cand.get('examType', ''),
                    score_str,
                    item.get('correctCount', 0),
                    item.get('totalCount', 0),
                    f"{pct:.1f}%",
                    "ĐẠT" if item.get('isPass') else "CHƯA ĐẠT",
                    item.get('submitTime', '')
                ])
    except Exception as e:
        print(f"Error saving CSV: {e}")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def send_json(self, data, code=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        query = parse_qs(parsed.query)
        
        if parsed.path == '/api/results':
            results = load_results()
            user_id = query.get('userId', [None])[0]
            role = query.get('role', [None])[0]
            
            if role == 'admin':
                self.send_json(results)
            elif role == 'candidate' and user_id:
                # Filter results where candidate.id matches the candidate's logged in username (phone/email)
                filtered = [r for r in results if str(r.get('candidate', {}).get('id', '')).strip().lower() == user_id.strip().lower()]
                self.send_json(filtered)
            else:
                self.send_json([])
            return
            
        elif parsed.path == '/api/list-pdfs':
            ensure_data_dir()
            pdf_files = []
            if os.path.exists(DATA_DIR):
                for fname in os.listdir(DATA_DIR):
                    if fname.lower().endswith('.pdf'):
                        pdf_files.append({
                            "name": fname,
                            "url": f"/data/{fname}"
                        })
            self.send_json(pdf_files)
            return
            
        elif parsed.path == '/api/export-csv':
            ensure_data_dir()
            user_id = query.get('userId', [None])[0]
            role = query.get('role', [None])[0]
            
            if not role or (role != 'admin' and role != 'candidate'):
                self.send_json({"status": "error", "message": "Unauthorized"}, code=403)
                return
                
            results = load_results()
            if role == 'candidate' and user_id:
                results = [r for r in results if str(r.get('candidate', {}).get('id', '')).strip().lower() == user_id.strip().lower()]
            
            # Generate CSV bytes on the fly
            try:
                import io
                f = io.StringIO()
                f.write('\ufeff') # UTF-8 BOM
                writer = csv.writer(f)
                writer.writerow([
                    "Mã bản ghi",
                    "Họ và tên",
                    "SBD/SĐT",
                    "Vị trí ứng tuyển",
                    "Phần thi",
                    "Điểm số",
                    "Số câu đúng",
                    "Tổng số câu",
                    "Tỷ lệ (%)",
                    "Kết quả",
                    "Thời gian nộp"
                ])
                for item in results:
                    cand = item.get('candidate', {})
                    score_str = f"{item.get('correctCount', 0)}/{item.get('totalCount', 0)}"
                    pct = item.get('percentage', 0)
                    writer.writerow([
                        item.get('id', ''),
                        cand.get('name', ''),
                        cand.get('id', ''),
                        cand.get('job', ''),
                        cand.get('examType', ''),
                        score_str,
                        item.get('correctCount', 0),
                        item.get('totalCount', 0),
                        f"{pct:.1f}%",
                        "ĐẠT" if item.get('isPass') else "CHƯA ĐẠT",
                        item.get('submitTime', '')
                    ])
                content = f.getvalue().encode('utf-8-sig')
                
                self.send_response(200)
                self.send_header('Content-Type', 'text/csv; charset=utf-8')
                self.send_header('Content-Disposition', 'attachment; filename="vincons_exam_results.csv"')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
                return
            except Exception as e:
                self.send_json({"status": "error", "message": str(e)}, code=500)
                return
        
        # Standard static file handling
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/api/auth/register':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                username = data.get('username', '').strip()
                password = data.get('password', '')
                name = data.get('name', '').strip()
                role = data.get('role', 'candidate').strip()
                admin_code = data.get('adminCode', '').strip()
                
                if not username or not password or not name:
                    self.send_json({"status": "error", "message": "Vui lòng nhập đầy đủ thông tin bắt buộc!"}, code=400)
                    return
                
                if role == 'admin' and admin_code != 'VINCONS2026':
                    self.send_json({"status": "error", "message": "Mã kích hoạt giám thị không chính xác!"}, code=400)
                    return
                
                users = load_users()
                # Check if username already exists
                if any(u.get('username', '').lower() == username.lower() for u in users):
                    self.send_json({"status": "error", "message": "Số điện thoại hoặc Gmail này đã được đăng ký!"}, code=400)
                    return
                
                # Hash password
                hashed_pw = hashlib.sha256(password.encode('utf-8')).hexdigest()
                new_user = {
                    "username": username,
                    "password": hashed_pw,
                    "name": name,
                    "role": role
                }
                users.append(new_user)
                save_users(users)
                self.send_json({"status": "success", "message": "Đăng ký tài khoản thành công!"})
            except Exception as e:
                self.send_json({"status": "error", "message": str(e)}, code=400)
            return

        elif parsed.path == '/api/auth/login':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                username = data.get('username', '').strip()
                password = data.get('password', '')
                
                if not username or not password:
                    self.send_json({"status": "error", "message": "Vui lòng nhập tài khoản và mật khẩu!"}, code=400)
                    return
                
                hashed_pw = hashlib.sha256(password.encode('utf-8')).hexdigest()
                users = load_users()
                
                found_user = None
                for u in users:
                    if u.get('username', '').lower() == username.lower() and u.get('password', '') == hashed_pw:
                        found_user = u
                        break
                
                if found_user:
                    self.send_json({
                        "status": "success",
                        "message": "Đăng nhập thành công!",
                        "user": {
                            "username": found_user["username"],
                            "name": found_user["name"],
                            "role": found_user["role"]
                        }
                    })
                else:
                    self.send_json({"status": "error", "message": "Số điện thoại/Gmail hoặc mật khẩu không đúng!"}, code=400)
            except Exception as e:
                self.send_json({"status": "error", "message": str(e)}, code=400)
            return

        elif parsed.path == '/api/save-result':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                results = load_results()
                
                # Check if item with same ID already exists, update or insert
                item_id = data.get('id')
                if not item_id:
                    item_id = f"res_{int(threading.get_ident())}_{len(results) + 1}"
                    data['id'] = item_id

                # Upsert into list
                existing_idx = next((i for i, r in enumerate(results) if r.get('id') == item_id), -1)
                if existing_idx >= 0:
                    results[existing_idx] = data
                else:
                    results.insert(0, data) # Newest first

                save_results_to_files(results)
                self.send_json({"status": "success", "message": "Đã lưu kết quả bài thi thành công", "id": item_id})
            except Exception as e:
                self.send_json({"status": "error", "message": str(e)}, code=400)
            return

        self.send_error(404, "Endpoint not found")

    def do_DELETE(self):
        parsed = urlparse(self.path)
        query = parse_qs(parsed.query)
        role = query.get('role', [None])[0]
        
        if parsed.path == '/api/clear-results':
            if role != 'admin':
                self.send_json({"status": "error", "message": "Chỉ Giám thị mới có quyền xóa toàn bộ lịch sử thi!"}, code=403)
                return
                
            save_results_to_files([])
            self.send_json({"status": "success", "message": "Đã xóa toàn bộ lịch sử bài thi"})
            return
            
        elif parsed.path == '/api/delete-result':
            if role != 'admin':
                self.send_json({"status": "error", "message": "Chỉ Giám thị mới có quyền xóa kết quả bài thi!"}, code=403)
                return
                
            item_id = query.get('id', [None])[0]
            if item_id:
                results = load_results()
                filtered = [r for r in results if r.get('id') != item_id]
                save_results_to_files(filtered)
                self.send_json({"status": "success", "message": f"Đã xóa bản ghi {item_id}"})
            else:
                self.send_json({"status": "error", "message": "Missing id parameter"}, code=400)
            return

        self.send_error(404, "Endpoint not found")

def open_browser():
    webbrowser.open(f"http://localhost:{PORT}/index.html")

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Vincons Recruitment Exam Server running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop.")
        threading.Timer(0.5, open_browser).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server...")
            httpd.shutdown()

if __name__ == '__main__':
    run_server()
