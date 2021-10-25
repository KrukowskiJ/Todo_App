import "../style/progress_bar.scss"
import React, { useState } from 'react';
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
function ProgressBar(props){
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef,  {idField:"id"});
  let counter = 0;
  let progress = 0;
  function setTaskCounter(){
    if(todos)
    todos.map(todo => {
      if(todo.complete)
        counter++;
    })
    progress = todos ? Math.round(counter/todos.length*10000/100) : 0;

  };
      return (
       
        <div className="container">
           {setTaskCounter()}
          <h1>Your progress bar!</h1>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progress}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress">{todos && progress ? progress : 0} %</span>
          </div>
        </div>
      )
  }
  
  export default ProgressBar;
  