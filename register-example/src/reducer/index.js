export const initialState = {
	inputs: {
		id: '',
		password: '',
		phone: '',
	},
	timer: {
		count: 0,
		min: 3,
		sec: '00',
	},
	visible: false,
	certified: false,
}

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				}
			};
		case 'CHANGE_TIMER':
			return {
				...state,
				timer: {
					...state.timer,
					count: action.count,
					min: action.min,
					sec: action.sec,
				}
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

export default reducer;
