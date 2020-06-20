import React from 'react';


const Screen =(props) =>{
    return(
        <div className='col-lg-12'>
                <h1>Calculator</h1>
                <div id='history'>{props.history}</div>
                <div id='display'>{props.display}</div>
        </div>
    )
}

export default Screen;