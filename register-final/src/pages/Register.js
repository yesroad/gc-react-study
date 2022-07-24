import { useReducer, useEffect } from 'react';
import InputReducer, { initialState } from '../reducer/InputReducer';

function Register() {
	const [state] = useReducer(InputReducer, initialState);
	useEffect(() => {
		console.log(state);
	}, [state]);
	return (
		<>
			<h3>회원가입</h3>
		</>
	);
}

export default Register;
