// File questions.js - Cập nhật Bộ đề thi Lý thuyết và Tự luận Thực hành ĐHTG theo Bậc thợ & Chuyên ngành con
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
  },
  {
    "id": "q_hvac_theory_1",
    "question": "Câu 1. Trước khi bắt đầu công việc thi công ĐHTG, người thợ cần làm gì trước tiên?",
    "options": [
      "Lấy dụng cụ và bắt đầu thi công",
      "Kiểm tra bản vẽ, biện pháp thi công, khu vực làm việc và yêu cầu an toàn",
      "Chỉ kiểm tra vật tư",
      "Chờ người khác làm trước"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_2",
    "question": "Câu 2. Khi làm việc trên cao, biện pháp nào là quan trọng nhất?",
    "options": [
      "Sử dụng đầy đủ phương tiện bảo vệ cá nhân và hệ thống chống rơi phù hợp",
      "Làm nhanh để giảm thời gian trên cao",
      "Đi giày thể thao",
      "Chỉ cần có người đứng bên dưới"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_3",
    "question": "Câu 3. Khi sử dụng máy cắt, máy mài, người thợ cần:",
    "options": [
      "Sử dụng đúng thiết bị, kiểm tra trước khi vận hành và mang bảo hộ lao động theo quy định",
      "Dùng tay giữ sát lưỡi cắt",
      "Không cần kiểm tra dây điện",
      "Tháo chắn bảo vệ để thao tác dễ hơn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_4",
    "question": "Câu 4. Khi phát hiện dây điện của thiết bị thi công bị hở, người thợ nên:",
    "options": [
      "Dùng tiếp nếu máy vẫn chạy",
      "Quây băng cảnh báo để cảnh báo cho mọi người",
      "Dùng băng keo để quấn tạm để dùng tiếp",
      "Ngừng sử dụng và báo người phụ trách để xử lý"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_5",
    "question": "Câu 5. Khi nâng một đoạn ống gió nặng lên cao, điều nào không được phép?",
    "options": [
      "Kiểm tra thiết bị nâng",
      "Kiểm tra dây treo và điểm móc",
      "Đứng bên dưới tải đang được nâng",
      "Có người cảnh giới khu vực"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_6",
    "question": "Câu 6. Khi hàn đồng hoặc hàn kim loại tại công trường, cần đặc biệt chú ý:",
    "options": [
      "Phòng cháy chữa cháy, thông gió và bảo vệ khu vực xung quanh",
      "Không cần che chắn",
      "Chỉ cần mang găng tay",
      "Có thể hàn gần vật liệu dễ cháy"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_7",
    "question": "Câu 7. Khi phát hiện điều kiện làm việc không an toàn, người thợ có quyền:",
    "options": [
      "Tiếp tục tìm mọi cách để làm cho xong việc",
      "Chủ động bỏ đi chỗ khác",
      "Tự tìm chỗ khác để ngồi nghỉ cho đến khi cảm thấy an toàn",
      "Dừng công việc và báo cáo người phụ trách"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_8",
    "question": "Câu 8. Khi thi công trong khu vực có nhiều đội MEP cùng làm việc, người thợ cần:",
    "options": [
      "Tự ý thay đổi tuyến ống",
      "Chỉ quan tâm phần việc của mình",
      "Phối hợp với các đội liên quan và tuân thủ bản vẽ/biện pháp được duyệt",
      "Thi công trước rồi báo sau"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_9",
    "question": "Câu 9. Mục đích của việc rào chắn khu vực thi công là:",
    "options": [
      "Để không cho nhà thầu ngoài vào",
      "Trang trí công trường nhìn cho chuyên nghiệp",
      "Ngăn người không phận sự tiếp cận khu vực nguy hiểm",
      "Làm chỗ để vật tư cho đảm bảo"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_10",
    "question": "Câu 10. Sau khi hoàn thành công việc trong ngày, người thợ cần:",
    "options": [
      "Thu dọn vật tư, dụng cụ, vệ sinh và đảm bảo khu vực an toàn",
      "Tất hết nguồn điện để đề phòng cháy nổ",
      "Chụp lại hiện trạng đang thi công để ngày mai làm tiếp",
      "Để nguyên dụng cụ tại vị trí thi công để hôm sau không phải mang ra"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_11",
    "question": "Câu 11. Trước khi lắp đặt một tuyến ống gió, người thợ cần căn cứ chủ yếu vào:",
    "options": [
      "Kinh nghiệm cá nhân",
      "Dựa vào các ý kiến của các thành viên trong tổ",
      "Bản vẽ thi công được phê duyệt và hiện trạng thực tế",
      "Vị trí thuận tiện nhất"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_12",
    "question": "Câu 12. Shop drawing có mục đích chính là:",
    "options": [
      "Chỉ dùng cho bộ phận văn phòng",
      "Chỉ dùng để nghiệm thu vật tư",
      "Thay thế hoàn toàn thiết kế",
      "Thể hiện chi tiết để phục vụ thi công và phối hợp thực tế"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_13",
    "question": "Câu 13. Khi kích thước trên bản vẽ khác với kích thước thực tế tại công trường, người thợ nên:",
    "options": [
      "Tự ý thay đổi kích thước",
      "Tự ý sửa bản vẽ",
      "Báo kỹ thuật/giám sát để xác nhận và xử lý",
      "Bỏ qua sai khác"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_14",
    "question": "Câu 14. Khi định vị vị trí treo giá đỡ, yếu tố nào cần kiểm tra?",
    "options": [
      "Cao độ, khoảng cách, tuyến ống và khả năng chịu lực cửa giá đỡ",
      "Chiều dài ty ren giá đỡ, cao độ của các giá đỡ",
      "Kiểm tra xem các tắc kê đạn đã được đóng cận thận chưa",
      "Kiểm tra  giàn giáo có đảm bảo an toàn không."
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_15",
    "question": "Câu 15. Trước khi khoan vào sàn hoặc tường, cần kiểm tra:",
    "options": [
      "Kiểm tra xem bê tông hay tường có đủ chắc không",
      "Các đường ống, cáp điện và hệ thống ngầm có thể bị ảnh hưởng",
      "Kiểm tra mũi khoan có đảm bảo không.",
      "Kiểm tra xem có bị vướng vào sắt kết cấu không"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_16",
    "question": "Câu 16. Cao độ của tuyến ống được xác định nhằm:",
    "options": [
      "Làm tuyến ống đẹp hơn בלבד",
      "Không có tác dụng",
      "Giảm số lượng công nhân",
      "Đảm bảo đúng thiết kế và tránh xung đột với hệ thống khác"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_17",
    "question": "Câu 17. Khi hai tuyến MEP giao nhau, ưu tiên xử lý bằng:",
    "options": [
      "Báo cáo cho tổ trưởng để phối hợp với giám sát kỹ thuật phối hợp xử lý",
      "Tự ý đổi cao độ",
      "Phối hợp theo bản vẽ phối hợp và chỉ dẫn kỹ thuật",
      "Cắt một tuyến bất kỳ"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_18",
    "question": "Câu 18. Khi nhận vật tư ống đồng, cần kiểm tra:",
    "options": [
      "Kiểm tra xem có đủ chiều dài không",
      "Đường kính, chiều dày , chủng loại và màu sắc của ống đồng",
      "Đường kính, chiều dày , chủng loại và trọng lượng của ống đồng",
      "Đường kính, chiều dày, chủng loại và tình trạng vật tư"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_19",
    "question": "Câu 19. Vật tư bị móp, méo hoặc hư hỏng nghiêm trọng nên:",
    "options": [
      "Che lại để không nhìn thấy",
      "Dùng ở vị trí khó quan sát",
      "Phân loại và báo cáo để xử lý",
      "Đưa vào lắp đặt ngay"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_20",
    "question": "Câu 20. Một tuyến ống thi công đúng yêu cầu phải đảm bảo:",
    "options": [
      "Chỉ cần đúng chiều dài",
      "Đúng vị trí, cao độ, kích thước, hướng tuyến và yêu cầu kỹ thuật",
      "Chỉ cần nhìn đẹp",
      "Chỉ cần lắp được thiết bị"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_21",
    "question": "Câu 21. Chức năng chính của hệ thống ống gió là:",
    "options": [
      "Dẫn điện",
      "Dẫn môi chất lạnh",
      "Dẫn nước",
      "Dẫn và phân phối không khí"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_22",
    "question": "Câu 22. Khi lắp ống gió chữ nhật, cần đặc biệt chú ý:",
    "options": [
      "Kích thước, độ kín, độ thẳng và hệ thống giá đỡ",
      "Kiểm tra số lượng bulông có đủ không",
      "Độ dày và màu sắc tôn",
      "Độ dày và  chiều dài ống"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_23",
    "question": "Câu 23. Mối nối ống gió cần được xử lý nhằm:",
    "options": [
      "Tăng trọng lượng ống",
      "Đảm bảo độ kín và độ chắc chắn theo yêu cầu thiết kế",
      "Giảm kích thước ống",
      "Làm ống bóng hơn"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_24",
    "question": "Câu 24. Khi gia công ống gió, đường cắt bị ba via nhiều có thể:",
    "options": [
      "Làm giảm tiếng ồn",
      "Làm tăng lưu lượng gió",
      "Không ảnh hưởng gì",
      "Gây nguy hiểm và ảnh hưởng chất lượng lắp đặt"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_25",
    "question": "Câu 25. Khi treo ống gió, giá đỡ phải:",
    "options": [
      "Được bố trí theo yêu cầu thiết kế/tiêu chuẩn và đảm bảo chắc chắn",
      "Bố trí theo thực tế cho phù hợp",
      "Dùng dây điện để treo",
      "Tìm cách giảm bớt giá đỡ để tiết kiệm chi phí"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_26",
    "question": "Câu 26. Không được phép sử dụng hệ thống nào làm giá treo ống gió nếu chưa được thiết kế cho mục đích đó?",
    "options": [
      "Hệ thống khác như ống nước hoặc cáp điện",
      "Ty ren đúng quy cách",
      "Kết cấu được phê duyệt",
      "Giá đỡ chuyên dụng"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_27",
    "question": "Câu 27. Khi nối ống gió bằng mặt bích, cần đảm bảo:",
    "options": [
      "Chỉ cần bắt một vài bulông",
      "Có thể để hở mối nối",
      "Mặt bích thẳng, liên kết chắc chắn và gioăng kín theo yêu cầu",
      "Không cần gioăng"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_28",
    "question": "Câu 28. Gioăng tại mối nối ống gió có tác dụng chính là:",
    "options": [
      "Hạn chế rò rỉ không khí",
      "Làm đẹp đường ống",
      "Tăng trọng lượng ống",
      "Tăng tốc độ gió"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_29",
    "question": "Câu 29. Khi lắp van gió, cần chú ý:",
    "options": [
      "Đúng hướng, đúng vị trí và có khả năng thao tác/bảo trì",
      "Không cần kiểm tra chiều",
      "Chỉ cần bắt chắc",
      "Có thể đặt ở vị trí không thể tiếp cận"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_30",
    "question": "Câu 30. Van VCD thường được sử dụng để:",
    "options": [
      "Điều chỉnh lưu lượng nước",
      "Điều chỉnh lưu lượng gió",
      "Cấp điện cho quạt",
      "Điều chỉnh áp suất gas"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_31",
    "question": "Câu 31. Khi lắp miệng gió, yếu tố nào quan trọng?",
    "options": [
      "Chỉ số lượng vít",
      "Chỉ màu sắc",
      "Chỉ kích thước cổ gió",
      "Vị trí, cao độ, hướng thổi/hút và độ hoàn thiện"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_32",
    "question": "Câu 32. Nếu ống gió bị móp làm giảm đáng kể tiết diện, người thợ nên:",
    "options": [
      "Cứ lắp tiếp",
      "Đục thêm lỗ",
      "Dùng băng keo che lại",
      "Sửa chữa/thay thế để đảm bảo tiết diện thiết kế"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_33",
    "question": "Câu 33. Khi nối ống gió mềm vào cổ gió, cần tránh:",
    "options": [
      "Kéo căng quá mức hoặc tạo nhiều nếp gấp gây cản trở dòng khí",
      "Uốn cong hợp lý",
      "Kiểm tra kín khí",
      "Cố định hai đầu"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_34",
    "question": "Câu 34. Ống gió mềm quá dài và bị võng nhiều có thể:",
    "options": [
      "Làm tăng lưu lượng",
      "Làm tăng công suất quạt",
      "Không ảnh hưởng",
      "Tăng trở lực và làm giảm hiệu quả phân phối gió"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_35",
    "question": "Câu 35. Sau khi hoàn thành hệ thống ống gió, cần:",
    "options": [
      "Đóng kín toàn bộ và không kiểm tra",
      "Vệ sinh bên trong, kiểm tra mối nối, giá đỡ và các vị trí liên quan trước nghiệm thu",
      "Chỉ kiểm tra bên ngoài",
      "Sơn lại toàn bộ"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_36",
    "question": "Câu 36. Ống đồng trong hệ thống điều hòa thường dùng để:",
    "options": [
      "Dẫn điện",
      "Dẫn môi chất lạnh",
      "Dẫn nước sinh hoạt",
      "Dẫn khí nén"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_37",
    "question": "Câu 37. Khi cắt ống đồng, dụng cụ phù hợp là:",
    "options": [
      "Kìm điện",
      "Dao cắt ống chuyên dụng",
      "Búa",
      "Máy đục bê tông"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_38",
    "question": "Câu 38. Sau khi cắt ống đồng, cần xử lý ba via nhằm:",
    "options": [
      "Làm đẹp đầu ống",
      "Tăng đường kính ống",
      "Giảm chiều dài ống",
      "Tránh mạt đồng lọt vào hệ thống và đảm bảo đầu ống phù hợp cho loe/nối"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_39",
    "question": "Câu 39. Khi loe đầu ống đồng, mặt loe phải:",
    "options": [
      "Nứt càng nhiều càng tốt",
      "Méo để dễ siết",
      "Đều, đúng kích thước và không bị nứt",
      "Mỏng bất kỳ"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_40",
    "question": "Câu 40. Siết đai ốc loe nên thực hiện:",
    "options": [
      "Theo lực siết yêu cầu của nhà sản xuất bằng dụng cụ phù hợp",
      "Không cần kiểm soát lực",
      "Bằng tay càng chặt càng tốt",
      "Dùng búa đóng"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_41",
    "question": "Câu 41. Nếu mối loe bị nứt, người thợ nên:",
    "options": [
      "Bỏ qua nếu vết nứt nhỏ",
      "Dùng băng keo quấn lại",
      "Bôi dầu lên vết nứt",
      "Cắt bỏ và làm lại mối loe đúng kỹ thuật"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_42",
    "question": "Câu 42. Khi hàn ống đồng cho hệ thống lạnh, việc cấp khí nitơ khô phù hợp trong quá trình hàn có tác dụng:",
    "options": [
      "Làm ống đồng mềm hơn",
      "Tăng áp suất gas vận hành",
      "Hạn chế hình thành oxit bên trong đường ống",
      "Tăng nhiệt độ hàn"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_43",
    "question": "Câu 43. Sau khi hàn đường ống môi chất, cần kiểm tra:",
    "options": [
      "Độ kín và chất lượng mối hàn theo quy trình",
      "Chỉ chiều dài ống",
      "Màu sơn",
      "Độ bóng của ống"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_44",
    "question": "Câu 44. Chức năng của quá trình hút chân không hệ thống lạnh là:",
    "options": [
      "Tăng điện áp máy nén",
      "Làm sạch bên ngoài ống",
      "Loại bỏ không khí và hơi ẩm khỏi hệ thống",
      "Tăng lượng môi chất"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_45",
    "question": "Câu 45. Nếu trong hệ thống lạnh còn nhiều hơi ẩm, có thể:",
    "options": [
      "Không ảnh hưởng",
      "Gây ảnh hưởng đến độ tin cậy và hiệu suất hệ thống",
      "Giảm tải máy nén",
      "Làm tăng công suất lạnh"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_46",
    "question": "Câu 46. Khi thực hiện hút chân không, người thợ cần:",
    "options": [
      "Dùng máy nén khí",
      "Chỉ mở van gas",
      "Dùng quạt",
      "Sử dụng bơm chân không và đồng hồ/dụng cụ phù hợp"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_47",
    "question": "Câu 47. Sau khi hút chân không đạt yêu cầu, việc kiểm tra giữ chân không nhằm:",
    "options": [
      "Kiểm tra dây điện",
      "Tăng áp suất gas",
      "Làm nóng đường ống",
      "Kiểm tra khả năng giữ trạng thái chân không và phát hiện vấn đề có thể xảy ra"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_48",
    "question": "Câu 48. Khi nạp môi chất lạnh, loại môi chất phải:",
    "options": [
      "Trộn các loại gas khác nhau",
      "Đúng loại được quy định cho hệ thống",
      "Dùng bất kỳ gas nào có sẵn",
      "Chọn tùy ý"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_49",
    "question": "Câu 49. Khi làm việc với môi chất lạnh, người thợ cần:",
    "options": [
      "Xả môi chất trực tiếp tùy ý",
      "Tuân thủ quy trình an toàn, sử dụng PPE và thiết bị chuyên dụng",
      "Làm việc trong không gian kín không thông gió",
      "Dùng lửa kiểm tra rò rỉ"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_50",
    "question": "Câu 50. Dùng lửa trực tiếp để kiểm tra rò rỉ môi chất lạnh là:",
    "options": [
      "Phương pháp an toàn",
      "Không phù hợp và có thể nguy hiểm",
      "Phương pháp tiêu chuẩn",
      "Phương pháp bắt buộc"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_51",
    "question": "Câu 51. Mục đích chính của bảo ôn đường ống lạnh là:",
    "options": [
      "Tăng trọng lượng ống",
      "Tăng áp suất gas",
      "Hạn chế trao đổi nhiệt và ngăn hiện tượng đọng sương đối với tuyến cần bảo ôn",
      "Làm đẹp đường ống"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_52",
    "question": "Câu 52. Khi lắp bảo ôn ống đồng, mối nối bảo ôn cần:",
    "options": [
      "Không cần quan tâm",
      "Để hở",
      "Được xử lý kín theo yêu cầu",
      "Cắt bỏ"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_53",
    "question": "Câu 53. Nếu bảo ôn đường ống gas lạnh bị hở tại mối nối, nguy cơ thường gặp là:",
    "options": [
      "Tăng công suất lạnh",
      "Đọng sương và nhỏ nước",
      "Tăng lưu lượng gas",
      "Giảm điện áp"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_54",
    "question": "Câu 54. Khi cắt bảo ôn, nên:",
    "options": [
      "Cắt vừa đủ, tránh làm rách hoặc biến dạng vật liệu",
      "Xé bằng tay",
      "Cắt càng ngắn càng tốt",
      "Dùng lửa đốt"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_55",
    "question": "Câu 55. Không nên để bảo ôn bị:",
    "options": [
      "Ép, dập hoặc hở quá mức",
      "Liên tục",
      "Đúng chiều dày",
      "Cố định chắc chắn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_56",
    "question": "Câu 56. Khi hai tuyến ống lạnh cần bảo ôn riêng biệt, nguyên tắc chung là:",
    "options": [
      "Có thể gộp chung tùy ý",
      "Bỏ bảo ôn một tuyến",
      "Thực hiện theo thiết kế và yêu cầu kỹ thuật của hệ thống",
      "Chỉ bảo ôn đoạn gần thiết bị"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_57",
    "question": "Câu 57. Tại vị trí giá đỡ ống đồng có bảo ôn, cần:",
    "options": [
      "Có giải pháp đỡ phù hợp, hạn chế cầu nhiệt và bảo vệ lớp bảo ôn",
      "Cắt bỏ bảo ôn rộng ra",
      "Không cần giá đỡ",
      "Ép nát hoàn toàn lớp bảo ôn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_58",
    "question": "Câu 58. Bảo ôn bị thấm nước lâu ngày có thể:",
    "options": [
      "Không ảnh hưởng",
      "Giảm hiệu quả cách nhiệt và gây các vấn đề liên quan",
      "Tăng hiệu suất lạnh",
      "Luôn tốt hơn"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_59",
    "question": "Câu 59. Khi thi công bảo ôn ngoài trời, cần đặc biệt chú ý:",
    "options": [
      "Để hở mối nối",
      "Bỏ toàn bộ lớp bảo vệ",
      "Không cần chống nước",
      "Bảo vệ lớp bảo ôn khỏi tác động môi trường theo thiết kế"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_60",
    "question": "Câu 60. Tiêu chí quan trọng khi nghiệm thu bảo ôn là:",
    "options": [
      "Đúng vật liệu, chiều dày, liên tục, kín mối nối và hoàn thiện theo yêu cầu",
      "Chỉ cần đủ chiều dài",
      "Chỉ cần nhìn đẹp",
      "Chỉ cần đúng màu"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_61",
    "question": "Câu 61. Nước ngưng của dàn lạnh sinh ra chủ yếu do:",
    "options": [
      "Nước mưa",
      "Nước cấp sinh hoạt",
      "Nước từ đường ống gas",
      "Quá trình ngưng tụ hơi nước trên bề mặt lạnh"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_62",
    "question": "Câu 62. Đường ống nước ngưng thông thường cần:",
    "options": [
      "Lắp hoàn toàn nằm ngang",
      "Có độ dốc phù hợp theo thiết kế để đảm bảo thoát nước",
      "Không cần kiểm tra cao độ",
      "Lắp ngược dốc"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_63",
    "question": "Câu 63. Nếu đường ống nước ngưng bị võng tạo thành túi nước, có thể:",
    "options": [
      "Không ảnh hưởng",
      "Tăng khả năng thoát nước",
      "Làm lạnh tốt hơn",
      "Gây ứ đọng và tràn nước"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_64",
    "question": "Câu 64. Khi lắp ống nước ngưng, cần tránh:",
    "options": [
      "Kiểm tra thử nước",
      "Gấp khúc hoặc võng gây cản trở thoát nước",
      "Giá đỡ chắc chắn",
      "Độ dốc phù hợp"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_65",
    "question": "Câu 65. Thử nước đường ống ngưng nhằm:",
    "options": [
      "Kiểm tra áp suất gas",
      "Kiểm tra khả năng thoát nước và phát hiện rò rỉ/tắc nghẽn",
      "Kiểm tra máy nén",
      "Kiểm tra điện áp"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_66",
    "question": "Câu 66. Khi phát hiện nước ngưng chảy ngược hoặc thoát chậm, cần kiểm tra trước:",
    "options": [
      "Dây điện",
      "Màu sơn",
      "Độ dốc, điểm võng, tắc nghẽn và cấu tạo đường ống",
      "Quạt dàn nóng"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_67",
    "question": "Câu 67. Ống nước ngưng cần được:",
    "options": [
      "Treo bằng dây điện",
      "Đặt trên trần không cần giá đỡ",
      "Cố định chắc chắn và bảo đảm tuyến ống theo thiết kế",
      "Để tự do"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_68",
    "question": "Câu 68. Khi đấu ống nước ngưng vào hệ thống thoát nước chung, cần:",
    "options": [
      "Bịt kín mọi trường hợp",
      "Đấu tùy ý",
      "Tuân thủ thiết kế và yêu cầu về bẫy nước/thông khí nếu có quy định",
      "Không cần kiểm tra"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_69",
    "question": "Câu 69. Một trong những nguyên nhân gây chảy nước từ dàn lạnh là:",
    "options": [
      "Dây điện quá ngắn",
      "Miệng gió quá sạch",
      "Giá đỡ chắc chắn",
      "Đường nước ngưng bị tắc hoặc thoát nước không tốt"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_70",
    "question": "Câu 70. Sau khi hoàn thành đường nước ngưng, cần:",
    "options": [
      "Đóng trần ngay",
      "Không cần nghiệm thu",
      "Chỉ nhìn bằng mắt",
      "Thử nước và kiểm tra thực tế trước khi đóng trần/che khuất"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_71",
    "question": "Câu 71. Khi lắp dàn lạnh treo tường, cần đảm bảo:",
    "options": [
      "Có thể nghiêng tùy ý",
      "Chỉ cần treo chắc",
      "Đặt sát mọi vật cản",
      "Đúng vị trí, cao độ, cân bằng và thuận tiện bảo trì"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_72",
    "question": "Câu 72. Khi lắp dàn lạnh âm trần cassette, cần kiểm tra:",
    "options": [
      "Chỉ chiều dài ống đồng",
      "Chỉ dây điều khiển",
      "Chỉ màu mặt nạ",
      "Cao độ, độ cân bằng, kích thước lỗ mở và vị trí kết nối"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_73",
    "question": "Câu 73. Nếu dàn lạnh lắp không cân bằng, có thể:",
    "options": [
      "Ảnh hưởng thoát nước ngưng và hoàn thiện thiết bị",
      "Không ảnh hưởng",
      "Tăng áp suất gas",
      "Tăng hiệu suất"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_74",
    "question": "Câu 74. Khi lắp dàn nóng, cần đảm bảo:",
    "options": [
      "Che kín toàn bộ cửa hút/thải gió",
      "Đặt sát tường bất kể khoảng cách",
      "Thông thoáng, chắc chắn, đúng khoảng cách và thuận tiện bảo trì theo yêu cầu",
      "Đặt trên vật liệu không ổn định"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_75",
    "question": "Câu 75. Khi lắp dàn nóng trên giá thép, giá đỡ phải:",
    "options": [
      "Không cần kiểm tra",
      "Đủ khả năng chịu tải và được cố định chắc chắn",
      "Có thể dùng vật liệu tạm",
      "Chỉ cần đẹp"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_76",
    "question": "Câu 76. Khi kết nối ống đồng vào thiết bị, người thợ cần:",
    "options": [
      "Ép ống cho vừa",
      "Dùng ống bất kỳ",
      "Hàn trực tiếp vào mọi loại đầu nối",
      "Đảm bảo đúng đường kính, đúng cổng kết nối và mối nối kín"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_77",
    "question": "Câu 77. Khi đấu dây điện cho thiết bị điều hòa, cần:",
    "options": [
      "Đấu thử từng dây",
      "Chỉ cần thiết bị chạy",
      "Theo sơ đồ điện và đúng quy cách dây/đầu nối",
      "Đấu theo màu dây bất kỳ"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_78",
    "question": "Câu 78. Khi đấu dây điều khiển, người thợ cần:",
    "options": [
      "Tuân thủ sơ đồ đấu nối của nhà sản xuất",
      "Đấu tùy ý",
      "Bỏ dây tiếp địa",
      "Đảo dây tùy trường hợp"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_79",
    "question": "Câu 79. Tiếp địa cho thiết bị có mục đích:",
    "options": [
      "Tăng lưu lượng gió",
      "Đảm bảo an toàn điện theo thiết kế/quy định",
      "Tăng công suất lạnh",
      "Giảm đường kính ống"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_80",
    "question": "Câu 80. Trước khi chạy thử thiết bị, cần kiểm tra:",
    "options": [
      "Chỉ bật nguồn điện",
      "Chỉ kiểm tra quạt",
      "Chỉ kiểm tra remote",
      "Kết nối cơ khí, môi chất, thoát nước, điện và các điều kiện liên quan"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_81",
    "question": "Câu 81. Quạt thông gió có chức năng chính là:",
    "options": [
      "Cấp điện",
      "Tạo nước ngưng",
      "Làm lạnh môi chất",
      "Tạo và duy trì dòng không khí theo yêu cầu hệ thống"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_82",
    "question": "Câu 82. Khi lắp quạt, cần kiểm tra:",
    "options": [
      "Chỉ tiếng ồn",
      "Chỉ màu sơn",
      "Chiều quay, hướng gió, cố định, rung và các kết nối liên quan",
      "Chỉ kích thước"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_83",
    "question": "Câu 83. Quạt bị rung mạnh khi vận hành có thể do:",
    "options": [
      "Nước ngưng thoát tốt",
      "Ống đồng đúng quy cách",
      "Miệng gió sạch",
      "Cố định không tốt, mất cân bằng hoặc vấn đề cơ khí"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_84",
    "question": "Câu 84. Khi kết nối quạt với ống gió, khớp nối mềm có thể có tác dụng:",
    "options": [
      "Làm lạnh không khí",
      "Hạn chế truyền rung từ quạt sang hệ thống ống",
      "Tăng trọng lượng quạt",
      "Tăng điện áp"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_85",
    "question": "Câu 85. Khi lắp van một chiều trong hệ thống thông gió, cần:",
    "options": [
      "Lắp đúng hướng dòng khí",
      "Không cần kiểm tra",
      "Lắp ngược chiều",
      "Đặt tùy ý"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_86",
    "question": "Câu 86. Fire damper có liên quan chủ yếu đến:",
    "options": [
      "Tăng công suất lạnh",
      "Thoát nước ngưng",
      "Điều chỉnh gas",
      "Yêu cầu an toàn cháy và ngăn cháy lan qua hệ thống ống gió theo thiết kế"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_87",
    "question": "Câu 87. Khi lắp thiết bị giảm rung cho quạt, mục đích là:",
    "options": [
      "Tăng điện áp",
      "Tăng áp suất gas",
      "Giảm truyền rung và tiếng ồn kết cấu",
      "Tăng lưu lượng nước"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_88",
    "question": "Câu 88. Nếu quạt quay ngược chiều thiết kế, người thợ cần:",
    "options": [
      "Kiểm tra nguồn điện/đấu nối và hướng dẫn của nhà sản xuất",
      "Tăng điện áp",
      "Bịt cửa hút",
      "Để quạt chạy tiếp"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_89",
    "question": "Câu 89. Khi kiểm tra hệ thống thông gió, một trong những yếu tố quan trọng là:",
    "options": [
      "Lưu lượng gió và trạng thái vận hành theo yêu cầu thiết kế",
      "Màu ống gió",
      "Số lượng bulông không liên quan",
      "Độ bóng của tôn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_90",
    "question": "Câu 90. Khi miệng gió có lưu lượng thấp bất thường, cần xem xét:",
    "options": [
      "Tắc nghẽn, van điều chỉnh, tổn thất hệ thống, quạt và cân bằng gió",
      "Chỉ độ dày tôn",
      "Chỉ màu miệng gió",
      "Chỉ lớp sơn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_91",
    "question": "Câu 91. Mục đích của kiểm tra độ kín đường ống môi chất là:",
    "options": [
      "Phát hiện rò rỉ trước khi đưa hệ thống vào vận hành",
      "Tăng lượng gas",
      "Làm lạnh đường ống",
      "Làm sạch bảo ôn"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_92",
    "question": "Câu 92. Khi thử áp đường ống môi chất, người thợ phải:",
    "options": [
      "Dùng oxy tùy ý",
      "Tuân thủ áp suất, môi chất thử và quy trình được phê duyệt/nhà sản xuất yêu cầu",
      "Dùng bất kỳ khí nào có sẵn",
      "Tăng áp càng cao càng tốt"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_93",
    "question": "Câu 93. Sau khi hoàn thành lắp đặt, trước khi bàn giao hệ thống cần:",
    "options": [
      "Chỉ bật máy",
      "Kiểm tra, thử nghiệm, chạy thử và ghi nhận kết quả theo yêu cầu",
      "Chỉ vệ sinh",
      "Chỉ chụp ảnh"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_94",
    "question": "Câu 94. Khi chạy thử điều hòa, các thông số cần quan tâm có thể bao gồm:",
    "options": [
      "Nhiệt độ, trạng thái vận hành, dòng điện, áp suất/nhiệt độ môi chất và các thông số theo hướng dẫn",
      "Chỉ tiếng quạt",
      "Chỉ remote",
      "Chỉ màu thiết bị"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_95",
    "question": "Câu 95. Khi phát hiện hệ thống hoạt động bất thường, người thợ nên:",
    "options": [
      "Ghi nhận hiện tượng, kiểm tra theo quy trình và báo người phụ trách khi cần",
      "Tự ý thay linh kiện",
      "Tiếp tục chạy đến khi tự dừng",
      "Tăng gas ngay"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_96",
    "question": "Câu 96. Dàn lạnh hoạt động nhưng nước liên tục chảy ra ngoài. Nguyên nhân nào cần ưu tiên kiểm tra?",
    "options": [
      "Sơn dàn nóng",
      "Màu dây điện",
      "Đường thoát nước ngưng, độ dốc, điểm tắc/võng và độ cân bằng dàn lạnh",
      "Độ dày tôn ống gió"
    ],
    "correct_index": 2,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_97",
    "question": "Câu 97. Sau khi hoàn thành tuyến ống đồng, phát hiện áp suất thử không giữ ổn định. Cách xử lý phù hợp nhất là:",
    "options": [
      "Tìm và xử lý nguyên nhân rò rỉ, sau đó thử lại theo quy trình",
      "Bổ sung gas để bù",
      "Bọc thêm bảo ôn",
      "Cho hệ thống chạy ngay"
    ],
    "correct_index": 0,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_98",
    "question": "Câu 98. Một đoạn ống gió có tiếng ồn và rung bất thường khi quạt chạy. Người thợ nên kiểm tra trước:",
    "options": [
      "Nước ngưng",
      "Giá đỡ, liên kết, khớp nối mềm, van và các vị trí có thể gây rung",
      "Đường kính ống đồng",
      "Màu sơn ống"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_99",
    "question": "Câu 99. Khi tuyến ống ĐHTG thực tế bị xung đột với dầm kết cấu, phương án đúng là:",
    "options": [
      "Tự ý thay đổi kích thước ống",
      "Báo kỹ thuật/giám sát để phối hợp và phê duyệt phương án xử lý",
      "Ép ống cho lọt qua",
      "Tự ý khoan/cắt dầm"
    ],
    "correct_index": 1,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": "q_hvac_theory_100",
    "question": "Câu 100. Một người thợ ĐHTG được đánh giá có tay nghề tốt nhất khi:",
    "options": [
      "Có thể tự xử lý mọi việc mà không cần bản vẽ",
      "Chỉ cần làm được một loại hệ thống",
      "Thi công thật nhanh nhưng bỏ qua một số yêu cầu",
      "Thi công đúng bản vẽ, đúng kỹ thuật, an toàn, biết kiểm tra chất lượng và xử lý tình huống đúng quy trình"
    ],
    "correct_index": 3,
    "category": "Lý thuyết - Điều hòa thông gió",
    "exam_set": "Lý thuyết - ĐHTG (50 Bộ đề)",
    "type": "multiple_choice"
  },
  {
    "id": 15,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Bản vẽ Shopdrawing là gì",
    "options": [
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 16,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Ký hiện BOD Trên bản vẽ nghĩa là gì",
    "options": [
      "Cao độ tính đến tim ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đỉnh ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đáy ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 17,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Trên bản vẽ ghi  EAD 700x800-BOD=FFL+7900 nghĩa là gì",
    "options": [
      "Ống gió tươi, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M\nB.Ống gió thải, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M",
      "Ống gió thải, kích thước 700x800 Cao độ từng đỉnh xuống sàn hoàn thiện là 7.9M"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 18,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Ký hiệu Cos +3900 (hoặc Cos +3.900) trên bản vẽ kỹ thuật/kiến trúc có nghĩa là gì",
    "options": [
      "Cos: Đại diện cho độ cao  (tương đương ). Trong bản vẽ xây dựng, cao độ luôn quy đổi và tính bằng đơn vị mét (m).",
      "Cos: Đại diện cho độ dốc",
      "Cos: Đại diện cho khoảng cách, kích thước"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 19,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Kể tên các thiết bị chính của hệ thống Chiller",
    "options": [
      "Chiller, Tháp giải nhiệt, Bơm nước lạnh, Bơm giải nhiệt, Bình tích áp, Bộ trao đổi nhiệt, Hệ thống phụ tải,",
      "Tháp giải nhiệt, Bơm nước lạnh, Bơm giải nhiệt, Bình tích áp, Bộ trao đổi nhiệt, Hệ thống phụ tải, Hệ thống đường ống, van",
      "Chiller, Tháp giải nhiệt, Bơm nước lạnh, Bơm giải nhiệt, Bình tích áp, Bộ trao đổi nhiệt, Hệ thống phụ tải, Hệ thống đường ống, van"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 20,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Kể tên các loại van thường dùng trong hệ thống Chiller",
    "options": [
      "Nhóm van điều khiển ( Van Cân bằng tự động, Van điều khiển tự động…),",
      "Nhóm van khóa bảo vệ ( Van cổng, van bướm tay quay, Van an toàn, van xả khí)",
      "Nhóm van điều khiển ( Van Cân bằng tự động, Van điều khiển tự động…), Nhóm van khóa bảo vệ ( Van cổng, van bướm tay quay, Van an toàn, van xả khí)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 21,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Trong hệ thống chiller ống giải nhiệt nóng (Cooling Water) , ống nước lạnh (Chilled Water) thường dùng ống vật liệu gì",
    "options": [
      "Hệ thống ống nước lạnh (Chilled Water) thường dùng ống thép đen, Hệ thống ống nước giải nhiệt nóng (Cooling Water) thường dùng ống thép mạ kẽm",
      "Hệ thống ống nước lạnh (Chilled Water) thường dùng ống Inox, Hệ thống ống nước giải nhiệt nóng (Cooling Water) thường dùng ống thép mạ kẽm",
      "Hệ thống ống nước lạnh (Chilled Water) thường dùng ống thép đen, Hệ thống ống nước giải nhiệt nóng (Cooling Water) thường dùng ống Inox"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 22,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công hệ Chiller Bậc 3",
    "question": "Dự vào sơ đồ nguyên lý dưới đây. Đâu là bộ phận làm lạnh",
    "options": [
      "Tháp giải nhiệt,",
      "AHU",
      "Water chiller  (Cụm máy lạnh trung tâm chiler)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Chiller Bậc 3"
  },
  {
    "id": 23,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Bản vẽ Shopdrawing là gì",
    "options": [
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 24,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Ký hiện BOD Trên bản vẽ nghĩa là gì",
    "options": [
      "Cao độ tính đến tim ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đỉnh ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đáy ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 25,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Trên bản vẽ ghi  EAD 700x800-BOD=FFL+7900 nghĩa là gì",
    "options": [
      "Ống gió tươi, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M\nB.Ống gió thải, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M",
      "Ống gió thải, kích thước 700x800 Cao độ từng đỉnh xuống sàn hoàn thiện là 7.9M"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 26,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Ký hiệu Cos +3900 (hoặc Cos +3.900) trên bản vẽ kỹ thuật/kiến trúc có nghĩa là gì",
    "options": [
      "Cos: Đại diện cho độ cao  (tương đương ). Trong bản vẽ xây dựng, cao độ luôn quy đổi và tính bằng đơn vị mét (m).",
      "Cos: Đại diện cho độ dốc",
      "Cos: Đại diện cho khoảng cách, kích thước"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 27,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Khi nhận bản vẽ thi công đường ống gió, anh/chị cần kiểm tra những thông số quan trọng nào trước khi tiến hành gia công hoặc lắp đặt",
    "options": [
      "Kích thươc, chủng loại ống , kiểu kết nối ống, vị trí phụ kiện lắp đặt;",
      "Tuyến đi, cao độ đường ống, kích thươc, chủng loại ống , kiểu kết nối ống, vị trí phụ kiện lắp đặt;",
      "Tuyến đi, cao độ đường ống, kích thươc, chủng loại ống , kiểu kết nối ống."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 28,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Kể tên các loại van đường ống gió?",
    "options": [
      "OBD (Opposed Blade Damper): Van cánh chỉnh trên miệng gió, NRD (Non Reture Damper): Van 1 chiều, FD/ MFD(Fire Damper/ Motorized Damper): Van ngăn cháy lan, PRD (Pressure Relief Damper): Van xả áp, SD (Smoke Damper): Van ngăn khói.",
      "VCD (Volume control damper): Van chỉnh gió, OBD (Opposed Blade Damper): Van cánh chỉnh trên miệng gió, NRD (Non Reture Damper): Van 1 chiều, FD/ MFD(Fire Damper/ Motorized Damper): Van ngăn cháy lan, PRD (Pressure Relief Damper): Van xả áp, SD (Smoke Damper): Van ngăn khói.",
      "VCD (Volume control damper): Van chỉnh gió, OBD (Opposed Blade Damper): Van cánh chỉnh trên miệng gió, NRD (Non Reture Damper): Van 1 chiều, FD/ MFD(Fire Damper/ Motorized Damper): Van ngăn cháy lan, PRD (Pressure Relief Damper): Van xả áp"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 29,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Kể tên các hệ thống thông gió thường gặp  trong hệ thống cơ điện",
    "options": [
      "Ống gió thải, ống gió tươi, ống gió hút khói, ống gió bù khí, ống gió hút mùi bêp, WC",
      "Ống  gió tươi, ống gió hút khói, ống gió bù khí, ống gió hút mùi bêp, WC",
      "Ống gió thải, ống gió tươi, ống gió hút khói, ống gió bù khí,"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 30,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Khớp nối ống gió tôn thông thường gồm loại nào?",
    "options": [
      "Nẹp C hoặc TDC",
      "Nẹp TDC",
      "Nẹp C"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 31,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Khoảng cách giữa các giá treo/ty treo ống gió được quy định như thế nào để ống không bị võng",
    "options": [
      "Ống kích thước cạnh lớn nhất : Khoảng cách giá treo tối đa từ ,",
      "Ống kích thước cạnh lớn nhất : Khoảng cách giá treo tối đa từ , Ống kích thước cạnh lớn nhất : Khoảng cách giá treo",
      "Ống kích thước cạnh lớn nhất : Khoảng cách giá treo tối đa từ ."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 32,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Làm thế nào để kiểm tra độ kín của đường ống gió sau khi lắp đặt xong",
    "options": [
      "Phương pháp rọi đèn (Light Test): Đặt nguồn sáng mạnh (đèn pin công suất cao) vào bên trong ống gió kín và quan sát từ bên ngoài vào ban đêm hoặc trong tối. Nếu thấy tia sáng lọt ra tại các khớp nối bích, mí ghép hay góc tôn thì chỗ đó bị hở và cần bơm keo bổ sung;",
      "Phương pháp thử khói  / Thử áp suất : Bịt kín 2 đầu đoạn ống, bơm khói hoặc dùng máy thử rò rỉ áp suất chuyên dụng để xác định độ rò rỉ không vượt quá phần trăm cho phép;",
      "Không có đáp án đúng;",
      "Đáp án A,B đúng."
    ],
    "correct_index": 3,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 33,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": ": Kể tên một số mối ghép cơ bản giữa 2 ống gió",
    "options": [
      "Nẹp C, Nẹp TDC, Bích ,",
      "Nẹp C, Nẹp TDC , Vít ( Áp dụng cho đường ống gió tròn )",
      "Nẹp C, Nẹp TDC, Bích , Vít ( Áp dụng cho đường ống gió tròn )"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 34,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": ": Ống gió có giới hạn chịu lửa EI 30, EI45, EI60, EI120 thường được áp dụng để lắp đặt các hệ thống nào",
    "options": [
      "Các ống gió có giớ hạn chịu lửa  EI 30, EI45, EI60, EI120 thường được áp dụng để lắp đặt các tuyến ống ngoài trục kín các hệ thông thông gió sự cố ( Hút khói, Tăng áp)",
      "Các ống gió có giớ hạn chịu lửa  EI 30, EI45, EI60, EI120 thường được áp dụng để lắp đặt các tuyến ống ngoài trục kín các hệ thông thông gió sự cố ( Hút khói, Tăng áp, Bù khí )"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 35,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công thông gió Bậc 3",
    "question": "Lấy những thông tin nào để thi công trên bản vẽ này ?",
    "options": [
      "Kích thước ống gió, Cao độ đường ống, độ dài các modun ống, vị trí các phụ kiện đường ống, khoảng cách đường ống tới vách, tường, Khoảng cách giá đỡ",
      "Vị trí các điểm lắp van, vị trí của gió, ống gió mềm, các điểm chân rẽ xuống cửa, Tham chiếu thêm bản vẽ chi tiết lắp đặt để gia công phần giá đỡ",
      "Câu  A đúng",
      "Cả 2 đáp án A và B đền đúng"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành Thông gió Bậc 3"
  },
  {
    "id": 36,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Bản vẽ Shopdrawing là gì",
    "options": [
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 37,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Ký hiện BOD Trên bản vẽ nghĩa là gì",
    "options": [
      "Cao độ tính đến tim ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đỉnh ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đáy ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 38,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Trên bản vẽ ghi  EAD 700x800-BOD=FFL+7900 nghĩa là gì",
    "options": [
      "Ống gió tươi, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M\nB.Ống gió thải, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M",
      "Ống gió thải, kích thước 700x800 Cao độ từng đỉnh xuống sàn hoàn thiện là 7.9M"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 39,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Ký hiệu Cos +3900 (hoặc Cos +3.900) trên bản vẽ kỹ thuật/kiến trúc có nghĩa là gì",
    "options": [
      "Cos: Đại diện cho độ cao  (tương đương ). Trong bản vẽ xây dựng, cao độ luôn quy đổi và tính bằng đơn vị mét (m).",
      "Cos: Đại diện cho độ dốc",
      "Cos: Đại diện cho khoảng cách, kích thước"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 40,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Lấy những thông tin nào để thi công trên bản vẽ này ?",
    "options": [
      "Kích thước ống đồng, cao độ ống, chiều dài từng Size ống, Mã hiệu bộ chia Gas, Khoảng cách giá đỡ, bộ chia Gas, Khoẳng cách từ ống đến tường, Tham chiếu thêm bản vẽ lắp đặt để có thông tin phần ti treo giá đỡ",
      "Công suất lạnh dàn lạnh, dàn nóng, Kích thước ống đồng, cao độ ống, chiều dài từng Size ống, Mã hiệu bộ chia Gas, Khoảng cách giá đỡ, bộ chia Gas, Khoẳng cách từ ống đến tường, Tham chiếu thêm bản vẽ lắp đặt để có thông tin phần ti treo giá đỡ",
      "Công suất lạnh dàn lạnh, dàn nóng, Kích thước ống đồng, cao độ ống, , Khoảng cách giá đỡ, bộ chia Gas, Khoẳng cách từ ống đến tường, Tham chiếu thêm bản vẽ lắp đặt để có thông tin phần ti treo giá đỡ"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 41,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Lấy những thông tin nào để thi công trên bản vẽ này ?",
    "options": [
      "Công suất lạnh dàn lạnh, dàn nóng, Kích thước đường ống nước ngưng, phụ kiện trên đường ống, cao độ đường ống, Vị trí thông hơi , thông tắc, Khoảng cách giá đỡ, Khoảng cách đến tường, Tham chiếu bản vẽ chi tiết lắp đặt để có thêm thông tin Ty treo giá đỡ, bẫy nước ngưng",
      "Công suất lạnh dàn lạnh, dàn nóng, cao độ đường ống, Vị trí thông hơi , thông tắc, Khoảng cách giá đỡ, Khoảng cách đến tường, Tham chiếu bản vẽ chi tiết lắp đặt để có thêm thông tin Ty treo giá đỡ, bẫy nước ngưng",
      "Công suất lạnh dàn lạnh, dàn nóng, Kích thước đường ống nước ngưng, phụ kiện trên đường ống, cao độ đường ống,  Khoảng cách đến tường, Tham chiếu bản vẽ chi tiết lắp đặt để có thêm thông tin Ty treo giá đỡ, bẫy nước ngưng"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 42,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Các nguyên tắc chính trong thi công ống đồng",
    "options": [
      "Khô, Sạch;",
      "Khô, Kín’",
      "Khô, Sạch, Kín."
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 43,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Tác hại của ẩm ướt, hơi nước đọng trong đường ống đồng",
    "options": [
      "Van Tiết lưu, Dầu bị oxi hóa, biến chất, Hư Hỏng máy nén",
      "Đóng băng pin lọc, Van Tiết lưu, Dầu bị oxi hóa, biến chất",
      "Đóng băng pin lọc, Van Tiết lưu, Dầu bị oxi hóa, biến chất, Hư Hỏng máy nén"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 44,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Nguyên Nhân gây ra hơi nước trong đường ống đồng",
    "options": [
      "Nước vào đường ống từ đầu, Đọng sương trong ống, Hút chân không chưa đủ thời gian",
      "Đọng sương trong ống, Hút chân không chưa đủ thời gian",
      "Nước vào đường ống từ đầu, Đọng sương trong ống,"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 45,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Tác hại của tạp chất và chất bẩn trong đường ống đồng",
    "options": [
      "Tắc van tiết lưu và ống mao, Nguyên nhân gây ra sự hư hỏng máy nén, Không làm lạnh và không làm ấm",
      "Tắc Phin lọc, van tiết lưu và ống mao, Nguyên nhân gây ra sự hư hỏng máy nén, Không làm lạnh và không làm ấm",
      "Tắc Phin lọc, van tiết lưu và ống mao, Nguyên nhân gây ra sự hư hỏng máy nén,"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 46,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Nguyên nhân gây tạp chất và bụi bẩn",
    "options": [
      "Chất bẩn và bụi đi vào đường ống do bảo quản không tốt chua bịt đầu, Xỉ Hàn ( Không bảo vệ bằng Nito), Cặn Bẩn chưa được thổi sạch sau khi hàn",
      "Xỉ Hàn ( Không bảo vệ bằng Nito), Cặn Bẩn chưa được thổi sạch sau khi hàn",
      "Chất bẩn và bụi đi vào đường ống do bảo quản không tốt chua bịt đầu, Xỉ Hàn ( Không bảo vệ bằng Nito),"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 47,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Tác hại của việc dò rỉ môi chất lạnh",
    "options": [
      "Máy nén bị quá nhiệt, Nguyên nhân gây ra sự hư hỏng máy nén, Không làm lạnh và không làm ấm được",
      "Hiệu suất làm lạnh kém, Máy nén bị quá nhiệt, Nguyên nhân gây ra sự hư hỏng máy nén,",
      "Hiệu suất làm lạnh kém, Máy nén bị quá nhiệt, Nguyên nhân gây ra sự hư hỏng máy nén, Không làm lạnh và không làm ấm được"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 48,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Nguyên nhân của rò rỉ",
    "options": [
      "Kết nối rắc co không tốt, Kết nối mặt bích không tốt ( Chỉ một số hệ thông kết nối mặt bích)",
      "Mối hàn không tốt, Kết nối rắc co không tốt, Kết nối mặt bích không tốt ( Chỉ một số hệ thông kết nối mặt bích",
      "Mối hàn không tốt, Kết nối rắc co không tốt,"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 49,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Nêu một số phương án để đảm bảo ống đồng không bị ẩm ướt và bụi bẩn",
    "options": [
      "Dùng băng keo hoặc nắp bị bịt các đầu hở của đường ống hoặc hàn kín bịt đầu",
      "Dùng băng keo hoặc nắp bị bịt các đầu hở của đường ống",
      "Hàn kín bịt đầu"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 50,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Quy trình lắp đặt điều hòa cục bộ",
    "options": [
      "Chuẩn bị vật tư phụ kiện ( Ống đồng, bảo ôn, dây điện, ống nước ngưng, Máy điều hòa); Lắp đặt dàn lạnh, Lắp đặt dàn nóng; Kết nối giàn nóng dàn lạnh ( Kéo rải ống đống, dây link, đấu nguồn ); Hút chân không và chạy thử\nB. Chuẩn bị vật tư phụ kiện ( Ống đồng, bảo ôn, dây điện, ống nước ngưng, Máy điều hòa); Lắp đặt dàn lạnh, Lắp đặt dàn nóng; Kết nối giàn nóng dàn lạnh ( Kéo rải ống đống, dây link, đấu nguồn ).",
      "Lắp đặt dàn lạnh, Lắp đặt dàn nóng; Kết nối giàn nóng dàn lạnh ( Kéo rải ống đống, dây link, đấu nguồn ); Hút chân không và chạy thử"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 51,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Các loại gas đang dùng hiện nay?",
    "options": [
      "R407C, R410a, R32, R134a",
      "R22, R407C, R410a, R32, R134a",
      "R22, R407C, R410a, R32, R134a"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 52,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Phân loại các điều hòa phổ biến hiện nay",
    "options": [
      "Điều hòa cục bộ, Điều hòa trung tâm VRV, Hệ thống điều hòa trung tâm Chiller, Điều hòa di động tủ đứng.",
      "Điều hòa cục bộ, Hệ thống điều hòa trung tâm Chiller, Điều hòa di động tủ đứng",
      "Điều hòa cục bộ, Điều hòa trung tâm VRV, Hệ thống điều hòa trung tâm Chiller, Điều hòa di động tủ đứng."
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 53,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ thi công ĐHKK Bậc 3",
    "question": "Quy trình hút chân không đối với điều hòa cục bộ",
    "options": [
      "Kết nối hệ thống dây đo→Tiến hành hút chân không  (Mở van xả, bật máy bơm, theo dõi đồng hồ, thời gian hút..) →Khóa van, kiểm tra rò rỉ ( khóa van đồng hồ, tắt máy bơm, thử kín , xả gas)",
      "Chuẩn bị dụng cụ ( Máy hút chân không, Đồng hồ áp suất, lục giác )→ Kết nối hệ thống dây đo→Tiến hành hút chân không  (Mở van xả, bật máy bơm, theo dõi đồng hồ, thời gian hút..) →Khóa van, kiểm tra rò rỉ ( khóa van đồng hồ, tắt máy bơm, thử kín , xả gas)",
      "Chuẩn bị dụng cụ ( Máy hút chân không, Đồng hồ áp suất, lục giác )→Tiến hành hút chân không  (Mở van xả, bật máy bơm, theo dõi đồng hồ, thời gian hút..) →Khóa van, kiểm tra rò rỉ ( khóa van đồng hồ, tắt máy bơm, thử kín , xả gas)"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHKK Bậc 3"
  },
  {
    "id": 54,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Bản vẽ Shopdrawing là gì",
    "options": [
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 55,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Ký hiện BOD Trên bản vẽ nghĩa là gì",
    "options": [
      "Cao độ tính đến tim ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đỉnh ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đáy ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 56,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Trên bản vẽ ghi  EAD 700x800-BOD=FFL+7900 nghĩa là gì",
    "options": [
      "Ống gió tươi, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M\nB.Ống gió thải, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M",
      "Ống gió thải, kích thước 700x800 Cao độ từng đỉnh xuống sàn hoàn thiện là 7.9M"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 57,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Ký hiệu Cos +3900 (hoặc Cos +3.900) trên bản vẽ kỹ thuật/kiến trúc có nghĩa là gì",
    "options": [
      "Cos: Đại diện cho độ cao  (tương đương ). Trong bản vẽ xây dựng, cao độ luôn quy đổi và tính bằng đơn vị mét (m).",
      "Cos: Đại diện cho độ dốc",
      "Cos: Đại diện cho khoảng cách, kích thước",
      "CÂU HỎI PHỎNG VẤN THỢ BẬC 1-TIỂU ĐỘI TRƯỞNG ( 1-15)"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 58,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Sự khác nhau giữa điều hòa trung tâm VRV và điều hòa Mutil",
    "options": [
      "Số lượng kết nối dàn lạnh (VRV 10-64 dàn, Multi 2-5 dàn), hệ thống đường ống(VRV Chạy trục chính qua bộ chia gas, Multi chạy độc lập); Ứng dụng( VRV Dùng trong các tòa nhà, văn phòng lớn , Multi Các căn hộ 3-5 phòng)",
      "Công Suất( VRV Lớn hơn Muti); Số lượng kết nối dàn lạnh (VRV 10-64 dàn, Multi 2-5 dàn), hệ thống đường ống(VRV Chạy trục chính qua bộ chia gas, Multi chạy độc lập); Ứng dụng( VRV Dùng trong các tòa nhà, văn phòng lớn , Multi Các căn hộ 3-5 phòng)",
      "Công Suất( VRV Lớn hơn Muti); Số lượng kết nối dàn lạnh (VRV 10-64 dàn, Multi 2-5 dàn), hệ thống đường ống(VRV Chạy trục chính qua bộ chia gas, Multi chạy độc lập);"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 59,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Khi loe ống đồng, những lỗi nào thường gặp làm cho mối nối bị rò rỉ gas?",
    "options": [
      "Loe ống không cạo bavia (sạt phoi kim loại), dẫn đến mép loe bị rách hoặc sần sùi, Đặt ống đồng vào khuôn loe quá cao hoặc quá thấp làm mép loe bị thừa/thiếu rộng Siết giắc co quá tay làm vỡ/nứt mép loe, hoặc siết quá nhẹ làm hở gioăng kim loại",
      "Đặt ống đồng vào khuôn loe quá cao hoặc quá thấp làm mép loe bị thừa/thiếu rộng Siết giắc co quá tay làm vỡ/nứt mép loe, hoặc siết quá nhẹ làm hở gioăng kim loại, Không làm sạch bụi bẩn, mạt đồng bám vào mặt côn của giắc co trước khi siết.",
      "Loe ống không cạo bavia (sạt phoi kim loại), dẫn đến mép loe bị rách hoặc sần sùi, Đặt ống đồng vào khuôn loe quá cao hoặc quá thấp làm mép loe bị thừa/thiếu rộng, siết giắc co quá tay làm vỡ/nứt mép loe, hoặc siết quá nhẹ làm hở gioăng kim loại, không làm sạch bụi bẩn, mạt đồng bám vào mặt côn của giắc co trước khi siết."
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 60,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Làm thế nào để phân biệt điều hòa bị thiếu gas và điều hòa bị tắc ẩm/tắc phin lọc",
    "options": [
      "Trường hợp thiếu gas:",
      "Áp suất hút thấp, dòng điện làm việc thấp hơn định mức, Xuất hiện hiện tượng bám tuyết ngay tại đầu ống nhỏ (ống đi) ở dàn nóng;",
      "Xuất hiện hiện tượng bám tuyết ngay tại đầu ống nhỏ (ống đi) ở dàn nóng, Dàn lạnh mát kém đồng đều, nhiệt độ gió ra không sâu.",
      "Áp suất hút thấp, dòng điện làm việc thấp hơn định mức, Xuất hiện hiện tượng bám tuyết ngay tại đầu ống nhỏ (ống đi) ở dàn nóng, Dàn lạnh mát kém đồng đều, nhiệt độ gió ra không sâu.",
      "Trường hợp tắc ẩm / tắc bẩn, áp suất hút tụt rất sâu (có thể tụt về  hoặc âm), máy nén chạy kêu to hoặc bị ngắt do rơ-le nhiệt"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 61,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Hiện tượng dàn lạnh bị chảy nước ngưng ra sàn nguyên nhân do đâu và xử lý thế nào",
    "options": [
      "Nguyên nhân:",
      "Tắc đường ống thoát nước (do bụi bẩn, rêu mốc đọng lâu ngày), Máng hứng nước thải bị nứt, vỡ hoặc lắp dàn lạnh bị nghiêng ngược góc,",
      "Máy bị thiếu gas làm dàn lạnh bị đóng băng, khi băng tan chảy tràn ra ngoài máng hứng, Quạt dàn lạnh bị yếu/bẩn không thổi được hơi lạnh ra ngoài gây đọng sương vỏ nhựa.",
      "Tắc đường ống thoát nước (do bụi bẩn, rêu mốc đọng lâu ngày), Máy bị thiếu gas làm dàn lạnh bị đóng băng, khi băng tan chảy tràn ra ngoài máng hứng, Quạt dàn lạnh bị yếu/bẩn không thổi được hơi lạnh ra ngoài gây đọng sương vỏ nhựa",
      "Thông ống thoát nước bằng máy hút/bơm áp lực, vệ sinh máng nước, căn chỉnh lại độ cân bằng của dàn lạnh, hoặc kiểm tra nạp bổ sung gas nếu thấy bám tuyết"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 62,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Khi thu hồi gas (nhốt gas) để di chuyển điều hòa, quy trình thực hiện như thế nào để an toàn",
    "options": [
      "Cho điều hòa chạy ở chế độ Làm lạnh (Cool) để máy nén (Block) hoạt động, Dùng lục giác vặn đóng van ống nhỏ (ống đi) trước, Chờ khoảng  giây (tùy độ dài đường ống) để máy nén hút toàn bộ gas trên đường ống và dàn lạnh về dàn nóng. Lắng nghe tiếng máy nén êm hơn hoặc quan sát đồng hồ áp suất về , Vặn đóng van ống to (ống về), sau đó tắt nguồn điện của máy ngay lập tức;",
      "Dùng lục giác vặn đóng van ống nhỏ (ống đi) trước, Chờ khoảng  giây (tùy độ dài đường ống) để máy nén hút toàn bộ gas trên đường ống và dàn lạnh về dàn nóng. Lắng nghe tiếng máy nén êm hơn hoặc quan sát đồng hồ áp suất về , Vặn đóng van ống to (ống về), sau đó tắt nguồn điện của máy ngay lập tức;",
      "Cho điều hòa chạy ở chế độ Làm lạnh (Cool) để máy nén (Block) hoạt động, Dùng lục giác vặn đóng van ống nhỏ (ống đi) trước, Chờ khoảng  giây (tùy độ dài đường ống) để máy nén hút toàn bộ gas trên đường ống và dàn lạnh về dàn nóng. Lắng nghe tiếng máy nén êm hơn hoặc quan sát đồng hồ áp suất về",
      "CÂU HỎI HỆ THỐNG THÔNG GIÓ",
      "CÂU HỎI PHỎNG VẤN THỢ BẬC 1 TIỂU ĐỘI TRƯỞNG (1-15)"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 63,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Van FD thường lắp đặt ở vị trí nào",
    "options": [
      "Van FD (Fire Damper - van chặn lửa) thường được lắp đặt tại các vị trí ống gió xuyên qua tường, vách ngăn cháy, trần hoặc sàn bê tông giữa các khu vực hoặc vùng cháy khác nhau trong tòa nhà",
      "Van FD (Fire Damper - van chặn lửa) thường được lắp đặt tại các vị trí ống gió xuyên qua   trần hoặc sàn bê tông giữa các khu vực hoặc vùng cháy khác nhau trong tòa nhà"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 64,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Van VCD thường lắp ở vị trí nào",
    "options": [
      "Van VCD (Volume Control Damper - van điều chỉnh lưu lượng gió) thường được lắp đặt tại các vị trí trên hệ thống ống gió nơi cần điều tiết, cân bằng hoặc ngắt dòng khí",
      "Van VCD (Volume Control Damper - van điều chỉnh lưu lượng gió) thường được lắp đặt tại các vị trí trên hệ thống ống gió nơi cần cân bằng hoặc ngắt dòng khí"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 65,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Quy trình lắp đặt quạt thông gió hướng trục treo trần",
    "options": [
      "Khoan trần, lắp ty treo, giá đỡ, Treo và công định quạt, Kết nối ống gió và phụ kiện, Đấu nguồn chạy thử",
      "Khảo sát đo đạc vị trí treo, Khoan trần, lắp ty treo, giá đỡ, Treo và công định quạt, Kết nối ống gió và phụ kiện, Đấu nguồn chạy thử",
      "Khảo sát đo đạc vị trí treo, Khoan trần, lắp ty treo, giá đỡ, Treo và công định quạt, Kết nối ống gió và phụ kiện."
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 66,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Nếu khi thi công thực tế, đường ống gió bị vướng/xung đột với dầm bê tông hoặc đường ống nước PCCC lớn mà bản vẽ chưa thể hiện, anh/chị xử lý ra sao?",
    "options": [
      "Đề xuất giải pháp với CBKT, Chờ xác nhận thông tin",
      "Dừng lại và đo đạc: Không tự ý cắt hay bóp móp ống gió. Đo chính xác khoảng cách va chạm và không gian trống xung quanh, Chờ xác nhận thông tin.",
      "Dừng lại và đo đạc: Không tự ý cắt hay bóp móp ống gió. Đo chính xác khoảng cách va chạm và không gian trống xung quanh, Đề xuất giải pháp với CBKT, Chờ xác nhận thông tin\nĐáp án đúng: C"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 67,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Khi lắp đặt quạt thông gió (Quạt ly tâm, Quạt hướng trục hoặc Quạt Jetfan), cần chú ý những chi tiết kỹ thuật nào để quạt chạy êm và không bị rung lắc?",
    "options": [
      "Lắp khớp nối mềm bằng bạt/vải chịu nhiệt nối giữa cổ quạt và đường ống gió để ngăn truyền lực rung từ quạt sang hệ thống ống , Độ cân bằng của quạt, Chiều quay của quạt, Kiểm tra mũi tên chỉ chiều quay của cánh quạt và chiều gió thổi trước khi đấu nối điện chạy thử",
      "Lắp đặt lò xo chống rung, Lắp khớp nối mềm bằng bạt/vải chịu nhiệt nối giữa cổ quạt và đường ống gió để ngăn truyền lực rung từ quạt sang hệ thống ống , Độ cân bằng của quạt, Chiều quay của quạt, Kiểm tra mũi tên chỉ chiều quay của cánh quạt và chiều gió thổi trước khi đấu nối điện chạy thử",
      "Lắp đặt lò xo chống rung, Lắp khớp nối mềm bằng bạt/vải chịu nhiệt nối giữa cổ quạt và đường ống gió để ngăn truyền lực rung từ quạt sang hệ thống ống , Độ cân bằng của quạt, Chiều quay của quạt."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 68,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Sau khi lắp đặt xong toàn bộ hệ thống quạt và ống gió, các bước kiểm tra chạy thử không tải (Test-run) gồm những gì?",
    "options": [
      "Kiểm tra cơ học, Kiểm tra van, Kiểm tra điện, Đảm bảo tất cả các van điều chỉnh (VCD), van kiểm soát miệng gió (OBD) và van xả khói đều đang ở trạng thái mở đúng quy định, Đo điện áp nguồn, kiểm tra chiều quay quạt (đúng chiều mũi tên), Chạy thử & Đo đạc,",
      "Kiểm tra điện, Đảm bảo tất cả các van điều chỉnh (VCD), van kiểm soát miệng gió (OBD) và van xả khói đều đang ở trạng thái mở đúng quy định, Đo điện áp nguồn, kiểm tra chiều quay quạt (đúng chiều mũi tên), Chạy thử & Đo đạc,",
      "Kiểm tra cơ học, Kiểm tra van, Kiểm tra điện, Đo điện áp nguồn, kiểm tra chiều quay quạt (đúng chiều mũi tên), Chạy thử & Đo đạc,",
      "CÂU HỎI DÀNH CHO THỢ BẬC 1-TIỂU ĐỘI TRƯỞNG (1-15)"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 69,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Quy trình khởi động hệ thống Chiller",
    "options": [
      "Khởi động hệ thống nước giải nhiệt, Khởi động hệ thống nước làm lạnh, Khởi động máy  Chiller;",
      "Kiểm tra tổng thể hệ thống, Khởi động hệ thống nước giải nhiệt, Khởi động hệ thống nước làm lạnh;",
      "Kiểm tra tổng thể hệ thống, Khởi động hệ thống nước giải nhiệt, Khởi động hệ thống nước làm lạnh, Khởi động máy  Chiller;"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 70,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Mục đích của quy trình Súc rửa đường ống (Flushing) và Chạy tuần hoàn hóa chất trước khi nghiệm thu là gì?",
    "options": [
      "Sục rửa sạch toàn bộ dầu mỡ và rác thi công còn sót lại trong lòng đường ống, Quy trình thường cho nước chạy qua đường ống Bypass (không cho chạy qua Chiller/AHU), qua bộ lọc tạm để xả sạch rác. Sau đó mới châm hóa chất ức chế gỉ sét/chống mảng bám  rồi mới đấu nối chính thức vào thiết bị",
      "Sục rửa sạch toàn bộ cát, mạt sắt, xỉ hàn, dầu mỡ và rác thi công còn sót lại trong lòng đường ống, Quy trình thường cho nước chạy qua đường ống Bypass (không cho chạy qua Chiller/AHU), qua bộ lọc tạm để xả sạch rác. Sau đó mới châm hóa chất ức chế gỉ sét/chống mảng bám  rồi mới đấu nối chính thức vào thiết bị"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 71,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Gối đỡ ống (Pipe Hanger/Support) cho đường ống Chiller cần lưu ý đặc biệt điều gì so với đường ống nước thông thường?",
    "options": [
      "Cần dùng gối đỡ thông thường tránh cầu nhiệt  gây đọng sương và hư hỏng lớp cách nhiệt tại vị trí cùm treo.",
      "Cần dùng gối đỡ cách nhiệt để tránh cầu nhiệt  gây đọng sương và hư hỏng lớp cách nhiệt tại vị trí cùm treo.",
      "-"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 72,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": ":Anh/Chị hãy nêu thứ tự lắp đặt các phụ kiện đường ống tại đầu Vào (Inlet) và đầu Ra (Outlet) của bình bay hơi Chiller hoặc Bơm nước",
    "options": [
      "Tại đầu VÀO (Inlet - Đường nước về):",
      "Y-Strainer (Phin lọc rác dạng chữ Y) – Rất quan trọng để bảo vệ bình bay hơi/cánh bơm, Khớp nối mềm chống rung (Flexible Joint), Nhiệt kế & Đồng hồ áp suất (Thermometer & Pressure Gauge), Cảm biến dòng chảy (Flow Switch) – Thường gắn ở đầu ra hoặc đầu vào Chiller",
      "Van chặn (Butterfly Valve / Gate Valve), Y-Strainer (Phin lọc rác dạng chữ Y) – Rất quan trọng để bảo vệ bình bay hơi/cánh bơm, Khớp nối mềm chống rung (Flexible Joint), Nhiệt kế & Đồng hồ áp suất (Thermometer & Pressure Gauge), Cảm biến dòng chảy (Flow Switch) – Thường gắn ở đầu ra hoặc đầu vào Chiller",
      "Tại đầu RA (Outlet - Đường nước đi):",
      "Van một chiều (Check Valve) – Bắt buộc đối với đầu ra của Bơm, Van cân bằng (Balancing Valve) / Van điều khiển (Control Valve), Van chặn, Nhiệt kế & Đồng hồ áp suất",
      "Khớp nối mềm chống rung, Van một chiều (Check Valve) – Bắt buộc đối với đầu ra của Bơm, Van cân bằng (Balancing Valve) / Van điều khiển (Control Valve), Van chặn, Nhiệt kế & Đồng hồ áp suất",
      "Câu B và D đúng",
      "Câu A và C đúng"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 73,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 1",
    "question": "Dựa vào hình ảnh dưới đây hãy kể tên thiết bị trong cụm bơm nước lạnh từ trái qua phải",
    "options": [
      "Đồng hồ đo áp suất=>Van 1 chiều DN150=> Khớp nối mềm DN150=>Bơm nước lạnh=>Khớp nối mềm DN150=> Đồng hồ áp suất=> Y lọc => Đồng hồ áp suất=> Van Bướm DN150;",
      "Van Bướm DN150=>Đồng hồ đo áp suất=>Van 1 chiều DN150=> Khớp nối mềm DN150=>Bơm nước lạnh=>Khớp nối mềm DN150=> Đồng hồ áp suất=> Y lọc => Đồng hồ áp suất=> Van Bướm DN150",
      "Van Bướm DN150=>Đồng hồ đo áp suất=>Van 1 chiều DN150=> Khớp nối mềm DN150=>Bơm nước lạnh=>Khớp nối mềm DN150=> Đồng hồ áp suất=> Y lọc => Đồng hồ áp suất"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 1 / Tiểu đội trưởng"
  },
  {
    "id": 74,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Bản vẽ Shopdrawing là gì",
    "options": [
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công",
      "Bản vẽ Shopdrawing (bản vẽ thi công chi tiết) là bản vẽ được triển khai cụ thể hóa từ bản vẽ thiết kế nhằm phục vụ trực tiếp cho việc lắp đặt, gia công và thi công thực tế tại công trường"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 75,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Ký hiện BOD Trên bản vẽ nghĩa là gì",
    "options": [
      "Cao độ tính đến tim ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đỉnh ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)",
      "Cao độ tính đến đáy ống (thường dùng trong bản vẽ điều hòa thông gió để kiểm tra khoảng cách va chạm với trần)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 76,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Trên bản vẽ ghi  EAD 700x800-BOD=FFL+7900 nghĩa là gì",
    "options": [
      "Ống gió tươi, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M\nB.Ống gió thải, kích thước 700x800 Cao độ từng đáy xuống sàn hoàn thiện là 7.9M",
      "Ống gió thải, kích thước 700x800 Cao độ từng đỉnh xuống sàn hoàn thiện là 7.9M"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 77,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Ký hiệu Cos +3900 (hoặc Cos +3.900) trên bản vẽ kỹ thuật/kiến trúc có nghĩa là gì",
    "options": [
      "Cos: Đại diện cho độ cao  (tương đương ). Trong bản vẽ xây dựng, cao độ luôn quy đổi và tính bằng đơn vị mét (m).",
      "Cos: Đại diện cho độ dốc",
      "Cos: Đại diện cho khoảng cách, kích thước",
      "I.2 Thợ bậc 2 ( 4 Câu )"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 78,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Kể tên các hệ thống con chi tiết nằm trong hệ thống VRV, VRF",
    "options": [
      "Hệ thống đường ống Gas, Hệ thống đường nước ngưng, Hệ thống dây Link dàn lạnh – Dàn Nóng, Dàn nóng –ĐKTT, Kết nối BMS, Hệ thống cấp gió tươi, Hoặc sử lý gió sơ cấp, Thiết bị ( Giàn nóng, dàn lạnh, các thiết bị xử lý gió sơ cấp PAU, HRV, Quạt …)",
      "Hệ thống đường ống Gas, Hệ thống đường nước ngưng, Hệ thống dây Link dàn lạnh – Dàn Nóng, Dàn nóng –ĐKTT, Kết nối BMS, Hệ thống cấp gió tươi, Hoặc sử lý gió sơ cấp, Các hệ thống phân phối gió lạnh ( Ống gió, cửa gió, Van trên đường ống",
      "Hệ thống đường ống Gas, Hệ thống đường nước ngưng, Hệ thống dây Link dàn lạnh – Dàn Nóng, Dàn nóng –ĐKTT, Kết nối BMS, Hệ thống cấp gió tươi, Hoặc sử lý gió sơ cấp, Các hệ thống phân phối gió lạnh ( Ống gió, cửa gió, Van trên đường ống ), Thiết bị ( Giàn nóng, dàn lạnh, các thiết bị xử lý gió sơ cấp PAU, HRV, Quạt …)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 79,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Nêu quy trình hàn ống đồng",
    "options": [
      "Thổi khí Nito vào ống, áp suất Nito >0.03~ 0.05 Mpa, Gia nhiệt, Chấm mối hàn, Sau khi hàn xong, thổi nito vào trong ống 3-5 phút, đến khi ống nguội hoàn toàn, lưu ý không được sự dụng nước làm mát ngay sau khi hàn ống",
      "Vệ sinh điểm hàn, đảm bảo ống và dụng cụ kết nối phù hợp với nhau, Thổi khí Nito vào ống, áp suất Nito >0.03~ 0.05 Mpa, Gia nhiệt, Chấm mối hàn, Sau khi hàn xong, thổi nito vào trong ống 3-5 phút, đến khi ống nguội hoàn toàn, lưu ý không được sự dụng nước làm mát ngay sau khi hàn ống",
      "Vệ sinh điểm hàn, đảm bảo ống và dụng cụ kết nối phù hợp với nhau, Thổi khí Nito vào ống, áp suất Nito >0.03~ 0.05 Mpa, Gia nhiệt, Chấm mối hàn, Sau khi hàn xong"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 80,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": ": Tiêu chuẩn lắp đặt bộ chia Gas",
    "options": [
      "Lắp đặt bộ chia Gas thăng bằng trong trường hợp vướng mặt bằng thì độ nghiêng không được quá 15°, Khoảng cách 2 bộ chia >=1000mm, Khoảng cách từ vị trí chuyển hướng đến bộ chia >=500mm",
      "Lắp đặt bộ chia Gas thăng bằng trong trường hợp vướng mặt bằng thì độ nghiêng không được quá 15°, Khoảng cách từ vị trí chuyển hướng đến bộ chia >=500mm",
      "Lắp đặt bộ chia Gas thăng bằng trong trường hợp vướng mặt bằng thì độ nghiêng không được quá 15°, Khoảng cách 2 bộ chia >=1000mm,"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 81,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": ": Quy trình thử áp ống đồng",
    "options": [
      "Kiểm tra toàn bộ đường ống: không méo, móp, nứt; các mối hàn kín đúng bản vẽ và tiêu chuẩn kỹ thuật, Đảm bảo van, phụ kiện, mối nối được bịt kín; các đầu ống được chuẩn bị đầy đủ để kết nối phục vụ công tác thử áp – thử kín, Đảm bảo van, phụ kiện, mối nối được bịt kín; các đầu ống được chuẩn bị đầy đủ để kết nối phục vụ công tác thử áp – thử kín.",
      "Làm sạch bên trong ống: thổi khí sạch để loại bỏ dầu, mạt hàn, bụi bẩn trước khi tiến hành thử áp, Bổ sung băng cảnh báo an toàn tại các vị trí thử nghiệm và khu vực nguy hiểm để cảnh báo áp lực cao, Dán tem niêm phong tại các đầu nối, mặt bích, van khoá để kiểm soát hiện tượng rò rỉ hoặc tác động từ bên ngoài trong quá trình thử",
      "Chuẩn bị đồng hồ áp lực (áp kế) đã được kiểm định hoặc hiệu chuẩn để phục vụ công tác đo, ghi nhận kết quả thử áp, Bước 1: Tăng áp suất dần đến 3kg/cm2 trong thời gian ít nhất 3 phút, Bước 2: Tiếp tục tăng áp lực đến 15kg/cm2 trong 5 phút. Kiểm tra sơ bộ tuyến ống và áp lực duy trì, Bước 3: Nâng áp lực đến 40~42kg/cm2 duy trì 24 giờ. Theo dõi áp lực thay đổi",
      "Câu A và B đúng",
      "Cả 3 đáp án A,B,C trên đúng",
      "Đáp án đúng:E",
      "CÂU HỎI PHỎNG VẤN THỢ BẬC 2 (1-10)",
      "Cau 6: 1 KW lạnh bằng bao nhiêu BTU",
      "Kw Lạnh=3.410BTU/H.",
      "Kw Lạnh=3.012BTU/H",
      "Kw Lạnh=3.412BTU/H"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 82,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Khi lắp đặt điều hòa, khoảng cách và chiều dài ống đồng giữa dàn nóng và dàn lạnh bao nhiêu mét",
    "options": [
      "Chiều dài tối thiểu (3 mét): Đây là quy định bắt buộc của hầu hết các hãng. Nếu lắp ống ngắn hơn 3m, gas lạnh không kịp bay hơi/sương đọng hết, dẫn đến máy chạy bị rung, ồn do dồn nén gas và dễ làm hỏng lốc (compressor).",
      "Chiều dài tiêu chuẩn (3 - 7 mét): Khoảng cách tối ưu giúp máy đạt hiệu suất làm lạnh/sưởi ấm tốt nhất, tiết kiệm điện năng và không cần nạp thêm gas khi lắp đặt.",
      "Chiều dài tối đa (15 Mét)",
      "Cả 3 đáp án trên đều đúng"
    ],
    "correct_index": 3,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 83,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Các nguyên nhân phổ biến  khiến điều hòa không mát và cách khắc phục",
    "options": [
      "Nguyên nhân: Thiếu hoặc rò rỉ gas hoặc máy nén (lốc) gặp sự cố, Khắc phục: Vệ sinh lưới lọc định kỳ, kiểm tra lượng gas và gọi thợ kỹ thuật sửa chữa nếu hỏng hóc linh kiện bên trong.",
      "Nguyên nhân: Thiếu hoặc rò rỉ gas, lọc gió/dàn lạnh bị bám bẩn lâu ngày, hoặc máy nén (lốc) gặp sự cố, Khắc phục: Vệ sinh lưới lọc định kỳ, kiểm tra lượng gas và gọi thợ kỹ thuật sửa chữa nếu hỏng hóc linh kiện bên trong.",
      "Nguyên nhân: Thiếu hoặc rò rỉ gas, lọc gió/dàn lạnh bị bám bẩn lâu ngày,  Khắc phục: Vệ sinh lưới lọc định kỳ, kiểm tra lượng gas và gọi thợ kỹ thuật sửa chữa nếu hỏng hóc linh kiện bên trong.",
      "Khắc phục: Vệ sinh lưới lọc định kỳ, kiểm tra lượng gas và gọi thợ kỹ thuật sửa chữa nếu hỏng hóc linh kiện bên trong"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 84,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Trên máy điều hòa không khí có ghi số liệu sau: 220V–12 000 BTU/h. Nêu các thông số kĩ thuật của máy điều hòa nói trên?",
    "options": [
      "220V: điện áp lớn nhất, 12 000 BTU/h: công suất làm lạnh định mức",
      "220V: điện áp nhỏ nhất, 12 000 BTU/h: công suất làm lạnh định mức",
      "220V: điện áp định mức, 12 000 BTU/h: công suất làm lạnh định mức",
      "CÂU HỎI PHỎNG VẤN THỢ BẬC 2 (1-10)"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 85,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Kể tên các loai quạt thông gió",
    "options": [
      "Quạt thông gió gắn trần, Quạt thông gió gắn tường, Quạt hút ly tâm, Quạt hút hướng trục, Quạt hút mùi WC, Quạt hút mùi bếp, Quạt hút công nghiệp",
      "Quạt thông gió gắn tường, Quạt hút ly tâm, Quạt hút hướng trục, Quạt hút mùi WC, Quạt hút mùi bếp, Quạt hút công nghiệp",
      "Quạt thông gió gắn trần, Quạt thông gió gắn tường, Quạt hút ly tâm, Quạt hút hướng trục, Quạt hút mùi WC, Quạt hút mùi bếp"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 86,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Các loại miệng gió thông dụng hiện nay?",
    "options": [
      "Miệng gió 1 lớp cánh chỉnh, Miệng gió khe dài kiểu Linear, Miệng gió khe dài kiểu slot, Miệng gió sọt trứng, Miệng gió khuyếch tán kiểu 4 hướng hoặc kiểu tròn",
      "Miệng gió khe dài kiểu Linear, Miệng gió khe dài kiểu slot, Miệng gió sọt trứng, Miệng gió khuyếch tán kiểu 4 hướng hoặc kiểu tròn, Miệng lấy gió ngoài trời (louver), Đầu thổi gió (jet Nozzle).",
      "Miệng gió 1 lớp cánh chỉnh, Miệng gió khe dài kiểu Linear, Miệng gió khe dài kiểu slot, Miệng gió sọt trứng, Miệng gió khuyếch tán kiểu 4 hướng hoặc kiểu tròn, Miệng lấy gió ngoài trời (louver), Đầu thổi gió (jet Nozzle).",
      "-Câu 8: Ký tự SAG 600x600 trong hình 1 nghĩa là gì",
      "Trong bản vẽ và kỹ thuật thông gió (HVAC), ký hiệu SAG 600x600 nghĩa là Miệng gió cấp vuông kích thước 600x600 mm",
      "Trong bản vẽ và kỹ thuật thông gió (HVAC), ký hiệu SAG 600x600 nghĩa là Miệng gió hồi vuông kích thước 600x600 mm\n Đáp án đúng: A"
    ],
    "correct_index": 2,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 87,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Ký tự EAG 250x250+ OBD trong hình 1 nghĩa là gì",
    "options": [
      "Trong bản vẽ và kỹ thuật thông gió (HVAC), ký hiệu EAG 250x250 + OBD có nghĩa đầy đủ là: Miệng gió tươi kích thước 250x250 mm có kèm Van điều chỉnh lưu lượng gió (OBD)",
      "Trong bản vẽ và kỹ thuật thông gió (HVAC), ký hiệu EAG 250x250 + OBD có nghĩa đầy đủ là: Miệng gió thải kích thước 250x250 mm có kèm Van điều chỉnh lưu lượng gió (OBD)"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 88,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Ký tự  OAL 2000x600+LCCT trong hình 1 nghĩa là gì",
    "options": [
      "Trong bản vẽ kỹ thuật thông gió (HVAC), ký hiệu OAL 2000x600 + LCCT có nghĩa là: Miệng gió trong nhà (Louver) lấy gió tươi/thải khí kích thước 2000x600 mm, tích hợp Lưới lọc bụi và Lưới chống côn trùng (LCCT)",
      "Trong bản vẽ kỹ thuật thông gió (HVAC), ký hiệu OAL 2000x600 + LCCT có nghĩa là: Miệng gió nan nan chớp ngoài trời (Louver) lấy gió tươi/thải khí kích thước 2000x600 mm, tích hợp Lưới lọc bụi và Lưới chống côn trùng (LCCT)",
      "CÂU HỎI DÀNH CHO THỢ BẬC 2 TRỞ LÊN (1-10)"
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 89,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Chức năng vận chuyển nước lanh tuần hoàn trong hệ thống là bộ phận nào",
    "options": [
      "Tháp giải nhiệt,",
      "Bơm nước lạnh ( Chiller Water Pump)",
      "Bơm nước giải nhiệt."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 90,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Van điện từ có chức năng nhiệm vụ gì",
    "options": [
      "Điều tiết lưu lượng nước lạnh đi vào dàn lạnh AHU, Nhận tín hiệu từ bộ điều khiển để đóng/mở hoặc tiết lưu dòng nước, giúp duy trì nhiệt độ phòng chính xác theo nhu cầu và tiết kiệm năng lượng khi phòng đã đủ lạnh.",
      "Nhận tín hiệu từ bộ điều khiển để đóng/mở hoặc tiết lưu dòng nước, giúp duy trì nhiệt độ phòng chính xác theo nhu cầu và tiết kiệm năng lượng khi phòng đã đủ lạnh."
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 91,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Tháp giải nhiệt có nhiệm vụ gì",
    "options": [
      "Thải nhiệt lượng của hệ thống ra ngoài môi trường",
      "Điều tiết lưu lượng nước lạnh đi vào dàn lạnh AHU"
    ],
    "correct_index": 0,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 92,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Khoảng cách tối thiểu giữa 2 van bướm tay quay là bao nhiêu",
    "options": [
      "Quy tắc tiêu chuẩn (Theo đường kính ống): Khoảng cách tối thiểu giữa hai van nối tiếp được quy định là tối thiểu  (gấp 2lần đường kính trong  của đường ống) để đảm bảo khi 2 van cùng mở cánh van không chạm vào nhau;",
      "Quy tắc tiêu chuẩn (Theo đường kính ống): Khoảng cách tối thiểu giữa hai van nối tiếp được quy định là tối thiểu  (gấp 5 lần đường kính trong  của đường ống) để đảm bảo khi 2 van cùng mở cánh van không chạm vào nhau;",
      "Quy tắc tiêu chuẩn (Theo đường kính ống): Khoảng cách tối thiểu giữa hai van nối tiếp được quy định là tối thiểu  (gấp 4 lần đường kính trong  của đường ống) để đảm bảo khi 2 van cùng mở cánh van không chạm vào nhau."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  },
  {
    "id": 93,
    "type": "multiple_choice",
    "category": "Thực hành - Thợ ĐHTG Bậc 2",
    "question": "Van xả khí thường lắp ở đâu trong hệ thống đường ống",
    "options": [
      "Van xả khí (Air Release Valve) luôn được ưu tiên lắp đặt tại các điểm thấp nhất của hệ thống đường ống. Nguyên lý hoạt động dựa trên việc khí nhẹ hơn nước, do đó bọt khí sẽ tích tụ ở các vị trí thấp nhất hoặc trên cùng của mạng lưới.",
      "Van xả khí (Air Release Valve) luôn được ưu tiên lắp đặt tại các điểm cao nhất của hệ thống đường ống. Nguyên lý hoạt động dựa trên việc khí nhẹ hơn nước, do đó bọt khí sẽ tích tụ ở các vị trí nhô cao hoặc trên cùng của mạng lưới."
    ],
    "correct_index": 1,
    "exam_set": "Tự luận - Thực hành ĐHTG Bậc 2"
  }
];
