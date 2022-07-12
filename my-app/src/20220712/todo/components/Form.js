import { useEffect, useRef, useState } from 'react';

function Form({ onForm }) {
	const [value, setValue] = useState('');
	const inputRef = useRef(null);
	const onSubmit = (e) => {
		e.preventDefault();

		if (value.trim() === '') {
			return alert('내용을 입력하세요');
		}

		onForm(value);

		setValue('');
	};

	const onChange = (e) => {
		const { value } = e.target;
		setValue(value);
	};

	useEffect(() => {
		if (value.trim() === '') {
			inputRef.current.focus();
		}
	}, [value]);

	return (
		<form onSubmit={onSubmit}>
			<input type='text' ref={inputRef} value={value} onChange={onChange} />
			<button>등록</button>
		</form>
	);
}

export default Form;
