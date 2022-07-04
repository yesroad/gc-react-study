import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();

		if (value.trim() === '') {
			setValue('');
			return alert('내용을 입력하세요');
		}

		setList([
			...list,
			{
				value: value.trim(),
				isChecked: false,
			},
		]);

		setValue('');
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onClick = (id) => {
		setList(
			list.map((item, index) =>
				id === index ? { ...item, isChecked: !item.isChecked } : item,
			),
		);
	};

	return (
		<div className='App'>
			<form onSubmit={onSubmit}>
				<input type='text' value={value} onChange={onChange} />
				<button>등록</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li
						key={index}
						onClick={() => onClick(index)}
						style={{
							textDecoration: `${item.isChecked ? 'line-through' : 'none'}`,
						}}
					>
						{item.value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
