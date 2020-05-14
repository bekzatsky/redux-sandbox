import {createStore, bindActionCreators} from "redux";

import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const {inc, rnd, dec} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
});

document.getElementById('dec').addEventListener('click', dec);

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);


