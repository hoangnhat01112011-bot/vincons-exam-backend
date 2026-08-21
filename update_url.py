import re

text = open('js/config.js', encoding='utf-8').read()

old_url = 'https://script.google.com/macros/s/AKfycbxNLfSOqSJhGfUNzD3XUSyqWhLYsWiqgsakmBfUiLDrtbfwt1jCVevL-6ylbJMhV8CfJw/exec'
new_url = 'https://script.google.com/macros/s/AKfycbw29tgNOEDGZROO5fA6x1F4_oDCI_jlHYUGzQ2Do-ftp5-YwOSElNmFTf0UsxmoqGmJ/exec'

text = text.replace(old_url, new_url)

open('js/config.js', 'w', encoding='utf-8').write(text)
