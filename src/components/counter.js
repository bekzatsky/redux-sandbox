import React from "react";
import {bindActionCreators} from "redux";
import "../counter.css";
import {connect} from "react-redux";
import * as actions from "../actions";

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

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => {
    const {inc, rnd, dec} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            rnd(randomValue);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);