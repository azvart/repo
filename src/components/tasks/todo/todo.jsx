import React, {useState} from 'react';
import List from './todocomponents/todoList';
const Todo = () =>{
    const[value, setValue] = useState({
        items:[],
        text:''
    });
//https://codepen.io/iamjoshellis/pen/zBjEpL
    const handleAddItem =(event) =>{
        event.preventDefault();

        const newItem ={
            id: Date.now(),
            text: value.text,
            done:false
        }
        setValue((prevState)=>({
            items:prevState.items.concat(newItem),
            text:''
        }));
    }
    const handleTextChange = (event)=>{
      setValue({
          text: event.currentTarget.value
      });
    }
    const markItemCompleted=(itemId)=>{
        const updateItems = value.items.map(item => {
            if(itemId === item.id){
                item.done = !item.done;
            }
            return item;
        });
        setValue({
            items: [].concat(updateItems)
        });
    }

    const handleDeleteItem=(itemId)=>{
        const updateItems = value.items.filter(item => {
            return item.id != itemId;
        });
        setValue({
            items: [].concat(updateItems)
        });
    }

    return(
        <div className='row text-center'>
            <div className='container-fluid'>
                <h3>ToDo List</h3>
                <List items ={value.items} onItemCompleted={markItemCompleted} onDeletedItem ={handleDeleteItem} />
                    <form className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" onChange={handleTextChange} value={value.text} />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary" onClick={handleAddItem} disabled={!value.text}>Add</button>
                         </div>
                    </form>
            </div>
        </div>
    )
}



export default Todo;