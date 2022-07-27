import { Button, Field, Input, Select } from '../../common';
import { GENDER, MONTH, PHONE } from '../../../constants';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTimer from '../../../hook/useTimer';
import './Register.styles.scss';

function Register() {
	const [time, isTimer, onStart, onStop] = useTimer({ number: 180 });
	const [isAuthNo, setIsAuthNo] = useState(false);
	const { state, dispatch } = AuthContext();
	const { register, handleSubmit, formState, getValues } = useForm();
	const { isSubmitSuccessful, errors } = formState;

	const random = useRef(Math.floor(Math.random() * 89999) + 10000);

	const onResult = (data) => {
		const formState = {
			id: data.id,
			password: data.password,
			passwordConfirm: data.passwordConfirm,
			name: data.name,
			birthDay: `${data.year}.${data.month}.${data.day}`,
			phone: `${data.phone01}${data.phone02}`,
			gender: data.gender,
			email: data.email,
		};

		dispatch({
			type: 'CHANGE_INPUT',
			formState,
		});
	};

	const onAuthNoResult = () => {
		if (Number(getValues().authNo) === random.current) {
			setIsAuthNo(true);
			return onStop();
		}
	};

	const onAuthNo = () => {
		onStart();
		console.log(random.current);
		alert(random.current);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			alert(JSON.stringify(state, null, 2));
		}
	}, [isSubmitSuccessful, state]);

	useEffect(() => {
		if (time.count <= 0) {
			onStop();
		}
	}, [onStop, time]);

	return (
		<article>
			<h3 className='agree-title'>회원가입</h3>
			<form onSubmit={handleSubmit(onResult)}>
				<Field title='아이디' isError={errors.id} message={errors.id?.message}>
					<Input
						name='id'
						register={register('id', {
							required: '필수정보입니다.',
						})}
					/>
				</Field>
				<Field
					title='비밀번호'
					isError={errors.password}
					message={errors.password?.message}
				>
					<Input
						name='password'
						type='password'
						register={register('password', {
							required: '필수정보입니다.',
							pattern: {
								value:
									/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
								message: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
							},
						})}
					/>
				</Field>
				<Field
					title='비밀번호 재확인'
					isError={errors.passwordConfirm}
					message={errors.passwordConfirm?.message}
				>
					<Input
						name='passwordConfirm'
						type='password'
						register={register('passwordConfirm', {
							required: '필수정보입니다.',
							validate: (value) => {
								return (
									getValues().password === value ||
									'비밀번호가 일치하지 않습니다.'
								);
							},
						})}
					/>
				</Field>
				<Field
					title='이름'
					isError={errors.name}
					message={errors.name?.message}
				>
					<Input
						name='name'
						register={register('name', {
							required: '필수정보입니다.',
						})}
					/>
				</Field>
				<Field
					title='생년월일'
					isError={errors.year || errors.month || errors.day}
					message={(errors.year || errors.month || errors.day)?.message}
				>
					<Input
						name='year'
						placeholder='년(4자)'
						maxLength={4}
						register={register('year', {
							required: '태어난 년도 4자리를 정확하게 입력하세요.',
							minLength: {
								value: 4,
								message: '태어난 년도 4자리를 정확하게 입력하세요.',
							},
						})}
					/>
					<Select
						options={MONTH}
						register={register('month', {
							required: '태어난 월을 선택하세요.',
						})}
					/>
					<Input
						name='day'
						placeholder='일'
						maxLength={2}
						register={register('day', {
							required: '태어난 일(날짜) 2자리를 정확하게 입력하세요.',
							minLength: {
								value: 2,
								message: '태어난 일(날짜) 2자리를 정확하게 입력하세요.',
							},
						})}
					/>
				</Field>
				<Field
					title='성별'
					isError={errors.gender}
					message={errors.gender?.message}
				>
					<Select
						name='gender'
						register={register('gender', {
							required: '필수정보입니다.',
						})}
						value='asd'
						options={GENDER}
					/>
				</Field>
				<Field
					title='본인 확인 이메일'
					isError={errors.email}
					message={errors.email?.message}
					choice
				>
					<Input
						name='email'
						placeholder='선택입력'
						register={register('email', {
							pattern: {
								value:
									/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
								message: '이메일 주소를 다시 확인해주세요.',
							},
						})}
					/>
				</Field>
				<Field
					title='휴대전화'
					isError={errors.phone02}
					message={errors.phone02?.message}
				>
					<Select
						name='phone01'
						options={PHONE}
						register={register('phone01')}
					/>
					<Input
						name='phone02'
						placeholder='전화번호 입력'
						register={register('phone02', {
							required: '필수정보입니다.',
							pattern: {
								value: /^[0-9]+$/,
								message: '형식에 맞지 않는 번호입니다.',
							},
						})}
					/>
				</Field>
				<Field isError={errors.authNo} message={errors.authNo?.message}>
					{!isAuthNo && (
						<Button
							type='button'
							text='인증번호 받기'
							size='full'
							onClick={onAuthNo}
						/>
					)}

					<Input
						name='authNo'
						isDisabled={!isTimer}
						placeholder='인증번호를 입력하세요'
						register={register('authNo', {
							required: '필수정보입니다.',
							validate: (value) => {
								console.log(value);
								console.log(random.current);
								return (
									Number(value) === random.current ||
									'인증번호를 다시 확인해주세요.'
								);
							},
						})}
					/>
					{isTimer && (
						<>
							<span className='timer'>
								{time.min} : {time.sec}
							</span>
							<span className='authNo'>
								인증번호를 발송했습니다.(유효시간 3분)
								<br />
								인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.
								<br />
								이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수
								없습니다.
								<strong>까먹었으면 콘솔창을 확인하세요.</strong>
							</span>
							<Button
								type='button'
								text='인증번호 확인'
								size='full'
								onClick={onAuthNoResult}
							/>
						</>
					)}
					{isAuthNo && <span className='authNo'>인증이 완료되었습니다.</span>}
				</Field>
				<Button text='확인' size='full' />
			</form>
		</article>
	);
}

export default Register;
