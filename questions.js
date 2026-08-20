// File này được tạo tự động từ NganHangCauHoi_Mau.csv
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
    "id": 101,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 1,
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
    "id": 102,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 2,
    "question": "Nghề điện công nghiệp hoạt động chủ yếu trong các lĩnh vực nào?",
    "options": [
      "Sản xuất, truyền tải, phân phối điện.",
      "Chế tạo vật tư ngành điện.",
      "Sử dụng điện phục vụ đời sống, điều khiển tự động hóa sản xuất.",
      "Mua bán vật tư ngành điện."
    ],
    "correct_index": 2
  },
  {
    "id": 103,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 3,
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
    "id": 104,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 4,
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
    "id": 105,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 5,
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
    "id": 106,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 6,
    "question": "Động cơ điện một pha thường có công suất",
    "options": [
      "Dưới 600W.",
      "Trên 600W.",
      "Trên 1000W.",
      "Dưới 6000W"
    ],
    "correct_index": 0
  },
  {
    "id": 107,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 7,
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
    "id": 108,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 8,
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
    "id": 109,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 9,
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
    "id": 110,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 10,
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
    "id": 111,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 11,
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
    "id": 112,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 12,
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
    "id": 113,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 13,
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
    "id": 114,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 14,
    "question": "Hình vẽ bên là kí hiệu của:",
    "options": [
      "động cơ điện.",
      "máy phát điện.",
      "công tơ điện.",
      "máy biến áp."
    ],
    "correct_index": 0,
    "image": "data/symbol_motor.png"
  },
  {
    "id": 115,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 15,
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
    "id": 116,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 16,
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
    "id": 117,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 17,
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
    "id": 118,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 18,
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
    "id": 119,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 19,
    "question": "Đây là kí hiệu của các phần tử nào",
    "options": [
      "Chuông điện và máy biến áp",
      "Công tơ điện và máy biến áp",
      "Chuông điện và trạm biến áp",
      "Công tơ điện và trạm biến áp"
    ],
    "correct_index": 2
  },
  {
    "id": 120,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 20,
    "question": "Đồng hồ đo điện vạn năng dùng để đo :",
    "options": [
      "Điện áp xoay chiều, điện áp một chiều, điện trở, dòng điện một chiều",
      "Điện áp một chiều, điện áp xoay chiều, điện trở cách điện máy điện",
      "Điện áp xoay chiều, dòng điện xoay chiều, điện trở cách điện",
      "Điện trở, điện áp và  dòng điện máy điện"
    ],
    "correct_index": 0
  },
  {
    "id": 121,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 21,
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
    "id": 122,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 22,
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
    "id": 123,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 23,
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
    "id": 124,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 24,
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
    "id": 125,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 25,
    "question": "Đại lượng đo ánh sáng nào được quan tâm nhất khi tính toán chiếu sáng",
    "options": [
      "Quang thông.",
      "Độ chói.",
      "Độ rọi.",
      "Công suất đèn."
    ],
    "correct_index": 2
  },
  {
    "id": 126,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 26,
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
    "id": 127,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 27,
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Điện áp nguồn quá cao so với định mức",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Dây quấn động cơ bị cháy"
    ],
    "correct_index": 2
  },
  {
    "id": 128,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 28,
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
    "id": 129,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 29,
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
    "id": 130,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 30,
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "Stato là phần quay và roto là phần tĩnh.",
      "Stato là phần tĩnh và roto là phần quay.",
      "Cả A và B đều đúng",
      "Cả A và B đều sai"
    ],
    "correct_index": 0
  },
  {
    "id": 131,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 1,
    "question": "Cầu chì là khí cụ dùng để",
    "options": [
      "Bảo vệ mạch điện.",
      "Đóng cắt thiết bị điện.",
      "Bảo vệ quá tải và ngắn mạch cho thiết bị và đường dây.",
      "Bảo vệ quá tải cho thiết bị điện và đường dây."
    ],
    "correct_index": 2
  },
  {
    "id": 132,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 2,
    "question": "Lượng nước máy bơm bơm được trong một đơn vị thời gian gọi là",
    "options": [
      "Tốc độ bơm",
      "Lưu lượng",
      "Công suất bơm",
      "Dung lượng máy bơm"
    ],
    "correct_index": 1
  },
  {
    "id": 133,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 3,
    "question": "Động cơ quạt điện dân dụng là loại động cơ gì?",
    "options": [
      "Động cơ điện một chiều công suất nhỏ.",
      "Động cơ điện xoay chiều một pha công suất nhỏ.",
      "Động cơ điện xoay chiều ba pha công suất nhỏ",
      "Động cơ điện một chiều công suất lớn"
    ],
    "correct_index": 1
  },
  {
    "id": 134,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 4,
    "question": "Một mạch điện gồm nhiều bóng đèn mắc song song, nếu có một bóng bị đứt thì",
    "options": [
      "Một số bóng đèn sáng, một số bóng đèn không sáng.",
      "Các bóng đèn sáng bình thường ngoại trừ bóng đứt.",
      "Các bóng đèn sáng mờ.",
      "Tất cả các bóng dèn trong mạch đều không sáng."
    ],
    "correct_index": 1
  },
  {
    "id": 135,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 5,
    "question": "Hình vẽ bên là kí hiệu của:",
    "options": [
      "động cơ điện.",
      "máy phát điện.",
      "công tơ điện.",
      "máy biến áp."
    ],
    "correct_index": 3,
    "image": "data/symbol_motor.png"
  },
  {
    "id": 136,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 6,
    "question": "Máy bơm nước gia đình, máy giặt dùng nguồn điện",
    "options": [
      "Xoay chiều 220V–50Hz.",
      "Xoay chiều 380 V.",
      "Một chiều 220 V-50Hz.",
      "Một chiều 380V."
    ],
    "correct_index": 0
  },
  {
    "id": 137,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 7,
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
    "id": 138,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 8,
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
    "id": 139,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 9,
    "question": "Đây là kí hiệu của các phần tử nào",
    "options": [
      "Chuông điện và máy biến áp",
      "Công tơ điện và máy biến áp",
      "Chuông điện và trạm biến áp",
      "Công tơ điện và trạm biến áp"
    ],
    "correct_index": 2
  },
  {
    "id": 140,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 10,
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
    "id": 141,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 11,
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
    "id": 142,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 12,
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "Stato là phần quay và roto là phần tĩnh.",
      "Stato là phần tĩnh và roto là phần quay.",
      "Cả A và B đều đúng",
      "Cả A và B đều sai"
    ],
    "correct_index": 0
  },
  {
    "id": 143,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 13,
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
    "id": 144,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 14,
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
    "id": 145,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 15,
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
    "id": 146,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 16,
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
    "id": 147,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 17,
    "question": "Vị trí và vai trò của điện năng trong sản xuất và đời sống là :",
    "options": [
      "Cải tiến máy móc và sản xuất tập trung.",
      "Sản xuất và xuất khẩu sang nước bạn.",
      "Tạo sự phát triển ổn định kinh tế xã hội.",
      "Nâng cao năng suất, cải thiện đời sống."
    ],
    "correct_index": 3
  },
  {
    "id": 148,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 18,
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
    "id": 149,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 19,
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
    "id": 150,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 20,
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
    "id": 151,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 21,
    "question": "Dụng cụ kiểm tra thứ tự pha (3pha)",
    "options": [
      "Ampe kế",
      "Vôn Kế",
      "Oát kế",
      "Đồng hồ quay pha"
    ],
    "correct_index": 3
  },
  {
    "id": 152,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 22,
    "question": "Theo quy chuẩn, điện trở tiếp địa của hệ thống điện hạ thế phải đạt?",
    "options": [
      "≤ 10 Ω",
      "≤ 4 Ω",
      "≤ 1 Ω",
      "≤ 0.5 Ω"
    ],
    "correct_index": 0
  },
  {
    "id": 153,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 23,
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
    "id": 154,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 24,
    "question": "Thiết bị đo dòng điện",
    "options": [
      "Vôn kế",
      "Ôm kế",
      "Ampe kế",
      "Watt kế"
    ],
    "correct_index": 2
  },
  {
    "id": 155,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 25,
    "question": "Tiết diện dây dẫn chọn cho đường dây trục chính được tính toán theo",
    "options": [
      "Tổng điện áp định mức của các thiết bị điện trong mạng điện",
      "Cường độ dòng điện sử dụng của mạng điện ( tính theo công suất tổng yêu cầu)",
      "Cường độ dòng điện sử dụng của thiết bị có công suất lớn nhất trong mạng điện",
      "Điện áp định mức của thiết bị có công suất lớn nhất trong mạng điện"
    ],
    "correct_index": 1
  },
  {
    "id": 156,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 26,
    "question": "Đấu sao-tam giác yêu cầu",
    "options": [
      "Motor có 6 đầu dây riêng U/V/W - X/Y/Z",
      "3 đầu dây",
      "9 đầu dây bắt buộc",
      "Chỉ cần 2 đầu"
    ],
    "correct_index": 0
  },
  {
    "id": 157,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 27,
    "question": "Công tắc 3 cực thường được sử dụng phổ biến ở các mạch đèn nào",
    "options": [
      "Mạch đèn thay đổi ánh sáng.",
      "Mạch đèn cầu thang.",
      "Mạch đèn nhà kho.",
      "Mạch đèn phòng học."
    ],
    "correct_index": 1
  },
  {
    "id": 158,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 28,
    "question": "Điện áp ra của máy biến áp được lấy từ",
    "options": [
      "Hai đầu dây quấn stato.",
      "Hai đầu dây quấn roto.",
      "Hai đầu dây quấn sơ cấp.",
      "Hai đầu dây thứ cấp."
    ],
    "correct_index": 3
  },
  {
    "id": 159,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 29,
    "question": "Điện một chiều ký hiệu",
    "options": [
      "AC",
      "DC",
      "V",
      "A"
    ],
    "correct_index": 1
  },
  {
    "id": 160,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 30,
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ  điện.",
      "Máy phát điện."
    ],
    "correct_index": 0,
    "image": "data/symbol_transformer.png"
  },
  {
    "id": 161,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 1,
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Điện áp nguồn quá cao so với định mức",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Dây quấn động cơ bị cháy"
    ],
    "correct_index": 2
  },
  {
    "id": 162,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 2,
    "question": "Trong động cơ chạy tụ, dây quấn phụ mắc nối tiếp với tụ C là để",
    "options": [
      "Ngăn cản dòng điện chạy qua dây quấn phụ",
      "Dòng điện trong hai dây quấn chính và phụ được ổn định",
      "Tạo sự lệch pha của dòng điện trong cuộn khởi động và cuộn làm việc",
      "Tích điện, dự trữ điện cung cấp cho mạch khi sụt áp"
    ],
    "correct_index": 2
  },
  {
    "id": 163,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 3,
    "question": "Hình vẽ bên là kí hiệu của:",
    "options": [
      "động cơ điện.",
      "máy phát điện.",
      "công tơ điện.",
      "máy biến áp."
    ],
    "correct_index": 0,
    "image": "data/symbol_motor.png"
  },
  {
    "id": 164,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 4,
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
    "id": 165,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 5,
    "question": "Khi thiết bị điện bị rò điện ra vỏ thì có tác hại là",
    "options": [
      "Thiết bị không hoạt động được",
      "Thiết bị không hoạt động được và nguy hiểm cho người sử dụng",
      "Nguy hiểm cho người sử dụng khi chạm vào vỏ thiết bị",
      "Gây nguy hiểm cho người sử dụng và thiết bị dễ bị quá tải"
    ],
    "correct_index": 2
  },
  {
    "id": 166,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 6,
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
    "id": 167,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 7,
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
    "id": 168,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 8,
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
    "id": 169,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 9,
    "question": "Vị trí và vai trò của điện năng trong sản xuất và đời sống là :",
    "options": [
      "Cải tiến máy móc và sản xuất tập trung.",
      "Sản xuất và xuất khẩu sang nước bạn.",
      "Tạo sự phát triển ổn định kinh tế xã hội.",
      "Nâng cao năng suất, cải thiện đời sống."
    ],
    "correct_index": 3
  },
  {
    "id": 170,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 10,
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
    "id": 171,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 11,
    "question": "Đơn vị đo công suất tiêu thụ điện",
    "options": [
      "V",
      "A",
      "Ω",
      "W"
    ],
    "correct_index": 3
  },
  {
    "id": 172,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 12,
    "question": "Đo dòng điện đầu ra của một ổn áp 10A bằng ampe kế được 11A, ta kết luận",
    "options": [
      "Ổn áp đang hoạt động bình thường",
      "Ổn áp đã bị cháy",
      "Ổn áp đang bị quá tải",
      "Ổn áp bị giảm công suất"
    ],
    "correct_index": 2
  },
  {
    "id": 173,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 13,
    "question": "Điện áp ra của máy biến áp được lấy từ",
    "options": [
      "Hai đầu dây quấn stato.",
      "Hai đầu dây quấn roto.",
      "Hai đầu dây quấn sơ cấp.",
      "Hai đầu dây thứ cấp."
    ],
    "correct_index": 3
  },
  {
    "id": 174,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 14,
    "question": "Mạch song song có",
    "options": [
      "Dòng điện bằng nhau",
      "Điện áp bằng nhau",
      "Điện trở bằng nhau",
      "Công suất bằng nhau"
    ],
    "correct_index": 1
  },
  {
    "id": 175,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 15,
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
    "id": 176,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 16,
    "question": "Cầu chì là khí cụ dùng để",
    "options": [
      "Bảo vệ mạch điện.",
      "Đóng cắt thiết bị điện.",
      "Bảo vệ quá tải và ngắn mạch cho thiết bị và đường dây.",
      "Bảo vệ quá tải cho thiết bị điện và đường dây."
    ],
    "correct_index": 2
  },
  {
    "id": 177,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 17,
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
    "id": 178,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 18,
    "question": "Một mạch điện gồm nhiều bóng đèn mắc nối tiếp, nếu có một bóng bị đứt thì",
    "options": [
      "Một số bóng đèn sáng, một số bóng đèn không sáng.",
      "Các bóng đèn sáng bình thường ngoại trừ bóng đứt.",
      "Các bóng đèn sáng mờ.",
      "Tất cả các bóng dèn trong mạch đều không sáng"
    ],
    "correct_index": 3
  },
  {
    "id": 179,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 19,
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
    "id": 180,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 20,
    "question": "Mục tiêu của nghề điện công nghiệp là sau khi học xong chương trình người học cần phải đạt được về",
    "options": [
      "Kĩ năng, thái độ.",
      "Kiến thức, kĩ năng, thái độ.",
      "Kiến thức, kĩ năng.",
      "Kiến thức, thái độ."
    ],
    "correct_index": 1
  },
  {
    "id": 181,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 21,
    "question": "Giải thoát nạn nhân bị điện giật khỏi nguồn điện hạ áp bằng cách",
    "options": [
      "Dùng tay kéo ngay nạn nhân ra khỏi nguồn điện.",
      "Báo cho điện lực cắt điện rồi mới kéo nạn nhân ra khỏi nguồn điện.",
      "Cắt cầu dao hoặc gỡ cầu chì rồi lót tay khô ráo để kéo nạn nhân khỏi nguồn điện.",
      "Cả 3 cách trên đều đúng."
    ],
    "correct_index": 3
  },
  {
    "id": 182,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 22,
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
    "id": 183,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 23,
    "question": "Mạch nối tiếp có đặc điểm",
    "options": [
      "Dòng điện bằng nhau",
      "Điện áp bằng nhau",
      "Công suất bằng nhau",
      "Điện trở bằng nhau"
    ],
    "correct_index": 0
  },
  {
    "id": 184,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 24,
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tải công suất tối đa bao nhiêu?",
    "options": [
      "1.5 - 2 kW",
      "0.5 - 1 kW",
      "3 - 4 kW",
      "5 - 6,5 kW"
    ],
    "correct_index": 3
  },
  {
    "id": 185,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 25,
    "question": "Thiết bị đo dòng điện",
    "options": [
      "Vôn kế",
      "Ôm kế",
      "Ampe kế",
      "Watt kế"
    ],
    "correct_index": 2
  },
  {
    "id": 186,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 26,
    "question": "Khi sử dụng đồng hồ đo điện vạn năng dạng hiện số cần chú ý",
    "options": [
      "Xác định đại lượng cần đo, chọn thang đo thích hợp",
      "Kiểm tra pin, xác định đại lượng cần đo, chọn thang đo thích hợp",
      "Xác định đại lượng cần đo và chỉnh về thang đo lớn nhất rồi giảm dần",
      "Kiểm tra pin, xác định đại lượng cần đo, chỉnh thang đo nhỏ nhất rồi tăng dầ"
    ],
    "correct_index": 1
  },
  {
    "id": 187,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 27,
    "question": "Đại lượng đo ánh sáng nào được quan tâm nhất khi tính toán chiếu sáng",
    "options": [
      "Quang thông.",
      "Độ chói.",
      "Độ rọi.",
      "Công suất đèn."
    ],
    "correct_index": 2
  },
  {
    "id": 188,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 28,
    "question": "Mạch điện có hai công tắc được bố trí ở hai vị trí khác nhau để điều khiển một đèn, đó là",
    "options": [
      "Mạch đèn đơn giản dạng độc lập.",
      "Mạch đèn cầu thang.",
      "Mạch đèn sáng luân phiên.",
      "Mạch đèn thay đổi ánh sáng."
    ],
    "correct_index": 1
  },
  {
    "id": 189,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 29,
    "question": "Đơn vị của cảm dung (điện cảm/dung kháng)",
    "options": [
      "H",
      "F",
      "R",
      "K"
    ],
    "correct_index": 0
  },
  {
    "id": 190,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 2",
    "stt": 30,
    "question": "Đây là kí hiệu của các phần tử nào",
    "options": [
      "Chuông điện và máy biến áp",
      "Công tơ điện và máy biến áp",
      "Chuông điện và trạm biến áp",
      "Công tơ điện và trạm biến áp"
    ],
    "correct_index": 2
  },
  {
    "id": 191,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 1,
    "question": "Điện áp ra của máy biến áp được lấy từ",
    "options": [
      "Hai đầu dây quấn stato.",
      "Hai đầu dây quấn roto.",
      "Hai đầu dây quấn sơ cấp.",
      "Hai đầu dây thứ cấp."
    ],
    "correct_index": 3
  },
  {
    "id": 192,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 2,
    "question": "Đơn vị đo công suất điện",
    "options": [
      "V",
      "A",
      "Ω",
      "W"
    ],
    "correct_index": 3
  },
  {
    "id": 193,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 3,
    "question": "Theo quy chuẩn, điện trở tiếp địa của hệ thống điện hạ thế phải đạt?",
    "options": [
      "≤ 10 Ω",
      "≤ 4 Ω",
      "≤ 1 Ω",
      "≤ 0.5 Ω"
    ],
    "correct_index": 0
  },
  {
    "id": 194,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 4,
    "question": "Nghề điện công nghiệp hoạt động chủ yếu trong các lĩnh vực nào?",
    "options": [
      "Sản xuất, truyền tải, phân phối điện.",
      "Chế tạo vật tư ngành điện.",
      "Sử dụng điện phục vụ đời sống, điều khiển tự động hóa sản xuất.",
      "Mua bán vật tư ngành điện."
    ],
    "correct_index": 2
  },
  {
    "id": 195,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 5,
    "question": "Động cơ 3 pha quay ngược trong trường hợp nào",
    "options": [
      "Khi sử dụng điện 220V",
      "Khi sử dụng điện 380V",
      "Khi đấu sai thứ tự pha",
      "Khi đấu sai tiếp điểm"
    ],
    "correct_index": 2
  },
  {
    "id": 196,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 6,
    "question": "Chọn câu sai. Các biện pháp chủ động phòng tránh tai nạn điện là",
    "options": [
      "Đảm bảo tốt cách điện các thiết bị điện.",
      "Sử dụng điện áp cao.",
      "Sử dụng những biển báo, tín hiệu nguy hiểm.",
      "Sử dụng các phương tiện phòng hộ, an toàn."
    ],
    "correct_index": 1
  },
  {
    "id": 197,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 7,
    "question": "Đồng hồ đo điện vạn năng dùng để đo :",
    "options": [
      "Điện áp xoay chiều, điện áp một chiều, điện trở, dòng điện một chiều",
      "Điện áp một chiều, điện áp xoay chiều, điện trở cách điện máy điện",
      "Điện áp xoay chiều, dòng điện xoay chiều, điện trở cách điện",
      "Điện trở, điện áp và  dòng điện máy điện"
    ],
    "correct_index": 0
  },
  {
    "id": 198,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 8,
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tải công suất tối đa bao nhiêu?",
    "options": [
      "1.5 - 2 kW",
      "0.5 - 1 kW",
      "3 - 4 kW",
      "5 - 6,5 kW"
    ],
    "correct_index": 3
  },
  {
    "id": 199,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 9,
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
    "id": 200,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 10,
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
    "id": 201,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 11,
    "question": "Đơn vị đo cường độ dòng điện xoay chiều",
    "options": [
      "Ampe (A)",
      "Ohm (W)",
      "Volt (V)",
      "Hec (Hz)"
    ],
    "correct_index": 0
  },
  {
    "id": 202,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 12,
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
    "id": 203,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 13,
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
    "id": 204,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 14,
    "question": "Đại lượng đo ánh sáng nào được quan tâm nhất khi tính toán chiếu sáng",
    "options": [
      "Quang thông.",
      "Độ chói.",
      "Độ rọi.",
      "Công suất đèn."
    ],
    "correct_index": 2
  },
  {
    "id": 205,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 15,
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
    "id": 206,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 16,
    "question": "Máy bơm nước gia đình, máy giặt dùng nguồn điện",
    "options": [
      "Xoay chiều 220V–50Hz.",
      "Xoay chiều 380 V.",
      "Một chiều 220 V-50Hz.",
      "Một chiều 380V."
    ],
    "correct_index": 0
  },
  {
    "id": 207,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 17,
    "question": "Đo dòng điện đầu ra của một ổn áp 10A bằng ampe kế được 11A, ta kết luận",
    "options": [
      "Ổn áp đang hoạt động bình thường",
      "Ổn áp đã bị cháy",
      "Ổn áp đang bị quá tải",
      "Ổn áp bị giảm công suất"
    ],
    "correct_index": 2
  },
  {
    "id": 208,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 18,
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
    "id": 209,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 19,
    "question": "Khi sử dụng đồng hồ đo điện vạn năng dạng hiện số cần chú ý",
    "options": [
      "Xác định đại lượng cần đo, chọn thang đo thích hợp",
      "Kiểm tra pin, xác định đại lượng cần đo, chọn thang đo thích hợp",
      "Xác định đại lượng cần đo và chỉnh về thang đo lớn nhất rồi giảm dần",
      "Kiểm tra pin, xác định đại lượng cần đo, chỉnh thang đo nhỏ nhất rồi tăng dần"
    ],
    "correct_index": 1
  },
  {
    "id": 210,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 20,
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ  điện.",
      "Máy phát điện."
    ],
    "correct_index": 0,
    "image": "data/symbol_transformer.png"
  },
  {
    "id": 211,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 21,
    "question": "Thiết bị đo điện cách điện",
    "options": [
      "Mega ôm (Megômmét)",
      "Ampe kìm",
      "Ampe ôm",
      "Megger"
    ],
    "correct_index": 0
  },
  {
    "id": 212,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 22,
    "question": "Mạch song song có",
    "options": [
      "Dòng điện bằng nhau",
      "Điện áp bằng nhau",
      "Điện trở bằng nhau",
      "Công suất bằng nhau"
    ],
    "correct_index": 1
  },
  {
    "id": 213,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 23,
    "question": "Cọc nối đất để tránh “chạm vỏ” thường  được dùng bảo vệ thiết bị điện như:",
    "options": [
      "Các loại đèn chiếu sáng.",
      "Động cơ điện, tủ lạnh, máy hàn.",
      "Các bóng đèn, quạt gió.",
      "Quạt gió, máy sấy tóc, bếp điện."
    ],
    "correct_index": 1
  },
  {
    "id": 214,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 24,
    "question": "Đấu sao-tam giác yêu cầu",
    "options": [
      "Motor có 6 đầu dây riêng U/V/W - X/Y/Z",
      "3 đầu dây",
      "9 đầu dây bắt buộc",
      "Chỉ cần 2 đầu"
    ],
    "correct_index": 0
  },
  {
    "id": 215,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 25,
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
    "id": 216,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 26,
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
    "id": 217,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 27,
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
    "id": 218,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 28,
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
    "id": 219,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 29,
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
    "id": 220,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 30,
    "question": "Đơn vị của cảm dung (điện cảm/dung kháng)",
    "options": [
      "H",
      "F",
      "R",
      "K"
    ],
    "correct_index": 0
  },
  {
    "id": 221,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 1,
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
    "id": 222,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 2,
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
    "id": 223,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 3,
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
    "id": 224,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 4,
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
    "id": 225,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 5,
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ  điện.",
      "Máy phát điện."
    ],
    "correct_index": 0,
    "image": "data/symbol_transformer.png"
  },
  {
    "id": 226,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 6,
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
    "id": 227,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 7,
    "question": "Đo dòng điện đầu ra của một ổn áp 10A bằng ampe kế được 11A, ta kết luận",
    "options": [
      "Ổn áp đang hoạt động bình thường",
      "Ổn áp đã bị cháy",
      "Ổn áp đang bị quá tải",
      "Ổn áp bị giảm công suất"
    ],
    "correct_index": 2
  },
  {
    "id": 228,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 8,
    "question": "Khi đóng điện vào máy bơm nước, có điện vào, động cơ rung nhẹ nhưng không quay là do",
    "options": [
      "Điện áp nguồn quá cao so với định mức",
      "Mạch cấp điện cho động cơ bị hở mạch do đứt dây",
      "Tụ điện khởi động bị hỏng",
      "Dây quấn động cơ bị cháy"
    ],
    "correct_index": 2
  },
  {
    "id": 229,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 9,
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
    "id": 230,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 10,
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
    "id": 231,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 11,
    "question": "Máy bơm nước gia đình, máy giặt dùng nguồn điện",
    "options": [
      "Xoay chiều 220V–50Hz.",
      "Xoay chiều 380 V.",
      "Một chiều 220 V-50Hz.",
      "Một chiều 380V."
    ],
    "correct_index": 0
  },
  {
    "id": 232,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 12,
    "question": "Động cơ 3 pha có mấy kiểu đấu dây cơ bản",
    "options": [
      "1 Kiểu",
      "2 Kiểu",
      "3 Kiểu",
      "4 Kiểu"
    ],
    "correct_index": 1
  },
  {
    "id": 233,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 13,
    "question": "Tiết diện 1,5mm2 dây điện đồng có thể chịu tải công suất tối đa bao nhiêu?",
    "options": [
      "1.5 - 2 kW",
      "0.5 - 1 kW",
      "3 - 4 kW",
      "5 - 6,5 kW"
    ],
    "correct_index": 3
  },
  {
    "id": 234,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 14,
    "question": "Thiết bị đo điện cách điện",
    "options": [
      "Mega ôm (Megômmét)",
      "Ampe kìm",
      "Ampe ôm",
      "Megger"
    ],
    "correct_index": 0
  },
  {
    "id": 235,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 15,
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
    "id": 236,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 16,
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ điện.",
      "Máy phát điện."
    ],
    "correct_index": 1,
    "image": "data/symbol_transformer.png"
  },
  {
    "id": 237,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 17,
    "question": "Lượng nước máy bơm bơm được trong một đơn vị thời gian gọi là",
    "options": [
      "Tốc độ bơm",
      "Lưu lượng",
      "Công suất bơm",
      "Dung lượng máy bơm"
    ],
    "correct_index": 1
  },
  {
    "id": 238,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 18,
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
    "id": 239,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 19,
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
    "id": 240,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 20,
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
    "id": 241,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 21,
    "question": "Giải thoát nạn nhân bị điện giật khỏi nguồn điện hạ áp bằng cách",
    "options": [
      "Dùng tay kéo ngay nạn nhân ra khỏi nguồn điện.",
      "Báo cho điện lực cắt điện rồi mới kéo nạn nhân ra khỏi nguồn điện.",
      "Cắt cầu dao hoặc gỡ cầu chì rồi lót tay khô ráo để kéo nạn nhân khỏi nguồn điện.",
      "Cả 3 cách trên đều đúng."
    ],
    "correct_index": 3
  },
  {
    "id": 242,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 22,
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
    "id": 243,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 23,
    "question": "Cọc nối đất để tránh “chạm vỏ” thường  được dùng bảo vệ thiết bị điện như:",
    "options": [
      "Các loại đèn chiếu sáng.",
      "Động cơ điện, tủ lạnh, máy hàn.",
      "Các bóng đèn, quạt gió.",
      "Quạt gió, máy sấy tóc, bếp điện."
    ],
    "correct_index": 1
  },
  {
    "id": 244,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 24,
    "question": "Một mạch điện gồm nhiều bóng đèn mắc song song, nếu có một bóng bị đứt thì",
    "options": [
      "Một số bóng đèn sáng, một số bóng đèn không sáng.",
      "Các bóng đèn sáng bình thường ngoại trừ bóng đứt.",
      "Các bóng đèn sáng mờ.",
      "Tất cả các bóng dèn trong mạch đều không sáng."
    ],
    "correct_index": 1
  },
  {
    "id": 245,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 25,
    "question": "Chọn câu đúng trong các câu sau",
    "options": [
      "Nhờ ampe kế mắc nối tiếp với mạng điện trong nhà để xác định trị số điện áp.",
      "Nhờ dụng cụ đo lường điện mà ta có thể phát hiện được hư hỏng trong thiết bị hay trong mạch điện.",
      "Nhờ vôn kế mắc nối tiếp với mạng điện trong nhà để xác định trị số điện áp.",
      "Nhờ ampe kế mắc song song với mạng điện trong nhà để xác định điện áp."
    ],
    "correct_index": 1
  },
  {
    "id": 246,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 26,
    "question": "Khi thiết bị điện bị rò điện ra vỏ thì có tác hại là",
    "options": [
      "Thiết bị không hoạt động được",
      "Thiết bị không hoạt động được và nguy hiểm cho người sử dụng",
      "Nguy hiểm cho người sử dụng khi chạm vào vỏ thiết bị",
      "Gây nguy hiểm cho người sử dụng và thiết bị dễ bị quá tải"
    ],
    "correct_index": 2
  },
  {
    "id": 247,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 27,
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
    "id": 248,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 28,
    "question": "Mạch song song có",
    "options": [
      "Dòng điện bằng nhau",
      "Điện áp bằng nhau",
      "Điện trở bằng nhau",
      "Công suất bằng nhau"
    ],
    "correct_index": 1
  },
  {
    "id": 249,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 29,
    "question": "Tiết diện dây dẫn chọn cho đường dây trục chính được tính toán theo",
    "options": [
      "Tổng điện áp định mức của các thiết bị điện trong mạng điện",
      "Cường độ dòng điện sử dụng của mạng điện ( tính theo công suất tổng yêu cầu)",
      "Cường độ dòng điện sử dụng của thiết bị có công suất lớn nhất trong mạng điện",
      "Điện áp định mức của thiết bị có công suất lớn nhất trong mạng điện"
    ],
    "correct_index": 1
  },
  {
    "id": 250,
    "type": "multiple_choice",
    "category": "Lý thuyết - Thợ điện",
    "exam_set": "Thợ Điện Bậc 3",
    "stt": 30,
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
    "id": "q_ctn_2_1",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_2",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_3",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_4",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_5",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_6",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_7",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_8",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
    "question": "ống PN8 và phụ kiện PN5 có dùng chung với nhau được không",
    "options": [
      "CÓ",
      "KHÔNG",
      "",
      ""
    ],
    "correct_index": 1
  },
  {
    "id": "q_ctn_2_9",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
    "question": "ống PN10 và phụ kiện PN16 có dùng chung với nhau được không",
    "options": [
      "CÓ",
      "KHÔNG",
      "",
      ""
    ],
    "correct_index": 0
  },
  {
    "id": "q_ctn_2_10",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_11",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_12",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_13",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_14",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_2_15",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thợ CTN Bậc 2",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_1",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_2",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_3",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_4",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_5",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_6",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_7",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_8",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_9",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_10",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_11",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_12",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_13",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_14",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_15",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_16",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_17",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_18",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_19",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
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
    "id": "q_ctn_3_20",
    "category": "Lý thuyết - Cấp thoát nước",
    "exam_set": "Thỏ CTN Bậc 3",
    "type": "multiple_choice",
    "question": "Khi thi công ống thoát nước ngang DN90, độ dốc tối thiểu nên là bao nhiêu",
    "options": [
      "0.5 %",
      "1 %",
      "2 %",
      "5 %"
    ],
    "correct_index": 1
  }
];
