import { useState } from "react";

/* const useCounter = () => {
  const [value, setCounter] = useState(0);
  const increment = () => setCounter(value + 1);
  return {
    value,
    increment,
  };
}; */

const useCounter = () => {
	const [value, setState] = useState(0);
	const increment = () => setState(value + 1);
	return {value, increment};
}

const App = () => {
  const {increment, value} = useCounter();
  // const { value, increment } = useCounter();
  return (
    <button onClick={increment}>Counted {value} times </button>
  );
};

export default App;
