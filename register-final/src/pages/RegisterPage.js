import { useReducer, useEffect } from 'react';
import { Register } from '../components/domain';
import InputReducer, { initialState } from '../reducer/InputReducer';

function RegisterPage() {
	const [state] = useReducer(InputReducer, initialState);
	useEffect(() => {
		console.log(state);
	}, [state]);
	return (
		<>
			<Register />
		</>
	);
}

export default RegisterPage;
