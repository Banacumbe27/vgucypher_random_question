# Kế hoạch & Prompt Chấm điểm Tự động với Mistral AI (Short Answer Grading)

## 1. Cấu hình Model & Các nguyên tắc cốt lõi

- **Model chính**: `mistral-small-latest` (Mistral Small).
- **Fallback tự động**: Nếu model chính trả về lỗi 429 hoặc giới hạn tier, hệ thống tự động fallback sang `ministral-8b-latest` / `open-mistral-7b` để đảm bảo bài thi không bao giờ bị gián đoạn.
- **Đánh giá theo tỷ lệ phần trăm (0% - 100%)**: >= 75% là đạt (`true`), < 75% là chưa đạt (`false`).
- **Nguyên tắc chấm ý**: **"Không cần chấm về mặt từ ngữ diễn đạt, miễn đúng ý"**. Chấp nhận diễn đạt tự do, bình dân, viết tắt, gạch đầu dòng, từ đồng nghĩa hoặc lỗi chính tả nhỏ miễn là đúng ý và bản chất kỹ thuật.
- **Hỗ trợ đa ngôn ngữ (Multilingual Support)**: AI bắt buộc phải chấp nhận câu trả lời bằng bất kỳ ngôn ngữ nào (tiếng Việt, tiếng Anh, hoặc pha trộn các thuật ngữ), không trừ điểm vì khác ngôn ngữ với câu hỏi/đáp án mẫu miễn là đúng ý.
- **Cờ `ignore_ai` dành riêng cho câu hỏi Passcode/Mật mã**:
  - Các câu hỏi mang tính mật mã tuyệt đối (ví dụ giải mã Caesar cipher: `uftbxogdqlzhchmg` -> `vgucyphermaidinh`) yêu cầu khớp chính xác từng ký tự/từ (word-by-word exact match).
  - Với các câu này, hệ thống gắn cờ `ignore_ai = true`, bỏ qua việc gọi AI để kiểm tra chuỗi chuẩn hóa trực tiếp (100% khi đúng, 0% khi sai).
  - Các câu hỏi danh xưng kỹ thuật (như HTML, DHCP, 4 layers, Firewall...) **KHÔNG** đặt cờ `ignore_ai` vì người dùng có thể viết tắt hoặc mở rộng, do đó cần AI để chấm điểm linh hoạt và chính xác.

---

## 2. Prompt Tiếng Việt chuẩn hóa (Bulletproof Vietnamese Prompt)

### System Prompt:
```text
Bạn là giám khảo chấm thi kỹ thuật khách quan, công tâm, chính xác và hỗ trợ đa ngôn ngữ. Nhiệm vụ của bạn là đánh giá xem câu trả lời của thí sinh khớp bao nhiêu phần trăm (0% đến 100%) về mặt bản chất chuyên môn/ngữ nghĩa so với câu hỏi và đáp án mẫu.

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
true | 85% | Nêu đúng bản chất kỹ thuật nhưng còn thiếu một phần ý phụ.
false | 45% | Câu trả lời thiếu ý trọng tâm về cặp khóa công khai/khóa riêng tư.
```

### User Prompt:
```text
Câu hỏi: {question}
Đáp án mẫu: {reference_answer}
Câu trả lời của thí sinh: {student_answer}
```

---

## 3. Prompt Tiếng Anh tương ứng (Bulletproof English Prompt)

### System Prompt:
```text
You are an objective, precise, fair, and multilingual technical exam grader. Your task is to evaluate what percentage (0% to 100%) the student answer matches the technical accuracy and semantic intent of the question and reference answer.

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
false | 45% | Missing the core distinction of public-private key pairs.
```

### User Prompt:
```text
Question: {question}
Reference Answer: {reference_answer}
Student Answer: {student_answer}
```

---

## 4. Cơ chế Cờ `ignore_ai` & Khớp Mật mã từng từ (Passcode Matching)

1. **Cấu trúc CSV**:
   - Cột thứ 9 trong CSV: `ignore_ai`.
   - Giá trị: `true` đối với câu hỏi giải mã mật mã Caesar (`uftbxogdqlzhchmg` -> `vgucyphermaidinh`).
   - Các câu hỏi khác: để trống hoặc `false`.
2. **Logic Thực thi**:
   - Khi `q.ignore_ai === true`:
     - Bỏ qua lời gọi Mistral API.
     - So khớp chuỗi chuẩn hóa: `cleanStudent === cleanTarget`.
     - Nếu khớp: `isCorrect = true`, `percentage = 100`, `commentary = ""`.
     - Nếu không khớp: `isCorrect = false`, `percentage = 0`, `commentary = "Mật mã yêu cầu khớp chính xác từng ký tự/từ."` (hoặc `"Passcode requires an exact word-by-word match."`).
3. **Bảo tồn Trạng thái & Đa ngôn ngữ**:
   - Chuyển đổi ngôn ngữ EN <-> VIE tự động cập nhật nhãn phần trăm và nhận xét của cờ `ignore_ai` mà không làm mất kết quả đã trả lời.

---

## 5. Tự động hiển thị kết quả ngay khi đáp án khớp (Instant Matching)

1. **Nhận diện trực tiếp khi gõ (Real-time Live Matching)**:
   - Trong quá trình thí sinh nhập vào ô câu trả lời ngắn (sự kiện `input`), hàm `checkDirectAnswerMatch` liên tục kiểm tra xem chuỗi đã nhập có khớp với đáp án mẫu (hoặc các biến thể viết tắt/mở rộng hợp lệ) hay không.
   - Ngay khi phát hiện đáp án khớp: hệ thống lập tức hiển thị kết quả đạt 100%, vẽ dấu tick xanh animated SVG và hiển thị nút `NEXT →` ngay tại chỗ mà thí sinh không cần bấm nút "Gửi" hay gõ Enter.
2. **Tối ưu hóa phản hồi (Instant Evaluation)**:
   - Khi đáp án đã khớp trực tiếp, hệ thống hoàn toàn bỏ qua việc gọi API và không hiển thị spinner chờ đợi, mang lại trải nghiệm phản hồi tức thì (0ms delay).
   - Nếu thí sinh bấm gửi câu trả lời mang tính diễn giải/khái niệm chưa trùng khớp nguyên văn, hệ thống sẽ chuyển sang cho Mistral Small chấm điểm theo ý nghĩa kỹ thuật ("không cần chấm về mặt từ ngữ diễn đạt, miễn đúng ý").