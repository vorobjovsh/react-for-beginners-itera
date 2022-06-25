import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import "./App.css";

type EmployeeData = {
  salary: number;
  onBench: boolean;
};

type EmployeeState = EmployeeData & {
  dispatch: (action: IncreasePaymentAction | PutOnProjectAction) => void;
};

type IncreasePaymentAction = {
  type: "INCREASE_ACTION";
  paylod: number;
};

type PutOnProjectAction = {
  type: "PUT_ON_PROJECT";
};

const employeeReducer = (
  state: EmployeeData,
  action: IncreasePaymentAction | PutOnProjectAction
): EmployeeData => {
  switch (action.type) {
    case "INCREASE_ACTION":
      return { ...state, salary: state.salary + action.paylod };
    case "PUT_ON_PROJECT":
      return { ...state, onBench: false };
  }
};

const data: EmployeeData = { salary: 100, onBench: true };

const EmployeeCtx = createContext<EmployeeState>({
  ...data,
  dispatch: () => {},
});

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <EmployeeCard />
  </div>
);

const Project = () => {
  const { onBench } = useContext(EmployeeCtx);
  useEffect(() => {
    // alert("UPDATED");
  });
  return <div>{onBench ? "OnBench" : "Project "}</div>;
};

const EmployeeCard = () => {
  const { salary, dispatch } = useContext(EmployeeCtx);
  return (
    <div>
      <h2>About the employee</h2>
      <div>Salary: {salary}</div>
      <div>
        <button
          onClick={() => dispatch({ type: "INCREASE_ACTION", paylod: 100 })}
        >
          Increase Salary
        </button>
      </div>
      <Project />
    </div>
  );
};

function App() {
  const [employee, dispatch] = useReducer(employeeReducer, {
    salary: 100,
    onBench: false,
  });
  return (
    <div className="app">
      <EmployeeCtx.Provider value={{ ...employee, dispatch }}>
        <Dashboard />
      </EmployeeCtx.Provider>
    </div>
  );
}

export default App;
