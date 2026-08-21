import re

text = open('google_apps_script.js', encoding='utf-8').read()
old_verify = """      if (action === "verifyExamPin") {
        var pin = e.parameter.pin;
        var settings = getSettings();
        if (String(pin) === String(settings.exam_pin)) {
          responseData = { status: "success", message: "Mã hợp lệ", review_limit: settings.review_limit };
        } else {
          responseData = { status: "error", message: "Mã Ca Thi không hợp lệ!" };
        }
      }"""
new_verify = """      if (action === "verifyExamPin") {
        var pin = e.parameter.pin;
        var category = e.parameter.category || "";
        var settings = getSettings();
        
        var targetPin = settings.exam_pin;
        if (category.indexOf("tuyển dụng") !== -1 || category.indexOf("Tuyển dụng") !== -1 || category.indexOf("Tuy\\u1ec3n d\\u1ee5ng") !== -1) {
            targetPin = settings.exam_pin_tuyendung || "88888888";
        }
        
        if (String(pin) === String(targetPin)) {
          responseData = { status: "success", message: "Mã hợp lệ", review_limit: settings.review_limit };
        } else {
          responseData = { status: "error", message: "Mã Ca Thi không hợp lệ!" };
        }
      }"""
text = text.replace(old_verify, new_verify)

text = text.replace('if (settingsObj.exam_pin !== undefined) updateOrAdd("exam_pin", settingsObj.exam_pin);', 'if (settingsObj.exam_pin !== undefined) updateOrAdd("exam_pin", settingsObj.exam_pin);\n    if (settingsObj.exam_pin_tuyendung !== undefined) updateOrAdd("exam_pin_tuyendung", settingsObj.exam_pin_tuyendung);')

open('google_apps_script.js', 'w', encoding='utf-8').write(text)
