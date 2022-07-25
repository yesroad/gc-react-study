import { Button, Field, Input, Select } from '../../common';
import { MONTH } from '../../../constants/const';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function Register() {
	const [formState, setFormState] = useState({
		id: '',
		password: '',
		passwordConfirm: '',
		name: '',
		birthDay: '',
		phone: '',
		gender: '',
		email: '',
		authNo: '',
	});
	const { register, handleSubmit, watch } = useForm();
	const onResult = (data) => {
		const {
			id,
			password,
			passwordConfirm,
			name,
			year,
			month,
			day,
			phone01,
			phone02,
			gender,
			email,
		} = data;
		setFormState({
			id,
			password,
			passwordConfirm,
			name,
			birthDay: `${year}.${month}.${day}`,
			phone: `${phone01}${phone02}`,
			gender,
			email,
		});
	};

	useEffect(() => {
		console.log('watch', watch());
		console.log('form', formState);
	}, [formState, watch]);

	return (
		<article>
			<h3 className='agree-title'>회원가입</h3>
			<form onSubmit={handleSubmit(onResult)}>
				<Field title='아이디'>
					<Input name='id' register={register('id', { required: true })} />
				</Field>
				<Field title='비밀번호'>
					<Input name='password' register={register('password')} />
				</Field>
				<Field title='비밀번호 재확인'>
					<Input
						name='passwordConfirm'
						register={register('passwordConfirm')}
					/>
				</Field>
				<Field title='이름'>
					<Input name='name' register={register('name')} />
				</Field>
				<Field title='생년월일'>
					<Input name='year' placeholder='년' register={register('year')} />
					<Select name='month' items={MONTH} register={register('month')} />
					<Input name='day' placeholder='일' register={register('day')} />
				</Field>
				<Field title='성별'>
					<Select
						name='gender'
						register={register('gender')}
						items={['남자, 여자, 선택안함']}
					/>
				</Field>
				<Field title='본인 확인 이메일'>
					<Input name='email' register={register('email')} />
				</Field>
				<Field title='휴대전화'>
					<Select
						name='phone01'
						register={register('phone01')}
						items={['대한민국 + 82']}
					/>
					<Input name='phone02' register={register('phone02')} />
					<Input isDisabled />
				</Field>
				<Button text='확인' size='full' />
			</form>
		</article>
	);
}

export default Register;
