import './Input.styles.scss';

function Input({ name, value, onChange, type = 'text' }) {
	return (
		<input
			className='input'
			type={type}
			name={name}
			value={value}
			onChange={onChange}
		/>
	);
}

export default Input;
