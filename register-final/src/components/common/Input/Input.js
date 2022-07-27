import './Input.styles.scss';

function Input({
	register,
	name,
	value,
	id,
	onChange,
	placeholder,
	maxLength,
	minLength,
	type = 'text',
}) {
	return (
		<input
			{...register}
			className='input'
			id={id}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			maxLength={maxLength}
			minLength={minLength}
		/>
	);
}

export default Input;
