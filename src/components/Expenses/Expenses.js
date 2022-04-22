import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";


const Expenses = (props) => {
  console.log("inside from Expense : ", props);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 
              approuch 1 :
              {filteredExpenses.length === 0 && <p>No exdpense found</p>}
               we can use above expression instead of below tarnary operation in above expression if first condition is evaluated as true it will return statment written after the &&

               approuch 2 :
               {filteredExpenses.length === 0 ? (
               <p>No exdpense found</p>
               ) : (
              filteredExpenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))
        )}
         */}
         <ExpensesChart expense={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
