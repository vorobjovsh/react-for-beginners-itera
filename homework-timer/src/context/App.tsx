import { createContext, useState, useContext, useEffect, useRef } from "react";

type TimerData = {
  startedAt: number;
	started: boolean;
	ct: number;
};

type TimerState = TimerData & {
  setTimerData: (d: TimerData) => void;
};

const data: TimerData = { startedAt: 0, started: false, ct: 0};

const TimerCtx = createContext<TimerState>({
  ...data,
  setTimerData: () => {},
});

const Title = () => {
  const { started } = useContext(TimerCtx);
  useEffect(() => {
    // alert("UPDATED");
  });
  return <h1>{started ? "Timer is running" : "Counting!!!"}</h1>;
};



const TimerView = () => {
	const { started, startedAt, ct, setTimerData} = useContext(TimerCtx);
	const elapsed = ct - startedAt ;
	const interval = useRef(0);

	useEffect(() => {
		if(started) {
			interval.current = window.setInterval(() => {
				setTimerData({ started: true, startedAt: Date.now(), ct: Date.now() });
			}, 1000);
		} else {
			clearInterval(interval.current);
		}

		return () => clearInterval(interval.current) ;

	}, [started]);

	const elapsedViewModel = new Date(elapsed).toLocaleTimeString("en-gb", {timeZone: 'UTC'});

	const start = () => {
		setTimerData({started: true, startedAt: Date.now(), ct: Date.now()});
	};

	return (
		<h2>{elapsedViewModel}</h2>
		<button type="button" onClick={start}>Start</button>
	)

};

const stop = () => {
	
};

const App = () => {
	//const { started, startedAt, ct, setTimerData} = useContext(TimerCtx);
 //const [started, startedAt, ct, setTimerData ] = useState(data)
	return (
		<> 
		  <Title />
			<TimerView />

			<button type="button" >Stop</button>
		</>
	) ;
};

export default App;
