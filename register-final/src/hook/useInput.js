import { useReducer } from 'react';
import reducer, { initialState } from '../reducer/InputReducer';

function useInput() {
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

export default useInput;
