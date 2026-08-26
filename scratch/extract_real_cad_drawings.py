import win32com.client
import os
import time
import json
import shutil
from PIL import Image

# Directories
dwg_dir = r'D:\LINH TINH\AI\Khung chương trình đào tạo nghề Điện - CTN\De thi Ý gửi\phần đáp án\Điều hòa thông gió'
data_dir = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\data'
os.makedirs(data_dir, exist_ok=True)

# List of real DWG files provided by user
dwg_files = [
    os.path.join(dwg_dir, 'BẢN VẼ SHOP HỆ THỐNG ĐIỀU HÒA THÔNG GIÓ SHOP1+SHOP2 MỞ RỘNG.dwg'),
    os.path.join(dwg_dir, '2024.07.17 MAT BANG THONG GIO  KHOI INDOORGAME.dwg'),
    os.path.join(dwg_dir, r'240613_VYHP.HTCQ.BDT_TKTC.DHTG_Hoan thien Nha don tiep Ben du thuyen (c.n KT240610)_Rev1\VY.BDT-VTK-DH.dwg'),
    os.path.join(dwg_dir, r'240613_VYHP.HTCQ.BDT_TKTC.DHTG_Hoan thien Nha don tiep Ben du thuyen (c.n KT240610)_Rev1\VTK_A2.dwg'),
    os.path.join(dwg_dir, r'240613_VYHP.HTCQ.BDT_TKTC.DHTG_Hoan thien Nha don tiep Ben du thuyen (c.n KT240610)_Rev1\Xref_VY.BDT-VTK-1100_MBKT.dwg')
]

print("Starting AutoCAD COM Automation...")
acad = win32com.client.Dispatch('AutoCAD.Application')
acad.Visible = True

exported_images = []

for dwg_idx, dwg_path in enumerate(dwg_files, start=1):
    if not os.path.exists(dwg_path):
        print(f"Skipping missing DWG: {dwg_path}")
        continue
    
    print(f"Opening AutoCAD DWG [{dwg_idx}/5]: {os.path.basename(dwg_path)}...")
    doc = acad.Documents.Open(dwg_path)
    time.sleep(2)
    
    # Zoom Extents to capture full drawing layout
    acad.ZoomExtents()
    time.sleep(1)
    
    # Export full layout as high-res PNG image
    out_png = os.path.join(data_dir, f"real_dwg_full_{dwg_idx}.png")
    
    try:
        # Use AutoCAD Export command or Plot to PNG
        doc.Export(out_png, "PNG", doc.ActiveLayout)
        print(f"✅ Exported full DWG layout to: {out_png}")
        exported_images.append(out_png)
    except Exception as e:
        print(f"Export method note: {e}")
        # Alternative AutoCAD command plot export
        try:
            doc.SendCommand(f'-EXPORT PNG "{out_png}"\n')
            time.sleep(2)
            if os.path.exists(out_png):
                print(f"✅ Exported via SendCommand to: {out_png}")
                exported_images.append(out_png)
        except Exception as e2:
            print(f"SendCommand error: {e2}")

    doc.Close(False)

print(f"Total exported DWG full sheets: {len(exported_images)}")
