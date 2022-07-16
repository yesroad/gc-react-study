import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hook/useInput';
import Timer from '../Timer';

function Form({ isRegister }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isCertified, setIsCertified] = useState(false);
	const [state, onChange] = useInput();

	const navigate = useNavigate();

	// 인증번호
	const random = useRef(Math.floor(Math.random() * 89999) + 10000);

	// 인증번호 인풋 활성화
	const onVisible = () => {
		setIsVisible(!isVisible);
		alert(`인증번호 : ${random.current}`);
	};

	// 인증번호 확인
	const onCertified = (e) => {
		e.preventDefault();
		if (Number(state.phone) !== random.current) {
			return alert('인증번호를 다시 확인하여주세요.');
		}

		setIsCertified(!isCertified);
		return alert('인증되었습니다.');
	};

	// 회원가입
	const onRegister = (e) => {
		e.preventDefault();

		if (!isCertified) {
			return alert('인증을 완료하세요.');
		}

		localStorage.setItem('auth', JSON.stringify(state));

		alert('회원가입이 완료되었습니다.');
		return navigate('/login');
	};

	// 로그인
	const onLogin = (e) => {
		e.preventDefault();
		const data = JSON.parse(localStorage.getItem('auth'));

		if (data.id !== state.id) {
			return alert('아이디를 확인하세요');
		}

		if (data.password !== state.password) {
			return alert('비밀번호를 확인하세요.');
		}
		alert('로그인이 완료되었습니다.');
		localStorage.setItem('isLogin', true);
		return navigate('/');
	};

	const onSetVisible = (count) => {
		if (count <= 0) {
			setIsVisible(false);
		}
	};

	return (
		<form onSubmit={isRegister ? onRegister : onLogin}>
			<Input title='아이디' name='id' value={state.id} onChange={onChange} />
			<Input
				title='비밀번호'
				type='password'
				name='password'
				value={state.password}
				onChange={onChange}
			/>
			{isRegister &&
				(isVisible ? (
					isCertified ? (
						<strong>인증완료</strong>
					) : (
						<>
							<Input
								title='인증번호 입력'
								name='phone'
								value={state.phone}
								onChange={onChange}
							/>
							<Button text='인증번호 확인' onClick={onCertified} />
							<Timer onSetVisible={onSetVisible} />
						</>
					)
				) : (
					<Button text='인증번호 전송' onClick={onVisible} />
				))}

			<Button text={isRegister ? '회원가입' : '로그인'} />
		</form>
	);
}

export default Form;
