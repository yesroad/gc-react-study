import './Select.styles.scss';

function Select({ items, onChange }) {
	return (
		<select onChange={onChange}>
			{items?.map((item) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	);
}

export default Select;
