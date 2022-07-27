import { useEffect } from 'react';
import useTimer from '../../../hook/useTimer';
import './Timer.styles.scss';

function Timer({ onTimerHide }) {
	const [time] = useTimer();

	useEffect(() => {
		if (time > 0) {
			onTimerHide();
		}
	}, [onTimerHide, time]);

	return (
		<span className='timer'>
			{time.min} : {time.sec}
		</span>
	);
}

export default Timer;
