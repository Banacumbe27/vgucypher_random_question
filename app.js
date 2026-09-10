/**
 * VGU CYPHER — Minimalist Question System
 * Strict Monochrome Engine with Password Lock, Animated NEXT Action & Hand-Drawn SVG Ticks/Crosses
 */

const CSV_DATA_EN = `question_title,image,type,choice_1,choice_2,choice_3,choice_4,correct_answer,ignore_ai
You delete a file and empty the Recycle Bin. Has the file completely disappeared from the hard drive?,,multiple choice,"Yes, once deleted it is gone forever and cannot be recovered.","Not necessarily — the data usually remains on the disk until overwritten, and can often be recovered with the right tools.",Only if the storage device is a Solid State Drive (SSD).,Only if you also delete the file from Google Drive.,"Not necessarily — the data usually remains on the disk until overwritten, and can often be recovered with the right tools.",
You open your browser in Incognito/Private mode to search for information. Who CANNOT see your browsing history?,,multiple choice,Your Internet Service Provider (ISP),Your company or school network administrator,Someone else using the same computer afterward,The website you are visiting,Someone else using the same computer afterward,
"You turn on a VPN while browsing. Does this mean no one can see what you are doing online, not even the VPN provider?",,multiple choice,"True, a VPN makes you completely anonymous to everyone on the internet.","False, a VPN only hides your activity from your ISP and local network outsiders — the VPN provider itself can still see your traffic.","True, a VPN encrypts data so that nobody can see it, including the VPN service provider.","False, a VPN is only used to change your IP address for streaming regional media.","False, a VPN only hides your activity from your ISP and local network outsiders — the VPN provider itself can still see your traffic.",
"A website asks for your password, then sends a verification code to your email account (which uses the exact same password). Is this true two-factor authentication (2FA)?",,multiple choice,"Yes, because authentication consists of two sequential verification steps.","No, because both steps rely on the same factor category (something you know), rather than two distinct factor types.","Yes, because email verification is managed by an independent third-party provider.","No, because email verification can never be considered an authentication mechanism.","No, because both steps rely on the same factor category (something you know), rather than two distinct factor types.",
A company has a firewall installed. An employee still gets infected with malware by opening a malicious email attachment. Did the firewall fail?,,multiple choice,"Yes, firewalls are designed to detect and block all cyber threats.","No, firewalls control network traffic based on rules — they do not inspect email attachments or stop user execution actions.","Yes, this security incident proves the firewall is defective.","No, firewalls are intended strictly to replace antivirus software.","No, firewalls control network traffic based on rules — they do not inspect email attachments or stop user execution actions.",
An online service you use announces a data breach. You immediately change your password for that service. Are you safe now?,,multiple choice,"Yes, updating the password on the breached service is completely sufficient.","Not necessarily — if you reused that same password on other accounts, those accounts are still at high risk.","No, you must permanently delete the compromised account.","No, you must also change your primary email address to regain security.","Not necessarily — if you reused that same password on other accounts, those accounts are still at high risk.",
A website address begins with 'https://' and displays a padlock icon. Does this guarantee that the website is completely safe and trustworthy?,,multiple choice,"Yes, the padlock confirms that the website owner is fully legitimate and verified.","No, HTTPS only encrypts communication in transit between the browser and the server; it does not guarantee the site itself is benign or trustworthy.","Yes, HTTPS technology automatically scans and blocks all phishing scripts and malware.","No, HTTPS is an obsolete protocol that provides no active security benefits.","No, HTTPS only encrypts communication in transit between the browser and the server; it does not guarantee the site itself is benign or trustworthy.",
"You receive an account verification email appearing to be from PayPal with authentic logos and professional formatting, sent from 'support@paypa1.com'. What is the most suspicious indicator that this is phishing?",,multiple choice,The inclusion of an authentic PayPal logo,The professional layout and formal wording,The misspelled domain name ('paypa1.com' replacing the letter 'l' with the number '1'),The request being delivered via an electronic email service,The misspelled domain name ('paypa1.com' replacing the letter 'l' with the number '1'),
"What does a zip bomb do to a target computer, and is it classified as a cyber attack?",,short_answer,,,,,"It temporarily crashes or freezes the computer; Yes, it is considered a cyber attack.",
"In the Python programming language, what are the three fundamental properties of a set?",,short_answer,,,,,"Unordered, unchangeable, unindexed",
What is the primary purpose of a firewall in a network security system?,,short_answer,,,,,To act as a digital barrier inspecting incoming and outgoing traffic and blocking unauthorized access based on security rules.,
"What is a Trojan attack, and how does it differ fundamentally from a computer virus?",,short_answer,,,,,"A Trojan disguises itself as a legitimate application and does not replicate automatically, whereas a virus self-replicates.",
Explain the primary difference between symmetric key encryption and asymmetric key encryption regarding key usage.,,short_answer,,,,,"Symmetric encryption uses a single shared key for both encryption and decryption, whereas asymmetric encryption uses a public-private key pair.",
Which network protocol is primarily responsible for assigning dynamic IP addresses to devices on a local network?,,short_answer,,,,,DHCP (Dynamic Host Configuration Protocol),
What does the acronym HTML stand for?,,short_answer,,,,,HyperText Markup Language,
What is the role of a payload in a Trojan attack?,,short_answer,,,,,The payload is the actual malicious code that executes harmful actions or grants unauthorized control on the infected system.,
How many layers are in the standard TCP/IP protocol suite?,,short_answer,,,,,4 layers,
What is the fundamental difference between phishing and pharming?,,short_answer,,,,,"Phishing tricks users via fraudulent messages to steal confidential information, while pharming silently redirects users from legitimate addresses to spoofed websites.",
Decrypt the ciphertext 'uftbxogdqlzhchmg' using a Caesar cipher shifted one character backward (shift -1).,,short_answer,,,,,vgucyphermaidinh,true
What is the German noun for 'library'?,,short_answer,,,,,Bibliothek,`;

const CSV_DATA_VI = `question_title,image,type,choice_1,choice_2,choice_3,choice_4,correct_answer,ignore_ai
Bạn xóa một tệp và dọn sạch Thùng rác (Recycle Bin). Tệp đó đã biến mất hoàn toàn khỏi ổ cứng chưa?,,multiple choice,"Có, một khi đã xóa thì tệp sẽ biến mất vĩnh viễn và không thể khôi phục.",Chưa chắc — dữ liệu thường vẫn còn trên đĩa cho đến khi bị ghi đè và thường có thể khôi phục bằng công cụ phù hợp.,Chỉ khi thiết bị lưu trữ là ổ cứng thể rắn (SSD).,Chỉ khi bạn cũng xóa tệp đó khỏi Google Drive.,Chưa chắc — dữ liệu thường vẫn còn trên đĩa cho đến khi bị ghi đè và thường có thể khôi phục bằng công cụ phù hợp.,
Bạn mở trình duyệt ở chế độ Ẩn danh (Incognito/Private) để tìm kiếm thông tin. Ai KHÔNG THỂ xem lịch sử duyệt web của bạn?,,multiple choice,Nhà cung cấp dịch vụ Internet (ISP) của bạn,Quản trị viên mạng của công ty hoặc trường học,Người khác sử dụng cùng chiếc máy tính đó sau bạn,Trang web mà bạn đang truy cập,Người khác sử dụng cùng chiếc máy tính đó sau bạn,
"Bạn bật VPN khi duyệt web. Điều này có đồng nghĩa không ai có thể thấy bạn làm gì trên mạng, kể cả nhà cung cấp VPN không?",,multiple choice,"Đúng, VPN giúp bạn ẩn danh hoàn toàn với tất cả mọi người trên internet.","Sai, VPN chỉ ẩn hoạt động của bạn khỏi ISP và mạng cục bộ — chính nhà cung cấp VPN vẫn có thể thấy lưu lượng truy cập của bạn.","Đúng, VPN mã hóa dữ liệu nên không ai có thể xem được, kể cả nhà cung cấp dịch vụ VPN.","Sai, VPN chỉ dùng để đổi địa chỉ IP nhằm xem nội dung bị giới hạn khu vực.","Sai, VPN chỉ ẩn hoạt động của bạn khỏi ISP và mạng cục bộ — chính nhà cung cấp VPN vẫn có thể thấy lưu lượng truy cập của bạn.",
"Một trang web yêu cầu mật khẩu của bạn, sau đó gửi mã xác minh về email (vốn dùng chung chính mật khẩu đó). Đây có phải là xác thực hai yếu tố (2FA) thực sự không?",,multiple choice,"Có, vì quá trình xác thực gồm hai bước kiểm tra tuần tự.","Không, vì cả hai bước đều dựa trên cùng một loại yếu tố (điều bạn biết), thay vì hai loại yếu tố khác nhau.","Có, vì việc xác minh qua email được quản lý bởi một bên thứ ba độc lập.","Không, vì xác minh qua email không bao giờ được coi là cơ chế xác thực.","Không, vì cả hai bước đều dựa trên cùng một loại yếu tố (điều bạn biết), thay vì hai loại yếu tố khác nhau.",
Một công ty đã cài đặt tường lửa. Một nhân viên vẫn bị nhiễm mã độc do mở tệp đính kèm độc hại trong email. Tường lửa có bị lỗi/thất bại không?,,multiple choice,"Có, tường lửa được thiết kế để phát hiện và ngăn chặn mọi mối đe dọa mạng.","Không, tường lửa kiểm soát lưu lượng mạng dựa trên quy tắc — nó không kiểm tra tệp đính kèm email hay ngăn chặn thao tác mở tệp của người dùng.","Có, sự cố an ninh này chứng minh tường lửa bị lỗi.","Không, tường lửa chỉ nhằm mục đích thay thế phần mềm diệt virus.","Không, tường lửa kiểm soát lưu lượng mạng dựa trên quy tắc — nó không kiểm tra tệp đính kèm email hay ngăn chặn thao tác mở tệp của người dùng.",
Một dịch vụ trực tuyến bạn sử dụng thông báo bị rò rỉ dữ liệu. Bạn đổi ngay mật khẩu cho dịch vụ đó. Bạn đã an toàn chưa?,,multiple choice,"Có, việc cập nhật mật khẩu trên dịch vụ bị rò rỉ là hoàn toàn đủ.","Chưa chắc — nếu bạn dùng lại mật khẩu đó cho các tài khoản khác, những tài khoản kia vẫn có nguy cơ bị xâm nhập rất cao.","Chưa, bạn phải xóa vĩnh viễn tài khoản bị lộ đó.","Chưa, bạn phải đổi cả địa chỉ email chính để lấy lại an toàn.","Chưa chắc — nếu bạn dùng lại mật khẩu đó cho các tài khoản khác, những tài khoản kia vẫn có nguy cơ bị xâm nhập rất cao.",
Địa chỉ trang web bắt đầu bằng 'https://' và hiển thị biểu tượng ổ khóa. Điều này có đảm bảo trang web hoàn toàn an toàn và đáng tin cậy không?,,multiple choice,"Có, ổ khóa xác nhận chủ sở hữu trang web hoàn toàn hợp pháp và đã được xác minh.","Không, HTTPS chỉ mã hóa đường truyền giữa trình duyệt và máy chủ; nó không đảm bảo bản thân trang web là lành tính hay đáng tin cậy.","Có, công nghệ HTTPS tự động quét và chặn mọi mã độc cùng tập lệnh lừa đảo.","Không, HTTPS là một giao thức lỗi thời không mang lại lợi ích bảo mật nào.","Không, HTTPS chỉ mã hóa đường truyền giữa trình duyệt và máy chủ; nó không đảm bảo bản thân trang web là lành tính hay đáng tin cậy.",
"Bạn nhận được email xác minh tài khoản trông như từ PayPal với logo chuẩn và định dạng chuyên nghiệp, gửi từ 'support@paypa1.com'. Dấu hiệu đáng ngờ nhất cho thấy đây là lừa đảo (phishing) là gì?",,multiple choice,Sự xuất hiện của logo PayPal chính hãng,Bố cục chuyên nghiệp và ngôn từ trang trọng,Tên miền bị viết sai chính tả ('paypa1.com' thay chữ 'l' bằng số '1'),Yêu cầu được gửi thông qua dịch vụ thư điện tử,Tên miền bị viết sai chính tả ('paypa1.com' thay chữ 'l' bằng số '1'),
"Tệp nén 'zip bomb' làm gì với máy tính mục tiêu, và nó có được coi là một cuộc tấn công mạng không?",,short_answer,,,,,"Làm treo hoặc đóng băng máy tính tạm thời; Có, nó được coi là một cuộc tấn công mạng.",
"Trong ngôn ngữ lập trình Python, ba đặc tính cơ bản của một tập hợp (set) là gì?",,short_answer,,,,,"Không có thứ tự, không thể thay đổi, không có chỉ mục (Unordered, unchangeable, unindexed)",
Mục đích chính của tường lửa trong hệ thống an ninh mạng là gì?,,short_answer,,,,,Đóng vai trò rào chắn kiểm tra lưu lượng vào/ra và chặn truy cập trái phép dựa trên các quy tắc bảo mật.,
"Tấn công Trojan là gì, và nó khác biệt cơ bản như thế nào so với virus máy tính?",,short_answer,,,,,"Trojan ngụy trang thành phần mềm hợp pháp và không tự nhân bản, trong khi virus có khả năng tự nhân bản.",
Giải thích điểm khác biệt chính giữa mã hóa khóa đối xứng và mã hóa khóa bất đối xứng về việc sử dụng khóa.,,short_answer,,,,,"Mã hóa đối xứng dùng chung một khóa bí mật cho cả mã hóa và giải mã, còn mã hóa bất đối xứng dùng cặp khóa công khai và khóa riêng tư.",
Giao thức mạng nào chịu trách nhiệm chính trong việc cấp phát địa chỉ IP động cho các thiết bị trong mạng cục bộ?,,short_answer,,,,,DHCP (Dynamic Host Configuration Protocol),
Từ viết tắt HTML là viết tắt của cụm từ nào?,,short_answer,,,,,HyperText Markup Language,
Vai trò của phần tải trọng (payload) trong một cuộc tấn công Trojan là gì?,,short_answer,,,,,Payload là đoạn mã độc hại thực sự thực thi các hành động phá hoại hoặc cấp quyền điều khiển trái phép trên hệ thống.,
Mô hình bộ giao thức TCP/IP chuẩn có bao nhiêu tầng (layer)?,,short_answer,,,,,4 tầng (4 layers),
Điểm khác biệt cơ bản giữa tấn công Phishing và Pharming là gì?,,short_answer,,,,,"Phishing lừa người dùng qua tin nhắn giả mạo, còn Pharming âm thầm chuyển hướng người dùng sang web giả mạo qua can thiệp DNS/định tuyến.",
Giải mã bản mã 'uftbxogdqlzhchmg' bằng mật mã Caesar dịch lùi một ký tự (shift -1).,,short_answer,,,,,vgucyphermaidinh,true
Danh từ tiếng Đức mang nghĩa 'thư viện' là gì?,,short_answer,,,,,Bibliothek,`;

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

        // Lock Modal
        lockModal: document.getElementById('lockModal'),
        lockModalTitle: document.getElementById('lockModalTitle'),
        lockPasswordInput: document.getElementById('lockPasswordInput'),
        lockErrorText: document.getElementById('lockErrorText'),
        cancelLockBtn: document.getElementById('cancelLockBtn'),
        confirmLockBtn: document.getElementById('confirmLockBtn'),

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
    state.questionsEn = processQuestionRows(parseCSV(CSV_DATA_EN));
    state.questionsVi = processQuestionRows(parseCSV(CSV_DATA_VI));

    state.questions = state.lang === 'VIE' ? state.questionsVi : state.questionsEn;
    state.unvisitedPool = state.questions.map((_, idx) => idx);

    applyLanguage(state.lang, true);
    on(elements.langToggleBtn, 'click', toggleLanguage);
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
        } else {
            renderInteractiveArea(q);
        }
    } else {
        // Short Answer: answer key stays the same, only the question changes
        if (!ansState || !ansState.answered) {
            const input = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-field') : null;
            const submitBtn = elements.interactiveArea ? elements.interactiveArea.querySelector('.btn-solid') : null;
            if (input) {
                input.placeholder = state.lang === 'VIE' ? 'Nhập câu trả lời của bạn tại đây...' : 'Type your answer here...';
                if (ansState && ansState.userText) {
                    input.value = ansState.userText;
                }
            }
            if (submitBtn) {
                submitBtn.textContent = state.lang === 'VIE' ? 'Gửi' : 'Submit';
            }
        } else {
            // Already answered: update labels and reference answer to match the current language
            const correctLabel = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-correct-label') : null;
            if (correctLabel) {
                correctLabel.textContent = state.lang === 'VIE' ? 'ĐÁP ÁN MẪU:' : 'CORRECT:';
            }
            const correctText = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-correct-text') : null;
            if (correctText) {
                correctText.textContent = q.correctAnswer;
            }
            const commentaryBadge = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-ai-badge') : null;
            if (commentaryBadge) {
                if (ansState && ansState.isCorrect) {
                    commentaryBadge.textContent = `${state.lang === 'VIE' ? 'Độ khớp' : 'Match score'}: ${ansState.percentage}%`;
                } else {
                    commentaryBadge.textContent = state.lang === 'VIE' ? 'Tại sao bạn sai' : 'Why you are wrong';
                }
            }
            const matchBadge = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-match-badge') : null;
            if (matchBadge && ansState && ansState.percentage !== undefined) {
                matchBadge.textContent = `${ansState.percentage}% ${state.lang === 'VIE' ? 'khớp' : 'match'}`;
            }
            const matchPill = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-match-pill') : null;
            if (matchPill && ansState && ansState.percentage !== undefined) {
                matchPill.textContent = `${state.lang === 'VIE' ? 'Độ khớp' : 'Match'}: ${ansState.percentage}%`;
            }
            const commentaryText = elements.interactiveArea ? elements.interactiveArea.querySelector('.sa-ai-commentary-text') : null;
            if (commentaryText && ansState && ansState.ignore_ai && !ansState.isCorrect) {
                commentaryText.textContent = state.lang === 'VIE' 
                    ? 'Mật mã yêu cầu khớp chính xác từng ký tự/từ.' 
                    : 'Passcode requires an exact word-by-word match.';
            }
            if (elements.nextActionWrap) {
                elements.nextActionWrap.classList.remove('hidden');
            }
        }
    }
}

/* ==========================================================================
   Theme Management (Strict Monochrome)
   ========================================================================== */

function initTheme() {
    applyTheme(state.theme);
    on(elements.themeToggleBtn, 'click', toggleTheme);
}

function toggleTheme() {
    state.theme = state.theme === 'white' ? 'dark' : 'white';
    applyTheme(state.theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('cypher_theme', theme);
    } catch (e) {}

    if (elements.themeIcon) {
        if (theme === 'white') {
            // Moon icon (click to switch to dark)
            elements.themeIcon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
            if (elements.themeToggleBtn) elements.themeToggleBtn.title = 'Switch to Dark Mode';
        } else {
            // Sun icon (click to switch to light)
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
   Password Lock System
   ========================================================================== */

function initLockSystem() {
    updateLockUI();

    on(elements.lockToggleBtn, 'click', openLockModal);
    on(elements.cancelLockBtn, 'click', closeLockModal);
    on(elements.confirmLockBtn, 'click', handleLockConfirm);

    on(elements.lockPasswordInput, 'keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLockConfirm();
        }
    });
}

function openLockModal() {
    if (!elements.lockModal) return;
    if (elements.lockErrorText) elements.lockErrorText.classList.add('hidden');
    if (elements.lockPasswordInput) {
        elements.lockPasswordInput.value = '';
        elements.lockPasswordInput.placeholder = ''; // No placeholder text
    }
    elements.lockModal.classList.remove('hidden');

    if (state.isLocked) {
        if (elements.lockModalTitle) elements.lockModalTitle.textContent = 'Unlock Controls';
        if (elements.confirmLockBtn) elements.confirmLockBtn.textContent = 'Unlock';
    } else {
        if (elements.lockModalTitle) elements.lockModalTitle.textContent = 'Lock Controls';
        if (elements.confirmLockBtn) elements.confirmLockBtn.textContent = 'Lock';
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
   CSV Parser
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

function processQuestionRows(rows) {
    if (!rows || rows.length === 0) return [];

    let startIndex = 0;
    const headerRow = rows[0].map(c => c.toLowerCase().trim());
    let ignoreAiColIdx = -1;

    if (headerRow[0].includes('question') || headerRow[2]?.includes('type')) {
        startIndex = 1;
        ignoreAiColIdx = headerRow.findIndex(h =>
            h === 'ignore_ai' || h === 'ignore-ai' || h === 'ignore ai' || h === 'ignoreai'
        );
    }

    const parsedQuestions = [];

    for (let r = startIndex; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;

        const title = row[0] || '';
        if (!title.trim()) continue;

        const image = (row[1] || '').trim();
        const rawType = (row[2] || '').toLowerCase().trim();
        const isMultipleChoice = rawType.includes('multiple') || rawType.includes('choice') || rawType === 'mc';

        let choices = [];
        let correctAnswer = '';

        if (isMultipleChoice) {
            choices = [
                row[3] || '',
                row[4] || '',
                row[5] || '',
                row[6] || ''
            ].map(c => c.trim()).filter(Boolean);

            correctAnswer = (row[7] || '').trim();
            if (!correctAnswer && row.length > 7) {
                correctAnswer = (row[row.length - 1] || '').trim();
            }
        } else {
            if (row[7] && row[7].trim()) {
                correctAnswer = row[7].trim();
            } else {
                for (let c = 3; c < row.length; c++) {
                    if (row[c] && row[c].trim()) {
                        correctAnswer = row[c].trim();
                        break;
                    }
                }
            }
        }

        // Determine ignore_ai flag (for word-by-word passcode matching)
        let ignoreAi = false;
        if (ignoreAiColIdx !== -1 && row[ignoreAiColIdx] !== undefined) {
            const v = row[ignoreAiColIdx].trim().toLowerCase();
            ignoreAi = (v === 'true' || v === '1' || v === 'yes' || v === 't');
        } else if (row.length > 8 && row[8] !== undefined) {
            const v = row[8].trim().toLowerCase();
            ignoreAi = (v === 'true' || v === '1' || v === 'yes' || v === 't');
        }

        // Safeguard for passcode questions (e.g. Caesar cipher)
        if (!ignoreAi && (title.includes('uftbxogdqlzhchmg') || correctAnswer.toLowerCase() === 'vgucyphermaidinh')) {
            ignoreAi = true;
        }

        parsedQuestions.push({
            id: parsedQuestions.length + 1,
            title: title.trim(),
            image: image,
            type: isMultipleChoice ? 'multiple choice' : 'short_answer',
            choices: choices,
            correctAnswer: correctAnswer,
            ignore_ai: Boolean(ignoreAi)
        });
    }

    return parsedQuestions;
}

/* ==========================================================================
   Mistral AI Short Answer Grading Engine
   ========================================================================== */

const DEFAULT_MISTRAL_API_KEY = '';

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
        // 1. Try Vercel Serverless API first (secure backend env variables)
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
        } catch (e) {
            // /api/grade not reachable (e.g. running standalone local python http.server), fallback to direct API
        }

        // 2. Direct client-side Mistral API call
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

    let rawText = '';
    let usedModel = 'mistral-small-latest';

    try {
        // Attempt requested mistral-small-latest first
        let response = await callMistral('mistral-small-latest');

        // If rate-limited (429) or model tier restricted, fall back seamlessly to ministral-8b-latest
        if (!response.ok) {
            console.warn(`[Mistral] Primary model returned status ${response.status}. Falling back to ministral-8b-latest...`);
            usedModel = 'ministral-8b-latest';
            response = await callMistral('ministral-8b-latest');
        }

        if (!response.ok) {
            console.warn(`[Mistral] Fallback model returned status ${response.status}. Trying open-mistral-7b...`);
            usedModel = 'open-mistral-7b';
            response = await callMistral('open-mistral-7b');
        }

        if (response.ok) {
            const data = await response.json();
            if (data._modelUsed) usedModel = data._modelUsed;
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                rawText = data.choices[0].message.content || '';
            }
        }
    } catch (err) {
        console.error('[Mistral API Error]', err);
    }

    // Parse the output with percentage extraction
    if (rawText) {
        const clean = rawText.replace(/```[\s\S]*?```/g, '').replace(/[\*\`]/g, '').trim();
        const parts = clean.split('|').map(p => p.trim());

        let isCorrect = false;
        let percentage = null;
        let commentary = '';

        if (parts.length >= 3) {
            const verdict = parts[0].toLowerCase();
            isCorrect = verdict.includes('true') && !verdict.includes('false');
            const numMatch = parts[1].match(/\d+/);
            if (numMatch) percentage = parseInt(numMatch[0], 10);
            commentary = parts.slice(2).join(' | ').trim();
        } else if (parts.length === 2) {
            const verdict = parts[0].toLowerCase();
            isCorrect = verdict.includes('true') && !verdict.includes('false');
            const numMatch = parts[1].match(/(\d+)%/);
            if (numMatch) {
                percentage = parseInt(numMatch[1], 10);
                commentary = parts[1].replace(/^\d+%\s*:?\s*/, '').trim();
            } else {
                commentary = parts[1].trim();
            }
        } else {
            isCorrect = clean.toLowerCase().includes('true') && !clean.toLowerCase().includes('false');
            commentary = clean;
        }

        if (percentage === null) {
            percentage = isCorrect ? 100 : 0;
        }

        percentage = Math.max(0, Math.min(100, percentage));

        return {
            isCorrect: isCorrect,
            percentage: percentage,
            commentary: commentary,
            model: usedModel,
            raw: rawText
        };
    }

    // Offline / Network fallback to exact string matching
    const offlineMatch = studentAnswer.trim().toLowerCase() === (referenceAnswer || '').trim().toLowerCase();
    return {
        isCorrect: offlineMatch,
        percentage: offlineMatch ? 100 : 0,
        commentary: offlineMatch ? '' : (isVi ? 'Không thể kết nối AI, đã đối chiếu theo đáp án mẫu.' : 'AI grading offline, evaluated against reference answer.'),
        model: 'offline-fallback'
    };
}

/* ==========================================================================
   Question System & Display
   ========================================================================== */

function loadQuestionsFromCSVText(csvText) {
    const rawRows = parseCSV(csvText);
    const questions = processQuestionRows(rawRows);

    if (questions.length === 0) return false;

    state.questions = questions;
    state.unvisitedPool = questions.map((_, idx) => idx);
    state.currentIndex = -1;

    randomizeQuestion();
    return true;
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
            // If answer matches directly while typing, show the result immediately!
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
            if (state.hasAnsweredCurrent) return; // Only submit ONCE
            const val = input.value.trim();
            if (!val) return;

            state.hasAnsweredCurrent = true;
            input.disabled = true;
            submitBtn.disabled = true;

            let gradeResult;

            // 1. Direct match: show result IMMEDIATELY without calling AI or waiting for spinner!
            if (checkDirectAnswerMatch(val, q)) {
                gradeResult = {
                    isCorrect: true,
                    percentage: 100,
                    commentary: '',
                    model: 'direct-match'
                };
            } else if (q.ignore_ai) {
                // Passcode question that failed exact match
                gradeResult = {
                    isCorrect: false,
                    percentage: 0,
                    commentary: state.lang === 'VIE'
                        ? 'Mật mã yêu cầu khớp chính xác từng ký tự/từ.'
                        : 'Passcode requires an exact word-by-word match.',
                    model: 'passcode-exact'
                };
            } else {
                // Show clean evaluating indicator and evaluate with Mistral
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

            form.innerHTML = '';
            const resultDisplay = document.createElement('div');
            resultDisplay.className = `sa-result-display ${gradeResult.isCorrect ? 'is-correct' : 'is-incorrect'}`;

            const matchBadgeHtml = `
                <span class="sa-match-badge ${gradeResult.isCorrect ? 'match-pass' : 'match-fail'}">
                    ${gradeResult.percentage}% ${state.lang === 'VIE' ? 'khớp' : 'match'}
                </span>
            `;

            if (gradeResult.isCorrect) {
                // Correct: Put green tick next to answer and match percentage
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
                // Incorrect: Strike through answer in red, show red cross, match percentage, correct answer and commentary
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

    const selectedItem = items[choiceIdx];
    const selectedSlot = selectedItem ? selectedItem.querySelector('.choice-icon-slot') : null;

    if (isMatch) {
        if (selectedItem) selectedItem.classList.add('is-correct');
        if (selectedSlot) selectedSlot.innerHTML = `<span class="choice-result-icon">${getAnimatedTickSvg(24)}</span>`;
    } else {
        if (selectedItem) selectedItem.classList.add('is-incorrect');
        if (selectedSlot) selectedSlot.innerHTML = `<span class="choice-result-icon">${getAnimatedCrossSvg(24)}</span>`;

        // Highlight and put green tick on the actual correct choice
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
    on(elements.randomizeBtn, 'click', () => {
        if (!state.isLocked) randomizeQuestion();
    });

    on(elements.searchBtn, 'click', () => {
        if (!state.isLocked) openSearchModal();
    });

    on(elements.csvManagerBtn, 'click', () => {
        if (!state.isLocked) openCsvModal();
    });

    // NEXT -> Action Click
    on(elements.nextQuestionBtn, 'click', () => {
        randomizeQuestion();
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
        const sampleData = state.lang === 'VIE' ? CSV_DATA_VI : CSV_DATA_EN;
        loadQuestionsFromCSVText(sampleData);
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

    // Modal backdrop click-to-close
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
