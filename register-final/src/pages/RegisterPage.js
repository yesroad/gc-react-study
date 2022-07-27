import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../components/domain';
import { AuthContext } from '../contexts/AuthProvider';

function RegisterPage() {
	const navigater = useNavigate();
	const { state } = AuthContext();

	useEffect(() => {
		if(!state.terms.termsService || !state.terms.termsPrivacy) {
			return navigater('/')
		}
	}, [navigater, state])
	
	return (
		<>
			<Register />
		</>
	);
}

export default RegisterPage;
