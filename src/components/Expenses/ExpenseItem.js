import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
//we can perform the basic operation in side the {} 

function ExpenseItem(props) {
    //for direct passing this const value in html tag
    // const expenseDate = new Date();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

  //the function starts with the use prefix are all the hooks of the reacts this functions only should be calls from the conmponents not from the out side of the component and not from the inside of any function

  //useState return array with 2 value first is the seted value and secound is function by using which we can set the value

  //use state register some value as state for specific component instance
  const [title , setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!!');
  //   console.log(title);
  //   console.log('clicked!!!');
  // }
 
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
  </Card>
  </li>
  );
}

export default ExpenseItem;
