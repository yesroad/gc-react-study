import { useEffect, useReducer } from 'react';
import useTimer from '../../hook/useTimer';
import reducer, { initialState } from '../../reducer';

function Timer() {
	const [, dispatch] = useReducer(reducer, initialState);
	const [time] = useTimer();

	useEffect(() => {
		if (time <= 0) {
			dispatch({
				type: 'CHANGE_VISIBLE',
				certified: false,
			});
		}
	}, [time]);

	return (
		<div>
			<strong>남은시간</strong>
			{time.min} : {time.sec}
		</div>
	);
}

export default Timer;
