const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const topBtn = document.getElementById('back-to-top');
const navbar = document.querySelector('.navbar');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

/* ================= i18n — full EN/AR translations ================= */
const translations = {
  en: {
    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.edge': 'My Edge',
    'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    'about.eyebrow': '👋 Welcome to my portfolio',
    'about.role': 'Full-Stack Web Developer · Cybersecurity — I work in both, and I’m looking for roles in both',
    'about.p1': 'I’m a full-stack web developer with a B.Sc. in Cybersecurity and hands-on SOC experience. I build web applications (React.js, Flask, Firebase) and I secure them — so I’m looking for junior roles in both fields: web development and cybersecurity, especially where they meet.',
    'about.p2': 'I delivered a complete 8+ page production application for a real client, and monitored real security alerts in a SOC. Two skills, one goal: software that works beautifully — and doesn’t get hacked.',
    'about.btn1': 'View my projects', 'about.btn2': 'Get in touch', 'about.btn3': '⬇ Download CV',
    'about.stat1': 'pages delivered for a real client', 'about.stat2': 'course projects passed',
    'about.stat3': 'B.Sc. GPA (Excellent)',
    'exp.caption': 'Experience & education', 'exp.th1': 'When', 'exp.th2': 'What', 'exp.th3': 'Where',
    'exp.r1w': 'Jan 2026', 'exp.r1x': 'Full Stack Web Development Professional Training',
    'exp.r1y': 'Hashemite University (NOMU Al-Ghurair / HTUx)',
    'exp.r2w': 'Sep – Dec 2025', 'exp.r2x': 'SOC Trainee — real-time monitoring & log analysis with Splunk',
    'exp.r2y': 'Green Circle, Amman',
    'exp.r3w': '2025', 'exp.r3x': 'Freelance Full-Stack Web Developer — Mohja Company website',
    'exp.r3y': 'Mohja Company (Remote)',
    'exp.r4w': 'Jul 2025', 'exp.r4x': 'B.Sc. in Cybersecurity — GPA 84.7% (Excellent)',
    'exp.r4y': 'Zarqa University',
    'exp.r5w': 'Aug – Oct 2024', 'exp.r5x': 'Frontend Developer Intern', 'exp.r5y': 'Softylous, Zarqa',
    'edge.h2': 'Why Security + Development?',
    'edge.lead': 'Most developers write code. Most security analysts read logs. <strong>I do both — and that combination is my biggest strength, not a confusion.</strong>',
    'edge.c1h': 'I think like an attacker',
    'edge.c1p': '120 hours of SOC training at Green Circle, monitoring and triaging real security alerts in Splunk, plus a Penetration Testing Practitioner certificate. I know how systems get breached — SQL injection, XSS, brute force — because I’ve hunted these patterns in real logs.',
    'edge.c2h': 'I build like an engineer',
    'edge.c2p': 'A production 8+ page React.js + Firebase application delivered to a real client, 15+ reusable components at Softylous, and a graduation project integrating OpenAI Whisper with Flask. I ship working software, not just theory.',
    'edge.c3h': 'Secure by design',
    'edge.c3p': 'JWT authentication, role-based access control, Firestore security rules, input validation and rate limiting — baked in from day one, not patched later. For a company, that means less security debt and cheaper audits.',
    'edge.quote': '“Two skill sets. One goal: software that works beautifully — and doesn’t get hacked.”',
    'skills.h2': 'What I Know', 'skills.fh': 'Frontend', 'skills.bh': 'Backend & Data', 'skills.sh': 'Security & Tools',
    'proj.h2': 'What I Built',
    'proj.lead': 'Four course projects from the Web Piscine, each completed and passed in peer evaluation.',
    'proj.badge.passed': 'Passed', 'proj.badge.live': 'Live', 'proj.badge.grad': 'Graduation',
    'proj.p0h': 'Linux, Git & GitHub',
    'proj.p0p': 'Worked entirely in the terminal: built a directory tree, wrote a shell script that creates, copies, renames and deletes files, then versioned the work with Git and published it to a public GitHub repository. Bonus: SSH key authentication with ed25519.',
    'proj.p1h': 'HTML Fundamentals',
    'proj.p1p': 'Six pages that cover the structure of the web: a valid HTML5 document, text hierarchy, links and images, lists and data tables, an accessible registration form with native validation, and a technical blog built from semantic landmarks.',
    'proj.p2h': 'CSS & Visual Presentation',
    'proj.p2p': 'Designed interfaces with Flexbox navigation and card grids, fixed and absolute positioning, shapes drawn in pure CSS, colour models with RGBA versus opacity, and the box model with a universal reset. Bonus: a looping loader and hover micro-interactions.',
    'proj.p3h': 'JavaScript & Interactivity',
    'proj.p3p': 'Moved from variables and functions to DOM manipulation and events: a grade calculator, a click counter that changes colour with its value, and a task manager that adds, completes and deletes tasks while keeping a live counter.',
    'proj.link': 'View on GitHub',
    'proj.sub': 'Professional work',
    'proj.mh': 'Mohja Company Website',
    'proj.mp': 'Freelance project for a real client: 8+ pages in React.js, an admin dashboard, Firebase Authentication, Firestore security rules and role-based access for three user tiers — designed, built and deployed within two months.',
    'proj.mlink': 'Visit the live site',
    'proj.sh2': 'Secure Content Grabber',
    'proj.sp': 'Graduation project: a React.js and Flask application for AI-powered video analysis with OpenAI Whisper speech-to-text, JWT authentication, rate limiting, input validation and XSS protection.',
    'cert.h2': 'Certifications',
    'cert.lead': 'Certificates and credentials that back up my skills.',
    'cert.c1h': 'Full Stack Web Development', 'cert.c1o': 'Al Hussein Technical University (HTUx) · Jan 2026',
    'cert.c2h': 'Security Operations Center (SOC) Track', 'cert.c2o': '120 training hours · Green Circle for Software Solutions · Dec 2025',
    'cert.c3h': 'Youth Grow Activity (YGA) Employability Program', 'cert.c3o': 'Six-month program · U.S. Embassy Amman & Q2 Impact Jordan · 2025–2026',
    'cert.c4h': 'Cyber Security Associate', 'cert.c4o': 'Green Circle for Software Solutions · 2025',
    'cert.c5h': 'Penetration Testing Practitioner (PTP)', 'cert.c5o': 'Cyber Shields · 2024',
    'cert.c6h': 'UI/UX Design', 'cert.c6o': '32 hours · The Hope International Company · 2024',
    'contact.h2': 'Get In Touch',
    'contact.lead': 'Open to junior full-stack, frontend and cybersecurity roles. The fastest ways to reach me:',
    'form.name': 'Name', 'form.email': 'Email', 'form.topic': 'Reason for contact',
    'form.opt1': 'Job opportunity', 'form.opt2': 'Freelance project', 'form.opt3': 'Collaboration',
    'form.opt4': 'Something else', 'form.legend': 'Reply by', 'form.reply1': 'Email',
    'form.reply2': 'LinkedIn', 'form.msg': 'Message', 'form.send': 'Send Message',
    'footer.links': 'Quick Links', 'footer.contact': 'Contact', 'footer.loc': 'Amman, Jordan',
    'footer.copy': '© 2026 Areej Al-Dobagh. All rights reserved.',
    'form.err.short': 'Please enter your name and a message of at least 10 characters.',
    'form.sending': 'Sending your message…',
    'form.ok': 'Thanks, {name}! Your message about "{topic}" was sent. I will reply soon.',
    'form.fail': 'Something went wrong. Please try again or email me directly.',
    'form.neterr': 'Network error. Please check your connection and try again.'
  },
  ar: {
    'nav.about': 'نبذة عني', 'nav.experience': 'خبراتي', 'nav.edge': 'ما يميزني',
    'nav.skills': 'مهاراتي', 'nav.projects': 'مشاريعي', 'nav.certificates': 'شهاداتي',
    'nav.contact': 'للتواصل معي',
    'about.role': 'مطوّرة ويب Full-Stack · أمن سيبراني — أشتغل بالمجالين وأبحث عنهما',
    'about.p1': 'مطوّرة ويب Full-Stack حاصلة على بكالوريوس في الأمن السيبراني مع خبرة عملية في مركز عمليات الأمن (SOC). لا أختار بين بناء البرمجيات والدفاع عنها — أقوم بالأمرين معاً. أكتب تطبيقات React.js وFlask وFirebase بالطريقة التي يودّ محلل الأمن رؤيتها مبنية: آمنة التصميم ووفق ممارسات OWASP.',
    'about.p2': 'سلّمت تطبيق ويب إنتاجي كاملاً (أكثر من 8 صفحات) لعميل حقيقي — من التخطيط حتى النشر — وأبحث الآن عن دور Junior بمجال Full-Stack و أمن سيبراني.',
    'about.btn1': 'شاهد مشاريعي', 'about.btn2': 'تواصل معي', 'about.btn3': '⬇ حمّل السيرة الذاتية',
    'about.stat1': 'صفحة سلّمتها لعميل حقيقي', 'about.stat2': 'مشاريع دورة مجتازة',
    'about.stat3': 'معدل البكالوريوس (ممتاز)',
    'exp.caption': 'الخبرات والتعليم', 'exp.th1': 'التاريخ', 'exp.th2': 'ماذا', 'exp.th3': 'أين',
    'exp.r1w': 'يناير 2026', 'exp.r1x': 'تدريب احترافي في تطوير الويب Full Stack',
    'exp.r1y': 'الجامعة الهاشمية (مبادرة نمو الغرير / HTUx)',
    'exp.r2w': 'سبتمبر – ديسمبر 2025', 'exp.r2x': 'متدربة SOC — مراقبة فورية وتحليل سجلات باستخدام Splunk',
    'exp.r2y': 'غرين سيركل، عمّان',
    'exp.r3w': '2025', 'exp.r3x': 'مطوّرة Full-Stack مستقل — موقع شركة مهجة',
    'exp.r3y': 'شركة مهجة (عن بُعد)',
    'exp.r4w': 'يوليو 2025', 'exp.r4x': 'بكالوريوس الأمن السيبراني — معدل 84.7% (ممتاز)',
    'exp.r4y': 'جامعة الزرقاء',
    'exp.r5w': 'أغسطس – أكتوبر 2024', 'exp.r5x': 'متدربة تطوير واجهات Frontend', 'exp.r5y': 'Softylous، الزرقاء',
    'edge.h2': 'لماذا الأمن + التطوير؟',
    'edge.lead': 'معظم المطوّرين يكتبون الشيفرة، ومعظم محللي الأمن يقرؤون السجلات. <strong>أنا أفعل الأمرين معاً — وهذه الثنائية أعظم قوّتي، وليست تردداً.</strong>',
    'edge.c1h': 'أفكّر كالمخترِق',
    'edge.c1p': '120 ساعة تدريب SOC في غرين سيركل مع مراقبة وتصفية تنبيهات أمنية حقيقية في Splunk، وشهادة ممارس اختبار الاختراق (PTP). أعرف كيف تُخترق الأنظمة — حقن SQL وXSS والهجمات العنيفة — لأنني اصطدت هذه الأنماط في سجلات حقيقية.',
    'edge.c2h': 'أبني كالمهندسة',
    'edge.c2p': 'تطبيق إنتاجي (React.js + Firebase) بأكثر من 8 صفحات سلّمته لعميل حقيقي، وأكثر من 15 مكوّناً قابلاً لإعادة الاستخدام في Softylous، ومشروع تخرّج يدمج OpenAI Whisper مع Flask. أُسلّم برمجيات عاملة، لا نظريات فقط.',
    'edge.c3h': 'آمنة التصميم',
    'edge.c3p': 'مصادقة JWT، وتحكّم بالصلاحيات RBAC، وقواعد أمان Firestore، والتحقق من المدخلات وتحديد معدل الطلبات — مدمجة منذ اليوم الأول ولا تُرقَّع لاحقاً. بالنسبة لأي شركة، هذا يعني ديوناً أمنية أقل وتدقيقاً أرخص.',
    'edge.quote': '«مهارتان. هدف واحد: برمجيات تعمل بإتقان — ولا تُخترق.»',
    'skills.h2': 'ماذا أعرف', 'skills.fh': 'الواجهات الأمامية', 'skills.bh': 'الخلفية والبيانات', 'skills.sh': 'الأمن والأدوات',
    'proj.h2': 'ماذا بنيت',
    'proj.lead': 'أربعة مشاريع من دورة Web Piscine، كلٌّ منها مكتمل ومجتاز بتقييم الأقران.',
    'proj.badge.passed': 'مجتاز', 'proj.badge.live': 'مباشر', 'proj.badge.grad': 'تخرّج',
    'proj.p0h': 'لينكس وGit وGitHub',
    'proj.p0p': 'اشتغلت بالكامل على الطرفية: بنيت شجرة مجلدات، وكتبت سكربت Shell ينشئ الملفات وينسخها ويعيد تسميتها ويحذفها، ثم أدرت الإصدارات بـ Git ونشرت العمل على مستودع GitHub عام. إضافي: مصادقة SSH بمفتاح ed25519.',
    'proj.p1h': 'أساسيات HTML',
    'proj.p1p': 'ست صفحات تغطي بنية الويب: مستند HTML5 صالح، تسلسل النصوص، الروابط والصور، القوائم وجداول البيانات، نموذج تسجيل سهل الوصول مع تحقق أصلي، ومدونة تقنية مبنية على معالم دلالية.',
    'proj.p2h': 'CSS والتقديم البصري',
    'proj.p2p': 'صممت واجهات بشبكات Flexbox وبطاقات، وتموضع ثابت ومطلق، وأشكال مرسومة بـ CSS خالص، ونماذج ألوان RGBA مقابل الشفافية، ونموذج الصندوق مع تصفير عام. إضافي: محمّل متكرر وتفاعلات دقيقة عند التحويم.',
    'proj.p3h': 'JavaScript والتفاعل',
    'proj.p3p': 'انتقلت من المتغيرات والدوال إلى التعامل مع DOM والأحداث: حاسبة درجات، وعداد نقرات يتغير لونه مع قيمته، ومدير مهام يضيف ويُكمل ويحذف المهام مع عدّاد مباشر.',
    'proj.link': 'شاهد على GitHub',
    'proj.sub': 'أعمال احترافية',
    'proj.mh': 'موقع شركة مهجة',
    'proj.mp': 'مشروع مستقل لعميل حقيقي: أكثر من 8 صفحات بـ React.js، ولوحة تحكم إدارية، ومصادقة Firebase، وقواعد أمان Firestore وتحكم بالصلاحيات لثلاث فئات مستخدمين — صُمم وبُني ونُشر خلال شهرين.',
    'proj.mlink': 'زر الموقع المباشر',
    'proj.sh2': 'Secure Content Grabber — نابض المحتوى الآمن',
    'proj.sp': 'مشروع تخرّج: تطبيق React.js وFlask لتحليل الفيديو بالذكاء الاصطناعي مع تحويل الكلام إلى نص عبر OpenAI Whisper، ومصادقة JWT، وتحديد معدل الطلبات، والتحقق من المدخلات وحماية XSS.',
    'cert.h2': 'الشهادات',
    'cert.lead': 'شهادات واعتمادات تدعم مهاراتي.',
    'cert.c1h': 'تطوير الويب Full Stack', 'cert.c1o': 'جامعة الحسين التقنية (HTUx) · يناير 2026',
    'cert.c2h': 'مسار عمليات مركز الأمن (SOC)', 'cert.c2o': '120 ساعة تدريب · غرين سيركل للحلول البرمجية · ديسمبر 2025',
    'cert.c3h': 'برنامج YGA لتهيئة الشباب لسوق العمل', 'cert.c3o': 'برنامج من ستة أشهر · السفارة الأمريكية بعمّان وQ2 Impact الأردن · 2025–2026',
    'cert.c4h': 'مرافق الأمن السيبراني', 'cert.c4o': 'غرين سيركل للحلول البرمجية · 2025',
    'cert.c5h': 'ممارس اختبار الاختراق (PTP)', 'cert.c5o': 'Cyber Shields · 2024',
    'cert.c6h': 'تصميم UI/UX', 'cert.c6o': '32 ساعة · شركة الأمل الدولية · 2024',
    'contact.h2': 'للتواصل معي',
    'contact.lead': 'منفتحة على أدوار Junior بمجالات Full-Stack وتطوير الواجهات والأمن السيبراني. أسرع طرق الوصول إليّ:',
    'form.name': 'الاسم', 'form.email': 'البريد الإلكتروني', 'form.topic': 'سبب التواصل',
    'form.opt1': 'فرصة عمل', 'form.opt2': 'مشروع مستقل', 'form.opt3': 'تعاون',
    'form.opt4': 'شيء آخر', 'form.legend': 'الرد عبر', 'form.reply1': 'البريد الإلكتروني',
    'form.reply2': 'لينكدإن', 'form.msg': 'الرسالة', 'form.send': 'إرسال الرسالة',
    'footer.brand': '',
    'footer.links': 'روابط سريعة', 'footer.contact': 'تواصل', 'footer.loc': 'عمان، الأردن',
    'footer.copy': '© 2026 أريج الدباغ. جميع الحقوق محفوظة.',
    'form.err.short': 'الرجاء إدخال اسمك ورسالة من 10 أحرف على الأقل.',
    'form.sending': 'جارٍ إرسال رسالتك…',
    'form.ok': 'شكراً {name}! تم إرسال رسالتك حول "{topic}". سأرد عليك قريباً.',
    'form.fail': 'حدث خطأ ما. حاول مرة أخرى أو راسلني عبر البريد مباشرة.',
    'form.neterr': 'خطأ في الشبكة. تحقق من اتصالك وحاول مجدداً.'
  }
};

const topicAr = {
  'Job opportunity': 'فرصة عمل',
  'Freelance project': 'مشروع مستقل',
  'Collaboration': 'تعاون',
  'Something else': 'شيء آخر'
};

function t(key, vars = {}) {
  let str = (translations[lang] && translations[lang][key]) || translations.en[key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.replace('{' + k + '}', v); });
  return str;
}

let lang = localStorage.getItem('lang') || 'en';

function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  root.lang = l;
  root.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.title = l === 'ar'
    ? 'أريج الدباغ '
    : 'Areej Al-Dobagh';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = translations[l][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = translations[l][el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  langBtn.textContent = l === 'ar' ? 'EN' : 'عربي';
}

langBtn.addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));

/* ================= Mobile navigation menu ================= */
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
  navMenu.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

menuBtn.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));

/* Close after choosing a link */
navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* Close with Escape or a tap outside the navbar */
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') && !e.target.closest('.nav-container')) setMenu(false);
});

/* Reset when returning to desktop width */
window.addEventListener('resize', () => { if (window.innerWidth > 800) setMenu(false); });

/* ================= Theme (persisted) ================= */
function setTheme(theme, persist = true) {
  root.dataset.theme = theme;
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
  if (persist) localStorage.setItem('theme', theme);
}

setTheme(localStorage.getItem('theme') || 'light', false);

themeBtn.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('visible', window.scrollY > 400);
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ================= Scroll reveal ================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ================= Scrollspy: highlight active nav link ================= */
const navLinks = document.querySelectorAll('.navbar nav a');
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => spyObserver.observe(s));

/* ================= Contact form ================= */
function showStatus(message, type) {
  formStatus.textContent = message;
  formStatus.classList.remove('success', 'error');
  formStatus.classList.add(type);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('msg').value.trim();
  const submitBtn = form.querySelector('button[type="submit"]');

  if (name === '' || message.length < 10) {
    showStatus(t('form.err.short'), 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t('form.sending');
  showStatus(t('form.sending'), 'success');

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      const topicLabel = lang === 'ar' ? (topicAr[topic] || topic) : topic;
      showStatus(t('form.ok', { name, topic: topicLabel }), 'success');
      form.reset();
    } else {
      showStatus(t('form.fail'), 'error');
    }
  } catch (error) {
    showStatus(t('form.neterr'), 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('form.send');
  }
});

/* Initial language */
applyLang(lang);
