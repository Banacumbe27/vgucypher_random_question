/**
 * VGU CYPHER — Minimalist Question System
 * Strict Monochrome Engine with Password Lock, Animated NEXT Action & Hand-Drawn SVG Ticks/Crosses
 */

const MAIN_QUESTIONS_CSV = `question_title_en,question_title_vi,image,type,choice_1_en,choice_1_vi,choice_2_en,choice_2_vi,choice_3_en,choice_3_vi,choice_4_en,choice_4_vi,correct_answer_en,correct_answer_vi,ignore_ai
Which component primarily executes a computer's program instructions?,Thành phần nào chủ yếu thực thi các lệnh của chương trình máy tính?,,multiple choice,PSU,PSU,RAM,RAM,SSD,SSD,CPU,CPU,CPU,CPU,
What is the main role of RAM during normal computer use?,Vai trò chính của RAM trong quá trình sử dụng máy tính thông thường là gì?,,multiple choice,Hold active program data,Lưu dữ liệu của chương trình đang hoạt động,Store files without power,Lưu tệp khi không có điện,Execute arithmetic program instructions,Thực hiện các lệnh tính toán số học của chương trình,Supply electrical operating power,Cung cấp điện năng cho máy hoạt động,Hold active program data,Lưu dữ liệu của chương trình đang hoạt động,
How many bits make up one byte?,Một byte gồm bao nhiêu bit?,,multiple choice,16 bits,16 bit,8 bits,8 bit,4 bits,4 bit,32 bits,32 bit,8 bits,8 bit,
What is DNS mainly used for when opening a website?,"Khi mở một trang web, DNS chủ yếu được dùng để làm gì?",,multiple choice,Assigning a device's IP address,Gán địa chỉ IP cho thiết bị,Storing a browser's saved pages,Lưu các trang đã được trình duyệt lưu lại,Finding a domain's IP address,Tìm địa chỉ IP của tên miền,Encrypting a browser's web traffic,Mã hóa lưu lượng web của trình duyệt,Finding a domain's IP address,Tìm địa chỉ IP của tên miền,
Which item is an operating system?,Mục nào sau đây là một hệ điều hành?,,multiple choice,Windows,Windows,Python,Python,Chrome,Chrome,Word,Word,Windows,Windows,
Which storage device has no moving mechanical parts?,Thiết bị lưu trữ nào không có bộ phận cơ học chuyển động?,,multiple choice,HDD,HDD,DVD drive,Ổ đĩa DVD,Tape drive,Ổ băng từ,SSD,SSD,SSD,SSD,
Which pair lists all digits used in the binary number system?,Cặp nào liệt kê đầy đủ các chữ số được dùng trong hệ nhị phân?,,multiple choice,1 and 9,1 và 9,0 and 1,0 và 1,1 and 2,1 và 2,0 and 9,0 và 9,0 and 1,0 và 1,
What is the type of the literal 12 in Python 3?,Giá trị 12 thuộc kiểu dữ liệu nào trong Python 3?,,multiple choice,int,int,float,float,str,str,bool,bool,int,int,
Which symbol starts a comment in Python 3?,Ký hiệu nào bắt đầu một chú thích trong Python 3?,,multiple choice,--,--,//,//,#,#,/*,/*,#,#,
Which Python 3 literal is a string?,Giá trị nào sau đây là một chuỗi trong Python 3?,,multiple choice,25,25,2.5,2.5,True,True,"""25""","""25""","""25""","""25""",
What is binary 0110 in decimal?,Số nhị phân 0110 có giá trị bằng bao nhiêu trong hệ thập phân?,,multiple choice,8,8,6,6,4,4,12,12,6,6,
"You save a file to an SSD, then shut down normally. Where does the saved file remain?",Bạn lưu một tệp vào SSD rồi tắt máy đúng cách. Tệp đã lưu vẫn nằm ở đâu?,,multiple choice,ROM,ROM,CPU,CPU,RAM,RAM,SSD,SSD,SSD,SSD,
A browser asks a web server for a page. Which role does the browser play?,Một trình duyệt yêu cầu máy chủ web cung cấp một trang. Trình duyệt đóng vai trò gì?,,multiple choice,Server,Máy chủ (Server),Router,Bộ định tuyến (Router),Client,Máy khách (Client),Switch,Bộ chuyển mạch (Switch),Client,Máy khách (Client),
Which is a valid IPv4 address in dotted-decimal form?,Địa chỉ nào là địa chỉ IPv4 hợp lệ ở dạng thập phân phân tách bằng dấu chấm?,,multiple choice,192.168.1,192.168.1,192.168.1.5,192.168.1.5,192.168.1.5.2,192.168.1.5.2,192.168.1.300,192.168.1.300,192.168.1.5,192.168.1.5,
"What does this Python 3 code print?

x = 4
x = x + 3
print(x)","Đoạn mã Python 3 sau in ra kết quả gì?

x = 4
x = x + 3
print(x)",,multiple choice,4,4,43,43,7,7,3,3,7,7,
"What does this Python 3 code print?

def calculate(a, b):
    return a + b * 2

print(calculate(3, 4))","Đoạn mã Python 3 sau in ra kết quả gì?

def calculate(a, b):
    return a + b * 2

print(calculate(3, 4))",,multiple choice,7,7,14,14,10,10,11,11,11,11,
"What does this Python 3 code print?

print(not True, True or False)","Đoạn mã Python 3 sau in ra kết quả gì?

print(not True, True or False)",,multiple choice,True True,True True,True False,True False,False True,False True,False False,False False,False True,False True,
"What does this Python 3 code print?

print(7 // 2)","Đoạn mã Python 3 sau in ra kết quả gì?

print(7 // 2)",,multiple choice,1,1,3,3,3.5,3.5,4,4,3,3,
"What does this Python 3 code print?

numbers = [10, 20, 30]
print(numbers[1])","Đoạn mã Python 3 sau in ra kết quả gì?

numbers = [10, 20, 30]
print(numbers[1])",,multiple choice,20,20,1,1,10,10,30,30,20,20,
"What does this Python 3 code print?

total = 0
for n in range(1, 4):
    total += n
print(total)","Đoạn mã Python 3 sau in ra kết quả gì?

total = 0
for n in range(1, 4):
    total += n
print(total)",,multiple choice,6,6,10,10,3,3,4,4,6,6,
"What does this Python 3 code print?

a = [1, 2]
b = a
b[0] = 9
print(a)","Đoạn mã Python 3 sau in ra kết quả gì?

a = [1, 2]
b = a
b[0] = 9
print(a)",,multiple choice,"[1, 2]","[1, 2]","[9, 9]","[9, 9]","[9, 2]","[9, 2]","[1, 9]","[1, 9]","[9, 2]","[9, 2]",
"What does this Python 3 code print?

word = ""cat""
other = word
word = word + ""s""
print(other)","Đoạn mã Python 3 sau in ra kết quả gì?

word = ""cat""
other = word
word = word + ""s""
print(other)",,multiple choice,cat,cat,catcats,catcats,s,s,cats,cats,cat,cat,
"What does this Python 3 code print?

print(-7 // 2)","Đoạn mã Python 3 sau in ra kết quả gì?

print(-7 // 2)",,multiple choice,3,3,-4,-4,-3.5,-3.5,-3,-3,-4,-4,
"What does this Python 3 code print?

def add(a, b):
    total = a + b

print(add(2, 3))","Đoạn mã Python 3 sau in ra kết quả gì?

def add(a, b):
    total = a + b

print(add(2, 3))",,multiple choice,TypeError,TypeError,None,None,5,5,0,0,None,None,
"What does this Python 3 code print?

print(5 == ""5"", 5 == 5.0)","Đoạn mã Python 3 sau in ra kết quả gì?

print(5 == ""5"", 5 == 5.0)",,multiple choice,True False,True False,True True,True True,False False,False False,False True,False True,False True,False True,
What is the minimum number of bits needed to represent every integer from 0 through 300 in unsigned binary?,Cần tối thiểu bao nhiêu bit để biểu diễn mọi số nguyên từ 0 đến 300 trong hệ nhị phân không dấu?,,multiple choice,8 bits,8 bit,9 bits,9 bit,16 bits,16 bit,10 bits,10 bit,9 bits,9 bit,
"Using exactly 4 bits, what remains after adding 1 to binary 1111 and discarding the extra carry bit?","Khi chỉ dùng đúng 4 bit, kết quả còn lại là gì sau khi cộng 1 vào số nhị phân 1111 và bỏ bit nhớ vượt quá 4 bit?",,multiple choice,0000,0000,1110,1110,0001,0001,1111,1111,0000,0000,
"What does this Python 3 code print?

count = 0
for n in range(1, 5):
    if n % 2 == 0:
        count += 1
print(count)","Đoạn mã Python 3 sau in ra kết quả gì?

count = 0
for n in range(1, 5):
    if n % 2 == 0:
        count += 1
print(count)",,multiple choice,3,3,6,6,2,2,4,4,2,2,
A page uses HTTPS. Which conclusion is justified by HTTPS alone?,Một trang web sử dụng HTTPS. Chỉ riêng việc sử dụng HTTPS cho phép kết luận điều nào sau đây?,,multiple choice,The connection's traffic is encrypted,Lưu lượng của kết nối được mã hóa,The website's downloads are harmless,Các tệp tải xuống từ trang web đều vô hại,The website's owner is trustworthy,Chủ sở hữu trang web đáng tin cậy,The website's information is accurate,Thông tin trên trang web là chính xác,The connection's traffic is encrypted,Lưu lượng của kết nối được mã hóa,
"At 80 Mb/s, how many seconds are needed to transfer 40 MB? Use decimal units and ignore overhead.","Ở tốc độ 80 Mb/s, cần bao nhiêu giây để truyền 40 MB dữ liệu? Dùng đơn vị thập phân và bỏ qua phần dữ liệu phụ trợ (overhead).",,multiple choice,8 seconds,8 giây,0.5 seconds,0.5 giây,40 seconds,40 giây,4 seconds,4 giây,4 seconds,4 giây,
What does RAM stand for?,RAM là viết tắt của cụm từ nào?,,short_answer,,,,,,,,,Random Access Memory,Random Access Memory,
What does ROM stand for?,ROM là viết tắt của cụm từ nào?,,short_answer,,,,,,,,,Read-Only Memory,Read-Only Memory,
"How many keys does a traditional full-size US ANSI Windows keyboard have, excluding extra media or macro keys?","Một bàn phím Windows đầy đủ truyền thống theo bố cục US ANSI có bao nhiêu phím, không tính các phím đa phương tiện hoặc macro bổ sung?",,short_answer,,,,,,,,,104,104,
Is HTML a programming language? Name its language category.,HTML có phải là ngôn ngữ lập trình không? Hãy nêu loại ngôn ngữ của HTML.,,short_answer,,,,,,,,,No. It is a markup language.,Không. HTML là ngôn ngữ đánh dấu.,
What type of language is CSS?,CSS thuộc loại ngôn ngữ nào?,,short_answer,,,,,,,,,Style sheet language.,Ngôn ngữ định kiểu.,
Name four programming languages.,Hãy kể tên bốn ngôn ngữ lập trình.,,short_answer,,,,,,,,,"Python, Java, C, JavaScript.","Python, Java, C, JavaScript.",
Name the two broad programming-language levels used in introductory classifications.,Hãy nêu hai cấp độ chính của ngôn ngữ lập trình trong cách phân loại nhập môn.,,short_answer,,,,,,,,,High-level and low-level.,Bậc cao và bậc thấp.,
What does IP stand for in computer networking?,"Trong mạng máy tính, IP là viết tắt của cụm từ nào?",,short_answer,,,,,,,,,Internet Protocol,Internet Protocol,
Which Python 3 built-in function displays text in the console?,Hàm tích hợp sẵn nào trong Python 3 dùng để hiển thị văn bản trên cửa sổ dòng lệnh?,,short_answer,,,,,,,,,print(),print(),
What is the name of the Python 3 built-in type with values True and False?,Kiểu dữ liệu tích hợp sẵn nào trong Python 3 có hai giá trị True và False?,,short_answer,,,,,,,,,bool,bool,
"What does this Python 3 code print?

print(int(""12"") + 3)","Đoạn mã Python 3 sau in ra kết quả gì?

print(int(""12"") + 3)",,short_answer,,,,,,,,,15,15,
"What does this Python 3 code print?

print(""go"" * 3)","Đoạn mã Python 3 sau in ra kết quả gì?

print(""go"" * 3)",,short_answer,,,,,,,,,gogogo,gogogo,
"What does this Python 3 code print?

print(len(""Hi all""))","Đoạn mã Python 3 sau in ra kết quả gì?

print(len(""Hi all""))",,short_answer,,,,,,,,,6,6,
"What does this Python 3 code print?

score = 7
if score >= 5:
    print(""Pass"")
else:
    print(""Retry"")","Đoạn mã Python 3 sau in ra kết quả gì?

score = 7
if score >= 5:
    print(""Pass"")
else:
    print(""Retry"")",,short_answer,,,,,,,,,Pass,Pass,
"In one short sentence, how does compilation differ from interpretation?","Trong một câu ngắn, hãy nêu điểm khác nhau giữa biên dịch và thông dịch.",,short_answer,,,,,,,,,Compilation produces translated code; interpretation executes source or intermediate code.,Biên dịch tạo ra mã đã được dịch; thông dịch thực thi mã nguồn hoặc mã trung gian.,
"Which type does input() return in Python 3, even when the user types digits?","Trong Python 3, input() trả về kiểu dữ liệu nào, ngay cả khi người dùng nhập các chữ số?",,short_answer,,,,,,,,,str,str,
Convert decimal 13 to binary.,Đổi số thập phân 13 sang hệ nhị phân.,,short_answer,,,,,,,,,1101,1101,
"What does this Python 3 code print?

print(17 % 5)","Đoạn mã Python 3 sau in ra kết quả gì?

print(17 % 5)",,short_answer,,,,,,,,,2,2,
A server sends a requested web page back to a browser. Is that message a request or a response?,Máy chủ gửi lại cho trình duyệt một trang web đã được yêu cầu. Thông điệp đó là yêu cầu (request) hay phản hồi (response)?,,short_answer,,,,,,,,,Response,Phản hồi (Response),
"What does this Python 3 code print?

n = 0
while n < 3:
    n += 1
print(n)","Đoạn mã Python 3 sau in ra kết quả gì?

n = 0
while n < 3:
    n += 1
print(n)",,short_answer,,,,,,,,,3,3,
"In Python 3, why is 0.1 + 0.2 == 0.3 False? Use one short sentence.","Trong Python 3, tại sao biểu thức 0.1 + 0.2 == 0.3 cho kết quả False? Trả lời bằng một câu ngắn.",,short_answer,,,,,,,,,Binary floating-point rounding makes these computed values slightly different.,Sai số làm tròn của số dấu phẩy động nhị phân khiến các giá trị tính được chênh lệch một chút.,
"What does this Python 3 code print?

print(bool(""False""))","Đoạn mã Python 3 sau in ra kết quả gì?

print(bool(""False""))",,short_answer,,,,,,,,,True,True,
"Which exception does this Python 3 code raise?

print(""5"" + 2)","Đoạn mã Python 3 sau gây ra ngoại lệ nào?

print(""5"" + 2)",,short_answer,,,,,,,,,TypeError,TypeError,
"Which exception does this Python 3 code raise?

values = [1, 2]
print(values[2])","Đoạn mã Python 3 sau gây ra ngoại lệ nào?

values = [1, 2]
print(values[2])",,short_answer,,,,,,,,,IndexError,IndexError,
"What does this Python 3 code print?

a = [1, 2]
b = a.copy()
b.append(3)
print(a)","Đoạn mã Python 3 sau in ra kết quả gì?

a = [1, 2]
b = a.copy()
b.append(3)
print(a)",,short_answer,,,,,,,,,"[1, 2]","[1, 2]",
"In Python 3, why does word[0] = ""C"" fail when word = ""cat""?","Trong Python 3, tại sao phép gán word[0] = ""C"" thất bại khi word = ""cat""?",,short_answer,,,,,,,,,Strings are immutable.,Chuỗi là bất biến.,
"What does this Python 3 code print?

values = [1, 2]
result = values.append(3)
print(result)","Đoạn mã Python 3 sau in ra kết quả gì?

values = [1, 2]
result = values.append(3)
print(result)",,short_answer,,,,,,,,,None,None,
"What does this Python 3 code print?

total = 0
for n in range(1, 6):
    if n == 4:
        break
    total += n
print(total)","Đoạn mã Python 3 sau in ra kết quả gì?

total = 0
for n in range(1, 6):
    if n == 4:
        break
    total += n
print(total)",,short_answer,,,,,,,,,6,6,
"A DNS lookup fails, but a connection test to a known Internet IP address succeeds. Does this prove all Internet connectivity is lost? Briefly explain.",Tra cứu DNS thất bại nhưng kiểm tra kết nối đến một địa chỉ IP Internet đã biết lại thành công. Điều này có chứng minh rằng mọi kết nối Internet đều đã mất không? Giải thích ngắn gọn.,,short_answer,,,,,,,,,No. IP connectivity works; name resolution may be failing.,Không. Kết nối IP vẫn hoạt động; việc phân giải tên miền có thể đang gặp lỗi.,
Can a language implementation both compile and interpret the same program? Briefly explain.,Một cách triển khai ngôn ngữ có thể vừa biên dịch vừa thông dịch cùng một chương trình không? Giải thích ngắn gọn.,,short_answer,,,,,,,,,"Yes. It can compile to bytecode, then interpret that bytecode.","Có. Chương trình có thể được biên dịch thành bytecode, sau đó bytecode được thông dịch.",`;

// Safe event listener helper
function on(el, event, handler) {
    if (el && typeof el.addEventListener === 'function') {
        el.addEventListener(event, handler);
    }
}

// State
const state = {
    lang: (function() {
        try { return localStorage.getItem('cypher_lang') || 'EN'; } catch (e) { return 'EN'; }
    })(),
    questions: [],
    questionsEn: [],
    questionsVi: [],
    currentIndex: -1,
    unvisitedPool: [],
    searchQuery: '',
    searchFilter: 'all',
    theme: (function() {
        try { return localStorage.getItem('cypher_theme') || 'white'; } catch (e) { return 'white'; }
    })(),
    isLocked: (function() {
        try { return localStorage.getItem('cypher_is_locked') === 'true'; } catch (e) { return false; }
    })(),
    lockPassword: (function() {
        try { return localStorage.getItem('cypher_lock_password') || 'duypher67'; } catch (e) { return 'duypher67'; }
    })(),
    lockModalContext: 'toggle', // 'toggle' or 'restart'
    session: {
        targetCount: 5,
        answeredCount: 0,
        correctCount: 0,
        wrongCount: 0,
        history: [], // { questionIdx, questionEn, questionVi, title, userAnswer, correctAnswer, isCorrect, percentage, type }
        isGameOver: false
    },
    hasAnsweredCurrent: false,
    currentAnswerState: {
        answered: false,
        type: '',
        selectedChoiceIdx: null,
        isCorrect: false,
        userText: '',
        commentary: '',
        model: ''
    }
};

// Accessor for DOM Elements (always dynamic and safe)
function getElements() {
    return {
        langToggleBtn: document.getElementById('langToggleBtn'),
        langToggleText: document.getElementById('langToggleText'),
        themeToggleBtn: document.getElementById('themeToggleBtn'),
        themeIcon: document.getElementById('themeIcon'),
        randomizeBtn: document.getElementById('randomizeBtn'),
        searchBtn: document.getElementById('searchBtn'),
        csvManagerBtn: document.getElementById('csvManagerBtn'),
        lockToggleBtn: document.getElementById('lockToggleBtn'),
        lockIcon: document.getElementById('lockIcon'),

        // Question Area
        questionImageContainer: document.getElementById('questionImageContainer'),
        questionImage: document.getElementById('questionImage'),
        questionText: document.getElementById('questionText'),
        interactiveArea: document.getElementById('interactiveArea'),
        nextActionWrap: document.getElementById('nextActionWrap'),
        nextQuestionBtn: document.getElementById('nextQuestionBtn'),

        // Search Modal
        searchModal: document.getElementById('searchModal'),
        searchInput: document.getElementById('searchInput'),
        clearSearchBtn: document.getElementById('clearSearchBtn'),
        searchResultsList: document.getElementById('searchResultsList'),
        searchResultCount: document.getElementById('searchResultCount'),
        filterButtons: document.querySelectorAll('.filter-tab'),

        // CSV Modal
        csvModal: document.getElementById('csvModal'),
        closeCsvModalBtn: document.getElementById('closeCsvModalBtn'),
        closeCsvDoneBtn: document.getElementById('closeCsvDoneBtn'),
        dropZone: document.getElementById('dropZone'),
        csvFileInput: document.getElementById('csvFileInput'),
        csvRawText: document.getElementById('csvRawText'),
        loadPastedCsvBtn: document.getElementById('loadPastedCsvBtn'),
        loadSampleCsvBtn: document.getElementById('loadSampleCsvBtn'),

        // Password Lock Modal
        lockModal: document.getElementById('lockModal'),
        lockModalTitle: document.getElementById('lockModalTitle'),
        lockPasswordInput: document.getElementById('lockPasswordInput'),
        lockErrorText: document.getElementById('lockErrorText'),
        cancelLockBtn: document.getElementById('cancelLockBtn'),
        confirmLockBtn: document.getElementById('confirmLockBtn'),

        // Game Over Modal
        gameOverModal: document.getElementById('gameOverModal'),
        gameOverBadge: document.getElementById('gameOverBadge'),
        gameOverTitle: document.getElementById('gameOverTitle'),
        gameOverSubtitle: document.getElementById('gameOverSubtitle'),
        finalScoreNum: document.getElementById('finalScoreNum'),
        finalScoreTotal: document.getElementById('finalScoreTotal'),
        finalScorePct: document.getElementById('finalScorePct'),
        statAnswered: document.getElementById('statAnswered'),
        statAnsweredLbl: document.getElementById('statAnsweredLbl'),
        statCorrect: document.getElementById('statCorrect'),
        statCorrectLbl: document.getElementById('statCorrectLbl'),
        statWrong: document.getElementById('statWrong'),
        statWrongLbl: document.getElementById('statWrongLbl'),
        breakdownTitle: document.getElementById('breakdownTitle'),
        roundBreakdownList: document.getElementById('roundBreakdownList'),
        restartGameBtn: document.getElementById('restartGameBtn'),
        restartBtnText: document.getElementById('restartBtnText'),

        // Lightbox
        imageLightbox: document.getElementById('imageLightbox'),
        lightboxImg: document.getElementById('lightboxImg'),
        lightboxClose: document.getElementById('lightboxClose')
    };
}

let elements = {};

/* ==========================================================================
   SVG Hand-Drawn Animated Ticks & Crosses
   ========================================================================== */

function getAnimatedTickSvg(size = 44) {
    return `
        <svg class="anim-result-svg" width="${size}" height="${size}" viewBox="0 0 52 52" fill="none">
            <circle class="anim-tick-circle" cx="26" cy="26" r="23"/>
            <path class="anim-tick-check" d="M15 27l8 8 16-16"/>
        </svg>
    `;
}

function getAnimatedCrossSvg(size = 44) {
    return `
        <svg class="anim-result-svg" width="${size}" height="${size}" viewBox="0 0 52 52" fill="none">
            <circle class="anim-cross-circle" cx="26" cy="26" r="23"/>
            <path class="anim-cross-line1" d="M17 17l18 18"/>
            <path class="anim-cross-line2" d="M35 17L17 35"/>
        </svg>
    `;
}

/* ==========================================================================
   Language Management (EN / VIE)
   ========================================================================== */

function initLanguage() {
    const parsed = parseBilingualCSV(MAIN_QUESTIONS_CSV);
    state.questionsEn = parsed.questionsEn;
    state.questionsVi = parsed.questionsVi;

    state.questions = state.lang === 'VIE' ? state.questionsVi : state.questionsEn;
    state.unvisitedPool = state.questions.map((_, idx) => idx);

    applyLanguage(state.lang, true);
    on(elements.langToggleBtn, 'click', toggleLanguage);

    // If served via HTTP, also asynchronously fetch main_questions.csv for hot updates
    try {
        fetch('main_questions.csv')
            .then(res => {
                if (res.ok) return res.text();
                throw new Error('HTTP status ' + res.status);
            })
            .then(text => {
                const dynamicParsed = parseBilingualCSV(text);
                if (dynamicParsed && dynamicParsed.questionsEn.length > 0) {
                    state.questionsEn = dynamicParsed.questionsEn;
                    state.questionsVi = dynamicParsed.questionsVi;
                    state.questions = state.lang === 'VIE' ? state.questionsVi : state.questionsEn;
                    if (!state.hasAnsweredCurrent && state.session.answeredCount === 0) {
                        state.unvisitedPool = state.questions.map((_, idx) => idx);
                        randomizeQuestion();
                    }
                }
            })
            .catch(() => {
                // Embedded question dataset serves as the offline/local file fallback
            });
    } catch (e) {}
}

function toggleLanguage() {
    const nextLang = state.lang === 'EN' ? 'VIE' : 'EN';
    try {
        localStorage.setItem('cypher_lang', nextLang);
    } catch (e) {}
    applyLanguage(nextLang, false);
}

function applyLanguage(lang, isInitial = false) {
    state.lang = lang;
    if (elements.langToggleText) {
        elements.langToggleText.textContent = lang;
    }
    if (elements.langToggleBtn) {
        elements.langToggleBtn.title = lang === 'EN' ? 'Switch to Vietnamese (VIE)' : 'Switch to English (EN)';
    }

    state.questions = lang === 'VIE' ? state.questionsVi : state.questionsEn;

    if (isInitial || state.currentIndex < 0) {
        state.unvisitedPool = state.questions.map((_, idx) => idx);
        randomizeQuestion();
    } else {
        // Switch language WITHOUT resetting the question or answer state
        updateCurrentQuestionLanguage();
    }

    if (elements.searchModal && !elements.searchModal.classList.contains('hidden')) {
        renderSearchResults();
    }

    if (state.session.isGameOver) {
        updateGameOverLanguage();
    }

    // Update NEXT button text (Next / Finish in current language)
    updateNextButtonText();
}

function updateNextButtonText() {
    if (!elements.nextQuestionBtn) return;
    const nextTextSpan = elements.nextQuestionBtn.querySelector('span:not(.hover-arrow)');
    if (!nextTextSpan) return;

    if (state.session.answeredCount >= state.session.targetCount) {
        nextTextSpan.textContent = state.lang === 'VIE' ? 'HOÀN THÀNH' : 'FINISH';
    } else {
        nextTextSpan.textContent = 'NEXT';
    }
}

function updateCurrentQuestionLanguage() {
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) return;

    const q = state.questions[state.currentIndex];

    // 1. Headline updates to new language
    if (elements.questionText) {
        elements.questionText.textContent = q.title;
    }

    // 2. Question image
    if (elements.questionImage && elements.questionImageContainer) {
        if (q.image && q.image.trim().length > 0) {
            elements.questionImage.src = q.image.trim();
            elements.questionImageContainer.classList.remove('hidden');
        } else {
            elements.questionImage.src = '';
            elements.questionImageContainer.classList.add('hidden');
        }
    }

    const ansState = state.currentAnswerState;

    if (q.type === 'multiple choice') {
        // Multiple choice: switch choice captions normally, do NOT reset question state
        const choiceItems = elements.interactiveArea ? elements.interactiveArea.querySelectorAll('.choice-item') : null;
        if (choiceItems && choiceItems.length === q.choices.length) {
            choiceItems.forEach((item, idx) => {
                item.dataset.choice = q.choices[idx];
                const caption = item.querySelector('.choice-caption');
                if (caption) {
                    caption.textContent = q.choices[idx];
                }
            });

            if (ansState && ansState.answered) {
                if (elements.nextActionWrap) {
                    elements.nextActionWrap.classList.remove('hidden');
                }
            }
        }
    } else {
        // Short Answer: if already answered, translate labels and commentary
        if (ansState && ansState.answered) {
            const resultDisplay = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-result-display') : null;
            if (resultDisplay) {
                const matchBadge = resultDisplay.querySelector('.sa-match-badge');
                if (matchBadge) {
                    matchBadge.textContent = `${ansState.percentage}% ${state.lang === 'VIE' ? 'khớp' : 'match'}`;
                }

                const aiBadge = resultDisplay.querySelector('.sa-ai-badge');
                if (aiBadge) {
                    if (ansState.isCorrect) {
                        aiBadge.textContent = `${state.lang === 'VIE' ? 'Độ khớp' : 'Match score'}: ${ansState.percentage}%`;
                    } else {
                        aiBadge.textContent = state.lang === 'VIE' ? 'Tại sao bạn sai' : 'Why you are wrong';
                    }
                }

                const aiCommentaryText = resultDisplay.querySelector('.sa-ai-commentary-text');
                if (aiCommentaryText && ansState.ignore_ai) {
                    aiCommentaryText.textContent = state.lang === 'VIE'
                        ? 'Mật mã yêu cầu khớp chính xác từng ký tự/từ.'
                        : 'Passcode requires an exact word-by-word match.';
                }

                const correctLabel = resultDisplay.querySelector('.sa-correct-label');
                if (correctLabel) {
                    correctLabel.textContent = state.lang === 'VIE' ? 'ĐÁP ÁN MẪU:' : 'CORRECT:';
                }
                const correctText = resultDisplay.querySelector('.sa-correct-text');
                if (correctText) {
                    correctText.textContent = q.correctAnswer;
                }
            }
        } else {
            const saField = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-field') : null;
            if (saField) {
                saField.placeholder = state.lang === 'VIE' ? 'Nhập câu trả lời của bạn tại đây...' : 'Type your answer here...';
            }
            const submitBtn = elements.interactiveArea ? elements.interactiveArea.querySelector('.btn-solid') : null;
            if (submitBtn) {
                submitBtn.textContent = state.lang === 'VIE' ? 'Gửi' : 'Submit';
            }
        }
    }
}

/* ==========================================================================
   Theme Management (Strict Monochrome: White Mode & Dark Mode)
   ========================================================================== */

function initTheme() {
    applyTheme(state.theme);
    on(elements.themeToggleBtn, 'click', toggleTheme);
}

function toggleTheme() {
    const nextTheme = state.theme === 'white' ? 'dark' : 'white';
    applyTheme(nextTheme);
}

function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('cypher_theme', theme);
    } catch (e) {}

    if (elements.themeIcon) {
        if (theme === 'white') {
            // Moon icon (to switch to Dark Mode)
            elements.themeIcon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
            if (elements.themeToggleBtn) elements.themeToggleBtn.title = 'Switch to Dark Mode';
        } else {
            // Sun icon (to switch to Light Mode)
            elements.themeIcon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
            if (elements.themeToggleBtn) elements.themeToggleBtn.title = 'Switch to Light Mode';
        }
    }
}

/* ==========================================================================
   Password Lock System & Restart Protection
   ========================================================================== */

function initLockSystem() {
    updateLockUI();

    on(elements.lockToggleBtn, 'click', () => {
        state.lockModalContext = 'toggle';
        openLockModal();
    });
    on(elements.cancelLockBtn, 'click', closeLockModal);
    on(elements.confirmLockBtn, 'click', handleLockConfirm);

    on(elements.lockPasswordInput, 'keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLockConfirm();
        }
    });

    // Restart button handler
    on(elements.restartGameBtn, 'click', openRestartUnlockModal);
}

function openRestartUnlockModal() {
    state.lockModalContext = 'restart';
    if (!elements.lockModal) return;
    if (elements.lockErrorText) elements.lockErrorText.classList.add('hidden');
    if (elements.lockPasswordInput) {
        elements.lockPasswordInput.value = '';
        elements.lockPasswordInput.placeholder = '';
    }
    elements.lockModal.classList.remove('hidden');

    const isVi = state.lang === 'VIE';
    if (elements.lockModalTitle) {
        elements.lockModalTitle.textContent = isVi ? 'Mở Khóa Để Bắt Đầu Lại' : 'Unlock to Restart Session';
    }
    if (elements.confirmLockBtn) {
        elements.confirmLockBtn.textContent = isVi ? 'Mở Khóa & Bắt Đầu' : 'Unlock & Restart';
    }

    if (elements.lockPasswordInput) {
        setTimeout(() => elements.lockPasswordInput.focus(), 60);
    }
}

function openLockModal() {
    if (!elements.lockModal) return;
    if (elements.lockErrorText) elements.lockErrorText.classList.add('hidden');
    if (elements.lockPasswordInput) {
        elements.lockPasswordInput.value = '';
        elements.lockPasswordInput.placeholder = '';
    }
    elements.lockModal.classList.remove('hidden');

    if (state.isLocked) {
        if (elements.lockModalTitle) elements.lockModalTitle.textContent = state.lang === 'VIE' ? 'Mở Khóa Hệ Thống' : 'Unlock Controls';
        if (elements.confirmLockBtn) elements.confirmLockBtn.textContent = state.lang === 'VIE' ? 'Mở Khóa' : 'Unlock';
    } else {
        if (elements.lockModalTitle) elements.lockModalTitle.textContent = state.lang === 'VIE' ? 'Khóa Hệ Thống' : 'Lock Controls';
        if (elements.confirmLockBtn) elements.confirmLockBtn.textContent = state.lang === 'VIE' ? 'Khóa' : 'Lock';
    }

    if (elements.lockPasswordInput) {
        setTimeout(() => elements.lockPasswordInput.focus(), 60);
    }
}

function closeLockModal() {
    if (elements.lockModal) elements.lockModal.classList.add('hidden');
}

function handleLockConfirm() {
    const inputPass = elements.lockPasswordInput ? elements.lockPasswordInput.value.trim() : '';

    if (state.lockModalContext === 'restart') {
        if (inputPass === state.lockPassword) {
            closeLockModal();
            resetSessionAndRestart();
        } else {
            if (elements.lockErrorText) elements.lockErrorText.classList.remove('hidden');
            if (elements.lockPasswordInput) {
                elements.lockPasswordInput.focus();
                elements.lockPasswordInput.select();
            }
        }
        return;
    }

    // Default toggle lock behavior
    if (state.isLocked) {
        if (inputPass === state.lockPassword) {
            state.isLocked = false;
            try {
                localStorage.setItem('cypher_is_locked', 'false');
            } catch (e) {}
            updateLockUI();
            closeLockModal();
        } else {
            if (elements.lockErrorText) elements.lockErrorText.classList.remove('hidden');
            if (elements.lockPasswordInput) {
                elements.lockPasswordInput.focus();
                elements.lockPasswordInput.select();
            }
        }
    } else {
        state.lockPassword = inputPass || state.lockPassword || 'duypher67';
        state.isLocked = true;
        try {
            localStorage.setItem('cypher_is_locked', 'true');
            localStorage.setItem('cypher_lock_password', state.lockPassword);
        } catch (e) {}
        updateLockUI();
        closeLockModal();
    }
}

function updateLockUI() {
    if (!elements.lockIcon) return;

    if (state.isLocked) {
        elements.lockIcon.innerHTML = `
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        `;
        if (elements.lockToggleBtn) {
            elements.lockToggleBtn.title = 'Controls Locked (Click to Unlock)';
            elements.lockToggleBtn.classList.add('locked-active');
        }
        if (elements.searchBtn) elements.searchBtn.classList.add('is-locked');
        if (elements.randomizeBtn) elements.randomizeBtn.classList.add('is-locked');
        if (elements.csvManagerBtn) elements.csvManagerBtn.classList.add('is-locked');
    } else {
        elements.lockIcon.innerHTML = `
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        `;
        if (elements.lockToggleBtn) {
            elements.lockToggleBtn.title = 'Lock Controls with Password';
            elements.lockToggleBtn.classList.remove('locked-active');
        }
        if (elements.searchBtn) elements.searchBtn.classList.remove('is-locked');
        if (elements.randomizeBtn) elements.randomizeBtn.classList.remove('is-locked');
        if (elements.csvManagerBtn) elements.csvManagerBtn.classList.remove('is-locked');
    }
}

/* ==========================================================================
   Resilient Bilingual CSV Parser
   ========================================================================== */

function parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuotes = false;
    let i = 0;

    const cleanText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    while (i < cleanText.length) {
        const char = cleanText[i];
        const nextChar = cleanText[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                currentCell += '"';
                i += 2;
                continue;
            } else {
                insideQuotes = !insideQuotes;
                i++;
                continue;
            }
        }

        if (char === ',' && !insideQuotes) {
            currentRow.push(currentCell.trim());
            currentCell = '';
            i++;
            continue;
        }

        if (char === '\n' && !insideQuotes) {
            currentRow.push(currentCell.trim());
            if (currentRow.some(cell => cell.length > 0)) {
                rows.push(currentRow);
            }
            currentRow = [];
            currentCell = '';
            i++;
            continue;
        }

        currentCell += char;
        i++;
    }

    if (currentCell.length > 0 || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        if (currentRow.some(cell => cell.length > 0)) {
            rows.push(currentRow);
        }
    }

    return rows;
}

function processBilingualRows(rows) {
    if (!rows || rows.length === 0) return { questionsEn: [], questionsVi: [] };

    let startIndex = 0;
    const headerRow = rows[0].map(c => c.toLowerCase().trim().replace(/[\s\-_]+/g, '_'));

    const isHeader = headerRow.some(h => h.includes('question') || h.includes('title') || h.includes('type'));
    if (isHeader) startIndex = 1;

    function getColIdx(candidates) {
        for (const cand of candidates) {
            const idx = headerRow.findIndex(h => h === cand || h.includes(cand));
            if (idx !== -1) return idx;
        }
        return -1;
    }

    const titleEnIdx = getColIdx(['question_title_en', 'title_en', 'question_en', 'question_title', 'title', 'question']);
    const titleViIdx = getColIdx(['question_title_vi', 'title_vi', 'question_vi']);
    const imageIdx = getColIdx(['image', 'img', 'picture', 'photo']);
    const typeIdx = getColIdx(['type', 'question_type']);
    const ignoreAiIdx = getColIdx(['ignore_ai', 'ignoreai']);

    const c1EnIdx = getColIdx(['choice_1_en', 'choice1_en', 'choice_1', 'choice1', 'option_1', 'option_a']);
    const c1ViIdx = getColIdx(['choice_1_vi', 'choice1_vi']);
    const c2EnIdx = getColIdx(['choice_2_en', 'choice2_en', 'choice_2', 'choice2', 'option_2', 'option_b']);
    const c2ViIdx = getColIdx(['choice_2_vi', 'choice2_vi']);
    const c3EnIdx = getColIdx(['choice_3_en', 'choice3_en', 'choice_3', 'choice3', 'option_3', 'option_c']);
    const c3ViIdx = getColIdx(['choice_3_vi', 'choice3_vi']);
    const c4EnIdx = getColIdx(['choice_4_en', 'choice4_en', 'choice_4', 'choice4', 'option_4', 'option_d']);
    const c4ViIdx = getColIdx(['choice_4_vi', 'choice4_vi']);

    const ansEnIdx = getColIdx(['correct_answer_en', 'correctanswer_en', 'answer_en', 'correct_answer', 'correctanswer', 'answer']);
    const ansViIdx = getColIdx(['correct_answer_vi', 'correctanswer_vi', 'answer_vi']);

    const questionsEn = [];
    const questionsVi = [];

    for (let r = startIndex; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;

        const rawTitleEn = titleEnIdx !== -1 ? (row[titleEnIdx] || '') : (row[0] || '');
        const rawTitleVi = titleViIdx !== -1 ? (row[titleViIdx] || '') : rawTitleEn;
        if (!rawTitleEn.trim() && !rawTitleVi.trim()) continue;

        const image = imageIdx !== -1 ? (row[imageIdx] || '').trim() : '';
        const rawType = (typeIdx !== -1 ? (row[typeIdx] || '') : (row[2] || '')).toLowerCase().trim();
        const isMultipleChoice = rawType.includes('multiple') || rawType.includes('choice') || rawType === 'mc';

        let choicesEn = [];
        let choicesVi = [];

        if (isMultipleChoice) {
            choicesEn = [
                c1EnIdx !== -1 ? row[c1EnIdx] : (row[3] || ''),
                c2EnIdx !== -1 ? row[c2EnIdx] : (row[4] || ''),
                c3EnIdx !== -1 ? row[c3EnIdx] : (row[5] || ''),
                c4EnIdx !== -1 ? row[c4EnIdx] : (row[6] || '')
            ].map(c => (c || '').trim()).filter(Boolean);

            choicesVi = [
                c1ViIdx !== -1 ? row[c1ViIdx] : (c1EnIdx !== -1 ? row[c1EnIdx] : (row[3] || '')),
                c2ViIdx !== -1 ? row[c2ViIdx] : (c2EnIdx !== -1 ? row[c2EnIdx] : (row[4] || '')),
                c3ViIdx !== -1 ? row[c3ViIdx] : (c3EnIdx !== -1 ? row[c3EnIdx] : (row[5] || '')),
                c4ViIdx !== -1 ? row[c4ViIdx] : (c4EnIdx !== -1 ? row[c4EnIdx] : (row[6] || ''))
            ].map(c => (c || '').trim()).filter(Boolean);
        }

        let ansEn = ansEnIdx !== -1 ? (row[ansEnIdx] || '').trim() : (row[7] || '').trim();
        let ansVi = ansViIdx !== -1 ? (row[ansViIdx] || '').trim() : ansEn;

        if (!isMultipleChoice && !ansEn) {
            for (let c = 3; c < row.length; c++) {
                if (row[c] && row[c].trim()) {
                    ansEn = row[c].trim();
                    ansVi = ansEn;
                    break;
                }
            }
        }

        let ignoreAi = false;
        if (ignoreAiIdx !== -1 && row[ignoreAiIdx] !== undefined) {
            const v = row[ignoreAiIdx].trim().toLowerCase();
            ignoreAi = (v === 'true' || v === '1' || v === 'yes' || v === 't');
        }

        const id = questionsEn.length + 1;

        questionsEn.push({
            id,
            title: (rawTitleEn || rawTitleVi).trim(),
            image: image,
            type: isMultipleChoice ? 'multiple choice' : 'short_answer',
            choices: choicesEn,
            correctAnswer: ansEn || ansVi,
            ignore_ai: Boolean(ignoreAi)
        });

        questionsVi.push({
            id,
            title: (rawTitleVi || rawTitleEn).trim(),
            image: image,
            type: isMultipleChoice ? 'multiple choice' : 'short_answer',
            choices: choicesVi.length > 0 ? choicesVi : choicesEn,
            correctAnswer: ansVi || ansEn,
            ignore_ai: Boolean(ignoreAi)
        });
    }

    return { questionsEn, questionsVi };
}

function parseBilingualCSV(csvText) {
    const rawRows = parseCSV(csvText);
    return processBilingualRows(rawRows);
}

// Backward compatibility helper
function processQuestionRows(rows) {
    const res = processBilingualRows(rows);
    return state.lang === 'VIE' ? res.questionsVi : res.questionsEn;
}

/* ==========================================================================
   Mistral AI Short Answer Grading Engine
   ========================================================================== */

function getMistralApiKey() {
    try {
        return localStorage.getItem('cypher_mistral_api_key') || '';
    } catch (e) {
        return '';
    }
}

const MISTRAL_SYS_PROMPT_EN = `You are an objective, precise, fair, and multilingual technical exam grader. Your task is to evaluate what percentage (0% to 100%) the student answer matches the technical accuracy and semantic intent of the question and reference answer.

Grading Rules:
1. Assign an accurate match percentage from 0% to 100%. (Scale: >= 75% is considered passing/true; < 75% is considered false).
2. Multilingual Support: You MUST accept correct answers provided in ANY language (such as Vietnamese, English, or a mixture of languages), regardless of the language used in the question or reference answer. Do NOT penalize or deduct points because the student answered in a different language if the technical concepts and meaning are accurate.
3. Do not grade on phrasing, wording, or writing style—as long as the core idea is correct. Accept synonyms, colloquial/informal language, bullet points, shorthand, and minor typographical errors as long as the underlying technical meaning is preserved.
4. Syntax requirement: State either "true" (if >= 75%) or "false" (if < 75%), followed by pipe, percentage, pipe, and commentary:
   true | [0-100]% | [commentary if applicable]
   OR
   false | [0-100]% | [commentary explaining why points were deducted]
5. Write the commentary in English. If 100% match, leave the commentary after the second pipe completely blank.
6. DO NOT write the literal phrase "true/false", DO NOT use markdown (**), DO NOT use quotes.

Examples:
true | 100% | 
true | 85% | Conceptually sound, though phrased slightly informally.
false | 45% | Missing the core distinction of public-private key pairs.`;

const MISTRAL_SYS_PROMPT_VI = `Bạn là giám khảo chấm thi kỹ thuật khách quan, công tâm, chính xác và hỗ trợ đa ngôn ngữ. Nhiệm vụ của bạn là đánh giá xem câu trả lời của thí sinh khớp bao nhiêu phần trăm (0% đến 100%) về mặt bản chất chuyên môn/ngữ nghĩa so với câu hỏi và đáp án mẫu.

Quy tắc chấm điểm:
1. Cho điểm tỷ lệ phần trăm khớp nội dung từ 0% đến 100%. (Thang điểm: >= 75% là true/đạt; < 75% là false/chưa đạt).
2. Hỗ trợ đa ngôn ngữ: BẮT BUỘC chấp nhận câu trả lời đúng bằng BẤT KỲ ngôn ngữ nào (tiếng Việt, tiếng Anh, hoặc pha trộn các ngôn ngữ), không phụ thuộc vào ngôn ngữ của câu hỏi hay đáp án mẫu. TUYỆT ĐỐI KHÔNG trừ điểm hay đánh trượt chỉ vì thí sinh trả lời bằng tiếng Anh hoặc tiếng Việt nếu ý nghĩa chuyên môn kỹ thuật chính xác.
3. Không cần chấm về mặt từ ngữ diễn đạt, miễn đúng ý. Chấp nhận từ đồng nghĩa, cách diễn đạt tự do/ngắn gọn/bình dân, thuật ngữ tương đương hoặc lỗi chính tả nhỏ miễn là thể hiện đúng ý và bản chất kỹ thuật.
4. Cú pháp bắt buộc: Ghi chính xác "true" (nếu >= 75%) hoặc "false" (nếu < 75%), theo sau là dấu gạch đứng, tỷ lệ %, dấu gạch đứng, và nhận xét:
   true | [0-100]% | [nhận xét nếu có]
   HOẶC
   false | [0-100]% | [nhận xét giải thích tại sao bị trừ điểm]
5. Viết nhận xét bằng tiếng Việt. Nếu đạt 100% thì để trống phần nhận xét sau dấu |.
6. TUYỆT ĐỐI KHÔNG viết chữ "true/false", KHÔNG thêm markdown (**), KHÔNG dấu ngoặc kép.

Ví dụ:
true | 100% | 
true | 85% | Nêu đúng bản chất kỹ thuật nhưng cách diễn đạt còn mang tính suy đoán nhẹ.
false | 45% | Câu trả lời thiếu ý trọng tâm về cặp khóa công khai/khóa riêng tư.`;

async function gradeShortAnswerWithMistral(questionTitle, studentAnswer, referenceAnswer, lang = 'EN') {
    const apiKey = getMistralApiKey();
    const isVi = lang === 'VIE';
    const sysPrompt = isVi ? MISTRAL_SYS_PROMPT_VI : MISTRAL_SYS_PROMPT_EN;
    const userMessage = isVi
        ? `Câu hỏi: ${questionTitle}\nĐáp án mẫu: ${referenceAnswer}\nCâu trả lời của thí sinh: ${studentAnswer}`
        : `Question: ${questionTitle}\nReference Answer: ${referenceAnswer}\nStudent Answer: ${studentAnswer}`;

    async function callMistral(modelName) {
        try {
            const apiRes = await fetch('/api/grade', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: sysPrompt,
                    userMessage: userMessage,
                    model: modelName
                })
            });
            if (apiRes.ok || (apiRes.status >= 400 && apiRes.status !== 404 && apiRes.status !== 405)) {
                return apiRes;
            }
        } catch (e) {}

        return fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: modelName,
                temperature: 0.1,
                max_tokens: 180,
                messages: [
                    { role: 'system', content: sysPrompt },
                    { role: 'user', content: userMessage }
                ]
            })
        });
    }

    const modelsToTry = ['mistral-small-latest', 'ministral-8b-latest', 'open-mistral-7b'];

    for (const model of modelsToTry) {
        try {
            const res = await callMistral(model);
            if (!res.ok) continue;

            const data = await res.json();
            const rawContent = data.choices?.[0]?.message?.content?.trim() || '';
            const usedModel = data._modelUsed || model;

            const pipeMatch = rawContent.match(/^(true|false)\s*\|\s*(\d+)%?\s*\|?\s*(.*)$/is);
            if (pipeMatch) {
                const isCorrect = pipeMatch[1].toLowerCase() === 'true';
                const percentage = Math.min(100, Math.max(0, parseInt(pipeMatch[2], 10) || (isCorrect ? 100 : 0)));
                const commentary = (pipeMatch[3] || '').trim();
                return {
                    isCorrect: isCorrect || percentage >= 75,
                    percentage: percentage,
                    commentary: commentary,
                    model: usedModel
                };
            }

            const lower = rawContent.toLowerCase();
            const hasTrue = lower.includes('true');
            const hasFalse = lower.includes('false');
            const pctFind = rawContent.match(/(\d+)%/);
            const percentage = pctFind ? parseInt(pctFind[1], 10) : (hasTrue ? 100 : 0);

            return {
                isCorrect: (hasTrue && !hasFalse) || percentage >= 75,
                percentage: percentage,
                commentary: rawContent.replace(/^(true|false)\s*\|?/i, '').trim(),
                model: usedModel
            };
        } catch (err) {}
    }

    const offlineMatch = studentAnswer.trim().toLowerCase() === (referenceAnswer || '').trim().toLowerCase();
    return {
        isCorrect: offlineMatch,
        percentage: offlineMatch ? 100 : 0,
        commentary: offlineMatch ? '' : (isVi ? 'Không thể kết nối AI, đã đối chiếu theo đáp án mẫu.' : 'AI grading offline, evaluated against reference answer.'),
        model: 'offline-fallback'
    };
}

/* ==========================================================================
   Question System, Display & Background Session Scoring
   ========================================================================== */

function loadQuestionsFromCSVText(csvText) {
    const parsed = parseBilingualCSV(csvText);
    if (!parsed || parsed.questionsEn.length === 0) return false;

    state.questionsEn = parsed.questionsEn;
    state.questionsVi = parsed.questionsVi;
    state.questions = state.lang === 'VIE' ? state.questionsVi : state.questionsEn;
    state.unvisitedPool = state.questions.map((_, idx) => idx);
    state.currentIndex = -1;

    resetSessionState();
    randomizeQuestion();
    return true;
}

function resetSessionState() {
    state.session.answeredCount = 0;
    state.session.correctCount = 0;
    state.session.wrongCount = 0;
    state.session.history = [];
    state.session.isGameOver = false;

    if (elements.gameOverModal) {
        elements.gameOverModal.classList.add('hidden');
    }

    updateNextButtonText();
}

function resetSessionAndRestart() {
    resetSessionState();
    state.unvisitedPool = state.questions.map((_, idx) => idx);
    randomizeQuestion();
}

function recordAnswerInSession(answerData) {
    if (state.session.isGameOver) return;

    state.session.history.push(answerData);
    if (answerData.isCorrect) {
        state.session.correctCount++;
    } else {
        state.session.wrongCount++;
    }
    state.session.answeredCount = state.session.history.length;

    updateNextButtonText();
}

function randomizeQuestion() {
    if (state.questions.length === 0) return;

    if (state.unvisitedPool.length === 0) {
        state.unvisitedPool = state.questions.map((_, idx) => idx);
    }

    let candidateIndex = Math.floor(Math.random() * state.unvisitedPool.length);
    if (state.questions.length > 1 && state.unvisitedPool[candidateIndex] === state.currentIndex) {
        candidateIndex = (candidateIndex + 1) % state.unvisitedPool.length;
    }

    const nextIndex = state.unvisitedPool.splice(candidateIndex, 1)[0];
    displayQuestion(nextIndex);
}

function displayQuestion(index) {
    if (index < 0 || index >= state.questions.length) return;

    state.currentIndex = index;
    state.hasAnsweredCurrent = false;
    state.currentAnswerState = {
        answered: false,
        type: state.questions[index].type,
        selectedChoiceIdx: null,
        isCorrect: false,
        userText: '',
        commentary: '',
        model: ''
    };
    const q = state.questions[index];

    // Headline
    if (elements.questionText) {
        elements.questionText.textContent = q.title;
    }

    // Image
    if (elements.questionImage && elements.questionImageContainer) {
        if (q.image && q.image.trim().length > 0) {
            elements.questionImage.src = q.image.trim();
            elements.questionImageContainer.classList.remove('hidden');
        } else {
            elements.questionImage.src = '';
            elements.questionImageContainer.classList.add('hidden');
        }
    }

    // Hide NEXT button until answered
    if (elements.nextActionWrap) {
        elements.nextActionWrap.classList.add('hidden');
    }

    updateNextButtonText();

    // Render Choices or Input
    renderInteractiveArea(q);
}

function normalizeDirectAnswer(str) {
    return (str || '')
        .trim()
        .replace(/^["']+|["']+$/g, '')
        .replace(/[.,;!?]+$/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

function checkDirectAnswerMatch(val, q) {
    const normVal = normalizeDirectAnswer(val);
    if (!normVal) return false;

    const accepted = new Set();
    const rawList = [
        q?.correctAnswer,
        state.questionsEn && state.currentIndex >= 0 ? state.questionsEn[state.currentIndex]?.correctAnswer : null,
        state.questionsVi && state.currentIndex >= 0 ? state.questionsVi[state.currentIndex]?.correctAnswer : null
    ].filter(Boolean);

    for (const raw of rawList) {
        const norm = normalizeDirectAnswer(raw);
        if (norm) accepted.add(norm);

        // Parentheses extraction (e.g., "DHCP (Dynamic Host Configuration Protocol)" -> "dhcp" & "dynamic host configuration protocol")
        const parenMatch = raw.match(/^(.*?)\s*\((.*?)\)$/);
        if (parenMatch) {
            const part1 = normalizeDirectAnswer(parenMatch[1]);
            const part2 = normalizeDirectAnswer(parenMatch[2]);
            if (part1) accepted.add(part1);
            if (part2) accepted.add(part2);
        }

        // Numeric variations (e.g., "4 layers" -> "4", "4 layers", "4 layer", "4 tầng")
        const numMatch = raw.match(/^(\d+)\s*(layers?|tầng)?/i);
        if (numMatch) {
            accepted.add(numMatch[1]);
            accepted.add(numMatch[1] + ' layers');
            accepted.add(numMatch[1] + ' layer');
            accepted.add(numMatch[1] + ' tầng');
        }
    }

    return accepted.has(normVal);
}

function renderInteractiveArea(q) {
    if (!elements.interactiveArea) return;
    elements.interactiveArea.innerHTML = '';

    if (q.type === 'multiple choice') {
        const list = document.createElement('div');
        list.className = 'choices-list';

        const keys = ['A', 'B', 'C', 'D'];
        q.choices.forEach((choice, idx) => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'choice-item';
            item.dataset.index = idx;
            item.dataset.choice = choice;

            item.innerHTML = `
                <span class="choice-symbol">${keys[idx] || idx + 1}</span>
                <span class="choice-caption">${escapeHtml(choice)}</span>
                <span class="choice-icon-slot"></span>
            `;

            item.addEventListener('click', () => handleChoiceClick(idx, choice, q));
            list.appendChild(item);
        });

        elements.interactiveArea.appendChild(list);
    } else {
        // Short Answer Form
        const form = document.createElement('div');
        form.className = 'sa-form';

        const inputRow = document.createElement('div');
        inputRow.className = 'sa-input-row';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'sa-field';
        input.placeholder = state.lang === 'VIE' ? 'Nhập câu trả lời của bạn tại đây...' : 'Type your answer here...';
        if (state.currentAnswerState && state.currentAnswerState.userText) {
            input.value = state.currentAnswerState.userText;
        }

        input.addEventListener('input', () => {
            if (state.currentAnswerState) {
                state.currentAnswerState.userText = input.value;
            }
            if (!state.hasAnsweredCurrent && checkDirectAnswerMatch(input.value, q)) {
                checkAnswer();
            }
        });

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'btn btn-solid';
        submitBtn.textContent = state.lang === 'VIE' ? 'Gửi' : 'Submit';

        inputRow.appendChild(input);
        inputRow.appendChild(submitBtn);
        form.appendChild(inputRow);

        const checkAnswer = async () => {
            if (state.hasAnsweredCurrent) return;
            const val = input.value.trim();
            if (!val) return;

            state.hasAnsweredCurrent = true;
            input.disabled = true;
            submitBtn.disabled = true;

            let gradeResult;

            if (checkDirectAnswerMatch(val, q)) {
                gradeResult = {
                    isCorrect: true,
                    percentage: 100,
                    commentary: '',
                    model: 'direct-match'
                };
            } else if (q.ignore_ai) {
                gradeResult = {
                    isCorrect: false,
                    percentage: 0,
                    commentary: state.lang === 'VIE'
                        ? 'Mật mã yêu cầu khớp chính xác từng ký tự/từ.'
                        : 'Passcode requires an exact word-by-word match.',
                    model: 'passcode-exact'
                };
            } else {
                const evalNotice = document.createElement('div');
                evalNotice.className = 'sa-evaluating-notice';
                evalNotice.innerHTML = `
                    <div class="sa-evaluating-spinner"></div>
                    <span>${state.lang === 'VIE' ? 'Đang chấm câu trả lời của bạn...' : 'Grading your answer...'}</span>
                `;
                form.appendChild(evalNotice);

                gradeResult = await gradeShortAnswerWithMistral(q.title, val, q.correctAnswer, state.lang);
            }

            state.currentAnswerState = {
                answered: true,
                type: 'short_answer',
                selectedChoiceIdx: null,
                isCorrect: gradeResult.isCorrect,
                percentage: gradeResult.percentage,
                userText: val,
                commentary: gradeResult.commentary,
                model: gradeResult.model,
                ignore_ai: Boolean(q.ignore_ai)
            };

            // Background score recording
            recordAnswerInSession({
                questionIdx: state.currentIndex,
                questionEn: state.questionsEn[state.currentIndex],
                questionVi: state.questionsVi[state.currentIndex],
                title: q.title,
                userAnswer: val,
                correctAnswer: q.correctAnswer,
                isCorrect: gradeResult.isCorrect,
                percentage: gradeResult.percentage,
                type: 'short_answer'
            });

            form.innerHTML = '';
            const resultDisplay = document.createElement('div');
            resultDisplay.className = `sa-result-display ${gradeResult.isCorrect ? 'is-correct' : 'is-incorrect'}`;

            const matchBadgeHtml = `
                <span class="sa-match-badge ${gradeResult.isCorrect ? 'match-pass' : 'match-fail'}">
                    ${gradeResult.percentage}% ${state.lang === 'VIE' ? 'khớp' : 'match'}
                </span>
            `;

            if (gradeResult.isCorrect) {
                const feedbackHtml = gradeResult.commentary ? `
                    <div class="sa-ai-commentary-box">
                        <div class="sa-ai-header">
                            <span class="sa-ai-badge">${state.lang === 'VIE' ? 'Độ khớp' : 'Match score'}: ${gradeResult.percentage}%</span>
                        </div>
                        <div class="sa-ai-commentary-text">${escapeHtml(gradeResult.commentary)}</div>
                    </div>
                ` : '';

                resultDisplay.innerHTML = `
                    <div class="sa-result-row">
                        <span class="sa-user-text">${escapeHtml(val)}</span>
                        <span class="choice-result-icon">${getAnimatedTickSvg(28)}</span>
                        ${matchBadgeHtml}
                    </div>
                    ${feedbackHtml}
                `;
            } else {
                const commentaryTitle = state.lang === 'VIE' ? 'Tại sao bạn sai' : 'Why you are wrong';
                const commentaryHtml = gradeResult.commentary ? `
                    <div class="sa-ai-commentary-box">
                        <div class="sa-ai-header">
                            <span class="sa-ai-badge">${commentaryTitle}</span>
                            <span class="sa-match-pill">${state.lang === 'VIE' ? 'Độ khớp' : 'Match'}: ${gradeResult.percentage}%</span>
                        </div>
                        <div class="sa-ai-commentary-text">${escapeHtml(gradeResult.commentary)}</div>
                    </div>
                ` : '';

                resultDisplay.innerHTML = `
                    <div class="sa-result-row">
                        <span class="sa-user-text struck">${escapeHtml(val)}</span>
                        <span class="choice-result-icon">${getAnimatedCrossSvg(26)}</span>
                        ${matchBadgeHtml}
                        <div class="sa-correct-wrap">
                            <span class="sa-correct-label">${state.lang === 'VIE' ? 'ĐÁP ÁN MẪU:' : 'CORRECT:'}</span>
                            <span class="sa-correct-text">${escapeHtml(q.correctAnswer)}</span>
                        </div>
                    </div>
                    ${commentaryHtml}
                `;
            }

            form.appendChild(resultDisplay);
            triggerAnsweredState();
        };

        submitBtn.addEventListener('click', checkAnswer);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkAnswer();
            }
        });

        elements.interactiveArea.appendChild(form);
        setTimeout(() => input.focus(), 50);
    }
}

function handleChoiceClick(choiceIdx, choiceText, q) {
    if (state.hasAnsweredCurrent) return;

    const items = elements.interactiveArea.querySelectorAll('.choice-item');
    items.forEach(i => {
        i.classList.remove('is-correct', 'is-incorrect');
        const slot = i.querySelector('.choice-icon-slot');
        if (slot) slot.innerHTML = '';
    });

    const isMatch = choiceText.trim().toLowerCase() === (q.correctAnswer || '').trim().toLowerCase()
        || ['a', 'b', 'c', 'd'][choiceIdx] === (q.correctAnswer || '').trim().toLowerCase();

    state.currentAnswerState = {
        answered: true,
        type: 'multiple choice',
        selectedChoiceIdx: choiceIdx,
        isCorrect: isMatch,
        userText: choiceText,
        commentary: '',
        model: ''
    };

    // Background score recording
    recordAnswerInSession({
        questionIdx: state.currentIndex,
        questionEn: state.questionsEn[state.currentIndex],
        questionVi: state.questionsVi[state.currentIndex],
        title: q.title,
        userAnswer: choiceText,
        correctAnswer: q.correctAnswer,
        isCorrect: isMatch,
        percentage: isMatch ? 100 : 0,
        type: 'multiple choice'
    });

    const selectedItem = items[choiceIdx];
    const selectedSlot = selectedItem ? selectedItem.querySelector('.choice-icon-slot') : null;

    if (isMatch) {
        if (selectedItem) selectedItem.classList.add('is-correct');
        if (selectedSlot) selectedSlot.innerHTML = `<span class="choice-result-icon">${getAnimatedTickSvg(24)}</span>`;
    } else {
        if (selectedItem) selectedItem.classList.add('is-incorrect');
        if (selectedSlot) selectedSlot.innerHTML = `<span class="choice-result-icon">${getAnimatedCrossSvg(24)}</span>`;

        items.forEach((item, idx) => {
            const itemText = item.dataset.choice;
            if (itemText.trim().toLowerCase() === (q.correctAnswer || '').trim().toLowerCase()
                || ['a', 'b', 'c', 'd'][idx] === (q.correctAnswer || '').trim().toLowerCase()) {
                item.classList.add('is-correct');
                const slot = item.querySelector('.choice-icon-slot');
                if (slot) slot.innerHTML = `<span class="choice-result-icon">${getAnimatedTickSvg(24)}</span>`;
            }
        });
    }

    triggerAnsweredState();
}

function triggerAnsweredState() {
    state.hasAnsweredCurrent = true;
    if (elements.nextActionWrap) {
        elements.nextActionWrap.classList.remove('hidden');
    }
    updateNextButtonText();
}

/* ==========================================================================
   Game Over Screen & Statistics Presentation
   ========================================================================== */

function showGameOverScreen() {
    state.session.isGameOver = true;

    if (elements.finalScoreNum) elements.finalScoreNum.textContent = state.session.correctCount;
    if (elements.finalScoreTotal) elements.finalScoreTotal.textContent = state.session.targetCount;
    if (elements.statAnswered) elements.statAnswered.textContent = state.session.answeredCount;
    if (elements.statCorrect) elements.statCorrect.textContent = state.session.correctCount;
    if (elements.statWrong) elements.statWrong.textContent = state.session.wrongCount;

    updateGameOverLanguage();

    if (elements.gameOverModal) {
        elements.gameOverModal.classList.remove('hidden');
    }
}

function updateGameOverLanguage() {
    if (!elements.gameOverModal) return;

    const isVi = state.lang === 'VIE';
    if (elements.gameOverBadge) elements.gameOverBadge.textContent = isVi ? 'KẾT QUẢ ĐÁNH GIÁ' : 'ASSESSMENT COMPLETE';
    if (elements.gameOverTitle) elements.gameOverTitle.textContent = isVi ? 'Hoàn Thành Lượt Thi' : 'Session Complete';
    if (elements.gameOverSubtitle) elements.gameOverSubtitle.textContent = isVi
        ? 'Bạn đã hoàn thành 5 câu hỏi. Dưới đây là bảng thống kê kết quả:'
        : 'You have answered 5 questions. Here are your final results:';

    const pct = Math.round((state.session.correctCount / state.session.targetCount) * 100);
    if (elements.finalScorePct) {
        elements.finalScorePct.textContent = `${pct}% ${isVi ? 'ĐỘ CHÍNH XÁC' : 'ACCURACY'}`;
    }

    if (elements.statAnsweredLbl) elements.statAnsweredLbl.textContent = isVi ? 'Câu hỏi' : 'Questions';
    if (elements.statCorrectLbl) elements.statCorrectLbl.textContent = isVi ? 'Chính xác' : 'Correct';
    if (elements.statWrongLbl) elements.statWrongLbl.textContent = isVi ? 'Chưa đúng' : 'Wrong';
    if (elements.breakdownTitle) elements.breakdownTitle.textContent = isVi ? 'Chi Tiết 5 Câu Đã Làm' : 'Round Questions Breakdown';
    if (elements.restartBtnText) elements.restartBtnText.textContent = isVi ? 'Mở Khóa Để Làm Lại' : 'Unlock to Restart';

    renderRoundBreakdown();
}

function renderRoundBreakdown() {
    if (!elements.roundBreakdownList) return;
    elements.roundBreakdownList.innerHTML = '';

    const isVi = state.lang === 'VIE';

    state.session.history.forEach((item, idx) => {
        const entry = document.createElement('div');
        entry.className = 'breakdown-item';

        const qObj = isVi ? item.questionVi : item.questionEn;
        const qTitle = qObj?.title || item.title || `Question ${idx + 1}`;
        const refAnswer = qObj?.correctAnswer || item.correctAnswer || '';

        const statusTag = item.isCorrect
            ? `<span class="breakdown-status-tag is-correct">✓ ${isVi ? 'ĐÚNG' : 'CORRECT'}</span>`
            : `<span class="breakdown-status-tag is-wrong">✕ ${isVi ? 'SAI' : 'WRONG'}</span>`;

        let detailsHtml = '';
        if (item.isCorrect) {
            detailsHtml = `<div class="breakdown-details"><span>${isVi ? 'Đã chọn/nhập:' : 'Your answer:'} ${escapeHtml(item.userAnswer)}</span></div>`;
        } else {
            detailsHtml = `
                <div class="breakdown-details">
                    <span>${isVi ? 'Đã chọn/nhập:' : 'Your answer:'} <del>${escapeHtml(item.userAnswer)}</del></span>
                    <span>• ${isVi ? 'Đáp án đúng:' : 'Correct:'} <strong>${escapeHtml(refAnswer)}</strong></span>
                </div>
            `;
        }

        entry.innerHTML = `
            <div class="breakdown-item-top">
                <span class="breakdown-q-title"><strong>#${idx + 1}.</strong> ${escapeHtml(qTitle)}</span>
                ${statusTag}
            </div>
            ${detailsHtml}
        `;

        elements.roundBreakdownList.appendChild(entry);
    });
}

/* ==========================================================================
   Search Modal
   ========================================================================== */

function openSearchModal() {
    if (state.isLocked || !elements.searchModal) return;
    elements.searchModal.classList.remove('hidden');
    if (elements.searchInput) elements.searchInput.value = '';
    state.searchQuery = '';
    renderSearchResults();
    if (elements.searchInput) {
        setTimeout(() => elements.searchInput.focus(), 50);
    }
}

function closeSearchModal() {
    if (elements.searchModal) elements.searchModal.classList.add('hidden');
}

function renderSearchResults() {
    if (!elements.searchResultsList) return;
    const query = (elements.searchInput ? elements.searchInput.value : '').trim().toLowerCase();
    state.searchQuery = query;

    const filtered = state.questions.filter(q => {
        if (state.searchFilter !== 'all' && q.type !== state.searchFilter) return false;
        if (!query) return true;
        return q.title.toLowerCase().includes(query) || (q.correctAnswer || '').toLowerCase().includes(query);
    });

    elements.searchResultsList.innerHTML = '';
    if (elements.searchResultCount) {
        elements.searchResultCount.textContent = `${filtered.length} questions`;
    }

    if (filtered.length === 0) {
        elements.searchResultsList.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-secondary);">No results found.</div>`;
        return;
    }

    filtered.forEach(q => {
        const entry = document.createElement('div');
        entry.className = 'search-entry';
        entry.innerHTML = `
            <span class="search-entry-title">${escapeHtml(q.title)}</span>
            <span class="search-entry-type">${q.type === 'multiple choice' ? 'MC' : 'Short'}</span>
        `;
        entry.addEventListener('click', () => {
            const targetIdx = state.questions.findIndex(item => item.title === q.title);
            if (targetIdx !== -1) displayQuestion(targetIdx);
            closeSearchModal();
        });
        elements.searchResultsList.appendChild(entry);
    });
}

/* ==========================================================================
   CSV Modal
   ========================================================================== */

function openCsvModal() {
    if (state.isLocked || !elements.csvModal) return;
    elements.csvModal.classList.remove('hidden');
}

function closeCsvModal() {
    if (elements.csvModal) elements.csvModal.classList.add('hidden');
}

function handleCsvFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        if (loadQuestionsFromCSVText(e.target.result)) {
            closeCsvModal();
        }
    };
    reader.readAsText(file);
}

/* ==========================================================================
   Lightbox
   ========================================================================== */

function openLightbox(src) {
    if (!elements.imageLightbox || !elements.lightboxImg) return;
    elements.lightboxImg.src = src;
    elements.imageLightbox.classList.remove('hidden');
}

function closeLightbox() {
    if (!elements.imageLightbox || !elements.lightboxImg) return;
    elements.imageLightbox.classList.add('hidden');
    elements.lightboxImg.src = '';
}

function escapeHtml(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

/* ==========================================================================
   Event Listeners Setup
   ========================================================================== */

function initEvents() {
    on(elements.randomizeBtn, () => {
        if (state.isLocked) return;
        if (state.hasAnsweredCurrent && state.session.answeredCount >= state.session.targetCount) {
            showGameOverScreen();
        } else {
            randomizeQuestion();
        }
    });

    on(elements.searchBtn, () => {
        if (!state.isLocked) openSearchModal();
    });

    on(elements.csvManagerBtn, () => {
        if (!state.isLocked) openCsvModal();
    });

    // NEXT -> Action Click
    on(elements.nextQuestionBtn, 'click', () => {
        if (state.session.answeredCount >= state.session.targetCount) {
            showGameOverScreen();
        } else {
            randomizeQuestion();
        }
    });

    // Search dialog
    on(elements.clearSearchBtn, 'click', closeSearchModal);
    on(elements.searchInput, 'input', renderSearchResults);
    if (elements.filterButtons) {
        elements.filterButtons.forEach(btn => {
            on(btn, 'click', () => {
                elements.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.searchFilter = btn.dataset.filter;
                renderSearchResults();
            });
        });
    }

    // CSV dialog
    on(elements.closeCsvModalBtn, 'click', closeCsvModal);
    on(elements.closeCsvDoneBtn, 'click', closeCsvModal);

    if (elements.dropZone) {
        on(elements.dropZone, 'dragover', (e) => e.preventDefault());
        on(elements.dropZone, 'drop', (e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length > 0) handleCsvFile(e.dataTransfer.files[0]);
        });
    }

    on(elements.csvFileInput, 'change', (e) => {
        if (e.target.files.length > 0) handleCsvFile(e.target.files[0]);
    });

    on(elements.loadPastedCsvBtn, 'click', () => {
        const text = elements.csvRawText ? elements.csvRawText.value : '';
        if (!text.trim()) return;
        if (loadQuestionsFromCSVText(text)) {
            closeCsvModal();
            if (elements.csvRawText) elements.csvRawText.value = '';
        }
    });

    on(elements.loadSampleCsvBtn, 'click', () => {
        loadQuestionsFromCSVText(MAIN_QUESTIONS_CSV);
        closeCsvModal();
    });

    // Lightbox
    on(elements.questionImage, 'click', () => {
        if (elements.questionImage && elements.questionImage.src) {
            openLightbox(elements.questionImage.src);
        }
    });
    on(elements.lightboxClose, 'click', closeLightbox);
    on(elements.imageLightbox, 'click', (e) => {
        if (e.target === elements.imageLightbox) closeLightbox();
    });

    // Modal backdrop click-to-close (do NOT close gameOverModal on backdrop click to enforce unlock!)
    on(elements.searchModal, 'click', (e) => {
        if (e.target === elements.searchModal) closeSearchModal();
    });
    on(elements.csvModal, 'click', (e) => {
        if (e.target === elements.csvModal) closeCsvModal();
    });
    on(elements.lockModal, 'click', (e) => {
        if (e.target === elements.lockModal) closeLockModal();
    });

    // ESC to close open modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchModal();
            closeCsvModal();
            closeLockModal();
            closeLightbox();
        }
    });
}

/* ==========================================================================
   Initialization (Fail-Safe)
   ========================================================================== */

async function init() {
    elements = getElements();

    // 1. Initialize language (EN / VIE) and load questions immediately
    try { initLanguage(); } catch (err) { console.warn('initLanguage error:', err); }

    // 2. Safely initialize controls and event listeners
    try { initTheme(); } catch (err) { console.warn('initTheme error:', err); }
    try { initLockSystem(); } catch (err) { console.warn('initLockSystem error:', err); }
    try { initEvents(); } catch (err) { console.warn('initEvents error:', err); }
}

// Immediate execution if DOM is ready, otherwise wait for ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
