import { useState } from "react";

const App = () => {
  const [state, setState] = useState({ isAdmin: false, userName: "Olga" });
  const { isAdmin } = state;

  const assignAdmin = () => {
    setState({ ...state, isAdmin: true }); // CORRECT
  };

  // const assignAdmin = () => {
  //   setState({ isAdmin: true }); // WRONG
  // };

  // const assignAdmin = () => {
  //   state.isAdmin = true; // VERY WRONG
  //   setState(state);
  // };

  return (
    <>
      <h1>Hello user, you is {isAdmin ? "SUPER ADMIN" : "a user"}</h1>
      <button onClick={assignAdmin}>Assign admin</button>
    </>
  );
};

export default App;
