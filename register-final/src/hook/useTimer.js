import { useEffect, useRef, useReducer } from 'react';
import reducer, { initialState } from '../reducer';

function useTimer() {
	const timeRef = useRef(180);
	let time = timeRef.current;

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (time > 0) {
			const counter = setInterval(() => {
				time--;
				dispatch({
					type: 'CHANGE_TIMER',
					count: time,
					min: parseInt(time / 60, 10),
					sec: parseInt(time % 60, 10),
				});
			}, 1000);
			return () => clearInterval(counter);
		}
	}, [time]);

	return [state.timer];
}

export default useTimer;
