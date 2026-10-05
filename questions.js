// File questions.js - Đã tạm thời gỡ bỏ 119 câu hỏi ĐHTG để chuẩn bị nạp ngân hàng đề mới
const QUESTIONS = [
  {
    "id": 1,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image1.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3.",
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm",
      "Công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 2,
    "type": "input_group",
    "category": "Thực hành Điện",
    "image": "data/image1.png",
    "question": "Với những ký hiệu điện đã biết, hãy cho tôi biết:",
    "sub_questions": [
      {
        "id": "2_1",
        "label": "Có bao nhiêu công tắc đôi",
        "correct_value": 2
      },
      {
        "id": "2_2",
        "label": "Có bao nhiêu công tắc ba",
        "correct_value": 1
      },
      {
        "id": "2_3",
        "label": "Có bao nhiêu ổ cắm đôi 3 chấu",
        "correct_value": 8
      },
      {
        "id": "2_4",
        "label": "Có bao nhiêu lộ đèn",
        "correct_value": 1
      }
    ],
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image2.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm",
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3.",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt"
    ],
    "correct_index": 3,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 4,
    "type": "input_group",
    "category": "Thực hành Điện",
    "image": "data/image2.png",
    "question": "Với những ký hiệu điện đã biết, hãy cho tôi biết:",
    "sub_questions": [
      {
        "id": "4_1",
        "label": "Có bao nhiêu công tắc đôi",
        "correct_value": 0
      },
      {
        "id": "4_2",
        "label": "Có bao nhiêu công tắc ba",
        "correct_value": 1
      },
      {
        "id": "4_3",
        "label": "Có bao nhiêu ổ cắm đôi 3 chấu",
        "correct_value": 2
      },
      {
        "id": "4_4",
        "label": "Có bao nhiêu lộ đèn",
        "correct_value": 1
      }
    ],
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 5,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image3.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Câu 1 và 3 đúng",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt",
      "Công tắc đơn, ba 1 chiều, công tắc đôi 2 chiều, công tắc bình nóng lạnh; Bình nóng lạnh",
      "Ổ cắm đôi 3 chấu, công tắc 3, đèn dowlight."
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 6,
    "type": "input_group",
    "category": "Thực hành Điện",
    "image": "data/image3.png",
    "question": "Với những ký hiệu điện đã biết, hãy cho tôi biết:",
    "sub_questions": [
      {
        "id": "6_1",
        "label": "Có bao nhiêu công tắc đôi",
        "correct_value": 1
      },
      {
        "id": "6_2",
        "label": "Có bao nhiêu công tắc bình nóng lạnh",
        "correct_value": 4
      },
      {
        "id": "6_3",
        "label": "Có bao nhiêu ổ cắm đôi 3 chấu",
        "correct_value": 3
      },
      {
        "id": "6_4",
        "label": "Có bao nhiêu lộ đèn",
        "correct_value": 1
      }
    ],
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 7,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image4.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc 3, đèn dowlight.",
      "Câu 1 và 2 đúng",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ cấp nguồn S1,S2, đèn sự cố mắt ếch, đế âm, đèn Exit",
      "Công tắc đơn, đôi 1 chiều, công tắc đơn 2 chiều, Ổ cắm đôi chống nước, ổ cắm chống nổ, remot điều hòa"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 8,
    "type": "input_group",
    "category": "Thực hành Điện",
    "image": "data/image4.png",
    "question": "Với những ký hiệu điện đã biết, hãy cho tôi biết:",
    "sub_questions": [
      {
        "id": "8_1",
        "label": "Có bao nhiêu công tắc đơn đảo chiều",
        "correct_value": 1
      },
      {
        "id": "8_2",
        "label": "Có bao nhiêu công tắc đơn",
        "correct_value": 2
      },
      {
        "id": "8_3",
        "label": "Có bao nhiêu ổ cắm đôi 3 chấu chống nước",
        "correct_value": 3
      },
      {
        "id": "8_4",
        "label": "Có bao nhiêu lộ cấp nguồn",
        "correct_value": 2
      }
    ],
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image5.png",
    "question": "Với mạch điều khiển bơm nước tự động dùng phao điện như trên thì động cơ và phao điện sẽ đấu vào chân nào của domino để mạch động lực hoạt động được :",
    "options": [
      "Động cơ 1 pha: L,N đấu vào 3-4; phao điện: dây tín hiệu phao đấu vào 8-9;",
      "3.Động cơ 1 pha: L,N đấu vào 3-4; phao điện: dây tín hiệu phao đấu vào 7-8;",
      "Tất cả dáp án trên đều đúng",
      "Động cơ 1 pha: L,N đấu vào 5-6; phao điện: dây tín hiệu phao đấu vào 8-9;"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 10,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image6.png",
    "question": "Mạch khởi động sao/tam giác như hình, hãy đấu 1 trong 6 cực của động cơ với các cuộn tương ứng động cơ vào domino để mạch động lực hoạt động được :",
    "options": [
      "Động cơ 3 pha: 1-U1,2-V1;3-W1;5-W2;4-U2;6-V2",
      "Động cơ 3 pha: 1-U1,2-V1;3-W1;4-W2;5-U2;6-V2",
      "Tất cả dáp án trên đều đúng",
      "Động cơ 3 pha: 1-U1,3-V1;2-W1;4-W2;5-U2;6-V2"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image7.png",
    "question": "Hình ảnh trên là động cơ điện 3 pha đang được đấu nối vào lưới điện, hãy cho biết dạng đấu trên thuộc loại nào: Sao hay tam giác, điện áp làm việc của động cơ là bao nhiêu(Uph) =? biết điện áp lưới điện đến cực động cơ (Ud) là 380V.",
    "options": [
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 380V;",
      "Không có đáp án đúng.",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image8.png",
    "question": "Hình ảnh trên là động cơ điện 3 pha đang được đấu nối vào lưới điện, hãy cho biết dạng đấu trên thuộc loại nào: Sao hay tam giác, điện áp làm việc của động cơ là bao nhiêu(Uph) =? biết điện áp lưới điện đến cực động cơ (Ud) là 380V.",
    "options": [
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 380V;",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;",
      "Không có đáp án đúng."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 13,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image9.png",
    "question": "Hình ảnh trên là Catalog của động cơ điện 3 pha , hãy cho biết các thông số Công suất (P); dòng điện(I),điện áp(U),tốc độ(n) và kiểu đấu ứng với tần số lưới điện Việt Nam là 380V; 50Hz?",
    "options": [
      "Không có đáp án đúng.",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;P= 22Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 660V;I=23.8A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;P= 22Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": 14,
    "type": "multiple_choice",
    "category": "Thực hành Điện",
    "image": "data/image10.png",
    "question": "Hình ảnh trên là Catalog của động cơ điện 3 pha , hãy cho biết các thông số Công suất (P); dòng điện(I),điện áp(U),tốc độ(n) và kiểu đấu ứng với tần số lưới điện Việt Nam là 380V; 50Hz?",
    "options": [
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;P= 37Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V; P= 37Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V; I=78A;P=37Kw; tốc độ động cơ n=1450 r/min(vòng /phút)",
      "Không có đáp án đúng."
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Điện"
  },
  {
    "id": "q_el3_01_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "10mm",
      "5mm",
      "20mm",
      "15mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_7",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Điện trở của dây dẫn phụ thuộc chủ yếu vào:",
    "options": [
      "Nhiệt độ",
      "Cả A, B, C",
      "Chiều dài",
      "Đường kính"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "≤ 1/4",
      "≤ 1/2",
      "= 1",
      "1/3"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Giảm dòng ngắn mạch",
      "Tăng tổn hao",
      "Tăng điện áp",
      "Tăng hệ số công suất"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_6",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi đóng điện thử tải, cầm kiểm tra thứ tự pha bằng:",
    "options": [
      "Bút thử điện",
      "Ampe kìm",
      "Đồng hồ vạn năng",
      "Thiết bị kiểm tra pha"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị đứt",
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị ẩm nên điện trở tăng",
      "Cuộn dây bị chập một số vòng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Bỏ đi",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Tách nạn nhân khỏi nguồn điện",
      "Để nằm yên"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_61",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đóng điện vào máy bơm nước, động cơ điện của bơm không quay là do",
    "options": [
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn",
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Mất nước mồi, dây quấn động cơ bị chập."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_84",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "Stato là phần quay và roto là phần tĩnh.",
      "",
      "Stato là phần tĩnh và roto là phần quay.",
      ""
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Không đổi",
      "Tăng",
      "Giảm",
      "Tùy tải"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_50",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn quy định khi nghiệm thu tủ cấp điện, thì các khe hở của nắp đậy đều và không vượt quá bao nhiêu mm?",
    "options": [
      "2 mm",
      "1 mm",
      "3 mm",
      "4 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Động cơ bị rò điện.",
      "Mất điện.",
      "Không có nguồn nước cấp.",
      "Dây quấn động cơ bị chập"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_53",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đối với dây dẫn có tiết diện từ  từ bao nhiêu mm2 trở lên phải được ép đầu cos khi kết nối với tủ điện và thiết bị?",
    "options": [
      "2.5 mm2",
      "10 mm2",
      "6 mm2",
      "4 mm2"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_1",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Thiết bị nào dùng để bảo vệ quá dòng cho mạch điện?",
    "options": [
      "Aptomat",
      "CB (Circuit Breaker)",
      "Rơ-le nhiệt",
      "Contactor"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_47",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Cấp bảo vệ IP tối thiểu cho ổ cắm khu vực ẩm ướt?",
    "options": [
      "IP33",
      "IP20",
      "IP55",
      "IP44"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_18",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Thiết bị đóng cắt trong tủ điện tổng phải lắp ở độ cao bao nhiêu tính từ sàn?",
    "options": [
      "Trên 2.0 m",
      "0.8 - 1.0 m",
      "1.2 - 1.5 m",
      "1.5 - 1.7 m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_44",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Công tắc, ổ cắm nên cách mép cửa  bao nhiêu?",
    "options": [
      "30 cm",
      "5cm",
      "15 - 20cm",
      "40 cm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 3V",
      "> 12V",
      "> 36V",
      "> 6V"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ miệng ống hút đến vị trí đặt máy",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_82",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Sử dụng thiết bị đo nào để kiểm tra cách điện động cơ, cáp điện",
    "options": [
      "Đồng hồ ampe kìm",
      "Đồng hồ Megaohm",
      "Đồng  hồ vạn năng",
      "Đồng hồ đo điện trở đất Teraohm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,3m",
      "1,0m",
      "0,7m",
      "0,5m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 12V",
      "> 36V",
      "> 3V",
      "> 6V"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_60",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống tiếp địa trạm biến áp cần đạt được là:",
    "options": [
      "≤ 4 Ohm (W)",
      "≤ 10 Ohm (W)",
      "≥ 10 Ohm (W)",
      "≤ 6 Ohm (W)"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng tổn hao",
      "Giảm dòng ngắn mạch",
      "Tăng hệ số công suất",
      "Tăng điện áp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_52",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Đối với các thiết bị thông tin liên lạc, truyền hình cáp thì khi lắp đặt, độ dài đầu chờ phải dài tối thiểu bao nhiêu mm?",
    "options": [
      "300 mm",
      "400 mm",
      "200 mm",
      "100 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khe hở tối thiểu giữa hai ống luồn dây nối cần:",
    "options": [
      "5mm",
      "1mm",
      "0.5mm",
      "Không có khoảng hở"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "4h",
      "2h",
      "3h",
      "1h"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_40",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi lắp máng cáp chồng tầng, khoảng cách tối thiểu giữa hai tầng máng là?",
    "options": [
      "100mm",
      "200mm",
      "150m",
      "300mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_75",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Rơ le nhiệt dùng để",
    "options": [
      "Tăng điện áp",
      "Giảm dòng",
      "Đo điện",
      "Bảo vệ quá tải động cơ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Bảo vệ chạm đất",
      "Đóng cắt tải",
      "Giảm dòng khởi động",
      "Truyền tín hiệu điều khiển"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 2,0m",
      "≤ 0,8m",
      "≤ 1,5m",
      "≤ 1,2m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_35",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi kiểm tra sụt áp đường dây, giá trị sụt áp cho phép thường không quá:",
    "options": [
      "3%",
      "15%",
      "10%",
      "5%"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_25",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Số lượng dây trong ống luồn không vượt quá bao nhiêu % tiết diện ống?",
    "options": [
      "60%",
      "50%",
      "30%",
      "40%"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh không đọc được kết quả đo.",
      "tránh làm hỏng que đo.",
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo."
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Volt kế",
      "Ampe kế",
      "Ohm kế",
      "Đồng hồ vạn năng (thang điện dung)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị chập một số vòng",
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị đứt",
      "Cuộn dây bị ẩm nên điện trở tăng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_38",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Dây đi âm vách tường phải cách sàn tối thiểu bao nhiêu?",
    "options": [
      "250mm",
      "200mm",
      "100mm",
      "150m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Không đổi",
      "Tăng",
      "Giảm",
      "Tùy tải"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_56",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với  công tắc phải lắp đặt thế nào để đảm bảo yêu cầu kỹ thuật?",
    "options": [
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "2A",
      "4A",
      "6A",
      "30A"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Bỏ đi",
      "Tách nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "30A",
      "4A",
      "6A",
      "2A"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Giảm dòng ngắn mạch",
      "Tăng tổn hao",
      "Tăng hệ số công suất",
      "Tăng điện áp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_61",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Đóng điện vào máy bơm nước, động cơ điện của bơm không quay là do",
    "options": [
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn",
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất nước mồi, dây quấn động cơ bị chập."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_57",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khoảng cách giữa các kẹp C giữ ống diện, điện nhẹ PVC nổi trên trần là bao nhiêu?",
    "options": [
      "< 900mm",
      "< 1000mm",
      "< 1100mm",
      "< 1200mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_33",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Điện trở tiếp xúc thanh cái ≤ bao nhiêu?",
    "options": [
      "100µΩ",
      "10µΩ",
      "200µΩ",
      "50µΩ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_55",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với đèn hắt trần được lắp đặt như thế nào?",
    "options": [
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, đèn phải có ánh sáng tốt, ánh sáng đồng màu, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thầu khi đứng tại mọi vị trí trong căn hộ, ánh sáng đảm bảo, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, ánh sáng đồng màu, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo sẽ bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, ánh sáng đồng màu, không bị ngắt quãng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_83",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Sơ đồ cấp điện cho nhà chung cư theo thứ tự thế nào là đú",
    "options": [
      "Bảng điện; tủ điện tầng; trạm biến áp; tủ điện tổng; các tải của căn hộ",
      "Tủ điện tổng; trạm biến áp; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Tủ điện tầng; trạm biến áp; tủ điện tổng; bảng điện; các tải của căn hộ",
      "Trạm biến áp; tủ điện tổng; tủ điện tầng; bảng điện; các tải của căn hộ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_18",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Thiết bị đóng cắt trong tủ điện tổng phải lắp ở độ cao bao nhiêu tính từ sàn?",
    "options": [
      "0.8 - 1.0 m",
      "Trên 2.0 m",
      "1.5 - 1.7 m",
      "1.2 - 1.5 m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ miệng ống hút đến vị trí đặt máy",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Không đổi",
      "Tùy tải",
      "Giảm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_4",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "Contactor",
      "Cầu dao",
      "Cầu chì",
      "CB"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "1,0m",
      "0,5m",
      "0,3m",
      "0,7m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế",
      "Ohm kế"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "4h",
      "1h",
      "2h",
      "3h"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_12",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Không hoạt động",
      "Không nối đất",
      "Thường đóng",
      "Thường mở"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 1,2m",
      "≤ 0,8m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "10 Ω",
      "20 Ω",
      "4 Ω",
      "1 Ω"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_23",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi tủ điện có 2 nguồn cấp (lưới và máy phát), cần lắp thiết bị gì để tránh xung đột?",
    "options": [
      "ATS",
      "ELCB",
      "Contactor đơn",
      "MMCB"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Dây quấn động cơ bị chập",
      "Mất điện.",
      "Không có nguồn nước cấp.",
      "Động cơ bị rò điện."
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_54",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Hệ thống báo cháy phải đảm bảo liên động với những hệ nào?",
    "options": [
      "Tất cả đều đúng",
      "Quạt hút khói, quạt tăng áp cầu thang",
      "Chữa cháy tự động, hệ cấp gas",
      "Thang máy, thang cuốn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_28",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Ổ cắm trong WC cần bảo vệ bằng gì?",
    "options": [
      "Không yêu cầu",
      "CB chống dòng rò (ELCB)",
      "Cầu chì",
      "CB tép thông thường"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_26",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Thanh N và PE trong tủ điện có được nối chung không?",
    "options": [
      "Có",
      "Tùy theo tải",
      "Không",
      "Có ở mọi tủ"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_82",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Sử dụng thiết bị đo nào để kiểm tra cách điện động cơ, cáp điện",
    "options": [
      "Đồng  hồ vạn năng",
      "Đồng hồ Megaohm",
      "Đồng hồ đo điện trở đất Teraohm",
      "Đồng hồ ampe kìm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_42",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Độ cao lắp công tắc chiếu sáng chuẩn là?",
    "options": [
      "1,2 - 1,4 m",
      "1,5 - 1,6 m",
      "1,0  - 1,1 m",
      "1,8 m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_56",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với  công tắc phải lắp đặt thế nào để đảm bảo yêu cầu kỹ thuật?",
    "options": [
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_66",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Mạch điện có một bóng đèn có thể tắt, mở ở hai vị trí khác nhau là",
    "options": [
      "Mạch đèn cầu thang.",
      "Mạch đèn sáng luân phiên.",
      "Mạch đèn thay đổi ánh sáng.",
      "Mạch đèn sợi đốt đơn giản."
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_35",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi kiểm tra sụt áp đường dây, giá trị sụt áp cho phép thường không quá:",
    "options": [
      "10%",
      "5%",
      "15%",
      "3%"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_19",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Độ rọi tiêu chuẩn khu vực văn phòng là bao nhiêu lux theo TCVN 7114?",
    "options": [
      "300",
      "700",
      "200",
      "500"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_12",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Không hoạt động",
      "Thường đóng",
      "Không nối đất",
      "Thường mở"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "50 mA",
      "100 mA",
      "30 mA",
      "10 mA"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_34",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dây đồng trần trong chống sét nên chôn sâu tối thiểu:",
    "options": [
      "0.3m",
      "1.0m",
      "0.5m",
      "0.8m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Động cơ bị rò điện.",
      "Mất điện.",
      "Không có nguồn nước cấp.",
      "Dây quấn động cơ bị chập"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "4 Ω",
      "20 Ω",
      "1 Ω",
      "10 Ω"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_3",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dụng cụ đo điện trở cách điện là:",
    "options": [
      "Megger",
      "Đồng hồ vạn năng",
      "Ampe kìm",
      "Ohm kế"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 1,5m",
      "≤ 2,0m",
      "≤ 0,8m",
      "≤ 1,2m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khe hở tối thiểu giữa hai ống luồn dây nối cần:",
    "options": [
      "0.5mm",
      "1mm",
      "Không có khoảng hở",
      "5mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "≤ 1/4",
      "= 1",
      "1/3",
      "≤ 1/2"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_25",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Số lượng dây trong ống luồn không vượt quá bao nhiêu % tiết diện ống?",
    "options": [
      "30%",
      "50%",
      "40%",
      "60%"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Giảm dòng khởi động",
      "Bảo vệ chạm đất"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_42",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Độ cao lắp công tắc chiếu sáng chuẩn là?",
    "options": [
      "1,8 m",
      "1,5 - 1,6 m",
      "1,2 - 1,4 m",
      "1,0  - 1,1 m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_56",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với  công tắc phải lắp đặt thế nào để đảm bảo yêu cầu kỹ thuật?",
    "options": [
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_49",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi lắp đặt cáp điện trên máng, khoảng cách giữa các thanh chống đỡ máng là?",
    "options": [
      "1,5 - 2,0m",
      "1,2 - 1,5m",
      "1,0 - 1,2m",
      "2,0 - 2,5m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_05_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Khi có vách ngăn",
      "Tùy tải",
      "Có",
      "Không"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_59",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi mắc song song thì khoảng cách giữa đường điện chiếu sáng và động lực với cáp báo cháy không được nhỏ hơn ?",
    "options": [
      "0.3m",
      "0.4m",
      "0.6m",
      "0.5m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_30",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi dòng khởi động motor cao, có thể dùng biện pháp nào?",
    "options": [
      "Giảm điện áp",
      "Khởi động trực tiếp",
      "Sao - tam giác",
      "Chỉnh CB"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Bảo vệ chạm đất",
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Giảm dòng khởi động"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_22",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi đo kiểm tra RCD (CB chống giật), dòng thử chuẩn là bao nhiêu?",
    "options": [
      "30mA",
      "15mA",
      "20mA",
      "50mA"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_05_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 1,5m",
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 2,0m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Giảm",
      "Tăng",
      "Không đổi",
      "Tùy tải"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "10 mA",
      "30 mA",
      "100 mA",
      "50 mA"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,3m",
      "1,0m",
      "0,7m",
      "0,5m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_20",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi nối đất an toàn, điện trở nối đất cho thiết bị điện phải ≤ bao nhiêu Ohm?",
    "options": [
      "2",
      "1",
      "10",
      "4"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_44",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Công tắc, ổ cắm nên cách mép cửa  bao nhiêu?",
    "options": [
      "30 cm",
      "40 cm",
      "5cm",
      "15 - 20cm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_05_15",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Trong hệ thống điện công trình, dây trung tính (N) có nhiệm vụ chính là gì?",
    "options": [
      "Dẫn dòng sự cố",
      "Dẫn dòng tải mất cân bằng",
      "Dẫn dòng ngắn mạch",
      "Tăng công suất pha"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_23",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi tủ điện có 2 nguồn cấp (lưới và máy phát), cần lắp thiết bị gì để tránh xung đột?",
    "options": [
      "MMCB",
      "ATS",
      "ELCB",
      "Contactor đơn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng điện áp",
      "Giảm dòng ngắn mạch",
      "Tăng hệ số công suất",
      "Tăng tổn hao"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_27",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Dây điều khiển 1.5mm2 cho tín hiệu sensor kéo dài tối đa bao nhiêu mét?",
    "options": [
      "150m",
      "100m",
      "50m",
      "200m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_64",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Biện pháp thi công an toàn ngoài trời khi có trời mưa",
    "options": [
      "Tiếp tục làm việc bình thường để kịp tiến độ.",
      "Dùng tay trần thao tác nhanh để tránh bị ướt lâu.",
      "Ngừng thi công hoặc chỉ làm khi đã cắt nguồn điện, sử dụng dụng cụ và đồ bảo hộ cách điện đầy đủ.",
      "Đứng trên nền đất ướt và kiểm tra dây điện."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_84",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "Stato là phần quay và roto là phần tĩnh.",
      "Stato là phần tĩnh và roto là phần quay.",
      "",
      ""
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_54",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Hệ thống báo cháy phải đảm bảo liên động với những hệ nào?",
    "options": [
      "Chữa cháy tự động, hệ cấp gas",
      "Quạt hút khói, quạt tăng áp cầu thang",
      "Tất cả đều đúng",
      "Thang máy, thang cuốn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_7",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Điện trở của dây dẫn phụ thuộc chủ yếu vào:",
    "options": [
      "Nhiệt độ",
      "Chiều dài",
      "Cả A, B, C",
      "Đường kính"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "15mm",
      "5mm",
      "10mm",
      "20mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_2",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Trong bản vẽ điện, ký hiệu MCB thể hiện thiết bị gì?",
    "options": [
      "Aptomat tép",
      "Máy biến áp",
      "Cầu chì",
      "Tụ bù"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_06_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 3V",
      "> 12V",
      "> 6V",
      "> 36V"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành quang năng.",
      "Điện năng thành cơ năng",
      "Cơ năng thành điện năng.",
      "Điện năng thành nhiệt năng."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_38",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Dây đi âm vách tường phải cách sàn tối thiểu bao nhiêu?",
    "options": [
      "100mm",
      "150m",
      "250mm",
      "200mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "5 mm",
      "4 mm",
      "3 mm",
      "2 mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_52",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Đối với các thiết bị thông tin liên lạc, truyền hình cáp thì khi lắp đặt, độ dài đầu chờ phải dài tối thiểu bao nhiêu mm?",
    "options": [
      "200 mm",
      "100 mm",
      "300 mm",
      "400 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_40",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Khi lắp máng cáp chồng tầng, khoảng cách tối thiểu giữa hai tầng máng là?",
    "options": [
      "100mm",
      "300mm",
      "150m",
      "200mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_70",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Để thể hiện rõ mối liên hệ về điện của các phần tử trong mạch điện ta dùng",
    "options": [
      "Sơ đồ lắp đặt của mạch điện",
      "Sơ đồ cấu tạo của mạch điện",
      "Sơ đồ nguyên lí của mạch điện",
      "Sơ đồ nguyên lí và cấu tạo của mạch điện"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_82",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Sử dụng thiết bị đo nào để kiểm tra cách điện động cơ, cáp điện",
    "options": [
      "Đồng  hồ vạn năng",
      "Đồng hồ ampe kìm",
      "Đồng hồ đo điện trở đất Teraohm",
      "Đồng hồ Megaohm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_47",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Cấp bảo vệ IP tối thiểu cho ổ cắm khu vực ẩm ướt?",
    "options": [
      "IP44",
      "IP20",
      "IP55",
      "IP33"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_06_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,7m",
      "0,3m",
      "1,0m",
      "0,5m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_34",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Dây đồng trần trong chống sét nên chôn sâu tối thiểu:",
    "options": [
      "0.3m",
      "0.5m",
      "1.0m",
      "0.8m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_23",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Khi tủ điện có 2 nguồn cấp (lưới và máy phát), cần lắp thiết bị gì để tránh xung đột?",
    "options": [
      "Contactor đơn",
      "MMCB",
      "ATS",
      "ELCB"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Không có nguồn nước cấp.",
      "Mất điện.",
      "Động cơ bị rò điện.",
      "Dây quấn động cơ bị chập"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "50 mA",
      "10 mA",
      "100 mA",
      "30 mA"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "30A",
      "2A",
      "6A",
      "4A"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_06_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí đặt máy",
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_71",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Số cuộn dây quấn làm việc của động cơ điện 3 pha là",
    "options": [
      "Một.",
      "Bốn.",
      "Hai.",
      "Ba."
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_07_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Đóng cắt tải",
      "Giảm dòng khởi động",
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,3m",
      "0,5m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh không đọc được kết quả đo.",
      "tránh làm hỏng que đo.",
      "tránh gây sai số lớn khi đọc kết quả đo."
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_76",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Contactor dùng để",
    "options": [
      "Đo điện áp",
      "Cấp nguồn",
      "Đo dòng điện",
      "Đóng cắt mạch điện công suất lớn"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_07_68",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi cuộn dây động cơ bị ẩm ta cần làm như sau :",
    "options": [
      "Tháo động cơ, rửa sạch bằng xăng, dùng máy sấy khô",
      "Tháo động cơ, phơi nắng",
      "Tháo động cơ để trong mát một thời gian",
      "Tháo động cơ, rửa sạch bằng nước, phơi nắng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_49",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi lắp đặt cáp điện trên máng, khoảng cách giữa các thanh chống đỡ máng là?",
    "options": [
      "1,2 - 1,5m",
      "1,0 - 1,2m",
      "2,0 - 2,5m",
      "1,5 - 2,0m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_07_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "15mm",
      "20mm",
      "10mm",
      "5mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_45",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khoảng cách tối thiểu dây điện - ống nước song song:",
    "options": [
      "5cm",
      "1cm",
      "3cm",
      "10cm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_64",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Biện pháp thi công an toàn ngoài trời khi có trời mưa",
    "options": [
      "Ngừng thi công hoặc chỉ làm khi đã cắt nguồn điện, sử dụng dụng cụ và đồ bảo hộ cách điện đầy đủ.",
      "Đứng trên nền đất ướt và kiểm tra dây điện.",
      "Tiếp tục làm việc bình thường để kịp tiến độ.",
      "Dùng tay trần thao tác nhanh để tránh bị ướt lâu."
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_27",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dây điều khiển 1.5mm2 cho tín hiệu sensor kéo dài tối đa bao nhiêu mét?",
    "options": [
      "50m",
      "200m",
      "150m",
      "100m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_07_81",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Dây quấn động cơ bị cháy",
      "Điện áp nguồn quá cao so với định mức",
      "Tụ điện khởi động bị hỏng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "= 1",
      "≤ 1/2",
      "≤ 1/4",
      "1/3"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_38",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dây đi âm vách tường phải cách sàn tối thiểu bao nhiêu?",
    "options": [
      "250mm",
      "100mm",
      "200mm",
      "150m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_30",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi dòng khởi động motor cao, có thể dùng biện pháp nào?",
    "options": [
      "Sao - tam giác",
      "Khởi động trực tiếp",
      "Giảm điện áp",
      "Chỉnh CB"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_4",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "Cầu chì",
      "CB",
      "Contactor",
      "Cầu dao"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "30 mA",
      "50 mA",
      "100 mA",
      "10 mA"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Volt kế",
      "Ohm kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Ampe kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "1h",
      "4h",
      "3h",
      "2h"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Bỏ đi",
      "Để nằm yên",
      "Tách nạn nhân khỏi nguồn điện",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khe hở tối thiểu giữa hai ống luồn dây nối cần:",
    "options": [
      "Không có khoảng hở",
      "5mm",
      "0.5mm",
      "1mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_42",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Độ cao lắp công tắc chiếu sáng chuẩn là?",
    "options": [
      "1,5 - 1,6 m",
      "1,0  - 1,1 m",
      "1,2 - 1,4 m",
      "1,8 m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_45",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khoảng cách tối thiểu dây điện - ống nước song song:",
    "options": [
      "3cm",
      "10cm",
      "5cm",
      "1cm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_46",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi chọn tủ điện ngoài trời, cấp bảo vệ ip tối thiểu là bao nhiêu?",
    "options": [
      "IP65",
      "IP54",
      "IP20",
      "IP33"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ miệng ống hút đến vị trí đặt máy",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_38",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Dây đi âm vách tường phải cách sàn tối thiểu bao nhiêu?",
    "options": [
      "250mm",
      "100mm",
      "150m",
      "200mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_08_13",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi kiểm tra điện trở cách điện, giá trị nhỏ nhất được chấp nhận là bao nhiêu?",
    "options": [
      "1 MΩ",
      "0,5 MΩ",
      "0,1 MΩ",
      "10 MΩ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_84",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "",
      "",
      "Stato là phần quay và roto là phần tĩnh.",
      "Stato là phần tĩnh và roto là phần quay."
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_08_71",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Số cuộn dây quấn làm việc của động cơ điện 3 pha là",
    "options": [
      "Ba.",
      "Hai.",
      "Một.",
      "Bốn."
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_81",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Dây quấn động cơ bị cháy",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Điện áp nguồn quá cao so với định mức"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_08_60",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống tiếp địa trạm biến áp cần đạt được là:",
    "options": [
      "≤ 10 Ohm (W)",
      "≤ 4 Ohm (W)",
      "≤ 6 Ohm (W)",
      "≥ 10 Ohm (W)"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_66",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Mạch điện có một bóng đèn có thể tắt, mở ở hai vị trí khác nhau là",
    "options": [
      "Mạch đèn sáng luân phiên.",
      "Mạch đèn cầu thang.",
      "Mạch đèn sợi đốt đơn giản.",
      "Mạch đèn thay đổi ánh sáng."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,7m",
      "0,3m",
      "1,0m",
      "0,5m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_08_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "3 mm",
      "4 mm",
      "2 mm",
      "5 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Không đổi",
      "Giảm",
      "Tùy tải"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_08_22",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi đo kiểm tra RCD (CB chống giật), dòng thử chuẩn là bao nhiêu?",
    "options": [
      "30mA",
      "50mA",
      "15mA",
      "20mA"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh làm hỏng que đo.",
      "tránh không đọc được kết quả đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh gây sai số lớn khi đọc kết quả đo."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "≤ 1/2",
      "1/3",
      "= 1",
      "≤ 1/4"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_2",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Trong bản vẽ điện, ký hiệu MCB thể hiện thiết bị gì?",
    "options": [
      "Aptomat tép",
      "Tụ bù",
      "Cầu chì",
      "Máy biến áp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_53",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Đối với dây dẫn có tiết diện từ  từ bao nhiêu mm2 trở lên phải được ép đầu cos khi kết nối với tủ điện và thiết bị?",
    "options": [
      "6 mm2",
      "4 mm2",
      "10 mm2",
      "2.5 mm2"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "5 mm",
      "2 mm",
      "4 mm",
      "3 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_15",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Trong hệ thống điện công trình, dây trung tính (N) có nhiệm vụ chính là gì?",
    "options": [
      "Tăng công suất pha",
      "Dẫn dòng ngắn mạch",
      "Dẫn dòng tải mất cân bằng",
      "Dẫn dòng sự cố"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Bỏ đi",
      "Tách nạn nhân khỏi nguồn điện"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_33",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Điện trở tiếp xúc thanh cái ≤ bao nhiêu?",
    "options": [
      "50µΩ",
      "200µΩ",
      "10µΩ",
      "100µΩ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_69",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Để đo điện năng tiêu thụ ta dùng",
    "options": [
      "Công tơ",
      "Oát kế",
      "Vôn kế",
      "Ampe kế"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,5m",
      "≤ 2,0m",
      "≤ 1,2m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_65",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống chống sét, tủ điện, motor cần đạt được là:",
    "options": [
      "≥ 10 Ohm (W)",
      "≤ 6 Ohm (W)",
      "≤ 4 Ohm (W)",
      "≤ 10 Ohm (W)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành nhiệt năng.",
      "Điện năng thành cơ năng",
      "Cơ năng thành điện năng.",
      "Điện năng thành quang năng."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_83",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Sơ đồ cấp điện cho nhà chung cư theo thứ tự thế nào là đú",
    "options": [
      "Trạm biến áp; tủ điện tổng; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Tủ điện tầng; trạm biến áp; tủ điện tổng; bảng điện; các tải của căn hộ",
      "Bảng điện; tủ điện tầng; trạm biến áp; tủ điện tổng; các tải của căn hộ",
      "Tủ điện tổng; trạm biến áp; tủ điện tầng; bảng điện; các tải của căn hộ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "5mm",
      "20mm",
      "10mm",
      "15mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh làm hỏng que đo.",
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh không đọc được kết quả đo."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_21",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi đo cách điện cáp lực 0.6/1kV, thường dùng megger bao nhiêu VDC?",
    "options": [
      "2500V",
      "250V",
      "1000V",
      "500V"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_61",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Đóng điện vào máy bơm nước, động cơ điện của bơm không quay là do",
    "options": [
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất nước mồi, dây quấn động cơ bị chập.",
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Tùy tải",
      "Có",
      "Không",
      "Khi có vách ngăn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_58",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Mặt công tác, ổ cắm lắp đúng vị trí, thăng bằng ngang, sai lệch cao độ không quá bao nhiêu mm?",
    "options": [
      "±3mm",
      "±5mm",
      "±4mm",
      "±2mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_31",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Độ rọi tiêu chuẩn của phòng kỹ thuật là?",
    "options": [
      "150 lux",
      "200 lux",
      "300 lux",
      "100 lux"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "4 Ω",
      "20 Ω",
      "10 Ω",
      "1 Ω"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 6V",
      "> 36V",
      "> 3V",
      "> 12V"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ampe kế",
      "Volt kế",
      "Ohm kế",
      "Đồng hồ vạn năng (thang điện dung)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khe hở tối thiểu giữa hai ống luồn dây nối cần:",
    "options": [
      "5mm",
      "0.5mm",
      "Không có khoảng hở",
      "1mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_34",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Dây đồng trần trong chống sét nên chôn sâu tối thiểu:",
    "options": [
      "0.8m",
      "1.0m",
      "0.3m",
      "0.5m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_25",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Số lượng dây trong ống luồn không vượt quá bao nhiêu % tiết diện ống?",
    "options": [
      "60%",
      "30%",
      "40%",
      "50%"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_72",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Công suất điện được tính",
    "options": [
      "P = U × I",
      "P = I / R",
      "P = R / U",
      "P = U / I"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_20",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Khi nối đất an toàn, điện trở nối đất cho thiết bị điện phải ≤ bao nhiêu Ohm?",
    "options": [
      "1",
      "10",
      "4",
      "2"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ampe kế",
      "Ohm kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_30",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Khi dòng khởi động motor cao, có thể dùng biện pháp nào?",
    "options": [
      "Chỉnh CB",
      "Sao - tam giác",
      "Khởi động trực tiếp",
      "Giảm điện áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "1 Ω",
      "20 Ω",
      "10 Ω",
      "4 Ω"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_19",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Độ rọi tiêu chuẩn khu vực văn phòng là bao nhiêu lux theo TCVN 7114?",
    "options": [
      "500",
      "200",
      "700",
      "300"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_70",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Để thể hiện rõ mối liên hệ về điện của các phần tử trong mạch điện ta dùng",
    "options": [
      "Sơ đồ nguyên lí và cấu tạo của mạch điện",
      "Sơ đồ nguyên lí của mạch điện",
      "Sơ đồ cấu tạo của mạch điện",
      "Sơ đồ lắp đặt của mạch điện"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_2",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Trong bản vẽ điện, ký hiệu MCB thể hiện thiết bị gì?",
    "options": [
      "Cầu chì",
      "Aptomat tép",
      "Tụ bù",
      "Máy biến áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng điện áp",
      "Tăng tổn hao",
      "Giảm dòng ngắn mạch",
      "Tăng hệ số công suất"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_10_39",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Khi lắp tủ điện, khoảng cách tối thiểu giữa tủ và tường phía sau là bao nhiêu?",
    "options": [
      "200mm",
      "50mm",
      "150mm",
      "100m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_10_54",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Hệ thống báo cháy phải đảm bảo liên động với những hệ nào?",
    "options": [
      "Quạt hút khói, quạt tăng áp cầu thang",
      "Thang máy, thang cuốn",
      "Chữa cháy tự động, hệ cấp gas",
      "Tất cả đều đúng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_10_17",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Aptomat tổng của công trình nên chọn theo tiêu chí nào?",
    "options": [
      "Idm theo thiết bị nhỏ nhất",
      "Idm ≥ 1,25 lần tổng tải tính toán",
      "Idm = tổng tải",
      "Idm < tải lớn nhất"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "3h",
      "4h",
      "1h",
      "2h"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_76",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Contactor dùng để",
    "options": [
      "Cấp nguồn",
      "Đo dòng điện",
      "Đóng cắt mạch điện công suất lớn",
      "Đo điện áp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_47",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Cấp bảo vệ IP tối thiểu cho ổ cắm khu vực ẩm ướt?",
    "options": [
      "IP33",
      "IP20",
      "IP55",
      "IP44"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_10_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Không",
      "Có",
      "Tùy tải",
      "Khi có vách ngăn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị chập một số vòng",
      "Cuộn dây bị đứt",
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị ẩm nên điện trở tăng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành quang năng.",
      "Cơ năng thành điện năng.",
      "Điện năng thành cơ năng",
      "Điện năng thành nhiệt năng."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thiết bị nào dùng để bảo vệ quá dòng cho mạch điện?",
    "options": [
      "Rơ-le nhiệt",
      "Aptomat",
      "CB (Circuit Breaker)",
      "Contactor"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong bản vẽ điện, ký hiệu MCB thể hiện thiết bị gì?",
    "options": [
      "Cầu chì",
      "Máy biến áp",
      "Aptomat tép",
      "Tụ bù"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dụng cụ đo điện trở cách điện là:",
    "options": [
      "Đồng hồ vạn năng",
      "Ohm kế",
      "Ampe kìm",
      "Megger"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "Contactor",
      "Cầu dao",
      "Cầu chì",
      "CB"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng tổn hao",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng hệ số công suất"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đóng điện thử tải, cầm kiểm tra thứ tự pha bằng:",
    "options": [
      "Thiết bị kiểm tra pha",
      "Đồng hồ vạn năng",
      "Ampe kìm",
      "Bút thử điện"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Điện trở của dây dẫn phụ thuộc chủ yếu vào:",
    "options": [
      "Đường kính",
      "Nhiệt độ",
      "Chiều dài",
      "Cả A, B, C"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "100 mA",
      "30 mA",
      "50 mA",
      "10 mA"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất",
      "Đóng cắt tải",
      "Giảm dòng khởi động"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tùy tải",
      "Tăng",
      "Giảm",
      "Không đổi"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi thi công ống luồn dây trong sàn bê tông, nên cố định bằng gì?",
    "options": [
      "Băng keo",
      "Dây thép buộc",
      "Ghim thép hoặc kẹp định vị",
      "Xi măng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đấu dây điều khiển trong tủ, đầu cos phải được xử lý thế nào?",
    "options": [
      "Để trần",
      "Hàn chết",
      "Dùng keo",
      "Bấm đầu cos, siết chặt vít"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong hệ thống chống sét, dây thoát sét thường làm bằng vật liệu gì?",
    "options": [
      "Đồng trần hoặc mạ kẽm",
      "Inox",
      "Nhôm",
      "Sắt trần"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đo điện trở đất bằng phương pháp 3 cực,  cực dòng và cực thế cách nhau tối thiểu bao nhiêu mét?",
    "options": [
      "20m",
      "5m",
      "10m",
      "2m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra pha thứ tự bằng bút thử, hiện tượng nào cho thấy sai thứ tự pha?",
    "options": [
      "Có tia lửa",
      "Động cơ quay ngược",
      "Bút sáng đỏ",
      "Bút không sáng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đấu cáp 3 pha 4 dây, dây trung tính nên đặt ở vị trí nào?",
    "options": [
      "Trên cùng",
      "Bên phải",
      "Bên trái",
      "Ở giữa hoặc dưới cùng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Mạch điều khiển contactor cần dùng điện áp điều khiển thông thường là bao nhiêu?",
    "options": [
      "12VDC",
      "24VDC",
      "110VAC",
      "220VAC"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp máng cáp tầng kỹ thuật, yêu cầu nghiêng dốc bao nhiêu để thoát nước?",
    "options": [
      "3⁰",
      "2⁰",
      "0⁰",
      "1⁰"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra tụ bù, điện dung giảm dưới bao nhiêu % thì cần thay thế?",
    "options": [
      "10%",
      "20%",
      "5%",
      "3%"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đặt thiết bị chiếu sáng tại khu vực ngoài trời, cần chú ý điều gì đầu tiên?",
    "options": [
      "Màu sắc đèn",
      "Độ rọi",
      "Nhiệt độ màu",
      "Cấp IP"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra điện áp pha, nếu một pha bị mất, hiện tượng nào dễ nhận biết nhất?",
    "options": [
      "Dòng tăng nhẹ",
      "Tụ bù hỏng",
      "Điện tắt, động cơ kêu",
      "Điện áp tang"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi nối dây cáp nhôm với đồng, cần dùng phụ kiện gì?",
    "options": [
      "Kẹp inox",
      "Keo dẫn điện",
      "Đầu nối trung gian bimetal",
      "Không cần"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra motor 3 pha bị nhảy CB, nguyên nhân thường gặp nhất là?",
    "options": [
      "Motor chạm vỏ hoặc chạm pha",
      "Dây nhỏ",
      "Điện áp cao",
      "CB yếu"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Bán kính uốn ống PVC phải ≥ mấy lần đường kính ống?",
    "options": [
      "4 lần",
      "10 lần",
      "8 lần",
      "6 lần"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đặt cáp trên khay, chiều cao xếp lớp không quá?",
    "options": [
      "5 lớp",
      "2 lớp",
      "4 lớp",
      "3 lớp"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kéo dây trong ống, khoảng cách tối đa giữa 2 hộp kéo là?",
    "options": [
      "40m",
      "25m",
      "50m",
      "30m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi thi công tại tầng hầm ẩm ướt, nên dùng loại ống nào?",
    "options": [
      "Óng théo mạ kẽm",
      "Ống ruột gà",
      "Ống nhựa mềm",
      "Ống PVC"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_28",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi luồn dây, nên kéo mấy người?",
    "options": [
      "4 người",
      "1 người",
      "2 người",
      "3 người"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đèn âm trần, cần phối hợp bộ môn nào trước?",
    "options": [
      "HVAC & trần",
      "PCCC",
      "Kết cấu",
      "Nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dây tín hiệu BMS cần có đặc điểm gì?",
    "options": [
      "Dây xoắn đôi",
      "Dây thường",
      "Cáp chống nhiễu",
      "Dây trơn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Nối đất tạm thời cho thiết bị khi thử điện để làm gì?",
    "options": [
      "Đo trở kháng",
      "Kiểm tra điện áp",
      "Tránh điện rò",
      "Thử dòng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp ống điện, thang máng cáp xuyên sàn trong PKT, cần xử lý gì?",
    "options": [
      "Không cần",
      "Trám keo",
      "Dán băng keo",
      "Fill kín chống cháy lan"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Bước đầu tiên khi đóng điện thử là?",
    "options": [
      "Cho tải chạy",
      "Đo dòng",
      "Bật CB chính",
      "Kiểm tra chiều pha"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Đèn exit & emergency cần cấp nguồn thế nào?",
    "options": [
      "Không yêu cầu",
      "3 nguồn",
      "1 nguồn",
      "2 nguồn (AC + DC)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_35",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kéo cáp dài >50m, cần thêm gì để giảm lực kéo?",
    "options": [
      "Dây rút",
      "Dầu bôi trơn chuyên dụng",
      "Dây dù",
      "Nước"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi chạy thử hệ thống, MCCB nhảy liên tục do?",
    "options": [
      "Nhiệt độ",
      "Dòng rò hoặc sai pha hoặc cân bằng tải chưa phù hợp",
      "Áp thấp",
      "Dây nhỏ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thiết bị ELCB có chức năng chính:",
    "options": [
      "Cắt khi quá áp",
      "Bảo vệ quá tải",
      "Cắt khi áp thấp",
      "Cắt điện khi có dòng rò"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_38",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thử cách điện dây dẫn dùng thiết bị:",
    "options": [
      "Megger",
      "Đồng hồ vạn năng",
      "Rơ-le",
      "Ampe kìm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_39",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi N và PE đấu chung, cần:",
    "options": [
      "Nối tạm",
      "Giữ nguyên",
      "Tách riêng",
      "Cắt PE"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_40",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trước khi nghiệm thu chiếu sáng, kiểm tra:",
    "options": [
      "Chiều cao lắp",
      "Màu ánh sáng",
      "Công suất bóng",
      "Cường độ sáng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Hệ công tắc hai chiều điều khiển 1 đèn gồm mấy dây chuyển mạch?",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Tủ điện phân phối (DB) thường được cấp nguồn từ đâu?",
    "options": [
      "Tủ ATS",
      "Tủ tổng (MDB)",
      "Tủ bơm",
      "Tủ chiếu sáng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_43",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra hệ thống tiếp địa định kỳ, thời gian đo lại tối thiểu là bao lâu/ lần?",
    "options": [
      "3 tháng",
      "24 tháng",
      "6 tháng",
      "12 tháng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_44",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi nhập vật tư dây cáp về công trình, bước kiểm tra đầu tiên là gì?",
    "options": [
      "Độ dài cuộn",
      "Nhãn mác, xuất xứ và chứng chỉ CO-CQ",
      "Màu sắc dây",
      "Trọng lượng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Volt kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_46",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Thường mở",
      "Không hoạt động",
      "Thường đóng",
      "Không nối đất"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_47",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra điện trở cách điện, giá trị nhỏ nhất được chấp nhận là bao nhiêu?",
    "options": [
      "1 MΩ",
      "0,5 MΩ",
      "0,1 MΩ",
      "10 MΩ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_48",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "20 Ω",
      "4 Ω",
      "10 Ω",
      "1 Ω"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_49",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong hệ thống điện công trình, dây trung tính (N) có nhiệm vụ chính là gì?",
    "options": [
      "Dẫn dòng tải mất cân bằng",
      "Tăng công suất pha",
      "Dẫn dòng ngắn mạch",
      "Dẫn dòng sự cố"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_50",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Cáp điện ngầm đi trong ống PVC phải được chôn sâu tối thiểu bao nhiêu mét the TCVN?",
    "options": [
      "0.5 m",
      "0.4 m",
      "0.7 m",
      "1.0 m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống PVC thường dùng cho hệ thống nào",
    "options": [
      "Dẫn gas",
      "Cấp nước lạnh và thoát nước",
      "Cấp nước nóng",
      "Dẫn dầu"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Độ dốc tối thiểu của ống thoát nước sinh hoạt thường là",
    "options": [
      "10%",
      "5%",
      "0.5%",
      "1–2%"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống PPR thường dùng cho",
    "options": [
      "Dẫn khí",
      "Thoát nước",
      "Cấp nước nóng lạnh",
      "Tưới cây"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi lắp ống thoát nước cần tránh điều gì?",
    "options": [
      "Có lỗ thăm",
      "Nhiều co gấp",
      "Ống thẳng",
      "Độ dốc phù hợp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Bẫy nước (P-trap) có tác dụng",
    "options": [
      "Lọc rác",
      "Ngăn mùi từ cống",
      "Tăng áp lực nước",
      "Làm sạch nước"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Van một chiều có chức năng",
    "options": [
      "Cho nước chảy một hướng",
      "Giảm áp",
      "Tăng áp",
      "Chặn rác"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Đồng hồ nước dùng để",
    "options": [
      "Tăng áp",
      "Đo lưu lượng nước",
      "Lọc nước",
      "Đo áp lực"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi làm việc với máy cắt cần",
    "options": [
      "B,C đều đúng",
      "Đeo kính và găng tay",
      "Mũ chụp máy cắt,te",
      "Bỏ mũ chụp máy để tiện thao tác"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thi công trên cao cần",
    "options": [
      "Dây an toàn và giàn giáo chắc chắn",
      "Đứng các hệ thống khác",
      "Không cần dây an toàn",
      "Dựng dàn giáo"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trước khi sửa ống nước cần",
    "options": [
      "Khóa nguồn nước",
      "Mở nước",
      "Đập tường",
      "Tháo van"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nguyên nhân phổ biến gây tắc cống",
    "options": [
      "Áp lực thấp",
      "Không có nước",
      "Ống quá to",
      "Rác và dầu mỡ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi phát hiện rò rỉ ống cần",
    "options": [
      "Mở nước lớn hơn",
      "Sửa hoặc thay đoạn ống",
      "Tăng áp nước",
      "Bỏ qua"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Độ dốc ống thoát quá lớn sẽ gây:",
    "options": [
      "Nước chảy nhanh, rác đọng lại",
      "Tắc ngay",
      "Ống vỡ",
      "Nước không chảy"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống cấp nước trong nhà thường dùng kích thước",
    "options": [
      "200 mm",
      "90 mm",
      "500 mm",
      "21–34 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Bơm tăng áp dùng khi:",
    "options": [
      "Nước bẩn",
      "Áp lực nước yếu",
      "Nước quá mạnh",
      "Nước nóng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống cấp nước nhà cao tầng, thiết bị nào dùng để ngăn nước ngược gây ô nhiễm nhiễm nguồn nước ?",
    "options": [
      "Van cổng",
      "Van xả khí",
      "Van giảm áp",
      "Van một chiều"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thử áp lực đường ống cấp nước PPR trong quá trình, thử áp lực bằng bao nhiêu để áp dụng công việc?",
    "options": [
      "2 lần áp lực làm việc",
      "1,25 lần áp lực làm việc",
      "1,5 lần áp lực làm việc",
      "1 lần áp lực làm việc"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi nối ống PPR, phương pháp thi công đúng là gì?",
    "options": [
      "Hàn nhiệt",
      "Hàn hồ quang",
      "Hàn điện",
      "Dán keo"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống thoát nước, bẫy nước (P-trap) được lắp đặt để làm gì?",
    "options": [
      "Giảm áp lực nước",
      "Ngăn mùi hôi từ ống thoát",
      "Tăng tốc độ thoát nước",
      "Giữ rác"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thi công ống thoát nước ngang DN90, độ dốc tối thiểu nên là bao nhiêu",
    "options": [
      "0.5 %",
      "5 %",
      "2 %",
      "1 %"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Cao độ ±0.000 là gì?",
    "options": [
      "Mốc chuẩn để đo cao độ",
      "Đáy móng",
      "Đỉnh mái",
      "Điểm cao nhất công trình"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Kí hiệu sau đây CW-D32; COP= FFL- 350 có nghĩa là:",
    "options": [
      "Ống nước lạnh D32, tim ống thấp hơn cốt sàn hoàn thiện 350 mm",
      "Ống thoát nước thải D32, đáy ống thấp hơn sàn 350 mm",
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm",
      "Ống nước lạnh D32, đỉnh ống thấp hơn sàn hoàn thiện 350 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Áp lực làm việc theo TCVN tại thiết bị thường nằm trong dải sau:",
    "options": [
      "2-4 bar",
      "1-2 bar",
      "6-8 bar",
      "4-6 bar"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống dài 10m cần chênh 15cm → độ dốc là:",
    "options": [
      "0.015%",
      "15%",
      "0.15%",
      "1,5%"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Từ cao độ tia laser bằng FL 1550mm, tại điểm cần xác định theo thiết kế bằng TOP = FL 350mm. Hỏi khoảng cách từ điểm đó đến tia laser là bao nhiêu?",
    "options": [
      "650 mm",
      "1350 mm",
      "1200 mm",
      "1250 mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trước khi dán ống uPVC, mục đích chính của việc vệ sinh và làm nhám nhẹ bề mặt là gì?",
    "options": [
      "Tăng độ bám dính của keo và loại bỏ lớp bóng, bụi bẩn",
      "Làm đẹp bề mặt ống",
      "Làm khô ống nhanh hơn",
      "Giảm đường kính ngoài của ống"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Thợ gia nhiệt ống D32 trong 15 giây (lớn hơn tiêu chuẩn). Lỗi kỹ thuật nào xảy ra?",
    "options": [
      "Tăng độ bền mối hàn",
      "Nhựa bị cháy hoặc biến tính → mối hàn giòn, giảm tuổi thọ",
      "Không ảnh hưởng nếu lắp nhanh",
      "Chỉ ảnh hưởng thẩm mỹ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_28",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": ". Chức năng quan trọng nhất của ống thông hơi phụ trong hệ thống thoát nước là gì?",
    "options": [
      "Giảm độ dốc tuyến ống",
      "Tăng lưu lượng nước thải",
      "Tăng áp lực trong ống",
      "Cân bằng áp suất trong ống, bảo vệ bẫy nước (xi phông) không bị hút hoặc đẩy khí ngược"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thi công đường ống đẩy của bơm, nếu không lắp khớp nối mềm, hậu quả chính là gì?",
    "options": [
      "Giảm lưu lượng",
      "Truyền rung động từ bơm sang đường ống → gây nứt, rò rỉ lâu dài",
      "Không ảnh hưởng",
      "Tăng áp lực nước"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu độ dốc quá lớn sẽ:",
    "options": [
      "Không ảnh hưởng",
      "Nước chảy nhanh, cặn đọng",
      "Tăng áp",
      "Tốt hơn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Kí hiệu sau đây VP-D60; BOP= FL 2450 có nghĩa là:",
    "options": [
      "Ống thoát nước thải D60, đỉnh ống ở cao độ +2450 mm so với sàn",
      "Ống thông hơi D60, đáy ống thấp hơn cốt sàn hoàn thiện 2450 mm",
      "Ống thông hơi D60, đáy ống ở cao độ +2450 mm so với cốt sàn (FL)",
      "Ống thông hơi D60, đáy ống cao hơn cốt sàn hoàn thiện 2450 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu áp thử quá thấp sẽ:",
    "options": [
      "Không sao",
      "Tốt hơn",
      "Không phát hiện rò rỉ",
      "Tăng áp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu độ dốc vượt 0.03 sẽ:",
    "options": [
      "Không ảnh hưởng",
      "Nước chảy nhanh, cặn đọng",
      "Tốt hơn",
      "Tăng áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu máy laser bị lệch cân bằng (không tự cân bằng đúng), hậu quả là gì?",
    "options": [
      "Không ảnh hưởng vì tia laser vẫn nhìn thấy",
      "Chỉ làm chậm tiến độ thi công",
      "Sai số cao độ trên toàn bộ các điểm đo",
      "Chỉ ảnh hưởng một điểm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_35",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Với ống PPR D32-PN20, thời gian gia nhiệt tiêu chuẩn là bao lâu?",
    "options": [
      "6 giây",
      "12 giây",
      "4 giây",
      "8 giây"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Chiều dài ống",
      "Độ dốc tuyến ống",
      "Áp lực ép và nhiệt độ gia nhiệt",
      "Màu sắc ống"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống cấp nước nhiều tầng, nếu không lắp van giảm áp (PRV) ở các tầng thấp, hậu quả là gì?",
    "options": [
      "Nước chảy yếu",
      "Tăng độ bền hệ thống",
      "Áp lực quá cao gây rò rỉ, hỏng thiết bị và giảm tuổi thọ hệ thống",
      "Không ảnh hưởng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_38",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Mốc A có cao độ +1,5m. Số đọc mia tại mốc A là 1,25 m. Tại điểm B, số đọc mia là    1,7 m. Hỏi cao độ điểm B là bao nhiêu?",
    "options": [
      "1.470 m",
      "1,05 m",
      "1,7 m",
      "2,95 m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_39",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi đo cao độ bằng máy thuỷ bình, số đọc được trên mia lớn hơn nhiều so với cao độ máy",
    "options": [
      "Kết quả đúng",
      "Điểm tại vị trí đo bằng cao độ máy",
      "Điểm tại vị trí đặt mia cao hơn cao độ máy",
      "Điểm tại vị trí đặt mia thấp hơn cao độ máy"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_40",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nhiệt độ tiêu chuẩn của tấm gia nhiệt (heater plate) khi hàn đối đầu ống HDPE là bao nhiêu?",
    "options": [
      "220 ± 10°C",
      "260 ± 10°C",
      "200 ± 10°C",
      "180 ± 10°C"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Sau khi lắp ống vào phụ kiện, thao tác kỹ thuật đúng là gì?",
    "options": [
      "Giữ cố định, không xoay và giữ lực ép trong vài giây",
      "Xoay ống nhiều vòng để keo phân bố đều",
      "Rút ra kiểm tra rồi lắp lại",
      "Gõ mạnh để tăng độ kín"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Tại các trục đứng cấp nước, yêu cầu kỹ thuật quan trọng nhất để đảm bảo vận hành lâu dài là gì?",
    "options": [
      "Dùng ống lớn nhất có thể",
      "Có biện pháp cố định và bù giãn nở nhiệt cho ống",
      "Lắp càng sát tường càng tốt",
      "Không cần giá đỡ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_43",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Việc sử dụng 2 cái “lơi (chếch)” tạo thành 1 cái co (cút 90˚) trong thoát nước có ý nghĩa gì?",
    "options": [
      "Tạo góc chuyển hướng êm hơn, giảm tắc nghẽn và giảm va đập dòng chảy",
      "Làm tăng áp lực dòng chảy trong ống",
      "Giảm tốc độ nước để tránh bắn ngược",
      "Giảm chi phí vật tư so với dùng co 90°"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_44",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống thoát dài 18m, yêu cầu độ dốc 0.004 → chênh cao là:",
    "options": [
      "4cm",
      "18cm",
      "72cm",
      "7.2cm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Chỉ cần trát lại là không nứt",
      "Cắt liên tục nhiều rãnh sát nhau",
      "Cắt rãnh sâu và rộng tùy ý",
      "Không cắt quá sâu, không làm gián đoạn kết cấu tường và hạn chế rãnh quá dài liên tục"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_46",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Yêu cầu kỹ thuật nào sau đây là đúng sau khi hoàn thành mối hàn HDPE đạt chuẩn?",
    "options": [
      "Gờ hàn lệch về một phía để dễ kiểm tra",
      "Gờ hàn đều hai bên, đối xứng, không có khe hở hoặc cháy nhựa",
      "Không cần gờ hàn nếu áp lực đủ lớn",
      "Gờ hàn càng nhỏ càng tốt"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_47",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Sau khi gia nhiệt ống và phụ kiện PPR đúng thời gian, thợ đưa ống vào phụ kiện nhưng có xoay nhẹ để “cho đều”. Hậu quả chính là gì?",
    "options": [
      "Giúp mối hàn đẹp hơn",
      "Không ảnh hưởng",
      "Tăng độ kín",
      "Phá vỡ lớp nhựa nóng chảy → mối hàn yếu, dễ rò rỉ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_48",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Đơn vị đo áp suất phổ biến là:",
    "options": [
      "bar",
      "Pa",
      "kg/cm²",
      "Cả 3 ý trên"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_49",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Kí hiệu sau đây TR-D110; BOP= FFL- 750 có nghĩa là:",
    "options": [
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm",
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_50",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Thời gian lắp ghép sau khi bôi keo dán uPVC (ở điều kiện bình thường) nên thực hiện trong khoảng nào là tối ưu?",
    "options": [
      "Có thể để 5 phút rồi lắp",
      "Trong vòng 10–20 giây",
      "Trong vòng 60 giây",
      "Trong vòng 30 giây"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Áp lực nước trong nhà ở thường khoảng",
    "options": [
      "50 bar",
      "10 bar",
      "0.5 – 3 bar",
      "20 bar"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi ren ống thép cần dùng vật liệu gì để làm kín?",
    "options": [
      "Sơn",
      "Băng tan (PTFE)",
      "Xi măng",
      "Keo gỗ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Đường kính ống càng lớn thì:",
    "options": [
      "Lưu lượng càng lớn",
      "Lưu lượng giảm",
      "Áp lực tăng",
      "Không thay đổi"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Hệ thống thoát nước mưa nên",
    "options": [
      "Chung với nước thải",
      "Không cần ống",
      "Tách riêng",
      "Đổ trực tiếp vào nhà"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Hố ga dùng để:",
    "options": [
      "Tăng áp lực",
      "Trữ nước",
      "Lọc nước uống",
      "Kiểm tra và vệ sinh đường ống"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Ống thông hơi trong hệ thống thoát nước có tác dụng",
    "options": [
      "Thoát khí và cân bằng áp suất",
      "Làm sạch ống",
      "Tăng áp lực",
      "Lọc nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi thử áp lực hệ thống cần",
    "options": [
      "kiểm tra rò rỉ ống",
      "Xả hết nước",
      "khóa kín và nén khí để thử kín",
      "Bơm nước áp lực kiểm tra rò rỉ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "ống PN8 và phụ kiện PN5 có dùng chung với nhau được không",
    "options": [
      "KHÔNG",
      "CÓ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "ống PN10 và phụ kiện PN16 có dùng chung với nhau được không",
    "options": [
      "KHÔNG",
      "CÓ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "10.\tCác ống HDPE size bao nhiêu thì có thể dùng phụ kiện ren để kết nối?",
    "options": [
      "D32- D110",
      "D50-D110",
      "D75-D200",
      "D20 đến D90"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "kích thước ống HDPE bao nhiêu thì phải dùng phương pháp hàn",
    "options": [
      "D32- D110",
      "D90-D200",
      "D20 đến D90",
      "D50-D110"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi làm việc với máy cắt cần",
    "options": [
      "lắp dủ cover của máy và đeo đầy đủ bảo hộ (kính, găng tay…)",
      "Không cần bảo hộ",
      "Đeo kính và găng tay",
      "tháo cover (tấm che của máy) để dễ thi công"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi thi công trên cao cần",
    "options": [
      "Đứng trên ống nước",
      "Dây an toàn và giàn giáo chắc chắn",
      "Leo trực tiếp tường",
      "Không cần dây an toàn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Các điều kiện cần và đủ để triển khai thi công là gì",
    "options": [
      "Mặt bằng, vật tư, bản vẽ shop, biện pháp thi công, nhân lực thầu phụ, tiện ích",
      "Mặt bằng, vật tư, bản vẽ shop, nhân lực thầu phụ, tiện ích",
      "Mặt bằng, vật tư, bản vẽ shop, biện pháp thi công, tiện ích",
      "Mặt bằng, vật tư, bản vẽ shop"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi thử áp lực đường ống cấp nước PPR trong quá trình, thử áp lực bằng bao nhiêu để áp dụng công việc\n\nA. 1 lần áp lực làm việc",
    "options": [
      "1 lần áp lực làm việc",
      "1,5 lần áp lực làm việc",
      "1,25 lần áp lực làm việc",
      "2 lần áp lực làm việc"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Mốc A có cao độ +1,5m. Số đọc mia tại mốc A là 1,25 m. Tại điểm B, số đọc mia là    1,7 m. Hỏi cao độ điểm B là bao nhiêu?",
    "options": [
      "1.470 m",
      "1,7 m",
      "1,05 m",
      "2,95 m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi đo cao độ bằng máy thuỷ bình, số đọc được trên mia lớn hơn nhiều so với cao độ máy",
    "options": [
      "Điểm tại vị trí đặt mia cao hơn cao độ máy",
      "Điểm tại vị trí đặt mia thấp hơn cao độ máy",
      "Điểm tại vị trí đo bằng cao độ máy",
      "Kết quả đúng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nhiệt độ tiêu chuẩn của tấm gia nhiệt (heater plate) khi hàn đối đầu ống HDPE là bao nhiêu?",
    "options": [
      "260 ± 10°C",
      "180 ± 10°C",
      "200 ± 10°C",
      "220 ± 10°C"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây TR-D110; BOP= FFL- 750 có nghĩa là:",
    "options": [
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm",
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm",
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Thời gian lắp ghép sau khi bôi keo dán uPVC (ở điều kiện bình thường) nên thực hiện trong khoảng nào là tối ưu?",
    "options": [
      "Có thể để 5 phút rồi lắp",
      "Trong vòng 10–20 giây",
      "Trong vòng 30 giây",
      "Trong vòng 60 giây"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Yêu cầu kỹ thuật nào sau đây là đúng sau khi hoàn thành mối hàn HDPE đạt chuẩn?",
    "options": [
      "Không cần gờ hàn nếu áp lực đủ lớn",
      "Gờ hàn lệch về một phía để dễ kiểm tra",
      "Gờ hàn càng nhỏ càng tốt",
      "Gờ hàn đều hai bên, đối xứng, không có khe hở hoặc cháy nhựa"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Cắt rãnh sâu và rộng tùy ý",
      "Cắt liên tục nhiều rãnh sát nhau",
      "Chỉ cần trát lại là không nứt",
      "Không cắt quá sâu, không làm gián đoạn kết cấu tường và hạn chế rãnh quá dài liên tục"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Tại các trục đứng cấp nước, yêu cầu kỹ thuật quan trọng nhất để đảm bảo vận hành lâu dài là gì?",
    "options": [
      "Lắp càng sát tường càng tốt",
      "Không cần giá đỡ",
      "Dùng ống lớn nhất có thể",
      "Có biện pháp cố định và bù giãn nở nhiệt cho ống"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Chiều dài ống",
      "Độ dốc tuyến ống",
      "Màu sắc ống",
      "Áp lực ép và nhiệt độ gia nhiệt"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nếu máy laser bị lệch cân bằng (không tự cân bằng đúng), hậu quả là gì?",
    "options": [
      "Chỉ làm chậm tiến độ thi công",
      "Không ảnh hưởng vì tia laser vẫn nhìn thấy",
      "Sai số cao độ trên toàn bộ các điểm đo",
      "Chỉ ảnh hưởng một điểm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Áp lực làm việc theo TCVN tại thiết bị thường nằm trong dải sau:",
    "options": [
      "2-4 bar",
      "1-2 bar",
      "6-8 bar",
      "4-6 bar"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây CW-D32; COP= FFL- 350 có nghĩa là:",
    "options": [
      "Ống nước lạnh D32, tim ống thấp hơn cốt sàn hoàn thiện 350 mm",
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm",
      "Ống thoát nước thải D32, đáy ống thấp hơn sàn 350 mm",
      "Ống nước lạnh D32, đỉnh ống thấp hơn sàn hoàn thiện 350 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_28",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Cao độ ±0.000 là gì?",
    "options": [
      "Mốc chuẩn để đo cao độ",
      "Đáy móng",
      "Điểm cao nhất công trình",
      "Đỉnh mái"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Từ cao độ tia laser bằng FL 1550mm, tại điểm cần xác định theo thiết kế bằng TOP = FL 350mm. Hỏi khoảng cách từ điểm đó đến tia laser là bao nhiêu?",
    "options": [
      "1350 mm",
      "650 mm",
      "1250 mm",
      "1200 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Yêu cầu kỹ thuật nào sau đây là đúng sau khi hoàn thành mối hàn HDPE đạt chuẩn?",
    "options": [
      "Không cần gờ hàn nếu áp lực đủ lớn",
      "Gờ hàn càng nhỏ càng tốt",
      "Gờ hàn lệch về một phía để dễ kiểm tra",
      "Gờ hàn đều hai bên, đối xứng, không có khe hở hoặc cháy nhựa"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Sau khi gia nhiệt ống và phụ kiện PPR đúng thời gian, thợ đưa ống vào phụ kiện nhưng có xoay nhẹ để “cho đều”. Hậu quả chính là gì?",
    "options": [
      "Phá vỡ lớp nhựa nóng chảy → mối hàn yếu, dễ rò rỉ",
      "Giúp mối hàn đẹp hơn",
      "Không ảnh hưởng",
      "Tăng độ kín"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Đơn vị đo áp suất phổ biến là:",
    "options": [
      "Cả 3 ý trên",
      "bar",
      "Pa",
      "kg/cm²"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây TR-D110; BOP= FFL- 750 có nghĩa là:",
    "options": [
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm",
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Thời gian lắp ghép sau khi bôi keo dán uPVC (ở điều kiện bình thường) nên thực hiện trong khoảng nào là tối ưu?",
    "options": [
      "Có thể để 5 phút rồi lắp",
      "Trong vòng 30 giây",
      "Trong vòng 10–20 giây",
      "Trong vòng 60 giây"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_40",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nhiệt độ tiêu chuẩn của tấm gia nhiệt (heater plate) khi hàn đối đầu ống HDPE là bao nhiêu?",
    "options": [
      "260 ± 10°C",
      "180 ± 10°C",
      "200 ± 10°C",
      "220 ± 10°C"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Sau khi lắp ống vào phụ kiện, thao tác kỹ thuật đúng là gì?",
    "options": [
      "Gõ mạnh để tăng độ kín",
      "Xoay ống nhiều vòng để keo phân bố đều",
      "Giữ cố định, không xoay và giữ lực ép trong vài giây",
      "Rút ra kiểm tra rồi lắp lại"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây VP-D60; BOP= FL 2450 có nghĩa là:",
    "options": [
      "Ống thông hơi D60, đáy ống thấp hơn cốt sàn hoàn thiện 2450 mm",
      "Ống thông hơi D60, đáy ống cao hơn cốt sàn hoàn thiện 2450 mm",
      "Ống thoát nước thải D60, đỉnh ống ở cao độ +2450 mm so với sàn",
      "Ống thông hơi D60, đáy ống ở cao độ +2450 mm so với cốt sàn (FL)"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Theo TCVN 5738:2021, khoảng cách tối đa từ bất kỳ điểm nào trên trần nhà đến đầu báo khói tự động trong phòng phẳng có chiều cao dưới 3.5m là bao nhiêu?",
    "options": [
      "Bán kính bảo vệ r = 3m",
      "Bán kính bảo vệ r = 15m",
      "Bán kính bảo vệ r = 6.5m (diện tích bảo vệ đến 85m²)",
      "Bán kính bảo vệ r = 10m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách tối thiểu từ đầu báo cháy tự động (khói/nhiệt) đến mép tường nhà hoặc góc tường theo tiêu chuẩn TCVN 5738:2021 là bao nhiêu?",
    "options": [
      "Tối thiểu ≥ 3.0m",
      "Phải lắp sát góc tường 0cm",
      "Tối thiểu ≥ 1.5m",
      "Tối thiểu ≥ 0.1m (10cm)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách lắp đặt tối thiểu từ đầu báo cháy tự động đến miệng thổi của hệ thống thông gió/điều hòa không khí để tránh dòng gió làm lệch khói là bao nhiêu?",
    "options": [
      "Tối thiểu ≥ 0.2m",
      "Tối thiểu ≥ 1.5m",
      "Có thể lắp trực tiếp sát miệng thổi 0.1m",
      "Tối thiểu ≥ 5.0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Độ cao lắp đặt tiêu chuẩn cho Nút ấn báo cháy bằng tay (Manual Call Point) tính từ mặt sàn hoàn thiện đến tâm nút ấn là bao nhiêu?",
    "options": [
      "Độ cao sát mặt sàn 0.2m",
      "Độ cao từ 2.0m đến 2.5m",
      "Độ cao từ 1.3m đến 1.5m",
      "Độ cao từ 0.5m đến 0.8m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Theo TCVN 5738:2021, dây tín hiệu báo cháy (Loop/Zone) khi đi xuyên qua tường hoặc sàn nhà bắt buộc phải thi công kỹ thuật như thế nào?",
    "options": [
      "Đi dây trần trực tiếp qua lỗ đục gạch",
      "Phải lồng trong ống bảo vệ (PVC/thép) và chèn kín khe hở bằng vật liệu chống cháy",
      "Dùng băng dính quấn quanh dây",
      "Kẹp đinh thép trực tiếp vào bê tông"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Yêu cầu nguồn điện dự phòng (Acquy) cấp cho Trung tâm báo cháy tự động phải duy trì hoạt động tối thiểu bao nhiêu giờ ở chế độ thường trực và chế độ báo cháy?",
    "options": [
      "Duy trì 12 giờ thường trực và 15 phút báo cháy",
      "Không cần acquy dự phòng",
      "Duy trì tối thiểu 24 giờ ở chế độ thường trực và 1 giờ ở chế độ báo cháy liên tục",
      "Duy trì 1 giờ thường trực và 5 phút báo cháy"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Đầu báo cháy nhiệt gia tăng (Rate-of-Rise Heat Detector) kích hoạt phát tín hiệu báo cháy dựa trên nguyên lý nào?",
    "options": [
      "Phát hiện rò rỉ khí gas",
      "Phát hiện nồng độ khói mờ trong không khí",
      "Phát hiện tốc độ gia tăng nhiệt độ môi trường vượt quá ngưỡng quy định (thường từ 8°C - 10°C/phút)",
      "Phát hiện tia cực tím từ ngọn lửa"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC BCCC Bậc 2 & Bậc 3",
    "question": "Điện áp hoạt động tiêu chuẩn của các thiết bị đầu báo cháy, chuông, còi và đèn chớp trong hệ thống báo cháy tự động kênh/địa chỉ thường là bao nhiêu?",
    "options": [
      "220V AC",
      "24V DC (Điện áp một chiều 24V an toàn)",
      "12V AC",
      "380V AC"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách giữa các Nút ấn báo cháy bằng tay bố trí dọc theo hành lang thoát nạn không được vượt quá bao nhiêu mét?",
    "options": [
      "Không vượt quá 50m (hoặc 30m đối với khu vực nguy hiểm cháy cao)",
      "Không vượt quá 150m",
      "Chỉ lắp 1 nút duy nhất ở cổng chính",
      "Không vượt quá 100m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Chuông báo cháy và còi/đèn chớp báo cháy lắp đặt tại khu vực hành lang nhà phải đảm bảo độ ồn tối thiểu cao hơn độ ồn môi trường xung quanh là bao nhiêu dBA?",
    "options": [
      "Cao hơn 2 dBA",
      "Đạt tối đa 30 dBA",
      "Cao hơn độ ồn môi trường ít nhất 15 dBA (hoặc đạt tối thiểu 75 dBA tại khoảng cách 3m)",
      "Không quy định độ ồn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Theo TCVN 7336:2021, nhiệt độ kích hoạt nổ chốt thủy tinh màu ĐỎ của đầu phun Sprinkler tiêu chuẩn (68°C) áp dụng cho môi trường làm việc nào?",
    "options": [
      "Khu vực lò hơi 150°C",
      "Khu vực đông lạnh -20°C",
      "Khu vực sấy nông sản 100°C",
      "Môi trường nhiệt độ thường, nhiệt độ môi trường tối đa không vượt quá 38°C"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách từ tấm định hướng của đầu phun Sprinkler hướng xuống (Pendent) đến trần nhà phẳng tối thiểu và tối đa là bao nhiêu?",
    "options": [
      "Sát trần 0cm",
      "Từ 0.5m đến 0.8m",
      "Từ 0.075m (7.5cm) đến 0.15m (15cm) [hoặc tối đa 0.3m]",
      "Từ 1.0m đến 2.0m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Bán kính bảo vệ hoặc khoảng cách tối đa giữa 2 đầu phun Sprinkler trên cùng một nhánh ống chữa cháy trong không gian nguy hiểm cháy trung bình (Nhóm II) là bao nhiêu?",
    "options": [
      "Khoảng cách ≤ 8.0m",
      "Khoảng cách 1.0m",
      "Khoảng cách ≤ 10.0m",
      "Khoảng cách giữa 2 đầu phun ≤ 3.5m đến 4.0m (bán kính bảo vệ r ≈ 2.0m - 2.1m)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Áp suất làm việc tối thiểu tại đầu phun Sprinkler xa nhất và cao nhất của hệ thống chữa cháy Sprinkler tự động phải đạt bao nhiêu bar (MPa)?",
    "options": [
      "Tối thiểu ≥ 0.5 bar (0.05 MPa / 0.5 kg/cm²)",
      "Tối thiểu ≥ 10.0 bar",
      "Tối thiểu ≥ 20.0 bar",
      "Tối thiểu ≥ 0.01 bar"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Cụm van báo động (Alarm Valve / Alarm Check Valve) trong hệ thống Sprinkler đường ống ướt có chức năng chính là gì?",
    "options": [
      "Mở cho nước chảy đến đầu phun khi có cháy, đồng thời kích hoạt chuông nước (Water Motor Gong) và công tắc áp lực báo về tủ trung tâm",
      "Khóa chặt nước không cho nước chảy",
      "Hút khí vào đường ống",
      "Giảm áp suất nước xuống 0"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Trường hợp khu vực thi công có trần treo thạch cao, quy định lắp đặt đầu phun Sprinkler như thế nào?",
    "options": [
      "Cắt thủng trần thạch cao 1m²",
      "Lắp đầu phun Sprinkler hướng xuống (Pendent) nhô ra dưới trần thạch cao; nếu khoảng không gian trên trần >0.75m có vật liệu cháy thì phải lắp thêm Sprinkler quay lên trên trần",
      "Không được lắp Sprinkler dưới trần thạch cao",
      "Chỉ lắp 1 đầu trên trần bê tông giấu kín"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Hệ thống chữa cháy tràn ngập (Deluge System) sử dụng loại đầu phun nào và nguyên lý kích hoạt xả nước ra sao?",
    "options": [
      "Xả bằng bọt foam",
      "Sử dụng đầu phun hở (Open Sprinkler); khi trung tâm báo cháy nhận tín hiệu từ 2 đầu báo cháy sẽ mở van Deluge Valve xả nước đồng loạt qua tất cả các đầu phun",
      "Sử dụng đầu phun kín chốt thủy tinh 68°C",
      "Mở từng đầu phun thủ công bằng tay"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Đường kính định danh (DN) tối thiểu của đường ống cấp nước chữa cháy chính dẫn tới cụm van Alarm Valve theo tiêu chuẩn TCVN 7336:2021 là bao nhiêu?",
    "options": [
      "Tối thiểu DN80 hoặc DN100 (tùy thuộc vào số lượng đầu phun)",
      "DN32",
      "DN25",
      "DN15"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Quy định về thử kín và thử áp lực thủy lực đối với mạng đường ống chữa cháy Sprinkler trước khi bọc cách nhiệt hoặc đưa vào nghiệm thu là bao nhiêu?",
    "options": [
      "Không cần thử áp lực",
      "Thử áp lực bằng nước với áp suất bằng 1.5 lần áp suất làm việc (tối thiểu 1.0 MPa đến 1.5 MPa) duy trì trong 2 giờ không sụt áp",
      "Thử áp suất 0.1 MPa trong 5 phút",
      "Thử nén hơi 0.05 MPa"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Công tắc dòng chảy (Flow Switch) được lắp đặt trên các nhánh ống chữa cháy Sprinkler tầng nhằm mục đích gì?",
    "options": [
      "Lọc rác trong đường ống",
      "Tăng áp suất nước trong ống",
      "Phát hiện dòng nước di chuyển khi có đầu phun Sprinkler bị nổ và gửi tín hiệu báo chính xác vị trí tầng đang có cháy về tủ trung tâm",
      "Khóa đường ống nước khi có sự cố"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Chiều cao lắp đặt tiêu chuẩn của Hộp chữa cháy vách tường (chứa van họng nước D50/D65, cuộn vòi và lăng phun) tính từ mặt sàn đến tâm van họng nước là bao nhiêu?",
    "options": [
      "Độ cao 2.5m",
      "Độ cao 0.3m",
      "Độ cao 1.25m (±0.05m)",
      "Đặt nằm trên sàn nhà"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Áp suất tự do tối thiểu tại miệng lăng phun chữa cháy vách tường khi hệ thống hoạt động xả nước để đảm bảo chiều cao cột nước chữa cháy đạt hiệu quả là bao nhiêu?",
    "options": [
      "Tối thiểu 50.0 bar",
      "Tối thiểu 0.1 bar",
      "Tối thiểu 20.0 bar",
      "Tối thiểu ≥ 2.0 bar (0.2 MPa / cột nước chữa cháy ≥ 6m - 10m)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Độ dài tiêu chuẩn của một cuộn vòi chữa cháy dải vải bọc cao su (D50 hoặc D65) trang bị trong tủ PCCC vách tường là bao nhiêu mét?",
    "options": [
      "Độ dài 5m",
      "Độ dài 100m",
      "Độ dài 50m",
      "Độ dài 20m (hoặc 30m theo thiết kế)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Trụ nước chữa cháy ngoài nhà 3 cửa (1 cửa D125/D100 và 2 cửa D65) phải được lắp đặt cách mép đường giao thông tối đa bao nhiêu mét?",
    "options": [
      "Cách mép đường 20m",
      "Cách tường nhà 0.1m",
      "Lắp giữa lòng đường giao thông",
      "Cách mép đường không quá 2.5m và cách tường nhà tối thiểu 5.0m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách tối đa giữa các Trụ nước chữa cháy ngoài nhà bố trí dọc theo đường giao thông nội bộ công trình là bao nhiêu mét?",
    "options": [
      "Khoảng cách không vượt quá 30m",
      "Chỉ lắp 1 trụ cho toàn khu",
      "Khoảng cách giữa 2 trụ nước không vượt quá 150m",
      "Khoảng cách không vượt quá 500m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Họng tiếp nước chữa cháy ngoài nhà (Siamese Connection D65x2) dành cho xe chữa cháy bơm cấp nước vào tòa nhà bắt buộc trang bị van một chiều nhằm mục đích gì?",
    "options": [
      "Cho phép xe chữa cháy bơm nước một chiều vào mạng đường ống tòa nhà và ngăn nước trong nhà chảy ngược ra ngoài",
      "Cho nước chảy tự do hai chiều",
      "Xả bớt áp suất nước ngoài đường",
      "Hút khí vào tòa nhà"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Vật liệu chế tạo lăng phun và khớp nối cuộn vòi chữa cháy vách tường D50/D65 tiêu chuẩn PCCC Việt Nam thường là gì?",
    "options": [
      "Gỗ nén ép",
      "Hợp kim nhôm đúc hoặc đồng thau mạ niken chịu lực va đập và chống ăn mòn",
      "Nhựa tái chế mỏng",
      "Thủy tinh mỏng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_28",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Quy trình nghiệm thu kiểm tra thử cuộn vòi chữa cháy trước khi đưa vào trang bị sử dụng:",
    "options": [
      "Ngâm vòi trong xăng",
      "Thổi hơi bằng miệng",
      "Chỉ cần mở vòi ra phơi nắng",
      "Thử áp lực thủy lực cuộn vòi ở áp suất thử 1.2 - 1.6 MPa trong 2 phút không phồng rách, khớp nối xoay nhẹ khít gioăng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Theo QCVN 02:2020/BCA, cụm bơm chữa cháy chính của tòa nhà bắt buộc phải trang bị các loại bơm nào?",
    "options": [
      "Chỉ dùng 1 máy bơm tay",
      "Không cần bơm dự phòng",
      "Bơm chữa cháy động cơ điện chính + Bơm dự phòng (bơm động cơ Diesel hoặc điện nguồn riêng) + Bơm bù áp Jockey",
      "Chỉ cần 1 máy bơm nước gia đình 1HP"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Chức năng chính của Máy bơm bù áp (Jockey Pump) trong cụm máy bơm chữa cháy tự động là gì?",
    "options": [
      "Dùng để chữa cháy chính khi có đám cháy lớn",
      "Đổi chiều dòng chảy",
      "Bù đắp lượng nước rò rỉ nhỏ để duy trì áp suất thường trực trong đường ống ở mức thiết kế mà không làm khởi động bơm chính",
      "Hút kiệt nước trong bể"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Cơ chế tự động khởi động máy bơm chữa cháy chính khi áp suất đường ống bị sụt giảm do nổ Sprinkler hoặc mở họng nước là nhờ thiết bị nào?",
    "options": [
      "Cảm biến nhiệt độ không khí",
      "Công tắc áp lực (Pressure Switch) lắp trên bình tích áp / cụm ống góp máy bơm",
      "Công tắc hành trình cửa",
      "Bật công tắc bằng tay"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Theo quy chuẩn PCCC, sau khi máy bơm chữa cháy điện chính hoặc bơm Diesel tự động khởi động chạy chữa cháy, quy định dừng máy bơm như thế nào?",
    "options": [
      "Tự động dừng khi áp suất tăng cao",
      "Dừng khi hết nước bể",
      "Máy bơm chữa cháy chính KHÔNG ĐƯỢC TỰ ĐỘNG DỪNG, chỉ được dừng máy thủ công bằng tay tại tủ điều khiển sau khi đã dập tắt cháy",
      "Tự động dừng sau 1 phút"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Yêu cầu dung tích bình nhiên liệu Dầu Diesel cấp cho máy bơm chữa cháy động cơ Diesel dự phòng phải đảm bảo máy chạy liên tục tối thiểu bao nhiêu giờ?",
    "options": [
      "Đảm bảo cho máy bơm Diesel vận hành liên tục 100% tải trong thời gian tối thiểu từ 3 đến 4 giờ",
      "Đảm bảo chạy 10 phút",
      "Dùng bình xăng 2 lít",
      "Đảm bảo chạy 1 phút"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Đường ống hút của máy bơm chữa cháy (Suction Line) bắt buộc phải lắp đặt phụ kiện gì để tránh hiện tượng đọng bọt khí gây sâm thực bơm?",
    "options": [
      "Lắp van tiết lưu đường kính nhỏ",
      "Lắp Côn thu đồng tâm",
      "Lắp Côn thu lệch tâm (Eccentric Reducer) có mặt phẳng nằm ở phía trên đường ống hút",
      "Lắp ống uốn cong rủ xuống"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_35",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Tủ điều khiển máy bơm chữa cháy (Fire Pump Controller) phải đáp ứng tiêu chuẩn điện bảo vệ và chế độ khởi động bơm như thế nào?",
    "options": [
      "Cấp bảo vệ tối thiểu IP54/IP55, có chế độ TỰ ĐỘNG (Auto) và BẰNG TAY (Manual), khởi động sao/tam giác hoặc biến tần/khởi động mềm",
      "Dùng cầu dao đảo chiều 2 pha",
      "Cấp bảo vệ IP10",
      "Chỉ có chế độ điều khiển bằng tay"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Thử tải cụm bơm chữa cháy trong nghiệm thu PCCC công trình (Commissioning Fire Pump Test): Yêu cầu thời gian chạy thử tải liên tục là bao nhiêu?",
    "options": [
      "Chạy kiểm tra liên tục 2 giờ (bơm điện và bơm Diesel) đạt 100% và 150% lưu lượng thiết kế, thông số áp suất và nhiệt độ động cơ ổn định",
      "Chạy thử 2 phút",
      "Chỉ cần nhấp nháy động cơ",
      "Chạy thử 10 giây"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Hệ thống chữa cháy bằng khí sạch (FM200 / Novec 1230 / Nitrogen) thường được ưu tiên thiết kế thi công cho các khu vực nào?",
    "options": [
      "Bãi xe ô tô ngoài trời",
      "Nhà bếp nấu ăn",
      "Sân thượng ngoài trời",
      "Phòng máy chủ Data Center, phòng tổng đài, trung tâm điều khiển, phòng lưu trữ hồ sơ tài liệu quý"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_38",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Quy trình cảnh báo và trì hoãn thời gian xả khí (Delay Time 30 giây) của hệ thống chữa cháy khí khi có tín hiệu báo cháy kích hoạt nhằm mục đích gì?",
    "options": [
      "Để chờ xe chữa cháy đến",
      "Trì hoãn xả khí 24 giờ",
      "Để khí tự làm mát trong bình",
      "Cho phép sơ tán toàn bộ người ra khỏi phòng kín và đóng chặt các cửa gió/quạt thông gió trước khi xả khí"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_39",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Thiết bị Công tắc áp lực xả khí (Discharge Pressure Switch) lắp trên đường ống xả khí chữa cháy FM200 có nhiệm vụ gì?",
    "options": [
      "Gửi tín hiệu xác nhận khí ĐÃ XẢ về tủ điều khiển trung tâm để bật Đèn cảnh báo 'KHÍ ĐÃ XẢ - CẤM VÀO' ngoài cửa phòng",
      "Tắt toàn bộ đèn chiếu sáng",
      "Bật quạt hút khói",
      "Khóa van gas sinh hoạt"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_40",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Nguồn kích hoạt xả khí tự động từ tủ trung tâm chữa cháy khí đến van kích hoạt bình chứa khí (Solenoid Valve) sử dụng điện áp bao nhiêu?",
    "options": [
      "Điện áp 220V AC",
      "Điện áp 110V AC",
      "Điện áp 380V AC",
      "Điện áp 24V DC"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Yêu cầu độ kín của phòng (Room Integrity Test) được bảo vệ bằng hệ thống chữa cháy khí FM200/CO2 khi xả khí là gì?",
    "options": [
      "Bật quạt hút gió tối đa khi xả khí",
      "Phòng phải kín hoàn toàn, tự động ngắt hệ thống điều hòa thông gió và đóng van ngăn cháy (FD) khi có lệnh xả khí",
      "Không cần cửa kín",
      "Mở toang tất cả các cửa sổ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khi chữa cháy bằng khí CO2 trong không gian kín, nguy hiểm lớn nhất đối với kỹ thuật viên và con người là gì?",
    "options": [
      "Khí CO2 làm giảm nồng độ Oxy xuống dưới 15% gây ngạt thở cấp tính dẫn đến tử vong nhanh chóng",
      "Gây dị ứng da nhẹ",
      "Không có nguy hiểm gì",
      "Gây tiếng ồn nhẹ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_43",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Nút ấn xả khí khẩn cấp bằng tay (Manual Release Button) và Nút ấn tạm dừng xả khí (Abort Button) phải được bố trí ở đâu?",
    "options": [
      "Bố trí bên ngoài lối ra vào cửa chính của phòng được bảo vệ, ở độ cao dễ thao tác 1.3m - 1.4m",
      "Giấu kín trên trần kỹ thuật",
      "Đặt bên trong két sắt khóa chặt",
      "Đặt dưới đáy bình khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_44",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Bình chữa cháy xách tay dạng bột ABC (như MFZL4, MFZL8) thích hợp dùng để dập tắt các loại đám cháy nào?",
    "options": [
      "Không dập được cháy điện",
      "Chỉ dập được cháy kim loại kiềm Na, K",
      "Đám cháy chất rắn (Class A), chất lỏng (Class B), chất khí (Class C) và thiết bị điện mang điện",
      "Chỉ dập cháy nước"
    ],
    "correct_index": 2
  },
  {
    "id": "q_pccc_theory_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Đồng hồ đo áp suất (Manometer) trên cổ bình chữa cháy bột ABC chỉ vạch màu XANH (Green) báo hiệu trạng thái gì của bình?",
    "options": [
      "Áp suất khí nén trong bình đủ tiêu chuẩn làm việc (bình bình thường sẵn sàng sử dụng)",
      "Bình bị hỏng vỏ",
      "Bình bị hết áp khí nén (tụt áp)",
      "Bình bị quá áp nguy hiểm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_46",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Bình chữa cháy xách tay bằng khí CO2 (như MT3, MT5) khi phun dập đám cháy cần lưu ý tuyệt đối điều gì để tránh tai nạn lao động?",
    "options": [
      "Không được đứng đầu hướng gió",
      "Không cầm trực tiếp tay vào loa phun hoặc ống nối kim loại để tránh bị bỏng lạnh (-79°C)",
      "Không cần lưu ý",
      "Phải xịt vào mắt"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_47",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Khoảng cách di chuyển tối đa từ bất kỳ điểm nào trên mặt bằng công trình đến vị trí đặt bình chữa cháy xách tay nguy hiểm cháy trung bình là bao nhiêu?",
    "options": [
      "Không vượt quá 100m",
      "Không vượt quá 200m",
      "Chỉ đặt 1 bình ở tầng trệt",
      "Không vượt quá 20m (hoặc 15m cho khu vực nguy hiểm cháy cao)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_pccc_theory_48",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Nghiệm thu tính liên động tự động của hệ thống PCCC khi có tín hiệu báo cháy từ tủ trung tâm (Fire Alarm Interlock Test):",
    "options": [
      "Tự động ngắt hệ thống điện hạ thế/điều hòa, tự động hạ cửa cuốn chống cháy, kích hoạt quạt tăng áp giếng thang & quạt hút khói hành lang, gọi thang máy về tầng trệt",
      "Không tác động gì đến các hệ thống khác",
      "Tắt toàn bộ nước tòa nhà",
      "Chỉ nháy đèn báo"
    ],
    "correct_index": 0
  },
  {
    "id": "q_pccc_theory_49",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Màu sơn tiêu chuẩn quy định cho đường ống cấp nước chữa cháy, bình chữa cháy và các thiết bị PCCC theo TCVN là màu gì?",
    "options": [
      "Màu VÀNG KẺ ĐEN",
      "Màu ĐỎ (Red - RAL 3000)",
      "Màu TRẮNG TÍCH ĐIỆN",
      "Màu XANH LÁ CÂY"
    ],
    "correct_index": 1
  },
  {
    "id": "q_pccc_theory_50",
    "type": "multiple_choice",
    "category": "Lý thuyết - Phòng cháy chữa cháy",
    "exam_set": "Lý thuyết - PCCC Bậc 2 & Bậc 3",
    "question": "Hồ sơ nghiệm thu hoàn công PCCC công trình đưa vào hoạt động bắt buộc phải có văn bản pháp lý quan trọng nhất nào do cơ quan Cảnh sát PCCC & CNCH cấp?",
    "options": [
      "Giấy bảo hành của nhà sản xuất bình",
      "Hóa đơn mua bán vật tư",
      "Văn bản Chấp thuận kết quả nghiệm thu về PCCC của cơ quan Cảnh sát PCCC & CNCH thẩm quyền",
      "Biên bản họp nội bộ thầu phụ"
    ],
    "correct_index": 2
  }
];
