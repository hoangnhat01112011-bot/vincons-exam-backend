import csv
import json
import os
import sys

def convert_csv_to_js():
    csv_file_path = "NganHangCauHoi_Mau.csv"
    js_file_path = "../questions.js"
    
    if not os.path.exists(csv_file_path):
        print(f"Lỗi: Không tìm thấy file '{csv_file_path}' trong thư mục tools.")
        print("Vui lòng đặt script này cùng thư mục với file NganHangCauHoi_Mau.csv")
        sys.exit(1)
        
    questions = []
    
    try:
        with open(csv_file_path, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                # Bỏ qua các dòng trống
                if not row.get('Câu hỏi') or str(row.get('Câu hỏi')).strip() == '':
                    continue
                    
                # Ánh xạ bộ môn thành category
                bo_mon = str(row.get('Bộ môn', '')).strip()
                phan_thi = str(row.get('Phần thi', '')).strip()
                
                # Ví dụ: "Thợ điện" -> "Lý thuyết - Thợ điện"
                category = f"{phan_thi} - {bo_mon}"
                
                options = [
                    str(row.get('Đáp án A', '')).strip(),
                    str(row.get('Đáp án B', '')).strip(),
                    str(row.get('Đáp án C', '')).strip(),
                    str(row.get('Đáp án D', '')).strip()
                ]
                
                correct_letter = str(row.get('Đáp án Đúng (A/B/C/D)', '')).strip().upper()
                letter_to_index = {'A': 0, 'B': 1, 'C': 2, 'D': 3}
                correct_index = letter_to_index.get(correct_letter, 0)
                
                q = {
                    "id": f"q_auto_{len(questions) + 1}",
                    "category": category,
                    "exam_set": str(row.get('Bộ đề', 'all')).strip(),
                    "type": "multiple_choice",
                    "question": str(row.get('Câu hỏi', '')).strip(),
                    "options": options,
                    "correct_index": correct_index
                }
                questions.append(q)
                
    except Exception as e:
        print(f"Lỗi khi đọc file CSV: {str(e)}")
        sys.exit(1)
        
    # Tạo nội dung file questions.js
    js_content = f"// File này được tạo tự động từ NganHangCauHoi_Mau.csv thông qua script python\n"
    js_content += f"const QUESTIONS = {json.dumps(questions, ensure_ascii=False, indent=4)};\n"
    
    # Ghi ra file
    try:
        # Check if file exists, if not, create it
        mode = 'w' if os.path.exists(js_file_path) else 'x'
        with open(js_file_path, mode, encoding='utf-8') as f:
            f.write(js_content)
        print(f"✅ THÀNH CÔNG! Đã chuyển đổi {len(questions)} câu hỏi sang file questions.js")
        print(f"👉 Bây giờ bạn có thể Commit và Push file questions.js lên Github.")
    except Exception as e:
        print(f"Lỗi khi ghi file questions.js: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    print("Đang đọc file NganHangCauHoi_Mau.csv ...")
    convert_csv_to_js()
    input("Nhấn Enter để thoát...")
