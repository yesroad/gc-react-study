import { Checkbox, Field, Input } from '../components/common';

function Agree() {
	return (
		<>
			<h3>동의</h3>
			<Checkbox label='라벨' name='이름' value='벨류' />
			<Field title='타이틀' isRequired requiredMessage='이건잘못된거야!!'>
				<Input />
			</Field>
		</>
	);
}

export default Agree;
