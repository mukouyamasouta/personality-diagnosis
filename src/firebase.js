// Firebase設定ファイル
// ※ 以下のfirebaseConfigの値をFirebase Consoleから取得した値に置き換えてください
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtToNXqsVnCntB7ThzHZAP-tKM2GxBiRw",
  authDomain: "shikiramafrom-e1ebf.firebaseapp.com",
  projectId: "shikiramafrom-e1ebf",
  storageBucket: "shikiramafrom-e1ebf.firebasestorage.app",
  messagingSenderId: "1048820424467",
  appId: "1:1048820424467:web:ef7423632e6fae3e1884e6",
  measurementId: "G-Z5N52JBPG9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
