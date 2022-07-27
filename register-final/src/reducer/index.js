
function TimerReducer(state, action) {
	switch (action.type) {
		case 'CHANGE_TIMER':
			return {
				...state,
				count: action.count,
				min: action.min,
				sec: action.sec,
			};
		default:
			return state;
	}
}

export default TimerReducer;
