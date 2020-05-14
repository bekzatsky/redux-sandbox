import {createStore} from "redux";

import reducer from "./reducer";
import {inc, rnd, dec} from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const incDispatch = () => dispatch(inc());
const rndDispatch = (payload) => dispatch(rnd(payload));
const decDispatch = () => dispatch(dec());

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rndDispatch(payload);
});

document.getElementById('dec').addEventListener('click', decDispatch);

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);


