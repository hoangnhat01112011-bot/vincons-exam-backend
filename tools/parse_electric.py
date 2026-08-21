import csv
import json
import random

def parse_electric():
    with open('NganHangCauHoi_Mau.csv', 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f, delimiter=';')
        rows = list(reader)
        
    raw_questions = []
    current_q = None
    
    for row in rows:
        if not row: continue
        first_col = row[0].strip()
        if first_col.isdigit():
            if current_q: raw_questions.append(current_q)
            current_q = {'id': first_col, 'text': row[1].strip(), 'options': [], 'correct': None}
            if len(row) > 2 and row[2].strip():
                opt_text = row[2].strip()
                if '\n' in opt_text:
                    opts = [o.strip() for o in opt_text.split('\n') if o.strip()]
                    current_q['options'].extend(opts)
                    if len(row) > 3 and row[3].strip(): current_q['correct'] = row[3].strip()
                else:
                    current_q['options'].append(opt_text)
                    if len(row) > 3 and row[3].strip(): current_q['correct'] = row[3].strip()
        elif first_col == '' and current_q:
            if len(row) > 2 and row[2].strip():
                current_q['options'].append(row[2].strip())
            if len(row) > 3 and row[3].strip() and not current_q['correct']:
                current_q['correct'] = row[3].strip()

    if current_q: raw_questions.append(current_q)
    print('Parsed', len(raw_questions), 'raw questions.')
    
    final_questions = []
    for rq in raw_questions:
        opts = []
        for o in rq['options']:
            if len(o) >= 2 and o[1] in ['.', ')']: opts.append(o[2:].strip())
            elif len(o) >= 3 and o[0] in ['A','B','C','D'] and o[1] in ['.', ')', '≥', '≤']:
                if o[1] in ['≥', '≤']: opts.append(o[1:].strip())
                else: opts.append(o[2:].strip())
            else: opts.append(o)
                
        corr = rq['correct']
        corr_idx = 0
        if corr in ['A', 'B', 'C', 'D']: corr_idx = {'A':0, 'B':1, 'C':2, 'D':3}[corr]
        
        while len(opts) < 4: opts.append('')
            
        final_questions.append({
            'q_id': rq['id'],
            'question': rq['text'],
            'options': opts[:4],
            'correct_index': corr_idx
        })
        
    print('Processed', len(final_questions), 'questions.')
    
    sets = []
    for i in range(1, 11):
        set_name = f'Đề số {i:02d}'
        sample = random.sample(final_questions, 20)
        for sq in sample:
            qid = sq['q_id']
            q = {
                'id': f'q_el3_{i:02d}_{qid}',
                'category': 'Lý thuyết - Thợ Điện Bậc 3',
                'exam_set': set_name,
                'type': 'multiple_choice',
                'question': sq['question'],
                'options': sq['options'],
                'correct_index': sq['correct_index']
            }
            sets.append(q)
            
    print('Generated', len(sets), 'questions for 10 sets.')
    
    js_file = '../questions.js'
    with open(js_file, 'r', encoding='utf-8') as f: js_content = f.read()
    start_idx = js_content.find('[')
    end_idx = js_content.rfind(']')
    existing_questions = json.loads(js_content[start_idx:end_idx+1])
    
    existing_questions = [q for q in existing_questions if 'Thợ Điện Bậc 3' not in q.get('category', '')]
    existing_questions.extend(sets)
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write('// File này được tạo tự động từ NganHangCauHoi_Mau.csv\nconst QUESTIONS = ' + json.dumps(existing_questions, ensure_ascii=False, indent=2) + ';\n')
        
    print('Successfully updated questions.js')

if __name__ == '__main__':
    parse_electric()
