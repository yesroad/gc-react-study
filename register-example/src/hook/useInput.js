import { useReducer } from 'react';
import reducer, { initialState } from '../reducer';


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

	return [state.inputs, onChange];
}

export default useInput;
