import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    // const [titl, setTitl] = useState("");
    // const [amt, setAmt] = useState("");
    // const [dat, setDat] = useState("");
    const [allVars, setAllVars] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleHandler = (evy) => {
        setAllVars((prevState) => { return {...prevState, title: evy.target.value}});
    };
    const amountHandler = (evy) => {
        setAllVars({...allVars, amount: evy.target.value});
    };
    const dateHandler = (evy) => {
        setAllVars({...allVars, date: evy.target.value});
    };
    const submitHandler = (evy) => {
        evy.preventDefault();
        const expenseData ={
            title: allVars.title,
            amount: allVars.amount,
            date: new Date(allVars.date),
        };
        console.log("This is from ExpenseForm component:", expenseData);
        props.onSaveExpenseData(expenseData);
        setAllVars({
            title: "",
            amount: "",
            date: "",
        });
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={allVars.title} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={allVars.amount} min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={allVars.date} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense maadi</button>
                </div>
            </form>
            <h4>{allVars.title} - {allVars.date} - {allVars.amount}</h4>
        </div>
    )
};

export default ExpenseForm;