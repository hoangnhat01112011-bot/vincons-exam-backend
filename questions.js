// File này được tạo tự động
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
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm"
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
      "1-2 bar"
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
      "1,5%"
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
      "650 mm"
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
      "Làm đẹp bề mặt ống"
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
      "Không ảnh hưởng nếu lắp nhanh"
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
      "Tăng lưu lượng nước thải"
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
      "Không ảnh hưởng"
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
      "Nước chảy nhanh, cặn đọng"
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
      "Ống thông hơi D60, đáy ống thấp hơn cốt sàn hoàn thiện 2450 mm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_32",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu áp thử quá thấp sẽ:",
    "options": [
      "Tốt hơn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_33",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu độ dốc vượt 0.03 sẽ:",
    "options": [
      "Tốt hơn"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_34",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Nếu máy laser bị lệch cân bằng (không tự cân bằng đúng), hậu quả là gì?",
    "options": [
      "Sai số cao độ trên toàn bộ các điểm đo"
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
      "4 giây"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_36",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Màu sắc ống"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_37",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Trong hệ thống cấp nước nhiều tầng, nếu không lắp van giảm áp (PRV) ở các tầng thấp, hậu quả là gì?",
    "options": [
      "Nước chảy yếu"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_38",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Mốc A có cao độ +1,5m. Số đọc mia tại mốc A là 1,25 m. Tại điểm B, số đọc mia là    1,7 m. Hỏi cao độ điểm B là bao nhiêu?",
    "options": [
      "1.470 m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_39",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi đo cao độ bằng máy thuỷ bình, số đọc được trên mia lớn hơn nhiều so với cao độ máy",
    "options": [
      "Điểm tại vị trí đặt mia cao hơn cao độ máy"
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
      "180 ± 10°C"
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
      "Xoay ống nhiều vòng để keo phân bố đều"
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
      "Lắp càng sát tường càng tốt"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_43",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Việc sử dụng 2 cái “lơi (chếch)” tạo thành 1 cái co (cút 90˚) trong thoát nước có ý nghĩa gì?",
    "options": [
      "Làm tăng áp lực dòng chảy trong ống"
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
      "7.2cm"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_45",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Cắt rãnh sâu và rộng tùy ý"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_46",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Yêu cầu kỹ thuật nào sau đây là đúng sau khi hoàn thành mối hàn HDPE đạt chuẩn?",
    "options": [
      "Gờ hàn lệch về một phía để dễ kiểm tra"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_47",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Sau khi gia nhiệt ống và phụ kiện PPR đúng thời gian, thợ đưa ống vào phụ kiện nhưng có xoay nhẹ để “cho đều”. Hậu quả chính là gì?",
    "options": [
      "Không ảnh hưởng"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn3_48",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 3",
    "exam_set": "Thợ CTN Bậc 3",
    "question": "Đơn vị đo áp suất phổ biến là:",
    "options": [
      "kg/cm²"
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
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm"
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
      "Trong vòng 60 giây"
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
      "1.470 m"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_17",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi đo cao độ bằng máy thuỷ bình, số đọc được trên mia lớn hơn nhiều so với cao độ máy",
    "options": [
      "Điểm tại vị trí đặt mia cao hơn cao độ máy"
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
      "180 ± 10°C"
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
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm"
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
      "Trong vòng 60 giây"
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
      "Gờ hàn lệch về một phía để dễ kiểm tra"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_22",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Khi cắt rãnh trên tường gạch để đặt ống, yêu cầu nào là đúng nhằm tránh nứt tường sau hoàn thiện?",
    "options": [
      "Cắt rãnh sâu và rộng tùy ý"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_23",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Tại các trục đứng cấp nước, yêu cầu kỹ thuật quan trọng nhất để đảm bảo vận hành lâu dài là gì?",
    "options": [
      "Lắp càng sát tường càng tốt"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_24",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Trong quá trình hàn đối đầu HDPE, thông số nào quyết định trực tiếp đến hình dạng và chất lượng gờ hàn?",
    "options": [
      "Màu sắc ống"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_25",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Nếu máy laser bị lệch cân bằng (không tự cân bằng đúng), hậu quả là gì?",
    "options": [
      "Sai số cao độ trên toàn bộ các điểm đo"
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
      "1-2 bar"
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
      "Ống nước nóng D32, đáy ống cao hơn cốt sàn hoàn thiện 350 mm"
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
      "Điểm cao nhất công trình"
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
      "650 mm"
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
      "Gờ hàn lệch về một phía để dễ kiểm tra"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_31",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Sau khi gia nhiệt ống và phụ kiện PPR đúng thời gian, thợ đưa ống vào phụ kiện nhưng có xoay nhẹ để “cho đều”. Hậu quả chính là gì?",
    "options": [
      "Không ảnh hưởng"
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
      "kg/cm²"
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
      "Ống thoát nước mưa D110, độ dốc 1%, đáy ống cao hơn cốt sàn hoàn thiện 750 mm"
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
      "180 ± 10°C"
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
      "Xoay ống nhiều vòng để keo phân bố đều"
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn2_42",
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ Cấp thoát nước Bậc 2",
    "exam_set": "Thợ CTN Bậc 2",
    "question": "Kí hiệu sau đây VP-D60; BOP= FL 2450 có nghĩa là:",
    "options": [
      "Ống thông hơi D60, đáy ống thấp hơn cốt sàn hoàn thiện 2450 mm"
    ],
    "correct_index": 0
  }
];
