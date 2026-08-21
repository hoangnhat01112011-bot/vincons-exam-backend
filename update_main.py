import re

text = open('main.py', encoding='utf-8').read()

old_verify = """        if parsed.path == '/api/auth/verify-pin':
            query = urllib.parse.parse_qs(parsed.query)
            pin = query.get('pin', [''])[0]
            settings = load_settings()
            if pin == settings.get('exam_pin', '68686868'):
                self.send_json({"status": "success", "message": "Mã hợp lệ"})"""

new_verify = """        if parsed.path == '/api/auth/verify-pin':
            query = urllib.parse.parse_qs(parsed.query)
            pin = query.get('pin', [''])[0]
            category = query.get('category', [''])[0]
            settings = load_settings()
            
            target_pin = settings.get('exam_pin', '68686868')
            if 'tuyển dụng' in category.lower():
                target_pin = settings.get('exam_pin_tuyendung', '88888888')
                
            if pin == target_pin:
                self.send_json({"status": "success", "message": "Mã hợp lệ"})"""

text = text.replace(old_verify, new_verify)

old_set = """            settings['exam_pin'] = data.get('exam_pin', settings['exam_pin'])
            save_settings(settings)"""

new_set = """            settings['exam_pin'] = data.get('exam_pin', settings.get('exam_pin'))
            if 'exam_pin_tuyendung' in data:
                settings['exam_pin_tuyendung'] = data['exam_pin_tuyendung']
            save_settings(settings)"""

text = text.replace(old_set, new_set)

open('main.py', 'w', encoding='utf-8').write(text)
