import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input)); // eval is used here for simplicity; avoid using in production
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <div className="button-container">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
                    <Button key={value} value={value} onClick={() => handleClick(value)} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
