import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /** Method 1 -- state slices; used more on React projects **/
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /** Method 2 -- one state */
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  // const titleChangeHandler = (event) => {
  //     /* When you update your state and rely on a previous state,
  //        this is not a good way to handle updating the state.
  //        React schedules state updates, not instantaneous.
  //     setUserInput({
  //         ...userInput,
  //         enteredTitle: event.target.value
  //     })
  //     */

  //     /* React will guarantee that it uses the latest state
  //        snapshot before updating it */
  //     /*setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             eneteredTitle: event.target.value
  //         };
  //     });*/
  // };

  // const amountChangeHandler = (event) => {
  //     /*setUserInput({
  //         ...userInput,
  //         enteredAmount: event.target.value
  //     })
  //     */
  //    setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             enteredAmount: event.target.value
  //         };
  //    });
  // };

  // const dateChangeHandler = (event) => {
  //     /*setUserInput({
  //         ...userInput,
  //         enteredDate: event.target.value
  //     })*/

  //     setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             enteredDate: event.target.value
  //         };
  //    });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;