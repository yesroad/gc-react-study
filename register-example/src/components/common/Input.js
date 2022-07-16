import '../../styles/Input.styles.css';

function Input({ title, name, value, onChange, type = 'text' }) {
	return (
		<div className='input-block'>
			<strong>{title}</strong>
			<input type={type} name={name} value={value} onChange={onChange} />
		</div>
	);
}

export default Input;
