import { useEffect, useRef, useState } from "react";

const useTimer = () => {

	const [state, setState] = useState({startedAt: 0, started: false, ct: 0, title: 'Counting!!!'});
	const {started, startedAt, ct, title} = state;
	const interval = useRef(0);
	//console.log(typeof(setInterval));

	useEffect(() => {
		if(started) {
			interval.current = window.setInterval(() => {
				setState((prevState) => {
					return {...prevState, ct: Date.now()};
				})
			}, 1000);
		} else {
			clearInterval(interval.current);
		}

		return () => clearInterval(interval.current) ;

	}, [started]);

	const start = () => {
		setState({started: true, startedAt: Date.now(), ct: Date.now(), title: 'Timer is running' });
	};
	const stop = () => {
		setState({...state, started: false, title: 'Counting!!!' });
	};
	const elapsed = ct - startedAt ;
	const titleCounting = title;

	return {
		start,
		stop,
		elapsed,
		titleCounting
	}
};

const App = () => {
	const {elapsed, start, stop, titleCounting} = useTimer();
	const elapsedViewModel = new Date(elapsed).toLocaleTimeString("en-gb", {timeZone: 'UTC'});

	return (
		<> 
		  <h1>{titleCounting}</h1>
			<h2>{elapsedViewModel}</h2>

			<button type="button" onClick={start}>Start</button>
			<button type="button" onClick={stop}>Stop</button>
		</>
	) ;
};

export default App;
