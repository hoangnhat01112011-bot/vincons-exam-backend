import http.server
import socketserver
import json
import os
import urllib.parse
from datetime import datetime

PORT = 8000
DATA_DIR = "data"
RESULTS_FILE = os.path.join(DATA_DIR, "results.json")
SETTINGS_FILE = os.path.join(DATA_DIR, "settings.json")
ADMIN_PIN = "VINCONS2026"

def ensure_data_dir():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    if not os.path.exists(RESULTS_FILE):
        with open(RESULTS_FILE, "w", encoding="utf-8") as f:
            json.dump([], f)
    if not os.path.exists(SETTINGS_FILE):
        with open(SETTINGS_FILE, "w", encoding="utf-8") as f:
            json.dump({"exam_pin": "6868"}, f)

def load_results():
    try:
        with open(RESULTS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except:
        return []

def save_results(results):
    with open(RESULTS_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

def load_settings():
    try:
        with open(SETTINGS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except:
        return {"exam_pin": "6868"}

def save_settings(settings):
    with open(SETTINGS_FILE, "w", encoding="utf-8") as f:
        json.dump(settings, f, ensure_ascii=False, indent=2)

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

    def send_json(self, data, status_code=200):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        
        if parsed.path == '/api/auth/verify-pin':
            query = urllib.parse.parse_qs(parsed.query)
            pin = query.get('pin', [''])[0]
            settings = load_settings()
            if pin == settings.get('exam_pin', '6868'):
                self.send_json({"status": "success", "message": "Mã hợp lệ"})
            else:
                self.send_json({"status": "error", "message": "Mã Ca Thi không hợp lệ!"}, 400)
            return
            
        elif parsed.path == '/api/auth/get-settings':
            self.send_json({"status": "success", "data": load_settings()})
            return

        elif parsed.path == '/api/get-results':
            self.send_json({"status": "success", "data": load_results()})
            return

        elif parsed.path.startswith('/api/'):
            self.send_json({"status": "error", "message": "Not Found"}, 404)
            return

        # Phục vụ file tĩnh
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8')) if post_data else {}
        except:
            data = {}

        if parsed.path == '/api/auth/admin-login':
            pin = data.get('pin', '')
            if pin == ADMIN_PIN:
                self.send_json({"status": "success"})
            else:
                self.send_json({"status": "error", "message": "Mã Giám thị không đúng"}, 401)
            return

        elif parsed.path == '/api/auth/set-settings':
            admin_pin = data.get('admin_pin', '')
            if admin_pin != ADMIN_PIN:
                self.send_json({"status": "error", "message": "Unauthorized"}, 401)
                return
            
            settings = load_settings()
            settings['exam_pin'] = data.get('exam_pin', settings['exam_pin'])
            save_settings(settings)
            self.send_json({"status": "success", "message": "Cập nhật thành công"})
            return

        elif parsed.path == '/api/save-result':
            results = load_results()
            results.insert(0, data)
            save_results(results)
            self.send_json({"status": "success", "message": "Đã lưu kết quả"})
            return

        self.send_json({"status": "error", "message": "Endpoint not found"}, 404)

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        query = urllib.parse.parse_qs(parsed.query)
        admin_pin = query.get('adminPin', [''])[0]

        if admin_pin != ADMIN_PIN:
            self.send_json({"status": "error", "message": "Unauthorized"}, 401)
            return

        if parsed.path == '/api/clear-results':
            save_results([])
            self.send_json({"status": "success", "message": "Đã xóa toàn bộ"})
            return

        elif parsed.path == '/api/delete-result':
            record_id = query.get('id', [''])[0]
            results = load_results()
            results = [r for r in results if r.get('id') != record_id]
            save_results(results)
            self.send_json({"status": "success", "message": "Đã xóa bản ghi"})
            return

if __name__ == '__main__':
    ensure_data_dir()
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"Server is running at http://localhost:{PORT}")
        httpd.serve_forever()
