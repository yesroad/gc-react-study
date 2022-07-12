function List({ list, onToggle, onEdit }) {
	return (
		<ul>
			{list?.map((item) => (
				<li
					key={item.id}
					style={{
						textDecoration: `${item.isChecked ? 'line-through' : 'none'}`,
					}}
				>
					<span onClick={() => onToggle(item.id)}>{item.value}</span>
					<button onClick={() => onEdit(item.id)}>수정</button>
				</li>
			))}
		</ul>
	);
}

export default List;
