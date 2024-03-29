import { useEffect, useState } from 'react';
import Form from './20220706/components/Form';
import List from './20220706/components/List';

function App() {
	const [list, setList] = useState([]);

	const onForm = (value) => {
		const item = {
			id: Date.now(),
			value: value.trim(),
			isChecked: false,
		};

		const items = [...list, item];

		setList(items);

		localStorage.setItem('todos', JSON.stringify(items));
	};

	const onToggle = (id) => {
		setList((prevList) => {
			const todos = [...list];
			const itemIndex = prevList.findIndex((index) => index.id === id);
			const item = prevList[itemIndex];

			todos[itemIndex] = {
				...item,
				isChecked: !item.isChecked,
			};

			localStorage.setItem('todos', JSON.stringify(todos));

			return todos;
		});
	};

	useEffect(() => {
		const data = localStorage.getItem('todos');
		if (data) {
			setList(JSON.parse(data));
		}
	}, []);

	return (
		<div className='App'>
			<Form onForm={onForm} />
			<List list={list} onToggle={onToggle} />
		</div>
	);
}

export default App;
