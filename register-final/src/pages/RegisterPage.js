import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../components/domain';
import { AuthContext } from '../contexts/AuthProvider';

function RegisterPage() {
	const navigater = useNavigate();
	const { state } = AuthContext();

	useEffect(() => {
		if(!state.terms.termsService || !state.terms.termsPrivacy) {
			alert('약관동의부터 하고오세요.')
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
