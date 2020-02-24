import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char'


class App extends Component {
    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value });
    }

    onDeleteHandler = (index) => {
        const characters = this.state.userInput.split('');
        characters.splice(index, 1);
        // Pass back as string
        const updatedText = characters.join('');
        this.setState({ userInput: updatedText })
    }

    render() {
        const mappedAmount = this.state.userInput.split('').map((ch, index) => {
            return <Char character={ch} clicked={() => this.onDeleteHandler(index)} key={index} />
        });

        return (
            <div>
                <input type ="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {mappedAmount}
            </div>
        )
    }
}

export default App;
