const STORAGE_KEY = "n5-kotoba-progress-v1";

const vocab = [
  w("watashi", "私", "わたし", "watashi", "tôi", "danh từ", "Con người", "私はベトナム人です。", "Tôi là người Việt Nam."),
  w("anata", "あなた", "あなた", "anata", "bạn", "đại từ", "Con người", "あなたは学生ですか。", "Bạn là học sinh phải không?"),
  w("hito", "人", "ひと", "hito", "người", "danh từ", "Con người", "あの人は先生です。", "Người kia là giáo viên."),
  w("sensei", "先生", "せんせい", "sensei", "giáo viên", "danh từ", "Con người", "先生に聞きます。", "Tôi hỏi giáo viên."),
  w("gakusei", "学生", "がくせい", "gakusei", "học sinh, sinh viên", "danh từ", "Con người", "兄は学生です。", "Anh trai tôi là sinh viên."),
  w("tomodachi", "友達", "ともだち", "tomodachi", "bạn bè", "danh từ", "Con người", "友達と行きます。", "Tôi đi cùng bạn."),
  w("chichi", "父", "ちち", "chichi", "bố tôi", "danh từ", "Con người", "父は会社員です。", "Bố tôi là nhân viên công ty."),
  w("haha", "母", "はは", "haha", "mẹ tôi", "danh từ", "Con người", "母は料理が好きです。", "Mẹ tôi thích nấu ăn."),
  w("kodomo", "子供", "こども", "kodomo", "trẻ em", "danh từ", "Con người", "子供が公園にいます。", "Có trẻ em ở công viên."),
  w("otoko", "男", "おとこ", "otoko", "nam giới", "danh từ", "Con người", "男の人が来ました。", "Một người đàn ông đã đến."),
  w("onna", "女", "おんな", "onna", "nữ giới", "danh từ", "Con người", "女の人は親切です。", "Người phụ nữ ấy tốt bụng."),
  w("kazoku", "家族", "かぞく", "kazoku", "gia đình", "danh từ", "Con người", "家族は四人です。", "Gia đình tôi có bốn người."),
  w("namae", "名前", "なまえ", "namae", "tên", "danh từ", "Con người", "名前を書いてください。", "Hãy viết tên."),

  w("ohayou", "おはよう", "おはよう", "ohayou", "chào buổi sáng", "cụm từ", "Chào hỏi", "おはようございます。", "Chào buổi sáng."),
  w("konnichiwa", "こんにちは", "こんにちは", "konnichiwa", "xin chào", "cụm từ", "Chào hỏi", "こんにちは、田中さん。", "Xin chào, anh Tanaka."),
  w("konbanwa", "こんばんは", "こんばんは", "konbanwa", "chào buổi tối", "cụm từ", "Chào hỏi", "こんばんは、元気ですか。", "Chào buổi tối, bạn khỏe không?"),
  w("arigatou", "ありがとう", "ありがとう", "arigatou", "cảm ơn", "cụm từ", "Chào hỏi", "ありがとうございます。", "Xin cảm ơn."),
  w("sumimasen", "すみません", "すみません", "sumimasen", "xin lỗi, làm phiền", "cụm từ", "Chào hỏi", "すみません、駅はどこですか。", "Xin lỗi, nhà ga ở đâu?"),
  w("onegaishimasu", "お願いします", "おねがいします", "onegaishimasu", "làm ơn, mong được giúp", "cụm từ", "Chào hỏi", "これをお願いします。", "Làm ơn cho tôi cái này."),
  w("sayounara", "さようなら", "さようなら", "sayounara", "tạm biệt", "cụm từ", "Chào hỏi", "先生、さようなら。", "Tạm biệt thầy cô."),
  w("hai", "はい", "はい", "hai", "vâng, có", "trạng từ", "Chào hỏi", "はい、そうです。", "Vâng, đúng vậy."),
  w("iie", "いいえ", "いいえ", "iie", "không", "trạng từ", "Chào hỏi", "いいえ、違います。", "Không, không phải."),

  w("ichi", "一", "いち", "ichi", "một", "số đếm", "Số đếm", "一つください。", "Cho tôi một cái."),
  w("ni", "二", "に", "ni", "hai", "số đếm", "Số đếm", "二人で行きます。", "Hai người cùng đi."),
  w("san", "三", "さん", "san", "ba", "số đếm", "Số đếm", "三時に会います。", "Tôi gặp lúc ba giờ."),
  w("yon", "四", "よん", "yon", "bốn", "số đếm", "Số đếm", "四月に日本へ行きます。", "Tôi đi Nhật vào tháng tư."),
  w("go", "五", "ご", "go", "năm", "số đếm", "Số đếm", "五分待ちます。", "Tôi đợi năm phút."),
  w("roku", "六", "ろく", "roku", "sáu", "số đếm", "Số đếm", "六時に起きます。", "Tôi dậy lúc sáu giờ."),
  w("nana", "七", "なな", "nana", "bảy", "số đếm", "Số đếm", "七人います。", "Có bảy người."),
  w("hachi", "八", "はち", "hachi", "tám", "số đếm", "Số đếm", "八月は暑いです。", "Tháng tám nóng."),
  w("kyuu", "九", "きゅう", "kyuu", "chín", "số đếm", "Số đếm", "九時から勉強します。", "Tôi học từ chín giờ."),
  w("juu", "十", "じゅう", "juu", "mười", "số đếm", "Số đếm", "十枚あります。", "Có mười tờ."),
  w("hyaku", "百", "ひゃく", "hyaku", "một trăm", "số đếm", "Số đếm", "百円です。", "Giá là một trăm yên."),
  w("sen", "千", "せん", "sen", "một nghìn", "số đếm", "Số đếm", "千円払います。", "Tôi trả một nghìn yên."),
  w("en", "円", "えん", "en", "yên", "danh từ", "Số đếm", "これは五百円です。", "Cái này là năm trăm yên."),
  w("ikura", "いくら", "いくら", "ikura", "bao nhiêu tiền", "nghi vấn", "Số đếm", "これはいくらですか。", "Cái này bao nhiêu tiền?"),

  w("kyou", "今日", "きょう", "kyou", "hôm nay", "danh từ", "Thời gian", "今日は休みです。", "Hôm nay là ngày nghỉ."),
  w("ashita", "明日", "あした", "ashita", "ngày mai", "danh từ", "Thời gian", "明日学校へ行きます。", "Ngày mai tôi đi học."),
  w("kinou", "昨日", "きのう", "kinou", "hôm qua", "danh từ", "Thời gian", "昨日映画を見ました。", "Hôm qua tôi xem phim."),
  w("asa", "朝", "あさ", "asa", "buổi sáng", "danh từ", "Thời gian", "朝ご飯を食べます。", "Tôi ăn sáng."),
  w("hiru", "昼", "ひる", "hiru", "buổi trưa", "danh từ", "Thời gian", "昼にパンを食べます。", "Buổi trưa tôi ăn bánh mì."),
  w("yoru", "夜", "よる", "yoru", "buổi tối, đêm", "danh từ", "Thời gian", "夜日本語を勉強します。", "Buổi tối tôi học tiếng Nhật."),
  w("ima", "今", "いま", "ima", "bây giờ", "danh từ", "Thời gian", "今何時ですか。", "Bây giờ là mấy giờ?"),
  w("mainichi", "毎日", "まいにち", "mainichi", "mỗi ngày", "danh từ", "Thời gian", "毎日水を飲みます。", "Mỗi ngày tôi uống nước."),
  w("toki", "時", "じ", "ji", "giờ", "hậu tố", "Thời gian", "今は七時です。", "Bây giờ là bảy giờ."),
  w("fun", "分", "ふん", "fun", "phút", "hậu tố", "Thời gian", "十分休みます。", "Tôi nghỉ mười phút."),
  w("getsuyoubi", "月曜日", "げつようび", "getsuyoubi", "thứ hai", "danh từ", "Thời gian", "月曜日にテストがあります。", "Thứ hai có bài kiểm tra."),
  w("nichiyoubi", "日曜日", "にちようび", "nichiyoubi", "chủ nhật", "danh từ", "Thời gian", "日曜日は休みです。", "Chủ nhật là ngày nghỉ."),

  w("nihon", "日本", "にほん", "nihon", "Nhật Bản", "danh từ", "Nơi chốn", "日本へ行きます。", "Tôi đi Nhật Bản."),
  w("betonamu", "ベトナム", "ベトナム", "betonamu", "Việt Nam", "danh từ", "Nơi chốn", "ベトナムから来ました。", "Tôi đến từ Việt Nam."),
  w("gakkou", "学校", "がっこう", "gakkou", "trường học", "danh từ", "Nơi chốn", "学校で勉強します。", "Tôi học ở trường."),
  w("eki", "駅", "えき", "eki", "nhà ga", "danh từ", "Nơi chốn", "駅まで歩きます。", "Tôi đi bộ đến nhà ga."),
  w("ie", "家", "いえ", "ie", "nhà", "danh từ", "Nơi chốn", "家に帰ります。", "Tôi về nhà."),
  w("heya", "部屋", "へや", "heya", "phòng", "danh từ", "Nơi chốn", "部屋はきれいです。", "Căn phòng sạch đẹp."),
  w("mise", "店", "みせ", "mise", "cửa hàng", "danh từ", "Nơi chốn", "店でお茶を買います。", "Tôi mua trà ở cửa hàng."),
  w("kaisha", "会社", "かいしゃ", "kaisha", "công ty", "danh từ", "Nơi chốn", "父は会社へ行きます。", "Bố tôi đi đến công ty."),
  w("toshokan", "図書館", "としょかん", "toshokan", "thư viện", "danh từ", "Nơi chốn", "図書館で本を読みます。", "Tôi đọc sách ở thư viện."),
  w("byouin", "病院", "びょういん", "byouin", "bệnh viện", "danh từ", "Nơi chốn", "病院へ行きました。", "Tôi đã đi bệnh viện."),
  w("koko", "ここ", "ここ", "koko", "ở đây", "đại từ", "Nơi chốn", "ここは教室です。", "Đây là phòng học."),
  w("soko", "そこ", "そこ", "soko", "ở đó", "đại từ", "Nơi chốn", "そこに鞄があります。", "Có cái cặp ở đó."),
  w("asoko", "あそこ", "あそこ", "asoko", "ở kia", "đại từ", "Nơi chốn", "あそこに駅があります。", "Ở kia có nhà ga."),
  w("ue", "上", "うえ", "ue", "trên", "danh từ", "Nơi chốn", "机の上に本があります。", "Có sách trên bàn."),
  w("shita", "下", "した", "shita", "dưới", "danh từ", "Nơi chốn", "椅子の下に靴があります。", "Có giày dưới ghế."),
  w("naka", "中", "なか", "naka", "bên trong", "danh từ", "Nơi chốn", "鞄の中に財布があります。", "Trong cặp có ví."),
  w("mae", "前", "まえ", "mae", "phía trước", "danh từ", "Nơi chốn", "駅の前で待ちます。", "Tôi đợi trước nhà ga."),
  w("ushiro", "後ろ", "うしろ", "ushiro", "phía sau", "danh từ", "Nơi chốn", "家の後ろに庭があります。", "Sau nhà có vườn."),

  w("hon", "本", "ほん", "hon", "sách", "danh từ", "Đồ vật", "本を読みます。", "Tôi đọc sách."),
  w("tsukue", "机", "つくえ", "tsukue", "bàn học, bàn làm việc", "danh từ", "Đồ vật", "机の上に電話があります。", "Có điện thoại trên bàn."),
  w("isu", "椅子", "いす", "isu", "ghế", "danh từ", "Đồ vật", "椅子に座ります。", "Tôi ngồi lên ghế."),
  w("kuruma", "車", "くるま", "kuruma", "xe hơi", "danh từ", "Đồ vật", "車で会社へ行きます。", "Tôi đi công ty bằng xe hơi."),
  w("densha", "電車", "でんしゃ", "densha", "tàu điện", "danh từ", "Đồ vật", "電車に乗ります。", "Tôi lên tàu điện."),
  w("mizu", "水", "みず", "mizu", "nước", "danh từ", "Đồ vật", "水を飲みます。", "Tôi uống nước."),
  w("ocha", "お茶", "おちゃ", "ocha", "trà", "danh từ", "Đồ vật", "お茶をください。", "Cho tôi trà."),
  w("gohan", "ご飯", "ごはん", "gohan", "cơm, bữa ăn", "danh từ", "Đồ vật", "ご飯を食べます。", "Tôi ăn cơm."),
  w("pan", "パン", "パン", "pan", "bánh mì", "danh từ", "Đồ vật", "朝パンを食べます。", "Buổi sáng tôi ăn bánh mì."),
  w("niku", "肉", "にく", "niku", "thịt", "danh từ", "Đồ vật", "肉が好きです。", "Tôi thích thịt."),
  w("sakana", "魚", "さかな", "sakana", "cá", "danh từ", "Đồ vật", "魚を買います。", "Tôi mua cá."),
  w("yasai", "野菜", "やさい", "yasai", "rau", "danh từ", "Đồ vật", "野菜は安いです。", "Rau thì rẻ."),
  w("kasa", "傘", "かさ", "kasa", "ô, dù", "danh từ", "Đồ vật", "傘を持ちます。", "Tôi mang ô."),
  w("kaban", "鞄", "かばん", "kaban", "cặp, túi xách", "danh từ", "Đồ vật", "鞄は新しいです。", "Cái cặp mới."),
  w("kutsu", "靴", "くつ", "kutsu", "giày", "danh từ", "Đồ vật", "靴を買いました。", "Tôi đã mua giày."),
  w("tokei", "時計", "とけい", "tokei", "đồng hồ", "danh từ", "Đồ vật", "時計を見ます。", "Tôi xem đồng hồ."),
  w("denwa", "電話", "でんわ", "denwa", "điện thoại", "danh từ", "Đồ vật", "母に電話します。", "Tôi gọi điện cho mẹ."),

  w("iku", "行く", "いく", "iku", "đi", "động từ", "Động từ", "学校へ行きます。", "Tôi đi đến trường."),
  w("kuru", "来る", "くる", "kuru", "đến", "động từ", "Động từ", "友達が来ます。", "Bạn tôi đến."),
  w("kaeru", "帰る", "かえる", "kaeru", "trở về", "động từ", "Động từ", "七時に帰ります。", "Tôi về lúc bảy giờ."),
  w("taberu", "食べる", "たべる", "taberu", "ăn", "động từ", "Động từ", "寿司を食べます。", "Tôi ăn sushi."),
  w("nomu", "飲む", "のむ", "nomu", "uống", "động từ", "Động từ", "水を飲みます。", "Tôi uống nước."),
  w("miru", "見る", "みる", "miru", "nhìn, xem", "động từ", "Động từ", "映画を見ます。", "Tôi xem phim."),
  w("kiku", "聞く", "きく", "kiku", "nghe, hỏi", "động từ", "Động từ", "音楽を聞きます。", "Tôi nghe nhạc."),
  w("yomu", "読む", "よむ", "yomu", "đọc", "động từ", "Động từ", "新聞を読みます。", "Tôi đọc báo."),
  w("kaku", "書く", "かく", "kaku", "viết", "động từ", "Động từ", "手紙を書きます。", "Tôi viết thư."),
  w("hanasu", "話す", "はなす", "hanasu", "nói chuyện", "động từ", "Động từ", "日本語を話します。", "Tôi nói tiếng Nhật."),
  w("kau", "買う", "かう", "kau", "mua", "động từ", "Động từ", "店で本を買います。", "Tôi mua sách ở cửa hàng."),
  w("suru", "する", "する", "suru", "làm", "động từ", "Động từ", "宿題をします。", "Tôi làm bài tập."),
  w("benkyou", "勉強する", "べんきょうする", "benkyou suru", "học", "động từ", "Động từ", "毎日勉強します。", "Tôi học mỗi ngày."),
  w("okiru", "起きる", "おきる", "okiru", "thức dậy", "động từ", "Động từ", "朝六時に起きます。", "Tôi thức dậy lúc sáu giờ sáng."),
  w("neru", "寝る", "ねる", "neru", "ngủ", "động từ", "Động từ", "夜十一時に寝ます。", "Tôi ngủ lúc mười một giờ đêm."),
  w("hataraku", "働く", "はたらく", "hataraku", "làm việc", "động từ", "Động từ", "会社で働きます。", "Tôi làm việc ở công ty."),
  w("yasumu", "休む", "やすむ", "yasumu", "nghỉ ngơi, nghỉ", "động từ", "Động từ", "日曜日に休みます。", "Tôi nghỉ vào chủ nhật."),
  w("au", "会う", "あう", "au", "gặp", "động từ", "Động từ", "友達に会います。", "Tôi gặp bạn."),
  w("matsu", "待つ", "まつ", "matsu", "đợi", "động từ", "Động từ", "駅で待ちます。", "Tôi đợi ở nhà ga."),
  w("noru", "乗る", "のる", "noru", "lên xe, lên tàu", "động từ", "Động từ", "電車に乗ります。", "Tôi lên tàu điện."),
  w("hairu", "入る", "はいる", "hairu", "vào", "động từ", "Động từ", "部屋に入ります。", "Tôi vào phòng."),
  w("deru", "出る", "でる", "deru", "ra, rời khỏi", "động từ", "Động từ", "家を出ます。", "Tôi ra khỏi nhà."),

  w("ookii", "大きい", "おおきい", "ookii", "to, lớn", "tính từ", "Tính từ", "この家は大きいです。", "Ngôi nhà này lớn."),
  w("chiisai", "小さい", "ちいさい", "chiisai", "nhỏ", "tính từ", "Tính từ", "小さい鞄を買います。", "Tôi mua cái cặp nhỏ."),
  w("atarashii", "新しい", "あたらしい", "atarashii", "mới", "tính từ", "Tính từ", "新しい靴です。", "Đây là đôi giày mới."),
  w("furui", "古い", "ふるい", "furui", "cũ", "tính từ", "Tính từ", "古い本を読みます。", "Tôi đọc một quyển sách cũ."),
  w("takai", "高い", "たかい", "takai", "đắt, cao", "tính từ", "Tính từ", "この時計は高いです。", "Cái đồng hồ này đắt."),
  w("yasui", "安い", "やすい", "yasui", "rẻ", "tính từ", "Tính từ", "野菜は安いです。", "Rau thì rẻ."),
  w("atsui", "暑い", "あつい", "atsui", "nóng", "tính từ", "Tính từ", "今日は暑いです。", "Hôm nay nóng."),
  w("samui", "寒い", "さむい", "samui", "lạnh", "tính từ", "Tính từ", "朝は寒いです。", "Buổi sáng lạnh."),
  w("oishii", "おいしい", "おいしい", "oishii", "ngon", "tính từ", "Tính từ", "ご飯はおいしいです。", "Cơm ngon."),
  w("isogashii", "忙しい", "いそがしい", "isogashii", "bận rộn", "tính từ", "Tính từ", "母は忙しいです。", "Mẹ tôi bận."),
  w("tanoshii", "楽しい", "たのしい", "tanoshii", "vui", "tính từ", "Tính từ", "日本語は楽しいです。", "Tiếng Nhật rất vui."),
  w("muzukashii", "難しい", "むずかしい", "muzukashii", "khó", "tính từ", "Tính từ", "漢字は難しいです。", "Kanji khó."),
  w("yasashii", "易しい", "やさしい", "yasashii", "dễ", "tính từ", "Tính từ", "この問題は易しいです。", "Câu hỏi này dễ."),
  w("ii", "良い", "いい", "ii", "tốt", "tính từ", "Tính từ", "今日は良い天気です。", "Hôm nay thời tiết tốt."),
  w("warui", "悪い", "わるい", "warui", "xấu, không tốt", "tính từ", "Tính từ", "天気が悪いです。", "Thời tiết xấu."),
  w("kirei", "きれい", "きれい", "kirei", "đẹp, sạch", "tính từ", "Tính từ", "部屋はきれいです。", "Căn phòng sạch đẹp."),
  w("shizuka", "静か", "しずか", "shizuka", "yên tĩnh", "tính từ", "Tính từ", "図書館は静かです。", "Thư viện yên tĩnh."),
  w("genki", "元気", "げんき", "genki", "khỏe, tràn đầy năng lượng", "tính từ", "Tính từ", "私は元気です。", "Tôi khỏe."),

  w("kore", "これ", "これ", "kore", "cái này", "đại từ", "Câu hỏi", "これは本です。", "Đây là sách."),
  w("sore", "それ", "それ", "sore", "cái đó", "đại từ", "Câu hỏi", "それは何ですか。", "Cái đó là gì?"),
  w("are", "あれ", "あれ", "are", "cái kia", "đại từ", "Câu hỏi", "あれは学校です。", "Kia là trường học."),
  w("dore", "どれ", "どれ", "dore", "cái nào", "nghi vấn", "Câu hỏi", "あなたの鞄はどれですか。", "Cặp của bạn là cái nào?"),
  w("kono", "この", "この", "kono", "này", "liên thể từ", "Câu hỏi", "この本は新しいです。", "Quyển sách này mới."),
  w("sono", "その", "その", "sono", "đó", "liên thể từ", "Câu hỏi", "その車は高いです。", "Chiếc xe đó đắt."),
  w("ano", "あの", "あの", "ano", "kia", "liên thể từ", "Câu hỏi", "あの人は先生です。", "Người kia là giáo viên."),
  w("nani", "何", "なに", "nani", "cái gì", "nghi vấn", "Câu hỏi", "これは何ですか。", "Đây là cái gì?"),
  w("dare", "誰", "だれ", "dare", "ai", "nghi vấn", "Câu hỏi", "あの人は誰ですか。", "Người kia là ai?"),
  w("doko", "どこ", "どこ", "doko", "ở đâu", "nghi vấn", "Câu hỏi", "駅はどこですか。", "Nhà ga ở đâu?"),
  w("itsu", "いつ", "いつ", "itsu", "khi nào", "nghi vấn", "Câu hỏi", "いつ日本へ行きますか。", "Khi nào bạn đi Nhật?"),
  w("totemo", "とても", "とても", "totemo", "rất", "trạng từ", "Câu hỏi", "この本はとても面白いです。", "Quyển sách này rất thú vị."),
  w("sukoshi", "少し", "すこし", "sukoshi", "một chút", "trạng từ", "Câu hỏi", "日本語が少し分かります。", "Tôi hiểu tiếng Nhật một chút."),
  w("takusan", "たくさん", "たくさん", "takusan", "nhiều", "trạng từ", "Câu hỏi", "本がたくさんあります。", "Có nhiều sách."),
  w("mada", "まだ", "まだ", "mada", "vẫn, chưa", "trạng từ", "Câu hỏi", "まだ終わりません。", "Vẫn chưa xong."),
  w("mou", "もう", "もう", "mou", "đã, nữa", "trạng từ", "Câu hỏi", "もう食べました。", "Tôi đã ăn rồi.")
];

vocab.push(
  ev("watakushi", "私", "わたくし", "watakushi", "tôi (lịch sự)", "đại từ", "Con người"),
  ev("boku", "僕", "ぼく", "boku", "tôi (nam, thân mật)", "đại từ", "Con người"),
  ev("watashitachi", "私たち", "わたしたち", "watashitachi", "chúng tôi", "đại từ", "Con người"),
  ev("karera", "彼ら", "かれら", "karera", "họ", "đại từ", "Con người"),
  ev("kare", "彼", "かれ", "kare", "anh ấy, bạn trai", "đại từ", "Con người"),
  ev("kanojo", "彼女", "かのじょ", "kanojo", "cô ấy, bạn gái", "đại từ", "Con người"),
  ev("minna", "みんな", "みんな", "minna", "mọi người", "đại từ", "Con người"),
  ev("minasan", "皆さん", "みなさん", "minasan", "mọi người (lịch sự)", "đại từ", "Con người"),
  ev("otousan", "お父さん", "おとうさん", "otousan", "bố, bố người khác", "danh từ", "Con người"),
  ev("okaasan", "お母さん", "おかあさん", "okaasan", "mẹ, mẹ người khác", "danh từ", "Con người"),
  ev("oniisan", "お兄さん", "おにいさん", "oniisan", "anh trai", "danh từ", "Con người"),
  ev("oneesan", "お姉さん", "おねえさん", "oneesan", "chị gái", "danh từ", "Con người"),
  ev("ani", "兄", "あに", "ani", "anh trai tôi", "danh từ", "Con người"),
  ev("ane", "姉", "あね", "ane", "chị gái tôi", "danh từ", "Con người"),
  ev("otouto", "弟", "おとうと", "otouto", "em trai", "danh từ", "Con người"),
  ev("imouto", "妹", "いもうと", "imouto", "em gái", "danh từ", "Con người"),
  ev("kyoudai", "兄弟", "きょうだい", "kyoudai", "anh chị em", "danh từ", "Con người"),
  ev("musuko", "息子", "むすこ", "musuko", "con trai", "danh từ", "Con người"),
  ev("musume", "娘", "むすめ", "musume", "con gái", "danh từ", "Con người"),
  ev("ojiisan", "おじいさん", "おじいさん", "ojiisan", "ông, cụ ông", "danh từ", "Con người"),
  ev("obaasan", "おばあさん", "おばあさん", "obaasan", "bà, cụ bà", "danh từ", "Con người"),
  ev("oji", "叔父", "おじ", "oji", "chú, bác, cậu", "danh từ", "Con người"),
  ev("oba", "叔母", "おば", "oba", "cô, dì, bác gái", "danh từ", "Con người"),
  ev("okusan", "奥さん", "おくさん", "okusan", "vợ người khác", "danh từ", "Con người"),
  ev("goshujin", "ご主人", "ごしゅじん", "goshujin", "chồng người khác", "danh từ", "Con người"),
  ev("shujin", "主人", "しゅじん", "shujin", "chồng tôi", "danh từ", "Con người"),
  ev("kanai", "家内", "かない", "kanai", "vợ tôi", "danh từ", "Con người"),
  ev("otokonoko", "男の子", "おとこのこ", "otoko no ko", "bé trai", "danh từ", "Con người"),
  ev("onnanoko", "女の子", "おんなのこ", "onna no ko", "bé gái", "danh từ", "Con người"),
  ev("akachan", "赤ちゃん", "あかちゃん", "akachan", "em bé", "danh từ", "Con người"),
  ev("gaikokujin", "外国人", "がいこくじん", "gaikokujin", "người nước ngoài", "danh từ", "Con người"),
  ev("ryuugakusei", "留学生", "りゅうがくせい", "ryuugakusei", "du học sinh", "danh từ", "Con người"),
  ev("kaishain", "会社員", "かいしゃいん", "kaishain", "nhân viên công ty", "danh từ", "Con người"),
  ev("isha", "医者", "いしゃ", "isha", "bác sĩ", "danh từ", "Con người"),
  ev("keikan", "警官", "けいかん", "keikan", "cảnh sát", "danh từ", "Con người"),
  ev("tenin", "店員", "てんいん", "tenin", "nhân viên cửa hàng", "danh từ", "Con người"),
  ev("shachou", "社長", "しゃちょう", "shachou", "giám đốc", "danh từ", "Con người"),

  ev("hajimemashite", "初めまして", "はじめまして", "hajimemashite", "rất vui được gặp lần đầu", "cụm từ", "Chào hỏi"),
  ev("douzo", "どうぞ", "どうぞ", "douzo", "xin mời", "cụm từ", "Chào hỏi"),
  ev("yoroshiku", "よろしく", "よろしく", "yoroshiku", "mong được giúp đỡ", "cụm từ", "Chào hỏi"),
  ev("itadakimasu", "いただきます", "いただきます", "itadakimasu", "mời ăn, tôi xin nhận", "cụm từ", "Chào hỏi"),
  ev("gochisousama", "ごちそうさま", "ごちそうさま", "gochisousama", "cảm ơn vì bữa ăn", "cụm từ", "Chào hỏi"),
  ev("tadaima", "ただいま", "ただいま", "tadaima", "tôi về rồi", "cụm từ", "Chào hỏi"),
  ev("okaerinasai", "お帰りなさい", "おかえりなさい", "okaerinasai", "mừng bạn về nhà", "cụm từ", "Chào hỏi"),
  ev("oyasuminasai", "お休みなさい", "おやすみなさい", "oyasuminasai", "chúc ngủ ngon", "cụm từ", "Chào hỏi"),
  ev("moshimoshi", "もしもし", "もしもし", "moshi moshi", "a lô", "cụm từ", "Chào hỏi"),
  ev("shitsureishimasu", "失礼します", "しつれいします", "shitsurei shimasu", "xin phép, xin thất lễ", "cụm từ", "Chào hỏi"),
  ev("omedetou", "おめでとう", "おめでとう", "omedetou", "chúc mừng", "cụm từ", "Chào hỏi"),
  ev("dewamata", "ではまた", "ではまた", "dewa mata", "hẹn gặp lại", "cụm từ", "Chào hỏi"),

  ev("rei", "零", "れい", "rei", "không, số 0", "số đếm", "Số đếm"),
  ev("zero", "ゼロ", "ゼロ", "zero", "số 0", "số đếm", "Số đếm"),
  ev("nan", "何", "なん", "nan", "mấy, bao nhiêu", "nghi vấn", "Số đếm"),
  ev("juuichi", "十一", "じゅういち", "juuichi", "mười một", "số đếm", "Số đếm"),
  ev("juuni", "十二", "じゅうに", "juuni", "mười hai", "số đếm", "Số đếm"),
  ev("nijuu", "二十", "にじゅう", "nijuu", "hai mươi", "số đếm", "Số đếm"),
  ev("sanjuu", "三十", "さんじゅう", "sanjuu", "ba mươi", "số đếm", "Số đếm"),
  ev("yonjuu", "四十", "よんじゅう", "yonjuu", "bốn mươi", "số đếm", "Số đếm"),
  ev("gojuu", "五十", "ごじゅう", "gojuu", "năm mươi", "số đếm", "Số đếm"),
  ev("rokujuu", "六十", "ろくじゅう", "rokujuu", "sáu mươi", "số đếm", "Số đếm"),
  ev("nanajuu", "七十", "ななじゅう", "nanajuu", "bảy mươi", "số đếm", "Số đếm"),
  ev("hachijuu", "八十", "はちじゅう", "hachijuu", "tám mươi", "số đếm", "Số đếm"),
  ev("kyuujuu", "九十", "きゅうじゅう", "kyuujuu", "chín mươi", "số đếm", "Số đếm"),
  ev("man", "万", "まん", "man", "mười nghìn", "số đếm", "Số đếm"),
  ev("hitotsu", "一つ", "ひとつ", "hitotsu", "một cái", "số đếm", "Số đếm"),
  ev("futatsu", "二つ", "ふたつ", "futatsu", "hai cái", "số đếm", "Số đếm"),
  ev("mittsu", "三つ", "みっつ", "mittsu", "ba cái", "số đếm", "Số đếm"),
  ev("yottsu", "四つ", "よっつ", "yottsu", "bốn cái", "số đếm", "Số đếm"),
  ev("itsutsu", "五つ", "いつつ", "itsutsu", "năm cái", "số đếm", "Số đếm"),
  ev("muttsu", "六つ", "むっつ", "muttsu", "sáu cái", "số đếm", "Số đếm"),
  ev("nanatsu", "七つ", "ななつ", "nanatsu", "bảy cái", "số đếm", "Số đếm"),
  ev("yattsu", "八つ", "やっつ", "yattsu", "tám cái", "số đếm", "Số đếm"),
  ev("kokonotsu", "九つ", "ここのつ", "kokonotsu", "chín cái", "số đếm", "Số đếm"),
  ev("too", "十", "とお", "too", "mười cái", "số đếm", "Số đếm"),
  ev("hitori", "一人", "ひとり", "hitori", "một người", "số đếm", "Số đếm"),
  ev("futari", "二人", "ふたり", "futari", "hai người", "số đếm", "Số đếm"),
  ev("nin_counter", "人", "にん", "nin", "người (đếm người)", "hậu tố", "Số đếm"),
  ev("mai_counter", "枚", "まい", "mai", "tờ, vật mỏng", "hậu tố", "Số đếm"),
  ev("ko_counter", "個", "こ", "ko", "cái, viên", "hậu tố", "Số đếm"),
  ev("hon_counter", "本", "ほん", "hon", "cây, chai, vật dài", "hậu tố", "Số đếm"),
  ev("satsu_counter", "冊", "さつ", "satsu", "quyển sách", "hậu tố", "Số đếm"),
  ev("dai_counter", "台", "だい", "dai", "máy, xe", "hậu tố", "Số đếm"),
  ev("kai_counter", "回", "かい", "kai", "lần", "hậu tố", "Số đếm"),
  ev("ban_counter", "番", "ばん", "ban", "số thứ tự", "hậu tố", "Số đếm"),
  ev("ikutsu", "いくつ", "いくつ", "ikutsu", "bao nhiêu cái, mấy tuổi", "nghi vấn", "Số đếm"),
  ev("nannin", "何人", "なんにん", "nannin", "mấy người", "nghi vấn", "Số đếm"),
  ev("nanji", "何時", "なんじ", "nanji", "mấy giờ", "nghi vấn", "Số đếm"),
  ev("nanpun", "何分", "なんぷん", "nanpun", "mấy phút", "nghi vấn", "Số đếm"),
  ev("nanmai", "何枚", "なんまい", "nanmai", "mấy tờ", "nghi vấn", "Số đếm"),
  ev("hanbun", "半分", "はんぶん", "hanbun", "một nửa", "danh từ", "Số đếm"),

  ev("ototoi", "一昨日", "おととい", "ototoi", "hôm kia", "danh từ", "Thời gian"),
  ev("asatte", "明後日", "あさって", "asatte", "ngày kia", "danh từ", "Thời gian"),
  ev("maiasa", "毎朝", "まいあさ", "maiasa", "mỗi sáng", "danh từ", "Thời gian"),
  ev("maiban", "毎晩", "まいばん", "maiban", "mỗi tối", "danh từ", "Thời gian"),
  ev("maishuu", "毎週", "まいしゅう", "maishuu", "mỗi tuần", "danh từ", "Thời gian"),
  ev("maitsuki", "毎月", "まいつき", "maitsuki", "mỗi tháng", "danh từ", "Thời gian"),
  ev("maitoshi", "毎年", "まいとし", "maitoshi", "mỗi năm", "danh từ", "Thời gian"),
  ev("senshuu", "先週", "せんしゅう", "senshuu", "tuần trước", "danh từ", "Thời gian"),
  ev("konshuu", "今週", "こんしゅう", "konshuu", "tuần này", "danh từ", "Thời gian"),
  ev("raishuu", "来週", "らいしゅう", "raishuu", "tuần sau", "danh từ", "Thời gian"),
  ev("sengetsu", "先月", "せんげつ", "sengetsu", "tháng trước", "danh từ", "Thời gian"),
  ev("kongetsu", "今月", "こんげつ", "kongetsu", "tháng này", "danh từ", "Thời gian"),
  ev("raigetsu", "来月", "らいげつ", "raigetsu", "tháng sau", "danh từ", "Thời gian"),
  ev("kyonen", "去年", "きょねん", "kyonen", "năm ngoái", "danh từ", "Thời gian"),
  ev("kotoshi", "今年", "ことし", "kotoshi", "năm nay", "danh từ", "Thời gian"),
  ev("rainen", "来年", "らいねん", "rainen", "năm sau", "danh từ", "Thời gian"),
  ev("shuumatsu", "週末", "しゅうまつ", "shuumatsu", "cuối tuần", "danh từ", "Thời gian"),
  ev("gozen", "午前", "ごぜん", "gozen", "buổi sáng, AM", "danh từ", "Thời gian"),
  ev("gogo", "午後", "ごご", "gogo", "buổi chiều, PM", "danh từ", "Thời gian"),
  ev("han", "半", "はん", "han", "rưỡi, nửa", "hậu tố", "Thời gian"),
  ev("yasumi", "休み", "やすみ", "yasumi", "ngày nghỉ, nghỉ ngơi", "danh từ", "Thời gian"),
  ev("haru", "春", "はる", "haru", "mùa xuân", "danh từ", "Thời gian"),
  ev("natsu", "夏", "なつ", "natsu", "mùa hè", "danh từ", "Thời gian"),
  ev("aki", "秋", "あき", "aki", "mùa thu", "danh từ", "Thời gian"),
  ev("fuyu", "冬", "ふゆ", "fuyu", "mùa đông", "danh từ", "Thời gian"),
  ev("toshi", "年", "とし", "toshi", "năm, tuổi", "danh từ", "Thời gian"),
  ev("nen", "年", "ねん", "nen", "năm (hậu tố)", "hậu tố", "Thời gian"),
  ev("tsuki", "月", "つき", "tsuki", "mặt trăng, tháng", "danh từ", "Thời gian"),
  ev("gatsu", "月", "がつ", "gatsu", "tháng (hậu tố)", "hậu tố", "Thời gian"),
  ev("hi", "日", "ひ", "hi", "ngày, mặt trời", "danh từ", "Thời gian"),
  ev("nichi", "日", "にち", "nichi", "ngày trong tháng", "hậu tố", "Thời gian"),
  ev("kayoubi", "火曜日", "かようび", "kayoubi", "thứ ba", "danh từ", "Thời gian"),
  ev("suiyoubi", "水曜日", "すいようび", "suiyoubi", "thứ tư", "danh từ", "Thời gian"),
  ev("mokuyoubi", "木曜日", "もくようび", "mokuyoubi", "thứ năm", "danh từ", "Thời gian"),
  ev("kinyoubi", "金曜日", "きんようび", "kinyoubi", "thứ sáu", "danh từ", "Thời gian"),
  ev("doyoubi", "土曜日", "どようび", "doyoubi", "thứ bảy", "danh từ", "Thời gian"),
  ev("ichigatsu", "一月", "いちがつ", "ichigatsu", "tháng một", "danh từ", "Thời gian"),
  ev("nigatsu", "二月", "にがつ", "nigatsu", "tháng hai", "danh từ", "Thời gian"),
  ev("sangatsu", "三月", "さんがつ", "sangatsu", "tháng ba", "danh từ", "Thời gian"),
  ev("shigatsu", "四月", "しがつ", "shigatsu", "tháng tư", "danh từ", "Thời gian"),
  ev("gogatsu", "五月", "ごがつ", "gogatsu", "tháng năm", "danh từ", "Thời gian"),
  ev("rokugatsu", "六月", "ろくがつ", "rokugatsu", "tháng sáu", "danh từ", "Thời gian"),
  ev("shichigatsu", "七月", "しちがつ", "shichigatsu", "tháng bảy", "danh từ", "Thời gian"),
  ev("hachigatsu", "八月", "はちがつ", "hachigatsu", "tháng tám", "danh từ", "Thời gian"),
  ev("kugatsu", "九月", "くがつ", "kugatsu", "tháng chín", "danh từ", "Thời gian"),
  ev("juugatsu", "十月", "じゅうがつ", "juugatsu", "tháng mười", "danh từ", "Thời gian"),
  ev("juuichigatsu", "十一月", "じゅういちがつ", "juuichigatsu", "tháng mười một", "danh từ", "Thời gian"),
  ev("juunigatsu", "十二月", "じゅうにがつ", "juunigatsu", "tháng mười hai", "danh từ", "Thời gian"),
  ev("tsuitachi", "一日", "ついたち", "tsuitachi", "ngày mùng một", "danh từ", "Thời gian"),
  ev("futsuka", "二日", "ふつか", "futsuka", "ngày mùng hai, hai ngày", "danh từ", "Thời gian"),
  ev("mikka", "三日", "みっか", "mikka", "ngày mùng ba, ba ngày", "danh từ", "Thời gian"),
  ev("yokka", "四日", "よっか", "yokka", "ngày mùng bốn, bốn ngày", "danh từ", "Thời gian"),
  ev("itsuka", "五日", "いつか", "itsuka", "ngày mùng năm, năm ngày", "danh từ", "Thời gian"),
  ev("muika", "六日", "むいか", "muika", "ngày mùng sáu, sáu ngày", "danh từ", "Thời gian"),
  ev("nanoka", "七日", "なのか", "nanoka", "ngày mùng bảy, bảy ngày", "danh từ", "Thời gian"),
  ev("youka", "八日", "ようか", "youka", "ngày mùng tám, tám ngày", "danh từ", "Thời gian"),
  ev("kokonoka", "九日", "ここのか", "kokonoka", "ngày mùng chín, chín ngày", "danh từ", "Thời gian"),
  ev("tooka", "十日", "とおか", "tooka", "ngày mùng mười, mười ngày", "danh từ", "Thời gian"),
  ev("hatsuka", "二十日", "はつか", "hatsuka", "ngày hai mươi, hai mươi ngày", "danh từ", "Thời gian"),

  ev("kuni", "国", "くに", "kuni", "đất nước", "danh từ", "Nơi chốn"),
  ev("machi", "町", "まち", "machi", "thị trấn, phố", "danh từ", "Nơi chốn"),
  ev("tokoro", "所", "ところ", "tokoro", "nơi, chỗ", "danh từ", "Nơi chốn"),
  ev("basho", "場所", "ばしょ", "basho", "địa điểm", "danh từ", "Nơi chốn"),
  ev("uchi", "うち", "うち", "uchi", "nhà, bên trong", "danh từ", "Nơi chốn"),
  ev("kochira", "こちら", "こちら", "kochira", "phía này, vị này", "đại từ", "Nơi chốn"),
  ev("sochira", "そちら", "そちら", "sochira", "phía đó", "đại từ", "Nơi chốn"),
  ev("achira", "あちら", "あちら", "achira", "phía kia", "đại từ", "Nơi chốn"),
  ev("dochira", "どちら", "どちら", "dochira", "phía nào, vị nào", "nghi vấn", "Nơi chốn"),
  ev("migi", "右", "みぎ", "migi", "bên phải", "danh từ", "Nơi chốn"),
  ev("hidari", "左", "ひだり", "hidari", "bên trái", "danh từ", "Nơi chốn"),
  ev("higashi", "東", "ひがし", "higashi", "phía đông", "danh từ", "Nơi chốn"),
  ev("nishi", "西", "にし", "nishi", "phía tây", "danh từ", "Nơi chốn"),
  ev("minami", "南", "みなみ", "minami", "phía nam", "danh từ", "Nơi chốn"),
  ev("kita", "北", "きた", "kita", "phía bắc", "danh từ", "Nơi chốn"),
  ev("tonari", "隣", "となり", "tonari", "bên cạnh", "danh từ", "Nơi chốn"),
  ev("yoko", "横", "よこ", "yoko", "bên cạnh, chiều ngang", "danh từ", "Nơi chốn"),
  ev("soba", "そば", "そば", "soba", "gần, cạnh", "danh từ", "Nơi chốn"),
  ev("soto", "外", "そと", "soto", "bên ngoài", "danh từ", "Nơi chốn"),
  ev("toilet", "トイレ", "トイレ", "toire", "nhà vệ sinh", "danh từ", "Nơi chốn"),
  ev("ofuro", "お風呂", "おふろ", "ofuro", "phòng tắm, bồn tắm", "danh từ", "Nơi chốn"),
  ev("daidokoro", "台所", "だいどころ", "daidokoro", "nhà bếp", "danh từ", "Nơi chốn"),
  ev("genkan", "玄関", "げんかん", "genkan", "lối vào nhà", "danh từ", "Nơi chốn"),
  ev("niwa", "庭", "にわ", "niwa", "vườn", "danh từ", "Nơi chốn"),
  ev("kouen", "公園", "こうえん", "kouen", "công viên", "danh từ", "Nơi chốn"),
  ev("kyoushitsu", "教室", "きょうしつ", "kyoushitsu", "phòng học", "danh từ", "Nơi chốn"),
  ev("shokudou", "食堂", "しょくどう", "shokudou", "nhà ăn", "danh từ", "Nơi chốn"),
  ev("kissaten", "喫茶店", "きっさてん", "kissaten", "quán cà phê", "danh từ", "Nơi chốn"),
  ev("resutoran", "レストラン", "レストラン", "resutoran", "nhà hàng", "danh từ", "Nơi chốn"),
  ev("depaato", "デパート", "デパート", "depaato", "trung tâm thương mại", "danh từ", "Nơi chốn"),
  ev("suupaa", "スーパー", "スーパー", "suupaa", "siêu thị", "danh từ", "Nơi chốn"),
  ev("yuubinkyoku", "郵便局", "ゆうびんきょく", "yuubinkyoku", "bưu điện", "danh từ", "Nơi chốn"),
  ev("ginkou", "銀行", "ぎんこう", "ginkou", "ngân hàng", "danh từ", "Nơi chốn"),
  ev("hoteru", "ホテル", "ホテル", "hoteru", "khách sạn", "danh từ", "Nơi chốn"),
  ev("kuukou", "空港", "くうこう", "kuukou", "sân bay", "danh từ", "Nơi chốn"),
  ev("basutei", "バス停", "バスてい", "basu tei", "trạm xe buýt", "danh từ", "Nơi chốn"),
  ev("daigaku", "大学", "だいがく", "daigaku", "đại học", "danh từ", "Nơi chốn"),
  ev("koukou", "高校", "こうこう", "koukou", "trường cấp ba", "danh từ", "Nơi chốn"),
  ev("chuugakkou", "中学校", "ちゅうがっこう", "chuugakkou", "trường cấp hai", "danh từ", "Nơi chốn"),
  ev("shougakkou", "小学校", "しょうがっこう", "shougakkou", "trường tiểu học", "danh từ", "Nơi chốn"),
  ev("jimusho", "事務所", "じむしょ", "jimusho", "văn phòng", "danh từ", "Nơi chốn"),
  ev("apaato", "アパート", "アパート", "apaato", "chung cư nhỏ", "danh từ", "Nơi chốn"),
  ev("biru", "ビル", "ビル", "biru", "tòa nhà", "danh từ", "Nơi chốn"),
  ev("michi", "道", "みち", "michi", "đường", "danh từ", "Nơi chốn"),
  ev("kado", "角", "かど", "kado", "góc phố", "danh từ", "Nơi chốn"),
  ev("hashi_bridge", "橋", "はし", "hashi", "cây cầu", "danh từ", "Nơi chốn"),
  ev("kouban", "交番", "こうばん", "kouban", "đồn cảnh sát nhỏ", "danh từ", "Nơi chốn"),
  ev("taishikan", "大使館", "たいしかん", "taishikan", "đại sứ quán", "danh từ", "Nơi chốn"),
  ev("honya", "本屋", "ほんや", "honya", "hiệu sách", "danh từ", "Nơi chốn"),
  ev("panya", "パン屋", "パンや", "panya", "tiệm bánh mì", "danh từ", "Nơi chốn"),
  ev("eigakan", "映画館", "えいがかん", "eigakan", "rạp chiếu phim", "danh từ", "Nơi chốn"),

  ev("shinbun", "新聞", "しんぶん", "shinbun", "báo", "danh từ", "Đồ vật"),
  ev("zasshi", "雑誌", "ざっし", "zasshi", "tạp chí", "danh từ", "Đồ vật"),
  ev("jisho", "辞書", "じしょ", "jisho", "từ điển", "danh từ", "Đồ vật"),
  ev("nooto", "ノート", "ノート", "nooto", "vở", "danh từ", "Đồ vật"),
  ev("pen", "ペン", "ペン", "pen", "bút", "danh từ", "Đồ vật"),
  ev("enpitsu", "鉛筆", "えんぴつ", "enpitsu", "bút chì", "danh từ", "Đồ vật"),
  ev("boorupen", "ボールペン", "ボールペン", "boorupen", "bút bi", "danh từ", "Đồ vật"),
  ev("kami_paper", "紙", "かみ", "kami", "giấy", "danh từ", "Đồ vật"),
  ev("tegami", "手紙", "てがみ", "tegami", "thư", "danh từ", "Đồ vật"),
  ev("hagaki", "葉書", "はがき", "hagaki", "bưu thiếp", "danh từ", "Đồ vật"),
  ev("kitte", "切手", "きって", "kitte", "tem", "danh từ", "Đồ vật"),
  ev("shashin", "写真", "しゃしん", "shashin", "ảnh", "danh từ", "Đồ vật"),
  ev("e_picture", "絵", "え", "e", "tranh", "danh từ", "Đồ vật"),
  ev("chizu", "地図", "ちず", "chizu", "bản đồ", "danh từ", "Đồ vật"),
  ev("terebi", "テレビ", "テレビ", "terebi", "tivi", "danh từ", "Đồ vật"),
  ev("rajio", "ラジオ", "ラジオ", "rajio", "radio", "danh từ", "Đồ vật"),
  ev("kamera", "カメラ", "カメラ", "kamera", "máy ảnh", "danh từ", "Đồ vật"),
  ev("pasokon", "パソコン", "パソコン", "pasokon", "máy tính cá nhân", "danh từ", "Đồ vật"),
  ev("doa", "ドア", "ドア", "doa", "cửa", "danh từ", "Đồ vật"),
  ev("mado", "窓", "まど", "mado", "cửa sổ", "danh từ", "Đồ vật"),
  ev("beddo", "ベッド", "ベッド", "beddo", "giường", "danh từ", "Đồ vật"),
  ev("teeburu", "テーブル", "テーブル", "teeburu", "bàn", "danh từ", "Đồ vật"),
  ev("denki", "電気", "でんき", "denki", "đèn, điện", "danh từ", "Đồ vật"),
  ev("reizouko", "冷蔵庫", "れいぞうこ", "reizouko", "tủ lạnh", "danh từ", "Đồ vật"),
  ev("eakon", "エアコン", "エアコン", "eakon", "máy lạnh", "danh từ", "Đồ vật"),
  ev("sara", "皿", "さら", "sara", "đĩa", "danh từ", "Đồ vật"),
  ev("koppu", "コップ", "コップ", "koppu", "cốc", "danh từ", "Đồ vật"),
  ev("hashi_chopsticks", "箸", "はし", "hashi", "đũa", "danh từ", "Đồ vật"),
  ev("supuun", "スプーン", "スプーン", "supuun", "thìa", "danh từ", "Đồ vật"),
  ev("naifu", "ナイフ", "ナイフ", "naifu", "dao", "danh từ", "Đồ vật"),
  ev("fooku", "フォーク", "フォーク", "fooku", "nĩa", "danh từ", "Đồ vật"),
  ev("saifu", "財布", "さいふ", "saifu", "ví tiền", "danh từ", "Đồ vật"),
  ev("kagi", "鍵", "かぎ", "kagi", "chìa khóa", "danh từ", "Đồ vật"),
  ev("okane", "お金", "おかね", "okane", "tiền", "danh từ", "Đồ vật"),
  ev("nimotsu", "荷物", "にもつ", "nimotsu", "hành lý", "danh từ", "Đồ vật"),
  ev("fuku", "服", "ふく", "fuku", "quần áo", "danh từ", "Đồ vật"),
  ev("shatsu", "シャツ", "シャツ", "shatsu", "áo sơ mi", "danh từ", "Đồ vật"),
  ev("uwagi", "上着", "うわぎ", "uwagi", "áo khoác", "danh từ", "Đồ vật"),
  ev("zubon", "ズボン", "ズボン", "zubon", "quần dài", "danh từ", "Đồ vật"),
  ev("sukaato", "スカート", "スカート", "sukaato", "váy", "danh từ", "Đồ vật"),
  ev("kutsushita", "靴下", "くつした", "kutsushita", "tất, vớ", "danh từ", "Đồ vật"),
  ev("megane", "眼鏡", "めがね", "megane", "kính mắt", "danh từ", "Đồ vật"),
  ev("boushi", "帽子", "ぼうし", "boushi", "mũ", "danh từ", "Đồ vật"),
  ev("tabemono", "食べ物", "たべもの", "tabemono", "đồ ăn", "danh từ", "Ăn uống"),
  ev("nomimono", "飲み物", "のみもの", "nomimono", "đồ uống", "danh từ", "Ăn uống"),
  ev("asagohan", "朝ご飯", "あさごはん", "asagohan", "bữa sáng", "danh từ", "Ăn uống"),
  ev("hirugohan", "昼ご飯", "ひるごはん", "hirugohan", "bữa trưa", "danh từ", "Ăn uống"),
  ev("bangohan", "晩ご飯", "ばんごはん", "bangohan", "bữa tối", "danh từ", "Ăn uống"),
  ev("tamago", "卵", "たまご", "tamago", "trứng", "danh từ", "Ăn uống"),
  ev("kudamono", "果物", "くだもの", "kudamono", "trái cây", "danh từ", "Ăn uống"),
  ev("ringo", "りんご", "りんご", "ringo", "táo", "danh từ", "Ăn uống"),
  ev("mikan", "みかん", "みかん", "mikan", "quýt", "danh từ", "Ăn uống"),
  ev("banana", "バナナ", "バナナ", "banana", "chuối", "danh từ", "Ăn uống"),
  ev("gyuunyuu", "牛乳", "ぎゅうにゅう", "gyuunyuu", "sữa bò", "danh từ", "Ăn uống"),
  ev("koohii", "コーヒー", "コーヒー", "koohii", "cà phê", "danh từ", "Ăn uống"),
  ev("juusu", "ジュース", "ジュース", "juusu", "nước ép", "danh từ", "Ăn uống"),
  ev("biiru", "ビール", "ビール", "biiru", "bia", "danh từ", "Ăn uống"),
  ev("wain", "ワイン", "ワイン", "wain", "rượu vang", "danh từ", "Ăn uống"),
  ev("aisukuriimu", "アイスクリーム", "アイスクリーム", "aisukuriimu", "kem", "danh từ", "Ăn uống"),
  ev("okashi", "お菓子", "おかし", "okashi", "bánh kẹo", "danh từ", "Ăn uống"),
  ev("satou", "砂糖", "さとう", "satou", "đường", "danh từ", "Ăn uống"),
  ev("shio", "塩", "しお", "shio", "muối", "danh từ", "Ăn uống"),
  ev("shouyu", "醤油", "しょうゆ", "shouyu", "xì dầu", "danh từ", "Ăn uống"),
  ev("karee", "カレー", "カレー", "karee", "cà ri", "danh từ", "Ăn uống"),
  ev("sushi", "寿司", "すし", "sushi", "sushi", "danh từ", "Ăn uống"),
  ev("soba_food", "そば", "そば", "soba", "mì soba", "danh từ", "Ăn uống"),
  ev("udon", "うどん", "うどん", "udon", "mì udon", "danh từ", "Ăn uống"),
  ev("raamen", "ラーメン", "ラーメン", "raamen", "mì ramen", "danh từ", "Ăn uống"),
  ev("bentou", "弁当", "べんとう", "bentou", "cơm hộp", "danh từ", "Ăn uống"),
  ev("sarada", "サラダ", "サラダ", "sarada", "salad", "danh từ", "Ăn uống"),
  ev("toriniku", "鶏肉", "とりにく", "toriniku", "thịt gà", "danh từ", "Ăn uống"),
  ev("butaniku", "豚肉", "ぶたにく", "butaniku", "thịt heo", "danh từ", "Ăn uống"),
  ev("gyuuniku", "牛肉", "ぎゅうにく", "gyuuniku", "thịt bò", "danh từ", "Ăn uống"),

  ev("basu", "バス", "バス", "basu", "xe buýt", "danh từ", "Phương tiện"),
  ev("takushii", "タクシー", "タクシー", "takushii", "taxi", "danh từ", "Phương tiện"),
  ev("jitensha", "自転車", "じてんしゃ", "jitensha", "xe đạp", "danh từ", "Phương tiện"),
  ev("baiku", "バイク", "バイク", "baiku", "xe máy", "danh từ", "Phương tiện"),
  ev("hikouki", "飛行機", "ひこうき", "hikouki", "máy bay", "danh từ", "Phương tiện"),
  ev("fune", "船", "ふね", "fune", "tàu thuyền", "danh từ", "Phương tiện"),
  ev("chikatetsu", "地下鉄", "ちかてつ", "chikatetsu", "tàu điện ngầm", "danh từ", "Phương tiện"),
  ev("shinkansen", "新幹線", "しんかんせん", "shinkansen", "tàu cao tốc", "danh từ", "Phương tiện"),
  ev("kippu", "切符", "きっぷ", "kippu", "vé", "danh từ", "Phương tiện"),
  ev("noriba", "乗り場", "のりば", "noriba", "bến, nơi lên xe", "danh từ", "Phương tiện"),

  ev("nihongo", "日本語", "にほんご", "nihongo", "tiếng Nhật", "danh từ", "Trường học"),
  ev("eigo", "英語", "えいご", "eigo", "tiếng Anh", "danh từ", "Trường học"),
  ev("kanji", "漢字", "かんじ", "kanji", "chữ Hán", "danh từ", "Trường học"),
  ev("hiragana", "平仮名", "ひらがな", "hiragana", "chữ hiragana", "danh từ", "Trường học"),
  ev("katakana", "片仮名", "かたかな", "katakana", "chữ katakana", "danh từ", "Trường học"),
  ev("bunpou", "文法", "ぶんぽう", "bunpou", "ngữ pháp", "danh từ", "Trường học"),
  ev("kotoba", "言葉", "ことば", "kotoba", "từ ngữ, lời nói", "danh từ", "Trường học"),
  ev("tango", "単語", "たんご", "tango", "từ vựng", "danh từ", "Trường học"),
  ev("shukudai", "宿題", "しゅくだい", "shukudai", "bài tập về nhà", "danh từ", "Trường học"),
  ev("mondai", "問題", "もんだい", "mondai", "vấn đề, câu hỏi", "danh từ", "Trường học"),
  ev("shiken", "試験", "しけん", "shiken", "kỳ thi", "danh từ", "Trường học"),
  ev("tesuto", "テスト", "テスト", "tesuto", "bài kiểm tra", "danh từ", "Trường học"),
  ev("jugyou", "授業", "じゅぎょう", "jugyou", "tiết học", "danh từ", "Trường học"),
  ev("renshuu", "練習", "れんしゅう", "renshuu", "luyện tập", "danh từ", "Trường học"),
  ev("sakubun", "作文", "さくぶん", "sakubun", "bài văn", "danh từ", "Trường học"),

  ev("atama", "頭", "あたま", "atama", "đầu", "danh từ", "Cơ thể"),
  ev("kao", "顔", "かお", "kao", "mặt", "danh từ", "Cơ thể"),
  ev("me_eye", "目", "め", "me", "mắt", "danh từ", "Cơ thể"),
  ev("mimi", "耳", "みみ", "mimi", "tai", "danh từ", "Cơ thể"),
  ev("hana_nose", "鼻", "はな", "hana", "mũi", "danh từ", "Cơ thể"),
  ev("kuchi", "口", "くち", "kuchi", "miệng", "danh từ", "Cơ thể"),
  ev("ha_tooth", "歯", "は", "ha", "răng", "danh từ", "Cơ thể"),
  ev("te_hand", "手", "て", "te", "tay", "danh từ", "Cơ thể"),
  ev("ashi", "足", "あし", "ashi", "chân", "danh từ", "Cơ thể"),
  ev("karada", "体", "からだ", "karada", "cơ thể", "danh từ", "Cơ thể"),
  ev("onaka", "お腹", "おなか", "onaka", "bụng", "danh từ", "Cơ thể"),
  ev("senaka", "背中", "せなか", "senaka", "lưng", "danh từ", "Cơ thể"),
  ev("kubi", "首", "くび", "kubi", "cổ", "danh từ", "Cơ thể"),
  ev("nodo", "喉", "のど", "nodo", "cổ họng", "danh từ", "Cơ thể"),
  ev("kami_hair", "髪", "かみ", "kami", "tóc", "danh từ", "Cơ thể"),
  ev("byouki", "病気", "びょうき", "byouki", "bệnh", "danh từ", "Cơ thể"),
  ev("kusuri", "薬", "くすり", "kusuri", "thuốc", "danh từ", "Cơ thể"),
  ev("kaze_cold", "風邪", "かぜ", "kaze", "cảm lạnh", "danh từ", "Cơ thể"),

  ev("tenki", "天気", "てんき", "tenki", "thời tiết", "danh từ", "Thiên nhiên"),
  ev("ame", "雨", "あめ", "ame", "mưa", "danh từ", "Thiên nhiên"),
  ev("yuki", "雪", "ゆき", "yuki", "tuyết", "danh từ", "Thiên nhiên"),
  ev("kaze_wind", "風", "かぜ", "kaze", "gió", "danh từ", "Thiên nhiên"),
  ev("kumori", "曇り", "くもり", "kumori", "trời nhiều mây", "danh từ", "Thiên nhiên"),
  ev("sora", "空", "そら", "sora", "bầu trời", "danh từ", "Thiên nhiên"),
  ev("yama", "山", "やま", "yama", "núi", "danh từ", "Thiên nhiên"),
  ev("kawa", "川", "かわ", "kawa", "sông", "danh từ", "Thiên nhiên"),
  ev("umi", "海", "うみ", "umi", "biển", "danh từ", "Thiên nhiên"),
  ev("ike", "池", "いけ", "ike", "ao", "danh từ", "Thiên nhiên"),
  ev("hana_flower", "花", "はな", "hana", "hoa", "danh từ", "Thiên nhiên"),
  ev("ki_tree", "木", "き", "ki", "cây", "danh từ", "Thiên nhiên"),
  ev("sakura", "桜", "さくら", "sakura", "hoa anh đào", "danh từ", "Thiên nhiên"),
  ev("mori", "森", "もり", "mori", "rừng", "danh từ", "Thiên nhiên"),
  ev("dobutsu", "動物", "どうぶつ", "doubutsu", "động vật", "danh từ", "Thiên nhiên"),
  ev("inu", "犬", "いぬ", "inu", "chó", "danh từ", "Thiên nhiên"),
  ev("neko", "猫", "ねこ", "neko", "mèo", "danh từ", "Thiên nhiên"),
  ev("tori", "鳥", "とり", "tori", "chim", "danh từ", "Thiên nhiên"),
  ev("uma", "馬", "うま", "uma", "ngựa", "danh từ", "Thiên nhiên"),
  ev("ushi", "牛", "うし", "ushi", "bò", "danh từ", "Thiên nhiên"),
  ev("buta", "豚", "ぶた", "buta", "heo", "danh từ", "Thiên nhiên"),
  ev("iro", "色", "いろ", "iro", "màu sắc", "danh từ", "Thiên nhiên"),
  ev("aka", "赤", "あか", "aka", "màu đỏ", "danh từ", "Thiên nhiên"),
  ev("ao", "青", "あお", "ao", "màu xanh lam", "danh từ", "Thiên nhiên"),
  ev("shiro", "白", "しろ", "shiro", "màu trắng", "danh từ", "Thiên nhiên"),
  ev("kuro", "黒", "くろ", "kuro", "màu đen", "danh từ", "Thiên nhiên"),
  ev("kiiro", "黄色", "きいろ", "kiiro", "màu vàng", "danh từ", "Thiên nhiên"),
  ev("midori", "緑", "みどり", "midori", "màu xanh lá", "danh từ", "Thiên nhiên"),
  ev("chairo", "茶色", "ちゃいろ", "chairo", "màu nâu", "danh từ", "Thiên nhiên"),

  ev("aru", "ある", "ある", "aru", "có (đồ vật)", "động từ", "Động từ"),
  ev("iru", "いる", "いる", "iru", "có, ở (người/động vật)", "động từ", "Động từ"),
  ev("wakaru", "分かる", "わかる", "wakaru", "hiểu", "động từ", "Động từ"),
  ev("iu", "言う", "いう", "iu", "nói", "động từ", "Động từ"),
  ev("oshieru", "教える", "おしえる", "oshieru", "dạy, chỉ cho", "động từ", "Động từ"),
  ev("narau", "習う", "ならう", "narau", "học từ ai", "động từ", "Động từ"),
  ev("oboeru", "覚える", "おぼえる", "oboeru", "ghi nhớ", "động từ", "Động từ"),
  ev("wasureru", "忘れる", "わすれる", "wasureru", "quên", "động từ", "Động từ"),
  ev("hajimeru", "始める", "はじめる", "hajimeru", "bắt đầu", "động từ", "Động từ"),
  ev("owaru", "終わる", "おわる", "owaru", "kết thúc", "động từ", "Động từ"),
  ev("tsukau", "使う", "つかう", "tsukau", "sử dụng", "động từ", "Động từ"),
  ev("tsukuru", "作る", "つくる", "tsukuru", "làm, tạo ra", "động từ", "Động từ"),
  ev("uru", "売る", "うる", "uru", "bán", "động từ", "Động từ"),
  ev("morau", "もらう", "もらう", "morau", "nhận", "động từ", "Động từ"),
  ev("ageru", "あげる", "あげる", "ageru", "cho, tặng", "động từ", "Động từ"),
  ev("kariru", "借りる", "かりる", "kariru", "mượn, thuê", "động từ", "Động từ"),
  ev("kasu", "貸す", "かす", "kasu", "cho mượn", "động từ", "Động từ"),
  ev("kaesu", "返す", "かえす", "kaesu", "trả lại", "động từ", "Động từ"),
  ev("motsu", "持つ", "もつ", "motsu", "cầm, có", "động từ", "Động từ"),
  ev("oku", "置く", "おく", "oku", "đặt, để", "động từ", "Động từ"),
  ev("tatsu", "立つ", "たつ", "tatsu", "đứng", "động từ", "Động từ"),
  ev("suwaru", "座る", "すわる", "suwaru", "ngồi", "động từ", "Động từ"),
  ev("asobu", "遊ぶ", "あそぶ", "asobu", "chơi", "động từ", "Động từ"),
  ev("oyogu", "泳ぐ", "およぐ", "oyogu", "bơi", "động từ", "Động từ"),
  ev("hashiru", "走る", "はしる", "hashiru", "chạy", "động từ", "Động từ"),
  ev("aruku", "歩く", "あるく", "aruku", "đi bộ", "động từ", "Động từ"),
  ev("utau", "歌う", "うたう", "utau", "hát", "động từ", "Động từ"),
  ev("toru", "取る", "とる", "toru", "lấy, chụp", "động từ", "Động từ"),
  ev("tobu", "飛ぶ", "とぶ", "tobu", "bay", "động từ", "Động từ"),
  ev("tsukeru", "つける", "つける", "tsukeru", "bật, gắn, mặc phụ kiện", "động từ", "Động từ"),
  ev("kesu", "消す", "けす", "kesu", "tắt, xóa", "động từ", "Động từ"),
  ev("akeru", "開ける", "あける", "akeru", "mở", "động từ", "Động từ"),
  ev("shimeru", "閉める", "しめる", "shimeru", "đóng", "động từ", "Động từ"),
  ev("aku", "開く", "あく", "aku", "mở ra", "động từ", "Động từ"),
  ev("shimaru", "閉まる", "しまる", "shimaru", "đóng lại", "động từ", "Động từ"),
  ev("naru", "なる", "なる", "naru", "trở nên", "động từ", "Động từ"),
  ev("abiru", "浴びる", "あびる", "abiru", "tắm, dội", "động từ", "Động từ"),
  ev("arau", "洗う", "あらう", "arau", "rửa, giặt", "động từ", "Động từ"),
  ev("soujisuru", "掃除する", "そうじする", "souji suru", "dọn dẹp", "động từ", "Động từ"),
  ev("sentakusuru", "洗濯する", "せんたくする", "sentaku suru", "giặt giũ", "động từ", "Động từ"),
  ev("renshuusuru", "練習する", "れんしゅうする", "renshuu suru", "luyện tập", "động từ", "Động từ"),
  ev("ryokousuru", "旅行する", "りょこうする", "ryokou suru", "du lịch", "động từ", "Động từ"),
  ev("kekkonsuru", "結婚する", "けっこんする", "kekkon suru", "kết hôn", "động từ", "Động từ"),
  ev("untensuru", "運転する", "うんてんする", "unten suru", "lái xe", "động từ", "Động từ"),
  ev("denwasuru", "電話する", "でんわする", "denwa suru", "gọi điện", "động từ", "Động từ"),
  ev("shitsumonsuru", "質問する", "しつもんする", "shitsumon suru", "đặt câu hỏi", "động từ", "Động từ"),
  ev("sumu", "住む", "すむ", "sumu", "sống, cư trú", "động từ", "Động từ"),
  ev("tomaru", "泊まる", "とまる", "tomaru", "ở lại qua đêm", "động từ", "Động từ"),
  ev("kakeru", "かける", "かける", "kakeru", "gọi, treo, đeo", "động từ", "Động từ"),
  ev("kakaru", "かかる", "かかる", "kakaru", "mất thời gian/tiền", "động từ", "Động từ"),
  ev("isogu", "急ぐ", "いそぐ", "isogu", "vội", "động từ", "Động từ"),
  ev("tetsudau", "手伝う", "てつだう", "tetsudau", "giúp đỡ", "động từ", "Động từ"),
  ev("hiku", "弾く", "ひく", "hiku", "chơi nhạc cụ", "động từ", "Động từ"),
  ev("hajimaru", "始まる", "はじまる", "hajimaru", "bắt đầu", "động từ", "Động từ"),
  ev("wataru", "渡る", "わたる", "wataru", "băng qua", "động từ", "Động từ"),
  ev("magaru", "曲がる", "まがる", "magaru", "rẽ, cong", "động từ", "Động từ"),
  ev("norikaeru", "乗り換える", "のりかえる", "norikaeru", "chuyển tàu/xe", "động từ", "Động từ"),
  ev("oriru", "降りる", "おりる", "oriru", "xuống xe, xuống tàu", "động từ", "Động từ"),
  ev("sagasu", "探す", "さがす", "sagasu", "tìm kiếm", "động từ", "Động từ"),
  ev("shiru", "知る", "しる", "shiru", "biết", "động từ", "Động từ"),
  ev("yobu", "呼ぶ", "よぶ", "yobu", "gọi", "động từ", "Động từ"),
  ev("yameru", "やめる", "やめる", "yameru", "dừng, bỏ", "động từ", "Động từ"),
  ev("ireru", "入れる", "いれる", "ireru", "cho vào", "động từ", "Động từ"),
  ev("dasu", "出す", "だす", "dasu", "lấy ra, nộp", "động từ", "Động từ"),
  ev("dekiru", "できる", "できる", "dekiru", "có thể", "động từ", "Động từ"),
  ev("mieru", "見える", "みえる", "mieru", "có thể nhìn thấy", "động từ", "Động từ"),
  ev("kikoeru", "聞こえる", "きこえる", "kikoeru", "có thể nghe thấy", "động từ", "Động từ"),
  ev("kiru_clothes", "着る", "きる", "kiru", "mặc áo", "động từ", "Động từ"),
  ev("haku", "履く", "はく", "haku", "mang giày/quần", "động từ", "Động từ"),
  ev("kaburu", "被る", "かぶる", "kaburu", "đội mũ", "động từ", "Động từ"),
  ev("nugu", "脱ぐ", "ぬぐ", "nugu", "cởi đồ", "động từ", "Động từ"),

  ev("hayai", "早い", "はやい", "hayai", "sớm, nhanh", "tính từ", "Tính từ"),
  ev("osoi", "遅い", "おそい", "osoi", "muộn, chậm", "tính từ", "Tính từ"),
  ev("omoi", "重い", "おもい", "omoi", "nặng", "tính từ", "Tính từ"),
  ev("karui", "軽い", "かるい", "karui", "nhẹ", "tính từ", "Tính từ"),
  ev("nagai", "長い", "ながい", "nagai", "dài", "tính từ", "Tính từ"),
  ev("mijikai", "短い", "みじかい", "mijikai", "ngắn", "tính từ", "Tính từ"),
  ev("hiroi", "広い", "ひろい", "hiroi", "rộng", "tính từ", "Tính từ"),
  ev("semai", "狭い", "せまい", "semai", "hẹp", "tính từ", "Tính từ"),
  ev("tooi", "遠い", "とおい", "tooi", "xa", "tính từ", "Tính từ"),
  ev("chikai", "近い", "ちかい", "chikai", "gần", "tính từ", "Tính từ"),
  ev("tsuyoi", "強い", "つよい", "tsuyoi", "mạnh", "tính từ", "Tính từ"),
  ev("yowai", "弱い", "よわい", "yowai", "yếu", "tính từ", "Tính từ"),
  ev("akarui", "明るい", "あかるい", "akarui", "sáng sủa", "tính từ", "Tính từ"),
  ev("kurai", "暗い", "くらい", "kurai", "tối", "tính từ", "Tính từ"),
  ev("marui", "丸い", "まるい", "marui", "tròn", "tính từ", "Tính từ"),
  ev("amai", "甘い", "あまい", "amai", "ngọt", "tính từ", "Tính từ"),
  ev("karai", "辛い", "からい", "karai", "cay", "tính từ", "Tính từ"),
  ev("suzushii", "涼しい", "すずしい", "suzushii", "mát mẻ", "tính từ", "Tính từ"),
  ev("atatakai", "暖かい", "あたたかい", "atatakai", "ấm áp", "tính từ", "Tính từ"),
  ev("tsumetai", "冷たい", "つめたい", "tsumetai", "lạnh (đồ vật)", "tính từ", "Tính từ"),
  ev("omoshiroi", "面白い", "おもしろい", "omoshiroi", "thú vị", "tính từ", "Tính từ"),
  ev("tsumaranai", "つまらない", "つまらない", "tsumaranai", "chán", "tính từ", "Tính từ"),
  ev("kawaii", "かわいい", "かわいい", "kawaii", "dễ thương", "tính từ", "Tính từ"),
  ev("kowai", "怖い", "こわい", "kowai", "đáng sợ", "tính từ", "Tính từ"),
  ev("wakai", "若い", "わかい", "wakai", "trẻ", "tính từ", "Tính từ"),
  ev("hoshii", "欲しい", "ほしい", "hoshii", "muốn có", "tính từ", "Tính từ"),
  ev("itai", "痛い", "いたい", "itai", "đau", "tính từ", "Tính từ"),
  ev("nemui", "眠い", "ねむい", "nemui", "buồn ngủ", "tính từ", "Tính từ"),
  ev("abunai", "危ない", "あぶない", "abunai", "nguy hiểm", "tính từ", "Tính từ"),
  ev("urusai", "うるさい", "うるさい", "urusai", "ồn ào, phiền", "tính từ", "Tính từ"),
  ev("hosoi", "細い", "ほそい", "hosoi", "mảnh, gầy", "tính từ", "Tính từ"),
  ev("futoi", "太い", "ふとい", "futoi", "to, dày", "tính từ", "Tính từ"),
  ev("benri", "便利", "べんり", "benri", "tiện lợi", "tính từ", "Tính từ"),
  ev("fuben", "不便", "ふべん", "fuben", "bất tiện", "tính từ", "Tính từ"),
  ev("hima", "暇", "ひま", "hima", "rảnh rỗi", "tính từ", "Tính từ"),
  ev("jouzu", "上手", "じょうず", "jouzu", "giỏi, khéo", "tính từ", "Tính từ"),
  ev("heta", "下手", "へた", "heta", "kém, vụng", "tính từ", "Tính từ"),
  ev("suki", "好き", "すき", "suki", "thích", "tính từ", "Tính từ"),
  ev("kirai", "嫌い", "きらい", "kirai", "ghét, không thích", "tính từ", "Tính từ"),
  ev("daijoubu", "大丈夫", "だいじょうぶ", "daijoubu", "ổn, không sao", "tính từ", "Tính từ"),
  ev("nigiyaka", "賑やか", "にぎやか", "nigiyaka", "náo nhiệt", "tính từ", "Tính từ"),
  ev("yuumei", "有名", "ゆうめい", "yuumei", "nổi tiếng", "tính từ", "Tính từ"),
  ev("shinsetsu", "親切", "しんせつ", "shinsetsu", "tử tế", "tính từ", "Tính từ"),
  ev("kantan", "簡単", "かんたん", "kantan", "đơn giản", "tính từ", "Tính từ"),
  ev("taihen", "大変", "たいへん", "taihen", "vất vả, nghiêm trọng", "tính từ", "Tính từ"),
  ev("taisetsu", "大切", "たいせつ", "taisetsu", "quan trọng, quý giá", "tính từ", "Tính từ"),
  ev("anzen", "安全", "あんぜん", "anzen", "an toàn", "tính từ", "Tính từ"),
  ev("iroiro", "色々", "いろいろ", "iroiro", "nhiều loại", "tính từ", "Tính từ"),
  ev("akai", "赤い", "あかい", "akai", "đỏ", "tính từ", "Tính từ"),
  ev("aoi", "青い", "あおい", "aoi", "xanh lam", "tính từ", "Tính từ"),
  ev("shiroi", "白い", "しろい", "shiroi", "trắng", "tính từ", "Tính từ"),
  ev("kuroi", "黒い", "くろい", "kuroi", "đen", "tính từ", "Tính từ"),
  ev("kiiroi", "黄色い", "きいろい", "kiiroi", "vàng", "tính từ", "Tính từ"),

  ev("dou", "どう", "どう", "dou", "như thế nào", "nghi vấn", "Câu hỏi"),
  ev("doushite", "どうして", "どうして", "doushite", "tại sao", "nghi vấn", "Câu hỏi"),
  ev("naze", "なぜ", "なぜ", "naze", "vì sao", "nghi vấn", "Câu hỏi"),
  ev("donna", "どんな", "どんな", "donna", "như thế nào", "nghi vấn", "Câu hỏi"),
  ev("dono", "どの", "どの", "dono", "cái nào", "nghi vấn", "Câu hỏi"),
  ev("nande", "何で", "なんで", "nande", "bằng gì, tại sao", "nghi vấn", "Câu hỏi"),
  ev("donogurai", "どのくらい", "どのくらい", "dono kurai", "khoảng bao nhiêu", "nghi vấn", "Câu hỏi"),
  ev("itsumo", "いつも", "いつも", "itsumo", "luôn luôn", "trạng từ", "Câu hỏi"),
  ev("tokidoki", "時々", "ときどき", "tokidoki", "thỉnh thoảng", "trạng từ", "Câu hỏi"),
  ev("yoku_adv", "よく", "よく", "yoku", "thường, tốt", "trạng từ", "Câu hỏi"),
  ev("amari", "あまり", "あまり", "amari", "không... lắm", "trạng từ", "Câu hỏi"),
  ev("zenzen", "全然", "ぜんぜん", "zenzen", "hoàn toàn không", "trạng từ", "Câu hỏi"),
  ev("mata", "また", "また", "mata", "lại, nữa", "trạng từ", "Câu hỏi"),
  ev("soshite", "そして", "そして", "soshite", "và rồi", "liên từ", "Câu hỏi"),
  ev("sorekara", "それから", "それから", "sorekara", "sau đó", "liên từ", "Câu hỏi"),
  ev("demo", "でも", "でも", "demo", "nhưng", "liên từ", "Câu hỏi"),
  ev("dakara", "だから", "だから", "dakara", "vì vậy", "liên từ", "Câu hỏi"),
  ev("jaa", "じゃあ", "じゃあ", "jaa", "vậy thì", "liên từ", "Câu hỏi"),
  ev("sugu", "すぐ", "すぐ", "sugu", "ngay lập tức", "trạng từ", "Câu hỏi"),
  ev("hontou", "本当", "ほんとう", "hontou", "thật sự", "trạng từ", "Câu hỏi"),
  ev("chotto", "ちょっと", "ちょっと", "chotto", "một chút", "trạng từ", "Câu hỏi"),
  ev("yukkuri", "ゆっくり", "ゆっくり", "yukkuri", "chậm rãi", "trạng từ", "Câu hỏi"),
  ev("motto", "もっと", "もっと", "motto", "hơn nữa", "trạng từ", "Câu hỏi"),
  ev("ichiban", "一番", "いちばん", "ichiban", "nhất, số một", "trạng từ", "Câu hỏi"),
  ev("issho_ni", "一緒に", "いっしょに", "issho ni", "cùng nhau", "trạng từ", "Câu hỏi"),
  ev("hoka", "他", "ほか", "hoka", "khác", "danh từ", "Câu hỏi"),
  ev("kara_particle", "から", "から", "kara", "từ, vì", "trợ từ", "Ngữ pháp"),
  ev("made_particle", "まで", "まで", "made", "đến, cho tới", "trợ từ", "Ngữ pháp"),
  ev("yori_particle", "より", "より", "yori", "hơn, từ", "trợ từ", "Ngữ pháp"),
  ev("dake_particle", "だけ", "だけ", "dake", "chỉ", "trợ từ", "Ngữ pháp"),
  ev("shika_particle", "しか", "しか", "shika", "chỉ, ngoài ra không", "trợ từ", "Ngữ pháp"),
  ev("to_particle", "と", "と", "to", "và, với", "trợ từ", "Ngữ pháp"),
  ev("ya_particle", "や", "や", "ya", "và..., chẳng hạn", "trợ từ", "Ngữ pháp"),
  ev("mo_particle", "も", "も", "mo", "cũng", "trợ từ", "Ngữ pháp"),
  ev("ne_particle", "ね", "ね", "ne", "nhỉ, nhé", "trợ từ", "Ngữ pháp"),
  ev("yo_particle", "よ", "よ", "yo", "đấy, nhé", "trợ từ", "Ngữ pháp")
);

const topics = ["Tất cả", ...Array.from(new Set(vocab.map((item) => item.topic)))];
const els = {
  topicList: document.querySelector("#topicList"),
  searchInput: document.querySelector("#searchInput"),
  modeTabs: document.querySelector("#modeTabs"),
  panels: {
    study: document.querySelector("#studyPanel"),
    quiz: document.querySelector("#quizPanel"),
    list: document.querySelector("#listPanel")
  },
  totalCount: document.querySelector("#totalCount"),
  masteredCount: document.querySelector("#masteredCount"),
  dueCount: document.querySelector("#dueCount"),
  todayCount: document.querySelector("#todayCount"),
  goalRange: document.querySelector("#goalRange"),
  goalOutput: document.querySelector("#goalOutput"),
  goalBar: document.querySelector("#goalBar"),
  flashcard: document.querySelector("#flashcard"),
  cardTopic: document.querySelector("#cardTopic"),
  cardTerm: document.querySelector("#cardTerm"),
  cardKana: document.querySelector("#cardKana"),
  cardRomaji: document.querySelector("#cardRomaji"),
  cardMeaning: document.querySelector("#cardMeaning"),
  cardExampleJa: document.querySelector("#cardExampleJa"),
  cardExampleVi: document.querySelector("#cardExampleVi"),
  answerBlock: document.querySelector("#answerBlock"),
  speakBtn: document.querySelector("#speakBtn"),
  queueCount: document.querySelector("#queueCount"),
  queueStrip: document.querySelector("#queueStrip"),
  dailyBtn: document.querySelector("#dailyBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  quizDirection: document.querySelector("#quizDirection"),
  quizTopic: document.querySelector("#quizTopic"),
  quizQuestion: document.querySelector("#quizQuestion"),
  choices: document.querySelector("#choices"),
  quizScore: document.querySelector("#quizScore"),
  nextQuestionBtn: document.querySelector("#nextQuestionBtn"),
  listMeta: document.querySelector("#listMeta"),
  wordList: document.querySelector("#wordList"),
  resetBtn: document.querySelector("#resetBtn"),
  toast: document.querySelector("#toast")
};

let state = loadState();
let activeTopic = "Tất cả";
let activeMode = "study";
let queue = [];
let cardIndex = 0;
let answerVisible = true;
let quizDirection = "ja-vi";
let quizState = { current: null, answered: false, correct: 0, total: 0 };

init();

function w(id, term, kana, romaji, vi, type, topic, exampleJa, exampleVi) {
  return { id, term, kana, romaji, vi, type, topic, exampleJa, exampleVi };
}

function ev(id, term, kana, romaji, vi, type, topic, exampleJa, exampleVi) {
  return w(
    id,
    term,
    kana,
    romaji,
    vi,
    type,
    topic,
    exampleJa || `「${term}」を覚えます。`,
    exampleVi || `Ghi nhớ: ${vi}.`
  );
}

function init() {
  ensureToday();
  renderTopics();
  bindEvents();
  buildQueue();
  renderAll();
  nextQuizQuestion();
}

function bindEvents() {
  els.searchInput.addEventListener("input", () => {
    buildQueue();
    renderAll();
  });

  els.modeTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    setMode(button.dataset.mode);
  });

  els.goalRange.addEventListener("input", () => {
    state.goal = Number(els.goalRange.value);
    saveState();
    renderStats();
  });

  els.flashcard.addEventListener("click", () => {
    answerVisible = !answerVisible;
    renderCard();
  });

  els.flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      answerVisible = !answerVisible;
      renderCard();
    }
  });

  document.querySelector(".action-grid").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-grade]");
    if (!button || !queue.length) return;
    markWord(queue[cardIndex].id, button.dataset.grade);
    answerVisible = true;
    cardIndex = nextIndex();
    buildQueue(false);
    renderAll();
  });

  els.speakBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (queue[cardIndex]) speak(queue[cardIndex].kana);
  });

  els.shuffleBtn.addEventListener("click", () => {
    queue = shuffle([...queue]);
    cardIndex = 0;
    answerVisible = true;
    renderCard();
    renderQueue();
    toast("Đã trộn bộ thẻ.");
  });

  els.dailyBtn.addEventListener("click", () => {
    const due = filteredWords().filter(isDue);
    queue = due.length ? due : filteredWords();
    cardIndex = 0;
    answerVisible = true;
    setMode("study");
    renderAll();
    toast(due.length ? "Đã mở các từ cần ôn." : "Chưa có từ đến hạn, dùng bộ hiện tại.");
  });

  els.quizDirection.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-direction]");
    if (!button) return;
    quizDirection = button.dataset.direction;
    els.quizDirection.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    nextQuizQuestion();
  });

  els.choices.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-choice]");
    if (!button || quizState.answered) return;
    answerQuiz(button.dataset.choice);
  });

  els.nextQuestionBtn.addEventListener("click", nextQuizQuestion);

  els.resetBtn.addEventListener("click", () => {
    const ok = window.confirm("Đặt lại toàn bộ tiến độ học?");
    if (!ok) return;
    state = freshState();
    saveState();
    buildQueue();
    renderAll();
    nextQuizQuestion();
    toast("Đã đặt lại tiến độ.");
  });
}

function renderAll() {
  renderStats();
  renderCard();
  renderQueue();
  renderList();
}

function renderTopics() {
  els.topicList.innerHTML = topics
    .map((topic) => {
      const count = topic === "Tất cả" ? vocab.length : vocab.filter((item) => item.topic === topic).length;
      return `<button type="button" data-topic="${escapeAttr(topic)}">
        <span>${topic}</span><span>${count}</span>
      </button>`;
    })
    .join("");

  els.topicList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-topic]");
    if (!button) return;
    activeTopic = button.dataset.topic;
    buildQueue();
    renderTopicsActive();
    renderAll();
    nextQuizQuestion();
  });

  renderTopicsActive();
}

function renderTopicsActive() {
  els.topicList.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === activeTopic);
  });
}

function setMode(mode) {
  activeMode = mode;
  els.modeTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  Object.entries(els.panels).forEach(([name, panel]) => {
    panel.classList.toggle("active", name === mode);
  });
  if (mode === "quiz" && !quizState.current) nextQuizQuestion();
}

function renderStats() {
  const mastered = vocab.filter((word) => getProgress(word.id).status === "mastered").length;
  const due = vocab.filter(isDue).length;
  const reviewed = state.session.reviewed;
  const goal = state.goal;
  els.totalCount.textContent = vocab.length;
  els.masteredCount.textContent = mastered;
  els.dueCount.textContent = due;
  els.todayCount.textContent = `${Math.min(reviewed, goal)}/${goal}`;
  els.goalRange.value = goal;
  els.goalOutput.textContent = goal;
  els.goalBar.style.width = `${Math.min(100, Math.round((reviewed / goal) * 100))}%`;
}

function renderCard() {
  const word = queue[cardIndex];
  if (!word) {
    els.cardTopic.textContent = "N5";
    els.cardTerm.textContent = "休み";
    els.cardKana.textContent = "やすみ";
    els.cardRomaji.textContent = "yasumi";
    els.cardMeaning.textContent = "Không có từ phù hợp";
    els.cardExampleJa.textContent = "検索を変えてください。";
    els.cardExampleVi.textContent = "Hãy đổi bộ lọc.";
    els.answerBlock.classList.remove("hidden");
    return;
  }

  els.cardTopic.textContent = `${word.topic} · ${statusText(getProgress(word.id).status)}`;
  els.cardTerm.textContent = word.term;
  els.cardKana.textContent = word.kana;
  els.cardRomaji.textContent = word.romaji;
  els.cardMeaning.textContent = word.vi;
  els.cardExampleJa.textContent = word.exampleJa;
  els.cardExampleVi.textContent = word.exampleVi;
  els.answerBlock.classList.toggle("hidden", !answerVisible);
}

function renderQueue() {
  els.queueCount.textContent = queue.length;
  const items = queue.slice(0, 12);
  els.queueStrip.innerHTML = items
    .map((word, index) => {
      const progress = getProgress(word.id);
      return `<div class="queue-item ${index === cardIndex ? "active" : ""}">
        <strong>${word.term}</strong>
        <div><p>${word.vi}</p><span>${word.kana}</span></div>
        <span>${statusText(progress.status)}</span>
      </div>`;
    })
    .join("");
}

function renderList() {
  const words = filteredWords();
  els.listMeta.textContent = `${words.length} từ`;
  els.wordList.innerHTML = words
    .map((word) => {
      const progress = getProgress(word.id);
      return `<article class="word-row">
        <strong>${word.term}</strong>
        <div>
          <h3>${word.vi}</h3>
          <span>${word.kana} · ${word.romaji}</span>
        </div>
        <div>
          <h3>${word.topic}</h3>
          <span>${word.type}</span>
        </div>
        <button class="status-pill status-${progress.status}" type="button" data-list-grade="${word.id}">
          ${statusText(progress.status)}
        </button>
      </article>`;
    })
    .join("");

  els.wordList.querySelectorAll("button[data-list-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      const wordId = button.dataset.listGrade;
      const current = getProgress(wordId).status;
      const next = current === "new" ? "learning" : current === "learning" ? "mastered" : current === "mastered" ? "hard" : "learning";
      markWord(wordId, next, false);
      renderAll();
    });
  });
}

function nextQuizQuestion() {
  const pool = filteredWords().length >= 4 ? filteredWords() : vocab;
  const current = sample(pool);
  const answer = quizDirection === "ja-vi" ? current.vi : current.term;
  const wrongPool = pool.filter((word) => word.id !== current.id);
  const choices = shuffle([answer, ...shuffle(wrongPool).slice(0, 3).map((word) => (quizDirection === "ja-vi" ? word.vi : word.term))]);
  quizState.current = { word: current, answer, choices };
  quizState.answered = false;
  els.quizTopic.textContent = current.topic;
  els.quizQuestion.textContent = quizDirection === "ja-vi" ? current.term : current.vi;
  els.choices.innerHTML = choices
    .map((choice) => `<button class="choice-button" type="button" data-choice="${escapeAttr(choice)}">${choice}</button>`)
    .join("");
  renderQuizScore();
}

function answerQuiz(choice) {
  const isCorrect = choice === quizState.current.answer;
  quizState.answered = true;
  quizState.total += 1;
  if (isCorrect) quizState.correct += 1;

  markWord(quizState.current.word.id, isCorrect ? "mastered" : "hard");

  els.choices.querySelectorAll(".choice-button").forEach((button) => {
    const selected = button.dataset.choice === choice;
    const correct = button.dataset.choice === quizState.current.answer;
    button.disabled = true;
    button.classList.toggle("correct", correct);
    button.classList.toggle("wrong", selected && !correct);
  });
  renderStats();
  renderList();
  renderQuizScore();
}

function renderQuizScore() {
  els.quizScore.textContent = `${quizState.correct}/${quizState.total}`;
}

function buildQueue(resetIndex = true) {
  const words = filteredWords();
  const due = words.filter(isDue);
  const newWords = words.filter((word) => getProgress(word.id).status === "new");
  const rest = words.filter((word) => !due.includes(word) && !newWords.includes(word));
  queue = [...due, ...newWords, ...rest];
  if (resetIndex) cardIndex = 0;
  if (cardIndex >= queue.length) cardIndex = 0;
}

function filteredWords() {
  const query = normalize(els.searchInput.value);
  return vocab.filter((word) => {
    const topicOk = activeTopic === "Tất cả" || word.topic === activeTopic;
    const haystack = normalize([word.term, word.kana, word.romaji, word.vi, word.topic, word.type].join(" "));
    return topicOk && (!query || haystack.includes(query));
  });
}

function markWord(id, grade, countSession = true) {
  ensureToday();
  const progress = getProgress(id);
  const now = new Date().toISOString();
  progress.seen += 1;
  progress.last = now;

  if (grade === "hard") {
    progress.status = "hard";
    progress.wrong += 1;
    progress.interval = 1;
    progress.due = addDays(1);
  } else if (grade === "learning") {
    progress.status = "learning";
    progress.interval = Math.max(1, Math.min(3, progress.interval || 1));
    progress.due = addDays(progress.interval);
  } else {
    progress.status = "mastered";
    progress.correct += 1;
    progress.interval = progress.interval ? Math.min(30, Math.ceil(progress.interval * 1.7)) : 3;
    progress.due = addDays(progress.interval);
  }

  state.words[id] = progress;
  if (countSession) state.session.reviewed += 1;
  saveState();
}

function nextIndex() {
  if (!queue.length) return 0;
  return cardIndex + 1 >= queue.length ? 0 : cardIndex + 1;
}

function getProgress(id) {
  return {
    status: "new",
    seen: 0,
    correct: 0,
    wrong: 0,
    interval: 0,
    due: todayKey(),
    last: null,
    ...(state.words[id] || {})
  };
}

function isDue(word) {
  return getProgress(word.id).due <= todayKey();
}

function statusText(status) {
  return {
    new: "Mới",
    hard: "Khó",
    learning: "Đang học",
    mastered: "Đã nhớ"
  }[status];
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...freshState(), ...JSON.parse(raw) } : freshState();
  } catch {
    return freshState();
  }
}

function freshState() {
  return {
    goal: 20,
    session: { date: todayKey(), reviewed: 0 },
    words: {}
  };
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureToday() {
  if (!state.session || state.session.date !== todayKey()) {
    state.session = { date: todayKey(), reviewed: 0 };
    saveState();
  }
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalize(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function escapeAttr(value) {
  return value.toString().replace(/"/g, "&quot;");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("Trình duyệt chưa hỗ trợ phát âm.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}
