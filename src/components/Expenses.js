"use client";

import { useState } from "react";
export default function AddExpenseForm() {

    function onSubmit() {
        console.log("Submitting form...");
    }

    return (
        <div className="add-expense-form">
            <div className="expense-name-container">
                <label htmlFor="expense-name">Expense: </label>
                <input type="text" className="expense-name" id="expense-name" placeholder="Groceries" />
            </div>
            <div className="expense-amount-container">
                <label htmlFor="expense-amount">Amount: </label>
                <input type="number" className="expense-amount" id="expense-amount" placeholder="100.00" />
            </div>
            <div className="submit-button-container">
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add</button>
            </div>
        </div>
    );
}

export function ExpenseList() {
    return (
        <div className="expense-list-container">
            <ul className="expense-list">
            </ul>
        </div>
    );
}