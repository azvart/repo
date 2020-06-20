import React from 'react';

const ToItem =(props)=>{
    return(
        <li className='list-item-group'>
                <input type="checkbox" className='form-check-input' onChange={props.onItemCompleted}/>
                {props.text}
                <button className='btn btn-danger btn-sm' onCLick={props.onDeleteItem}>x</button>
        </li>
    )
}


export default ToItem;