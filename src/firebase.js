// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX1LfB-fUyD_6bukyjurTzAuWUBdd3IyQ",
  authDomain: "todo-app-6aec0.firebaseapp.com",
  projectId: "todo-app-6aec0",
  storageBucket: "todo-app-6aec0.appspot.com",
  messagingSenderId: "973550565302",
  appId: "1:973550565302:web:05d9026be7b4e5088c7317",
  measurementId: "G-YX18VMJMF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// add task
async function addTodo(task, index) {
  await addDoc(collection(db, "todos"), {
    task: `${task}`,
    index: index,
    status: "active",
  });
}

// delete task
async function deleteTodo(id) {
  await deleteDoc(doc(db, "todos", `${id}`));
}

export { db, addTodo, deleteTodo };
