import { useReducer } from 'react';

const initialState = {
	id: '',
	password: '',
	phone: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.name]: action.value,
			};
		default:
			return state;
	}
}

function useTodo() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = (e) => {
		const { name, value } = e.target;
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value,
		});
	};

	return [state, onChange];
}

export default useTodo;
