import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random() * 1000 + 1);

const user = {
    name: "Everyman",
    luckyNum: luckyNumber()
};

const greeting = (userObj) => (
    <div className="container">
        <h1>Hello, {userObj.name}</h1>
        <h2 className="text-muted">Your lucky number is {userObj.luckyNum}</h2>
    </div>
);



ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
