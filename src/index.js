import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'RND':
            return state + action.payload;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

//Action creators
const inc = () => {
    return {type: 'INC'};
};

const rnd = (payload) => {
    return {type: 'RND', payload};
};

const dec = () => {
    return {type: 'DEC'};
};
//===================

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(rnd(payload));
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);


