import { createContext, useState, useContext, useEffect } from "react";
import "../App.css";

type EmployeeData = {
  salary: number;
  onBench: boolean;
};

type EmployeeState = EmployeeData & {
  setEmployeeData: (d: EmployeeData) => void;
};

const data: EmployeeData = { salary: 100, onBench: true };

const EmployeeCtx = createContext<EmployeeState>({
  ...data,
  setEmployeeData: () => {},
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
  const { salary, setEmployeeData } = useContext(EmployeeCtx);
  return (
    <div>
      <h2>About the employee</h2>
      <div>Salary: {salary}</div>
      <div>
        <button
          onClick={() =>
            setEmployeeData({ salary: salary + 100, onBench: true })
          }
        >
          Increase Salary
        </button>
      </div>
      <Project />
    </div>
  );
};

function App() {
  const [employee, setEmployeeData] = useState(data);
  return (
    <div className="app">
      <EmployeeCtx.Provider value={{ ...employee, setEmployeeData }}>
        <Dashboard />
      </EmployeeCtx.Provider>
    </div>
  );
}

export default App;
