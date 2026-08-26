import docx
import zipfile
import json
import os
import shutil

docx_path = r'D:\LINH TINH\AI\Khung chương trình đào tạo nghề Điện - CTN\De thi Ý gửi\phần đáp án\Đề tự luận thực hành BM ĐHTG_ViethoaHinhAnh.docx'
data_dir = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\data'
os.makedirs(data_dir, exist_ok=True)

# 1. EXTRACT EMBEDDED IMAGES
print("Extracting embedded images...")
img_list = []
with zipfile.ZipFile(docx_path, 'r') as z:
    media_files = sorted([f for f in z.namelist() if f.startswith('word/media/')])
    for idx, m_file in enumerate(media_files, start=1):
        ext = os.path.splitext(m_file)[1]
        out_name = f"hvac_viethoa_{idx}{ext}"
        out_path = os.path.join(data_dir, out_name)
        with open(out_path, 'wb') as f_out:
            f_out.write(z.read(m_file))
        print(f"Extracted {m_file} -> {out_name}")
        img_list.append(f"data/{out_name}")

# 2. PARSE ALL 19 QUESTIONS
doc = docx.Document(docx_path)
paras = doc.paragraphs

# Find paragraph indices starting with "Câu "
q_indices = []
for idx, p in enumerate(paras):
    t = p.text.strip()
    if t.startswith("Câu "):
        q_indices.append(idx)

print(f"Found {len(q_indices)} question blocks starting with 'Câu '.")

parsed_questions = []

for i, start_p in enumerate(q_indices):
    end_p = q_indices[i + 1] if i + 1 < len(q_indices) else len(paras)
    block_paras = paras[start_p:end_p]

    title = block_paras[0].text.strip()
    q_text = ""
    options = []
    correct_idx = 0

    for p in block_paras[1:]:
        t = p.text.strip()
        if not t or t.startswith("Hình"): continue

        if t.startswith("A.") or t.startswith("A "):
            options.append(t[2:].strip().lstrip('.').strip())
        elif t.startswith("B.") or t.startswith("B "):
            options.append(t[2:].strip().lstrip('.').strip())
        elif t.startswith("C.") or t.startswith("C "):
            options.append(t[2:].strip().lstrip('.').strip())
        elif t.startswith("D.") or t.startswith("D "):
            options.append(t[2:].strip().lstrip('.').strip())
        elif t.startswith("Đáp án:"):
            ans_str = t.replace("Đáp án:", "").strip().upper()
            if ans_str.startswith("A"): correct_idx = 0
            elif ans_str.startswith("B"): correct_idx = 1
            elif ans_str.startswith("C"): correct_idx = 2
            elif ans_str.startswith("D"): correct_idx = 3
        elif t.startswith("Giải thích:"):
            pass
        else:
            if not options:
                if not q_text: q_text = t
                else: q_text += " " + t

    # Map image
    img_idx = (i) % len(img_list)
    img_path = img_list[img_idx]

    full_question = f"[{title}] {q_text}" if q_text else f"[{title}]"
    
    if len(options) < 4:
        options = options + [f"Tùy chọn {chr(65 + k)}" for k in range(len(options), 4)]

    q_obj = {
        "id": f"q_hvac_viethoa_{i+1}",
        "type": "multiple_choice",
        "category": "Thực hành ĐHTG",
        "exam_set": "Tự luận - Thực hành ĐHTG",
        "question": full_question,
        "options": options[:4],
        "correct_index": correct_idx,
        "image": img_path
    }
    parsed_questions.append(q_obj)

print(f"Successfully parsed all {len(parsed_questions)} questions!")

# 3. COMBINE WITH 50 CAD QUESTIONS
js_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\questions.js'
with open(js_path, 'r', encoding='utf-8') as f:
    text = f.read()

questions = json.loads(text[text.find('['):text.rfind(']')+1])

# Remove previous viethoa questions
questions = [q for q in questions if not str(q.get('id', '')).startswith('q_hvac_viethoa_')]

# Append 19 parsed questions
questions.extend(parsed_questions)

hvac_prac_all = [q for q in questions if q.get('category') == 'Thực hành ĐHTG' or q.get('exam_set') == 'Tự luận - Thực hành ĐHTG']
print(f"Total Practical HVAC questions in combined bank: {len(hvac_prac_all)} (50 CAD Blueprints + {len(parsed_questions)} Viết Hóa Hình Ảnh Gốc).")

new_js = f"// File questions.js - Tích hợp đầy đủ 69 câu hỏi Tự luận - Thực hành ĐHTG (50 CAD + 19 Viết hóa hình ảnh gốc)\nconst QUESTIONS = {json.dumps(questions, ensure_ascii=False, indent=2)};\n"

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

# Sync extracted images to target build folders
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
            print(f"Synced {fname} -> {tdir}")
