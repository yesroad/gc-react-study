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
		case 'CHANGE_VISIBLE':
			return {
				...state,
				visible: action,
			};
		case 'CHANGE_CERTIFIED':
			return {
				...state,
				certified: action,
			};
		default:
			return state;
	}
}
