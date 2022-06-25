import {useState, useEffect} from 'react';
import { getPadTime } from './helpers/getPadTimes';

function App() {
	const dtime = 5; // время в секундах
	const [timeLeft, setTimeLeft] = useState(dtime);
	const [isCounting, setIsCounting] = useState(false);
	
	const minutes = getPadTime(Math.floor(timeLeft/60));
	const seconds = getPadTime(timeLeft - minutes*60);
	
	useEffect(() => {
	  const interval = setInterval(() => {
	  
			isCounting &&
				setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)

	  }, 1000)
	  
	  if(timeLeft === 0) {
	    setIsCounting(false);
			setTimeLeft(dtime);
	  }
	  
	  return () => {
	    clearInterval(interval)
	  }
	},[timeLeft, isCounting])
	
	const handleStart = () => {
		
	  if(timeLeft === 0) {
	    setTimeLeft(dtime);
	  }
	
	  setIsCounting(true);
	};
	const handleStop = () => {
	  setIsCounting(false);
	};
	const handleReset = () => {
	  setIsCounting(false);
	  setTimeLeft(dtime);
	};

  return (
		<div className="app">
	    <div className="timer">
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>
	    <div className="buttons">
				{isCounting ? (
					<button onClick={handleStop}>Stop</button>
				) : (
					<button onClick={handleStart}>Start</button>
				)}
				<button onClick={handleReset}>Reset</button>
			</div>
	  </div>
  );
}

export default App;
