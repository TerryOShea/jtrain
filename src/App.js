import React, { Component } from "react";
import Question from "./components/Question";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Literary Geography</h1>
        <Question
            questionText="Albert Camus set several works in the French colony of Algeria, including this first novel."
            answerText="Algeria"
        />
      </div>
    );
  }
}

export default App;
