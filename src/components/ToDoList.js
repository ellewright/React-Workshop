"use client";

import { useState } from "react";
export default function ToDo() {

    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() === "") return;
        const updatedToDoList = [...toDoList, newTask];
        setToDoList(updatedToDoList);
        setNewTask("");
    }

    return (
        <div className="to-do-container">
            <div className="new-task-container">
                <div className="new-task-input">
                    <input type="text" className="input-field" onChange={handleChange} value={newTask} />
                </div>
                <div className="submit-button">
                    <button type="submit" className="btn btn-primary" onClick={addTask}>Add</button>
                </div>
            </div>
            <div className="to-do-list">
                <ul>
                    {toDoList.map((task, i) => {
                        return <li key={i}>{task}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}