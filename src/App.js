import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: "",
      alphabet: "",
      sorted: "",
    };
  }

  alienDictionary(wordString, alphabet) {
    var words = wordString.split(" ");
    var order = alphabet;

    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i],
        word2 = words[i + 1];
      let j = 0,
        k = 0;
      while (j < word1.length || k < word2.length) {
        if (k === word2.length) {
          this.setState({
            sorted: "false",
          });
          return;
        } else if (
          j === word1.length ||
          order.indexOf(word1[j]) < order.indexOf(word2[k])
        ) {
          break;
        }
        if (order.indexOf(word1[j]) > order.indexOf(word2[k])) {
          this.setState({
            sorted: "false",
          });
          return;
        }
        j += 1;
        k += 1;
      }
    }
    this.setState({
      sorted: "true",
    });
    return;
  }

  handleInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <section>
            <a>
              <input
                placeholder="Words"
                onChange={(e) => this.handleInput("words", e.target.value)}
              ></input>
              <input
                placeholder="Alphabet"
                onChange={(e) => this.handleInput("alphabet", e.target.value)}
              ></input>
              <button
                onClick={(e) =>
                  this.alienDictionary(this.state.words, this.state.alphabet)
                }
              >
                test
              </button>
              <p>
                Example: Words = apple app || Alphabet =
                abcdefghijklmnopqrstuvwxyz
              </p>
              {this.state.sorted}
            </a>
          </section>
          <section>
            <a>
              <input
                placeholder="Words"
                onChange={(e) => this.handleInput("words", e.target.value)}
              ></input>
              <input
                placeholder="Alphabet"
                onChange={(e) => this.handleInput("alphabet", e.target.value)}
              ></input>
              <button
                onClick={(e) =>
                  this.alienDictionary(this.state.words, this.state.alphabet)
                }
              >
                test
              </button>
              <p>
                Example: Words = apple app || Alphabet =
                abcdefghijklmnopqrstuvwxyz
              </p>
              {this.state.sorted}
            </a>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
