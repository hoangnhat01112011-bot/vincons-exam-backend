import re

text = open('index.html', encoding='utf-8').read()

new_html = """
                    <option value="all">Ngẫu nhiên 30 câu (Cả Bậc 2 & 3)</option>
                    <option value="Thợ Điện Bậc 2">Thợ Điện Bậc 2 (30 câu)</option>
                    <option value="Thợ Điện Bậc 3">Thợ Điện Bậc 3 (30 câu)</option>
"""

# Tìm phần gán cho Điện
pattern = r"if \(val === 'Điện'\) \{\s*examSet\.innerHTML = `[\s\S]*?`;"
replacement = f"if (val === 'Điện') {{\n                examSet.innerHTML = `{new_html}                `;"

text = re.sub(pattern, replacement, text)

open('index.html', 'w', encoding='utf-8').write(text)
