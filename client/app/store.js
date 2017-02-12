import {reducer} from './reducer.js';

const initialState = {
  duration: 1,     //Duration of the timer in minutes
  tickCount: 0,     //Number of one second ticks that have elapsed in the currently running timer
  intervalID: undefined,  //ID of the running interval, used to cancel the interval
};

let store = Redux.createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};
