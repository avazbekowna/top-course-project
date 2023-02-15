import { initializeApp } from "firebase/app";import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCaA7delPOX5hJgx0PwA2eaMDJFzton-Oc",    authDomain: "meta-team-1.firebaseapp.com",
    projectId: "meta-team-1",    storageBucket: "meta-team-1.appspot.com",
    messagingSenderId: "803327313583",    appId: "1:803327313583:web:dde3fd908aa6968ff2365a"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);