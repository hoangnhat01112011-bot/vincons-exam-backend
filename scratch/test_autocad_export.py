import win32com.client
import os

dwg_path = r'D:\LINH TINH\AI\Khung chương trình đào tạo nghề Điện - CTN\De thi Ý gửi\phần đáp án\Điều hòa thông gió\240613_VYHP.HTCQ.BDT_TKTC.DHTG_Hoan thien Nha don tiep Ben du thuyen (c.n KT240610)_Rev1\VTK_A2.dwg'
out_bmp = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\data\test_cad.bmp'

acad = win32com.client.Dispatch('AutoCAD.Application')
acad.Visible = True

doc = acad.Documents.Open(dwg_path)
print("Opened DWG successfully!")

# Active layout export
doc.SaveAs(out_bmp, 1) # BMP format
print(f"Exported BMP: {os.path.exists(out_bmp)}")

doc.Close(False)
