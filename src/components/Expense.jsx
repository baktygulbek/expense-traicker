import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
    return (
        <div>
     <ExpenseItem
        title={props.date[0].title}
        price={props.date[0].price}
        date={props.date[0].date}
      />
      <ExpenseItem
        title={props.date[1].title}
        price={props.date[1].price}
        date={props.date[1].date}
      />
      <ExpenseItem
        title={props.date[2].title}
        price={props.date[2].price}
        date={props.date[2].date}
      />
      <ExpenseItem
        title={props.date[3].title}
        price={props.date[3].price}
        date={props.date[3].date}
      />
        </div>
    );
};

export default Expense;