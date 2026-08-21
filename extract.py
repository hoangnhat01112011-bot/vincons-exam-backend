text = open('admin.html', encoding='utf-8').read()
idx1 = text.find('<div style="background: rgba(241, 196, 15, 0.1);')
idx2 = text.find('</div>', text.find('----')) + 6
idx3 = text.find('</div>', idx2) + 6
out1 = text[idx1:idx3]

idx4 = text.find('<form id="settingsForm"')
idx5 = text.find('</div>', text.find('newExamPin')) + 6
out2 = text[idx4:idx5]

open('out.txt', 'w', encoding='utf-8').write(out1 + "\n====\n" + out2)
