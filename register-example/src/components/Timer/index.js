import { useEffect } from 'react';
import useTimer from '../../hook/useTimer';

function Timer({ onSetVisible }) {
	const [time] = useTimer();

	useEffect(() => {
		onSetVisible(time.count);
	}, [onSetVisible, time]);

	return (
		<div>
			<strong>남은시간</strong>
			{time.min} : {time.sec}
		</div>
	);
}

export default Timer;
