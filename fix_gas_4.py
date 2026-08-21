import re

text = open('google_apps_script.js', encoding='utf-8').read()

old_err = 'responseData = { status: "error", message: "Mã Ca Thi không hợp lệ!" };'
new_err = 'responseData = { status: "error", message: "Chi tiết lỗi: category=" + category + " | isTuyendung=" + isTuyendung + " | targetPin=" + targetPin + " | inputPin=" + pin };'

text = text.replace(old_err, new_err)

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
