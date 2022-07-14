function List({ list, onClick }) {
	return (
		<ul>
			{list?.map((item) => (
				<li
					key={item.id}
					style={{
						textDecoration: `${item.isChecked ? 'line-through' : 'none'}`,
					}}
				>
					<span onClick={() => onClick(item.id, 'toggle')}>{item.value}</span>
					<button onClick={() => onClick(item.id, 'edit')}>수정</button>
				</li>
			))}
		</ul>
	);
}

export default List;
