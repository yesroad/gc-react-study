import './Input.styles.scss';

function Input({
	register,
	name,
	placeholder,
	maxLength,
	minLength,
	isDisabled,
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
			disabled={isDisabled}
		/>
	);
}

export default Input;
