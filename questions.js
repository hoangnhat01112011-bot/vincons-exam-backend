// File questions.js - Tích hợp đầy đủ 50 câu hỏi Tự luận - Thực hành ĐHTG đi kèm Bản vẽ CAD Shop Drawing (PNG Format 100% Reliable)
const QUESTIONS = [
  {
    "id": 1,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image1.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt",
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3.",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm",
      "Công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm"
    ],
    "correct_index": 0
  },
  {
    "id": 2,
    "type": "input_group",
    "category": "Thực hành CNCH",
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
    ]
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image2.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt",
      "Ổ cắm đôi 3 chấu, công tắc đôi, công tắc 3.",
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm",
      "Công tắc đôi, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm"
    ],
    "correct_index": 0
  },
  {
    "id": 4,
    "type": "input_group",
    "category": "Thực hành CNCH",
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
    ]
  },
  {
    "id": 5,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image3.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ đèn, đèn dowligh, đế âm, đèn led hắt",
      "Ổ cắm đôi 3 chấu, công tắc 3, đèn dowlight.",
      "Công tắc đơn, ba 1 chiều, công tắc đôi 2 chiều, công tắc bình nóng lạnh; Bình nóng lạnh",
      "Câu 1 và 3 đúng"
    ],
    "correct_index": 3
  },
  {
    "id": 6,
    "type": "input_group",
    "category": "Thực hành CNCH",
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
    ]
  },
  {
    "id": 7,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image4.png",
    "question": "Bạn nhìn thấy những ký hiệu, thiết bị nào trên bản vẽ thuộc bộ môn điện:",
    "options": [
      "Ổ cắm đôi 3 chấu, công tắc 3; box điện; lộ cấp nguồn S1,S2, đèn sự cố mắt ếch, đế âm, đèn Exit",
      "Công tắc đơn, đôi 1 chiều, công tắc đơn 2 chiều, Ổ cắm đôi chống nước, ổ cắm chống nổ, remot điều hòa",
      "Ổ cắm đôi 3 chấu, công tắc 3, đèn dowlight.",
      "Câu 1 và 2 đúng"
    ],
    "correct_index": 3
  },
  {
    "id": 8,
    "type": "input_group",
    "category": "Thực hành CNCH",
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
    ]
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image5.png",
    "question": "Với mạch điều khiển bơm nước tự động dùng phao điện như trên thì động cơ và phao điện sẽ đấu vào chân nào của domino để mạch động lực hoạt động được :",
    "options": [
      "Động cơ 1 pha: L,N đấu vào 5-6; phao điện: dây tín hiệu phao đấu vào 8-9;",
      "Động cơ 1 pha: L,N đấu vào 3-4; phao điện: dây tín hiệu phao đấu vào 8-9;",
      "3.Động cơ 1 pha: L,N đấu vào 3-4; phao điện: dây tín hiệu phao đấu vào 7-8;",
      "Tất cả dáp án trên đều đúng"
    ],
    "correct_index": 2
  },
  {
    "id": 10,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image6.png",
    "question": "Mạch khởi động sao/tam giác như hình, hãy đấu 1 trong 6 cực của động cơ với các cuộn tương ứng động cơ vào domino để mạch động lực hoạt động được :",
    "options": [
      "Động cơ 3 pha: 1-U1,3-V1;2-W1;4-W2;5-U2;6-V2",
      "Động cơ 3 pha: 1-U1,2-V1;3-W1;5-W2;4-U2;6-V2",
      "Động cơ 3 pha: 1-U1,2-V1;3-W1;4-W2;5-U2;6-V2",
      "Tất cả dáp án trên đều đúng"
    ],
    "correct_index": 2
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image7.png",
    "question": "Hình ảnh trên là động cơ điện 3 pha đang được đấu nối vào lưới điện, hãy cho biết dạng đấu trên thuộc loại nào: Sao hay tam giác, điện áp làm việc của động cơ là bao nhiêu(Uph) =? biết điện áp lưới điện đến cực động cơ (Ud) là 380V.",
    "options": [
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 380V;",
      "Không có đáp án đúng."
    ],
    "correct_index": 1
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image8.png",
    "question": "Hình ảnh trên là động cơ điện 3 pha đang được đấu nối vào lưới điện, hãy cho biết dạng đấu trên thuộc loại nào: Sao hay tam giác, điện áp làm việc của động cơ là bao nhiêu(Uph) =? biết điện áp lưới điện đến cực động cơ (Ud) là 380V.",
    "options": [
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 380V;",
      "Không có đáp án đúng."
    ],
    "correct_index": 0
  },
  {
    "id": 13,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image9.png",
    "question": "Hình ảnh trên là Catalog của động cơ điện 3 pha , hãy cho biết các thông số Công suất (P); dòng điện(I),điện áp(U),tốc độ(n) và kiểu đấu ứng với tần số lưới điện Việt Nam là 380V; 50Hz?",
    "options": [
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V;P= 22Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;P= 22Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 660V;I=23.8A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Không có đáp án đúng."
    ],
    "correct_index": 1
  },
  {
    "id": 14,
    "type": "multiple_choice",
    "category": "Thực hành CNCH",
    "image": "data/image10.png",
    "question": "Hình ảnh trên là Catalog của động cơ điện 3 pha , hãy cho biết các thông số Công suất (P); dòng điện(I),điện áp(U),tốc độ(n) và kiểu đấu ứng với tần số lưới điện Việt Nam là 380V; 50Hz?",
    "options": [
      "Động cơ 3 pha đấu nối kiểu sao, điện áp làm việc của động cơ Uph = 220V; P= 37Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V;P= 37Kw; I=41.3A; tốc độ động cơ n=2940 r/min(vòng /phút)",
      "Động cơ 3 pha đấu nối kiểu tam giác, điện áp làm việc của động cơ Uph = 380V; I=78A;P=37Kw; tốc độ động cơ n=1450 r/min(vòng /phút)",
      "Không có đáp án đúng."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "5mm",
      "10mm",
      "15mm",
      "20mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_7",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Điện trở của dây dẫn phụ thuộc chủ yếu vào:",
    "options": [
      "Nhiệt độ",
      "Đường kính",
      "Chiều dài",
      "Cả A, B, C"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_01_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "1/3",
      "≤ 1/2",
      "= 1",
      "≤ 1/4"
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
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_6",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi đóng điện thử tải, cầm kiểm tra thứ tự pha bằng:",
    "options": [
      "Bút thử điện",
      "Đồng hồ vạn năng",
      "Thiết bị kiểm tra pha",
      "Ampe kìm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị ẩm nên điện trở tăng",
      "Cuộn dây bị đứt",
      "Cuộn dây bị chập một số vòng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Tách nạn nhân khỏi nguồn điện",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Bỏ đi"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_61",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đóng điện vào máy bơm nước, động cơ điện của bơm không quay là do",
    "options": [
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất nước mồi, dây quấn động cơ bị chập.",
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_84",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
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
    "id": "q_el3_01_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
      "Không đổi",
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
      "1 mm",
      "2 mm",
      "3 mm",
      "4 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Động cơ bị rò điện.",
      "Dây quấn động cơ bị chập",
      "Mất điện.",
      "Không có nguồn nước cấp."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_53",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Đối với dây dẫn có tiết diện từ  từ bao nhiêu mm2 trở lên phải được ép đầu cos khi kết nối với tủ điện và thiết bị?",
    "options": [
      "2.5 mm2",
      "4 mm2",
      "6 mm2",
      "10 mm2"
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
      "Contactor",
      "Rơ-le nhiệt",
      "CB (Circuit Breaker)",
      "Aptomat"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_47",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Cấp bảo vệ IP tối thiểu cho ổ cắm khu vực ẩm ướt?",
    "options": [
      "IP20",
      "IP33",
      "IP44",
      "IP55"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_01_18",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Thiết bị đóng cắt trong tủ điện tổng phải lắp ở độ cao bao nhiêu tính từ sàn?",
    "options": [
      "1.2 - 1.5 m",
      "1.5 - 1.7 m",
      "0.8 - 1.0 m",
      "Trên 2.0 m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_44",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Công tắc, ổ cắm nên cách mép cửa  bao nhiêu?",
    "options": [
      "5cm",
      "15 - 20cm",
      "30 cm",
      "40 cm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 36V",
      "> 12V",
      "> 6V",
      "> 3V"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_01_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí đặt máy"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_01_82",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 01",
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
    "id": "q_el3_02_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 36V",
      "> 12V",
      "> 6V",
      "> 3V"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_60",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống tiếp địa trạm biến áp cần đạt được là:",
    "options": [
      "≥ 10 Ohm (W)",
      "≤ 10 Ohm (W)",
      "≤ 4 Ohm (W)",
      "≤ 6 Ohm (W)"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_52",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Đối với các thiết bị thông tin liên lạc, truyền hình cáp thì khi lắp đặt, độ dài đầu chờ phải dài tối thiểu bao nhiêu mm?",
    "options": [
      "100 mm",
      "200 mm",
      "300 mm",
      "400 mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_02_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
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
    "id": "q_el3_02_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "1h",
      "2h",
      "3h",
      "4h"
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
      "150m",
      "200mm",
      "300mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_75",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Rơ le nhiệt dùng để",
    "options": [
      "Bảo vệ quá tải động cơ",
      "Tăng điện áp",
      "Đo điện",
      "Giảm dòng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_02_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất",
      "Giảm dòng khởi động"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_35",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi kiểm tra sụt áp đường dây, giá trị sụt áp cho phép thường không quá:",
    "options": [
      "3%",
      "5%",
      "10%",
      "15%"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_02_25",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
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
    "id": "q_el3_02_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng que đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh không đọc được kết quả đo."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị ẩm nên điện trở tăng",
      "Cuộn dây bị đứt",
      "Cuộn dây bị chập một số vòng"
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
      "100mm",
      "150m",
      "200mm",
      "250mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
      "Không đổi",
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
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_02_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 02",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "2A",
      "30A",
      "4A",
      "6A"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Tách nạn nhân khỏi nguồn điện",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Bỏ đi"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "2A",
      "30A",
      "4A",
      "6A"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_61",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Đóng điện vào máy bơm nước, động cơ điện của bơm không quay là do",
    "options": [
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất nước mồi, dây quấn động cơ bị chập.",
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_57",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khoảng cách giữa các kẹp C giữ ống diện, điện nhẹ PVC nổi trên trần là bao nhiêu?",
    "options": [
      "< 1200mm",
      "< 1100mm",
      "< 1000mm",
      "< 900mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_33",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Điện trở tiếp xúc thanh cái ≤ bao nhiêu?",
    "options": [
      "10µΩ",
      "50µΩ",
      "100µΩ",
      "200µΩ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_55",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với đèn hắt trần được lắp đặt như thế nào?",
    "options": [
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thầu khi đứng tại mọi vị trí trong căn hộ, ánh sáng đảm bảo, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, ánh sáng đồng màu, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo sẽ bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, ánh sáng đồng màu, không bị ngắt quãng",
      "Đèn hắt trần và các thiết bị kèm theo không bị nhìn thấy khi đứng tại mọi vị trí trong căn hộ, đèn phải có ánh sáng tốt, ánh sáng đồng màu, không bị ngắt quãng"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_83",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Sơ đồ cấp điện cho nhà chung cư theo thứ tự thế nào là đú",
    "options": [
      "Tủ điện tổng; trạm biến áp; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Trạm biến áp; tủ điện tổng; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Tủ điện tầng; trạm biến áp; tủ điện tổng; bảng điện; các tải của căn hộ",
      "Bảng điện; tủ điện tầng; trạm biến áp; tủ điện tổng; các tải của căn hộ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_18",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Thiết bị đóng cắt trong tủ điện tổng phải lắp ở độ cao bao nhiêu tính từ sàn?",
    "options": [
      "1.2 - 1.5 m",
      "1.5 - 1.7 m",
      "0.8 - 1.0 m",
      "Trên 2.0 m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí đặt máy"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
      "Không đổi",
      "Tùy tải"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_03_4",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "CB",
      "Contactor",
      "Cầu dao",
      "Cầu chì"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "1h",
      "2h",
      "3h",
      "4h"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_12",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Thường mở",
      "Thường đóng",
      "Không hoạt động",
      "Không nối đất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_03_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_03_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "1 Ω",
      "4 Ω",
      "10 Ω",
      "20 Ω"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_23",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi tủ điện có 2 nguồn cấp (lưới và máy phát), cần lắp thiết bị gì để tránh xung đột?",
    "options": [
      "MMCB",
      "ELCB",
      "ATS",
      "Contactor đơn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_03_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 03",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Động cơ bị rò điện.",
      "Dây quấn động cơ bị chập",
      "Mất điện.",
      "Không có nguồn nước cấp."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_54",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
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
    "id": "q_el3_04_28",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Ổ cắm trong WC cần bảo vệ bằng gì?",
    "options": [
      "CB chống dòng rò (ELCB)",
      "CB tép thông thường",
      "Cầu chì",
      "Không yêu cầu"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_26",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Thanh N và PE trong tủ điện có được nối chung không?",
    "options": [
      "Có",
      "Có ở mọi tủ",
      "Không",
      "Tùy theo tải"
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
      "Đồng hồ ampe kìm",
      "Đồng hồ đo điện trở đất Teraohm",
      "Đồng hồ Megaohm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_04_42",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Độ cao lắp công tắc chiếu sáng chuẩn là?",
    "options": [
      "1,0  - 1,1 m",
      "1,2 - 1,4 m",
      "1,5 - 1,6 m",
      "1,8 m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_56",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với  công tắc phải lắp đặt thế nào để đảm bảo yêu cầu kỹ thuật?",
    "options": [
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_66",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Mạch điện có một bóng đèn có thể tắt, mở ở hai vị trí khác nhau là",
    "options": [
      "Mạch đèn sợi đốt đơn giản.",
      "Mạch đèn cầu thang.",
      "Mạch đèn thay đổi ánh sáng.",
      "Mạch đèn sáng luân phiên."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_35",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi kiểm tra sụt áp đường dây, giá trị sụt áp cho phép thường không quá:",
    "options": [
      "3%",
      "5%",
      "10%",
      "15%"
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
      "200",
      "300",
      "500",
      "700"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_12",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Thường mở",
      "Thường đóng",
      "Không hoạt động",
      "Không nối đất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_04_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "10 mA",
      "30 mA",
      "50 mA",
      "100 mA"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_34",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dây đồng trần trong chống sét nên chôn sâu tối thiểu:",
    "options": [
      "0.3m",
      "0.5m",
      "0.8m",
      "1.0m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_78",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi khởi động máy bơm nước mà áp tô mát tự động ngắt điện hoặc đứt cầu chì là do",
    "options": [
      "Động cơ bị rò điện.",
      "Dây quấn động cơ bị chập",
      "Mất điện.",
      "Không có nguồn nước cấp."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_04_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "1 Ω",
      "4 Ω",
      "10 Ω",
      "20 Ω"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_3",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Dụng cụ đo điện trở cách điện là:",
    "options": [
      "Ampe kìm",
      "Đồng hồ vạn năng",
      "Megger",
      "Ohm kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_04_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 04",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 1
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
      "1/3",
      "≤ 1/2",
      "= 1",
      "≤ 1/4"
    ],
    "correct_index": 1
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
      "Bảo vệ chạm đất",
      "Giảm dòng khởi động"
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
      "1,0  - 1,1 m",
      "1,2 - 1,4 m",
      "1,5 - 1,6 m",
      "1,8 m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_56",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Theo tiêu chuẩn bàn giao các hạng mục xây dựng và kỹ thuật đối với  công tắc phải lắp đặt thế nào để đảm bảo yêu cầu kỹ thuật?",
    "options": [
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải theo hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, cùng hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp",
      "Các hạt bật tắt - tắt phải cùng hướng lắp đặt, theo hướng trạng thái, hoạt động ổn định, công tắt lắp trên mặt gạch ốp phải che kín lỗ cắt gạch và áp sát mặt gạch ốp"
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
      "1,0 - 1,2m",
      "1,2 - 1,5m",
      "1,5 - 2,0m",
      "2,0 - 2,5m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Có",
      "Không",
      "Tùy tải",
      "Khi có vách ngăn"
    ],
    "correct_index": 1
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
      "0.5m",
      "0.6m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_30",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi dòng khởi động motor cao, có thể dùng biện pháp nào?",
    "options": [
      "Giảm điện áp",
      "Sao - tam giác",
      "Khởi động trực tiếp",
      "Chỉnh CB"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất",
      "Giảm dòng khởi động"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_22",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi đo kiểm tra RCD (CB chống giật), dòng thử chuẩn là bao nhiêu?",
    "options": [
      "15mA",
      "20mA",
      "30mA",
      "50mA"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_05_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
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
      "50 mA",
      "100 mA"
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
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_05_20",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Khi nối đất an toàn, điện trở nối đất cho thiết bị điện phải ≤ bao nhiêu Ohm?",
    "options": [
      "1",
      "2",
      "4",
      "10"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_44",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Công tắc, ổ cắm nên cách mép cửa  bao nhiêu?",
    "options": [
      "5cm",
      "15 - 20cm",
      "30 cm",
      "40 cm"
    ],
    "correct_index": 1
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
      "ELCB",
      "ATS",
      "Contactor đơn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_05_5",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_05_27",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 05",
    "type": "multiple_choice",
    "question": "Dây điều khiển 1.5mm2 cho tín hiệu sensor kéo dài tối đa bao nhiêu mét?",
    "options": [
      "50m",
      "100m",
      "150m",
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
      "Quạt hút khói, quạt tăng áp cầu thang",
      "Thang máy, thang cuốn",
      "Chữa cháy tự động, hệ cấp gas",
      "Tất cả đều đúng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_7",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Điện trở của dây dẫn phụ thuộc chủ yếu vào:",
    "options": [
      "Nhiệt độ",
      "Đường kính",
      "Chiều dài",
      "Cả A, B, C"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_06_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "5mm",
      "10mm",
      "15mm",
      "20mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_2",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
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
    "id": "q_el3_06_74",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Điện áp nguy hiểm đối với người",
    "options": [
      "> 36V",
      "> 12V",
      "> 6V",
      "> 3V"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_06_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành nhiệt năng.",
      "Điện năng thành quang năng.",
      "Điện năng thành cơ năng",
      "Cơ năng thành điện năng."
    ],
    "correct_index": 2
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
      "200mm",
      "250mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "2 mm",
      "3 mm",
      "4 mm",
      "5 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_52",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Đối với các thiết bị thông tin liên lạc, truyền hình cáp thì khi lắp đặt, độ dài đầu chờ phải dài tối thiểu bao nhiêu mm?",
    "options": [
      "100 mm",
      "200 mm",
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
      "150m",
      "200mm",
      "300mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_70",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Để thể hiện rõ mối liên hệ về điện của các phần tử trong mạch điện ta dùng",
    "options": [
      "Sơ đồ cấu tạo của mạch điện",
      "Sơ đồ lắp đặt của mạch điện",
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
      "IP20",
      "IP33",
      "IP44",
      "IP55"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
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
      "0.8m",
      "1.0m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_06_23",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Khi tủ điện có 2 nguồn cấp (lưới và máy phát), cần lắp thiết bị gì để tránh xung đột?",
    "options": [
      "MMCB",
      "ELCB",
      "ATS",
      "Contactor đơn"
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
      "Động cơ bị rò điện.",
      "Dây quấn động cơ bị chập",
      "Mất điện.",
      "Không có nguồn nước cấp."
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "10 mA",
      "30 mA",
      "50 mA",
      "100 mA"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_62",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "2A",
      "30A",
      "4A",
      "6A"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_06_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 06",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí đặt máy"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_71",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Số cuộn dây quấn làm việc của động cơ điện 3 pha là",
    "options": [
      "Một.",
      "Hai.",
      "Ba.",
      "Bốn."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_9",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Rơ-le trung gian thường dùng để:",
    "options": [
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất",
      "Giảm dòng khởi động"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_43",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Cáp ngầm 22kV cách mép móng tối thiểu?",
    "options": [
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng que đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh không đọc được kết quả đo."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_76",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Contactor dùng để",
    "options": [
      "Đóng cắt mạch điện công suất lớn",
      "Đo điện áp",
      "Đo dòng điện",
      "Cấp nguồn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_68",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi cuộn dây động cơ bị ẩm ta cần làm như sau :",
    "options": [
      "Tháo động cơ, phơi nắng",
      "Tháo động cơ để trong mát một thời gian",
      "Tháo động cơ, rửa sạch bằng nước, phơi nắng",
      "Tháo động cơ, rửa sạch bằng xăng, dùng máy sấy khô"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_07_49",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi lắp đặt cáp điện trên máng, khoảng cách giữa các thanh chống đỡ máng là?",
    "options": [
      "1,0 - 1,2m",
      "1,2 - 1,5m",
      "1,5 - 2,0m",
      "2,0 - 2,5m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "5mm",
      "10mm",
      "15mm",
      "20mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_45",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khoảng cách tối thiểu dây điện - ống nước song song:",
    "options": [
      "1cm",
      "3cm",
      "5cm",
      "10cm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_07_64",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
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
    "id": "q_el3_07_27",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dây điều khiển 1.5mm2 cho tín hiệu sensor kéo dài tối đa bao nhiêu mét?",
    "options": [
      "50m",
      "100m",
      "150m",
      "200m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_81",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Điện áp nguồn quá cao so với định mức",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Dây quấn động cơ bị cháy"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_07_24",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dây trung tính (N) nên có tiết diện bao nhiêu so với dây pha?",
    "options": [
      "1/3",
      "≤ 1/2",
      "= 1",
      "≤ 1/4"
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
      "100mm",
      "150m",
      "200mm",
      "250mm"
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
      "Giảm điện áp",
      "Sao - tam giác",
      "Khởi động trực tiếp",
      "Chỉnh CB"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_4",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "CB",
      "Contactor",
      "Cầu dao",
      "Cầu chì"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_8",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "10 mA",
      "30 mA",
      "50 mA",
      "100 mA"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_07_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 07",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
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
      "2h",
      "3h",
      "4h"
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
      "Tách nạn nhân khỏi nguồn điện",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Bỏ đi"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
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
    "id": "q_el3_08_42",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Độ cao lắp công tắc chiếu sáng chuẩn là?",
    "options": [
      "1,0  - 1,1 m",
      "1,2 - 1,4 m",
      "1,5 - 1,6 m",
      "1,8 m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_45",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khoảng cách tối thiểu dây điện - ống nước song song:",
    "options": [
      "1cm",
      "3cm",
      "5cm",
      "10cm"
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
      "IP20",
      "IP33",
      "IP54",
      "IP65"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_63",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Chiều cao cột nước bơm của máy bơm được tính",
    "options": [
      "Từ vị trí đặt máy đến bề mặt mực nước dưới mà máy có thể hút lên bình thường",
      "Từ vị trí đặt máy đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí cao nhất mà máy có thể đẩy nước lên được",
      "Từ miệng ống hút đến vị trí đặt máy"
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
      "100mm",
      "150m",
      "200mm",
      "250mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_13",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi kiểm tra điện trở cách điện, giá trị nhỏ nhất được chấp nhận là bao nhiêu?",
    "options": [
      "0,1 MΩ",
      "0,5 MΩ",
      "1 MΩ",
      "10 MΩ"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_84",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
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
    "id": "q_el3_08_71",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Số cuộn dây quấn làm việc của động cơ điện 3 pha là",
    "options": [
      "Một.",
      "Hai.",
      "Ba.",
      "Bốn."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_81",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Điện áp nguồn quá cao so với định mức",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Dây quấn động cơ bị cháy"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_60",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống tiếp địa trạm biến áp cần đạt được là:",
    "options": [
      "≥ 10 Ohm (W)",
      "≤ 10 Ohm (W)",
      "≤ 4 Ohm (W)",
      "≤ 6 Ohm (W)"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_66",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Mạch điện có một bóng đèn có thể tắt, mở ở hai vị trí khác nhau là",
    "options": [
      "Mạch đèn sợi đốt đơn giản.",
      "Mạch đèn cầu thang.",
      "Mạch đèn thay đổi ánh sáng.",
      "Mạch đèn sáng luân phiên."
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
      "0,5m",
      "0,3m",
      "0,7m",
      "1,0m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_08_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "2 mm",
      "3 mm",
      "4 mm",
      "5 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_10",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
      "Không đổi",
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
      "15mA",
      "20mA",
      "30mA",
      "50mA"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_08_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng que đo.",
      "tránh làm hỏng mạch điện của dụng cụ đo.",
      "tránh không đọc được kết quả đo."
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
      "1/3",
      "≤ 1/2",
      "= 1",
      "≤ 1/4"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_08_2",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
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
    "id": "q_el3_08_53",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 08",
    "type": "multiple_choice",
    "question": "Đối với dây dẫn có tiết diện từ  từ bao nhiêu mm2 trở lên phải được ép đầu cos khi kết nối với tủ điện và thiết bị?",
    "options": [
      "2.5 mm2",
      "4 mm2",
      "6 mm2",
      "10 mm2"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_51",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Tiêu chuẩn quy định về nghiệm thu Đèn Downlight với sai số lệch tim đèn nhỏ hơn?",
    "options": [
      "2 mm",
      "3 mm",
      "4 mm",
      "5 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_15",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
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
    "id": "q_el3_09_67",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi bị điện giật cần",
    "options": [
      "Tách nạn nhân khỏi nguồn điện",
      "Dùng tay không kéo nạn nhân khỏi nguồn điện",
      "Để nằm yên",
      "Bỏ đi"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_33",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Điện trở tiếp xúc thanh cái ≤ bao nhiêu?",
    "options": [
      "10µΩ",
      "50µΩ",
      "100µΩ",
      "200µΩ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_69",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Để đo điện năng tiêu thụ ta dùng",
    "options": [
      "Oát kế",
      "Ampe kế",
      "Vôn kế",
      "Công tơ"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_41",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi thi công ống luồn dây âm tường, khoảng cách giữa các điểm cố định ống là bao nhiêu?",
    "options": [
      "≤ 0,8m",
      "≤ 1,2m",
      "≤ 1,5m",
      "≤ 2,0m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_65",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Yêu cầu điện trở tiếp địa hệ thống chống sét, tủ điện, motor cần đạt được là:",
    "options": [
      "≥ 10 Ohm (W)",
      "≤ 10 Ohm (W)",
      "≤ 4 Ohm (W)",
      "≤ 6 Ohm (W)"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành nhiệt năng.",
      "Điện năng thành quang năng.",
      "Điện năng thành cơ năng",
      "Cơ năng thành điện năng."
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_83",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Sơ đồ cấp điện cho nhà chung cư theo thứ tự thế nào là đú",
    "options": [
      "Tủ điện tổng; trạm biến áp; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Trạm biến áp; tủ điện tổng; tủ điện tầng; bảng điện; các tải của căn hộ",
      "Tủ điện tầng; trạm biến áp; tủ điện tổng; bảng điện; các tải của căn hộ",
      "Bảng điện; tủ điện tầng; trạm biến áp; tủ điện tổng; các tải của căn hộ"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_37",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Tuyến có từ 2 ống điện trở lên khoảng cách giữa 2 cạnh ống tối thiểu là bao nhiêu?",
    "options": [
      "5mm",
      "10mm",
      "15mm",
      "20mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_77",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi đo điện áp xoay chiều cần bắt đầu từ thang đo lớn nhất rồi giảm dần là để",
    "options": [
      "tránh gây sai số lớn khi đọc kết quả đo.",
      "tránh làm hỏng que đo.",
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
      "250V",
      "500V",
      "1000V",
      "2500V"
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
      "Mất điện, hở mạch, động cơ bị cháy.",
      "Mất nước mồi, dây quấn động cơ bị chập.",
      "Mất điện nguồn, đầu ống hút bị tắc.",
      "Đầu ống hút bị tắc, nguồn nước đầu hút bị cạn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Có",
      "Không",
      "Tùy tải",
      "Khi có vách ngăn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_09_58",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Mặt công tác, ổ cắm lắp đúng vị trí, thăng bằng ngang, sai lệch cao độ không quá bao nhiêu mm?",
    "options": [
      "±2mm",
      "±3mm",
      "±4mm",
      "±5mm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el3_09_31",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Độ rọi tiêu chuẩn của phòng kỹ thuật là?",
    "options": [
      "100 lux",
      "150 lux",
      "200 lux",
      "300 lux"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_14",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Đối với hệ thống điện hạ thế, điện trở nối đất cho hệ thống chống sét yêu cầu ≤ bao nhiêu?",
    "options": [
      "1 Ω",
      "4 Ω",
      "10 Ω",
      "20 Ω"
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
      "> 36V",
      "> 12V",
      "> 6V",
      "> 3V"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_09_11",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
    "type": "multiple_choice",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_09_36",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 09",
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
    "id": "q_el3_10_34",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Dây đồng trần trong chống sét nên chôn sâu tối thiểu:",
    "options": [
      "0.3m",
      "0.5m",
      "0.8m",
      "1.0m"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_25",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
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
    "id": "q_el3_10_72",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Công suất điện được tính",
    "options": [
      "P = U × I",
      "P = U / I",
      "P = I / R",
      "P = R / U"
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
      "2",
      "4",
      "10"
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
      "Ohm kế",
      "Ampe kế",
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
      "Giảm điện áp",
      "Sao - tam giác",
      "Khởi động trực tiếp",
      "Chỉnh CB"
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
      "4 Ω",
      "10 Ω",
      "20 Ω"
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
      "200",
      "300",
      "500",
      "700"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_70",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Để thể hiện rõ mối liên hệ về điện của các phần tử trong mạch điện ta dùng",
    "options": [
      "Sơ đồ cấu tạo của mạch điện",
      "Sơ đồ lắp đặt của mạch điện",
      "Sơ đồ nguyên lí của mạch điện",
      "Sơ đồ nguyên lí và cấu tạo của mạch điện"
    ],
    "correct_index": 2
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
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_39",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Khi lắp tủ điện, khoảng cách tối thiểu giữa tủ và tường phía sau là bao nhiêu?",
    "options": [
      "50mm",
      "100m",
      "150mm",
      "200mm"
    ],
    "correct_index": 1
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
      "Idm ≥ 1,25 lần tổng tải tính toán",
      "Idm = tổng tải",
      "Idm < tải lớn nhất",
      "Idm theo thiết bị nhỏ nhất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_32",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Hộp nối dây trong trần chống cháy phải chịu lửa bao lâu?",
    "options": [
      "1h",
      "2h",
      "3h",
      "4h"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_76",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Contactor dùng để",
    "options": [
      "Đóng cắt mạch điện công suất lớn",
      "Đo điện áp",
      "Đo dòng điện",
      "Cấp nguồn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el3_10_47",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Cấp bảo vệ IP tối thiểu cho ổ cắm khu vực ẩm ướt?",
    "options": [
      "IP20",
      "IP33",
      "IP44",
      "IP55"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_29",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Cáp động lực đi trong máng chung với cáp điều khiển có được không?",
    "options": [
      "Có",
      "Không",
      "Tùy tải",
      "Khi có vách ngăn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el3_10_80",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Đo điện trở hai đầu của cuộn dây cho giá trị R = ∞ chứng tỏ rằng :",
    "options": [
      "Cuộn dây bị ngắn mạch",
      "Cuộn dây bị ẩm nên điện trở tăng",
      "Cuộn dây bị đứt",
      "Cuộn dây bị chập một số vòng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el3_10_73",
    "category": "Lý thuyết - Thợ Điện Bậc 3",
    "exam_set": "Đề số 10",
    "type": "multiple_choice",
    "question": "Động cơ điện là loại máy biến đổi",
    "options": [
      "Điện năng thành nhiệt năng.",
      "Điện năng thành quang năng.",
      "Điện năng thành cơ năng",
      "Cơ năng thành điện năng."
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
      "Contactor",
      "Rơ-le nhiệt",
      "CB (Circuit Breaker)",
      "Aptomat"
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
      "Aptomat tép",
      "Tụ bù",
      "Máy biến áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dụng cụ đo điện trở cách điện là:",
    "options": [
      "Ampe kìm",
      "Đồng hồ vạn năng",
      "Megger",
      "Ohm kế"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thiết bị điều khiển đóng cắt cơ điện là:",
    "options": [
      "CB",
      "Contactor",
      "Cầu dao",
      "Cầu chì"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Tụ bù có tác dụng:",
    "options": [
      "Tăng hệ số công suất",
      "Giảm dòng ngắn mạch",
      "Tăng điện áp",
      "Tăng tổn hao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đóng điện thử tải, cầm kiểm tra thứ tự pha bằng:",
    "options": [
      "Bút thử điện",
      "Đồng hồ vạn năng",
      "Thiết bị kiểm tra pha",
      "Ampe kìm"
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
      "Nhiệt độ",
      "Đường kính",
      "Chiều dài",
      "Cả A, B, C"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dòng rò lớn nhất cho phép của mạch điện dân dụng là:",
    "options": [
      "10 mA",
      "30 mA",
      "50 mA",
      "100 mA"
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
      "Đóng cắt tải",
      "Truyền tín hiệu điều khiển",
      "Bảo vệ chạm đất",
      "Giảm dòng khởi động"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi tăng điện áp cấp nguồn, công suất tiêu thụ:",
    "options": [
      "Tăng",
      "Giảm",
      "Không đổi",
      "Tùy tải"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi thi công ống luồn dây trong sàn bê tông, nên cố định bằng gì?",
    "options": [
      "Dây thép buộc",
      "Băng keo",
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
      "Bấm đầu cos, siết chặt vít",
      "Dùng keo",
      "Hàn chết"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong hệ thống chống sét, dây thoát sét thường làm bằng vật liệu gì?",
    "options": [
      "Nhôm",
      "Sắt trần",
      "Đồng trần hoặc mạ kẽm",
      "Inox"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đo điện trở đất bằng phương pháp 3 cực,  cực dòng và cực thế cách nhau tối thiểu bao nhiêu mét?",
    "options": [
      "2m",
      "5m",
      "10m",
      "20m"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra pha thứ tự bằng bút thử, hiện tượng nào cho thấy sai thứ tự pha?",
    "options": [
      "Bút sáng đỏ",
      "Bút không sáng",
      "Động cơ quay ngược",
      "Có tia lửa"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi đấu cáp 3 pha 4 dây, dây trung tính nên đặt ở vị trí nào?",
    "options": [
      "Bên trái",
      "Bên phải",
      "Ở giữa hoặc dưới cùng",
      "Trên cùng"
    ],
    "correct_index": 2
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
      "0⁰",
      "1⁰",
      "2⁰",
      "3⁰"
    ],
    "correct_index": 3
  },
  {
    "id": "q_el2_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra tụ bù, điện dung giảm dưới bao nhiêu % thì cần thay thế?",
    "options": [
      "3%",
      "5%",
      "10%",
      "20%"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đặt thiết bị chiếu sáng tại khu vực ngoài trời, cần chú ý điều gì đầu tiên?",
    "options": [
      "Màu sắc đèn",
      "Nhiệt độ màu",
      "Cấp IP",
      "Độ rọi"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra điện áp pha, nếu một pha bị mất, hiện tượng nào dễ nhận biết nhất?",
    "options": [
      "Điện tắt, động cơ kêu",
      "Dòng tăng nhẹ",
      "Điện áp tang",
      "Tụ bù hỏng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi nối dây cáp nhôm với đồng, cần dùng phụ kiện gì?",
    "options": [
      "Kẹp inox",
      "Đầu nối trung gian bimetal",
      "Keo dẫn điện",
      "Không cần"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra motor 3 pha bị nhảy CB, nguyên nhân thường gặp nhất là?",
    "options": [
      "CB yếu",
      "Dây nhỏ",
      "Motor chạm vỏ hoặc chạm pha",
      "Điện áp cao"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Bán kính uốn ống PVC phải ≥ mấy lần đường kính ống?",
    "options": [
      "6 lần",
      "4 lần",
      "8 lần",
      "10 lần"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đặt cáp trên khay, chiều cao xếp lớp không quá?",
    "options": [
      "2 lớp",
      "3 lớp",
      "4 lớp",
      "5 lớp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kéo dây trong ống, khoảng cách tối đa giữa 2 hộp kéo là?",
    "options": [
      "30m",
      "40m",
      "25m",
      "50m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi thi công tại tầng hầm ẩm ướt, nên dùng loại ống nào?",
    "options": [
      "Óng théo mạ kẽm",
      "Ống PVC",
      "Ống nhựa mềm",
      "Ống ruột gà"
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
      "1 người",
      "2 người",
      "3 người",
      "4 người"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi lắp đèn âm trần, cần phối hợp bộ môn nào trước?",
    "options": [
      "Nước",
      "HVAC & trần",
      "Kết cấu",
      "PCCC"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Dây tín hiệu BMS cần có đặc điểm gì?",
    "options": [
      "Dây xoắn đôi",
      "Dây trơn",
      "Cáp chống nhiễu",
      "Dây thường"
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
      "Kiểm tra điện áp",
      "Tránh điện rò",
      "Đo trở kháng",
      "Thử dòng"
    ],
    "correct_index": 1
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
      "Fill kín chống cháy lan",
      "Dán băng keo"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Bước đầu tiên khi đóng điện thử là?",
    "options": [
      "Kiểm tra chiều pha",
      "Cho tải chạy",
      "Đo dòng",
      "Bật CB chính"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Đèn exit & emergency cần cấp nguồn thế nào?",
    "options": [
      "2 nguồn (AC + DC)",
      "1 nguồn",
      "3 nguồn",
      "Không yêu cầu"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_35",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kéo cáp dài >50m, cần thêm gì để giảm lực kéo?",
    "options": [
      "Dầu bôi trơn chuyên dụng",
      "Dây dù",
      "Dây rút",
      "Nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi chạy thử hệ thống, MCCB nhảy liên tục do?",
    "options": [
      "Nhiệt độ",
      "Áp thấp",
      "Dòng rò hoặc sai pha hoặc cân bằng tải chưa phù hợp",
      "Dây nhỏ"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thiết bị ELCB có chức năng chính:",
    "options": [
      "Bảo vệ quá tải",
      "Cắt điện khi có dòng rò",
      "Cắt khi áp thấp",
      "Cắt khi quá áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_38",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Thử cách điện dây dẫn dùng thiết bị:",
    "options": [
      "Megger",
      "Ampe kìm",
      "Đồng hồ vạn năng",
      "Rơ-le"
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
      "Giữ nguyên",
      "Cắt PE",
      "Tách riêng",
      "Nối tạm"
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
      "Công suất bóng",
      "Cường độ sáng",
      "Màu ánh sáng",
      "Chiều cao lắp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Hệ công tắc hai chiều điều khiển 1 đèn gồm mấy dây chuyển mạch?",
    "options": [
      "1",
      "2",
      "3",
      "4"
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
      "Tủ chiếu sáng",
      "Tủ tổng (MDB)",
      "Tủ ATS",
      "Tủ bơm"
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
      "6 tháng",
      "12 tháng",
      "24 tháng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_44",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi nhập vật tư dây cáp về công trình, bước kiểm tra đầu tiên là gì?",
    "options": [
      "Màu sắc dây",
      "Độ dài cuộn",
      "Nhãn mác, xuất xứ và chứng chỉ CO-CQ",
      "Trọng lượng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra tụ điện, dụng cụ phù hợp là:",
    "options": [
      "Ohm kế",
      "Ampe kế",
      "Đồng hồ vạn năng (thang điện dung)",
      "Volt kế"
    ],
    "correct_index": 1
  },
  {
    "id": "q_el2_46",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Trong sơ đồ điện, ký hiệu \"NO\" nghĩa là:",
    "options": [
      "Thường mở",
      "Thường đóng",
      "Không hoạt động",
      "Không nối đất"
    ],
    "correct_index": 2
  },
  {
    "id": "q_el2_47",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Khi kiểm tra điện trở cách điện, giá trị nhỏ nhất được chấp nhận là bao nhiêu?",
    "options": [
      "0,1 MΩ",
      "0,5 MΩ",
      "1 MΩ",
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
      "1 Ω",
      "4 Ω",
      "10 Ω",
      "20 Ω"
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
      "Dẫn dòng sự cố",
      "Dẫn dòng tải mất cân bằng",
      "Dẫn dòng ngắn mạch",
      "Tăng công suất pha"
    ],
    "correct_index": 0
  },
  {
    "id": "q_el2_50",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điện Bậc 2",
    "exam_set": "Thợ Điện Bậc 2",
    "question": "Cáp điện ngầm đi trong ống PVC phải được chôn sâu tối thiểu bao nhiêu mét the TCVN?",
    "options": [
      "0.4 m",
      "0.5 m",
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
      "Cấp nước nóng",
      "Cấp nước lạnh và thoát nước",
      "Dẫn gas",
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
      "0.5%",
      "1–2%",
      "5%",
      "10%"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống PPR thường dùng cho",
    "options": [
      "Cấp nước nóng lạnh",
      "Thoát nước",
      "Dẫn khí",
      "Tưới cây"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi lắp ống thoát nước cần tránh điều gì?",
    "options": [
      "Nhiều co gấp",
      "Độ dốc phù hợp",
      "Có lỗ thăm",
      "Ống thẳng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Bẫy nước (P-trap) có tác dụng",
    "options": [
      "Tăng áp lực nước",
      "Ngăn mùi từ cống",
      "Làm sạch nước",
      "Lọc rác"
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
      "Chặn rác",
      "Cho nước chảy một hướng",
      "Tăng áp",
      "Giảm áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Đồng hồ nước dùng để",
    "options": [
      "Đo áp lực",
      "Đo lưu lượng nước",
      "Lọc nước",
      "Tăng áp"
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
      "Bỏ mũ chụp máy để tiện thao tác",
      "Đeo kính và găng tay",
      "Mũ chụp máy cắt,te",
      "B,C đều đúng"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thi công trên cao cần",
    "options": [
      "Không cần dây an toàn",
      "Dây an toàn và giàn giáo chắc chắn",
      "Đứng các hệ thống khác",
      "Dựng dàn giáo"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trước khi sửa ống nước cần",
    "options": [
      "Mở nước",
      "Khóa nguồn nước",
      "Đập tường",
      "Tháo van"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nguyên nhân phổ biến gây tắc cống",
    "options": [
      "Rác và dầu mỡ",
      "Không có nước",
      "Ống quá to",
      "Áp lực thấp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi phát hiện rò rỉ ống cần",
    "options": [
      "Bỏ qua",
      "Sửa hoặc thay đoạn ống",
      "Tăng áp nước",
      "Mở nước lớn hơn"
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
      "Nước không chảy",
      "Ống vỡ"
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
      "21–34 mm",
      "90 mm",
      "200 mm",
      "500 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Bơm tăng áp dùng khi:",
    "options": [
      "Áp lực nước yếu",
      "Nước quá mạnh",
      "Nước bẩn",
      "Nước nóng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống cấp nước nhà cao tầng, thiết bị nào dùng để ngăn nước ngược gây ô nhiễm nhiễm nguồn nước ?",
    "options": [
      "Van cổng",
      "Van giảm áp",
      "Van một chiều",
      "Van xả khí"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thử áp lực đường ống cấp nước PPR trong quá trình, thử áp lực bằng bao nhiêu để áp dụng công việc?",
    "options": [
      "1 lần áp lực làm việc",
      "1,25 lần áp lực làm việc",
      "1,5 lần áp lực làm việc",
      "2 lần áp lực làm việc"
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
      "Dán keo",
      "Hàn điện",
      "Hàn hồ quang"
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
      "Giữ rác",
      "Ngăn mùi hôi từ ống thoát",
      "Tăng tốc độ thoát nước",
      "Giảm áp lực nước"
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
      "1 %",
      "2 %",
      "5 %"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Cao độ ±0.000 là gì?",
    "options": [
      "Điểm cao nhất công trình",
      "Đỉnh mái",
      "Mốc chuẩn để đo cao độ",
      "Đáy móng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Kí hiệu sau đây CW-D32; COP= FFL- 350 có nghĩa là:",
    "options": [
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm",
      "Ống nước lạnh D32, tim ống thấp hơn cốt sàn hoàn thiện 350 mm",
      "Ống thoát nước thải D32, đáy ống thấp hơn sàn 350 mm",
      "Ống nước lạnh D32, đỉnh ống thấp hơn sàn hoàn thiện 350 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Áp lực làm việc theo TCVN tại thiết bị thường nằm trong dải sau:",
    "options": [
      "1-2 bar",
      "2-4 bar",
      "4-6 bar",
      "6-8 bar"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống dài 10m cần chênh 15cm → độ dốc là:",
    "options": [
      "1,5%",
      "0.15%",
      "15%",
      "0.015%"
    ],
    "correct_index": 0
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
      "Làm đẹp bề mặt ống",
      "Tăng độ bám dính của keo và loại bỏ lớp bóng, bụi bẩn",
      "Giảm đường kính ngoài của ống",
      "Làm khô ống nhanh hơn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Thợ gia nhiệt ống D32 trong 15 giây (lớn hơn tiêu chuẩn). Lỗi kỹ thuật nào xảy ra?",
    "options": [
      "Không ảnh hưởng nếu lắp nhanh",
      "Nhựa bị cháy hoặc biến tính → mối hàn giòn, giảm tuổi thọ",
      "Tăng độ bền mối hàn",
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
      "Tăng lưu lượng nước thải",
      "Cân bằng áp suất trong ống, bảo vệ bẫy nước (xi phông) không bị hút hoặc đẩy khí ngược",
      "Giảm độ dốc tuyến ống",
      "Tăng áp lực trong ống"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi thi công đường ống đẩy của bơm, nếu không lắp khớp nối mềm, hậu quả chính là gì?",
    "options": [
      "Không ảnh hưởng",
      "Truyền rung động từ bơm sang đường ống → gây nứt, rò rỉ lâu dài",
      "Tăng áp lực nước",
      "Giảm lưu lượng"
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
      "Nước chảy nhanh, cặn đọng",
      "Tăng áp",
      "Không ảnh hưởng",
      "Tốt hơn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Kí hiệu sau đây VP-D60; BOP= FL 2450 có nghĩa là:",
    "options": [
      "Ống thông hơi D60, đáy ống thấp hơn cốt sàn hoàn thiện 2450 mm",
      "Ống thông hơi D60, đáy ống cao hơn cốt sàn hoàn thiện 2450 mm",
      "Ống thông hơi D60, đáy ống ở cao độ +2450 mm so với cốt sàn (FL)",
      "Ống thoát nước thải D60, đỉnh ống ở cao độ +2450 mm so với sàn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu áp thử quá thấp sẽ:",
    "options": [
      "Tốt hơn",
      "Không phát hiện rò rỉ",
      "Tăng áp",
      "Không sao"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu độ dốc vượt 0.03 sẽ:",
    "options": [
      "Tốt hơn",
      "Nước chảy nhanh, cặn đọng",
      "Không ảnh hưởng",
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
      "Sai số cao độ trên toàn bộ các điểm đo",
      "Không ảnh hưởng vì tia laser vẫn nhìn thấy",
      "Chỉ ảnh hưởng một điểm",
      "Chỉ làm chậm tiến độ thi công"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_35",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Với ống PPR D32-PN20, thời gian gia nhiệt tiêu chuẩn là bao lâu?",
    "options": [
      "4 giây",
      "6 giây",
      "8 giây",
      "12 giây"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Màu sắc ống",
      "Áp lực ép và nhiệt độ gia nhiệt",
      "Chiều dài ống",
      "Độ dốc tuyến ống"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống cấp nước nhiều tầng, nếu không lắp van giảm áp (PRV) ở các tầng thấp, hậu quả là gì?",
    "options": [
      "Nước chảy yếu",
      "Không ảnh hưởng",
      "Áp lực quá cao gây rò rỉ, hỏng thiết bị và giảm tuổi thọ hệ thống",
      "Tăng độ bền hệ thống"
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
      "2,95 m",
      "1,7 m"
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
      "Điểm tại vị trí đặt mia cao hơn cao độ máy",
      "Kết quả đúng",
      "Điểm tại vị trí đặt mia thấp hơn cao độ máy",
      "Điểm tại vị trí đo bằng cao độ máy"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_40",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nhiệt độ tiêu chuẩn của tấm gia nhiệt (heater plate) khi hàn đối đầu ống HDPE là bao nhiêu?",
    "options": [
      "180 ± 10°C",
      "200 ± 10°C",
      "220 ± 10°C",
      "260 ± 10°C"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Sau khi lắp ống vào phụ kiện, thao tác kỹ thuật đúng là gì?",
    "options": [
      "Xoay ống nhiều vòng để keo phân bố đều",
      "Giữ cố định, không xoay và giữ lực ép trong vài giây",
      "Rút ra kiểm tra rồi lắp lại",
      "Gõ mạnh để tăng độ kín"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn3_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Tại các trục đứng cấp nước, yêu cầu kỹ thuật quan trọng nhất để đảm bảo vận hành lâu dài là gì?",
    "options": [
      "Lắp càng sát tường càng tốt",
      "Dùng ống lớn nhất có thể",
      "Có biện pháp cố định và bù giãn nở nhiệt cho ống",
      "Không cần giá đỡ"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_43",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Việc sử dụng 2 cái “lơi (chếch)” tạo thành 1 cái co (cút 90˚) trong thoát nước có ý nghĩa gì?",
    "options": [
      "Làm tăng áp lực dòng chảy trong ống",
      "Giảm tốc độ nước để tránh bắn ngược",
      "Tạo góc chuyển hướng êm hơn, giảm tắc nghẽn và giảm va đập dòng chảy",
      "Giảm chi phí vật tư so với dùng co 90°"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_44",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Ống thoát dài 18m, yêu cầu độ dốc 0.004 → chênh cao là:",
    "options": [
      "7.2cm",
      "4cm",
      "18cm",
      "72cm"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn3_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Cắt rãnh sâu và rộng tùy ý",
      "Cắt liên tục nhiều rãnh sát nhau",
      "Không cắt quá sâu, không làm gián đoạn kết cấu tường và hạn chế rãnh quá dài liên tục",
      "Chỉ cần trát lại là không nứt"
    ],
    "correct_index": 2
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
      "Không ảnh hưởng",
      "Tăng độ kín",
      "Phá vỡ lớp nhựa nóng chảy → mối hàn yếu, dễ rò rỉ",
      "Giúp mối hàn đẹp hơn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_48",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Đơn vị đo áp suất phổ biến là:",
    "options": [
      "kg/cm²",
      "bar",
      "Pa",
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
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn3_50",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Thời gian lắp ghép sau khi bôi keo dán uPVC (ở điều kiện bình thường) nên thực hiện trong khoảng nào là tối ưu?",
    "options": [
      "Trong vòng 60 giây",
      "Trong vòng 30 giây",
      "Trong vòng 10–20 giây",
      "Có thể để 5 phút rồi lắp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Áp lực nước trong nhà ở thường khoảng",
    "options": [
      "0.5 – 3 bar",
      "10 bar",
      "20 bar",
      "50 bar"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi ren ống thép cần dùng vật liệu gì để làm kín?",
    "options": [
      "Băng tan (PTFE)",
      "Keo gỗ",
      "Xi măng",
      "Sơn"
    ],
    "correct_index": 0
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
      "Tách riêng",
      "Không cần ống",
      "Đổ trực tiếp vào nhà"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Hố ga dùng để:",
    "options": [
      "Kiểm tra và vệ sinh đường ống",
      "Tăng áp lực",
      "Lọc nước uống",
      "Trữ nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Ống thông hơi trong hệ thống thoát nước có tác dụng",
    "options": [
      "Thoát khí và cân bằng áp suất",
      "Tăng áp lực",
      "Lọc nước",
      "Làm sạch ống"
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
      "Bơm nước áp lực kiểm tra rò rỉ",
      "khóa kín và nén khí để thử kín",
      "kiểm tra rò rỉ ống",
      "Xả hết nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "ống PN8 và phụ kiện PN5 có dùng chung với nhau được không",
    "options": [
      "CÓ",
      "KHÔNG"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "ống PN10 và phụ kiện PN16 có dùng chung với nhau được không",
    "options": [
      "CÓ",
      "KHÔNG"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "10.\tCác ống HDPE size bao nhiêu thì có thể dùng phụ kiện ren để kết nối?",
    "options": [
      "D20 đến D90",
      "D50-D110",
      "D75-D200",
      "D32- D110"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "kích thước ống HDPE bao nhiêu thì phải dùng phương pháp hàn",
    "options": [
      "D20 đến D90",
      "D50-D110",
      "D90-D200",
      "D32- D110"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi làm việc với máy cắt cần",
    "options": [
      "Không cần bảo hộ",
      "Đeo kính và găng tay",
      "tháo cover (tấm che của máy) để dễ thi công",
      "lắp dủ cover của máy và đeo đầy đủ bảo hộ (kính, găng tay…)"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi thi công trên cao cần",
    "options": [
      "Không cần dây an toàn",
      "Dây an toàn và giàn giáo chắc chắn",
      "Đứng trên ống nước",
      "Leo trực tiếp tường"
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
      "Mặt bằng, vật tư, bản vẽ shop",
      "Mặt bằng, vật tư, bản vẽ shop, nhân lực thầu phụ, tiện ích",
      "Mặt bằng, vật tư, bản vẽ shop, biện pháp thi công, nhân lực thầu phụ, tiện ích",
      "Mặt bằng, vật tư, bản vẽ shop, biện pháp thi công, tiện ích"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi thử áp lực đường ống cấp nước PPR trong quá trình, thử áp lực bằng bao nhiêu để áp dụng công việc\n\nA. 1 lần áp lực làm việc",
    "options": [
      "1 lần áp lực làm việc",
      "1,25 lần áp lực làm việc",
      "1,5 lần áp lực làm việc",
      "2 lần áp lực làm việc"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Mốc A có cao độ +1,5m. Số đọc mia tại mốc A là 1,25 m. Tại điểm B, số đọc mia là    1,7 m. Hỏi cao độ điểm B là bao nhiêu?",
    "options": [
      "1.470 m",
      "1,05 m",
      "2,95 m",
      "1,7 m"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi đo cao độ bằng máy thuỷ bình, số đọc được trên mia lớn hơn nhiều so với cao độ máy",
    "options": [
      "Điểm tại vị trí đặt mia cao hơn cao độ máy",
      "Kết quả đúng",
      "Điểm tại vị trí đặt mia thấp hơn cao độ máy",
      "Điểm tại vị trí đo bằng cao độ máy"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nhiệt độ tiêu chuẩn của tấm gia nhiệt (heater plate) khi hàn đối đầu ống HDPE là bao nhiêu?",
    "options": [
      "180 ± 10°C",
      "200 ± 10°C",
      "220 ± 10°C",
      "260 ± 10°C"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây TR-D110; BOP= FFL- 750 có nghĩa là:",
    "options": [
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm"
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
      "Trong vòng 60 giây",
      "Trong vòng 30 giây",
      "Trong vòng 10–20 giây",
      "Có thể để 5 phút rồi lắp"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
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
    "id": "q_ctn2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Cắt rãnh sâu và rộng tùy ý",
      "Cắt liên tục nhiều rãnh sát nhau",
      "Không cắt quá sâu, không làm gián đoạn kết cấu tường và hạn chế rãnh quá dài liên tục",
      "Chỉ cần trát lại là không nứt"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Tại các trục đứng cấp nước, yêu cầu kỹ thuật quan trọng nhất để đảm bảo vận hành lâu dài là gì?",
    "options": [
      "Lắp càng sát tường càng tốt",
      "Dùng ống lớn nhất có thể",
      "Có biện pháp cố định và bù giãn nở nhiệt cho ống",
      "Không cần giá đỡ"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Màu sắc ống",
      "Áp lực ép và nhiệt độ gia nhiệt",
      "Chiều dài ống",
      "Độ dốc tuyến ống"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nếu máy laser bị lệch cân bằng (không tự cân bằng đúng), hậu quả là gì?",
    "options": [
      "Sai số cao độ trên toàn bộ các điểm đo",
      "Không ảnh hưởng vì tia laser vẫn nhìn thấy",
      "Chỉ ảnh hưởng một điểm",
      "Chỉ làm chậm tiến độ thi công"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_26",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Áp lực làm việc theo TCVN tại thiết bị thường nằm trong dải sau:",
    "options": [
      "1-2 bar",
      "2-4 bar",
      "4-6 bar",
      "6-8 bar"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_27",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây CW-D32; COP= FFL- 350 có nghĩa là:",
    "options": [
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm",
      "Ống nước lạnh D32, tim ống thấp hơn cốt sàn hoàn thiện 350 mm",
      "Ống thoát nước thải D32, đáy ống thấp hơn sàn 350 mm",
      "Ống nước lạnh D32, đỉnh ống thấp hơn sàn hoàn thiện 350 mm"
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn2_28",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Cao độ ±0.000 là gì?",
    "options": [
      "Điểm cao nhất công trình",
      "Đỉnh mái",
      "Mốc chuẩn để đo cao độ",
      "Đáy móng"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_29",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
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
    "id": "q_ctn2_30",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
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
    "id": "q_ctn2_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Sau khi gia nhiệt ống và phụ kiện PPR đúng thời gian, thợ đưa ống vào phụ kiện nhưng có xoay nhẹ để “cho đều”. Hậu quả chính là gì?",
    "options": [
      "Không ảnh hưởng",
      "Tăng độ kín",
      "Phá vỡ lớp nhựa nóng chảy → mối hàn yếu, dễ rò rỉ",
      "Giúp mối hàn đẹp hơn"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Đơn vị đo áp suất phổ biến là:",
    "options": [
      "kg/cm²",
      "bar",
      "Pa",
      "Cả 3 ý trên"
    ],
    "correct_index": 3
  },
  {
    "id": "q_ctn2_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây TR-D110; BOP= FFL- 750 có nghĩa là:",
    "options": [
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, độ dốc 1%, đáy ống thấp hơn cốt sàn hoàn thiện 750 mm",
      "Ống thoát nước thải D110, không có độ dốc, đáy ống thấp hơn sàn 750 mm",
      "Ống cấp nước D110, độ dốc 1%, đỉnh ống thấp hơn sàn 750 mm"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Thời gian lắp ghép sau khi bôi keo dán uPVC (ở điều kiện bình thường) nên thực hiện trong khoảng nào là tối ưu?",
    "options": [
      "Trong vòng 60 giây",
      "Trong vòng 30 giây",
      "Trong vòng 10–20 giây",
      "Có thể để 5 phút rồi lắp"
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
      "180 ± 10°C",
      "200 ± 10°C",
      "220 ± 10°C",
      "260 ± 10°C"
    ],
    "correct_index": 2
  },
  {
    "id": "q_ctn2_41",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Sau khi lắp ống vào phụ kiện, thao tác kỹ thuật đúng là gì?",
    "options": [
      "Xoay ống nhiều vòng để keo phân bố đều",
      "Giữ cố định, không xoay và giữ lực ép trong vài giây",
      "Rút ra kiểm tra rồi lắp lại",
      "Gõ mạnh để tăng độ kín"
    ],
    "correct_index": 1
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
      "Ống thông hơi D60, đáy ống ở cao độ +2450 mm so với cốt sàn (FL)",
      "Ống thoát nước thải D60, đỉnh ống ở cao độ +2450 mm so với sàn"
    ],
    "correct_index": 1
  },
  {
    "id": "q_hvac2_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Môi chất lạnh R32 thuộc nhóm môi chất lạnh nào sau đây?",
    "options": [
      "HFC",
      "HCFC",
      "CFC",
      "HC"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khi thử kín hệ thống ống đồng máy điều hòa bằng khí Nitơ, áp suất thử tiêu chuẩn đối với R410A/R32 là bao nhiêu?",
    "options": [
      "1.5 MPa (~15 bar)",
      "2.5 MPa (~25 bar)",
      "4.15 MPa (~41.5 bar)",
      "5.5 MPa (~55 bar)"
    ],
    "correct_index": 2
  },
  {
    "id": "q_hvac2_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Nhiệm vụ chính của máy nén (Compressor) trong hệ thống điều hòa không khí là gì?",
    "options": [
      "Hút hơi môi chất hạ áp và nén lên áp suất cao",
      "Làm lạnh chất lỏng",
      "Tăng lưu lượng gió",
      "Lọc bụi không khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Thiết bị nào có nhiệm vụ ngưng tụ hơi môi chất cao áp thành môi chất lỏng cao áp?",
    "options": [
      "Dàn lạnh (Evaporator)",
      "Dàn nóng (Condenser)",
      "Van tiết lưu",
      "Bình tích áp"
    ],
    "correct_index": 1
  },
  {
    "id": "q_hvac2_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Độ chân không tiêu chuẩn cần đạt khi hút chân không hệ thống ĐHTG là bao nhiêu?",
    "options": [
      "Dưới 500 microns (-755 mmHg)",
      "Dưới 2000 microns",
      "Dưới 5000 microns",
      "Chỉ cần hút 5 phút"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Nguyên nhân chính khiến dàn lạnh máy điều hòa bị chảy nước dầm dề là gì?",
    "options": [
      "Tắc đường ống thoát nước đọng hoặc bẩn phin lọc",
      "Hệ thống nạp thừa gas",
      "Điện áp nguồn quá cao",
      "Quạt dàn nóng quay ngược"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Trong hệ thống ĐHTG trung tâm VRV/VRF, bộ chia gas Y-joint có vai trò gì?",
    "options": [
      "Phân phối môi chất đồng đều đến các dàn lạnh",
      "Giảm áp suất gas",
      "Lọc cặn bẩn",
      "Đo nhiệt độ môi chất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khi nạp bổ sung môi chất lạnh R410A, kỹ thuật viên bắt buộc phải nạp ở dạng nào?",
    "options": [
      "Nạp ở dạng lỏng",
      "Nạp ở dạng hơi",
      "Dạng nào cũng được",
      "Nạp hỗn hợp khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Vật liệu bảo ôn bọc ống đồng phổ biến nhất trong lắp đặt ĐHTG hiện nay là gì?",
    "options": [
      "Bông thủy tinh Glasswool",
      "Cao lưu hóa Superlon / Armaflex",
      "Mút xốp EPS",
      "Sợi khoáng Rockwool"
    ],
    "correct_index": 1
  },
  {
    "id": "q_hvac2_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Độ dốc tiêu chuẩn tối thiểu của đường ống thoát nước xả dàn lạnh là bao nhiêu?",
    "options": [
      "Tối thiểu 1%",
      "Tối thiểu 0.1%",
      "Tối thiểu 5%",
      "Bằng phẳng nằm ngang"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khi hàn nối ống đồng điều hòa, loại khí bảo vệ nào bắt buộc phải thổi qua lòng ống?",
    "options": [
      "Khí Nitơ khô (N2)",
      "Khí Oxy (O2)",
      "Khí CO2",
      "Khí nén tự nhiên"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Mục đích của việc thổi khí Nitơ qua ống đồng khi hàn là gì?",
    "options": [
      "Ngăn chặn oxy hóa tạo vảy đen (muội than) bên trong ống",
      "Làm mát mối hàn nhanh chóng",
      "Tăng độ bám dính que hàn",
      "Làm sạch dầu máy nén"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Loại que hàn tiêu chuẩn dùng để hàn nối ống đồng điều hòa là gì?",
    "options": [
      "Que hàn đồng chì hoặc hàn bạc (Phos-copper / Silver alloy)",
      "Que hàn điện sắt",
      "Que hàn nhôm",
      "Que hàn inox"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Công dụng của quạt gió dàn lạnh (Evaporator Fan) là gì?",
    "options": [
      "Thổi không khí phòng qua dàn lạnh để trao đổi nhiệt",
      "Thổi khí nóng ra ngoài trời",
      "Hút khí thải ra ngoài",
      "Nén hơi môi chất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Áp suất hơi hút tiêu chuẩn khi máy ĐHTG dùng R22 hoạt động ổn định là khoảng bao nhiêu?",
    "options": [
      "60 - 75 PSI (~4.2 - 5.2 bar)",
      "120 - 140 PSI",
      "20 - 30 PSI",
      "200 PSI"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Áp suất hơi hút tiêu chuẩn khi máy ĐHTG dùng R32/R410A hoạt động là khoảng bao nhiêu?",
    "options": [
      "110 - 140 PSI (~7.5 - 9.6 bar)",
      "60 - 75 PSI",
      "30 - 40 PSI",
      "200 - 250 PSI"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Thiết bị van đảo chiều 4 ngả (4-way valve) được trang bị trên loại điều hòa nào?",
    "options": [
      "Điều hòa 2 chiều nóng / lạnh",
      "Điều hòa 1 chiều lạnh",
      "Quạt hơi nước",
      "Máy sấy khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khi kiểm tra tụ điện quạt/nén bằng đồng hồ vạn năng, thang đo nào phù hợp nhất?",
    "options": [
      "Thang đo điện dung (Capacitance - Farad)",
      "Thang đo điện áp DC",
      "Thang đo dòng điện AC",
      "Thang đo tần số Hz"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Băng quấn simili dán bảo ôn ống đồng có tác dụng chính là gì?",
    "options": [
      "Bảo vệ lớp bảo ôn khỏi tia cực tím UV và va chạm cơ học",
      "Cách nhiệt trực tiếp",
      "Tăng áp suất ống",
      "Chống rò rỉ điện"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khoảng cách tối thiểu từ dàn nóng điều hòa đến tường chắn phía sau là bao nhiêu?",
    "options": [
      "10 - 15 cm",
      "2 cm",
      "100 cm",
      "Không cần khoảng cách"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Ống gió mềm cách nhiệt (Flexible duct) thường được dùng ở vị trí nào trong hệ thống ĐHTG?",
    "options": [
      "Nối từ ống gió tôn chính đến miệng gió (Diffuser)",
      "Dùng thay thế toàn bộ ống tôn",
      "Lắp ngoài trời",
      "Chạy ngầm dưới đất"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Cửa gió khuếch tán (Diffuser) có vai trò gì trong hệ thống điều hòa ống gió?",
    "options": [
      "Phân phối không khí đều vào không gian điều hòa",
      "Lọc bụi mịn",
      "Sấy nóng không khí",
      "Đo áp suất đường ống"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Khi bảo dưỡng máy lạnh, chất tẩy rửa dàn nhôm chuyên dụng là loại nào?",
    "options": [
      "Hóa chất tẩy rửa dàn nhôm trung tính hoặc sinh học",
      "Axit clohydric đặc",
      "Xăng thơm",
      "Dầu diezel"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Biểu hiện hiện tượng máy điều hòa bị thiếu hụt gas môi chất lạnh là gì?",
    "options": [
      "Dàn lạnh bám tuyết ống đầu về, dòng hoạt động thấp hơn định mức",
      "Dàn nóng quá nóng",
      "Quạt dàn lạnh dừng quay",
      "Cầu chì nguồn bị nổ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 2",
    "exam_set": "Thợ Điều hòa Bậc 2",
    "question": "Yêu cầu an toàn quan trọng nhất khi làm việc với môi chất lạnh R32 là gì?",
    "options": [
      "Không hàn cắt ống khi môi chất còn trong hệ thống vì R32 có tính cháy nhẹ (A2L)",
      "Không được đeo găng tay",
      "Hút chân không bằng miệng",
      "Nạp gas ở nhiệt độ cao"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_1",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Trong đồ thị biểu diễn chu trình nhiệt động i-d (Mollier Diagram), thông số độ ẩm tương đối được ký hiệu là gì?",
    "options": [
      "Phi (φ)",
      "d",
      "t",
      "i"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_2",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Van chặn lửa chống cháy vách (FD - Fire Damper) hoạt động tự động đóng lại khi nhiệt độ khí đạt bao nhiêu?",
    "options": [
      "70°C - 74°C (nhờ cầu chì nhiệt Melting Fusible Link)",
      "30°C",
      "150°C",
      "200°C"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_3",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Hệ thống quạt tăng áp cầu thang hiểm (Stairwell Pressurization Fan) hoạt động để duy trì độ chênh áp là bao nhiêu?",
    "options": [
      "20 Pa đến 50 Pa so với khu vực lân cận",
      "100 Pa đến 200 Pa",
      "1 Pa đến 5 Pa",
      "500 Pa"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_4",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Trong hệ thống Chiller giải nhiệt nước (Water-cooled Chiller), thiết bị nào giải nhiệt cho bình ngưng tụ?",
    "options": [
      "Tháp giải nhiệt (Cooling Tower)",
      "Dàn lạnh FCU",
      "Bơm nước lạnh Chilled Water Pump",
      "Bình bù áp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_5",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Nhiệt độ nước lạnh cấp (Chilled Water Supply) tiêu chuẩn ra khỏi máy Chiller thường là bao nhiêu?",
    "options": [
      "7°C (nước về khoảng 12°C)",
      "0°C",
      "15°C",
      "25°C"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_6",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Chức năng của van cân bằng thủy lực (Balancing Valve) trong hệ thống nước lạnh Chiller là gì?",
    "options": [
      "Điều chỉnh phân phối lưu lượng nước lạnh cân bằng giữa các nhánh",
      "Lọc cặn rác",
      "Tăng áp suất bơm",
      "Tự động xả khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_7",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Trong hệ thống VRV/VRF, công nghệ Inverter thay đổi công suất máy nén bằng cách nào?",
    "options": [
      "Thay đổi tần số dòng điện cấp cho động cơ máy nén",
      "Bật tắt máy nén liên tục",
      "Xả bớt gas ra ngoài",
      "Tăng điện áp nguồn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_8",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bợc 3",
    "question": "Thiết bị AHU (Air Handling Unit) khác FCU (Fan Coil Unit) ở điểm cơ bản nào?",
    "options": [
      "AHU có công suất gió lớn, xử lý không khí tươi và kết hợp nhiều lớp lọc chuyên dụng",
      "AHU không dùng nước lạnh",
      "AHU chỉ lắp ở phòng ngủ",
      "AHU dùng điện 1 pha"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_9",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Phin lọc không khí tinh HEPA (High Efficiency Particulate Air) trong phòng sạch có khả năng lọc bụi bao nhiêu?",
    "options": [
      "Lọc 99.97% hạt bụi kích thước từ 0.3 microns",
      "Chỉ lọc bụi thô 100 microns",
      "Lọc 50% bụi",
      "Chỉ lọc được vi khuẩn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_10",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Hiện tượng va đập thủy lực (Liquid Hammer / Liquid Slug) trong máy nén điều hòa xảy ra khi nào?",
    "options": [
      "Môi chất lỏng chưa bay hơi hết bị hút vào xi lanh máy nén",
      "Áp suất hơi hút quá thấp",
      "Điện áp bị giảm",
      "Nhiệt độ ngoài trời thấp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_11",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Chức năng của bình tách lỏng (Accumulator) đặt trước đường hút máy nén là gì?",
    "options": [
      "Ngăn chặn môi chất lạnh dạng lỏng đi lọt vào máy nén",
      "Làm ngưng tụ gas",
      "Tăng áp suất gas",
      "Lọc dầu mỡ"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_12",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Bình tách dầu (Oil Separator) trong hệ thống điều hòa trung tâm được lắp ở vị trí nào?",
    "options": [
      "Đường đẩy ra của máy nén (Discharge Line)",
      "Đường hút máy nén",
      "Sau dàn lạnh",
      "Sau van tiết lưu"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_13",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Độ quá nhiệt (Superheat) của môi chất lạnh tại đầu ra dàn lạnh được tính bằng công thức nào?",
    "options": [
      "Superheat = Nhiệt độ ống hút - Nhiệt độ bay hơi bão hòa",
      "Superheat = Nhiệt độ ngưng tụ - Nhiệt độ ống hút",
      "Superheat = Nhiệt độ phòng - Nhiệt độ cài đặt",
      "Superheat = Áp suất hút - Áp suất đẩy"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_14",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Độ quá lạnh (Subcooling) tại đầu ra dàn nóng được tính bằng công thức nào?",
    "options": [
      "Subcooling = Nhiệt độ ngưng tụ bão hòa - Nhiệt độ ống lỏng",
      "Subcooling = Nhiệt độ phòng - Nhiệt độ lỏng",
      "Subcooling = Áp suất cao - Áp suất thấp",
      "Subcooling = Nhiệt độ bay hơi - Nhiệt độ lỏng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_15",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Van tiết lưu điện tử (EEV - Electronic Expansion Valve) điều khiển lưu lượng gas dựa vào thông số nào?",
    "options": [
      "Độ quá nhiệt (Superheat) tính từ cảm biến nhiệt độ và áp suất",
      "Dòng điện quạt",
      "Nhiệt độ môi trường ngoài trời",
      "Độ ẩm không khí"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_16",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Tiêu chuẩn kiểm tra thử kín ống gió (Duct Leakage Test) thường căn cứ theo tiêu chuẩn quốc tế nào?",
    "options": [
      "DW/144 hoặc SMACNA",
      "NFPA 70",
      "ASHRAE 90.1",
      "ISO 9001"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Bơm nước xả ngưng tích hợp trong dàn lạnh Âm trần Cassette được điều khiển bởi thiết bị nào?",
    "options": [
      "Phao cảm biến mực nước đọng (Float Switch)",
      "Rơ le nhiệt",
      "Công tắc dòng chảy",
      "Cảm biến phòng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_18",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Trong hệ thống ĐHTG, van chặn khói (SD - Smoke Damper) nhận tín hiệu điều khiển đóng/mở từ đâu?",
    "options": [
      "Hệ thống báo cháy trung tâm (Fire Alarm Panel)",
      "Đồng hồ áp suất",
      "Cảm biến nhiệt độ phòng",
      "Công tắc quạt"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_19",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Hệ thống quạt hút khói hành lang (Smoke Extraction Fan) yêu cầu chịu nhiệt tiêu chuẩn tối thiểu là bao nhiêu?",
    "options": [
      "280°C trong 2 giờ hoặc 300°C trong 2 giờ",
      "100°C trong 30 phút",
      "500°C trong 10 giờ",
      "Chỉ cần quạt thông thường"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_20",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Khi hút chân không hệ thống Chiller cỡ lớn, tại sao không được nạp môi chất lỏng ngay từ đầu khi áp suất đang chân không?",
    "options": [
      "Vì gây sôi đột ngột làm đóng băng vỡ ống đồng trong bình nén/bình bay hơi",
      "Vì làm hỏng van nạp",
      "Vì cháy cầu chì",
      "Vì làm hỏng quạt gió"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_21",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Công dụng của công tắc dòng chảy (Flow Switch) lắp trên đường ống nước Chiller là gì?",
    "options": [
      "Bảo vệ máy nén/Chiller dừng chạy khi mất dòng chảy nước",
      "Đo áp suất nước",
      "Lọc cặn bẩn",
      "Điều chỉnh nhiệt độ nước"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Bình giãn nở áp lực (Expansion Tank) trong hệ thống nước lạnh Chiller có vai trò gì?",
    "options": [
      "Hấp thụ sự giãn nở thể tích nước khi nhiệt độ thay đổi và duy trì áp suất hệ thống",
      "Dự trữ nước sinh hoạt",
      "Làm sạch nước",
      "Cung cấp nước nóng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Trong vận hành hệ thống VRV, mã lỗi E3 trên dàn nóng Daikin thường báo hiệu sự cố gì?",
    "options": [
      "Tác động của rơ le cao áp (High Pressure Switch)",
      "Lỗi dây tín hiệu",
      "Lỗi quạt dàn lạnh",
      "Hết gas hoàn toàn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Biện pháp xử lý chuẩn kỹ thuật khi đường ống đồng điều hòa VRV bị rò rỉ môi chất R410A là gì?",
    "options": [
      "Thu hồi gas còn lại, khắc phục điểm rò, thử kín Nitơ 4.15MPa, hút chân không <500microns và nạp lại gas mới theo trọng lượng",
      "Chỉ cần hàn dặm và nạp thêm gas hơi",
      "Nạp đè R32 vào",
      "Xả hết gas ra không khí và chạy tiếp"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac3_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Điều hòa Bậc 3",
    "exam_set": "Thợ Điều hòa Bậc 3",
    "question": "Chỉ số COP (Coefficient of Performance) của máy điều hòa được tính bằng tỷ số nào?",
    "options": [
      "Năng suất lạnh sản sinh (kW) / Công suất điện tiêu thụ (kW)",
      "Dòng điện / Điện áp",
      "Khối lượng gas / Thời gian",
      "Lưu lượng gió / Áp suất gió"
    ],
    "correct_index": 0
  },
  {
    "id": "q_hvac_prac_1",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Dựa vào Bản vẽ Shop Drawing CAD hệ thống ĐHTG (Mã VY.BDT-ĐH-1002), hãy nêu quy trình giám sát và nghiệm thu lắp đặt cụm dàn nóng VRV đặt trên bệ bê tông sân mái: Yêu cầu về khoảng cách tản nhiệt tối thiểu, lò xo giảm chấn và độ cao bệ so với mặt sàn mái để phòng chống ngập nước?",
    "options": [
      "Bệ bê tông cao ≥150mm, lót cao su/lò xo giảm chấn, cách tường sau ≥300mm, cách mặt trước ≥1000mm",
      "Đặt trực tiếp dàn nóng xuống sàn mái không cần lò xo giảm chấn",
      "Đặt dàn nóng sát tường sau 50mm để tiết kiệm diện tích",
      "Bệ bê tông cao 50mm, không cần thoát nước đọng"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_1.png"
  },
  {
    "id": "q_hvac_prac_2",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Theo tiêu chuẩn thi công ĐHTG công trình Vũ Yên Hải Phòng, khi ghép nối 2 dàn nóng đơn thành một cụm dàn nóng kép VRV 30HP, quy định vặn xiết bu-lông chân máy và khoảng cách giữa 2 dàn nóng đơn là bao nhiêu?",
    "options": [
      "Khoảng cách giữa 2 dàn nóng đơn ≥20mm (hoặc theo chỉ định hãng), dùng bu-lông nở M12/M16 xiết chặt lò xo giảm chấn",
      "Đặt sát dàn nóng dính liền nhau không có khe hở",
      "Dùng dây thép buộc chân dàn nóng vào bệ bê tông",
      "Khoảng cách giữa 2 dàn nóng đơn phải ≥2000mm"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_2.png"
  },
  {
    "id": "q_hvac_prac_3",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Trong bản vẽ chi tiết lắp đặt dàn nóng VRV, bẫy dầu (Oil Trap) trên đường ống hơi hút dâng đứng được yêu cầu thi công ở khoảng cách dâng đứng bao nhiêu mét?",
    "options": [
      "Đặt bẫy dầu cứ mỗi 6m - 10m độ cao dâng đứng (khi dàn nóng đặt cao hơn dàn lạnh)",
      "Không cần làm bẫy dầu trên đường dâng đứng",
      "Chỉ làm bẫy dầu ở ngay chân dàn nóng",
      "Mỗi 1m dâng đứng phải làm 1 bẫy dầu"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_3.png"
  },
  {
    "id": "q_hvac_prac_4",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu hướng thổi gió tản nhiệt dàn nóng VRV trên bệ mái: Nếu xung quanh có tường bao lửng chắn gió tản nhiệt, giải pháp kỹ thuật bắt buộc trên bản vẽ Shop là gì?",
    "options": [
      "Lắp chụp hướng dòng gió thổi đứng (Air Discharge Duct Hood) đẩy không khí nóng vọt qua khỏi đỉnh tường bao",
      "Dừng máy nén khi trời nắng nóng",
      "Tháo bỏ toàn bộ vỏ dàn nóng",
      "Lắp quạt cây thổi vào dàn nóng"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_4.png"
  },
  {
    "id": "q_hvac_prac_5",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Kiểm tra hệ thống tiếp địa và cấp nguồn điện cho cụm dàn nóng VRV 380V/3P/50Hz: Yêu cầu kích thước dây cáp điện và công tắc cách ly (Isolator Switch) ngoài trời là gì?",
    "options": [
      "Cáp điện chống cháy/chống ẩm đi trong ống ruột gà lõi thép bọc nhựa, lắp Isolator chống nước IP65 ngay tại chân dàn nóng",
      "Đi dây điện trần tiếp xúc trực tiếp ngoài trời",
      "Dùng phích cắm dân dụng 2 chấu",
      "Không cần lắp Aptomat/Isolator bảo vệ ngoài trời"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_5.png"
  },
  {
    "id": "q_hvac_prac_6",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Dựa vào Bản vẽ Shop Drawing VY.BDT-ĐH-1001, khi treo dàn lạnh Cassette 4 hướng thổi lên trần bê tông, quy cách ty treo và đai ốc chống trôi (Double Nut) được quy định như thế nào?",
    "options": [
      "Dùng ty ren M10/M12 mạ kẽm, nở sắt dầm bê tông, sử dụng đai ốc kép và đệm vênh khóa chặt chân treo dàn lạnh",
      "Dùng dây thép dẻo phi 4 treo dàn lạnh",
      "Dùng 1 đai ốc thả lỏng không cần siết chặt",
      "Khoan đinh vít nở nhựa vào bê tông"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_6.png"
  },
  {
    "id": "q_hvac_prac_7",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu lắp đặt dàn lạnh giấu trần nối ống gió (Ducted FCU): Yêu cầu kỹ thuật về khớp nối mềm (Canvas Connection) nối giữa miệng thổi dàn lạnh với box gió là gì?",
    "options": [
      "Khớp nối mềm bằng vải bạt bọc cách nhiệt, chiều dài 150-200mm, triệt tiêu hoàn toàn độ rung từ quạt FCU truyền vào ống gió",
      "Nối trực tiếp tôn phẳng cứng không có khoảng hở",
      "Khớp nối mềm dài 1000mm rủ võng",
      "Dùng băng dính nilon quấn quanh"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_7.png"
  },
  {
    "id": "q_hvac_prac_8",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi nghiệm thu đường ống thoát nước xả dàn lạnh FCU, bẫy nước (Con densate Drain Trap) được lắp đặt nhằm mục đích gì và độ sâu bẫy nước tối thiểu là bao nhiêu?",
    "options": [
      "Ngăn mùi hôi từ trục thoát nước ngược vào phòng và ngăn áp suất quạt hút ngược nước xả; độ sâu bẫy nước ≥50mm",
      "Tăng tốc độ chảy của nước ngưng",
      "Giảm nhiệt độ nước xả",
      "Độ sâu bẫy nước chỉ cần 5mm"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_8.png"
  },
  {
    "id": "q_hvac_prac_9",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Trên bản vẽ Shop trần hoàn thiện, khoảng cách khoảng hở tối thiểu giữa miệng gió hồi (Return Grille) và miệng gió thổi (Supply Diffuser) của dàn lạnh giấu trần để tránh ngắn mạch không khí là bao nhiêu?",
    "options": [
      "Khoảng cách tối thiểu ≥1500mm (1.5m) hoặc bố trí hai phía đối diện phòng",
      "Bố trí sát nhau 100mm",
      "Lắp chung 1 lỗ trần",
      "Không quan tâm khoảng cách"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_9.png"
  },
  {
    "id": "q_hvac_prac_10",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình nghiệm thu cửa thăm trần (Access Door) bảo dưỡng dàn lạnh giấu trần FCU: Kích thước tiêu chuẩn cửa thăm và vị trí mở cửa thăm?",
    "options": [
      "Kích thước tối thiểu 450x450mm hoặc 600x600mm, đặt ngay bên dưới vị trí động cơ quạt, hộp điện và van tiết lưu EEV",
      "Kích thước 100x100mm ở góc phòng",
      "Không cần làm cửa thăm trần",
      "Lắp cửa thăm kín không mở được"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_10.png"
  },
  {
    "id": "q_hvac_prac_11",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Tại công trường Hạ Long Xanh, khi kỹ thuật viên thực hiện hàn vảy bạc nối ống đồng phi 28.6mm, lưu lượng và áp suất khí Nitơ khô thổi bảo vệ qua lòng ống là bao nhiêu?",
    "options": [
      "Thổi khí Nitơ liên tục với áp suất nhẹ khoảng 0.02 - 0.05 MPa (0.2 - 0.5 bar) trong suốt quá trình nung hàn",
      "Thổi khí Nitơ áp suất cao 4.0 MPa trong khi hàn",
      "Thổi khí Oxy vào lòng ống khi hàn",
      "Không cần thổi khí Nitơ"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_11.png"
  },
  {
    "id": "q_hvac_prac_12",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu mối hàn ống đồng bằng kính phóng đại hoặc mắt thường: Tiêu chuẩn một mối hàn ngấu đạt chất lượng kỹ thuật là gì?",
    "options": [
      "Vảy hàn điền đầy 100% khe hở mối nối, bề mặt láng mịn tròn đều, lòng ống sạch tuyệt đối không bám muội đen oxy hóa",
      "Mối hàn bám cục xù xì, lòng ống đốm đen vảy cá",
      "Mối hàn chỉ cần dính 30% khe hở",
      "Mối hàn bị cháy thủng ống đồng"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_12.png"
  },
  {
    "id": "q_hvac_prac_13",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi loe ống đồng (Flaring) để bắt giắc co vào van dàn lạnh, góc loe tiêu chuẩn và mặt nón đầu loe phải đạt yêu cầu gì?",
    "options": [
      "Góc loe 90 độ, nón loe phẳng mịn không gờ nứt, bề mặt tiếp xúc sáng bóng không bị lệch tâm",
      "Nón loe bị gờ mép rách răng cưa",
      "Dùng búa đập bẹp đầu ống",
      "Góc loe 45 độ lệch nón"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_13.png"
  },
  {
    "id": "q_hvac_prac_14",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình thổi rửa đường ống đồng (Flushing) sau khi hoàn thiện mối hàn: Loại khí và áp suất thổi xả rác cặn bẩn trong ống là bao nhiêu?",
    "options": [
      "Dùng khí Nitơ khô thổi ngắt quãng với áp suất 0.5 - 0.8 MPa (5-8 bar), dùng giẻ trắng chắn đầu ra kiểm tra độ sạch",
      "Dùng nước máy xịt rửa vào lòng ống đồng",
      "Dùng khí nén máy nén khí ô tô",
      "Thổi bằng hơi thở người"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_14.png"
  },
  {
    "id": "q_hvac_prac_15",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi hàn ống đồng gần vị trí van tiết lưu điện tử EEV hoặc van dịch vụ dàn lạnh, biện pháp bảo vệ linh kiện khỏi bị cháy hỏng do nhiệt là gì?",
    "options": [
      "Quấn khăn ướt làm mát thân van và xịt nước làm nguội liên tục trong suốt quá trình nung nhiệt hàn",
      "Hàn trực tiếp ngọn lửa rọi thẳng vào thân van",
      "Bọc xốp nylon quanh van",
      "Không cần làm mát"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_15.png"
  },
  {
    "id": "q_hvac_prac_16",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu thi công bọc bảo ôn ống đồng (Superlon / Armaflex) cho hệ thống VRV dùng gas R410A/R32: Độ dày bảo ôn ống hơi và ống lỏng tối thiểu quy định trên bản vẽ Shop?",
    "options": [
      "Ống hơi bảo ôn dày 19mm - 25mm, ống lỏng bảo ôn dày 13mm - 19mm; hai ống bọc bảo ôn riêng biệt hoàn toàn",
      "Bọc chung cả ống hơi và ống lỏng vào cùng 1 vỏ bảo ôn",
      "Bảo ôn dày 3mm dán giấy",
      "Không cần bọc bảo ôn ống lỏng"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_16.png"
  },
  {
    "id": "q_hvac_prac_17",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình dán keo mối nối bảo ôn và quấn băng quấn simili ngoài trời: Loại keo chuyên dụng và yêu cầu kỹ thuật dán giáp mối?",
    "options": [
      "Dùng keo dán cao su lưu hóa chuyên dụng (Armaflex 520), quét đều 2 mặt giáp mối, ép chặt không để khe hở; quấn simili đè mí ≥50%",
      "Dùng băng dính hai mặt mỏng dán tạm",
      "Dùng dây thun buộc mối nối",
      "Chỉ lồng bảo ôn vào không dán keo mối nối"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_17.png"
  },
  {
    "id": "q_hvac_prac_18",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi ống đồng bảo ôn đi xuyên tường hoặc xuyên sàn bê tông, quy định về ống lồng (Sleeve) và chèn kín chống cháy (Firestop) là gì?",
    "options": [
      "Đặt ống lồng PVC/thép lớn hơn, bảo ôn đi liên tục không bị gián đoạn, chèn kín khe hở bằng keo chống cháy Firestop",
      "Đục bê tông kẹp bẹp ống đồng bảo ôn",
      "Cắt đứt lớp bảo ôn tại vị trí xuyên tường",
      "Trát vữa xi măng trực tiếp đè lên bảo ôn"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_18.png"
  },
  {
    "id": "q_hvac_prac_19",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu bọc bảo ôn đường ống nước lạnh Chiller đi trên xà gồ mái: Biện pháp chống đọng sương đứt gãy tại vị trí cùm treo (Pipe Hanger Support) là gì?",
    "options": [
      "Sử dụng gối đỡ cùm treo cách nhiệt bằng gỗ cứng ép cao áp hoặc PU Foam đúc sẵn (Insulated Pipe Support Foot)",
      "Kẹp trực tiếp cùm sắt vào lớp bảo ôn xốp mềm",
      "Bỏ qua bảo ôn tại vị trí cùm treo",
      "Trải bao tải đè lên ống"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_19.png"
  },
  {
    "id": "q_hvac_prac_20",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình thử kín áp suất bằng khí Nitơ khô cho đường ống gas VRV R32/R410A gồm 3 giai đoạn áp suất và thời gian giữ áp như thế nào?",
    "options": [
      "Giai đoạn 1: 0.3 MPa (3 phút); Giai đoạn 2: 1.5 MPa (3 phút); Giai đoạn 3: 4.15 MPa (Giữ áp 24 giờ)",
      "Thử 1.0 MPa trong 5 phút",
      "Thử 10.0 MPa trong 10 giây",
      "Thử bằng nước áp lực 0.5 MPa"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_20.png"
  },
  {
    "id": "q_hvac_prac_21",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi nén Nitơ thử áp 4.15 MPa trong 24 giờ, công thức hiệu chỉnh áp suất thử theo sự thay đổi nhiệt độ môi trường là bao nhiêu?",
    "options": [
      "Nhiệt độ môi trường tăng/giảm 1°C thì áp suất trong ống sẽ tăng/giảm tương ứng 0.01 MPa (0.1 bar)",
      "Nhiệt độ thay đổi không ảnh hưởng áp suất",
      "1°C thay đổi áp suất 1.0 MPa",
      "1°C thay đổi áp suất 0.5 bar"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_21.png"
  },
  {
    "id": "q_hvac_prac_22",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Dụng cụ bắt buộc phải lắp tại cụm van nạp Nitơ khi tiến hành thử áp suất hệ thống ống đồng VRV để đảm bảo an toàn lao động là gì?",
    "options": [
      "Van giảm áp Nitơ (Nitrogen Regulator) có 2 đồng hồ đo áp suất cao và áp suất nạp điều chỉnh",
      "Nối trực tiếp bình Nitơ vào hệ thống bằng ống cao su không van giảm áp",
      "Dùng van xả nước inox",
      "Dùng bơm tay xe đạp"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_22.png"
  },
  {
    "id": "q_hvac_prac_23",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Phương pháp phát hiện điểm rò rỉ khí Nitơ trên các mối hàn ống đồng và giắc co trong quá trình nén áp suất là gì?",
    "options": [
      "Quét dung dịch xà phòng bọt mịn (Soap Bubble Solution) hoặc máy phát hiện rò siêu âm tại các mối nối",
      "Ngửi bằng mũi",
      "Lắng nghe bằng tai ở khoảng cách 10m",
      "Nhìn màu sơn ống đồng"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_23.png"
  },
  {
    "id": "q_hvac_prac_24",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Thử áp suất đường ống nước ngưng (Condensate Pipe Test): Phương pháp thử kín tiêu chuẩn trước khi bọc bảo ôn kín là gì?",
    "options": [
      "Bịt các đầu xả, nạp đầy nước vào đường ống duy trì trong 15-30 phút không bị sụt mực nước và không rò rỉ mối nối",
      "Nén hơi 4.0 MPa vào ống nhựa PVC",
      "Chỉ cần nhìn mắt thường không nạp nước",
      "Hút chân không ống nước xả"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_24.png"
  },
  {
    "id": "q_hvac_prac_25",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình hút chân không hệ thống điều hòa VRV: Yêu cầu đồng hồ đo chân không chuyên dụng (Micron Gauge) và áp suất chân không cần đạt là bao nhiêu?",
    "options": [
      "Sử dụng máy hút chân không 2 cấp, đo bằng Micron Gauge đạt dưới 500 Microns (-755 mmHg), giữ áp chân không trong 1 giờ",
      "Hút bằng máy nén điều hòa cũ trong 10 phút",
      "Hút đạt 5000 Microns là dừng",
      "Chỉ cần mở van xả gas đuổi khí"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_25.png"
  },
  {
    "id": "q_hvac_prac_26",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Công thức tính toán lượng môi chất lạnh nạp bổ sung (Additional Refrigerant Charge) cho hệ thống VRV căn cứ vào yếu tố nào trên bản vẽ Shop?",
    "options": [
      "Tính theo tổng chiều dài và đường kính của từng đường ống lỏng (Liquid Pipe Length) thi công thực tế",
      "Tính theo chiều dài ống hơi",
      "Nạp tùy thích đến khi dàn nóng mát",
      "Nạp cố định 1kg cho mọi công trình"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_26.png"
  },
  {
    "id": "q_hvac_prac_27",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu công tác nạp bổ sung gas R32/R410A vào hệ thống VRV: Thiết bị đo lường bắt buộc phải sử dụng để kiểm soát khối lượng nạp là gì?",
    "options": [
      "Cân điện tử định lượng chính xác (Digital Charging Scale) có độ chia gram",
      "Đo bằng mắt nhìn phin lọc thủy tinh",
      "Ước lượng theo thời gian nạp",
      "Cân bàn quả tạ nông nghiệp"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_27.png"
  },
  {
    "id": "q_hvac_prac_28",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi nạp gas bổ sung ở dạng lỏng vào đường ống lỏng của hệ thống VRV sau khi hút chân không, trạng thái van dịch vụ dàn nóng như thế nào?",
    "options": [
      "Tất cả các van dịch vụ (lỏng và hơi) của dàn nóng vẫn ở trạng thái ĐÓNG KÍN hoàn toàn",
      "Mở hết van dịch vụ dàn nóng rồi mới nạp",
      "Cho dàn nóng chạy nén rồi nạp trực tiếp vào ống hơi",
      "Tháo bỏ ty van xả gas"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_28.png"
  },
  {
    "id": "q_hvac_prac_29",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nếu hệ thống bị lọt ẩm (Moisture) trong đường ống, chỉ thị trên mắt thăm gas (Sight Glass) sẽ chuyển sang màu gì và cách khắc phục?",
    "options": [
      "Mắt thăm chuyển từ màu XANH (Dry) sang màu VÀNG/HỒNG (Wet); Khắc phục: Thu hồi gas, thay phin lọc rút ẩm và hút chân không lại",
      "Mắt thăm chuyển sang màu đen",
      "Không cần xử lý ẩm",
      "Đổ thêm dầu máy nén vào"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_29.png"
  },
  {
    "id": "q_hvac_prac_30",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy cách cáp điện tín hiệu truyền thông (Communication Cable F1-F2) nối giữa dàn nóng VRV và các dàn lạnh FCU yêu cầu tiêu chuẩn kỹ thuật gì?",
    "options": [
      "Cáp chống nhiễu (Shielded Twisted Pair Cable - 2 core x 0.75-1.25mm²), có lớp vỏ bọc lưới kim loại tiếp địa 1 đầu",
      "Dây điện đơn trần 0.5mm² không bọc vỏ",
      "Dây cáp mạng CAT3 bấm hạt RJ45",
      "Cáp điện lực 3 pha 10mm²"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_30.png"
  },
  {
    "id": "q_hvac_prac_31",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Sơ đồ đấu nối dây tín hiệu truyền thông giữa cụm dàn nóng và các dàn lạnh trong hệ thống VRV bắt buộc tuân theo cấu trúc nào?",
    "options": [
      "Cấu trúc nối tiếp chuỗi (Daisy Chain Wiring) từ dàn lạnh này sang dàn lạnh tiếp theo, không được nối phân nhánh vòng tròn (Loop/Star)",
      "Đấu nối hình sao khép kín (Star-Loop)",
      "Đấu song song chung cọc nguồn 220V",
      "Đấu tùy tiện không theo thứ tự"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_31.png"
  },
  {
    "id": "q_hvac_prac_32",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khoảng cách đi song song tối thiểu giữa cáp tín hiệu điều khiển VRV và cáp nguồn điện lực 380V để chống nhiễu từ trường là bao nhiêu?",
    "options": [
      "Khoảng cách tối thiểu ≥300mm (hoặc đi trong hai máng cáp/ống thép cách ly riêng biệt)",
      "Đi chung trong cùng 1 ống gen nhựa",
      "Quấn xoắn dây tín hiệu vào dây nguồn 3 pha",
      "Khoảng cách 5mm"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_32.png"
  },
  {
    "id": "q_hvac_prac_33",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu đấu nối điều khiển trung tâm BMS (Building Management System) qua cổng Bacnet/Modbus Gateway của hệ thống ĐHTG:",
    "options": [
      "Kiểm tra địa chỉ IP Gateway, cài đặt địa chỉ Central Address cho từng dàn lạnh và test truyền nhận dữ liệu trạng thái/báo lỗi",
      "Chỉ cần cắm nguồn điện 220V vào bộ điều khiển",
      "Dùng công tắc cơ bật tắt trực tiếp",
      "Không cần cài đặt địa chỉ dàn lạnh"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_33.png"
  },
  {
    "id": "q_hvac_prac_34",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu lắp đặt ống gió tôn mạ kẽm (GI Duct): Quy cách độ dày tôn mạ kẽm theo kích thước cạnh lớn nhất của ống gió (TCVN 5687:2010)?",
    "options": [
      "Cạnh <400mm (dày 0.58mm); 400-800mm (dày 0.75mm); 800-1200mm (dày 0.95mm); >1200mm (dày 1.15mm)",
      "Tất cả các cỡ ống gió đều dùng tôn 0.3mm",
      "Cạnh 2000mm dùng tôn 0.5mm",
      "Dùng tôn phẳng không mạ kẽm 0.2mm"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_34.png"
  },
  {
    "id": "q_hvac_prac_35",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Kiểm tra kỹ thuật ghép nối ống gió bằng nẹp C / Bích TDC / Bích V: Khoảng cách bắt bu-lông kẹp bích và chèn gioăng làm kín giáp mối là gì?",
    "options": [
      "Dán gioăng cao su/mút tự dán kín mặt bích, khoảng cách kẹp bích/bu-lông góc ≤150mm, bắn silicon kín 4 góc ghép nẹp",
      "Không dán gioăng, bỏ trống góc bích",
      "Bắn đinh rút thưa 500mm 1 con",
      "Dùng dải băng dính quấn quanh bích"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_35.png"
  },
  {
    "id": "q_hvac_prac_36",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu treo ống gió chữ nhật nằm ngang: Khoảng cách tối đa giữa các giá treo (Duct Hangers) và quy cách thanh V đỡ đáy ống?",
    "options": [
      "Khoảng cách giá treo ≤300mm (ống nhỏ) hoặc ≤2500mm; thanh V đỡ đáy tối thiểu V40x40x4mm có lót cao su chống rung",
      "Giá treo cách nhau 10 mét 1 vị trí",
      "Treo ống gió bằng dây thừng treo trần",
      "Không cần thanh V đỡ đáy"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_36.png"
  },
  {
    "id": "q_hvac_prac_37",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Yêu cầu kỹ thuật thi công gân tăng cứng (Duct Stiffener) cho đường ống gió chữ nhật có kích thước cạnh lớn từ 800mm trở lên?",
    "options": [
      "Cán gân hình thoi/gân sóng trên thân tôn hoặc gắn thanh V tăng cứng gia cường bên trong/bên ngoài ống gió",
      "Không cần gia cường gân tăng cứng",
      "Dán xốp lên thân ống",
      "Bắn đinh vít dày đặc"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_37.png"
  },
  {
    "id": "q_hvac_prac_38",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu lắp đặt van điều chỉnh lưu lượng gió (VCD - Volume Control Damper) trên đường ống gió:",
    "options": [
      "Lắp tại nhánh rẽ ống gió, tay gạt điều chỉnh dễ thao tác, có vạch chia góc mở và bu-lông hãm cố định vị trí lá van",
      "Bắn chết lá van kín 100% không cho xoay",
      "Giấu van kín trong trần không có tay gạt",
      "Tháo bỏ lá van chỉ giữ vỏ"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_38.png"
  },
  {
    "id": "q_hvac_prac_39",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Khi lắp đặt van chặn lửa (FD - Fire Damper) xuyên tường ngăn cháy: Vị trí lắp đặt van và khoảng cách từ mặt tường đến thân van?",
    "options": [
      "Thân van FD nằm gọn trong bề dày tường ngăn cháy hoặc cách mặt tường ≤150mm, ống gió nối vào van có khớp đứt nhiệt",
      "Lắp van FD cách tường 2 mét",
      "Lắp van FD tự do trên trần nhựa",
      "Bỏ van FD khi đi xuyên tường cháy"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_39.png"
  },
  {
    "id": "q_hvac_prac_40",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Bọc bảo ôn cách nhiệt ống gió tươi / gió lạnh bằng bông thủy tinh (Glasswool) bọc bạc: Yêu cầu tỷ trọng bông và đinh ghim dán giữ bông?",
    "options": [
      "Bông thủy tinh tỷ trọng ≥32kg/m³ (hoặc Rubber Foam), dán đinh ghim đĩa nhôm mật độ 9-12 đinh/m², dán băng keo nhôm kín mối nối",
      "Phủ bông thủy tinh tự do không đinh ghim",
      "Dùng bông tỷ trọng 10kg/m³ bọc lỏng lẻo",
      "Dùng giấy báo bọc quanh ống tôn"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_40.png"
  },
  {
    "id": "q_hvac_prac_41",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu lắp đặt hộp gió (Plenum Box) và miệng gió nan bầu dục (Linear Grill) trên trần thạch cao:",
    "options": [
      "Hộp gió bọc bảo ôn kín 100%, miệng gió bắt vít chìm hãm chắc chắn vào khung xương trần, mặt miệng gió phẳng khít bề mặt trần",
      "Để hộp gió hở mép xả gió vào trần thạch cao",
      "Lắp miệng gió xệ lệch khỏi trần 20mm",
      "Miệng gió treo lơ lửng bằng dây cước"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_41.png"
  },
  {
    "id": "q_hvac_prac_42",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu lắp đặt quạt hút khói sự cố / quạt tăng áp ly tâm (Centrifugal Fan) trong phòng kỹ thuật quạt:",
    "options": [
      "Quạt đặt trên lò xo giảm chấn (Vibration Isolator Springs), nối ống gió bằng khớp mềm chịu nhiệt 300°C, vỏ quạt tiếp địa an toàn",
      "Bắt chặt chân quạt trực tiếp xuống sàn không lò xo",
      "Nối cứng ống tôn trực tiếp vào miệng quạt",
      "Quạt treo bằng dây xích xe đạp"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_42.png"
  },
  {
    "id": "q_hvac_prac_43",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Quy trình kiểm tra chiều quay động cơ quạt gió 3 pha (3-Phase Fan Motor) trước khi chạy thử tải (Commissioning):",
    "options": [
      "Bật nhấp nháy khởi động (Jogging) quan sát hướng mũi tên chỉ chiều quay trên vỏ quạt; nếu ngược chiều thì đảo 2 trong 3 pha điện",
      "Cho quạt chạy tối đa tốc độ 24 giờ rồi mới kiểm tra",
      "Cứ để quạt quay ngược không ảnh hưởng",
      "Đổi dây trung tính N vào dây pha"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_43.png"
  },
  {
    "id": "q_hvac_prac_44",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu quạt thông gió gắn trần nối ống gió (Inline Duct Fan) căn hộ / khu vệ sinh:",
    "options": [
      "Quạt treo độc lập bằng ty ren hãm cao su chống rung, van 1 chiều (Check Damper) ngăn mùi ngược, ống mềm nẹp đai xiết kín",
      "Treo quạt trực tiếp đè lên ống gió",
      "Bỏ van 1 chiều chống mùi",
      "Nối ống mềm bằng dây chun"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_44.png"
  },
  {
    "id": "q_hvac_prac_45",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Kiểm tra đo đạc độ ồn quạt gió (Noise Level Test) tại vị trí làm việc theo tiêu chuẩn Việt Nam:",
    "options": [
      "Dùng máy đo độ ồn (Sound Level Meter) đo tại khoảng cách 1.5m, độ ồn quạt phòng văn phòng đạt ≤45-55 dBA",
      "Đo độ ồn bằng tai nghe nhạc",
      "Độ ồn 120 dBA vẫn đạt chuẩn",
      "Không cần đo độ ồn"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_45.png"
  },
  {
    "id": "q_hvac_prac_46",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Thiết bị giảm âm quạt gió (Silencer / Sound Attenuator) lắp trên đường ống gió quạt hút có cấu tạo và chức năng gì?",
    "options": [
      "Vỏ tôn bọc đệm vật liệu hấp thụ âm thanh (Bông khoáng / Bông thủy tinh đục lỗ), giảm độ ồn lan truyền theo dòng không khí",
      "Là van đóng mở dòng khí",
      "Là lọc bụi thô",
      "Là bộ gia nhiệt điện"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_46.png"
  },
  {
    "id": "q_hvac_prac_47",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu thử kín đường ống gió áp suất cao/trung bình theo tiêu chuẩn DW/144 hoặc SMACNA: Phương pháp thử kín bằng quạt thử áp và đĩa lỗ (Orifice Plate)?",
    "options": [
      "Bịt kín hai đầu đoạn ống thử, bơm khí tạo áp suất thiết kế, đo lưu lượng khí rò rỉ qua đĩa lỗ orifice không vượt quá giới hạn cho phép",
      "Thử kín bằng cách đổ nước vào ống gió",
      "Nhìn mắt thường tìm khe hở",
      "Thử kín bằng khói thuốc lá"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_47.png"
  },
  {
    "id": "q_hvac_prac_48",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Phương pháp thử kín ống gió bằng máy tạo khói (Smoke Test Method) áp dụng tại công trường:",
    "options": [
      "Bơm khói đặc vào đoạn ống gió đã bịt kín và tạo áp nhẹ, quan sát các vị trí khớp nối nẹp bích/mối ghép xem có khói rò rỉ ra ngoài",
      "Đốt rơm tạo khói trong ống gió",
      "Xịt nước xà phòng lên toàn bộ thân tôn",
      "Thử khói khi quạt gió đang chạy tối đa"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_48.png"
  },
  {
    "id": "q_hvac_prac_49",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Tỷ lệ phần trăm (%) tổng độ dài đường ống gió bắt buộc phải chọn ngẫu nhiên để thử kín áp suất tại công trường theo quy định nghiệm thu:",
    "options": [
      "Tối thiểu 10% - 20% tổng diện tích/độ dài ống gió cho hệ thống áp suất trung bình/cao (hoặc 100% cho tuyến ống nguy hiểm/hút khói)",
      "Chỉ thử 0.1% độ dài",
      "Không bắt buộc thử kín ống gió",
      "Chỉ thử đoạn ống ngắn 0.5m"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_49.png"
  },
  {
    "id": "q_hvac_prac_50",
    "type": "multiple_choice",
    "category": "Thực hành ĐHTG",
    "exam_set": "Tự luận - Thực hành ĐHTG",
    "question": "Nghiệm thu cân bằng khí (TAB - Testing, Adjusting, Balancing) toàn bộ hệ thống ĐHTG trước khi bàn giao đưa vào sử dụng:",
    "options": [
      "Đo lưu lượng gió tại tất cả các miệng thổi/hồi bằng Anemometer/Balancing Hood, chỉnh van VCD đạt sai số lưu lượng nằm trong khoảng ±10%",
      "Chỉ cần kiểm tra quạt có quay hay không",
      "Chỉnh van VCD mở tự do 100%",
      "Sai số lưu lượng ±50% vẫn nghiệm thu"
    ],
    "correct_index": 0,
    "image": "data/hvac_cad_50.png"
  }
];
