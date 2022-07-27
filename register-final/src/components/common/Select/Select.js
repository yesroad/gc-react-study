import './Select.styles.scss';

function Select({ options, register, onChange, name }) {
	return (
		<select name={name} onChange={onChange} {...register}>
			{options?.map((item) => (
				<option key={item.value} value={item.value}>
					{item.name}
				</option>
			))}
		</select>
	);
}

export default Select;
