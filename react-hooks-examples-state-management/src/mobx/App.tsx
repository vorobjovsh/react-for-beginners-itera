import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import "./App.css";

class EmployeeStore {
  salary = 100;
  onBench = true;

  constructor() {
    makeAutoObservable(this);
  }

  increaseSalary(v: number) {
    this.salary = this.salary + v;
  }
}

const employeeStore = new EmployeeStore();

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <EmployeeCard />
  </div>
);

const Project = observer(() => {
  const { onBench } = employeeStore;
  useEffect(() => {
    // alert("UPDATED");
  });
  return <div>{onBench ? "OnBench" : "Project "}</div>;
});

const EmployeeCard = observer(() => {
  return (
    <div>
      <h2>About the employee</h2>
      <div>Salary: {employeeStore.salary}</div>
      <div>
        <button onClick={() => employeeStore.increaseSalary(200)}>
          Increase Salary
        </button>
      </div>
      <Project />
    </div>
  );
});

function App() {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;
