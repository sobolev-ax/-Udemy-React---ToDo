import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <main>
        <h1>Stay at home</h1>

        <input type="text" placeholder="search" />

        <ul>
            <li>Do exercises</li>
            <li>Drink coffee</li>
        </ul>
    </main>
);

ReactDOM.render(el, document.getElementById('root'));
