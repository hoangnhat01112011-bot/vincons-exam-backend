// MÃ NGUỒN GOOGLE APPS SCRIPT CHO VINCONS EXAM & KPI CLOUD (CÓ DATA VALIDATION TRỰC TIẾP TRÊN DRIVE)
// Copy toàn bộ mã này dán đè vào phần mở rộng Apps Script của Google Sheets và Triển khai lại.

const SHEETS_MAPPING = {
  'danh_sach_cong_nhan': 'DANH SÁCH CÔNG NHÂN',
  'don_gia_vincons': 'DON_GIA_VINCONS',
  'danh_muc_to': 'DANH_MUC_TO',
  'bang_luong_chuan': 'BANG_LUONG_CHUAN',
  'nhan_su_quy_luong': 'NHAN_SU_QUY_LUONG',
  'danh_gia_tong': 'DANH_GIA_TONG',
  'danh_muc_hangmuc_cv': 'DANH_MUC_HANG_MUC',
  'giao_viec_hoa_von': 'GIAO_VIEC_HOA_VON',
  'luu_tru_pgv': 'LUU_TRU_PGV',
  'bao_cao_san_luong_ngay': 'bao_cao_san_luong_ngay',
  'danh_gia_tong_trung_doi_truong': 'danh_gia_tong_trung_doi_truong',
  'danh_gia_tong_da': 'DANH_GIA_TONG_DA'
};

function getOrCreateSheet(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function getSheetData(sheet) {
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return []; // Chỉ có tiêu đề hoặc rỗng
  var headers = rows[0];
  var data = [];
  for (var i = 1; i < rows.length; i++) {
    var obj = {};
    var hasData = false;
    for (var j = 0; j < headers.length; j++) {
      var val = rows[i][j];
      if (val !== null && val !== undefined && val !== "") {
        hasData = true;
      }
      if (val instanceof Date) {
        obj[headers[j]] = Utilities.formatDate(val, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
      } else {
        obj[headers[j]] = val;
      }
    }
    if (hasData) {
      data.push(obj);
    }
  }
  return data;
}

function setupDataValidations() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('GIAO_VIEC_HOA_VON');
  if (sheet) {
    // 1. Validation cho Tổ thi công (Cột B) -> nguồn: 'DANH_MUC_TO'!B2:B150
    var sourceSheetTo = ss.getSheetByName('DANH_MUC_TO');
    if (sourceSheetTo) {
      var rangeTo = sourceSheetTo.getRange('B2:B150');
      var ruleTo = SpreadsheetApp.newDataValidation().requireValueInRange(rangeTo).setAllowInvalid(true).build();
      sheet.getRange('B2:B100').setDataValidation(ruleTo);
    }
    
    // 2. Validation cho Hạng mục Cấp 1 (Cột E) -> nguồn: 'DANH_MUC_HANG_MUC'!A2:A100
    var sourceSheetCap1 = ss.getSheetByName('DANH_MUC_HANG_MUC');
    if (sourceSheetCap1) {
      var rangeCap1 = sourceSheetCap1.getRange('A2:A100');
      var ruleCap1 = SpreadsheetApp.newDataValidation().requireValueInRange(rangeCap1).setAllowInvalid(true).build();
      sheet.getRange('E2:E100').setDataValidation(ruleCap1);
    }
    
    // 3. Validation cho Hạng mục Cấp 2 (Cột F) -> nguồn: 'DON_GIA_VINCONS'!B2:B9000
    var sourceSheetCap2 = ss.getSheetByName('DON_GIA_VINCONS');
    if (sourceSheetCap2) {
      var rangeCap2 = sourceSheetCap2.getRange('B2:B9000');
      var ruleCap2 = SpreadsheetApp.newDataValidation().requireValueInRange(rangeCap2).setAllowInvalid(true).build();
      sheet.getRange('F2:F100').setDataValidation(ruleCap2);
    }
  }
}

function doGet(e) {
  var action = e.parameter.action;
  var responseData = { status: "error", message: "Action not recognized" };
  
  try {
    if (action === "getSheet") {
      var sheetName = e.parameter.name;
      var mappedName = SHEETS_MAPPING[sheetName] || sheetName;
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(mappedName);
      if (!sheet) {
        responseData = [];
      } else {
        if (sheetName === 'luu_tru_pgv' || sheetName === 'LUU_TRU_PGV' || mappedName === 'LUU_TRU_PGV' || e.parameter.format === 'grid') {
          // Trả về dữ liệu thô dạng lưới 2D (mảng các mảng) để giữ nguyên form mẫu
          var rawRows = sheet.getDataRange().getValues();
          var formattedValues = [];
          for (var i = 0; i < rawRows.length; i++) {
            var rowVals = [];
            for (var j = 0; j < rawRows[i].length; j++) {
              var val = rawRows[i][j];
              if (val instanceof Date) {
                rowVals.push(Utilities.formatDate(val, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss"));
              } else {
                rowVals.push(val === null || val === undefined ? "" : val);
              }
            }
            formattedValues.push(rowVals);
          }
          responseData = {
            isGrid: true,
            values: formattedValues
          };
        } else {
          responseData = getSheetData(sheet);
        }
      }
    } 
    else if (action === "listSheets") {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheets = ss.getSheets();
      var names = [];
      for (var i = 0; i < sheets.length; i++) {
        names.push(sheets[i].getName());
      }
      responseData = {
        spreadsheetName: ss.getName(),
        spreadsheetId: ss.getId(),
        spreadsheetUrl: ss.getUrl(),
        sheets: names
      };
    }
    else if (action === "getResults") {
      var userId = e.parameter.userId;
      var role = e.parameter.role;
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", 
        "score_str", "correctCount", "totalCount", "percentage", 
        "result_status", "submitTime", "raw_data"
      ]);
      var allData = getSheetData(sheet);
      var filtered = [];
      
      for (var i = 0; i < allData.length; i++) {
        var item = allData[i];
        var rawStr = item.raw_data;
        var parsed = {};
        try {
          parsed = JSON.parse(rawStr);
        } catch(err) {
          parsed = {
            id: item.id,
            correctCount: Number(item.correctCount),
            totalCount: Number(item.totalCount),
            percentage: Number(item.percentage),
            isPass: item.result_status === "ĐẠT",
            submitTime: item.submitTime,
            candidate: {
              name: item.name,
              id: item.candidate_id,
              job: item.job,
              examType: item.examType
            }
          };
        }
        
        if (role === "admin") {
          filtered.push(parsed);
        } else if (role === "candidate" && userId) {
          if (String(item.candidate_id).trim().toLowerCase() === userId.trim().toLowerCase()) {
            filtered.push(parsed);
          }
        }
      }
      responseData = filtered;
    }
    else if (action === "listPdfs") {
      responseData = [];
    }
    else if (action === "deleteResult") {
      var id = e.parameter.id;
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", 
        "score_str", "correctCount", "totalCount", "percentage", 
        "result_status", "submitTime", "raw_data"
      ]);
      var allData = getSheetData(sheet);
      var found = false;
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].id === id) {
          sheet.deleteRow(i + 2);
          found = true;
          break;
        }
      }
      if (found) {
        responseData = { status: "success", message: "Đã xóa bản ghi thành công" };
      } else {
        responseData = { status: "error", message: "Không tìm thấy bản ghi" };
      }
    }
    else if (action === "clearResults") {
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", 
        "score_str", "correctCount", "totalCount", "percentage", 
        "result_status", "submitTime", "raw_data"
      ]);
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
      }
      responseData = { status: "success", message: "Đã xóa toàn bộ lịch sử bài thi" };
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
    
    if (action === "login") {
      var username = postData.username;
      var password = postData.password;
      var sheet = getOrCreateSheet("users", ["username", "password", "name", "role"]);
      var users = getSheetData(sheet);
      var found = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase() && users[i].password === password) {
          responseData = {
            status: "success",
            message: "Đăng nhập thành công!",
            user: {
              username: users[i].username,
              name: users[i].name,
              role: users[i].role
            }
          };
          found = true;
          break;
        }
      }
      if (!found) {
        responseData = { status: "error", message: "Số điện thoại/Gmail hoặc mật khẩu không đúng!" };
      }
    }
    else if (action === "register") {
      var username = postData.username;
      var password = postData.password;
      var name = postData.name;
      var role = postData.role;
      var sheet = getOrCreateSheet("users", ["username", "password", "name", "role"]);
      var users = getSheetData(sheet);
      var exists = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase()) {
          exists = true;
          break;
        }
      }
      if (exists) {
        responseData = { status: "error", message: "Số điện thoại hoặc Gmail này đã được đăng ký!" };
      } else {
        sheet.appendRow([username, password, name, role]);
        responseData = { status: "success", message: "Đăng ký tài khoản thành công!" };
      }
    }
    else if (action === "saveResult") {
      var sheet = getOrCreateSheet("results", [
        "id", "name", "candidate_id", "job", "examType", 
        "score_str", "correctCount", "totalCount", "percentage", 
        "result_status", "submitTime", "raw_data"
      ]);
      
      var id = postData.id || ("res_" + new Date().getTime());
      var cand = postData.candidate || {};
      var score_str = (postData.correctCount || 0) + "/" + (postData.totalCount || 0);
      var pct = postData.percentage || 0;
      var status = postData.isPass ? "ĐẠT" : "CHƯA ĐẠT";
      var time = postData.submitTime || new Date().toISOString();
      
      var allData = getSheetData(sheet);
      var existingRowIdx = -1;
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].id === id) {
          existingRowIdx = i;
          break;
        }
      }
      
      var newRow = [
        id,
        cand.name || "",
        cand.id || "",
        cand.job || "",
        cand.examType || "",
        score_str,
        postData.correctCount || 0,
        postData.totalCount || 0,
        pct,
        status,
        time,
        JSON.stringify(postData)
      ];
      
      if (existingRowIdx >= 0) {
        sheet.getRange(existingRowIdx + 2, 1, 1, newRow.length).setValues([newRow]);
      } else {
        sheet.insertRowAfter(1);
        sheet.getRange(2, 1, 1, newRow.length).setValues([newRow]);
      }
      responseData = { status: "success", message: "Đã lưu kết quả bài thi thành công", id: id };
    }
    else if (action === "saveRecord") {
      var sheetId = postData.sheet;
      var mappedName = SHEETS_MAPPING[sheetId] || sheetId;
      var rowIndex = Number(postData.rowIndex);
      var record = postData.record;
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(mappedName);
      if (!sheet) {
        var headers = Object.keys(record);
        sheet = ss.insertSheet(mappedName);
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
      
      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      
      var targetRow;
      if (rowIndex >= 0) {
        targetRow = rowIndex + 2;
      } else {
        targetRow = sheet.getLastRow() + 1;
      }
      
      if (sheetId === 'giao_viec_hoa_von') {
        record['Đơn vị tính'] = '=IF(F' + targetRow + '="";"";IFERROR(VLOOKUP(F' + targetRow + ';\'DON_GIA_VINCONS\'!$B$2:$F$10000;3;FALSE);""))';
        record['Đơn giá NC sau +30%'] = '=IF(F' + targetRow + '="";"";IFERROR(VLOOKUP(F' + targetRow + ';\'DON_GIA_VINCONS\'!$B$2:$F$10000;5;FALSE);0))';
        record['Tổng quỹ lương/ngày của nhóm'] = '=I' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;B' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Tổ trưởng*") + J' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;B' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 1") + K' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;B' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 2") + L' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;B' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 3") + M' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;B' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ phụ")';
        record['Sản lượng hòa vốn 1 ngày'] = '=IF(O' + targetRow + '>0; Q' + targetRow + '/O' + targetRow + '; 0)';
        record['Sản lượng đạt hòa vốn / 1 ngày – Cả tổ'] = '=IF(P' + targetRow + '>0; H' + targetRow + '/P' + targetRow + '; 0)';
        record['Tổng sản lượng hòa vốn cả đợt'] = '=R' + targetRow + '*P' + targetRow;
        record['Sản lượng theo khối lượng'] = '=H' + targetRow + '*O' + targetRow;
        record['Sản lượng theo thực tế thi công'] = '=Q' + targetRow + '*P' + targetRow;
        record['Chênh lệch dự kiến Lãi(+)/Lỗ(-)'] = '=U' + targetRow + '-V' + targetRow;
        record['ĐÁNH GIÁ & CẢNH BÁO'] = '=IF(W' + targetRow + '=0;"";IF(W' + targetRow + '>0;"An toàn - Đạt định mức";"Cảnh báo - Không đạt định mức (LỖ)"))';
      }
      else if (sheetId === 'bao_cao_san_luong_ngay') {
        record['Đơn vị tính'] = '=IF(G' + targetRow + '="";"";IFERROR(VLOOKUP(G' + targetRow + ';\'DON_GIA_VINCONS\'!$B$2:$F$10000;3;FALSE);""))';
        record['Đơn giá NC sau +30%'] = '=IF(G' + targetRow + '="";"";IFERROR(VLOOKUP(G' + targetRow + ';\'DON_GIA_VINCONS\'!$B$2:$F$10000;5;FALSE);0))';
        record['Số ngày thi công'] = '=IF(OR(D' + targetRow + '="";E' + targetRow + '="");"";E' + targetRow + '-D' + targetRow + '+1)';
        record['Tổng quỹ lương/ngày của nhóm'] = '=J' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Tổ trưởng*") + K' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 1") + L' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 2") + M' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ bậc 3") + N' + targetRow + '*SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"Thợ phụ")';
        record['Sản lượng theo thực tế thi công'] = '=R' + targetRow + '*Q' + targetRow;
        record['Chênh lệch dự kiến Lãi(+)/Lỗ(-)'] = '=(I' + targetRow + '*P' + targetRow + ')-S' + targetRow;
        record['ĐÁNH GIÁ & CẢNH BÁO'] = '=IF(T' + targetRow + '=0;"";IF(T' + targetRow + '>0;"An toàn - Đạt định mức";"Cảnh báo - Không đạt định mức (LỖ)"))';
      }
      else if (sheetId === 'danh_gia_tong_trung_doi_truong') {
        record['Số ngày thi công'] = '=IF(OR(D' + targetRow + '="";E' + targetRow + '="");"";E' + targetRow + '-D' + targetRow + '+1)';
        record['Tổng quỹ lương chi trả đến hiện tại của tổ'] = '=SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$B$2:$B$5000;C' + targetRow + ';\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"<>Tổ trưởng*") * F' + targetRow;
        record['Tổng sản lượng theo khối lượng'] = '=SUMPRODUCT((\'bao_cao_san_luong_ngay\'!$C$2:$C$5000=C' + targetRow + ') * (\'bao_cao_san_luong_ngay\'!$I$2:$I$5000) * (\'bao_cao_san_luong_ngay\'!$P$2:$P$5000))';
        record['Chênh lệch Lãi(+)/Lỗ(-)'] = '=H' + targetRow + '-G' + targetRow;
        record['ĐÁNH GIÁ & CẢNH BÁO'] = '=IF(I' + targetRow + '=0;"";IF(I' + targetRow + '>0;"Lãi";"Lỗ"))';
      }
      else if (sheetId === 'danh_gia_tong_da') {
        record['Số ngày thi công'] = '=IF(OR(C' + targetRow + '="";D' + targetRow + '="");"";D' + targetRow + '-C' + targetRow + '+1)';
        record['Tổng quỹ lương chi trả đến hiện tại'] = '=SUMIFS(\'NHAN_SU_QUY_LUONG\'!$H$2:$H$5000;\'NHAN_SU_QUY_LUONG\'!$E$2:$E$5000;"<>Tổ trưởng*") * E' + targetRow;
        record['Tổng sản lượng theo khối lượng'] = '=SUMPRODUCT(\'bao_cao_san_luong_ngay\'!$I$2:$I$5000 * \'bao_cao_san_luong_ngay\'!$P$2:$P$5000)';
        record['Chênh lệch Lãi(+)/Lỗ(-)'] = '=G' + targetRow + '-F' + targetRow;
        record['ĐÁNH GIÁ & CẢNH BÁO'] = '=IF(H' + targetRow + '=0;"";IF(H' + targetRow + '>0;"Lãi";"Lỗ"))';
      }
      
      var rowValues = [];
      for (var i = 0; i < headers.length; i++) {
        var val = record[headers[i]];
        if (val === undefined || val === null) val = "";
        rowValues.push(val);
      }
      
      if (rowIndex >= 0) {
        sheet.getRange(rowIndex + 2, 1, 1, headers.length).setValues([rowValues]);
      } else {
        sheet.appendRow(rowValues);
      }
      
      if (sheetId === 'giao_viec_hoa_von') {
        setupDataValidations();
      }
      
      responseData = { status: "success", message: "Lưu bản ghi thành công!" };
    }
    else if (action === "deleteRecord") {
      var sheetId = postData.sheet;
      var mappedName = SHEETS_MAPPING[sheetId] || sheetId;
      var rowIndex = Number(postData.rowIndex);
      
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(mappedName);
      if (!sheet) {
        responseData = { status: "error", message: "Không tìm thấy bảng tính: " + mappedName };
      } else {
        if (rowIndex >= 0) {
          sheet.deleteRow(rowIndex + 2);
          responseData = { status: "success", message: "Đã xóa bản ghi thành công!" };
        } else {
          responseData = { status: "error", message: "Chỉ số dòng không hợp lệ!" };
        }
      }
    }
    else if (action === "importData") {
      var sheetId = postData.sheet;
      var mappedName = SHEETS_MAPPING[sheetId] || sheetId;
      
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(mappedName);
      if (!sheet) {
        sheet = ss.insertSheet(mappedName);
      }
      
      if (postData.isGrid) {
        var gridValues = postData.data; // Mảng 2 chiều
        sheet.clear();
        if (gridValues.length > 0) {
          sheet.getRange(1, 1, gridValues.length, gridValues[0].length).setValues(gridValues);
        }
        
        if (sheetId === 'giao_viec_hoa_von') {
          setupDataValidations();
        }
        responseData = { status: "success", message: "Nhập dữ liệu dạng lưới thành công cho " + mappedName };
      } else {
        var importedRecords = postData.data;
        if (importedRecords.length > 0) {
          var headers = Object.keys(importedRecords[0]);
          sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
          
          if (sheet.getLastRow() > 1) {
            sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
          }
          
          var rowsToWrite = [];
          for (var i = 0; i < importedRecords.length; i++) {
            var rec = importedRecords[i];
            var row = [];
            for (var j = 0; j < headers.length; j++) {
              var val = rec[headers[j]];
              if (val === undefined || val === null) val = "";
              row.push(val);
            }
            rowsToWrite.push(row);
          }
          sheet.getRange(2, 1, rowsToWrite.length, headers.length).setValues(rowsToWrite);
          
          if (sheetId === 'giao_viec_hoa_von') {
            setupDataValidations();
          }
          
          responseData = { status: "success", message: "Nhập dữ liệu thành công! Đã ghi nhận " + importedRecords.length + " bản ghi mới." };
        } else {
          responseData = { status: "success", message: "Danh sách nhập rỗng." };
        }
      }
    }
  } catch(err) {
    responseData = { status: "error", message: err.toString() };
  }

  return ContentService.createTextOutput(JSON.stringify(responseData))
                       .setMimeType(ContentService.MimeType.JSON);
}
