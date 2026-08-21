import re

text = open('index.html', encoding='utf-8').read()
text = text.replace('js/config.js?v=3', 'js/config.js?v=4')
text = text.replace('js/app.js?v=3', 'js/app.js?v=4')
open('index.html', 'w', encoding='utf-8').write(text)

text = open('admin.html', encoding='utf-8').read()
text = text.replace('js/config.js?v=3', 'js/config.js?v=4')
open('admin.html', 'w', encoding='utf-8').write(text)
