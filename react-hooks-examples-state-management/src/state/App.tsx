import { useState, useEffect } from "react";
import "../App.css";

const Dashboard = ({ salary }: { salary: number }) => (
  <div>
    <h1>Dashboard</h1>
    <EmployeeCard salary={salary} />
  </div>
);

const Project = ({ onBench }: { onBench: boolean }) => {
  useEffect(() => {
    // alert("UPDATED");
  });
  return <div>{onBench ? "OnBench" : "Project "}</div>;
};

const EmployeeCard = ({ salary }: { salary: number }) => {
  return (
    <div>
      <h2>About the employee</h2>
      <div>Salary: {salary}</div>
      {/* <Project onBench={onBench} /> */}
    </div>
  );
};

function App() {
  const [employee] = useState({ salary: 200, onBench: true });
  return (
    <div className="app">
      <Dashboard salary={employee.salary} />
    </div>
  );
}

export default App;
