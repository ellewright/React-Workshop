"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);

        if (count === 5) {
            alert("6.");
        }
    }

    const subtract = () => {
        if (count <= 0) return;
        setCount(count - 1);

        if (count === 7) {
            alert("6.");
        }
    }

    return (
        <div className="flex justify-evenly counter">
            <div className="subtract-btn">
                <button onClick={subtract}>-</button>
            </div>
            <div className="count">
                {count}
            </div>
            <div className="add-btn">
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}