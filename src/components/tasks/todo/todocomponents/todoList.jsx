import React from 'react';
import ToItem from './toitem';
const List =(props) =>{

    let list =   props.items.map(item=>(
        <ToItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={props.onItemCompleted} onDeleteItem={props.onDeleteItem}/>
    ));
    return(
        <div className='col-lg-12'>
               <ul className='list-group'>
                    {
                      list
                    }
               </ul>
        </div>
    )
}


export default List;