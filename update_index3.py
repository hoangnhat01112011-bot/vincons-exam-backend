import re

text = open('index.html', encoding='utf-8').read()

# 1. Remove the previously added examCategory select block
pattern_select = r'<div class="form-group">\s*<label for="examCategory">HÌNH THỨC THI \(\*\)</label>\s*<select id="examCategory" class="form-control" required>\s*<option value="" disabled selected>-- Chọn hình thức thi --</option>\s*<option value="Thi định kỳ">Thi định kỳ</option>\s*<option value="Thi tuyển dụng đầu vào - Thợ Bậc 2">Thi tuyển dụng đầu vào - Thợ Bậc 2</option>\s*<option value="Thi tuyển dụng đầu vào - Thợ Bậc 3">Thi tuyển dụng đầu vào - Thợ Bậc 3</option>\s*</select>\s*</div>'
text = re.sub(pattern_select, '', text)

# 2. Add radio buttons and wrapper
radio_html = """
                <div class="form-group" style="text-align: center; margin-bottom: 25px;">
                    <label style="font-weight: bold; color: var(--primary); font-size: 16px; display: block; margin-bottom: 15px;">VUI LÒNG CHỌN HÌNH THỨC THI:</label>
                    <div style="display: flex; flex-direction: column; gap: 15px; align-items: flex-start; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <label style="cursor: pointer; display: flex; align-items: center; gap: 10px; font-weight: 500;">
                            <input type="radio" name="examCategoryRadio" value="Thi tuyển dụng đầu vào - Thợ Bậc 2" onchange="showMainForm()"> Thi tuyển dụng đầu vào - Thợ Bậc 2
                        </label>
                        <label style="cursor: pointer; display: flex; align-items: center; gap: 10px; font-weight: 500;">
                            <input type="radio" name="examCategoryRadio" value="Thi tuyển dụng đầu vào - Thợ Bậc 3" onchange="showMainForm()"> Thi tuyển dụng đầu vào - Thợ Bậc 3
                        </label>
                        <label style="cursor: pointer; display: flex; align-items: center; gap: 10px; font-weight: 500;">
                            <input type="radio" name="examCategoryRadio" value="Thi nâng bậc" onchange="showMainForm()"> Thi nâng bậc (Định kỳ)
                        </label>
                    </div>
                </div>
                
                <div id="mainFormFields" style="display: none;">
"""

text = text.replace('<div class="form-group">\n                    <label for="candidateName">Họ và tên thí sinh (*)</label>', radio_html + '\n                    <div class="form-group">\n                    <label for="candidateName">Họ và tên thí sinh (*)</label>')

# 3. Close the wrapper div just before the </form> tag
text = text.replace('</form>', '</div>\n            </form>')

# 4. Add the showMainForm function to the script
script_addition = """
        function showMainForm() {
            document.getElementById('mainFormFields').style.display = 'block';
        }
"""
text = text.replace('function toggleExamSetGroup(val) {', script_addition + '\n        function toggleExamSetGroup(val) {')

# 5. Update validation JS to read from the radio button instead of the old select
text = text.replace(
    "const examCategory = document.getElementById('examCategory').value;",
    "const examCategoryRadio = document.querySelector('input[name=\"examCategoryRadio\"]:checked');\n            const examCategory = examCategoryRadio ? examCategoryRadio.value : '';"
)

open('index.html', 'w', encoding='utf-8').write(text)
