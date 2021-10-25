import React from 'react';
import './style/App.scss';
import TodoList from './components/TodoList';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import firebase from './firebase';

const SignInWithGoogle =  () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn =  () => (
  <div class="loginbox">
    <div class="loginbt" onClick={SignInWithGoogle}>Sign In With Google</div>
  </div>
);

const SignOut =  () => auth.signOut();

function App() {
  const [user] = useAuthState(auth);
  return user ? (<>
    <div className="main-component">

    <div className="todo-app">
    
    <TodoList></TodoList>
    </div>
    </div>
    <div class="logoutbox">
    <div class="logoutbt" onClick={SignOut}>Sign Out</div>
    </div></>
  ): <SignIn/>;
}

export default App;
