import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Set Firestore log level to debug
setLogLevel('Debug');

const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-signconnect-app';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let app;
let db;
let auth;
let userId = null;

// Expose to global scope for use in the main script block
window.firebase_init = async () => {
    if (!Object.keys(firebaseConfig).length) {
        console.error("Firebase configuration is missing. Cannot initialize Firestore.");
        if(document.getElementById('progressStatus')) {
            document.getElementById('progressStatus').textContent = 'Progress: Offline Mode (No Firebase Config)';
        }
        return;
    }
    try {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);

        // Authentication
        if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
        } else {
            await signInAnonymously(auth);
        }

        // Auth State Change Listener
        onAuthStateChanged(auth, (user) => {
            if (user) {
                userId = user.uid;
                console.log("Firebase Auth Successful. User ID:", userId);
                window.db = db; // Expose db globally
                window.userId = userId; // Expose userId globally
                window.appId = appId; // Expose appId globally
                
                // Expose Firestore utils for the main script
                window.firestoreUtils = { doc, setDoc, onSnapshot };

                if (typeof window.loadUserProgress === 'function') {
                    window.loadUserProgress(); // Load progress once authenticated
                }
                document.getElementById('progressStatus').textContent = `Progress: Online (${userId.substring(0, 8)}...)`;
                document.getElementById('userIdDisplay').textContent = `User ID: ${userId}`;
            } else {
                console.log("No user signed in.");
                document.getElementById('progressStatus').textContent = 'Progress: Offline Mode';
            }
        });
    } catch (error) {
        console.error("Firebase initialization or sign-in failed:", error);
        document.getElementById('progressStatus').textContent = 'Progress: Initialization Failed';
    }
};

window.firebase_init();