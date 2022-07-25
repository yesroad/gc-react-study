import { Button, Field, Input, Select } from '../../common';
import { MONTH } from '../../../constants/const';

function Register() {
	return (
		<article>
			<h3 className='agree-title'>회원가입</h3>
			<form>
				<Field title='아이디'>
					<Input />
				</Field>
				<Field title='비밀번호'>
					<Input />
				</Field>
				<Field title='비밀번호 재확인'>
					<Input />
				</Field>
				<Field title='이름'>
					<Input />
				</Field>
				<Field title='생년월일'>
					<Input placeholder='년' />
					<Select items={MONTH} value='월' />
					<Input placeholder='일' />
				</Field>
				<Field title='성별'>
					<Input />
				</Field>
				<Field title='본인 확인 이메일'>
					<Input />
				</Field>
				<Field title='휴대전화'>
					<Input />
					<Input />
					<Input isDisabled />
				</Field>
				<Button text='확인' size='full' />
			</form>
		</article>
	);
}

export default Register;
