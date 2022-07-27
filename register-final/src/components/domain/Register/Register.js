import { Button, Field, Input, Select } from '../../common';
import { GENDER, MONTH, PHONE } from '../../../constants';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

function Register() {
	const { state, dispatch } = AuthContext();
	const { register, handleSubmit, formState, getValues } = useForm();
	const { isSubmitSuccessful, errors } = formState;

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

	useEffect(() => {
		if (isSubmitSuccessful) {
			alert(JSON.stringify(state, null, 2));
		}
	}, [isSubmitSuccessful, state]);

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
						register={register('passwordConfirm', {
							required: '필수정보입니다.',
							validate: (value) => {
								return getValues().password === value || "비밀번호가 일치하지 않습니다.";
							}
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
						placeholder='년'
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
						register={register('phone02', {
							required: '필수정보입니다.',
							pattern: {
								value: /^[0-9]+$/,
								message: '형식에 맞지 않는 번호입니다.',
							},
						})}
					/>
					<Input isDisabled />
				</Field>
				<Button text='확인' size='full' />
			</form>
		</article>
	);
}

export default Register;
