import { Component } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Searchbox from './Components/Searchbox/Searchbox';


class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState(() => {
      return {monsters: data}})
    )
    console.log(this.state.monsters)
  }

  onSearchChange = (event) => {
    //arrow function is binding
    this.setState(() => {
      return {searchfield: event.target.value}
    })
  }

  render () {
    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase()))
    return <div className="App">
      <Searchbox onSearchChange={this.onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  } 
}


export default App;
