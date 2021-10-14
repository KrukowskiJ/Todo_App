import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ProgressBar from './ProgressBar'
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
function TodoList() {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const dataRef = firestore.collection(`users/${auth.currentUser.uid}/data`);
  const [completed, setCompleted] = useState(0);
  const [todos] = useCollectionData(todosRef, {idField:"id"});
  const [data] = useCollectionData(dataRef);
  const removeTodo = id => {
    todosRef.doc(id).delete();
  };

  const completeTodo = id => {
    todos.map(todo => {
      if (todo.id === id) {
        {console.log("2",todos ? todos:null )} 
        todosRef.doc(todo.id).set({complete: !todo.complete}, {merge: true});
        setCompleted(todo.complete ? completed+1 : completed-1);
        if(dataRef) dataRef.set({
          currentCompleted: completed,
        });
      }
    });
  };

  return (
    <>
     {console.log("1",todos ? todos:null )} 
      <h1>What's the plan for Today?</h1>
      <TodoForm />
      {console.log("before",todos ? todos:null )}
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
       {console.log("after",todos ? todos:null )}
      {console.log(todos ? todos.length:null,todos ? completed:null )}
    <ProgressBar progress={Math.round(todos ? (todos.length*10000/100) : 0)}/> 
   </>
  );
}

export default TodoList;