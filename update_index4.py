import re

text = open('index.html', encoding='utf-8').read()
text = text.replace("CONFIG.apiCall('/api/auth/verify-pin?pin=' + encodeURIComponent(examPin))", "CONFIG.apiCall('/api/auth/verify-pin?pin=' + encodeURIComponent(examPin) + '&category=' + encodeURIComponent(examCategory))")
open('index.html', 'w', encoding='utf-8').write(text)
