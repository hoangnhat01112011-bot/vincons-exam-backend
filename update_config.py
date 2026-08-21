import re

text = open('js/config.js', encoding='utf-8').read()
# Replace the bad one first
bad_str = r"if \(match\) params\.pin = decodeURIComponent\(match\[1\]\);\\n\s*const catMatch =\s*path\.match\(/category=\(\[\^&\]\+\)/\);\\n\s*if \(catMatch\) params\.category = decodeURIComponent\(catMatch\[1\]\);"
text = re.sub(bad_str, 'if (match) params.pin = decodeURIComponent(match[1]);\n                const catMatch = path.match(/category=([^&]+)/);\n                if (catMatch) params.category = decodeURIComponent(catMatch[1]);', text)
open('js/config.js', 'w', encoding='utf-8').write(text)
