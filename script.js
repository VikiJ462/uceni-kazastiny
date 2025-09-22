const translations = [
    { czech: "dnes", kazakh: "бүгін", pronunciation: "bügün" },
    { czech: "zítra", kazakh: "ертең", pronunciation: "erteñ" },
    { czech: "včera", kazakh: "кеше", pronunciation: "keše" },
    { czech: "ráno", kazakh: "таң", pronunciation: "tañ" },
    { czech: "večer", kazakh: "кеш", pronunciation: "keš" },
    { czech: "dům", kazakh: "үй", pronunciation: "üy" },
    { czech: "auto", kazakh: "көлік", pronunciation: "kölik" },
    { czech: "jídlo", kazakh: "тамақ", pronunciation: "tamaq" },
    { czech: "voda", kazakh: "су", pronunciation: "su" },
    { czech: "kniha", kazakh: "кітап", pronunciation: "kitap" },
    { czech: "člověk", kazakh: "адам", pronunciation: "adam" },
    { czech: "přítel", kazakh: "дос", pronunciation: "dos" },
    { czech: "rodina", kazakh: "отбасы", pronunciation: "otbası" },
    { czech: "láska", kazakh: "махаббат", pronunciation: "mahabbat" },
    { czech: "čas", kazakh: "уақыт", pronunciation: "uaqyt" },
    { czech: "den", kazakh: "күн", pronunciation: "kün" },
    { czech: "noc", kazakh: "түн", pronunciation: "tün" },
    { czech: "práce", kazakh: "жұмыс", pronunciation: "jūmys" },
    { czech: "škola", kazakh: "мектеп", pronunciation: "mektep" },
    { czech: "město", kazakh: "қала", pronunciation: "qala" },
    { czech: "vesnice", kazakh: "ауыл", pronunciation: "auyl" },
    { czech: "strom", kazakh: "ағаш", pronunciation: "ağaš" },
    { czech: "květina", kazakh: "гүл", pronunciation: "gül" },
    { czech: "nebe", kazakh: "аспан", pronunciation: "aspan" },
    { czech: "slunce", kazakh: "күн", pronunciation: "kün" },
    { czech: "měsíc", kazakh: "ай", pronunciation: "ay" },
    { czech: "hvězda", kazakh: "жұлдыз", pronunciation: "jūldyz" },
    { czech: "moře", kazakh: "теңіз", pronunciation: "teñiz" },
    { czech: "řeka", kazakh: "өзен", pronunciation: "özen" },
    { czech: "hora", kazakh: "тау", pronunciation: "tau" },
    { czech: "les", kazakh: "орман", pronunciation: "orman" },
    { czech: "cesta", kazakh: "жол", pronunciation: "jol" },
    { czech: "most", kazakh: "көпір", pronunciation: "köpir" },
    { czech: "okno", kazakh: "терезе", pronunciation: "tereze" },
    { czech: "dveře", kazakh: "есік", pronunciation: "esik" },
    { czech: "stůl", kazakh: "үстел", pronunciation: "üstel" },
    { czech: "židle", kazakh: "орындық", pronunciation: "oryndyq" },
    { czech: "postel", kazakh: "төсек", pronunciation: "tösek" },
    { czech: "peníze", kazakh: "ақша", pronunciation: "aqša" },
    { czech: "trh", kazakh: "базар", pronunciation: "bazar" },
    { czech: "obchod", kazakh: "дүкен", pronunciation: "düken" },
    { czech: "jablko", kazakh: "алма", pronunciation: "alma" },
    { czech: "chléb", kazakh: "нан", pronunciation: "nan" },
    { czech: "mléko", kazakh: "сүт", pronunciation: "süt" },
    { czech: "maso", kazakh: "ет", pronunciation: "et" },
    { czech: "ryba", kazakh: "балық", pronunciation: "balyq" },
    { czech: "ovoce", kazakh: "жеміс", pronunciation: "jemis" },
    { czech: "zelenina", kazakh: "көкөніс", pronunciation: "kökönis" },
    { czech: "časopis", kazakh: "журнал", pronunciation: "jurnal" },
    { czech: "noviny", kazakh: "газет", pronunciation: "gazet" },
    { czech: "telefon", kazakh: "телефон", pronunciation: "telefon" },
    { czech: "počítač", kazakh: "компьютер", pronunciation: "kompyuter" },
    { czech: "internet", kazakh: "интернет", pronunciation: "internet" },
    { czech: "matka", kazakh: "ана", pronunciation: "ana" },
    { czech: "otec", kazakh: "әке", pronunciation: "äke" },
    { czech: "bratr", kazakh: "аға", pronunciation: "ağa" },
    { czech: "sestra", kazakh: "қарындас", pronunciation: "qaryndas" },
    { czech: "dítě", kazakh: "бала", pronunciation: "bala" },
    { czech: "babička", kazakh: "әже", pronunciation: "äje" },
    { czech: "dědeček", kazakh: "ата", pronunciation: "ata" },
    { czech: "lék", kazakh: "дәрі", pronunciation: "däri" },
    { czech: " nemocnice", kazakh: "аурухана", pronunciation: "auruhana" },
    { czech: "lékař", kazakh: "дәрігер", pronunciation: "däriger" },
    { czech: "zdraví", kazakh: "денсаулық", pronunciation: "densawlyq" },
    { czech: "hlava", kazakh: "бас", pronunciation: "bas" },
    { czech: "ruka", kazakh: "қол", pronunciation: "qol" },
    { czech: "noha", kazakh: "аяқ", pronunciation: "ayaq" },
    { czech: "oko", kazakh: "көз", pronunciation: "köz" },
    { czech: "ucho", kazakh: "құлақ", pronunciation: "qūlaq" },
    { czech: "nos", kazakh: "мұрын", pronunciation: "mūryn" },
    { czech: "ústa", kazakh: "ауыз", pronunciation: "auyz" },
    { czech: "srdce", kazakh: "жүрек", pronunciation: "jürek" },
    { czech: "krev", kazakh: "қан", pronunciation: "qan" },
    { czech: "jaro", kazakh: "көктем", pronunciation: "köktem" },
    { czech: "léto", kazakh: "жаз", pronunciation: "jaz" },
    { czech: "podzim", kazakh: "күз", pronunciation: "küz" },
    { czech: "zima", kazakh: "қыс", pronunciation: "qys" },
    { czech: "déšť", kazakh: "жаңбыр", pronunciation: "jañbyr" },
    { czech: "sníh", kazakh: "қар", pronunciation: "qar" },
    { czech: "vítr", kazakh: "жел", pronunciation: "jel" },
    { czech: "mrak", kazakh: "бұлт", pronunciation: "būlt" },
    { czech: "teplo", kazakh: "жылу", pronunciation: "jylu" },
    { czech: "zima (chlad)", kazakh: "суық", pronunciation: "suyq" },
    { czech: "časopis", kazakh: "журнал", pronunciation: "jurnal" },
    { czech: "noviny", kazakh: "газет", pronunciation: "gazet" },
    { czech: "pero", kazakh: "қалам", pronunciation: "qalam" },
    { czech: "papír", kazakh: "қағаз", pronunciation: "qağaz" },
    { czech: "tužka", kazakh: "қарындаш", pronunciation: "qaryndash" },
    { czech: "hodiny", kazakh: "сағат", pronunciation: "sağat" },
    { czech: "světlo", kazakh: "жарық", pronunciation: "jaryq" },
    { czech: "tma", kazakh: "қараңғы", pronunciation: "qarañğy" },
    { czech: "krása", kazakh: "сұлулық", pronunciation: "sūlulyq" },
    { czech: "život", kazakh: "өмір", pronunciation: "ömir" },
    { czech: "smrt", kazakh: "өлім", pronunciation: "ölim" },
    { czech: "strach", kazakh: "қорқыныш", pronunciation: "qorqynyš" },
    { czech: "radost", kazakh: "қуаныш", pronunciation: "quanysh" },
    { czech: "smutek", kazakh: "қайғы", pronunciation: "qayğy" },
    { czech: "hlas", kazakh: "дауыс", pronunciation: "dauys" },
    { czech: "zvuk", kazakh: "дыбыс", pronunciation: "dybys" },
    { czech: "ticho", kazakh: "тыныштық", pronunciation: "tynyshtyq" },
    { czech: "počasí", kazakh: "ауа райы", pronunciation: "aua rayy" },
    { czech: "cena", kazakh: "баға", pronunciation: "bağa" },
    { czech: "tráva", kazakh: "шөп", pronunciation: "šöp" }
];

let currentIndex = 0;
let currentStreak = 0;
let practiceWords = [];
let currentSelections = {};

// Funkce pro správu denní  řady
function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    const streak = parseInt(localStorage.getItem('streak')) || 0;
    
    if (lastVisit !== today) {
        // Pokud je to první návštěva dne
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        if (lastVisit === yesterdayString) {
            // Návštěva včera - zvýšení řady
            currentStreak = streak + 1;
        } else if (!lastVisit) {
            // První návštěva
            currentStreak = 1;
        } else {
            // Přerušení řady
            currentStreak = 1;
        }
        
        localStorage.setItem('streak', currentStreak);
        localStorage.setItem('lastVisit', today);
    } else {
        // Dnes již byla návštěva
        currentStreak = streak;
    }
    
    document.getElementById('streakCounter').textContent = `Denní řada: ${currentStreak} dní`;
}

// Funkce pro zobrazení flashcard
function showFlashcard() {
    const flashcardElement = document.getElementById('flashcard');
    const questionElement = flashcardElement.querySelector('.question');
    const answerElement = flashcardElement.querySelector('.answer');
    const pronunciationElement = flashcardElement.querySelector('.pronunciation');

    questionElement.textContent = translations[currentIndex].czech;
    answerElement.textContent = translations[currentIndex].kazakh;
    pronunciationElement.textContent = `(${translations[currentIndex].pronunciation})`;
    answerElement.style.display = 'none';
    pronunciationElement.style.display = 'none';

    // Update button states
    document.getElementById('prevButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === translations.length - 1;
}

function flipFlashcard() {
    const answerElement = document.getElementById('flashcard').querySelector('.answer');
    const pronunciationElement = document.getElementById('flashcard').querySelector('.pronunciation');
    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        pronunciationElement.style.display = 'block';
    } else {
        answerElement.style.display = 'none';
        pronunciationElement.style.display = 'none';
    }
}

function showNext() {
    if (currentIndex < translations.length - 1) {
        currentIndex++;
        showFlashcard();
    }
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        showFlashcard();
    }
}

// Funkce pro procvičovací mód
function startPracticeMode() {
    // Skrýt flashcard režim, zobrazit procvičovací režim
    document.getElementById('flashcardSection').classList.add('hidden');
    document.getElementById('practiceSection').classList.remove('hidden');
    
    // Vybrat 5 náhodných slov
    practiceWords = getRandomWords(5);
    generatePracticeUI();
}

function getRandomWords(count) {
    const shuffled = [...translations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generatePracticeUI() {
    const container = document.getElementById('practiceContainer');
    container.innerHTML = '';
    currentSelections = {};
    
    // Vytvořit dropdown s možnostmi
    const options = practiceWords.map(word => word.kazakh);
    
    practiceWords.forEach((word, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'practice-item';
        
        const czechSpan = document.createElement('span');
        czechSpan.className = 'practice-czech';
        czechSpan.textContent = word.czech;
        
        const dropdown = document.createElement('select');
        dropdown.className = 'practice-dropdown';
        dropdown.dataset.index = index;
        
        // Přidat prázdnou možnost
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '-- vyberte --';
        dropdown.appendChild(emptyOption);
        
        // Přidat možnosti
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            dropdown.appendChild(optionElement);
        });
        
        dropdown.addEventListener('change', (e) => {
            currentSelections[index] = e.target.value;
        });
        
        itemDiv.appendChild(czechSpan);
        itemDiv.appendChild(dropdown);
        container.appendChild(itemDiv);
    });
    
    // Vymazat předchozí feedback
    document.getElementById('practiceFeedback').textContent = '';
    document.getElementById('practiceFeedback').className = 'practice-feedback';
}

function checkPractice() {
    let correct = 0;
    let total = practiceWords.length;
    
    practiceWords.forEach((word, index) => {
        const selected = currentSelections[index];
        if (selected === word.kazakh) {
            correct++;
        }
    });
    
    const feedback = document.getElementById('practiceFeedback');
    if (correct === total) {
        feedback.textContent = `Skvělé! Všechno správně (${correct}/${total})`;
        feedback.className = 'practice-feedback correct';
    } else {
        feedback.textContent = `Máš ${correct} správně z ${total}`;
        feedback.className = 'practice-feedback incorrect';
    }
}

function backToFlashcards() {
    document.getElementById('practiceSection').classList.add('hidden');
    document.getElementById('flashcardSection').classList.remove('hidden');
}

// Přepínání mezi režimy
function switchMode(mode) {
    const flashcardButton = document.getElementById('flashcardMode');
    const practiceButton = document.getElementById('practiceMode');
    
    if (mode === 'flashcard') {
        flashcardButton.classList.add('active');
        practiceButton.classList.remove('active');
        backToFlashcards();
    } else {
        flashcardButton.classList.remove('active');
        practiceButton.classList.add('active');
        startPracticeMode();
    }
}

// Inicializace při načtení stránky
document.addEventListener('DOMContentLoaded', function() {
    updateStreak();
    showFlashcard();
    
    // Event listeners pro tlačítka
    document.getElementById('flipButton').addEventListener('click', flipFlashcard);
    document.getElementById('nextButton').addEventListener('click', showNext);
    document.getElementById('prevButton').addEventListener('click', showPrevious);
    
    // Event listeners pro režimy
    document.getElementById('flashcardMode').addEventListener('click', () => switchMode('flashcard'));
    document.getElementById('practiceMode').addEventListener('click', () => switchMode('practice'));
    
    // Event listeners pro procvičování
    document.getElementById('checkPracticeButton').addEventListener('click', checkPractice);
    document.getElementById('newPracticeButton').addEventListener('click', startPracticeMode);
    document.getElementById('backToFlashcardsButton').addEventListener('click', backToFlashcards);
});