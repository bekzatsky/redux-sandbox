import React from "react";
import "./counter.css";

const Counter = ({counter, inc, rnd, dec}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                className="btn btn-danger btn-lg"
                onClick={dec}>
                DEC
            </button>
            <button
                className="btn btn-warning btn-lg"
                onClick={rnd}>
                RND
            </button>
            <button
                className="btn btn-primary btn-lg"
                onClick={inc}>
                INC
            </button>
        </div>
    );
};

export default Counter;