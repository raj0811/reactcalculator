import React, { useState } from 'react';

import styles from './app.module.css'

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (event) => {
    const buttonName = event.target.name;

    if (buttonName === 'AC') {
      // Clear the input
      setInput('');
    } else if (buttonName === '=') {
      console.log('=');
      // Evaluate the expression and update the input with the result
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        // Handle invalid expressions
        setInput('Error');
      }
    }else if (buttonName === 'back') {
      // Remove the last character from the input
      setInput((prevInput) => prevInput.slice(0, -1));
    }else if (buttonName === 'change') {
      // change 
      const result = input * -1
        setInput(result.toString());
    } else {
      // Append the clicked button's name to the input
      setInput((prevInput) => prevInput + buttonName);
    }
  };
  
  return (
    <div className="App">
      <div className={styles.main}>
        <div className={styles.calbody}>
          <div className={styles.input}>
            <input type='text' value={input} readOnly />
          </div>
          <div className={styles.buttons}>
          <button className={styles.actions} name="AC" onClick={handleButtonClick}>
              AC
            </button>
            <button name="/" className={styles.actions} onClick={handleButtonClick}>
              /
            </button>
            <button name="%"  className={styles.actions} onClick={handleButtonClick}>
              %
            </button>
            <button name="back" className={styles.actions} onClick={handleButtonClick}>
             back
            </button>
            <button name="1" className={styles.nums} onClick={handleButtonClick}>
              1
            </button>
            <button name="2" className={styles.nums}  onClick={handleButtonClick}>
              2
            </button>
            <button name="3" className={styles.nums}  onClick={handleButtonClick}>
              3
            </button>
            <button name="+"   className={styles.actions} onClick={handleButtonClick}>
              +
            </button>
            <button name="4" className={styles.nums}  onClick={handleButtonClick}>
              4
            </button>
            <button name="5" className={styles.nums}  onClick={handleButtonClick}>
              5
            </button>
            <button name="6" className={styles.nums}  onClick={handleButtonClick}>
              6
            </button>
            <button name="-" className={styles.actions} onClick={handleButtonClick}>
              -
            </button>
            <button name="7" className={styles.nums}  onClick={handleButtonClick}>
              7
            </button>
            <button name="8" className={styles.nums}  onClick={handleButtonClick}>
              8
            </button>
            <button name="9" className={styles.nums}  onClick={handleButtonClick}>
              9
            </button>
            <button name="+" className={styles.actions} onClick={handleButtonClick}>
              *
            </button>
            <button name="change" className={styles.actions} onClick={handleButtonClick}>
              +/-
            </button>
            <button name="0" className={styles.nums}  onClick={handleButtonClick}>
              0
            </button>
            <button name="." className={styles.nums}  onClick={handleButtonClick}>
              .
            </button>
            <button name='=' className={styles.actions}  onClick={handleButtonClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
