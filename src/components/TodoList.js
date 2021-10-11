import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ProgressBar from './ProgressBar'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [completed, setCompleted] = useState(0);


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
   
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    setCounter(counter+1)
    console.log(counter);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    console.log("update!!!!!")
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    
  };

  const removeTodo = id => {
    const removedItem = [...todos].find(todo => todo.id == id);
    console.log("status" + removedItem.isComplete)
    const removedArr = [...todos].filter(todo => todo.id !== id);
    console.log("remove!!!!!")
    if(removedItem.isComplete)
    setCompleted(completed-1);

    setTodos(removedArr);
    setCounter(counter-1);
    console.log(counter,completed);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        todo.isComplete ? 
        setCompleted(completed+1) : 
        setCompleted(completed-1);
        console.log("complete!!!!!")
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(counter,completed);
  };

  return (
    <>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    <ProgressBar progress={Math.round(completed/counter*100*100)/100}/> 
    
   </>
  );
}

export default TodoList;