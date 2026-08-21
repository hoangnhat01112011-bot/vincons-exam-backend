import re

text = open('admin.html', encoding='utf-8').read()

old_display = """                    <div style="background: #fff9c4; border: 2px solid #f1c40f; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 20px;">
                        <h4 style="color: #d35400; margin-top: 0;">MÃ CA THI HIỆN TẠI</h4>
                        <div id="currentExamPin" style="font-size: 36px; font-weight: bold; color: #e67e22; letter-spacing: 5px;">----</div>
                    </div>"""

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

text = text.replace(old_display, new_display)

old_inputs = """                <form id="settingsForm" onsubmit="handleUpdatePin(event)" style="border-top: 1px solid #eee; padding-top: 20px;">
                    <div class="form-group">
                        <label for="newExamPin">Mã Ca Thi Mới</label>
                        <input type="text" id="newExamPin" class="form-control" placeholder="Nhập mã mới 8 chữ số (ví dụ: 68686868)" minlength="8" maxlength="8">
                    </div>"""

new_inputs = """                <form id="settingsForm" onsubmit="handleUpdatePin(event)" style="border-top: 1px solid #eee; padding-top: 20px;">
                    <div class="form-group">
                        <label for="newExamPin">Mã Ca Nâng Bậc/Định Kỳ Mới</label>
                        <input type="text" id="newExamPin" class="form-control" placeholder="Mã 8 chữ số (VD: 68686868)" minlength="8" maxlength="8">
                    </div>
                    <div class="form-group">
                        <label for="newExamPinTuyendung">Mã Ca Tuyển Dụng Mới</label>
                        <input type="text" id="newExamPinTuyendung" class="form-control" placeholder="Mã 8 chữ số (VD: 88888888)" minlength="8" maxlength="8">
                    </div>"""

text = text.replace(old_inputs, new_inputs)

text = text.replace(
    "document.getElementById('currentExamPin').textContent = data.data.exam_pin || \"68686868\";",
    "document.getElementById('currentExamPin').textContent = data.data.exam_pin || \"68686868\";\n                        document.getElementById('currentExamPinTuyendung').textContent = data.data.exam_pin_tuyendung || \"88888888\";"
)
text = text.replace(
    "document.getElementById('newExamPin').value = data.data.exam_pin || \"68686868\";",
    "document.getElementById('newExamPin').value = data.data.exam_pin || \"68686868\";\n                        document.getElementById('newExamPinTuyendung').value = data.data.exam_pin_tuyendung || \"88888888\";"
)
text = text.replace(
    "document.getElementById('currentExamPin').textContent = \"68686868\";",
    "document.getElementById('currentExamPin').textContent = \"68686868\";\n                        document.getElementById('currentExamPinTuyendung').textContent = \"88888888\";"
)

text = text.replace(
    "const newPin = document.getElementById('newExamPin').value.trim();",
    "const newPin = document.getElementById('newExamPin').value.trim();\n            const newPinTuyendung = document.getElementById('newExamPinTuyendung').value.trim();"
)
text = text.replace(
    "if (newPin) payload.exam_pin = newPin;",
    "if (newPin) payload.exam_pin = newPin;\n            if (newPinTuyendung) payload.exam_pin_tuyendung = newPinTuyendung;"
)

open('admin.html', 'w', encoding='utf-8').write(text)
