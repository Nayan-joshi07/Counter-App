import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    function handleButtonClick() {
        setCount(count + 1);
    }

    return (
        <div className="container-body">
            <div class="form-header">
                <h4 class="title">Counter App</h4>
            </div>
            <h1 class="title-text">{count}</h1>
            <button class="proceed-btn" onClick={function () { setCount(count + 1) }}>Increment</button>
            <button class="proceed-btn" onClick={function () { setCount(count - 1) }} disabled={count === 0}>Decrement</button>
            <button class="proceed-btn" onClick={function () { setCount(0) }} disabled={count === 0}>Reset</button>
        </div>
    );
}

export default App;