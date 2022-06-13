import './App.css';
import user from './user.json';
import H1Title  from './H1Title';
import FirstName  from './FirstNames';
import Bio  from './Bio';
import Contacts from './Contacts';

const App = () => (
  
    <div className="App">
			<H1Title title={user.fName} />
      <FirstName frName={user.fName} />
			<Bio bio={user.shortBiography} />
		  <Contacts 
				email={user.publicContacts.email}
				phone={user.publicContacts.phone}
			/>
    </div>
  
)

export default App;
