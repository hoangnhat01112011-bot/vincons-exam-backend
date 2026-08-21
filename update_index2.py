import re

text = open('index.html', encoding='utf-8').read()

# 1. Thêm examCategory HTML
category_html = """
                <div class="form-group">
                    <label for="examCategory">HÌNH THỨC THI (*)</label>
                    <select id="examCategory" class="form-control" required>
                        <option value="" disabled selected>-- Chọn hình thức thi --</option>
                        <option value="Thi định kỳ">Thi định kỳ</option>
                        <option value="Thi tuyển dụng đầu vào - Thợ Bậc 2">Thi tuyển dụng đầu vào - Thợ Bậc 2</option>
                        <option value="Thi tuyển dụng đầu vào - Thợ Bậc 3">Thi tuyển dụng đầu vào - Thợ Bậc 3</option>
                    </select>
                </div>
"""

# Tìm form-group chứa candidateJob và chèn lên trước
pattern_job = r'(\s*<div class="form-group">\s*<label for="candidateJob">)'
text = re.sub(pattern_job, category_html + r'\1', text)

# 2. Cập nhật mã pin maxlength và placeholder
text = text.replace('maxlength="10"', 'maxlength="8"')
text = text.replace('placeholder="****"', 'placeholder="********"')

# 3. Cập nhật JS validation
text = text.replace(
    "const job = document.getElementById('candidateJob').value;",
    "const examCategory = document.getElementById('examCategory').value;\n            const job = document.getElementById('candidateJob').value;"
)

text = text.replace(
    "if (!name || !id || !job || !discipline || !examType || !examMode || !examPin) {",
    "if (!name || !id || !examCategory || !job || !discipline || !examType || !examMode || !examPin) {"
)

text = text.replace(
    "name: name,\n                            id: id,",
    "name: name,\n                            id: id,\n                            examCategory: examCategory,"
)

open('index.html', 'w', encoding='utf-8').write(text)
