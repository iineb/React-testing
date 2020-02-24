import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.module.css';
import Validation from './Validation/Validation';

class App extends Component {
    // Only works in extended components
    state = {
        persons: [
            { id: 'ewfefew', name: 'Bill', age: 27 },
            { id: 'trh4fev', name: 'Gary', age: 24 },
            { id: 'fbg4gge', name: 'Jane', age: 26 }
        ],
        otherState: 'other value',
        showPersons: false
    }

    // switchNameHandler = (newName) => {
    //     //console.log('Clicked!');
    //     // DO NOT DO THIS! - this.state.persons[0].name = 'John';
    //     this.setState({
    //         persons: [
    //             { name: newName, age: 27 },
    //             { name: 'Gary', age: 24 },
    //             { name: 'Jessica', age: 27 }
    //         ]
    //     })
    // }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(pn => {
            return pn.id === id;
        });

        // Do not mutate original data, spread prevents this
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {

        let personList = null;
        let btnClass = '';

        if (this.state.showPersons) {
            personList = (
                <div>
                    {this.state.persons.map((el, index) => {
                        return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={el.name}
                        age={el.age}
                        key={el.id}
                        changed={(event) => this.nameChangedHandler(event, el.id)} />
                    })}
                </div>
            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon'
            // }
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Testing App</h1>
                <p className={assignedClasses.join(' ')}>Learning with React!</p>
                <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {personList}
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Working?'));
    }
}

export default App;
