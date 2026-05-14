/* =====================================================
   SHOEI DRIVING SCHOOL – script.js
   ===================================================== */

'use strict';

/* ─── i18n Translations ─── */
const translations = {
  en: {
    nav_home: 'Home',
    nav_jobs: 'Jobs',
    nav_visa: 'Visa Support',
    nav_apply: 'Apply',
    nav_booking: 'Interview Booking',
    nav_contact: 'Contact',
    hero_badge: '🌏 Open to Foreign Residents',
    hero_headline: 'Work With <span class="highlight">Shoei</span> Driving School in Japan',
    hero_sub: 'We welcome English and Vietnamese speakers. Full visa support, competitive salary, and a team that feels like family.',
    hero_cta1: '<i class="bi bi-pencil-square me-2"></i>Apply Now',
    hero_cta2: '<i class="bi bi-calendar-check me-2"></i>Book Interview',
    stat_staff: 'Staff Members',
    stat_years: 'Years Operating',
    stat_languages: 'Languages Supported',
    jobs_tag: 'Open Positions',
    jobs_title: 'Find Your Role at Shoei',
    jobs_sub: 'Join our welcoming team and build a career in Japan with full support every step of the way.',
    job1_title: 'Driving School Staff',
    job2_title: 'Reception Staff',
    label_salary: 'Monthly Salary',
    label_hours: 'Work Hours',
    label_japanese: 'Japanese Level',
    label_visa: 'Visa Support',
    label_req: 'Requirements',
    label_benefits: 'Benefits',
    job1_req1: 'Valid Japanese driver\'s license',
    job1_req2: 'Customer service experience preferred',
    job1_req3: 'Friendly and responsible attitude',
    job1_req4: 'Ability to commute to Okayama',
    job2_req1: 'Fluent in English or Vietnamese',
    job2_req2: 'Warm and professional manner',
    job2_req3: 'Basic computer skills (MS Office)',
    job2_req4: 'Experience in customer-facing role preferred',
    btn_apply_pos: 'Apply for This Position',
    visa_tag: "We've Got You Covered",
    visa_title: 'Full Support for Foreign Residents',
    visa_sub: 'Starting a new life in Japan can be challenging. We make it easier with comprehensive support services.',
    visa1_title: 'Visa Renewal',
    visa1_desc: 'We assist with all paperwork for visa renewal applications, including work visas and status changes.',
    visa2_title: 'Work Visa Consultation',
    visa2_desc: 'Our HR team consults on the best visa categories for your situation and experience level.',
    visa3_title: 'Housing Support',
    visa3_desc: 'We help you find affordable housing near the school, with guarantor support if needed.',
    visa4_title: 'Language Assistance',
    visa4_desc: 'Free Japanese language lessons offered in-house. Multilingual staff always available to help.',
    process_tag: 'Simple & Fast',
    process_title: 'How to Join Shoei',
    process_sub: 'Our hiring process is straightforward and designed to welcome you at every step.',
    step1_title: 'Submit Your Form',
    step1_desc: 'Fill out our simple online application form below. Upload your resume and tell us about yourself.',
    step2_title: 'Interview',
    step2_desc: 'Book a convenient interview slot. We offer in-person and online interviews in your language.',
    step3_title: 'Start Working!',
    step3_desc: 'Receive your offer letter, complete onboarding, and start your new career journey with Shoei!',
    apply_tag: 'Join Our Team',
    apply_title: 'Apply Now',
    apply_sub: 'Take the first step toward your new career. We\'ll get back to you within 2 business days.',
    form_name: 'Full Name',
    form_nationality: 'Nationality',
    form_visa: 'Current Visa Type',
    form_jlpt: 'Japanese Level',
    form_phone: 'Phone Number',
    form_email: 'Email Address',
    form_resume: 'Upload Resume / CV',
    form_resume_hint: 'PDF, DOC up to 10MB',
    form_submit: 'Submit Application',
    form_required: 'This field is required.',
    form_email_invalid: 'Please enter a valid email.',
    booking_tag: 'Schedule Your Interview',
    booking_title: 'Book an Interview',
    booking_sub: 'Choose a date and time that works for you. We offer interviews in English, Vietnamese, and Japanese.',
    booking_time: 'Select a Time Slot',
    booking_lang: 'Interview Language',
    booking_confirm: '<i class="bi bi-calendar-check-fill me-2"></i>Confirm Booking',
    modal_title: 'Interview Booked!',
    modal_note: "We'll send a confirmation to your email shortly. See you soon!",
    modal_close: 'Great, Thank You!',
    apply_modal_title: 'Application Received!',
    apply_modal_note: 'Thank you for applying to Shoei Driving School. Our team will review your application and contact you within 2 business days.',
    testi_tag: 'Staff Voices',
    testi_title: 'What Our Team Says',
    testi_sub: 'Hear from foreign staff members who made Shoei their home in Japan.',
    testi1_text: '"I was nervous about moving to Japan alone, but Shoei helped me with everything from my visa to finding a great apartment. The team is so warm!"',
    testi2_text: '"The Japanese lessons they offer are brilliant. I went from N5 to N3 in one year while working full-time. The pay is also very competitive."',
    testi3_text: '"Shoei treated me like family from day one. The visa renewal support was seamless, and I feel very secure working here long-term."',
    footer_tagline: 'Welcoming foreign residents in Japan with open arms, full support, and great careers since 2012.',
    footer_contact: 'Contact Us',
    footer_address: '1-1 Shoei-cho, Setouchi, Okayama, Japan',
    footer_hours: 'Mon – Fri: 9:00 – 18:00',
    footer_links: 'Quick Links',
    footer_map: 'Find Us',
    footer_map_note: 'Setouchi, Okayama',
    footer_map_btn: 'Open in Maps',
    footer_copy: '© 2025 Shoei Driving School. All rights reserved.',
  },

  vn: {
    nav_home: 'Trang Chủ',
    nav_jobs: 'Việc Làm',
    nav_visa: 'Hỗ Trợ Visa',
    nav_apply: 'Ứng Tuyển',
    nav_booking: 'Đặt Lịch Phỏng Vấn',
    nav_contact: 'Liên Hệ',
    hero_badge: '🌏 Chào Đón Người Nước Ngoài',
    hero_headline: 'Làm Việc Tại <span class="highlight">Shoei</span> Driving School ở Nhật Bản',
    hero_sub: 'Chúng tôi chào đón người nói tiếng Anh và tiếng Việt. Hỗ trợ visa đầy đủ, lương cạnh tranh và môi trường làm việc thân thiện.',
    hero_cta1: '<i class="bi bi-pencil-square me-2"></i>Ứng Tuyển Ngay',
    hero_cta2: '<i class="bi bi-calendar-check me-2"></i>Đặt Lịch Phỏng Vấn',
    stat_staff: 'Nhân Viên',
    stat_years: 'Năm Hoạt Động',
    stat_languages: 'Ngôn Ngữ Hỗ Trợ',
    jobs_tag: 'Vị Trí Đang Tuyển',
    jobs_title: 'Tìm Vị Trí Phù Hợp Với Bạn',
    jobs_sub: 'Gia nhập đội ngũ thân thiện của chúng tôi và xây dựng sự nghiệp tại Nhật Bản với sự hỗ trợ toàn diện.',
    job1_title: 'Nhân Viên Trường Lái Xe',
    job2_title: 'Nhân Viên Lễ Tân',
    label_salary: 'Lương Tháng',
    label_hours: 'Giờ Làm Việc',
    label_japanese: 'Trình Độ Tiếng Nhật',
    label_visa: 'Hỗ Trợ Visa',
    label_req: 'Yêu Cầu',
    label_benefits: 'Phúc Lợi',
    job1_req1: 'Có bằng lái xe Nhật Bản hợp lệ',
    job1_req2: 'Ưu tiên có kinh nghiệm dịch vụ khách hàng',
    job1_req3: 'Thái độ thân thiện và có trách nhiệm',
    job1_req4: 'Có thể đi làm tại Okayama',
    job2_req1: 'Thành thạo tiếng Anh hoặc tiếng Việt',
    job2_req2: 'Phong cách chuyên nghiệp và thân thiện',
    job2_req3: 'Kỹ năng máy tính cơ bản (MS Office)',
    job2_req4: 'Ưu tiên có kinh nghiệm làm việc với khách hàng',
    btn_apply_pos: 'Ứng Tuyển Vị Trí Này',
    visa_tag: 'Chúng Tôi Lo Cho Bạn',
    visa_title: 'Hỗ Trợ Toàn Diện Cho Người Nước Ngoài',
    visa_sub: 'Bắt đầu cuộc sống mới tại Nhật Bản có thể khó khăn. Chúng tôi giúp bạn dễ dàng hơn với các dịch vụ hỗ trợ toàn diện.',
    visa1_title: 'Gia Hạn Visa',
    visa1_desc: 'Chúng tôi hỗ trợ toàn bộ thủ tục gia hạn visa, bao gồm visa lao động và thay đổi tư cách lưu trú.',
    visa2_title: 'Tư Vấn Visa Lao Động',
    visa2_desc: 'Đội HR của chúng tôi tư vấn loại visa phù hợp nhất với hoàn cảnh và kinh nghiệm của bạn.',
    visa3_title: 'Hỗ Trợ Nhà Ở',
    visa3_desc: 'Chúng tôi giúp bạn tìm nhà ở giá cả phải chăng gần trường, có hỗ trợ bảo lãnh nếu cần.',
    visa4_title: 'Hỗ Trợ Ngôn Ngữ',
    visa4_desc: 'Cung cấp lớp học tiếng Nhật miễn phí tại nơi làm. Nhân viên đa ngôn ngữ luôn sẵn sàng hỗ trợ.',
    process_tag: 'Đơn Giản & Nhanh Chóng',
    process_title: 'Cách Gia Nhập Shoei',
    process_sub: 'Quy trình tuyển dụng của chúng tôi đơn giản và được thiết kế để chào đón bạn ở mọi bước.',
    step1_title: 'Nộp Đơn',
    step1_desc: 'Điền vào mẫu đơn trực tuyến đơn giản bên dưới. Tải lên CV và giới thiệu bản thân.',
    step2_title: 'Phỏng Vấn',
    step2_desc: 'Đặt lịch phỏng vấn thuận tiện. Chúng tôi cung cấp phỏng vấn trực tiếp và trực tuyến bằng ngôn ngữ của bạn.',
    step3_title: 'Bắt Đầu Làm Việc!',
    step3_desc: 'Nhận thư mời, hoàn tất thủ tục nhập việc và bắt đầu hành trình sự nghiệp mới với Shoei!',
    apply_tag: 'Gia Nhập Đội Ngũ',
    apply_title: 'Ứng Tuyển Ngay',
    apply_sub: 'Hãy thực hiện bước đầu tiên hướng tới sự nghiệp mới. Chúng tôi sẽ phản hồi trong vòng 2 ngày làm việc.',
    form_name: 'Họ và Tên',
    form_nationality: 'Quốc Tịch',
    form_visa: 'Loại Visa Hiện Tại',
    form_jlpt: 'Trình Độ Tiếng Nhật',
    form_phone: 'Số Điện Thoại',
    form_email: 'Địa Chỉ Email',
    form_resume: 'Tải Lên CV / Hồ Sơ',
    form_resume_hint: 'PDF, DOC tối đa 10MB',
    form_submit: 'Gửi Đơn Ứng Tuyển',
    form_required: 'Trường này là bắt buộc.',
    form_email_invalid: 'Vui lòng nhập email hợp lệ.',
    booking_tag: 'Lên Lịch Phỏng Vấn',
    booking_title: 'Đặt Lịch Phỏng Vấn',
    booking_sub: 'Chọn ngày và giờ phù hợp với bạn. Chúng tôi cung cấp phỏng vấn bằng tiếng Anh, Việt và Nhật.',
    booking_time: 'Chọn Khung Giờ',
    booking_lang: 'Ngôn Ngữ Phỏng Vấn',
    booking_confirm: '<i class="bi bi-calendar-check-fill me-2"></i>Xác Nhận Đặt Lịch',
    modal_title: 'Đã Đặt Lịch Phỏng Vấn!',
    modal_note: 'Chúng tôi sẽ gửi xác nhận đến email của bạn sớm. Hẹn gặp bạn!',
    modal_close: 'Cảm Ơn!',
    apply_modal_title: 'Đã Nhận Đơn Ứng Tuyển!',
    apply_modal_note: 'Cảm ơn bạn đã ứng tuyển tại Shoei Driving School. Đội ngũ của chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong vòng 2 ngày làm việc.',
    testi_tag: 'Tiếng Nói Nhân Viên',
    testi_title: 'Đội Ngũ Chúng Tôi Nói Gì',
    testi_sub: 'Nghe từ các nhân viên người nước ngoài đã chọn Shoei làm ngôi nhà thứ hai tại Nhật.',
    testi1_text: '"Tôi lo lắng khi đến Nhật một mình, nhưng Shoei đã giúp tôi từ visa đến tìm nhà. Đội ngũ rất thân thiện!"',
    testi2_text: '"Các lớp tiếng Nhật tuyệt vời lắm. Tôi đã lên từ N5 lên N3 trong một năm trong khi làm việc toàn thời gian. Lương cũng rất cạnh tranh."',
    testi3_text: '"Shoei đối xử với tôi như gia đình ngay từ ngày đầu. Hỗ trợ gia hạn visa rất thuận lợi, tôi cảm thấy rất yên tâm khi làm việc lâu dài."',
    footer_tagline: 'Chào đón người nước ngoài tại Nhật Bản với sự hỗ trợ toàn diện và cơ hội nghề nghiệp tuyệt vời từ năm 2012.',
    footer_contact: 'Liên Hệ',
    footer_address: '1-1 Shoei-cho, Setouchi, Okayama, Nhật Bản',
    footer_hours: 'T2 – T6: 9:00 – 18:00',
    footer_links: 'Liên Kết Nhanh',
    footer_map: 'Tìm Chúng Tôi',
    footer_map_note: 'Setouchi, Okayama',
    footer_map_btn: 'Mở Trong Bản Đồ',
    footer_copy: '© 2025 Shoei Driving School. Bảo lưu mọi quyền.',
  },

  jp: {
    nav_home: 'ホーム',
    nav_jobs: '求人情報',
    nav_visa: 'ビザサポート',
    nav_apply: '応募する',
    nav_booking: '面接予約',
    nav_contact: 'お問い合わせ',
    hero_badge: '🌏 外国人居住者歓迎',
    hero_headline: '正新自動車学校で<span class="highlight">一緒に</span>働きましょう',
    hero_sub: '英語・ベトナム語話者大歓迎。ビザサポート・競争力のある給与・家族のような職場環境を提供します。',
    hero_cta1: '<i class="bi bi-pencil-square me-2"></i>今すぐ応募',
    hero_cta2: '<i class="bi bi-calendar-check me-2"></i>面接を予約',
    stat_staff: 'スタッフ数',
    stat_years: '年の実績',
    stat_languages: '対応言語',
    jobs_tag: '募集職種',
    jobs_title: 'あなたに合ったポジションを',
    jobs_sub: '充実したサポート体制で、日本でのキャリアを一緒に築いていきましょう。',
    job1_title: '自動車学校スタッフ',
    job2_title: '受付スタッフ',
    label_salary: '月給',
    label_hours: '勤務時間',
    label_japanese: '日本語レベル',
    label_visa: 'ビザサポート',
    label_req: '応募条件',
    label_benefits: '福利厚生',
    job1_req1: '有効な日本の運転免許証',
    job1_req2: '接客経験者優遇',
    job1_req3: '明るく責任感のある方',
    job1_req4: '岡山県内に通勤可能な方',
    job2_req1: '英語またはベトナム語が堪能な方',
    job2_req2: '丁寧で誠実な接客ができる方',
    job2_req3: 'PC基本操作（MS Office）',
    job2_req4: 'サービス業経験者優遇',
    btn_apply_pos: 'このポジションに応募する',
    visa_tag: '安心のサポート体制',
    visa_title: '外国人居住者への充実したサポート',
    visa_sub: '日本での新生活は不安なこともあります。充実したサポートサービスで、その不安を解消します。',
    visa1_title: 'ビザ更新サポート',
    visa1_desc: '就労ビザや在留資格の変更を含む、ビザ更新手続きの書類作成をお手伝いします。',
    visa2_title: '就労ビザ相談',
    visa2_desc: '人事担当者が、あなたの状況と経験に最適なビザの種類についてご相談に応じます。',
    visa3_title: '住居サポート',
    visa3_desc: '学校近くの手頃な住居探しをサポートします。保証人が必要な場合もお手伝いします。',
    visa4_title: '語学サポート',
    visa4_desc: '社内で日本語レッスンを無料提供。多言語対応スタッフが常時サポートします。',
    process_tag: 'シンプルでスピーディー',
    process_title: '入社までの流れ',
    process_sub: '採用プロセスはシンプルで、すべてのステップでサポートします。',
    step1_title: '応募フォーム提出',
    step1_desc: '下記の応募フォームにご記入ください。履歴書をアップロードし、自己紹介をお書きください。',
    step2_title: '面接',
    step2_desc: 'ご都合に合わせた面接日時をご予約ください。対面・オンライン、お好みの言語で対応します。',
    step3_title: '就業開始！',
    step3_desc: 'オファーレターを受け取り、入社手続きを完了して、正新での新しいキャリアをスタートしましょう！',
    apply_tag: 'チームに参加しよう',
    apply_title: '応募する',
    apply_sub: '新しいキャリアへの第一歩を踏み出しましょう。2営業日以内にご連絡します。',
    form_name: '氏名',
    form_nationality: '国籍',
    form_visa: '現在のビザ種別',
    form_jlpt: '日本語レベル',
    form_phone: '電話番号',
    form_email: 'メールアドレス',
    form_resume: '履歴書・CVをアップロード',
    form_resume_hint: 'PDF、DOC（最大10MB）',
    form_submit: '応募する',
    form_required: 'この項目は必須です。',
    form_email_invalid: '有効なメールアドレスを入力してください。',
    booking_tag: '面接を予約する',
    booking_title: '面接予約',
    booking_sub: 'ご都合の良い日時をお選びください。英語・ベトナム語・日本語で対応します。',
    booking_time: '時間帯を選択',
    booking_lang: '面接言語',
    booking_confirm: '<i class="bi bi-calendar-check-fill me-2"></i>予約を確定する',
    modal_title: '面接の予約が完了しました！',
    modal_note: 'まもなく確認メールをお送りします。お会いできることを楽しみにしています！',
    modal_close: 'ありがとうございます！',
    apply_modal_title: '応募を受け付けました！',
    apply_modal_note: '正新自動車学校へのご応募ありがとうございます。2営業日以内にご連絡いたします。',
    testi_tag: 'スタッフの声',
    testi_title: '仲間たちの声',
    testi_sub: '正新を日本での家にした外国人スタッフの声をご紹介します。',
    testi1_text: '「一人で日本に来るのは不安でしたが、正新がビザから住居探しまで全てサポートしてくれました。チームはとても温かいです！」',
    testi2_text: '「社内の日本語レッスンが素晴らしい。フルタイムで働きながら1年でN5からN3になりました。給与も非常に競争力があります。」',
    testi3_text: '「正新は初日から家族のように接してくれました。ビザ更新サポートもスムーズで、長期的に安心して働けています。」',
    footer_tagline: '2012年から外国人居住者を温かく迎え、充実したサポートと素晴らしいキャリアを提供しています。',
    footer_contact: 'お問い合わせ',
    footer_address: '〒701-0000 岡山県瀬戸内市正新町1-1',
    footer_hours: '月〜金: 9:00〜18:00',
    footer_links: 'クイックリンク',
    footer_map: 'アクセス',
    footer_map_note: '瀬戸内市、岡山県',
    footer_map_btn: '地図で見る',
    footer_copy: '© 2025 正新自動車学校. All rights reserved.',
  },
};

/* ─── State ─── */
let currentLang = 'en';
let selectedDate = null;
let selectedTime = null;
let currentCalYear, currentCalMonth;

/* ─── Page Loader ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1600);
});

/* ─── i18n Apply ─── */
function applyTranslation(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Active state for lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang
  document.documentElement.lang = lang === 'jp' ? 'ja' : lang === 'vn' ? 'vi' : 'en';
}

/* ─── Language switcher clicks ─── */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-lang]');
  if (!btn) return;
  const lang = btn.dataset.lang;
  if (translations[lang]) applyTranslation(lang);
});

/* ─── Navbar scroll behavior ─── */
const mainNav = document.getElementById('mainNav');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  mainNav?.classList.toggle('scrolled', scrolled);
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 300);

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
  });
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}, { passive: true });

/* ─── Scroll to top ─── */
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Smooth nav link close on mobile ─── */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    if (collapse?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      bsCollapse?.hide();
    }
  });
});

/* ─── Scroll Reveal ─── */
function initReveal() {
  const targets = document.querySelectorAll(
    '.job-card, .support-card, .step-card, .testi-card, .form-card, .booking-card, .section-header'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = Math.min(i * 80, 300);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => obs.observe(el));
}

/* ─── Calendar ─── */
function buildCalendar(year, month) {
  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calMonthLabel');
  if (!grid || !label) return;

  const monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
  label.textContent = `${monthNames[month]} ${year}`;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  grid.innerHTML = '';

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day cal-empty';
    grid.appendChild(empty);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const dayEl = document.createElement('button');
    dayEl.className = 'cal-day';
    dayEl.textContent = d;
    dayEl.type = 'button';

    const thisDate = new Date(year, month, d);
    const dayOfWeek = thisDate.getDay();

    if (thisDate < today) {
      dayEl.classList.add('cal-past');
      dayEl.disabled = true;
    } else if (dayOfWeek === 0) {
      // Sundays closed
      dayEl.classList.add('cal-past');
      dayEl.disabled = true;
    } else {
      if (thisDate.toDateString() === today.toDateString()) {
        dayEl.classList.add('cal-today');
      }
      if (selectedDate && thisDate.toDateString() === selectedDate.toDateString()) {
        dayEl.classList.add('cal-selected');
      }
      dayEl.addEventListener('click', () => selectDate(thisDate, dayEl));
    }

    grid.appendChild(dayEl);
  }
}

function selectDate(date, el) {
  selectedDate = date;
  document.querySelectorAll('.cal-day.cal-selected').forEach(d => d.classList.remove('cal-selected'));
  el.classList.add('cal-selected');
}

function initCalendar() {
  const now = new Date();
  currentCalYear = now.getFullYear();
  currentCalMonth = now.getMonth();
  buildCalendar(currentCalYear, currentCalMonth);

  document.getElementById('prevMonth')?.addEventListener('click', () => {
    const now = new Date();
    if (currentCalYear > now.getFullYear() || currentCalMonth > now.getMonth()) {
      currentCalMonth--;
      if (currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; }
      buildCalendar(currentCalYear, currentCalMonth);
    }
  });

  document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentCalMonth++;
    if (currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; }
    buildCalendar(currentCalYear, currentCalMonth);
  });
}

/* ─── Time slot selection ─── */
document.querySelectorAll('.slot-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedTime = btn.dataset.time;
  });
});

/* ─── Booking confirmation ─── */
document.getElementById('confirmBookingBtn')?.addEventListener('click', () => {
  if (!selectedDate) {
    showToast('Please select a date on the calendar.', 'warning'); return;
  }
  if (!selectedTime) {
    showToast('Please select a time slot.', 'warning'); return;
  }

  const lang = document.querySelector('input[name="interviewLang"]:checked')?.value || 'English';
  const dateStr = selectedDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const detail = document.getElementById('modalDetail');
  if (detail) detail.textContent = `${dateStr} at ${selectedTime} · ${lang}`;

  const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
  modal.show();
});

/* ─── File upload display ─── */
document.getElementById('resumeUpload')?.addEventListener('change', function () {
  const display = document.getElementById('fileNameDisplay');
  if (!display) return;
  if (this.files.length > 0) {
    display.textContent = `✓ ${this.files[0].name}`;
    display.classList.remove('d-none');
  } else {
    display.classList.add('d-none');
  }
});

document.querySelector('.file-upload-label')?.addEventListener('click', () => {
  document.getElementById('resumeUpload')?.click();
});

/* ─── Application form submission ─── */
document.getElementById('applicationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  this.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('is-invalid');
      valid = false;
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    }
  });

  const emailField = this.querySelector('#email');
  if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.classList.add('is-invalid');
    valid = false;
  }

  if (!valid) return;

  const modal = new bootstrap.Modal(document.getElementById('applyModal'));
  modal.show();

  // Reset form
  setTimeout(() => {
    this.reset();
    this.querySelectorAll('.is-valid').forEach(f => f.classList.remove('is-valid'));
    const display = document.getElementById('fileNameDisplay');
    if (display) display.classList.add('d-none');
  }, 500);
});

/* ─── Remove invalid state on input ─── */
document.querySelectorAll('.form-control, .form-select').forEach(field => {
  field.addEventListener('input', () => {
    if (field.value.trim()) {
      field.classList.remove('is-invalid');
    }
  });
});

/* ─── Toast notification ─── */
function showToast(message, type = 'info') {
  const existing = document.getElementById('siteToast');
  if (existing) existing.remove();

  const colors = { warning: '#ef6c00', info: '#1976d2', success: '#2e7d32' };
  const icons  = { warning: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill', success: 'bi-check-circle-fill' };

  const toast = document.createElement('div');
  toast.id = 'siteToast';
  toast.style.cssText = `
    position: fixed; bottom: 5rem; left: 50%; transform: translateX(-50%) translateY(20px);
    background: ${colors[type]}; color: white; padding: 0.85rem 1.5rem;
    border-radius: 50px; font-weight: 700; font-size: 0.9rem; font-family: 'Nunito', sans-serif;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2); z-index: 9000;
    display: flex; align-items: center; gap: 0.6rem;
    opacity: 0; transition: opacity 0.3s, transform 0.3s;
    white-space: nowrap;
  `;
  toast.innerHTML = `<i class="bi ${icons[type]}"></i>${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ─── Staggered hero animation on load ─── */
function animateHero() {
  const heroEls = document.querySelectorAll('.hero-badge, .hero-headline, .hero-sub, .hero-flags, .d-flex.flex-wrap.gap-3, .hero-stats');
  heroEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300 + i * 100);
  });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();
  initReveal();
  applyTranslation('en');
  animateHero();
});
