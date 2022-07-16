import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import useTodo from './hook/useTodo';

function List() {
	const [isVisible, setIsVisible] = useState(false);
	const [isCertified, setIsCertified] = useState(false);
	const [state, onChange] = useTodo();

	const random = useRef(Math.floor(Math.random() * 89999) + 10000);

	const onVisible = () => {
		setIsVisible(!isVisible);
		alert(`인증번호 : ${random.current}`);
	};

	const onCertified = (e) => {
		e.preventDefault();
		if (Number(state.phone) !== random.current) {
			return alert('인증번호를 다시 확인하여주세요.');
		}

		setIsCertified(!isCertified);
		return alert('인증되었습니다.');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('auth', JSON.stringify(state));

		return alert('회원가입이 완료되었습니다.');
	};

	useEffect(() => {
		console.log(state);
		console.log(random);
	});

	return (
		<form onSubmit={onSubmit}>
			<Input title='아이디' name='id' value={state.id} onChange={onChange} />
			<Input
				title='비밀번호'
				type='password'
				name='password'
				value={state.password}
				onChange={onChange}
			/>
			{isVisible ? (
				isCertified ? (
					<strong>인증완료</strong>
				) : (
					<form onSubmit={onCertified}>
						<Input
							title='인증번호 입력'
							name='phone'
							value={state.phone}
							onChange={onChange}
						/>
						<Button text='인증번호 확인' />
					</form>
				)
			) : (
				<Button text='인증번호 전송' onClick={onVisible} />
			)}
			<Button text='회원가입' />
		</form>
	);
}

export default List;
