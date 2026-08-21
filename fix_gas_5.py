import re

text = open('google_apps_script.js', encoding='utf-8').read()

# Remove the line `settings.exam_pin = String(data[i].value);` that appears right after `settings.exam_pin_tuyendung = String(data[i].value);`
text = re.sub(r'settings\.exam_pin_tuyendung = String\(data\[i\]\.value\);\s*settings\.exam_pin = String\(data\[i\]\.value\);', 'settings.exam_pin_tuyendung = String(data[i].value);', text)

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
