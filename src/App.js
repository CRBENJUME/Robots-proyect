//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

export default function App(){

  const [ searchStr, setSearchStr ] = useState('');
  const [ monster, setMonster ] = useState([])
  const [ filteredMons, setFilteredMons ] = useState(monster);
  const [ stringField, setStringField ] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonster(users))
  }, [])

  useEffect(() => {
    //Create a variable to filter
    const newFilteredMonst = monster.filter((monster) => {
      //filters the list of monsters based on whether theri name includes searchStr
      return monster.name.toLocaleLowerCase().includes(searchStr)
    })
    setFilteredMons(newFilteredMonst)
  }, [ monster, searchStr ])

  const onSearChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    //We return only the result that we want
    setSearchStr(searchFieldString)
  }
    //We gonna send the variable filMonst to the another page
  return (
    <div className="App">
      <section className="App-content">
        <h1 className='App-tittle'>Robots Rolodex</h1>
        <SearchBox onChangeHandler={ onSearChange }/>
        <CardList monster={ filteredMons }/>
      </section>
    </div>
  );
}