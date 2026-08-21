import re

text = open('admin.html', encoding='utf-8').read()

new_display = """                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div style="flex: 1; background: #fff9c4; border: 2px solid #f1c40f; border-radius: 8px; padding: 15px; text-align: center;">
                            <h4 style="color: #d35400; margin-top: 0; font-size: 14px;">MÃ CA NÂNG BẬC/ĐỊNH KỲ</h4>
                            <div id="currentExamPin" style="font-size: 28px; font-weight: bold; color: #e67e22; letter-spacing: 3px;">----</div>
                        </div>
                        <div style="flex: 1; background: #e0f7fa; border: 2px solid #00bcd4; border-radius: 8px; padding: 15px; text-align: center;">
                            <h4 style="color: #00838f; margin-top: 0; font-size: 14px;">MÃ CA TUYỂN DỤNG</h4>
                            <div id="currentExamPinTuyendung" style="font-size: 28px; font-weight: bold; color: #0097a6; letter-spacing: 3px;">----</div>
                        </div>
                    </div>"""

text = re.sub(r'<div style="background: rgba\(241, 196, 15, 0\.1\);.*?</label>\s*<input type="text" id="newExamPin".*?</div>', new_display + """
            <form id="settingsForm" onsubmit="handleUpdatePin(event)" style="border-top: 1px solid #eee; padding-top: 20px;">
                <div class="form-group">
                    <label for="newExamPin">Mã Ca Nâng Bậc/Định Kỳ Mới</label>
                    <input type="text" id="newExamPin" class="form-control" placeholder="Mã 8 chữ số (VD: 68686868)" minlength="8" maxlength="8">
                </div>
                <div class="form-group">
                    <label for="newExamPinTuyendung">Mã Ca Tuyển Dụng Mới</label>
                    <input type="text" id="newExamPinTuyendung" class="form-control" placeholder="Mã 8 chữ số (VD: 88888888)" minlength="8" maxlength="8">
                </div>""", text, flags=re.DOTALL)

open('admin.html', 'w', encoding='utf-8').write(text)
