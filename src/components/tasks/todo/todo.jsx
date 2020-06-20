import React from 'react';
import Header from './todocomponents/header';
import Form from './todocomponents/form';
import List from './todocomponents/list';
const Todo = () =>{
    return(
        <div className='row text-center'>
            <Header />
            <Form />
            <List />
        </div>
    )
}



export default Todo;