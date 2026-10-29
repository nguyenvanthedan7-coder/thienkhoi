// Ngân hàng câu hỏi trắc nghiệm sát hoạch Môi giới Bất động sản
// Cấu trúc câu hỏi:
// - id: Mã câu hỏi
// - question: Nội dung câu hỏi
// - options: Mảng chứa các phương án lựa chọn
// - answer: Chỉ số đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D, ...)

const questionsBank = [
  {
    id: 1,
    question: "Hỗ trợ Truyền thông dành cho các Đầu khách tại Thiên Khôi KHÔNG gồm ý nào sau đây?",
    options: [
      "Khuyến mại chi phí đăng tin lên tới 62% tại batdongsan.com.vn",
      "2.000.000VNĐ/tháng vào tài khoản đăng tin tại website bannha888.com đối với Chuyên viên",
      "Tự động duyệt bài tại các group facebook Bất động sản của Thiên Khôi",
      "Kênh truyền thông từ việc tài trợ và tham gia Giải bóng đá 7 người HPL Liên đoàn bóng đá Hà Nội và Giải thể thao điện tử Thiên Khôi Esports"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Những loại Bảo hiểm nào nằm trong hệ sinh thái hỗ trợ của Thiên Khôi?",
    options: [
      "Bảo hiểm tai nạn, Bảo hiểm nghiệp vụ, Bảo lãnh hoa hồng",
      "Bảo hiểm thân thể, Bảo hiểm nghiệp vụ, Bảo lãnh hoa hồng",
      "Bảo hiểm tai nạn, Bảo hiểm thân thể, Bảo lãnh nghiệp vụ",
      "Bảo lãnh hoa hồng, Bảo hiểm tai nạn, Bảo lãnh uy tín."
    ],
    answer: 0
  },
  {
    id: 3,
    question: "Một Học viên có thể phấn đấu lên các vị trí nào của Tập đoàn Bất động sản Thiên Khôi, chọn đáp án đúng nhất?",
    options: [
      "Chuyên viên, Nhóm trưởng, Trưởng/Giám đốc Khu vực, Trưởng phòng, Giám đốc, Phó tổng",
      "Chuyên viên, Trợ lý, Đội trưởng, Giám đốc, Phó khu vực, Phó tổng",
      "Thư ký, Chuyên viên, Giám đốc vùng, Giám đốc Khối, Phó tổng, Chủ tịch",
      "Chuyên viên, Nhóm trưởng, Trưởng/Giám đốc khu vực, Giám đốc Vùng, Chủ tịch"
    ],
    answer: 0
  },
  {
    id: 4,
    question: "Ý nào dưới đây KHÔNG phải mục tiêu của Tập đoàn khi tưởng thưởng du lịch trong nước đặc biệt là nước ngoài dành cho các thành viên Thiên Khôi?",
    options: [
      "Mở mang tầm nhìn cho đội ngũ nhân sự của Thiên Khôi.",
      "Tăng cường kết nối tương tác giữa các thành viên.",
      "Món quà tưởng thưởng xứng đáng dành tặng các thành viên đã có nhiều nỗ lực và đóng góp tới sự phát triển chung.",
      "Để làm màu phục vụ truyền thông."
    ],
    answer: 3
  },
  {
    id: 5,
    question: "Đâu là cơ hội khi làm nghề Môi giới Bất động sản?",
    options: [
      "Cơ hội làm giàu, đột phá thu nhập",
      "Cơ hội học hỏi tư từ những người giàu, thành đạt",
      "Cơ hội “khởi nghiệp” với số vốn bằng 0",
      "Tất cả các đáp án trên đều đúng"
    ],
    answer: 3
  },
  {
    id: 6,
    question: "Thành viên khi lên văn phòng và các Trụ sở của Tập đoàn cần tuân thủ quy định gì?",
    options: [
      "Tự do ra vào",
      "Tự do trang phục",
      "Đeo thẻ thành viên và ăn mặc lịch sự",
      "Không cần tuân thủ quy định nào"
    ],
    answer: 2
  },
  {
    id: 7,
    question: "Quy định về ảnh đại diện Facebook cá nhân tại Tập đoàn?",
    options: [
      "Dùng ảnh nào cũng được miễn mình thích",
      "Dùng ảnh chụp cùng người thân, bạn bè cùng giới",
      "Dùng ảnh chính chủ, rõ mặt, không đeo kính râm hoặc chụp cùng trẻ con, người khác giới để đồng nghiệp dễ dàng nhận diện.",
      "Không cần đặt ảnh đại diện"
    ],
    answer: 2
  },
  {
    id: 8,
    question: "Văn hoá khi họp tại Tập đoàn?",
    options: [
      "Chủ toạ vỗ tay trước, các thành viên mới vỗ tay, chủ toạ dừng các thành viên mới dừng",
      "Khi phát biểu cần giơ tay, chủ toạ mời mới phát biểu",
      "Để điện thoại ở chế độ im lặng hoặc rung, hạn chế ra ngoài làm ảnh hưởng cuộc họp",
      "Tất cả các đáp án trên"
    ],
    answer: 3
  },
  {
    id: 9,
    question: "Đầu khách dẫn khách cần tuân thủ quy trình chung như thế nào để thông suốt thông tin, phối hợp ăn ý và phòng tránh rủi ro?",
    options: [
      "Tự do dẫn khách không cần báo cáo",
      "Tư vấn ký phiếu YCCCDV -> Dẫn khách -> Báo cáo Đầu chủ -> Báo cáo về khối/phòng mình",
      "Dẫn khách -> Báo cáo về khối/phòng mình",
      "Tự liên hệ chủ nhà thương lượng"
    ],
    answer: 1
  },
  {
    id: 10,
    question: "Trong cách đọc thông số nhà tại Thiên Khôi, 12.3.4 Tam Trinh \"30 5 4.2 2.7 tỷ\" có nghĩa là gì?",
    options: [
      "Diện tích 30m2 mặt tiền 5m, mặt hậu 4.2m, giá 2.7 tỷ có thương lượng.",
      "Diện tích 30m2, 5 tầng, mặt tiền 4.2m, giá chào 2.7 tỷ có thương lượng.",
      "Diện tích 30m2, mặt hậu 5m, mặt tiền 4.2m, giá chào 2.7 tỷ có thương lượng.",
      "Diện tích 30m2, ngõ 5m, mặt tiền 4.2m, giá 2.7 tỷ."
    ],
    answer: 1
  },
  {
    id: 11,
    question: "Định giá theo phương pháp Dòng tiền dựa trên yếu tố nào?",
    options: [
      "Bán được giá cao",
      "Mua được giá thấp",
      "Cho thuê hoặc kinh doanh ra thu nhập hàng tháng.",
      "Chi phí xây dựng nhà"
    ],
    answer: 2
  },
  {
    id: 12,
    question: "Định giá theo phương pháp Chi phí dựa trên yếu tố nào?",
    options: [
      "Bán được giá cao",
      "Số tiền bỏ ra mua đất, xây nhà, khấu hao nhà.",
      "Cho thuê hoặc kinh doanh ra thu nhập hàng tháng.",
      "Giá bán của các căn nhà xung quanh"
    ],
    answer: 1
  },
  {
    id: 13,
    question: "Định giá theo phương pháp so sánh dựa trên yếu tố nào?",
    options: [
      "Tìm hiểu giá cả bất động sản xung quanh bất động sản đó.",
      "Số tiền bỏ ra mua đất, xây nhà, khấu hao nhà.",
      "Cho thuê hoặc kinh doanh ra thu nhập hàng tháng.",
      "Giá niêm yết của nhà nước"
    ],
    answer: 0
  },
  {
    id: 14,
    question: "Tìm, phân tích nhược điểm của căn nhà để làm gì?",
    options: [
      "Để báo cho khách biết các nhược điểm.",
      "Để lên phương án xử lý tư vấn nếu khách lo ngại vấn đề đó.",
      "Để không bán nhà có nhược điểm, tránh mất công.",
      "Để hạ giá chủ nhà"
    ],
    answer: 1
  },
  {
    id: 15,
    question: "Chúng ta cần hiểu sâu Pháp lý Bất động sản để làm gì?",
    options: [
      "Chuyển đổi đất nông nghiệp sang đất ở cho khách hàng.",
      "Đứng ra kiện cáo giúp khách khi khách nhờ.",
      "Tư vấn khách, chủ hiểu luật và hỗ trợ khách, chủ giao dịch thuận lợi, đúng quy định của Pháp luật.",
      "Để thay thế luật sư khi tranh chấp"
    ],
    answer: 2
  },
  {
    id: 16,
    question: "Môi giới giỏi Đàm phán để làm gì?",
    options: [
      "Để đàm phán Hoa hồng với chủ nhà.",
      "Đàm phán với chủ, đàm phán với khách, hỗ trợ khách và chủ đi đến thống nhất chung, đàm phán với nhau thuận lợi, thành công.",
      "Cả 2 ý trên đều đúng.",
      "Để ép giá chủ nhà tối đa"
    ],
    answer: 2
  },
  {
    id: 17,
    question: "Đâu là trình tự đúng của khách hàng khi tìm kiếm tin đăng?",
    options: [
      "Khách gọi -> Khách truy cập -> Khách xem tin",
      "Khách xem tin -> Khách truy cập -> Khách gọi",
      "Khách gọi -> Khách xem tin -> Khách truy cập",
      "Khách truy cập -> Khách xem tin -> Khách gọi"
    ],
    answer: 3
  },
  {
    id: 18,
    question: "Trong các yếu tố quyết định hiệu quả của tin đăng, đâu là yếu tố quan trọng nhất?",
    options: [
      "Tiêu đề",
      "Hình ảnh đại diện",
      "Thông số (diện tích, giá tiền)",
      "Nội dung mô tả chi tiết."
    ],
    answer: 0
  },
  {
    id: 19,
    question: "Nội dung tin đăng chuẩn 3 Th bao gồm những yếu tố nào?",
    options: [
      "Thật - Thường - Thơm",
      "Thật - Thơm - Thiếu",
      "Thật - Thách - Thơm",
      "Thật - Thương - Thơm"
    ],
    answer: 1
  },
  {
    id: 20,
    question: "Phương pháp đăng \"Phủ\" nên có số lượng tin trong khoảng bao nhiêu để đạt hiệu quả?",
    options: [
      "10-20 tin",
      "20-30 tin",
      "30-50 tin",
      "Trên 100 tin"
    ],
    answer: 3
  },
  {
    id: 21,
    question: "Đăng tin \"chim mồi\" là gì?",
    options: [
      "Là đăng các căn nhà thực tế mình dẫn vào để chốt",
      "Là đăng căn nhà xấu để khách đỡ ảo tưởng",
      "Là đăng các căn nhà rộng rẻ nhưng có lỗi để hút khách",
      "Là đăng các căn nhà ảo không có thật"
    ],
    answer: 2
  },
  {
    id: 22,
    question: "Tư duy SAI khi chọn nhà để chào khách hàng?",
    options: [
      "Làm bạn với khách",
      "Xác định rõ mục tiêu mua nhà của khách",
      "Nắm rõ nhu cầu cần thiết về căn nhà của khách cần",
      "Chào căn nhà mà khách hỏi trong tin đăng của bạn"
    ],
    answer: 3
  },
  {
    id: 23,
    question: "Cuộc điện thoại với khách hàng nên kéo dài bao lâu để đạt hiệu quả tốt nhất?",
    options: [
      "30 giây",
      "1 phút",
      "3 phút",
      "Càng dài càng tốt"
    ],
    answer: 2
  },
  {
    id: 24,
    question: "Tiêu đề quyết định bao nhiêu % sự thành công của tin đăng?",
    options: [
      "Không ảnh hưởng đến hiệu quả tin đăng",
      "Tiêu đề quyết định 30% sự thành công",
      "Có quyết định nhưng không đáng kể",
      "Tiêu đề quyết định 70-80% sự thành công."
    ],
    answer: 3
  },
  {
    id: 25,
    question: "Những lưu ý nào KHÔNG nên khi triển khai tin đăng lên mạng?",
    options: [
      "Số nhà, địa chỉ chính xác",
      "Lỗi phong thủy",
      "Hình ảnh sổ đỏ rõ nét",
      "Tất cả các đáp án trên"
    ],
    answer: 3
  },
  {
    id: 26,
    question: "Mục tiêu quan trọng nhất của cuộc điện thoại đầu tiên với khách hàng là gì?",
    options: [
      "Bán được căn nhà ngay lập tức",
      "Thiết lập được cuộc hẹn gặp trực tiếp và khai thác nhu cầu",
      "Báo địa chỉ chính xác cho khách tự đi xem",
      "Thương lượng giá cả với khách"
    ],
    answer: 1
  },
  {
    id: 27,
    question: "Khách đòi tự đi xem vị trí trước rồi ưng mới gọi Môi giới dẫn vào xem trong. Cách xử lý chuẩn?",
    options: [
      "Cho khách địa chỉ chính xác",
      "Cho địa chỉ và số điện thoại chủ nhà",
      "Không cung cấp địa chỉ, khéo léo hẹn khách đi xem trực tiếp để tư vấn tiện ích và chuẩn bị nhiều phương án nhà phù hợp",
      "Từ chối làm việc với khách"
    ],
    answer: 2
  },
  {
    id: 28,
    question: "Khách chưa đi xem nhà nhưng đòi xem sổ đỏ trước qua điện thoại/Zalo. Cách xử lý?",
    options: [
      "Gửi đầy đủ hình ảnh sổ đỏ nét cho khách",
      "Hẹn khách đi xem thực tế, nếu ưng vị trí và thiết kế sẽ báo chủ nhà cho xem sổ trực tiếp",
      "Không nghe máy nữa",
      "Báo khách chuyển cọc mới gửi sổ"
    ],
    answer: 1
  },
  {
    id: 29,
    question: "Trong 1 giao dịch BĐS thông thường, Thuế thu nhập cá nhân phải nộp là bao nhiêu %?",
    options: [
      "2%",
      "0.5%",
      "1%",
      "10%"
    ],
    answer: 0
  },
  {
    id: 30,
    question: "Trong 1 giao dịch BĐS thông thường, Phí trước bạ phải nộp là bao nhiêu %?",
    options: [
      "0.15%",
      "0.5%",
      "1%",
      "2%"
    ],
    answer: 1
  },
  {
    id: 31,
    question: "Theo quy định pháp luật hiện hành, thủ tục \"hoàn công\" là gì?",
    options: [
      "Bắt buộc trước khi chuyển nhượng nhà ở",
      "Bắt buộc khi vừa xây xong nhà",
      "Không bắt buộc và thực hiện theo yêu cầu của chủ sở hữu",
      "Do bên mua quyết định"
    ],
    answer: 2
  },
  {
    id: 32,
    question: "Theo quy trình 6 vòng dẫn khách, khâu định hướng và tư vấn giá thuộc vòng nào?",
    options: [
      "Vòng 1",
      "Vòng 2",
      "Vòng 3",
      "Vòng 4"
    ],
    answer: 3
  },
  {
    id: 33,
    question: "Những điểm chính nào cần đạt được để hoàn thành dẫn khách Vòng 1?",
    options: [
      "Thu thập bằng chứng dẫn khách, xem trong xem ngoài cẩn thận, tư vấn người nhà xem lại",
      "Thu thập bằng chứng dẫn khách, xác định người có quyền quyết, tư vấn giá",
      "Thu thập bằng chứng dẫn khách, xác định người có quyền quyết, xem trong và xem ngoài cẩn thận",
      "Thu thập bằng chứng dẫn khách, tư vấn pháp lý, tư vấn giá"
    ],
    answer: 2
  },
  {
    id: 34,
    question: "Khi đặt lịch hẹn khách đi xem nhà lần đầu, Môi giới nên hẹn gặp khách ở đâu?",
    options: [
      "Hẹn ngay trước cửa nhà đang bán",
      "Gần nhà bán, nơi thuận tiện dễ tìm nhưng không lộ địa chỉ nhà (quán trà đá, quán cafe, vỉa hè rộng...)",
      "Cho địa chỉ rồi đứng ở nhà chờ khách đến",
      "Mời khách về trụ sở công ty trước"
    ],
    answer: 1
  },
  {
    id: 35,
    question: "Khâu công chứng và thu hoa hồng thuộc vòng nào trong 6 vòng dẫn khách?",
    options: [
      "Vòng 3",
      "Vòng 4",
      "Vòng 5",
      "Vòng 6"
    ],
    answer: 3
  },
  {
    id: 36,
    question: "Sau khi dẫn khách đi xem nhà, Môi giới cần gửi báo cáo lên App/Web Thiên Khôi trong vòng bao lâu?",
    options: [
      "30 phút",
      "1 giờ",
      "12 giờ",
      "24 giờ"
    ],
    answer: 3
  },
  {
    id: 37,
    question: "Tầm quan trọng của việc ký phiếu Yêu cầu cung cấp dịch vụ (YCCCDV) là gì?",
    options: [
      "Bảo đảm quyền lợi của Chuyên viên",
      "Phòng tránh cắt cầu",
      "Nâng cao tính chuyên nghiệp của Môi giới và hỗ trợ thu hoa hồng",
      "Tất cả các đáp án trên"
    ],
    answer: 3
  },
  {
    id: 38,
    question: "Nếu khách đi xem nhà quên mang CCCD/CMND, hình thức nào sau đây có thể linh hoạt chấp nhận?",
    options: [
      "Dùng hình ảnh CCCD rõ nét lưu trong điện thoại hoặc nhờ người thân chụp gửi qua",
      "Tra cứu thông tin chính chủ SIM qua SMS TTTB gửi 1414 (nếu trùng tên khách)",
      "Cả A và B đều đúng",
      "Không đáp án nào đúng, bắt buộc hủy buổi xem nhà"
    ],
    answer: 2
  },
  {
    id: 39,
    question: "Khi đăng tin trên Facebook, nên TRÁNH điều gì để hạn chế bị giảm tương tác (bóp bóp bóp tương tác)?",
    options: [
      "Viết từ khóa nhạy cảm như \"Bán nhà\", \"Sổ đỏ\", \"Giá rẻ\" mà không chèn ký tự đặc biệt/hashtag",
      "Chỉ đăng 1 hình ảnh duy nhất",
      "Đăng quá ít bài trong tháng",
      "Tất cả các đáp án trên"
    ],
    answer: 3
  },
  {
    id: 40,
    question: "Đoạn thông số \"40/60 4 5 8.9 tỷ\" có nghĩa là gì?",
    options: [
      "Diện tích sổ 40m2, diện tích sử dụng 60m2, 4 tầng, mặt tiền 5m, giá chào 8.9 tỷ",
      "Diện tích sử dụng 40m2, diện tích sổ 60m2, 4m mặt tiền, 5 tầng, giá 8.9 tỷ",
      "Diện tích sổ 40m2, ngõ 60cm, 4 phòng ngủ, mặt tiền 5m, giá 8.9 tỷ",
      "Diện tích 40m2, mặt tiền 6m, 4 tầng, 5 phòng, giá 8.9 tỷ"
    ],
    answer: 0
  },
  {
    id: 41,
    question: "Các nguồn thu nhập của một Đầu khách tại Thiên Khôi KHÔNG bao gồm khoản nào?",
    options: [
      "Hoa hồng khi chốt nhà",
      "Hoa hồng nguồn gửi Hội đồng Thẩm định",
      "Hoa hồng giới thiệu nhân sự",
      "Lương cứng hàng tháng cố định"
    ],
    answer: 3
  },
  {
    id: 42,
    question: "Nội quy về trang phục và tác phong khi lên các Trụ sở của Thiên Khôi Group?",
    options: [
      "Mặc tự do, dép lê, áo may ba",
      "Đeo thẻ thành viên, trang phục lịch sự, văn minh",
      "Mặc đồng phục vest bắt buộc 100% tất cả các ngày",
      "Không có quy định"
    ],
    answer: 1
  },
  {
    id: 43,
    question: "Đâu là 3 yếu tố quan trọng tạo nên một Môi giới Bất động sản thành công?",
    options: [
      "Kiến thức - Kỹ năng - Kinh nghiệm",
      "Mối quan hệ - Tiền bạc - May mắn",
      "Ngoại hình - Giỏi nói - Đặt cọc nhanh",
      "Bán hàng - Quảng cáo - Giảm giá"
    ],
    answer: 0
  },
  {
    id: 44,
    question: "Trong quy trình giao dịch Bất động sản, bước nộp hồ sơ kê khai sang tên diễn ra tại đâu?",
    options: [
      "Văn phòng Công chứng",
      "Sở Tài nguyên và Môi trường",
      "Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai cấp quận/huyện",
      "Ủy ban nhân dân phường/xã"
    ],
    answer: 2
  },
  {
    id: 45,
    question: "Khi khách hàng hỏi về tiền phí hoa hồng Môi giới do ai trả, câu trả lời chuẩn xác là gì?",
    options: [
      "Do bên mua trả hoàn toàn",
      "Do chủ nhà trả theo thỏa thuận hợp đồng, bên mua được hỗ trợ dịch vụ miễn phí 100%",
      "Chia đều 50/50 cho cả hai bên",
      "Khách mua phải trả thêm phí xem nhà"
    ],
    answer: 1
  },
  {
    id: 46,
    question: "Khi dẫn khách xem nhà ngoài đường gặp hàng xóm chê bai tiêu cực về căn nhà, Môi giới nên làm gì?",
    options: [
      "Tranh cãi gay gắt với hàng xóm ngay tại chỗ",
      "Bỏ cuộc và đưa khách đi căn khác ngay",
      "Rào trước với khách về việc hàng xóm trả giá không mua được nên tác động tiêu cực, đồng thời báo Đầu chủ để có phương án xử lý",
      "Đồng tình với hàng xóm để tạo niềm tin với khách"
    ],
    answer: 2
  },
  {
    id: 47,
    question: "Môi giới cần duy trì tần suất đăng tin như thế nào là tối ưu?",
    options: [
      "Rảnh lúc nào đăng lúc đó",
      "Duy trì đều đặn hàng ngày, ít nhất 2 tin/ngày",
      "1 tuần đăng 1 lần",
      "Chỉ đăng khi có nhà mới giá rẻ"
    ],
    answer: 1
  },
  {
    id: 48,
    question: "Mục đích chính của việc đăng tin Bất động sản là gì?",
    options: [
      "Chỉ để bán đúng căn nhà trong bài đăng",
      "Tìm kiếm khách hàng, xây dựng tệp khách hàng tiềm năng và nắm bắt nhu cầu",
      "Để đủ chỉ tiêu của công ty",
      "Để so sánh giá thị trường"
    ],
    answer: 1
  },
  {
    id: 49,
    question: "Trường hợp nào Môi giới được nhận hỗ trợ từ quỹ Bảo hiểm Nghiệp vụ của Thiên Khôi?",
    options: [
      "Nghỉ việc không làm môi giới nữa",
      "Làm chuẩn quy trình nhưng bị chủ/khách cắt cầu không thu được hoa hồng",
      "Dẫn khách nhưng khách không mua nhà",
      "Đăng tin nhưng không có khách gọi"
    ],
    answer: 1
  },
  {
    id: 50,
    question: "Điều kiện cần và đủ để một Học viên Thiên Khôi được công nhận lên Chuyên viên là gì?",
    options: [
      "Đạt bài thi sát hoạch và hoàn thành bài tập 200 link tin đăng chuẩn quy định",
      "Chỉ cần nộp tiền quỹ",
      "Có 1 giao dịch chốt nhà ngay trong tuần đầu",
      "Tham gia đủ 3 buổi học lý thuyết"
    ],
    answer: 0
  }
];