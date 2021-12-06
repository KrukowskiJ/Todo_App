import React from 'react';
import './style/App.scss';
import TodoList from './components/TodoList';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth } from "./firebase";
import firebase from './firebase';
import { AiOutlineFacebook, AiOutlineGoogle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { IoPerson } from 'react-icons/io5';



const SignInWithGoogle =  () => auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
.then((result) => {
  console.log(result.user._delegate.displayName);
  console.log(result.user._delegate.email);
}).catch((error) => {
  console.log(error);
});
const SignInWithFB =  () => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

const SignIn =  () => (
  <>
  <div className="loginbox">
          <div className="loginbt" onClick={SignInWithGoogle}>Sign In With Google
          <IconContext.Provider value={{ size:"3em" }}>
          < AiOutlineGoogle/>
            </IconContext.Provider></div>
    <div className="loginbt" onClick={SignInWithFB}>Sign In With Facebook
        <IconContext.Provider value={{ size:"3em" }}>
            <AiOutlineFacebook/>
            </IconContext.Provider>
    </div>
    </div>
 </>
);

const SignOut =  () => auth.signOut();

function App() {
  const [user] = useAuthState(auth);
  return user ? (<>
    <div className="main-component">
    <div className="user-info">
        <IconContext.Provider value={{ size:"1.4em" }}>
              < IoPerson/>
                </IconContext.Provider><div className="user-info column"><p>{user._delegate.displayName}</p><p style={{ fontSize:"0.6em" }}>{user._delegate.email}</p></div>
    </div>
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
