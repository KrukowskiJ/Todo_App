import React, { useState, useEffect, useRef } from 'react';
import firebase from "../firebase"
import {firestore, auth } from "../firebase"
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      return;
    }
      todosRef.add({
        text: input,
        complete: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput('');
  };
  
  const handleEdit = e => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      return;
    }
      todosRef.doc(props.edit.id).delete();
      todosRef.add({
        text: input,
        complete: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    
    props.onSubmit({
      edit:false
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleEdit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;