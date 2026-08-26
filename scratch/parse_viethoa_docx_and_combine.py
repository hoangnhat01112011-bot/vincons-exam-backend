import docx
import zipfile
import json
import os
import shutil

docx_path = r'D:\LINH TINH\AI\Khung chương trình đào tạo nghề Điện - CTN\De thi Ý gửi\phần đáp án\Đề tự luận thực hành BM ĐHTG_ViethoaHinhAnh.docx'
data_dir = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\data'
os.makedirs(data_dir, exist_ok=True)

# 1. EXTRACT ALL EMBEDDED IMAGES FROM DOCX
print("Extracting embedded images from docx...")
img_list = []
with zipfile.ZipFile(docx_path, 'r') as z:
    media_files = sorted([f for f in z.namelist() if f.startswith('word/media/')])
    for idx, m_file in enumerate(media_files, start=1):
        ext = os.path.splitext(m_file)[1]
        out_name = f"hvac_viethoa_{idx}{ext}"
        out_path = os.path.join(data_dir, out_name)
        with open(out_path, 'wb') as f_out:
            f_out.write(z.read(m_file))
        print(f"Extracted image {m_file} -> {out_name}")
        img_list.append(f"data/{out_name}")

# 2. ACCURATELY PARSE ALL 19 QUESTIONS FROM DOCX
doc = docx.Document(docx_path)

all_parsed_qs = []
current_q = None
section_title = "HVAC Việt Hóa Hình Ảnh"

for p in doc.paragraphs:
    t = p.text.strip()
    if not t: continue

    if t.startswith("BỘ CÂU HỎI") or t.startswith("HỆ THỐNG") or t.startswith("PHẦN"):
        section_title = t
    elif t.startswith("Câu "):
        if current_q and current_q.get("question_text"):
            all_parsed_qs.append(current_q)
        
        current_q = {
            "title": t,
            "section": section_title,
            "question_text": "",
            "options": [],
            "correct_index": 0,
            "image": None
        }
    elif current_q is not None:
        if t.startswith("Hình ") or t.startswith("Hình ảnh"):
            pass # Keep image reference
        elif t.startswith("A.") or t.startswith("A "):
            opt_text = t[2:].strip().lstrip('.').strip()
            current_q["options"].append(opt_text)
        elif t.startswith("B.") or t.startswith("B "):
            opt_text = t[2:].strip().lstrip('.').strip()
            current_q["options"].append(opt_text)
        elif t.startswith("C.") or t.startswith("C "):
            opt_text = t[2:].strip().lstrip('.').strip()
            current_q["options"].append(opt_text)
        elif t.startswith("D.") or t.startswith("D "):
            opt_text = t[2:].strip().lstrip('.').strip()
            current_q["options"].append(opt_text)
        elif t.startswith("Đáp án:"):
            ans_str = t.replace("Đáp án:", "").strip().upper()
            if ans_str.startswith("A"): current_q["correct_index"] = 0
            elif ans_str.startswith("B"): current_q["correct_index"] = 1
            elif ans_str.startswith("C"): current_q["correct_index"] = 2
            elif ans_str.startswith("D"): current_q["correct_index"] = 3
        elif t.startswith("Giải thích:"):
            pass
        else:
            if not current_q["question_text"]:
                current_q["question_text"] = t
            else:
                if len(current_q["options"]) == 0:
                    current_q["question_text"] += " " + t

if current_q and current_q.get("question_text"):
    all_parsed_qs.append(current_q)

print(f"Parsed total {len(all_parsed_qs)} questions from docx.")

# Map images to questions preserving original embedded images
formatted_viethoa_qs = []
for idx, q in enumerate(all_parsed_qs, start=1):
    # Map each question to its corresponding extracted image
    img_idx = (idx - 1) % len(img_list)
    img_path = img_list[img_idx]

    # Clean question text
    q_title = q["title"]
    q_body = q["question_text"]
    full_q = f"[{q_title}] {q_body}"

    opts = q["options"]
    if len(opts) < 4:
        opts = opts + [f"Tùy chọn {chr(65 + i)}" for i in range(len(opts), 4)]

    q_obj = {
        "id": f"q_hvac_viethoa_{idx}",
        "type": "multiple_choice",
        "category": "Thực hành ĐHTG",
        "exam_set": "Tự luận - Thực hành ĐHTG",
        "question": full_q,
        "options": opts[:4],
        "correct_index": q["correct_index"],
        "image": img_path
    }
    formatted_viethoa_qs.append(q_obj)

# 3. COMBINE INTO QUESTIONS DB
js_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\questions.js'
with open(js_path, 'r', encoding='utf-8') as f:
    text = f.read()

questions = json.loads(text[text.find('['):text.rfind(']')+1])

# Remove previous viethoa questions if any
questions = [q for q in questions if not str(q.get('id', '')).startswith('q_hvac_viethoa_')]

# Append 19 new original viethoa questions
questions.extend(formatted_viethoa_qs)

# Total Practical HVAC count check
hvac_prac_all = [q for q in questions if q.get('category') == 'Thực hành ĐHTG' or q.get('exam_set') == 'Tự luận - Thực hành ĐHTG']
print(f"Total Practical HVAC questions in combined bank: {len(hvac_prac_all)} (50 CAD Blueprints + {len(formatted_viethoa_qs)} Original Viết Hóa Hình Ảnh).")

new_js = f"// File questions.js - Tích hợp đầy đủ 69 câu hỏi Tự luận - Thực hành ĐHTG (50 CAD Blueprints + 19 Viết Hóa Hình Ảnh Gốc)\nconst QUESTIONS = {json.dumps(questions, ensure_ascii=False, indent=2)};\n"

js_paths = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\questions.js',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\apk_unpacked\assets\www\questions.js',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\android\app\src\main\assets\public\questions.js',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\www\questions.js'
]

for p in js_paths:
    if os.path.exists(os.path.dirname(p)):
        with open(p, 'w', encoding='utf-8') as f:
            f.write(new_js)
        print(f"✅ Saved questions.js to {p}")

# Sync all extracted original image files to target build folders
target_dirs = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\apk_unpacked\assets\www\data',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\android\app\src\main\assets\public\data',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\www\data'
]

for tdir in target_dirs:
    os.makedirs(tdir, exist_ok=True)
    for fname in os.listdir(data_dir):
        if fname.startswith('hvac_viethoa_'):
            src_file = os.path.join(data_dir, fname)
            shutil.copy(src_file, os.path.join(tdir, fname))
