import './Select.styles.scss';

function Select({ options, register, name }) {
	return (
		<select name={name} {...register}>
			{options?.map((item) => (
				<option key={item.value} value={item.value}>
					{item.name}
				</option>
			))}
		</select>
	);
}

export default Select;
