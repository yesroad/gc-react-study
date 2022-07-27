import './Input.styles.scss';

function Input({
	register,
	name,
	placeholder,
	maxLength,
	minLength,
	type = 'text',
}) {
	return (
		<input
			{...register}
			className='input'
			type={type}
			name={name}
			placeholder={placeholder}
			maxLength={maxLength}
			minLength={minLength}
		/>
	);
}

export default Input;
