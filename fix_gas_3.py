import re

text = open('google_apps_script.js', encoding='utf-8').read()

buggy_str = """      } else if (data[i].key === "exam_pin_tuyendung") {
        settings.exam_pin_tuyendung = String(data[i].value);
        settings.exam_pin = String(data[i].value);"""
fixed_str = """      } else if (data[i].key === "exam_pin_tuyendung") {
        settings.exam_pin_tuyendung = String(data[i].value);"""

text = text.replace(buggy_str, fixed_str)

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
