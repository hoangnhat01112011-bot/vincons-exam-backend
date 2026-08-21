import re

text = open('google_apps_script.js', encoding='utf-8').read()

old_if = 'if (catLower.indexOf("tuyển") !== -1 || catLower.indexOf("tuy\\u1ec3n") !== -1 || catLower.indexOf("tuyA") !== -1 || catLower.indexOf("tuyen") !== -1) {'
new_if = 'if (catLower.indexOf("tuy") !== -1) {'

text = text.replace(old_if, new_if)

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
