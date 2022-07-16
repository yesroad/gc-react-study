import { useRef, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { reducer } from '../../reducer';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hook/useInput';
import Timer from '../Timer';

const initialState = {
	visible: false,
	certified: false,
};

function Form({ isRegister }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [input, onChange] = useInput();

	const navigate = useNavigate();

	// 인증번호
	const random = useRef(Math.floor(Math.random() * 89999) + 10000);

	// 인증번호 인풋 활성화
	const onVisible = () => {
		dispatch({
			type: 'CHANGE_VISIBLE',
			visible: true,
		});
		alert(`인증번호 : ${random.current}`);
	};

	// 인증번호 확인
	const onCertified = (e) => {
		e.preventDefault();
		if (Number(input.phone) !== random.current) {
			return alert('인증번호를 다시 확인하여주세요.');
		}

		dispatch({
			type: 'CHANGE_CERTIFIED',
			certified: true,
		});

		return alert('인증되었습니다.');
	};

	// 회원가입
	const onRegister = (e) => {
		e.preventDefault();

		if (!input.id || !input.password) {
			return alert('빈칸을 모두 입력하세요.');
		}

		if (!state.certified) {
			return alert('인증을 완료하세요.');
		}

		localStorage.setItem('auth', JSON.stringify(input));

		alert('회원가입이 완료되었습니다.');
		return navigate('/login');
	};

	// 로그인
	const onLogin = (e) => {
		e.preventDefault();

		const initialState = {
			id: null,
			password: null,
		};

		const data = JSON.parse(localStorage.getItem('auth')) || initialState;

		if (data.id !== input.id) {
			return alert('아이디를 확인하세요');
		}

		if (data.password !== input.password) {
			return alert('비밀번호를 확인하세요.');
		}
		alert('로그인이 완료되었습니다.');
		localStorage.setItem('isLogin', true);
		return navigate('/');
	};

	const onSetVisible = (count) => {
		if (count <= 0) {
			dispatch({
				type: 'CHANGE_VISIBLE',
				certified: false,
			});
		}
	};

	return (
		<form onSubmit={isRegister ? onRegister : onLogin}>
			<Input title='아이디' name='id' value={input.id} onChange={onChange} />
			<Input
				title='비밀번호'
				type='password'
				name='password'
				value={input.password}
				onChange={onChange}
			/>
			{isRegister &&
				(state.visible ? (
					state.certified ? (
						<strong>인증완료</strong>
					) : (
						<>
							<Input
								title='인증번호 입력'
								name='phone'
								value={input.phone}
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
