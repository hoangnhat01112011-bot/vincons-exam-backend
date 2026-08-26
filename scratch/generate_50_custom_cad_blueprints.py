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
    font_title = ImageFont.truetype("arialbd.ttf", 20)
    font_bold = ImageFont.truetype("arialbd.ttf", 16)
    font_medium = ImageFont.truetype("arial.ttf", 14)
    font_small = ImageFont.truetype("arial.ttf", 12)
except:
    font_title = font_bold = font_medium = font_small = ImageFont.load_default()

def draw_cad_template(draw, idx, cat_name, cad_code):
    # Background CAD Dark Grid
    for x in range(0, 1200, 40):
        draw.line([(x, 0), (x, 800)], fill="#1e293b", width=1)
    for y in range(0, 800, 40):
        draw.line([(0, y), (1200, y)], fill="#1e293b", width=1)

    # Border
    draw.rectangle([(15, 15), (1185, 785)], outline="#3b82f6", width=3)
    draw.rectangle([(22, 22), (1178, 778)], outline="#1e3a8a", width=1)

    # Top Banner
    draw.rectangle([(22, 22), (1178, 75)], fill="#1e293b", outline="#3b82f6", width=1)
    draw.text((35, 38), "VINCONS MEP CAD SHOP DRAWING — HẠ TẦNG CẢNH QUAN BẾN DU THUYỀN VŨ YÊN", fill="#38bdf8", font=font_title)
    draw.text((920, 38), f"MÃ CAD: {cad_code}", fill="#fbbf24", font=font_bold)

    # Bottom Title Block (Clean No Overlapping)
    tb_x, tb_y = 680, 620
    draw.rectangle([(tb_x, tb_y), (1170, 770)], fill="#1e293b", outline="#3b82f6", width=2)
    draw.line([(tb_x, tb_y + 35), (1170, tb_y + 35)], fill="#334155", width=1)
    draw.line([(tb_x, tb_y + 75), (1170, tb_y + 75)], fill="#334155", width=1)
    draw.line([(tb_x + 230, tb_y), (tb_x + 230, tb_y + 75)], fill="#334155", width=1)

    draw.text((tb_x + 10, tb_y + 8), "DỰ ÁN: BẾN DU THUYỀN VŨ YÊN HẢI PHÒNG", fill="#f8fafc", font=font_bold)
    draw.text((tb_x + 240, tb_y + 8), "BỘ MÔN: ĐIỀU HOÀ THÔNG GIÓ", fill="#38bdf8", font=font_bold)
    draw.text((tb_x + 10, tb_y + 45), f"HẠNG MỤC: {cat_name[:25]}", fill="#fbbf24", font=font_bold)
    draw.text((tb_x + 240, tb_y + 45), f"BẢN VẼ CÂU HỎI {idx}/50", fill="#4ade80", font=font_bold)
    draw.text((tb_x + 10, tb_y + 85), "QUY CHUẨN THI CÔNG & BÓC TÁCH: VINCONS CONTRACTOR", fill="#cbd5e1", font=font_small)
    draw.text((tb_x + 10, tb_y + 120), "TIÊU CHUẨN: TCVN 5687:2010 | SMACNA | DW/144 | TỶ LỆ 1:25", fill="#94a3b8", font=font_small)

# Generate 50 tailored graphics for 50 questions
for idx, q in enumerate(hvac_prac, start=1):
    cat_name = q["category"]
    cad_code = f"HVAC-CAD-{idx:02d}"

    img = Image.new("RGB", (1200, 800), color="#0f172a")
    draw = ImageDraw.Draw(img)
    draw_cad_template(draw, idx, cat_name, cad_code)

    # CUSTOM SPECIFIC DRAWING SCHEMATICS ACCORDING TO TASK TOPIC
    if idx <= 5: # Lắp đặt giàn nóng VRV
        # Concrete pad & Outdoor Unit VRV
        draw.rectangle([(100, 480), (600, 560)], fill="#334155", outline="#94a3b8", width=3) # Concrete pad
        draw.text((280, 510), "BỆ BÊ TÔNG H ≥ 150mm", fill="#ffffff", font=font_bold)
        
        # Spring Isolators
        draw.rectangle([(150, 450), (200, 480)], fill="#d97706", outline="#fbbf24", width=2)
        draw.rectangle([(500, 450), (550, 480)], fill="#d97706", outline="#fbbf24", width=2)
        draw.text((120, 420), "LÒ XO GIẢM CHẤN", fill="#fbbf24", font=font_small)

        # VRV Outdoor Unit Body
        draw.rectangle([(130, 160), (570, 450)], fill="#1e293b", outline="#38bdf8", width=4)
        draw.rectangle([(160, 180), (330, 420)], fill="#0f172a", outline="#0284c7", width=2) # Fan 1
        draw.rectangle([(370, 180), (540, 420)], fill="#0f172a", outline="#0284c7", width=2) # Fan 2
        
        # Fans
        draw.ellipse([(205, 250), (285, 330)], outline="#fbbf24", width=3)
        draw.ellipse([(415, 250), (495, 330)], outline="#fbbf24", width=3)

        # Clearances
        draw.line([(50, 160), (50, 450)], fill="#f43f5e", width=2)
        draw.line([(130, 160), (50, 160)], fill="#f43f5e", width=1)
        draw.line([(130, 450), (50, 450)], fill="#f43f5e", width=1)
        draw.text((55, 300), "TƯỜNG SAU ≥ 300mm", fill="#f43f5e", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ CHI TIẾT LẮP ĐẶT GIÀN NÓNG VRV SÂN MÁI", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Bệ bê tông cao ≥ 150mm phòng ngập nước", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Lót chân lò xo/cao su giảm chấn triệt độ rung", fill="#4ade80", font=font_medium)
        draw.text((650, 300), f"• Khoảng cách tản nhiệt tường sau ≥ 300mm, trước ≥ 1000mm", fill="#4ade80", font=font_medium)

    elif idx <= 10: # Lắp đặt giàn lạnh FCU / Access Door
        if idx == 10: # Access Door Specific Blueprint
            # Ceiling Line
            draw.line([(80, 350), (620, 350)], fill="#cbd5e1", width=5)
            draw.text((100, 320), "TRẦN THẠCH CAO KHUNG XƯƠNG CHÌM", fill="#cbd5e1", font=font_bold)

            # Access Door Hatch Opening
            draw.rectangle([(250, 345), (450, 355)], fill="#fbbf24", outline="#d97706", width=3)
            draw.line([(250, 355), (250, 420), (450, 420), (450, 355)], fill="#fbbf24", width=2)
            draw.text((260, 380), "CỬA THĂM TRẦN 600x600mm", fill="#fbbf24", font=font_bold)

            # FCU Above Ceiling
            draw.rectangle([(200, 140), (500, 300)], fill="#1e293b", outline="#38bdf8", width=3)
            draw.text((250, 200), "DÀN LẠNH FCU GIẤU TRẦN", fill="#38bdf8", font=font_bold)

            draw.text((650, 200), f"BẢN VẼ CHI TIẾT CỬA THĂM TRẦN (ACCESS DOOR)", fill="#38bdf8", font=font_title)
            draw.text((650, 240), f"• Kích thước tiêu chuẩn: 450x450mm hoặc 600x600mm", fill="#4ade80", font=font_medium)
            draw.text((650, 270), f"• Bố trí ngay bên dưới động cơ quạt, hộp điện & van EEV", fill="#4ade80", font=font_medium)
            draw.text((650, 300), f"• Đảm bảo không gian thao tác bảo trì vệ sinh phin lọc", fill="#4ade80", font=font_medium)
        else: # Cassette / Ducted FCU Hanger
            # Concrete Slab Top
            draw.rectangle([(80, 100), (620, 140)], fill="#475569", outline="#94a3b8", width=2)
            draw.text((220, 115), "SÀN BÊ TÔNG CỐT THÉP", fill="#ffffff", font=font_bold)

            # Hanger Rods & FCU
            draw.line([(150, 140), (150, 300)], fill="#fbbf24", width=3)
            draw.line([(550, 140), (550, 300)], fill="#fbbf24", width=3)
            draw.rectangle([(120, 300), (580, 440)], fill="#1e293b", outline="#38bdf8", width=3)
            draw.text((240, 360), "DÀN LẠNH CASSETTE / FCU", fill="#38bdf8", font=font_bold)
            draw.text((80, 220), "TY REN M10/M12", fill="#fbbf24", font=font_small)
            draw.text((80, 240), "ĐAI ỐC KÉP (DOUBLE NUT)", fill="#4ade80", font=font_small)

            draw.text((650, 200), f"BẢN VẼ LẮP ĐẶT DÀN LẠNH & TY TREO HÃM ĐAI ỐC KÉP", fill="#38bdf8", font=font_title)
            draw.text((650, 240), f"• Ty ren mạ kẽm M10/M12 đệm vênh khóa đai ốc kép", fill="#4ade80", font=font_medium)
            draw.text((650, 270), f"• Đường ống thoát nước xả bẫy U-Trap hãm mùi hôi", fill="#4ade80", font=font_medium)

    elif idx <= 15: # Hàn ống đồng & Thổi Nitơ
        # Copper Pipe
        draw.rectangle([(100, 260), (600, 320)], fill="#b45309", outline="#f59e0b", width=3)
        draw.text((280, 285), "ỐNG ĐỒNG BẬC HÀN VẢY BẠC", fill="#ffffff", font=font_bold)

        # Nitrogen Purging Cylinder & Hose
        draw.rectangle([(80, 400), (160, 560)], fill="#0284c7", outline="#38bdf8", width=3)
        draw.text((90, 480), "BÌNH N2", fill="#ffffff", font=font_bold)
        draw.line([(120, 400), (120, 350), (200, 350), (200, 290)], fill="#38bdf8", width=3)
        draw.text((210, 340), "THỔI N2 KHÔ (0.02 - 0.05 MPa)", fill="#38bdf8", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ THỔI KHÍ NITƠ KHÔ BẢO VỆ MỐI HÀN ỐNG ĐỒNG", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Thổi N2 liên tục áp suất 0.02-0.05 MPa phòng oxit hóa", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Mối hàn ngấu 100% không muội đen bám lòng ống", fill="#4ade80", font=font_medium)

    elif idx <= 19: # Bọc bảo ôn cách nhiệt
        # Insulated Pipe Cross Section
        draw.ellipse([(150, 200), (450, 500)], fill="#581c87", outline="#a855f7", width=4) # Insulation
        draw.ellipse([(230, 280), (370, 420)], fill="#b45309", outline="#f59e0b", width=3) # Copper pipe
        draw.text((260, 345), "ỐNG ĐỒNG", fill="#ffffff", font=font_bold)
        draw.text((200, 160), "BẢO ÔN SUPERLON 25mm", fill="#a855f7", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ CHI TIẾT BỌC BẢO ÔN CÁCH NHIỆT ỐNG ĐỒNG", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Ống hơi bảo ôn dày 19-25mm, ống lỏng dày 13-19mm", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Dán keo Armaflex 520 giáp mối, quấn simili đè mí 50%", fill="#4ade80", font=font_medium)

    elif idx <= 24: # Thử áp suất Nitơ 3 giai đoạn
        # Riser Pipe Diagram with Manifold Gauge
        draw.line([(200, 150), (200, 550)], fill="#f59e0b", width=5)
        draw.rectangle([(300, 250), (480, 400)], fill="#1e293b", outline="#fbbf24", width=3)
        draw.ellipse([(320, 290), (380, 350)], fill="#0f172a", outline="#fbbf24", width=2)
        draw.ellipse([(400, 290), (460, 350)], fill="#0f172a", outline="#f43f5e", width=2)
        draw.text((310, 370), "ĐỒNG HỒ NÉN ÁP N2", fill="#fbbf24", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ SƠ ĐỒ THỬ ĐỘ KÍN ÁP SUẤT NITƠ 4.15 MPa", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Giai đoạn 1: 0.3 MPa; GD2: 1.5 MPa; GD3: 4.15 MPa (24h)", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Hiệu chỉnh nhiệt độ: 1°C thay đổi áp suất 0.01 MPa", fill="#4ade80", font=font_medium)

    elif idx <= 29: # Hút chân không Micron Gauge & Nạp gas
        # Vacuum Pump & Digital Scale
        draw.rectangle([(150, 350), (320, 500)], fill="#0284c7", outline="#38bdf8", width=3)
        draw.text((170, 420), "MÁY HÚT CHÂN KHÔNG", fill="#ffffff", font=font_bold)
        
        draw.rectangle([(380, 400), (550, 500)], fill="#d97706", outline="#fbbf24", width=3)
        draw.text((400, 440), "CÂN ĐIỆN TỬ DỊNH LƯỢNG", fill="#ffffff", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ HÚT CHÂN KHÔNG & NẠP GAS ĐỊNH LƯỢNG", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Hút chân không bằng Micron Gauge đạt < 500 Microns", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Nạp gas dạng lỏng bổ sung bằng cân điện tử chính xác", fill="#4ade80", font=font_medium)

    elif idx <= 33: # Đi dây điều khiển F1-F2
        # Wiring Daisy Chain Schematic
        draw.rectangle([(100, 200), (220, 320)], fill="#1e293b", outline="#38bdf8", width=3)
        draw.text((120, 250), "DÀN NÓNG", fill="#38bdf8", font=font_bold)
        
        draw.rectangle([(300, 200), (420, 320)], fill="#1e293b", outline="#4ade80", width=3)
        draw.text((320, 250), "FCU 01", fill="#4ade80", font=font_bold)

        draw.rectangle([(500, 200), (620, 320)], fill="#1e293b", outline="#4ade80", width=3)
        draw.text((520, 250), "FCU 02", fill="#4ade80", font=font_bold)

        draw.line([(220, 260), (300, 260), (420, 260), (500, 260)], fill="#fbbf24", width=4)
        draw.text((230, 230), "CÁP F1-F2 DAISY CHAIN", fill="#fbbf24", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ SƠ ĐỒ ĐẤU DÂY TÍN HIỆU ĐIỀU KHIỂN F1-F2", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Cáp chống nhiễu Shielded Twisted Pair 2x0.75mm²", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Đấu nối tiếp chuỗi Daisy Chain, cách ly cáp lực ≥ 300mm", fill="#4ade80", font=font_medium)

    elif idx <= 41: # Lắp đặt ống gió tôn mạ kẽm TDC / Van FD
        if idx == 39: # Fire Damper Detail
            draw.rectangle([(150, 150), (250, 500)], fill="#475569", outline="#94a3b8", width=4) # Wall
            draw.text((165, 300), "TƯỜNG CHÁY", fill="#ffffff", font=font_bold)

            draw.rectangle([(100, 280), (500, 380)], fill="#1e293b", outline="#38bdf8", width=3) # Duct
            draw.rectangle([(180, 270), (220, 390)], fill="#f43f5e", outline="#fbbf24", width=3) # FD Damper
            draw.text((240, 320), "VAN CHẶN LỬA (FIRE DAMPER FD)", fill="#f43f5e", font=font_bold)

            draw.text((650, 200), f"BẢN VẼ CHI TIẾT LẮP VAN CHẶN LỬA (FD) XUYÊN TƯỜNG", fill="#38bdf8", font=font_title)
            draw.text((650, 240), f"• Thân van FD nằm trong bề dày tường ngăn cháy", fill="#4ade80", font=font_medium)
            draw.text((650, 270), f"• Cơ cấu cầu chì nhiệt tự động đóng khi nhiệt độ > 70°C", fill="#4ade80", font=font_medium)
        else: # Ductwork & Flange
            draw.rectangle([(120, 220), (550, 420)], fill="#1e293b", outline="#38bdf8", width=3)
            draw.rectangle([(320, 200), (350, 440)], fill="#d97706", outline="#fbbf24", width=3)
            draw.text((180, 310), "ỐNG GIÓ TÔN GI MẠ KẼM", fill="#38bdf8", font=font_bold)
            draw.text((360, 230), "MẶT BÍCH TDC & NẸP C", fill="#fbbf24", font=font_bold)

            draw.text((650, 200), f"BẢN VẼ LẮP ĐẶT ỐNG GIÓ TÔN MẠ KẼM BÍCH TDC", fill="#38bdf8", font=font_title)
            draw.text((650, 240), f"• Độ dày tôn mạ kẽm chuẩn TCVN 5687:2010", fill="#4ade80", font=font_medium)
            draw.text((650, 270), f"• Dán gioăng mút kín bích, khoảng cách kẹp bích ≤ 150mm", fill="#4ade80", font=font_medium)

    elif idx <= 46: # Lắp đặt Quạt gió thông gió
        # Centrifugal Smoke Fan
        draw.rectangle([(150, 250), (450, 480)], fill="#1e293b", outline="#38bdf8", width=3)
        draw.ellipse([(200, 280), (350, 430)], fill="#0f172a", outline="#fbbf24", width=3)
        draw.text((230, 350), "QUẠT LY TÂM", fill="#fbbf24", font=font_bold)

        # Spring Isolators Bottom
        draw.rectangle([(180, 480), (230, 520)], fill="#d97706", outline="#fbbf24", width=2)
        draw.rectangle([(370, 480), (420, 520)], fill="#d97706", outline="#fbbf24", width=2)

        draw.text((650, 200), f"BẢN VẼ LẮP ĐẶT QUẠT HÚT KHÓI SỰ CỐ LY TÂM", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Đặt quạt trên lò xo giảm chấn triệt tiêu độ rung", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Nối ống gió bằng khớp mềm bạt chịu nhiệt 300°C", fill="#4ade80", font=font_medium)

    else: # Thử kín ống gió SMACNA/DW144
        # Duct Leakage Test Rig
        draw.rectangle([(100, 250), (450, 410)], fill="#1e293b", outline="#38bdf8", width=3)
        draw.text((180, 320), "ĐOẠN ỐNG GIÓ BỊT KÍN THỬ ÁP", fill="#38bdf8", font=font_bold)

        draw.rectangle([(480, 280), (580, 380)], fill="#0284c7", outline="#fbbf24", width=3)
        draw.text((490, 320), "QUẠT THỬ ÁP", fill="#fbbf24", font=font_bold)

        draw.text((650, 200), f"BẢN VẼ THỬ KÍN ỐNG GIÓ THEO SMACNA / DW144", fill="#38bdf8", font=font_title)
        draw.text((650, 240), f"• Bịt kín 2 đầu, nén quạt tạo áp đo lưu lượng khí rò rỉ", fill="#4ade80", font=font_medium)
        draw.text((650, 270), f"• Kiểm tra bằng máy tạo khói hoặc quét dung dịch xà phòng", fill="#4ade80", font=font_medium)

    png_filename = f"hvac_cad_{idx}.png"
    png_filepath = os.path.join(data_dir, png_filename)
    img.save(png_filepath, "PNG")

    # Update question image path to PNG
    q["image"] = f"data/{png_filename}"

print("✅ Generated 50 high-res tailored CAD Blueprints.")

# Update questions.js
new_js = f"// File questions.js - Tích hợp đầy đủ 50 câu hỏi Tự luận - Thực hành ĐHTG đi kèm Bản vẽ CAD Shop Drawing Tailored 1:1\nconst QUESTIONS = {json.dumps(questions, ensure_ascii=False, indent=2)};\n"

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
