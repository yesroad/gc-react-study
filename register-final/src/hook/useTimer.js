import { useEffect, useRef, useReducer, useState } from 'react';
import reducer from '../reducer';

function useTimer({number}) {
	const [isTimer, setIsTimer] = useState(false);
	const timeRef = useRef(number);
	let time = timeRef.current;

	const initialState = {
		count: time,
		min: parseInt(time / 60, 10),
		sec: parseInt(time % 60, 10),
	};

	const onStart = () => {
		setIsTimer(true);
	}

	const onStop = () => {
		setIsTimer(false);
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (isTimer) {
			const counter = setInterval(() => {
				time--;
				dispatch({
					type: 'CHANGE_TIMER',
					count: time,
					min: parseInt(time / 60, 10),
					sec: parseInt(time % 60, 10),
				});
			}, 1000);
			return () => clearInterval(counter);;
		}
	}, [time, isTimer]);

	return [state, isTimer, onStart, onStop];
}

export default useTimer;
