import {connect} from 'react-redux';

const TimerStatus = ({tickCount, duration}) => (
  <div className="timerStatus">
    <p>Current Time: {tickCount} of {duration * 60}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    duration: state.duration,
    tickCount: state.tickCount
  }
}

const TimerStatusContainer = connect(mapStateToProps)(TimerStatus);

export {TimerStatusContainer};
