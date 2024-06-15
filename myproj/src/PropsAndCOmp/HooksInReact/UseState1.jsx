import React, { useState } from "react";

function UseState() {
    const [count, changecount] = useState(0);

    const increment = () => {
        changecount((prevcount) => prevcount + 2);  // Increment count by 2
    };

    const decrement = () => {
        changecount(count - 1);
    };

    const resetfun = () => {
        changecount(0);
    };

    return (
        <div>
            <div className="main">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <br />
            <button onClick={resetfun}>Reset</button>
        </div>
    );
}

export default UseState;
