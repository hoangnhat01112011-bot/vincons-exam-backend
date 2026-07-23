const QUESTIONS = [
  {
    "id": 1,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 2,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 3,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 4,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 5,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 6,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 7,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 8,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 9,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 10,
    "category": "Lý thuyết - Bậc 2",
    "question": "Tiết diện 1mm2 dây điện đồng có thể chịu tối đa bao nhiêu ampe?",
    "options": [
      "2A",
      "3A",
      "4A",
      "6A"
    ],
    "correct_index": 3
  },
  {
    "id": 11,
    "category": "Lý thuyết - Bậc 2",
    "question": "Tiết diện 1mm2 dây điện đồng có thể chịu tải công suất tối đa bao nhiêu?",
    "options": [
      "1.5 - 2 kW",
      "0.5 - 1 kW",
      "3 - 4 kW",
      "5 - 6 kW"
    ],
    "correct_index": 0
  },
  {
    "id": 12,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 13,
    "category": "Lý thuyết - Bậc 2",
    "question": "Theo quy chuẩn, điện trở tiếp địa của hệ thống điện hạ thế phải đạt?",
    "options": [
      "≤ 10 Ω",
      "≤ 4 Ω",
      "≤ 1 Ω",
      "≤ 0.5 Ω"
    ],
    "correct_index": 1
  },
  {
    "id": 14,
    "category": "Lý thuyết - Bậc 2",
    "question": "Thiết bị đo điện cách điện",
    "options": [
      "Mega ôm (Megômmét)",
      "Ampe kìm",
      "Ampe ôm",
      "Megger"
    ],
    "correct_index": 3
  },
  {
    "id": 15,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 16,
    "category": "Lý thuyết - Bậc 2",
    "question": "Đơn vị đo công suất phản kháng",
    "options": [
      "V",
      "A",
      "Ω",
      "kVAr"
    ],
    "correct_index": 3
  },
  {
    "id": 17,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 18,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 19,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 20,
    "category": "Lý thuyết - Bậc 2",
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
    "id": 21,
    "category": "Lý thuyết - Bậc 3",
    "question": "Điện áp dây pha điện 3 pha (Ud)",
    "options": [
      "380V-400V",
      "220V-230V",
      "240V-320V",
      "110V-220V"
    ],
    "correct_index": 0
  },
  {
    "id": 22,
    "category": "Lý thuyết - Bậc 3",
    "question": "Thiết bị nào dùng để đo điện áp",
    "options": [
      "Ampe kế",
      "Vôn Kế",
      "Oát kế",
      "Công tơ điện"
    ],
    "correct_index": 1
  },
  {
    "id": 23,
    "category": "Lý thuyết - Bậc 3",
    "question": "Đấu ổ cắm dùng mấy dây",
    "options": [
      "2 dây",
      "3 dây",
      "4 dây",
      "5 dây"
    ],
    "correct_index": 1
  },
  {
    "id": 24,
    "category": "Lý thuyết - Bậc 3",
    "question": "CB chống giật tên gọi là gi",
    "options": [
      "MCCB",
      "CB tép",
      "RCBO",
      "ROCU"
    ],
    "correct_index": 2
  },
  {
    "id": 25,
    "category": "Lý thuyết - Bậc 3",
    "question": "Đơn vị đo cường độ dòng điện là",
    "options": [
      "Volt (V)",
      "Ampere (A)",
      "Ohm (Ω)",
      "Watt (W)"
    ],
    "correct_index": 1
  },
  {
    "id": 26,
    "category": "Lý thuyết - Bậc 3",
    "question": "Dây tiếp đất (dây PE) có chức năng gì?",
    "options": [
      "Tăng điện áp",
      "Giảm điện áp",
      "Bảo vệ an toàn khi rò điện",
      "Tăng công suất"
    ],
    "correct_index": 2
  },
  {
    "id": 27,
    "category": "Lý thuyết - Bậc 3",
    "question": "Thiết bị nào dùng để bảo vệ mạch điện khi quá tải hoặc ngắn mạch",
    "options": [
      "Công tắc",
      "Cầu dao tự động (CB)",
      "Ổ cắm",
      "Bóng đèn"
    ],
    "correct_index": 1
  },
  {
    "id": 28,
    "category": "Lý thuyết - Bậc 3",
    "question": "Trong mạng điện gia đình Việt Nam, điện áp thường là bao nhiêu?",
    "options": [
      "110V",
      "220V",
      "380V",
      "12V"
    ],
    "correct_index": 1
  },
  {
    "id": 29,
    "category": "Lý thuyết - Bậc 3",
    "question": "Dây trung tính ký hiệu",
    "options": [
      "L",
      "N",
      "PE",
      "P"
    ],
    "correct_index": 1
  },
  {
    "id": 30,
    "category": "Lý thuyết - Bậc 3",
    "question": "Khi sửa chữa điện cần làm gì trước tiên?",
    "options": [
      "Thay dây điện",
      "Tắt nguồn điện",
      "Đeo găng tay",
      "Kiểm tra bóng đèn"
    ],
    "correct_index": 1
  },
  {
    "id": 31,
    "category": "Lý thuyết - Bậc 3",
    "question": "Cách kiểm tra điện ổ cắm",
    "options": [
      "Chọc tay vào ổ điện",
      "Lấy chui của thiết bị cầm vào",
      "Sử dụng bút thử điện",
      "A,B đều đúng"
    ],
    "correct_index": 2
  },
  {
    "id": 32,
    "category": "Lý thuyết - Bậc 3",
    "question": "Khi có người bị điện giật, việc đầu tiên là",
    "options": [
      "Cắt nguồn điện",
      "Kéo nạn nhân",
      "Hô hấp nhân tạo",
      "Gọi cấp cứu"
    ],
    "correct_index": 0
  },
  {
    "id": 33,
    "category": "Lý thuyết - Bậc 3",
    "question": "MCB bảo vệ chống",
    "options": [
      "Quá áp",
      "Quá tải + ngắn mạch",
      "Rò điện",
      "Sụt áp"
    ],
    "correct_index": 1
  },
  {
    "id": 34,
    "category": "Lý thuyết - Bậc 3",
    "question": "Khi làm việc trên cao, thợ điện phải",
    "options": [
      "Đi giày thường",
      "Đeo dây an toàn",
      "B,D đều đúng",
      "Đứng thang gỗ"
    ],
    "correct_index": 2
  },
  {
    "id": 35,
    "category": "Lý thuyết - Bậc 3",
    "question": "Đơn vị điện trở",
    "options": [
      "V",
      "A",
      "Ω",
      "W"
    ],
    "correct_index": 2
  },
  {
    "id": 36,
    "category": "Lý thuyết - Bậc 3",
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
    "id": 37,
    "category": "Lý thuyết - Bậc 3",
    "question": "Đấu sao-tam giác yêu cầu",
    "options": [
      "Motor có 6 đầu dây riêng U/V/W-X/Y/Z",
      "3 đầu dây",
      "9 đầu dây bắt buộc",
      "Chỉ cần 2 đầu"
    ],
    "correct_index": 0
  },
  {
    "id": 38,
    "category": "Lý thuyết - Bậc 3",
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
    "id": 39,
    "category": "Lý thuyết - Bậc 3",
    "question": "Dụng cụ kiểm tra thứ tự pha(3pha)",
    "options": [
      "Ampe kế",
      "Vôn Kế",
      "Oát kế",
      "Đồng hồ quay pha"
    ],
    "correct_index": 3
  },
  {
    "id": 40,
    "category": "Lý thuyết - Bậc 3",
    "question": "Đơn vị của điện dung",
    "options": [
      "H",
      "F",
      "R",
      "K"
    ],
    "correct_index": 1
  },
  {
    "id": 41,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 42,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 43,
    "category": "Lý thuyết - Thợ điện",
    "question": "Khi tay người khô ráo sẽ bị điện giật nhẹ hơn khi tay  ướt là do",
    "options": [
      "Điện trở của tay khô  nhỏ hơn tay ướt.",
      "Điện trở của tay khô  lớn hơn tay ướt.",
      "Điện áp của dòng điện tăng lên.",
      "Điện trở tay và điện áp đều giảm."
    ],
    "correct_index": 1
  },
  {
    "id": 44,
    "category": "Lý thuyết - Thợ điện",
    "question": "Giải thoát nạn nhân bị điện giật khỏi nguồn điện hạ áp bằng cách",
    "options": [
      "Dùng tay kéo ngay nạn nhân ra khỏi nguồn điện.",
      "Báo cho điện lực cắt điện rồi mới kéo nạn nhân ra khỏi nguồn điện.",
      "Cắt cầu dao hoặc gỡ cầu chì rồi lót tay khô ráo để kéo nạn nhân khỏi nguồn điện.",
      "Cả 3 cách trên đều đúng."
    ],
    "correct_index": 2
  },
  {
    "id": 45,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 46,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 47,
    "category": "Lý thuyết - Thợ điện",
    "question": "Theo TCVN 3144-79 về qui định các cấp bảo vệ của thiết bị điện thì cấp III gồm",
    "options": [
      "Những thiết bị làm việc ở điện áp 50V.",
      "Những thiết bị làm việc với điện áp lớn hơn 50V.",
      "Những thiết bị làm việc với điện áp lớn hơn hoặc bằng 50V.",
      "Những thiết bị làm việc với điện áp nhỏ hơn hoặc bằng 50V."
    ],
    "correct_index": 3
  },
  {
    "id": 48,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 49,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 50,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 51,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 52,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 53,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 54,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 55,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 56,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 57,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 58,
    "category": "Lý thuyết - Thợ điện",
    "question": "Hình vẽ bên là kí hiệu của:",
    "options": [
      "động cơ điện.",
      "máy phát điện.",
      "công tơ điện.",
      "máy biến áp."
    ],
    "correct_index": 3
  },
  {
    "id": 59,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 60,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 61,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 62,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 63,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 64,
    "category": "Lý thuyết - Thợ điện",
    "question": "Động cơ điện có các phần chính là",
    "options": [
      "Stato là phần quay và roto là phần tĩnh.",
      "Stato là phần tĩnh và roto là phần quay."
    ],
    "correct_index": 1
  },
  {
    "id": 65,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 66,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 67,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 68,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 69,
    "category": "Lý thuyết - Thợ điện",
    "question": "Động cơ quạt điện dân dụng là loại động cơ gì?",
    "options": [
      "Động cơ điện một chiều công suất nhỏ.",
      "Động cơ điện xoay chiều một pha công suất nhỏ.",
      "Động cơ điện xoay chiều ba pha công suất nhỏ",
      "Động cơ điện một chiều công suất lớn"
    ],
    "correct_index": 0
  },
  {
    "id": 70,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 71,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 72,
    "category": "Lý thuyết - Thợ điện",
    "question": "Trong động cơ chạy tụ, dây quấn phụ mắc nối tiếp với tụ C là để",
    "options": [
      "Ngăn cản dòng điện chạy qua dây quấn phụ",
      "Dòng điện trong hai dây quấn chính và phụ được ổn định",
      "Tạo sự lệch pha của dịng điện trong cuộn khởi động và cuộn làm việc",
      "Tích điện, dự trữ điện cung cấp cho mạch khi sụt áp"
    ],
    "correct_index": 2
  },
  {
    "id": 73,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 74,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 75,
    "category": "Lý thuyết - Thợ điện",
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ  điện.",
      "Máy phát điện."
    ],
    "correct_index": 0
  },
  {
    "id": 76,
    "category": "Lý thuyết - Thợ điện",
    "question": "Đây là kí hiệu của :",
    "options": [
      "Động cơ điện.",
      "Máy biến áp.",
      "Công tơ điện.",
      "Máy phát điện."
    ],
    "correct_index": 2
  },
  {
    "id": 77,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 78,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 79,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 80,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 81,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 82,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 83,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 84,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 85,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 86,
    "category": "Lý thuyết - Thợ điện",
    "question": "Yêu cầu điện trở tiếp địa hệ thống chống sét, tủ điện, motor cần đạt được là:",
    "options": [
      "A≥ 10 Ohm (W)",
      "B≤ 10 Ohm (W)",
      "C≤ 4 Ohm (W)",
      "D≤ 6 Ohm (W)"
    ],
    "correct_index": 1
  },
  {
    "id": 87,
    "category": "Lý thuyết - Thợ điện",
    "question": "Yêu cầu điện trở tiếp địa hệ thống tiếp địa trạm biến áp cần đạt được là:",
    "options": [
      "A≥ 10 Ohm (W)",
      "B≤ 10 Ohm (W)",
      "C≤ 4 Ohm (W)",
      "D≤ 6 Ohm (W)"
    ],
    "correct_index": 2
  },
  {
    "id": 88,
    "category": "Lý thuyết - Thợ điện",
    "question": "Yêu cầu điện trở cách điện cáp điện cần đạt được đảm bảo nghiệm thu theo tiêu chuẩn  là bao nhiêu",
    "options": [
      "A≥ 10 Megaohm (MW)",
      "B≤ 10 Megaohm (MW)",
      "C≤ 10 Megaohm (MW)",
      "D≤ 10 Megaohm (MW)"
    ],
    "correct_index": 0
  },
  {
    "id": 89,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 90,
    "category": "Lý thuyết - Thợ điện",
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
    "id": 91,
    "category": "Thực hành - Điện nước (M&E)",
    "question": "Khi tiến hành hàn ống nhựa cấp nước PPR, chiều sâu lồng ống tối thiểu để hàn đối với ống đường kính d25 là bao nhiêu theo tiêu chuẩn thi công Vincons?",
    "options": [
      "13 mm",
      "15 mm",
      "16 mm",
      "18 mm"
    ],
    "correct_index": 1
  },
  {
    "id": 92,
    "category": "Thực hành - Điện nước (M&E)",
    "question": "Theo quy chuẩn thi công, khoảng cách tối đa giữa các giá đỡ (quang treo) đối với đường ống nước PPR d32 lắp ngang trên trần là bao nhiêu?",
    "options": [
      "80 cm",
      "100 cm",
      "120 cm",
      "150 cm"
    ],
    "correct_index": 1
  },
  {
    "id": 93,
    "category": "Thực hành - Điện nước (M&E)",
    "question": "Trước khi đổ bê tông sàn, kỹ sư hoặc thợ chính cần kiểm tra những gì đối với hệ thống ống điện âm sàn?",
    "options": [
      "Độ kín khít các mối nối ống bằng keo dán chuyên dụng.",
      "Cố định ống chắc chắn vào thép sàn, khoảng cách giữa các kẹp đỡ.",
      "Đầu ống luồn được bịt kín bằng băng dính tránh bê tông lọt vào.",
      "Tất cả các nội dung trên."
    ],
    "correct_index": 3
  },
  {
    "id": 94,
    "category": "Thực hành - Điện nước (M&E)",
    "question": "Quy trình thử áp đường ống nước cấp PPR tại công trường Vincons yêu cầu thử ở áp suất tối thiểu bao nhiêu và duy trì trong bao lâu?",
    "options": [
      "5 bar trong 15 phút.",
      "10 bar trong 30 phút.",
      "15 bar trong 60 phút.",
      "20 bar trong 120 phút."
    ],
    "correct_index": 1
  },
  {
    "id": 95,
    "category": "Thực hành - Xây dựng (Nề/Cốp pha)",
    "question": "Khi xây tường gạch chèn khung bê tông cốt thép, yêu cầu xử lý hàng gạch trên cùng giáp đáy dầm bê tông như thế nào để tránh nứt tường?",
    "options": [
      "Xây nằm ngang trát vữa thật chặt.",
      "Xây gạch nghiêng (gạch đinh) chèn chặt vữa mác cao.",
      "Bơm keo bọt nở chèn đầy khoảng hở.",
      "Để trống khe co giãn không chèn vữa."
    ],
    "correct_index": 1
  },
  {
    "id": 96,
    "category": "Thực hành - Xây dựng (Nề/Cốp pha)",
    "question": "Độ dốc tiêu chuẩn của đường ống thoát nước thải nằm ngang trong căn hộ chung cư Vincons thi công thường dao động trong khoảng nào?",
    "options": [
      "1% - 2%",
      "2% - 3%",
      "3% - 4%",
      "5%"
    ],
    "correct_index": 0
  },
  {
    "id": 97,
    "category": "Thực hành - Xây dựng (Nề/Cốp pha)",
    "question": "Chiều cao tiêu chuẩn lắp đặt ổ cắm điện âm tường phòng khách (tính từ cốt sàn hoàn thiện đến tim ổ cắm) tại các căn hộ Vincons là bao nhiêu?",
    "options": [
      "300 mm",
      "450 mm",
      "600 mm",
      "1200 mm"
    ],
    "correct_index": 0
  }
];

if (typeof module !== 'undefined') { module.exports = QUESTIONS; }