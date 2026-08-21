import re

text = open('google_apps_script.js', encoding='utf-8').read()

pattern = r'if \(action === "verifyExamPin"\) \{.*?\}\s*(?=else if \(action === "getSettings"\))'

new_verify = """if (action === "verifyExamPin") {
        var pin = e.parameter.pin;
        var category = e.parameter.category || "";
        var settings = getSettings();
        
        var targetPin = settings.exam_pin;
        // Kiem tra xem category co chua tu tuyen dung khong
        var isTuyendung = false;
        var catLower = category.toLowerCase();
        if (catLower.indexOf("tuyển") !== -1 || catLower.indexOf("tuy\\u1ec3n") !== -1 || catLower.indexOf("tuyA") !== -1 || catLower.indexOf("tuyen") !== -1) {
            isTuyendung = true;
        }
        
        if (isTuyendung) {
            targetPin = settings.exam_pin_tuyendung || settings.exam_pin;
        }
        
        if (String(pin) === String(targetPin)) {
          responseData = { status: "success", message: "Mã hợp lệ", review_limit: settings.review_limit };
        } else {
          responseData = { status: "error", message: "Mã Ca Thi không hợp lệ!" };
        }
      }
      """

text = text[:text.find('if (action === "verifyExamPin") {')] + new_verify + text[text.find('else if (action === "getSettings") {'):]

if 'settings.exam_pin_tuyendung = String(data[i].value);' not in text:
    text = text.replace(
        'if (data[i].key === "exam_pin") {',
        'if (data[i].key === "exam_pin") {\n        settings.exam_pin = String(data[i].value);\n      } else if (data[i].key === "exam_pin_tuyendung") {\n        settings.exam_pin_tuyendung = String(data[i].value);'
    )

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
