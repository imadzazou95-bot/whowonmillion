// ==================== QUESTIONS DATABASE ====================
const questions = [
    // Level 1 - Very Easy (100)
    {
        question: "ما هو لون السماء في يوم صافٍ؟",
        answers: ["أزرق", "أحمر", "أخضر", "أصفر"],
        correct: 0,
        category: "عامة"
    },
    {
        question: "كم عدد أيام الأسبوع؟",
        answers: ["٥", "٦", "٧", "٨"],
        correct: 2,
        category: "عامة"
    },
    // Level 2 - Very Easy (200)
    {
        question: "ما هي عاصمة المملكة العربية السعودية؟",
        answers: ["جدة", "الرياض", "مكة المكرمة", "الدمام"],
        correct: 1,
        category: "جغرافيا"
    },
    {
        question: "أي كوكب يُعرف بالكوكب الأحمر؟",
        answers: ["الزهرة", "المشتري", "المريخ", "زحل"],
        correct: 2,
        category: "علوم"
    },
    // Level 3 - Easy (300)
    {
        question: "كم عدد سور القرآن الكريم؟",
        answers: ["١٠٠", "١١٤", "١٢٠", "٩٩"],
        correct: 1,
        category: "دين"
    },
    {
        question: "ما هي أكبر قارة في العالم من حيث المساحة؟",
        answers: ["أفريقيا", "أمريكا الشمالية", "أوروبا", "آسيا"],
        correct: 3,
        category: "جغرافيا"
    },
    // Level 4 - Easy (500)
    {
        question: "من هو مؤلف كتاب 'مقدمة ابن خلدون'؟",
        answers: ["ابن سينا", "ابن خلدون", "ابن رشد", "الفارابي"],
        correct: 1,
        category: "تاريخ"
    },
    {
        question: "ما هو العنصر الكيميائي الذي رمزه 'O'؟",
        answers: ["ذهب", "أكسجين", "أوزميوم", "حديد"],
        correct: 1,
        category: "علوم"
    },
    // Level 5 - Medium (1,000) - MILESTONE
    {
        question: "في أي عام هجري كانت غزوة بدر الكبرى؟",
        answers: ["١ هـ", "٢ هـ", "٣ هـ", "٤ هـ"],
        correct: 1,
        category: "تاريخ إسلامي"
    },
    {
        question: "ما هي أطول نهر في العالم؟",
        answers: ["الأمازون", "النيل", "المسيسيبي", "اليانغتسي"],
        correct: 1,
        category: "جغرافيا"
    },
    // Level 6 - Medium (2,000)
    {
        question: "ما هو الغاز الأكثر وفرة في الغلاف الجوي للأرض؟",
        answers: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
        correct: 2,
        category: "علوم"
    },
    {
        question: "من هو الصحابي الملقب بـ 'سيف الله المسلول'؟",
        answers: ["علي بن أبي طالب", "عمر بن الخطاب", "خالد بن الوليد", "سعد بن أبي وقاص"],
        correct: 2,
        category: "تاريخ إسلامي"
    },
    // Level 7 - Medium (4,000)
    {
        question: "ما هي الدولة العربية التي يمر بها خط الاستواء؟",
        answers: ["اليمن", "السودان", "الصومال", "لا توجد"],
        correct: 2,
        category: "جغرافيا"
    },
    {
        question: "كم عدد أسنان الإنسان البالغ؟",
        answers: ["٢٨", "٣٠", "٣٢", "٣٤"],
        correct: 2,
        category: "علوم"
    },
    // Level 8 - Medium-Hard (8,000)
    {
        question: "ما هو أصغر كوكب في المجموعة الشمسية؟",
        answers: ["المريخ", "عطارد", "بلوتو", "الزهرة"],
        correct: 1,
        category: "علوم"
    },
    {
        question: "في أي سنة ميلادية فُتحت القسطنطينية؟",
        answers: ["١٤٥٣ م", "١٤٩٢ م", "١٥١٧ م", "١٣٨٩ م"],
        correct: 0,
        category: "تاريخ"
    },
    // Level 9 - Hard (16,000)
    {
        question: "ما هو العنصر الأكثر وفرة في القشرة الأرضية؟",
        answers: ["الحديد", "السيليكون", "الأكسجين", "الألومنيوم"],
        correct: 2,
        category: "علوم"
    },
    {
        question: "من هو العالم المسلم الذي ألّف كتاب 'القانون في الطب'؟",
        answers: ["ابن رشد", "ابن سينا", "الرازي", "ابن النفيس"],
        correct: 1,
        category: "تاريخ"
    },
    // Level 10 - Hard (32,000) - MILESTONE
    {
        question: "ما هي أقدم جامعة في العالم لا تزال تعمل حتى اليوم؟",
        answers: ["جامعة بولونيا", "جامعة أكسفورد", "جامعة القرويين", "جامعة الأزهر"],
        correct: 2,
        category: "تاريخ"
    },
    {
        question: "ما هو الحيوان الوحيد الذي لا يستطيع القفز؟",
        answers: ["فرس النهر", "الفيل", "وحيد القرن", "الجاموس"],
        correct: 1,
        category: "حيوانات"
    },
    // Level 11 - Hard (64,000)
    {
        question: "ما هي المدينة التي كانت تُعرف قديماً بـ 'مدينة الشمس'؟",
        answers: ["القاهرة", "بعلبك", "دمشق", "أثينا"],
        correct: 1,
        category: "تاريخ"
    },
    {
        question: "كم يبلغ عدد العظام في جسم الإنسان البالغ؟",
        answers: ["١٨٦", "٢٠٦", "٢١٦", "١٩٦"],
        correct: 1,
        category: "علوم"
    },
    // Level 12 - Very Hard (125,000)
    {
        question: "ما هو أعلى شلال في العالم؟",
        answers: ["شلالات نياجرا", "شلالات فيكتوريا", "شلالات آنجل", "شلالات إيغواسو"],
        correct: 2,
        category: "جغرافيا"
    },
    {
        question: "من هو مخترع المصباح الكهربائي؟",
        answers: ["نيكولا تسلا", "ألكسندر غراهام بيل", "توماس إديسون", "مايكل فاراداي"],
        correct: 2,
        category: "اختراعات"
    },
    // Level 13 - Very Hard (250,000)
    {
        question: "ما هي أعلى قمة جبلية في أفريقيا؟",
        answers: ["جبل كلمنجارو", "جبل كينيا", "جبل إلبروس", "جبل أطلس"],
        correct: 0,
        category: "جغرافيا"
    },
    {
        question: "ما هو أول عنصر في الجدول الدوري؟",
        answers: ["الهيليوم", "الليثيوم", "الهيدروجين", "الكربون"],
        correct: 2,
        category: "علوم"
    },
    // Level 14 - Expert (500,000)
    {
        question: "في أي عام وُقعت معاهدة وستفاليا التي أنهت حرب الثلاثين عاماً؟",
        answers: ["١٦٣٠ م", "١٦٤٨ م", "١٦٦٠ م", "١٦١٨ م"],
        correct: 1,
        category: "تاريخ"
    },
    {
        question: "ما هو العنصر الكيميائي الذي يحتوي على أعلى نقطة انصهار؟",
        answers: ["التيتانيوم", "التنغستن", "الموليبدينوم", "الكروم"],
        correct: 1,
        category: "علوم"
    },
    // Level 15 - Million Question
    {
        question: "ما هي أقدم لغة مكتوبة معروفة في التاريخ؟",
        answers: ["الهيروغليفية المصرية", "السومرية المسمارية", "الصينية القديمة", "السنسكريتية"],
        correct: 1,
        category: "تاريخ"
    },
    {
        question: "ما هو الرقم الذري لعنصر الذهب؟",
        answers: ["٧٩", "٤٧", "٨٢", "٥٥"],
        correct: 0,
        category: "علوم"
    }
];

// ==================== PRIZE LEVELS ====================
const prizeLevels = [
    { level: 1,  prize: 100,     display: "١٠٠", milestone: false },
    { level: 2,  prize: 200,     display: "٢٠٠", milestone: false },
    { level: 3,  prize: 300,     display: "٣٠٠", milestone: false },
    { level: 4,  prize: 500,     display: "٥٠٠", milestone: false },
    { level: 5,  prize: 1000,    display: "١٬٠٠٠", milestone: true },
    { level: 6,  prize: 2000,    display: "٢٬٠٠٠", milestone: false },
    { level: 7,  prize: 4000,    display: "٤٬٠٠٠", milestone: false },
    { level: 8,  prize: 8000,    display: "٨٬٠٠٠", milestone: false },
    { level: 9,  prize: 16000,   display: "١٦٬٠٠٠", milestone: false },
    { level: 10, prize: 32000,   display: "٣٢٬٠٠٠", milestone: true },
    { level: 11, prize: 64000,   display: "٦٤٬٠٠٠", milestone: false },
    { level: 12, prize: 125000,  display: "١٢٥٬٠٠٠", milestone: false },
    { level: 13, prize: 250000,  display: "٢٥٠٬٠٠٠", milestone: false },
    { level: 14, prize: 500000,  display: "٥٠٠٬٠٠٠", milestone: false },
    { level: 15, prize: 1000000, display: "١٬٠٠٠٬٠٠٠", milestone: true }
];

// ==================== ARABIC NUMBERS ====================
const arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
function toArabicNum(num) {
    return String(num).replace(/\d/g, d => arabicNums[d]);
}

// ==================== GAME STATE ====================
let currentLevel = 0;
let selectedAnswer = -1;
let gameQuestions = [];
let timerInterval = null;
let timeLeft = 30;
let isAnswerLocked = false;
let lifelines = { '5050': true, 'audience': true, 'phone': true };
let audioCtx = null;

// ==================== SOUND SYSTEM ====================
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playTone(frequency, duration, type = 'sine', volume = 0.15) {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) { /* silence errors */ }
}

function playCorrectSound() {
    playTone(523.25, 0.15, 'sine', 0.12);
    setTimeout(() => playTone(659.25, 0.15, 'sine', 0.12), 150);
    setTimeout(() => playTone(783.99, 0.3, 'sine', 0.15), 300);
}

function playWrongSound() {
    playTone(311.13, 0.3, 'sawtooth', 0.08);
    setTimeout(() => playTone(233.08, 0.5, 'sawtooth', 0.08), 200);
}

function playSelectSound() {
    playTone(440, 0.1, 'sine', 0.08);
}

function playClickSound() {
    playTone(880, 0.05, 'sine', 0.06);
}

function playWinSound() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((note, i) => {
        setTimeout(() => playTone(note, 0.3, 'sine', 0.12), i * 200);
    });
}

function playTickSound() {
    playTone(1000, 0.03, 'square', 0.03);
}

// ==================== PARTICLES ====================
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        const colors = ['#ffd700', '#1e88e5', '#7c4dff', '#ffffff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ==================== CONFETTI ====================
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#ffd700', '#1e88e5', '#7c4dff', '#00e676', '#ff9100', '#ff1744', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.animationDelay = (Math.random() * 2) + 's';
        piece.style.width = (Math.random() * 8 + 5) + 'px';
        piece.style.height = (Math.random() * 8 + 5) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(piece);
    }
}

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ==================== PRIZE LADDER ====================
function buildPrizeLadder() {
    const container = document.getElementById('ladder-items');
    container.innerHTML = '';
    // Reversed order: highest at top
    for (let i = prizeLevels.length - 1; i >= 0; i--) {
        const level = prizeLevels[i];
        const item = document.createElement('div');
        item.classList.add('ladder-item');
        item.id = `ladder-${i}`;
        if (level.milestone) item.classList.add('milestone');
        item.innerHTML = `
            <span class="level-number">${toArabicNum(level.level)}</span>
            <span class="level-prize">${level.display} ريال</span>
        `;
        container.appendChild(item);
    }
}

function updatePrizeLadder() {
    for (let i = 0; i < prizeLevels.length; i++) {
        const item = document.getElementById(`ladder-${i}`);
        item.classList.remove('current', 'passed');
        if (i < currentLevel) {
            item.classList.add('passed');
        } else if (i === currentLevel) {
            item.classList.add('current');
        }
    }
}

// ==================== GAME INITIALIZATION ====================
function selectQuestions() {
    // Group questions by pairs (2 per level category)
    const grouped = [];
    for (let i = 0; i < questions.length; i += 2) {
        grouped.push([questions[i], questions[i + 1]]);
    }
    // Pick one random question from each group
    gameQuestions = grouped.map(pair => pair[Math.floor(Math.random() * pair.length)]);
    // Shuffle answers for each question
    gameQuestions = gameQuestions.map(q => {
        const indices = [0, 1, 2, 3];
        // Fisher-Yates shuffle
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        const shuffledAnswers = indices.map(idx => q.answers[idx]);
        const newCorrect = indices.indexOf(q.correct);
        return { ...q, answers: shuffledAnswers, correct: newCorrect };
    });
}

function startGame() {
    playClickSound();
    currentLevel = 0;
    selectedAnswer = -1;
    isAnswerLocked = false;
    lifelines = { '5050': true, 'audience': true, 'phone': true };
    
    selectQuestions();
    buildPrizeLadder();
    resetLifelineButtons();
    showScreen('game-screen');
    loadQuestion();
}

function restartGame() {
    playClickSound();
    showScreen('start-screen');
}

// ==================== QUESTION LOADING ====================
function loadQuestion() {
    if (currentLevel >= 15) {
        endGame(true);
        return;
    }

    const q = gameQuestions[currentLevel];
    selectedAnswer = -1;
    isAnswerLocked = false;

    // Update question text
    document.getElementById('question-text').textContent = q.question;

    // Update answers
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`answer-${i}`);
        document.getElementById(`answer-text-${i}`).textContent = q.answers[i];
        btn.className = 'answer-btn';
        btn.style.display = '';
    }

    // Update UI
    document.getElementById('question-number').textContent = `السؤال ${toArabicNum(currentLevel + 1)}`;
    
    const currentPrize = currentLevel === 0 ? '٠' : prizeLevels[currentLevel - 1].display;
    document.getElementById('prize-value').textContent = `${currentPrize} ريال`;

    // Hide action bar
    document.getElementById('action-bar').style.display = 'none';

    // Update prize ladder
    updatePrizeLadder();

    // Start timer
    startTimer();

    // Animate question entry
    const container = document.getElementById('question-container');
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = 'fadeIn 0.5s ease';
}

// ==================== TIMER ====================
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 5 && timeLeft > 0) {
            playTickSound();
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const fill = document.getElementById('timer-fill');
    const text = document.getElementById('timer-text');
    
    const percentage = (timeLeft / 30) * 100;
    fill.style.width = percentage + '%';
    text.textContent = toArabicNum(timeLeft);

    fill.classList.remove('warning', 'critical');
    if (timeLeft <= 5) {
        fill.classList.add('critical');
    } else if (timeLeft <= 10) {
        fill.classList.add('warning');
    }
}

function timeUp() {
    isAnswerLocked = true;
    // Show correct answer
    const q = gameQuestions[currentLevel];
    document.getElementById(`answer-${q.correct}`).classList.add('correct');
    playWrongSound();
    
    setTimeout(() => {
        endGame(false);
    }, 2000);
}

// ==================== ANSWER SELECTION ====================
function selectAnswer(index) {
    if (isAnswerLocked) return;

    playSelectSound();
    
    // Deselect previous
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer-${i}`).classList.remove('selected');
    }

    selectedAnswer = index;
    document.getElementById(`answer-${index}`).classList.add('selected');
    document.getElementById('action-bar').style.display = 'flex';
}

function confirmAnswer() {
    if (selectedAnswer === -1 || isAnswerLocked) return;

    playClickSound();
    clearInterval(timerInterval);
    isAnswerLocked = true;
    document.getElementById('action-bar').style.display = 'none';

    const q = gameQuestions[currentLevel];
    
    // Dramatic pause with flashing
    const selectedBtn = document.getElementById(`answer-${selectedAnswer}`);
    
    // Flash selected answer
    let flashCount = 0;
    const flashInterval = setInterval(() => {
        selectedBtn.classList.toggle('selected');
        flashCount++;
        if (flashCount >= 6) {
            clearInterval(flashInterval);
            selectedBtn.classList.add('selected');
            revealAnswer();
        }
    }, 300);
}

function revealAnswer() {
    const q = gameQuestions[currentLevel];
    const isCorrect = selectedAnswer === q.correct;

    if (isCorrect) {
        document.getElementById(`answer-${selectedAnswer}`).classList.remove('selected');
        document.getElementById(`answer-${selectedAnswer}`).classList.add('correct');
        playCorrectSound();

        setTimeout(() => {
            currentLevel++;
            if (currentLevel >= 15) {
                endGame(true);
            } else {
                loadQuestion();
            }
        }, 2000);
    } else {
        document.getElementById(`answer-${selectedAnswer}`).classList.remove('selected');
        document.getElementById(`answer-${selectedAnswer}`).classList.add('wrong');
        
        // Show correct answer
        setTimeout(() => {
            document.getElementById(`answer-${q.correct}`).classList.add('correct');
        }, 1000);

        playWrongSound();

        setTimeout(() => {
            endGame(false);
        }, 3000);
    }
}

// ==================== WALK AWAY ====================
function walkAway() {
    playClickSound();
    clearInterval(timerInterval);
    
    if (currentLevel === 0) {
        showScreen('start-screen');
        return;
    }

    showResultScreen(
        '🚶',
        'قررت الانسحاب!',
        'أحسنت! لقد اخترت الخيار الآمن',
        prizeLevels[currentLevel - 1].display
    );
}

// ==================== END GAME ====================
function endGame(won) {
    clearInterval(timerInterval);

    if (won) {
        showResultScreen(
            '🏆',
            'مبروك! ربحت المليون!',
            'أنت بطل حقيقي! أجبت على جميع الأسئلة بنجاح',
            '١٬٠٠٠٬٠٠٠'
        );
        playWinSound();
        setTimeout(createConfetti, 500);
    } else {
        // Calculate guaranteed prize
        let guaranteedPrize = '٠';
        if (currentLevel >= 10) {
            guaranteedPrize = prizeLevels[9].display; // 32,000 milestone
        } else if (currentLevel >= 5) {
            guaranteedPrize = prizeLevels[4].display; // 1,000 milestone
        }

        const currentQ = currentLevel + 1;
        showResultScreen(
            currentLevel >= 5 ? '💪' : '😔',
            'انتهت اللعبة',
            `توقفت عند السؤال ${toArabicNum(currentQ)} من ١٥`,
            guaranteedPrize
        );
    }
}

function showResultScreen(icon, title, subtitle, prize) {
    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-subtitle').textContent = subtitle;
    document.getElementById('result-prize').textContent = `${prize} ريال`;
    showScreen('result-screen');
}

// ==================== LIFELINES ====================
function resetLifelineButtons() {
    ['5050', 'audience', 'phone'].forEach(id => {
        document.getElementById(`lifeline-${id}`).classList.remove('used');
    });
}

function useLifeline(type) {
    if (!lifelines[type] || isAnswerLocked) return;
    
    playClickSound();
    lifelines[type] = false;
    document.getElementById(`lifeline-${type}`).classList.add('used');

    switch (type) {
        case '5050':
            use5050();
            break;
        case 'audience':
            useAudiencePoll();
            break;
        case 'phone':
            usePhoneAFriend();
            break;
    }
}

function use5050() {
    const q = gameQuestions[currentLevel];
    const wrongAnswers = [0, 1, 2, 3].filter(i => i !== q.correct);
    
    // Shuffle and pick 2 wrong answers to remove
    for (let i = wrongAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongAnswers[i], wrongAnswers[j]] = [wrongAnswers[j], wrongAnswers[i]];
    }
    
    const toRemove = wrongAnswers.slice(0, 2);
    toRemove.forEach(idx => {
        document.getElementById(`answer-${idx}`).classList.add('hidden-5050');
    });

    // If the selected answer was removed, deselect it
    if (toRemove.includes(selectedAnswer)) {
        selectedAnswer = -1;
        document.getElementById('action-bar').style.display = 'none';
    }
}

function useAudiencePoll() {
    const q = gameQuestions[currentLevel];
    const modal = document.getElementById('audience-modal');
    const chart = document.getElementById('poll-chart');
    chart.innerHTML = '';

    // Generate poll percentages (weighted toward correct answer)
    const difficulty = currentLevel / 15;
    let percentages = [0, 0, 0, 0];
    
    // Correct answer gets higher percentage at easier levels
    const correctWeight = Math.max(35, 85 - difficulty * 50);
    percentages[q.correct] = correctWeight + Math.floor(Math.random() * 10);
    
    let remaining = 100 - percentages[q.correct];
    for (let i = 0; i < 4; i++) {
        if (i === q.correct) continue;
        if (i === 3 || (i === 2 && percentages[3] === 0)) {
            // Last remaining gets the rest
            let others = percentages.reduce((sum, p, idx) => idx !== q.correct && idx !== i ? sum + p : sum, 0);
            percentages[i] = remaining - others;
        } else {
            percentages[i] = Math.floor(Math.random() * (remaining / 2));
        }
    }

    // Ensure they sum to 100
    const total = percentages.reduce((a, b) => a + b, 0);
    percentages[q.correct] += (100 - total);

    const labels = ['أ', 'ب', 'ج', 'د'];
    const barClasses = ['bar-a', 'bar-b', 'bar-c', 'bar-d'];

    percentages.forEach((pct, i) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('poll-bar-wrapper');
        
        const percentage = document.createElement('div');
        percentage.classList.add('poll-percentage');
        percentage.textContent = `${toArabicNum(Math.max(0, pct))}%`;

        const bar = document.createElement('div');
        bar.classList.add('poll-bar', barClasses[i]);
        bar.style.height = '0px';
        
        const label = document.createElement('div');
        label.classList.add('poll-label');
        label.textContent = labels[i];

        wrapper.appendChild(percentage);
        wrapper.appendChild(bar);
        wrapper.appendChild(label);
        chart.appendChild(wrapper);

        // Animate bars
        setTimeout(() => {
            bar.style.height = `${Math.max(5, pct * 1.6)}px`;
        }, 200 + i * 150);
    });

    modal.classList.add('active');
}

function usePhoneAFriend() {
    const q = gameQuestions[currentLevel];
    const modal = document.getElementById('phone-modal');
    const response = document.getElementById('friend-response');

    const friendNames = ['أحمد', 'محمد', 'فاطمة', 'سارة', 'خالد', 'نورة', 'عمر', 'ليلى'];
    const friendName = friendNames[Math.floor(Math.random() * friendNames.length)];

    const difficulty = currentLevel / 15;
    const isConfident = Math.random() > difficulty * 0.7;
    const letters = ['أ', 'ب', 'ج', 'د'];

    let answerIdx;
    if (isConfident) {
        answerIdx = q.correct;
    } else {
        // Might give wrong answer at higher difficulty
        if (Math.random() < 0.3) {
            const wrongIndices = [0, 1, 2, 3].filter(i => i !== q.correct);
            answerIdx = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
        } else {
            answerIdx = q.correct;
        }
    }

    const confidenceLevel = isConfident ? 
        ['متأكد', 'واثق تماماً', 'أعرف الإجابة'][Math.floor(Math.random() * 3)] :
        ['أعتقد', 'لست متأكداً لكن أظن', 'حسب ما أتذكر'][Math.floor(Math.random() * 3)];

    response.textContent = `${friendName}: "${confidenceLevel} أن الإجابة هي (${letters[answerIdx]}) ${q.answers[answerIdx]}"`;

    modal.classList.add('active');

    // Phone ring animation
    const phoneAnim = document.getElementById('phone-animation');
    phoneAnim.style.display = 'block';
    setTimeout(() => {
        phoneAnim.style.display = 'none';
    }, 2000);
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Handle keyboard
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('game-screen').classList.contains('active')) return;
    if (isAnswerLocked) return;

    switch (e.key) {
        case '1': selectAnswer(0); break;
        case '2': selectAnswer(1); break;
        case '3': selectAnswer(2); break;
        case '4': selectAnswer(3); break;
        case 'Enter':
            if (selectedAnswer !== -1) confirmAnswer();
            break;
    }
});
