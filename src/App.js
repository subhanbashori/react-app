import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id:'1', name: 'max', age: 28 },
      {id:'2', name: 'manu', age: 20 },
      {id:'3', name: 'stephany', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, i'm a React</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.tooglePersonsHandler}>Toogle Persons</button>
          {persons}
        </div>
    )
  }
}

// const App = props => {
  
//   const [ personsState, setPersonsState ] = useState({
//       persons : [
//         { name: 'max', age: 28 },
//         { name: 'manu', age: 20 },
//         { name: 'stephany', age: 25 }
//       ],
//       otherState: 'some other value'
//     });

//     console.log(personsState);

//     const switcNameHandler = () => {
//       //console.log('was clicked');
//       // don't do this -> this.state.persons[0].name = 'maximiliam';
//       setPersonsState({
//         persons : [
//           { name: 'maximilian', age: 21 },
//           { name: 'manu', age: 22 },
//           { name: 'stephany', age: 23 }
//         ]
//       })
//     };

//     return (
//       <div className="App">
//         <h1>Hi, i'm a React</h1>
//         <h1>halo halo</h1>
//         <button onClick={switcNameHandler}>switch me</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobby : Racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
  
// }

export default App;