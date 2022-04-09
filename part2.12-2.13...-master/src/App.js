import React, {useState}from "react";

import personService from './services/persons'
import NewPersonForm from './components/NewPersonForm' 
import Filterinput from './components/FilterInput'

import Persons from './components/Perons'


const App = () => {

const [filter, setFilter]=useState([]);
const [person,setPersons] = useState('');


useEffect(() => {
  personService
  .getAll()
  .then((initialPersons) => {
    setPersons(initialPersons);
  })
  .catch((error) => console.error(error));
}, []);


const addNewPerson = (newPerson) => {
  const nameMatch = (person1, person2) => 
  person1.toLowerCase() === person2.toLowerCase();
}

const Person  = Persons.find((person) => 
namesMatch(person.name, newPerson.name)

)


if (person) {
  if (
    window.confirm(
      `${newPerson.name} is already added to the phonebook, replace the old number with the new one?`
    )
  ) {
    const updatedPerson = { ...person, number: newPerson.number };
    personService
      .update(person.id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons
            .filter((p) => p.name !== updatedPerson.name)
            .concat(returnedPerson)
        );
        setMessage({
          text: `Updated ${updatedPerson.name}'s number`,
          type: "success",
        });
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((error) => {
        setPersons(person.filter((p) => p.name !== person.name));
        setMessage({
          text: `${person.name} has already been deleted from the server`,
          type: "error",
        });
        setTimeout(() => setMessage(null), 5000);
      });
  }

  return;

}

personService
.create(Newperson)
.then((returnedPerson) => {
  setPersons([... persons, returnedPerson])
  setMessage({
    text: `Added ${returnedPerson.name}`,
    type: "success",
    });
    setTimeout(() => setMessage(null), 5000); 
    })
    .catch((error) => {
        setMessage({ text: error.response.data.error, type: "error" });
  
  
        
  
  
  
        setTimeout(() => setMessage(null), 5000);
        console.error(error);
      });






return(
  <div>
    <h1>Phonebook</h1>
    <Filterinput setFilter={setFilter} />
    <NewPersonForm  newPerson={addNewPerson} />
  <h2>Numbers</h2>
  </div>
)

}
export default App








