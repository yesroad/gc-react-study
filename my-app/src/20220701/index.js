import { useState } from 'react';

function Todo() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!value) {
			return alert('내용을 입력하세요');
		}
		setList([...list, value.trim()]);
		setValue('');
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<form onSubmit={onSubmit}>
				<input type='text' value={value} onChange={onChange} />
				<button>등록</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
