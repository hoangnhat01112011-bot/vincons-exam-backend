import re

text = open('admin.html', encoding='utf-8').read()
text = text.replace('placeholder="Nhập mã mới (ví dụ: 1234, 8888)"', 'placeholder="Nhập mã mới 8 chữ số (ví dụ: 68686868)" minlength="8" maxlength="8"')
open('admin.html', 'w', encoding='utf-8').write(text)
