export function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.name]: action.value,
			};
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
