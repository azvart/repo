import React from 'react'
import Footer from './components/todos/footer';
import AddTodo from './containers/addtodo';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <div className='container-fluid text-center'>
      <div className='row'>
      <div className='col-lg-12 my-3'>
    <AddTodo />
    <VisibleTodoList />
    </div>
    <div className='col-lg-12 my-3'>
    <Footer />
    </div>
    </div>
  </div>
)

export default App