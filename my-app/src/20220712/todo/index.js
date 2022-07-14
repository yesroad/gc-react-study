import { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function TodoList() {
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

	const onClick = (id, type) => {
		const isEdit = type === 'edit';
		const editMessage = isEdit && prompt('변경할 값 입력', '');

		setList((prevList) => {
			const todos = [...list];
			const itemIndex = prevList.findIndex((index) => index.id === id);
			const item = prevList[itemIndex];

			const toggleItem = {
				...item,
				isChecked: !item.isChecked,
			};

			const editItem = {
				...item,
				value: editMessage ? editMessage : item.value,
			};

			todos[itemIndex] = isEdit ? editItem : toggleItem;

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
			<List list={list} onClick={onClick} />
		</div>
	);
}

export default TodoList;
