import { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';

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
			const itemIndex = prevList.findIndex((index) => index.id === id);
			console.log(itemIndex);
			return [...prevList];
		});
	};

	useEffect(() => {
		const data = localStorage.getItem('todos');
		console.log(JSON.parse(data));
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
