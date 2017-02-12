import {connect} from 'react-redux';

const Timer = ({duration}) => (
  <div className="timer">
    <span>Duration: {duration} minutes</span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    duration: state.duration
  };
};

const TimerContainer = connect(mapStateToProps)(Timer);

export {TimerContainer};