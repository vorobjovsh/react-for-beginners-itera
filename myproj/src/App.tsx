import './App.css';

const user = { 
	firstName: "Andriy",
	shortBiography: "My name is Andriy. I am fourty-seven years old. I am from Ukraine.",
	publicContacts: {
		email: "email@gmail.com",
		phone: "+38-098-777-77-77"
	} 
};

/* const Footer = () => (
	<footer>Footer</footer>
) */

const App = () => (
  
    <div className="App">
			<h1>{user.firstName}</h1>
      <div>First Name: {user.firstName}</div>
			<div>Short biography: 
				<p>{user.shortBiography}</p>
			</div>
			<div>Public contacts:
				<p>Email: {user.publicContacts.email}</p>
				<p>Phone: {user.publicContacts.phone}</p>
			</div>
    </div>
  
)

export default App;
