import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import firebase from './firebase';

const SignInWithGoogle =  () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn =  () => (
  <main>
    <button onClick={SignInWithGoogle}>Sign In With Google</button>
  </main>
);

const SignOut =  () => auth.signOut();

function App() {
  const [user] = useAuthState(auth);
  return user ? (
    <div className="main-component">

    <div className="todo-app">
    
    <TodoList></TodoList>
    </div>
    <button onClick={SignOut}>Sign Out</button>
    </div>
  ): <SignIn/>;
}

export default App;
