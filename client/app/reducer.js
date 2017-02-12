function reducer(state = initialState, action) {
  switch(action.type) {
    case 'incrementTickCount':
      return incrementTickCount(state);
    case 'startTimers':
      return startTimers(state, action.intervalID);
    case 'resetTimers':
      return resetTimers(state);
    default:
      return state;
  }
}

function incrementTickCount(state) {
  return Object.assign({}, state, {
    tickCount: state.tickCount + 1,
  });
}

function startTimers(state, intervalID) {
  return Object.assign({}, state, {
    intervalID: intervalID,
  });
}

function resetTimers(state) {
  return Object.assign({}, state, {
    tickCount: 0,
    intervalID: undefined,
  });
}

export {reducer};
