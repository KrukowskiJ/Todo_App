import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ProgressBar from './ProgressBar'
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
function TodoList() {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, {idField:"id"});

  const removeTodo = id => {
    todosRef.doc(id).delete();
  };

  const completeTodo = id => {
    todos.map(todo => {
      if (todo.id === id) { 
        todosRef.doc(todo.id).set({complete: !todo.complete}, {merge: true});
      }
    })
  };

  return (
    <>
      <h1>What's the plan for Today?</h1>
      <TodoForm />
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    <ProgressBar /> 
   </>
  );
}

export default TodoList;