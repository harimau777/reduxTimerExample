//***** Timer actions *****
const incrementTickCount = () => {return {type: 'incrementTickCount'}};
const startTimers = (intervalID) => {return {type: 'startTimers', intervalID: intervalID}};
const resetTimers = () => {return {type: 'resetTimers'}};

export {incrementTickCount, startTimers, resetTimers};
