import re

text = open('index.html', encoding='utf-8').read()

text = text.replace('<script src="js/config.js"></script>', '<script src="js/config.js?v=3"></script>')
text = text.replace('<script src="js/app.js"></script>', '<script src="js/app.js?v=3"></script>')

open('index.html', 'w', encoding='utf-8').write(text)

text = open('admin.html', encoding='utf-8').read()
text = text.replace('<script src="js/config.js"></script>', '<script src="js/config.js?v=3"></script>')
open('admin.html', 'w', encoding='utf-8').write(text)
