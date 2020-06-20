import React from 'react';


const Buttons =(props) =>{

    return(
        

        <div className='col-lg-12'>
            <div id='buttons'>
        <button id="clear" value='AC' onClick={props.handleClick}>AC</button>
        <button id="divide" value='/' onClick={props.handleClick}>/</button>
        <button id="multiply" value='*' onClick={props.handleClick}>x</button>
        <button id="subtract" value='-' onClick={props.handleClick}>-</button>
        <button id="nine" value='9' onClick={props.handleClick}>9</button>
        <button id="eight" value='8' onClick={props.handleClick}>8</button>
        <button id="seven" value='7' onClick={props.handleClick}>7</button>
        <button id="add" value='+' onClick={props.handleClick}>+</button>
        
        <button id="four" value='4' onClick={props.handleClick}>4</button>
        <button id="five" value='5' onClick={props.handleClick}>5</button>
        <button id="six" value='6' onClick={props.handleClick}>6</button>
        <button id="decimal" value='.' onClick={props.handleClick}>.</button>
        
        <button id="three" value='3' onClick={props.handleClick}>3</button>
        <button id="two" value='2' onClick={props.handleClick}>2</button>
        <button id="1" value='1' onClick={props.handleClick}>1</button>
        <button id="zero" value='0' onClick={props.handleClick}>0</button>
        <button id="equals" value='=' onClick={props.handleClick}>=</button>        
            </div>
        </div>
        
    )
}

export default Buttons;