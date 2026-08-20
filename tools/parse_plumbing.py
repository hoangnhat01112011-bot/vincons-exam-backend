import csv
import json
import os

def parse_plumbing():
    csv_file = 'NganHangCauHoi_Mau.csv'
    if not os.path.exists(csv_file): return
    questions = []
    current_level = 'Thợ CTN Bậc 2'
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f, delimiter=';')
        for row in reader:
            if not row: continue
            first_col = row[0].strip()
            if 'Bậc 3' in first_col or 'bậc 3' in first_col:
                current_level = 'Thỏ CTN Bậc 3'
                continue
            if 'Bậc 2' in first_col or 'bậc 2' in first_col:
                current_level = 'Thợ CTN Bậc 2'
                continue
            if first_col.isdigit():
                if len(row) < 4: continue
                question_text = row[1].strip()
                options_raw = row[2].strip()
                correct_letter = row[3].strip().upper()
                if correct_letter not in ['A', 'B', 'C', 'D']: continue
                options_lines = [line.strip() for line in options_raw.split('\n') if line.strip()]
                options = []
                for line in options_lines:
                    if len(line) >= 3 and line[0] in ['A', 'B', 'C', 'D'] and line[1] in ['.', ':', ')']:
                        options.append(line[2:].strip())
                    else:
                        options.append(line)
                while len(options) < 4: options.append('')
                correct_index = {'A': 0, 'B': 1, 'C': 2, 'D': 3}.get(correct_letter, 0)
                q = {
                    'id': f'q_ctn_{current_level[-1]}_{first_col}',
                    'category': 'Lí thuyẽt - Cấp thoát nước',
                    'exam_set': current_level,
                    'type': 'multiple_choice',
                    'question': question_text,
                    'options': options[:4],
                    'correct_index': correct_index
                }
                questions.append(q)
    print(f'Parsed {len(questions)} plumbing questions.')
    
    js_file = '../questions_base.js'
    with open(js_file, 'r', encoding='utf-8-sig') as f: js_content = f.read()
    start_idx = js_content.find('[')
    end_idx = js_content.rfind(']')
    json_str = js_content[start_idx:end_idx+1]
    existing_questions = json.loads(json_str)
    
    existing_questions = [q for q in existing_questions if 'Cấp thoát nước' not in q.get('category', '')]
    existing_questions.extend(questions)
    
    new_js = f'// File này được tạo tự động từ NganHangCauHoi_Mau.csv\nconst QUESTIONS = {json.dumps(existing_questions, ensure_ascii=False, indent=2)};\n'
    
    out_file = '../questions.js'
    with open(out_file, 'w', encoding='utf-8') as f: 
        f.write(new_js)
    print(f'Successfully updated questions.js with {len(existing_questions)} total questions.')

if __name__ == '__main__':
    parse_plumbing()
