import React,{useState} from 'react';
import Screen from './calccomponents/screen';
import Buttons from './calccomponents/buttons';

const Calculator =() =>{
    const[count, setCount] = useState(
        {
            prevKeyType: 'NULL',
            decimal: false,
            history: '0',
            display: '0',
            result: 0,
        }
    );

    const allClear = () =>{
        setCount({
            prevKeyType: 'NULL',
            decimal: false,
            history: '0',
            display: '0',
            result: 0,
        });
    }

    const evalResult = () =>{
        const calculation = Math.round(10000 * eval(count.history)) / 10000;
        setCount({
            prevKeyType: 'COMPUTE',
            display: calculation,
            history: count.history + '=' + calculation,
            decimal: false,
            result: calculation
        });
    }
    
    const operatorClicked=(operator)=>{
        const previousKeyType = count.prevKeyType;
        setCount({
            prevKeyType: 'OPERATOR',
            display: operator,
            history: previousKeyType === 'OPERATOR' ? count.history.substring(0,count.history.length -1) + operator: previousKeyType === 'COMPUTE' ? count.result + operator: count.history + operator,
            decimal: false
        });
    } 

    const operandClicked=(operand)=>{
        const previousKeyType = count.prevKeyType;
        
        if(count.history.length > 0 && count.display.length >=10){
            setCount({
                prevKeyType: 'NULL',
                decimal: false,
                result: 0,
                display: 'Out of Memory',
                history: count.history
            })
            return;
        }
        
        switch(previousKeyType){
            case 'NULL':
            case 'COMPUTE':
            case 'OPERATOR':
            setCount({
                prevKeyType: 'OPERAND',
                display: operand,
                history:previousKeyType === 'OPERATOR' ? count.history + operand: operand
            });
            break;
            case 'OPERAND':
            if(operand === '.' && count.decimal){
                break;
            }
            if(operand === '0' && count.display === '0'){
                break;
            }
            setCount({
                prevKeyType:'OPERAND',
                display: count.display === '0' ? operand: count.display + operand,
                history: count.history === '0' ? operand: count.history + operand
            });
            if(operand === '.'){
                setCount({decimal:true});
            }
            break;
            default:
            break;
        }
    }

    const handleClick =(e) =>{
        const curKeyVal = e.currentTarget.value;
        const prevKeyType = count.prevKeyType;


       
        switch(curKeyVal){
            case 'AC':
            allClear();
            break;
            case '=':
            evalResult();
            break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            operandClicked(curKeyVal);
            break;
            case '+': 
            case '-': 
            case '*': 
            case '/':
            operatorClicked(curKeyVal);
            break;
            default:
            break;
        }
    }

    const historyLen = count.history.lenght;
    const historyStr = count.history.substring(historyLen - 14, historyLen);
    return(
        <div className='row text-center'>
            <Screen history ={historyStr} display = {count.display} />
            <Buttons handleClick = {handleClick} history ={historyStr} display = {count.display}/>
        </div>
    )
}


export default Calculator;