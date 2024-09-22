import { useState } from 'react';
import './App.css';
import InputContainer from './Components/InputContainer';
import TodoContainer from './Components/TodoContainer';

function App() {

  const [inputVal, setInputVal] = useState('');

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    // console.log(e.target.value)
    setInputVal(e.target.value)
  }

  function addTodo() {
    if (inputVal != '') {
      setTodos(prevTodos => [...prevTodos, inputVal]);
      // setTodos("Prayash")
      setInputVal('');
      console.log(inputVal);

    }
    // console.log("hello");
  }
  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex;
    }));
  }
  return (
    <main>
      <div className='TodolistDiv'>
        <h1>To Do List </h1>

        <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
        <TodoContainer todos={todos} delTodo = {delTodo} />
      </div>



    </main>

  );
}

export default App;

// Prayash sisodiya
