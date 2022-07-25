import './Input.styles.scss';

function Input({ name, value, onChange, placeholder, type = 'text' }) {
	return (
		<input
			className='input'
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
}

export default Input;
