var ADMIN_PIN = "VINCONS2026";

function getOrCreateSheet(sheetName, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
  }
  return sheet;
}

function getSheetData(sheet) {
  var rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  var headers = rows[0];
  var data = [];
  for (var i = 1; i < rows.length; i++) {
    var obj = {};
    var emptyRow = true;
    for (var j = 0; j < headers.length; j++) {
      if (rows[i][j] !== "") emptyRow = false;
      obj[headers[j]] = rows[i][j];
    }
    if (!emptyRow) data.push(obj);
  }
  return data;
}

function getSettings() {
  var sheet = getOrCreateSheet("settings", ["key", "value"]);
  var data = getSheetData(sheet);
  var settings = { exam_pin: "6868", review_limit: 10, ai_api_key: "", ai_model: "nousresearch/nous-coder-14b" };
  for (var i = 0; i < data.length; i++) {
    if (data[i].key === "exam_pin") {
      settings.exam_pin = String(data[i].value);
    } else if (data[i].key === "review_limit") {
      settings.review_limit = parseInt(data[i].value) || 10;
    } else if (data[i].key === "ai_api_key") {
      settings.ai_api_key = String(data[i].value);
    } else if (data[i].key === "ai_model") {
      settings.ai_model = String(data[i].value);
    }
  }
  return settings;
}

function saveSettings(settingsObj) {
  var sheet = getOrCreateSheet("settings", ["key", "value"]);
  var data = getSheetData(sheet);
  
  function updateOrAdd(k, v) {
    var found = false;
    for (var i = 0; i < data.length; i++) {
      if (data[i].key === k) {
        sheet.getRange(i + 2, 2).setValue(v);
        found = true;
        break;
      }
    }
    if (!found) sheet.appendRow([k, v]);
  }
  
  if (settingsObj.exam_pin !== undefined) updateOrAdd("exam_pin", settingsObj.exam_pin);
  if (settingsObj.review_limit !== undefined) updateOrAdd("review_limit", settingsObj.review_limit);
  if (settingsObj.ai_api_key !== undefined) updateOrAdd("ai_api_key", settingsObj.ai_api_key);
  if (settingsObj.ai_model !== undefined) updateOrAdd("ai_model", settingsObj.ai_model);
}

function doGet(e) {
  var action = e.parameter.action;
  var responseData = { status: "error", message: "Action not recognized" };
  
  try {
    if (action === "verifyExamPin") {
      var pin = e.parameter.pin;
      var settings = getSettings();
      if (String(pin) === String(settings.exam_pin)) {
        responseData = { status: "success", message: "Mã hợp lệ", review_limit: settings.review_limit };
      } else {
        responseData = { status: "error", message: "Mã Ca Thi không hợp lệ!" };
      }
    } 
    else if (action === "getSettings") {
      var settings = getSettings();
      // Remove sensitive keys before returning to client
      delete settings.ai_api_key;
      delete settings.ai_model;
      responseData = { status: "success", data: settings };
    }
    else if (action === "getResults") {
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", "score_str", 
        "correctCount", "totalCount", "percentage", "result_status", "submitTime", "raw_data"
      ]);
      var allData = getSheetData(sheet);
      var filtered = [];
      for (var i = 0; i < allData.length; i++) {
        var item = allData[i];
        try {
          filtered.push(JSON.parse(item.raw_data));
        } catch(err) {
          filtered.push({ id: item.id, candidate: {name: item.name} });
        }
      }
      // Đảo ngược để bài mới nhất lên đầu
      responseData = { status: "success", data: filtered.reverse() };
    }
    else if (action === "deleteResult") {
      var id = e.parameter.id;
      var adminPin = e.parameter.adminPin;
      if (adminPin !== ADMIN_PIN) throw new Error("Unauthorized");
      
      var sheet = getOrCreateSheet("results", []);
      var allData = getSheetData(sheet);
      var found = false;
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].id === id) {
          sheet.deleteRow(i + 2);
          found = true;
          break;
        }
      }
      if (found) responseData = { status: "success", message: "Đã xóa bản ghi" };
      else responseData = { status: "error", message: "Không tìm thấy" };
    }
    else if (action === "clearResults") {
      var adminPin = e.parameter.adminPin;
      if (adminPin !== ADMIN_PIN) throw new Error("Unauthorized");
      
      var sheet = getOrCreateSheet("results", []);
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
      }
      responseData = { status: "success", message: "Đã xóa toàn bộ" };
    }
  } catch(err) {
    responseData = { status: "error", message: err.toString() };
  }

  return ContentService.createTextOutput(JSON.stringify(responseData))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var responseData = { status: "error", message: "Action not recognized" };
  
  try {
    var postData = JSON.parse(e.postData.contents);
    var action = postData.action;
    
    if (action === "adminLogin") {
      if (postData.pin === ADMIN_PIN) {
        responseData = { status: "success" };
      } else {
        responseData = { status: "error", message: "Mã Giám thị không đúng" };
      }
    }
    else if (action === "setSettings") {
      if (postData.admin_pin !== ADMIN_PIN) throw new Error("Unauthorized");
      saveSettings(postData);
      responseData = { status: "success", message: "Cập nhật thành công" };
    }
    else if (action === "askAITutor") {
      var settings = getSettings();
      if (!settings.ai_api_key) {
        throw new Error("Chưa cấu hình API Key cho Gia sư AI trong trang Admin.");
      }
      
      var prompt = "Bạn là một chuyên gia (Gia sư) về kỹ thuật xây dựng và cơ điện. Một học viên đã làm sai câu hỏi sau:\n" +
                   "Câu hỏi: " + postData.question + "\n" +
                   "Học viên chọn: " + postData.userAnswer + "\n" +
                   "Đáp án đúng là: " + postData.correctAnswer + "\n\n" +
                   "Hãy giải thích ngắn gọn, dễ hiểu, logic (khoảng 3-4 câu) tại sao đáp án đúng lại như vậy, và tại sao học viên sai. Ngôn ngữ: Tiếng Việt.";
                   
      var payload = {
        "model": settings.ai_model || "nousresearch/nous-coder-14b",
        "messages": [
          {"role": "user", "content": prompt}
        ]
      };
      
      var options = {
        "method": "post",
        "headers": {
          "Authorization": "Bearer " + settings.ai_api_key,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://vincons.com",
          "X-Title": "Vincons Exam AI Tutor"
        },
        "payload": JSON.stringify(payload),
        "muteHttpExceptions": true
      };
      
      var response = UrlFetchApp.fetch("https://openrouter.ai/api/v1/chat/completions", options);
      var json = JSON.parse(response.getContentText());
      
      if (json.error) {
        throw new Error(json.error.message || "Lỗi từ OpenRouter API");
      }
      
      var explanation = json.choices[0].message.content;
      responseData = { status: "success", explanation: explanation };
    }
    else if (action === "saveResult") {
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", "score_str", 
        "correctCount", "totalCount", "percentage", "result_status", "submitTime", "raw_data"
      ]);
      var candidate = postData.candidate || {};
      sheet.appendRow([
        postData.id,
        candidate.name,
        candidate.id,
        candidate.job,
        candidate.examType,
        postData.correctCount + "/" + postData.totalCount,
        postData.correctCount,
        postData.totalCount,
        postData.percentage,
        postData.isPass ? "ĐẠT" : "TRƯỢT",
        postData.submitTime,
        JSON.stringify(postData)
      ]);
      responseData = { status: "success", message: "Lưu thành công" };
    }
  } catch(err) {
    responseData = { status: "error", message: err.toString() };
  }
  
  return ContentService.createTextOutput(JSON.stringify(responseData))
                       .setMimeType(ContentService.MimeType.JSON);
}
