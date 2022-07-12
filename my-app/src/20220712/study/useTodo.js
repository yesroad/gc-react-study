import { useState } from 'react';

function useTodo() {
	const [keyword, setKeyword] = useState('');

	const onChange = (e) => {
		const { value } = e.target;
		setKeyword(value);
		console.log(keyword);
	};

	// 1. 배열로 반환
	return [keyword, onChange];

	// 2.객체로 반환
	// return { keyword, onChange };
}

export default useTodo;
