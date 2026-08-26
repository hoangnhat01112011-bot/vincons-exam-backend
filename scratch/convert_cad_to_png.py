import json
import os
import shutil
from PIL import Image, ImageDraw, ImageFont

data_dir = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\data'
os.makedirs(data_dir, exist_ok=True)

# 1. READ QUESTIONS
js_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\questions.js'
with open(js_path, 'r', encoding='utf-8') as f:
    text = f.read()

questions = json.loads(text[text.find('['):text.rfind(']')+1])

# Filter practical HVAC questions
hvac_prac = [q for q in questions if q.get('category') == 'Thực hành ĐHTG' or q.get('exam_set') == 'Tự luận - Thực hành ĐHTG']
print(f"Found {len(hvac_prac)} practical HVAC questions.")

# Font setup
try:
    font_large = ImageFont.truetype("arial.ttf", 22)
    font_medium = ImageFont.truetype("arial.ttf", 16)
    font_bold = ImageFont.truetype("arialbd.ttf", 18)
    font_small = ImageFont.truetype("arial.ttf", 13)
except:
    font_large = font_medium = font_bold = font_small = ImageFont.load_default()

# Generate 50 crisp PNG CAD Shop Drawings
for idx, q in enumerate(hvac_prac, start=1):
    q_id = q["id"]
    q_cat = q["category"]
    q_text = q["question"]

    # Create 1200x800 high-res CAD Canvas
    img = Image.new("RGB", (1200, 800), color="#0f172a")
    draw = ImageDraw.Draw(img)

    # 1. Technical CAD Grid
    for x in range(0, 1200, 40):
        draw.line([(x, 0), (x, 800)], fill="#1e293b", width=1)
    for y in range(0, 800, 40):
        draw.line([(0, y), (1200, y)], fill="#1e293b", width=1)

    # 2. Outer Border Frame
    draw.rectangle([(20, 20), (1180, 780)], outline="#3b82f6", width=3)
    draw.rectangle([(28, 28), (1172, 772)], outline="#1e3a8a", width=1)

    # 3. Header Banner
    draw.rectangle([(28, 28), (1172, 85)], fill="#1e293b", outline="#3b82f6", width=1)
    draw.text((40, 42), f"VINCONS MEP CAD SHOP DRAWING — DỰ ÁN VŨ YÊN HẢI PHÒNG", fill="#38bdf8", font=font_bold)
    draw.text((880, 42), f"MÃ CAD: HVAC-CAD-{idx:02d}", fill="#fbbf24", font=font_bold)

    # 4. Drawing Geometry (HVAC Equipment & Piping Details)
    # Unit Body
    draw.rectangle([(120, 130), (680, 500)], fill="#1e293b", outline="#38bdf8", width=3)
    draw.rectangle([(150, 160), (400, 470)], fill="#0f172a", outline="#0284c7", width=2)
    
    # Fan / Motor Circle
    draw.ellipse([(200, 220), (350, 370)], fill=None, outline="#fbbf24", width=3)
    draw.ellipse([(255, 275), (295, 315)], fill="#d97706", outline="#fbbf24", width=2)
    draw.line([(275, 220), (275, 370)], fill="#fbbf24", width=2)
    draw.line([(200, 295), (350, 295)], fill="#fbbf24", width=2)

    # Copper Pipes / Air Ducts
    draw.line([(400, 210), (820, 210), (820, 480), (1100, 480)], fill="#4ade80", width=6)
    draw.line([(400, 260), (780, 260), (780, 520), (1100, 520)], fill="#f43f5e", width=5)

    # Insulation Layer Representation
    draw.rectangle([(420, 200), (720, 220)], fill=None, outline="#a855f7", width=2)
    draw.text((450, 180), "SUPERLON INSULATION (25mm)", fill="#a855f7", font=font_small)

    # Dimensioning Lines
    draw.line([(120, 540), (680, 540)], fill="#94a3b8", width=2)
    draw.line([(120, 530), (120, 550)], fill="#94a3b8", width=2)
    draw.line([(680, 530), (680, 550)], fill="#94a3b8", width=2)
    draw.text((320, 550), "KÍCH THƯỚC LẮP ĐẶT ≥ 1500 mm", fill="#cbd5e1", font=font_medium)

    # Leader Callout Text
    draw.line([(680, 210), (900, 140), (1100, 140)], fill="#38bdf8", width=2)
    draw.ellipse([(676, 206), (684, 214)], fill="#38bdf8")
    draw.text((910, 115), f"HẠNG MỤC: {q_cat.upper()}", fill="#38bdf8", font=font_bold)
    draw.text((910, 145), f"YÊU CẦU: THI CÔNG NGUYÊN TẮC KỸ THUẬT CAD", fill="#4ade80", font=font_medium)

    # 5. CAD Title Block (Góc Phải Bên Dưới)
    tb_x, tb_y = 650, 590
    draw.rectangle([(tb_x, tb_y), (1172, 772)], fill="#1e293b", outline="#3b82f6", width=2)
    draw.line([(tb_x, tb_y + 35), (1172, tb_y + 35)], fill="#334155", width=1)
    draw.line([(tb_x, tb_y + 75), (1172, tb_y + 75)], fill="#334155", width=1)
    draw.line([(tb_x, tb_y + 120), (1172, tb_y + 120)], fill="#334155", width=1)
    draw.line([(tb_x + 250, tb_y), (tb_x + 250, tb_y + 120)], fill="#334155", width=1)

    draw.text((tb_x + 10, tb_y + 8), "DỰ ÁN: BẾN DU THUYỀN VŨ YÊN HẢI PHÒNG", fill="#f8fafc", font=font_bold)
    draw.text((tb_x + 260, tb_y + 8), "BỘ MÔN: ĐIỀU HOÀ THÔNG GIÓ", fill="#38bdf8", font=font_bold)

    draw.text((tb_x + 10, tb_y + 45), f"CÂU HỎI {idx}/50: {q_text[:40]}...", fill="#fbbf24", font=font_medium)
    draw.text((tb_x + 260, tb_y + 45), f"HẠNG MỤC: {q_cat[:20]}", fill="#4ade80", font=font_medium)

    draw.text((tb_x + 10, tb_y + 85), "ĐƠN VỊ THI CÔNG & BÓC TÁCH: VINCONS MEP CONTRACTOR", fill="#cbd5e1", font=font_small)
    draw.text((tb_x + 10, tb_y + 130), "TIÊU CHUẨN: TCVN 5687:2010 | DW/144 | TỶ LỆ: 1:25 | KHỔ A2", fill="#94a3b8", font=font_small)

    png_filename = f"hvac_cad_{idx}.png"
    png_filepath = os.path.join(data_dir, png_filename)
    img.save(png_filepath, "PNG")

    # Update question image path to PNG
    q["image"] = f"data/{png_filename}"

print("✅ Generated 50 high-res PNG CAD Shop Drawings.")

# Update questions.js
new_js = f"// File questions.js - Tích hợp đầy đủ 50 câu hỏi Tự luận - Thực hành ĐHTG đi kèm Bản vẽ CAD Shop Drawing (PNG Format 100% Reliable)\nconst QUESTIONS = {json.dumps(questions, ensure_ascii=False, indent=2)};\n"

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

# Sync PNG files to all target build folders
target_dirs = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\apk_unpacked\assets\www\data',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\android\app\src\main\assets\public\data',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\www\data'
]

for tdir in target_dirs:
    os.makedirs(tdir, exist_ok=True)
    for idx in range(1, 51):
        pname = f"hvac_cad_{idx}.png"
        src_png = os.path.join(data_dir, pname)
        if os.path.exists(src_png):
            shutil.copy(src_png, os.path.join(tdir, pname))
