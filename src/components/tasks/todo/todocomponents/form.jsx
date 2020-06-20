import React from 'react';

const Form =() =>{
    return(
        
                <div className='form-group col-lg-12'>
                    <label htmlFor="todo">Add Todo</label>
                    <input type="text" className='form-control'/>
                    <button className="btn btn-primary my-2">+</button>
                </div>
        
    )
}



export default Form;