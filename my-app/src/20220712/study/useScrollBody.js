import { useEffect } from 'react';

function useScrollBody() {
	useEffect(() => {
		document.addEventListener(
			'scroll',
			function () {
				console.log('scroll on');
			},
			false,
		);
		return () => {
			document.addEventListener(
				'scroll',
				function () {
					console.log('scroll off');
				},
				false,
			);
		};
	}, []);
}

export default useScrollBody;
