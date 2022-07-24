import './Checkbox.styles.scss';

function Checkbox({ name, value, label, onChange, isChecked, isDisabled }) {
	return (
		<div className='checkbox-block'>
			<input
				type='checkbox'
				className='checkbox'
				value={value}
				id={value}
				name={name}
				checked={isChecked}
				disabled={isDisabled}
				onChange={onChange}
			/>
			<label htmlFor={value}>{label}</label>
		</div>
	);
}

export default Checkbox;
