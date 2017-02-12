import {connect} from 'react-redux';
import {incrementTickCount, startTimers, resetTimers} from './actions.js';

const TimerControls = ({duration, tickCount, intervalID, startTimers, resetTimers, handleTick}) => (
  <div className="timerControls">
    <span className="button" onClick={() => startTimers(duration, tickCount, intervalID)}>Start Timers</span>
  </div>
);

//***** Refactoring to use a continuously running interval rather than chaining timers *****
function handleStartTimers(duration, tickCount, intervalID, dispatch) {
  //If the timer was not already running,
  //then start the timer
  let newIntervalID;
  if(!intervalID) {
    newIntervalID = window.setInterval(function () {return handleTick(duration, tickCount, intervalID, dispatch)}, 1000);
    return dispatch(startTimers(newIntervalID));
  }
}

function handleResetTimers(intervalID, dispatch) {
  window.clearInterval(intervalID);  //Stop the timmer
  return dispatch(resetTimers());
}

// function handleTick() {
function handleTick(duration, tickCount, intervalID, dispatch) {
  if (tickCount === duration * 60){
    console.log('Timer has finished');        //Notify the user that the current timer is finished
    return resetTimers();
  } else {
    return dispatch(incrementTickCount());
  }
}

const mapStateToProps = (state) => {
  return {
    duration: state.duration,
    tickCount: state.tickCount,
    intervalID: state.intervalID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimers: (duration, tickCount, intervalID) => handleStartTimers(duration, tickCount, intervalID, dispatch),
    resetTimers: (index, tickCount, intervalID) => handleResetTimers(intervalID, dispatch),
    handleTick: (duration, tickCount, intervalID) => handleTick(duration, tickCount, intervalID, dispatch)
  }
}

const TimerControlsContainer = connect(mapStateToProps, mapDispatchToProps)(TimerControls);

export {TimerControlsContainer};
