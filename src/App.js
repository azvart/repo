import React from 'react';
import Todo from './components/tasks/todo/todo';
import Calculator from './components/tasks/calculator/calculator';

function App() {
  return (
    <div className="App container-fluid">
        <Todo />
        <Calculator />
    </div>
  );
}

export default App;
