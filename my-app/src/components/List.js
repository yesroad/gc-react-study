function List({ list, onToggle }) {
	return (
		<ul>
			{list?.map((item) => (
				<li
					key={item.id}
					onClick={() => onToggle(item.id)}
					style={{
						textDecoration: `${item.isChecked ? 'line-through' : 'none'}`,
					}}
				>
					{item.value}
				</li>
			))}
		</ul>
	);
}

export default List;
