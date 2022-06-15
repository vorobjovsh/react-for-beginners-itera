import { PureComponent, useCallback, useState } from "react";

type WithCallback = { callback: () => void };

class ExpensiveComponent extends PureComponent<WithCallback> {
  render() {
    let i = 0;
    while (i < 1000_000_000) {
      i++;
    }
    const { callback } = this.props;
    return <button onClick={callback}>Expensive</button>;
  }

  componentDidUpdate() {
    console.log("updated");
  }
}

const App = () => {
  const [state, setState] = useState(0);
  const increment = () => setState(state + 1);
  //callback.example.tsxconst callback = () => console.log("callback!");
  const callback = useCallback(() => console.log("callback!"), []);
  return (
    <>
      <ExpensiveComponent callback={callback} />
      <button onClick={increment}>Increment: {state}</button>
    </>
  );
};

export default App;
