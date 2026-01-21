// --- DATA STRUCTURES (Simulated FSL/ASL Content) ---
const SIGNS = [
    // Alphabet (A-Z) - ASL is often used for Filipino Sign Language (FSL) alphabet
    { id: 'A', type: 'alpha', title: 'Letter A', FSL: 'A', EN: 'A', desc: 'Closed fist, thumb rests alongside the index finger.', img_url: '/image/a.png' },
    { id: 'B', type: 'alpha', title: 'Letter B', FSL: 'B', EN: 'B', desc: 'Fingers straight and pressed together, thumb tucked across palm.', img_url: '/image/b.png'  },
    { id: 'C', type: 'alpha', title: 'Letter C', FSL: 'C', EN: 'C', desc: 'Fingers and thumb curved into a C-shape.', img_url: '/image/c.png'  },
    { id: 'D', type: 'alpha', title: 'Letter D', FSL: 'D', EN: 'D', desc: 'Index finger straight up, other fingers curved and touching the thumb.', img_url: '/image/d.png'  },
    { id: 'E', type: 'alpha', title: 'Letter E', FSL: 'E', EN: 'E', desc: 'Fingers slightly curved, resting on top of the thumb.', img_url: '/image/e.png'  },
    { id: 'F', type: 'alpha', title: 'Letter F', FSL: 'F', EN: 'F', desc: 'Index finger and thumb touching, other three fingers straight up.', img_url: '/image/f.png'  },
    { id: 'G', type: 'alpha', title: 'Letter G', FSL: 'G', EN: 'G', desc: 'Index finger and thumb parallel and straight, pointing right.', img_url: '/image/g.png'  },
    { id: 'H', type: 'alpha', title: 'Letter H', FSL: 'H', EN: 'H', desc: 'Index and middle fingers straight and together, pointing right.', img_url: '/image/h.png'  },
    { id: 'I', type: 'alpha', title: 'Letter I', FSL: 'I', EN: 'I', desc: 'Pinky finger straight up.', img_url: '/image/i.png'  },
    { id: 'J', type: 'alpha', title: 'Letter J', FSL: 'J', EN: 'J', desc: 'Pinky finger tracing the letter J in the air.', img_url: '/image/j.png'  },
    { id: 'K', type: 'alpha', title: 'Letter K', FSL: 'K', EN: 'K', desc: 'Index and middle finger straight up, thumb between them.', img_url: '/image/k.png'  },
    { id: 'L', type: 'alpha', title: 'Letter L', FSL: 'L', EN: 'L', desc: 'Index finger straight up, thumb straight out, forming an L-shape.', img_url: '/image/l.png'  },
    { id: 'M', type: 'alpha', title: 'Letter M', FSL: 'M', EN: 'M', desc: 'Fingers folded over the thumb, resting on the last two fingers.', img_url: '/image/m.png'  },
    { id: 'N', type: 'alpha', title: 'Letter N', FSL: 'N', EN: 'N', desc: 'Fingers folded over the thumb, resting on the last finger.', img_url: '/image/n.png'  },
    { id: 'O', type: 'alpha', title: 'Letter O', FSL: 'O', EN: 'O', desc: 'Fingers and thumb formed into an O-shape.', img_url: '/image/o.png'  },
    { id: 'P', type: 'alpha', title: 'Letter P', FSL: 'P', EN: 'P', desc: 'Same as K, but pointed downwards.', img_url: '/image/p.png'  },
    { id: 'Q', type: 'alpha', title: 'Letter Q', FSL: 'Q', EN: 'Q', desc: 'Index finger and thumb pointing down.', img_url: '/image/q.png'  },
    { id: 'R', type: 'alpha', title: 'Letter R', FSL: 'R', EN: 'R', desc: 'Index and middle fingers crossed.', img_url: '/image/r.png'  },
    { id: 'S', type: 'alpha', title: 'Letter S', FSL: 'S', EN: 'S', desc: 'Closed fist, thumb over the fingers.', img_url: '/image/s.png'  },
    { id: 'T', type: 'alpha', title: 'Letter T', FSL: 'T', EN: 'T', desc: 'Thumb tucked under the index finger.', img_url: '/image/t.png'  },
    { id: 'U', type: 'alpha', title: 'Letter U', FSL: 'U', EN: 'U', desc: 'Index and middle fingers straight and together.', img_url: '/image/u.png'  },
    { id: 'V', type: 'alpha', title: 'Letter V', FSL: 'V', EN: 'V', desc: 'Index and middle fingers straight and apart, forming a V-shape.', img_url: '/image/v.png'  },
    { id: 'W', type: 'alpha', title: 'Letter W', FSL: 'W', EN: 'W', desc: 'Index, middle, and ring fingers straight and apart.', img_url: '/image/w.png'  },
    { id: 'X', type: 'alpha', title: 'Letter X', FSL: 'X', EN: 'X', desc: 'Index finger curved like a hook.', img_url: '/image/x.png'  },
    { id: 'Y', type: 'alpha', title: 'Letter Y', FSL: 'Y', EN: 'Y', desc: 'Pinky and thumb extended, others closed.', img_url: '/image/y.png'  },
    { id: 'Z', type: 'alpha', title: 'Letter Z', FSL: 'Z', EN: 'Z', desc: 'Index finger tracing the letter Z in the air.', img_url: '/image/z.png'  },

    // Basic Words
    { id: 'Thank_You', type: 'word', title: 'Thank You / Salamat', FSL: 'Salamat', EN: 'Thank You', desc: 'Fingertips to the chin, then move hand forward.', img_url: '/image/thankyou.png' },
    { id: 'Hello', type: 'word', title: 'Hello / Kumusta', FSL: 'Kumusta', EN: 'Hello', desc: 'Touch forehead with fingertips, then salute out.', img_url: '/image/hello.png' },

    { id: 'ILoveYou', type: 'word', title: 'I Love You', FSL: 'Mahal kita', EN: 'I love you', desc: 'Extend thumb, index finger, and pinky while other fingers are folded.', img_url: '/image/iloveyou.png' },

    { id: 'Please', type: 'word', title: 'Please', FSL: 'Pakiusap', EN: 'Please', desc: 'Rub chest in a circular motion with an open hand.', img_url: '/image/please.png' },

    { id: 'Sorry', type: 'word', title: 'Sorry', FSL: 'Paumanhin', EN: 'Sorry', desc: 'Make a fist and rub it in a circular motion over the chest.', img_url: '/image/sorry.png' },

    { id: 'Yes', type: 'word', title: 'Yes', FSL: 'Oo', EN: 'Yes', desc: 'Nod fist up and down, like a head nod.', img_url: '/image/yes.png' },
    { id: 'No', type: 'word', title: 'No / Hindi', FSL: 'Hindi', EN: 'No', desc: 'Bring index and middle fingers together with the thumb, like a closing motion.', img_url: '/image/no.png' },

    { id: 'YoureWelcome', type: 'word', title: "You're Welcome", FSL: 'Walang anuman', EN: "You're welcome", desc: 'Open hand moves outward from the mouth.', img_url: '/image/youarewellcome.png' },
];

let userProgress = {}; // Stores { 'lessonId': true/false, ... }

// --- FIREBASE / PROGRESS LOGIC ---
const PROGRESS_COLLECTION_PATH = (appId, userId) =>
    `/artifacts/${appId}/users/${userId}/signconnect_progress`;
const PROGRESS_DOC_ID = 'user_data';

window.loadUserProgress = () => {
    if (!window.db || !window.userId) {
        console.warn("Firestore not initialized or user not logged in.");
        return;
    }

    // We need to import doc and onSnapshot from the module, but we can't import in a standard script easily without dynamic import.
    // However, the original code had imports in the module script.
    // Since we separated them, `doc` and `onSnapshot` are not available here unless exposed globally.
    // To fix this without changing architecture too much, we will rely on the fact that the original code
    // had imports in the module script but used them in the global scope?
    // WAIT: In the original code, `loadUserProgress` was defined inside the module script?
    // No, `loadUserProgress` was defined in the module script in the original code?
    // Let's check the original context.
    // Original: `window.loadUserProgress` was called in the module script, but defined in the module script?
    // Actually, looking at the original code provided:
    // The module script defines `window.firebase_init`.
    // The module script calls `window.loadUserProgress()`.
    // BUT `window.loadUserProgress` was defined in the module script?
    // No, looking at the original code:
    // The module script is at the top.
    // The main script is at the bottom.
    // The main script defines `window.loadUserProgress`.
    // The main script uses `doc` and `onSnapshot`.
    // ERROR: In the original code, `doc` and `onSnapshot` were imported in the module script at the top.
    // But the main script at the bottom used them.
    // Variables imported in a module are NOT global.
    // The original code provided in the prompt would actually throw an error if `doc` and `onSnapshot` were used in the bottom script
    // but imported in the top module script, unless they were attached to window.
    // Let's look closely at the original code.
    // The original code has `import ...` in the top script.
    // The bottom script uses `doc(window.db, ...)` and `onSnapshot(...)`.
    // This implies the original code provided by the user might have been slightly broken or I missed where they were exposed.
    // Ah, I see `window.db = db`. But `doc` and `onSnapshot` are functions.
    // If the original code worked, `doc` and `onSnapshot` must have been global or defined in the bottom script.
    // Wait, the original code has `import { ... }` in the top script.
    // And the bottom script has `const docRef = doc(...)`.
    // This would fail in the original code unless `doc` was global.
    // To make this functional in the separated version, I must expose these Firestore functions globally in `firebase-init.js`.
};

// RE-WRITING loadUserProgress to use exposed globals or dynamic imports is complex.
// Instead, I will expose the necessary Firestore functions in firebase-init.js.

window.loadUserProgress = () => {
    if (!window.db || !window.userId || !window.firestoreUtils) {
        console.warn("Firestore not initialized, user not logged in, or utils missing.");
        return;
    }

    const { doc, onSnapshot } = window.firestoreUtils;

    const docRef = doc(window.db, PROGRESS_COLLECTION_PATH(window.appId, window.userId), PROGRESS_DOC_ID);

    // Use onSnapshot for real-time updates
    onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            userProgress = docSnap.data().completedLessons || {};
            console.log("Progress loaded:", userProgress);
        } else {
            userProgress = {}; // Reset if document does not exist
            console.log("No progress found, initializing new data.");
        }
        updateUIProgress(); // Update UI whenever progress changes
        renderLessonButtons();
    }, (error) => {
        console.error("Error loading progress in real-time:", error);
        document.getElementById('progressStatus').textContent = 'Progress: Error Loading';
    });
};

const saveUserProgress = async () => {
    if (!window.db || !window.userId || !window.firestoreUtils) {
        console.warn("Cannot save progress: Firestore or user ID missing.");
        return;
    }

    const { doc, setDoc } = window.firestoreUtils;

    try {
        const docRef = doc(window.db, PROGRESS_COLLECTION_PATH(window.appId, window.userId), PROGRESS_DOC_ID);
        await setDoc(docRef, { completedLessons: userProgress }, { merge: true });
        console.log("Progress saved successfully.");
    } catch (error) {
        console.error("Error saving progress:", error);
    }
};

const resetProgress = () => {
    userProgress = {};
    saveUserProgress(); // Save the empty state
    updateUIProgress();
    renderLessonButtons();
};

// --- UI & RENDERING LOGIC ---
const views = document.querySelectorAll('.view');
const tabButtons = document.querySelectorAll('.tab-button');

function switchTab(targetId) {
    // Hide all views and remove active class from all buttons
    views.forEach(v => v.classList.add('hidden'));
    tabButtons.forEach(b => b.classList.remove('active'));

    // Show the target view and set the button active
    document.getElementById(targetId).classList.remove('hidden');
    document.querySelector(`.tab-button[data-target="${targetId}"]`).classList.add('active');

    // Special initializations
    if (targetId === 'home') {
        initCamera();
    } else {
        stopCamera();
    }
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchTab(button.dataset.target);
    });
});

// --- CAMERA LOGIC (Simulation) ---
let cameraStream = null;
const videoElement = document.getElementById('cameraFeed');
const cameraStatus = document.getElementById('cameraStatus');
const scanResult = document.getElementById('scanResult');
const scanButton = document.getElementById('scanButton');

function initCamera() {
    if (cameraStream) return; // Already running

    cameraStatus.classList.remove('hidden');

    // Check if API is available (requires HTTPS or localhost)
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        cameraStatus.textContent = 'Camera API not available (Check HTTPS).';
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        .then(stream => {
            cameraStream = stream;
            videoElement.srcObject = stream;
            videoElement.onloadedmetadata = () => {
                videoElement.play();
                cameraStatus.classList.add('hidden');
            };
        })
        .catch(err => {
            console.error("Error accessing camera:", err);
            cameraStatus.textContent = 'Camera Access Denied or Blocked.';
            cameraStatus.classList.remove('hidden');
        });
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
        videoElement.srcObject = null;
    }
}

scanButton.addEventListener('click', () => {
    scanButton.textContent = 'Scanning...';
    scanButton.disabled = true;

    setTimeout(() => {
        // Simulate AI Recognition: Pick a random sign from the database
        // In a real app, this would use a TensorFlow.js model to predict the sign
        const randomSign = SIGNS[Math.floor(Math.random() * SIGNS.length)];
        // 80% chance of success, 20% chance of "not recognized" for realism
        const recognizedSign = Math.random() > 0.2 ? randomSign : null;

        if (recognizedSign) {
            scanResult.innerHTML = `
                <p class="font-bold text-lg mb-1">✅ Recognized Sign: ${recognizedSign.title}</p>
                <p>Language(s): <span class="language-tag bg-blue-200 text-blue-700">FSL (${recognizedSign.FSL})</span> <span class="language-tag bg-green-200 text-green-700">EN (${recognizedSign.EN})</span></p>
                <p class="mt-2 text-sm">${recognizedSign.desc}</p>
            `;
            scanResult.classList.remove('hidden', 'bg-red-50');
            scanResult.classList.add('bg-blue-50');
        } else {
                scanResult.innerHTML = `
                <p class="font-bold text-lg mb-1">❌ Recognition Failed</p>
                <p class="mt-2 text-sm">Please try making the sign clearly in frame.</p>
            `;
            scanResult.classList.remove('hidden', 'bg-blue-50');
            scanResult.classList.add('bg-red-50');
        }

        scanButton.innerHTML = '<i class="ph-duotone ph-scan mr-2 text-xl"></i> SCAN SIGN NOW';
        scanButton.disabled = false;

    }, 1500); // Simulate processing time
});

// --- LESSONS & MODAL LOGIC ---
const alphabetLessonsContainer = document.getElementById('alphabetLessons');
const wordLessonsContainer = document.getElementById('wordLessons');
const modal = document.getElementById('lessonModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const markCompleteButton = document.getElementById('markCompleteButton');
const modalStatus = document.getElementById('modalStatus');

function renderLessonButtons() {
    alphabetLessonsContainer.innerHTML = '';
    wordLessonsContainer.innerHTML = '';

    SIGNS.forEach(sign => {
        const isCompleted = userProgress[sign.id];

        if (sign.type === 'alpha') {
            const alphaHtml = `
                <button data-id="${sign.id}" class="lesson-item p-1 flex flex-col items-center justify-center text-center rounded-xl transition duration-200 ${isCompleted ? 'bg-green-100 border-2 border-green-500 text-green-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}" onclick="openLessonModal('${sign.id}')">
                    <img src="${sign.img_url}" alt="${sign.title}" class="w-full h-10 object-contain">
                    <div class="flex items-center justify-center w-full mt-1">
                        <span class="font-bold text-xs">${sign.id}</span>
                        ${isCompleted ? '<i class="ph-fill ph-check-circle text-xs ml-0.5"></i>' : ''}
                    </div>
                </button>
            `;
            alphabetLessonsContainer.innerHTML += alphaHtml;
        } else if (sign.type === 'word') {
            const wordHtml = `
                <button data-id="${sign.id}" class="lesson-item p-3 flex flex-col items-center justify-center text-center rounded-xl transition duration-200 ${isCompleted ? 'bg-green-100 border-2 border-green-500 text-green-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}" onclick="openLessonModal('${sign.id}')">
                    <img src="${sign.img_url}" alt="${sign.title}" class="w-16 h-16 mb-2 object-contain">
                    <div class="flex items-center justify-center w-full">
                        <span class="font-bold text-xs leading-tight">${sign.title}</span>
                        ${isCompleted ? '<i class="ph-fill ph-check-circle text-lg ml-1"></i>' : ''}
                    </div>
                </button>
            `;
            wordLessonsContainer.innerHTML += wordHtml;
        }
    });
}

window.openLessonModal = (signId) => {
    const sign = SIGNS.find(s => s.id === signId);
    if (!sign) return;

    const isCompleted = userProgress[signId];

    modalTitle.textContent = sign.title;
    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img src="${sign.img_url}" alt="${sign.title} Sign" class="w-28 h-28 object-cover rounded-lg ring-4 ring-blue-100">
            <div class="flex-1">
                <p class="mb-2 text-sm"><span class="language-tag bg-blue-200 text-blue-700">FSL: ${sign.FSL}</span></p>
                <p class="mb-2 text-sm"><span class="language-tag bg-green-200 text-green-700">EN: ${sign.EN}</span></p>
                <p class="mt-2 text-gray-700">${sign.desc}</p>
            </div>
        </div>
    `;

    markCompleteButton.dataset.signId = signId;

    if (isCompleted) {
        markCompleteButton.classList.add('hidden');
        modalStatus.classList.remove('hidden');
        modalStatus.textContent = 'Lesson Completed!';
    } else {
        markCompleteButton.classList.remove('hidden');
        modalStatus.classList.add('hidden');
    }

    modal.classList.remove('hidden-modal');
};

window.closeModal = () => {
    modal.classList.add('hidden-modal');
};

markCompleteButton.addEventListener('click', () => {
    const signId = markCompleteButton.dataset.signId;
    if (signId) {
        userProgress[signId] = true;
        saveUserProgress();
        // Update modal status immediately
        markCompleteButton.classList.add('hidden');
        modalStatus.classList.remove('hidden');
        modalStatus.textContent = 'Lesson Completed!';
    }
});

// --- DICTIONARY LOGIC ---
const dictionarySearchInput = document.getElementById('dictionarySearch');
const dictionaryResultsDiv = document.getElementById('dictionaryResults');

function renderDictionary(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const filteredSigns = SIGNS.filter(s =>
        s.title.toLowerCase().includes(term) ||
        s.FSL.toLowerCase().includes(term) ||
        s.EN.toLowerCase().includes(term) ||
        s.desc.toLowerCase().includes(term) ||
        s.id.toLowerCase().includes(term)
    );

    dictionaryResultsDiv.innerHTML = '';

    if (filteredSigns.length === 0) {
        dictionaryResultsDiv.innerHTML = `<p class="text-red-500 col-span-2">No results found for "${searchTerm}".</p>`;
        return;
    }

    filteredSigns.slice(0, 10).forEach(sign => {
        dictionaryResultsDiv.innerHTML += `
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center space-x-4 lesson-item transition duration-150 cursor-pointer" onclick="openLessonModal('${sign.id}')">
                <img src="${sign.img_url}" alt="${sign.title}" class="w-12 h-12 object-cover rounded-md flex-shrink-0">
                <div>
                    <p class="font-semibold text-gray-800">${sign.title}</p>
                    <p class="text-xs text-gray-500">FSL: ${sign.FSL} / EN: ${sign.EN}</p>
                </div>
            </div>
        `;
    });
}

dictionarySearchInput.addEventListener('input', (e) => {
    renderDictionary(e.target.value);
});

// --- PROGRESS LOGIC ---
const alphaCompleteEl = document.getElementById('alphaComplete');
const wordCompleteEl = document.getElementById('wordComplete');
const totalCompleteEl = document.getElementById('totalComplete');
const progressListEl = document.getElementById('progressList');
const resetProgressButton = document.getElementById('resetProgressButton');

function updateUIProgress() {
    const alphaLessons = SIGNS.filter(s => s.type === 'alpha');
    const wordLessons = SIGNS.filter(s => s.type === 'word');

    const completedAlpha = alphaLessons.filter(s => userProgress[s.id]).length;
    const completedWords = wordLessons.filter(s => userProgress[s.id]).length;
    const totalLessons = SIGNS.length;
    const totalCompleted = completedAlpha + completedWords;
    const percentage = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

    alphaCompleteEl.textContent = `${completedAlpha} / ${alphaLessons.length}`;
    wordCompleteEl.textContent = `${completedWords} / ${wordLessons.length}`;
    totalCompleteEl.textContent = `${percentage}%`;

    // Detailed List
    progressListEl.innerHTML = SIGNS.map(sign => {
        const isCompleted = userProgress[sign.id];
        const icon = isCompleted ? '<i class="ph-fill ph-check-circle text-green-500 text-xl"></i>' : '<i class="ph ph-circle text-gray-400 text-xl"></i>';
        return `
            <div class="flex items-center justify-between p-2 rounded-md ${isCompleted ? 'bg-green-50' : 'bg-gray-50'}">
                <span class="font-medium text-gray-700">${icon} ${sign.title}</span>
                <span class="text-xs font-semibold ${sign.type === 'alpha' ? 'text-blue-500' : 'text-green-500'} uppercase">${sign.type}</span>
            </div>
        `;
    }).join('');
}

resetProgressButton.addEventListener('click', () => {
        // Use a custom modal replacement since alert() is forbidden
    showCustomModal('Confirmation', 'Are you sure you want to reset ALL your learning progress? This cannot be undone.', resetProgress);
});

// --- AI CHAT LOGIC (Simulation) ---
const chatInput = document.getElementById('chatInput');
const sendChatButton = document.getElementById('sendChatButton');
const chatArea = document.getElementById('chatArea');

function appendMessage(sender, text) {
    const isBot = sender === 'SIGN Bot';
    const messageClass = isBot ? 'justify-start' : 'justify-end';
    const bubbleClass = isBot ? 'bg-blue-100 text-blue-800 rounded-tl-none' : 'bg-blue-500 text-white rounded-br-none';
    const senderTag = isBot ? `<span class="font-semibold">${sender}:</span> ` : '';

    const messageHtml = `
        <div class="flex ${messageClass}">
            <div class="${bubbleClass} p-3 rounded-xl max-w-xs md:max-w-md shadow">
                ${senderTag}${text}
            </div>
        </div>
    `;
    chatArea.innerHTML += messageHtml;
    chatArea.scrollTop = chatArea.scrollHeight; // Scroll to bottom
}

function handleChat() {
    const userText = chatInput.value.trim();
    if (userText === '') return;

    appendMessage('User', userText);
    chatInput.value = '';
    sendChatButton.disabled = true;

    setTimeout(() => {
        let response = generateBotResponse(userText);
        appendMessage('SIGN Bot', response);
        sendChatButton.disabled = false;
    }, 1000); // Simulate AI thinking time
}

function generateBotResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('hello') || q.includes('kumusta')) {
        return "The sign for 'Hello' or 'Kumusta' in FSL/ASL is often a simple salute (hand to forehead, then move out). It's a great first sign!";
    } else if (q.includes('fsl') && q.includes('asl')) {
        return "FSL (Filipino Sign Language) is the national sign language of the Philippines. While its manual alphabet is often based on ASL (American Sign Language), they are distinct languages with different grammar and vocabulary.";
    } else if (q.includes('thank you') || q.includes('salamat')) {
        return "To sign 'Thank You' or 'Salamat,' touch your fingertips to your lips and move your hand forward and away from your face.";
    } else if (q.includes('lesson a')) {
        const a = SIGNS.find(s => s.id === 'A');
        return `The sign for 'A' is a closed fist with the thumb resting alongside the index finger. Remember to keep your wrist steady! Check out the 'Lessons' tab to practice it.`;
    } else if (q.includes('progress')) {
        const total = SIGNS.length;
        const completed = Object.keys(userProgress).filter(id => userProgress[id]).length;
        return `You have completed ${completed} out of ${total} lessons so far! Keep up the great work! You can view the details in the 'Progress' tab.`;
    } else {
        return "That's a great question! I am still learning, but you can find many signs in the 'Dictionary' tab. Try searching for the word you need!";
    }
}

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleChat();
    }
});
sendChatButton.addEventListener('click', handleChat);

// --- CUSTOM MODAL REPLACEMENT FOR ALERTS/CONFIRMS ---
function showCustomModal(title, message, onConfirm = null) {
    const existingModal = document.getElementById('customAlertModal');
    if (existingModal) existingModal.remove();

    const modalHtml = `
        <div id="customAlertModal" class="modal fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900 bg-opacity-75">
            <div class="bg-white rounded-xl p-6 w-full max-w-sm card shadow-2xl">
                <h3 class="text-xl font-bold text-red-600 mb-3">${title}</h3>
                <p class="text-gray-700 mb-6">${message}</p>
                <div class="flex justify-end space-x-3">
                    <button id="alertClose" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-xl transition duration-200">
                        Cancel
                    </button>
                    ${onConfirm ? `
                        <button id="alertConfirm" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
                            Confirm Reset
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modalElement = document.getElementById('customAlertModal');
    document.getElementById('alertClose').addEventListener('click', () => modalElement.remove());

    if (onConfirm) {
        document.getElementById('alertConfirm').addEventListener('click', () => {
            onConfirm();
            modalElement.remove();
        });
    }
}


// --- INITIALIZATION ---
window.onload = () => {
    renderLessonButtons(); // Initial rendering of lessons
    updateUIProgress(); // Initial UI update
    switchTab('home'); // Start on the camera view
};