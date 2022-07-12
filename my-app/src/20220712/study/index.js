import React, { useEffect, useRef } from 'react';
import useScrollBody from './useScrollBody';
import useTodo from './useTodo';

function Refs() {
	const [keyword, onChange] = useTodo();

	const inputEl = useRef(null);
	// useRef 값으로 사용
	const number = useRef(0);
	// 타이머 같은 경우
	const intervalId = useRef(null);

	useScrollBody();

	useEffect(() => {
		console.dir(inputEl.current);
		console.log(number);
		console.log(intervalId);
	}, []);

	return (
		<div>
			{/* 비제어 컴포넌트 */}
			<div>
				<strong>비제어 컴포넌트</strong>
				<input type='text' ref={inputEl} />
			</div>
			{/* 제어 컴포넌트 */}
			<div>
				<strong>제어 컴포넌트</strong>
				<input type='text' value={keyword} onChange={onChange} />
			</div>
		</div>
	);
}

export default Refs;
