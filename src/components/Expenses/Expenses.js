import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const chExpenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
        // let newExpenses = props.items.filter((xpense) => xpense.date == selectedYear);
        
    }
    // 
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChExpenseFilter={chExpenseFilterHandler} />
                {props.items.map((xpense) => (
                    <ExpenseItem key={xpense.id} title={xpense.title} amount={xpense.amount} date={xpense.date} />
                ))}
            </Card>
        </div>
        
    )
}

export default Expenses;