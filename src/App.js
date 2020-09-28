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
      stringNum1: "",
      stringNum2: "",
      stringOutput: "",
      stringArray1: "",
      stringArray2: "",
      mergeSortArrayOutput: "",
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

  addStrings(num1, num2) {
    if (num2.length > num1.length) return this.addStrings(num2, num1);

    let i = num1.length - 1;
    let j = num2.length - 1;
    let out = "";
    let carry = 0;

    while (i >= 0) {
      const digit1 = num1.charAt(i) - "0";
      const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";

      let sum = carry + digit1 + digit2;
      carry = 0;
      if (sum > 9) {
        carry = 1;
        sum %= 10;
      }

      out = sum.toString() + out;

      i--;
      j--;
    }

    if (carry > 0) out = carry.toString() + out;

    this.setState({
      stringOutput: out,
    });
    return;
  }

  mergeSortArrays(stringArray1, stringArray2) {
    var array1 = stringArray1.split(",");
    var array2 = stringArray2.split(",");

    var arrayCombined = array1.concat(array2);
    var newArray = [];
    for (let i = 0; i < arrayCombined.length; i++) {
      if (arrayCombined[i] !== "0") {
        console.log(arrayCombined[i]);
        newArray.push(arrayCombined[i]);
      }
    }
    newArray.sort((a, b) => {
      return a - b;
    });
    var newStringArray = newArray.join(" , ");
    this.setState({
      mergeSortArrayOutput: newStringArray,
    });
  }

  handleInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    console.log(this.state.stringOutput);
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
                placeholder="String Num 1"
                onChange={(e) => this.handleInput("stringNum1", e.target.value)}
              ></input>
              <input
                placeholder="String Num 2"
                onChange={(e) => this.handleInput("stringNum2", e.target.value)}
              ></input>
              <button
                onClick={(e) =>
                  this.addStrings(this.state.stringNum1, this.state.stringNum2)
                }
              >
                test
              </button>
              <p>
                Example: String Num 1 = 456 String Num 2 = 6540 || String Output
                = "6996"
              </p>
              {this.state.stringOutput}
            </a>
          </section>
          <section>
            <a>
              <input
                placeholder="Array 1"
                onChange={(e) =>
                  this.handleInput("stringArray1", e.target.value)
                }
              ></input>
              <input
                placeholder="Array 2"
                onChange={(e) =>
                  this.handleInput("stringArray2", e.target.value)
                }
              ></input>
              <button
                onClick={(e) =>
                  this.mergeSortArrays(
                    this.state.stringArray1,
                    this.state.stringArray2
                  )
                }
              >
                test
              </button>
              <p>
                Example: Array1 = 1,2,3,1,0 Array2 = 5,8,1,4,2 || Output = 1 , 1
                , 1 , 2 , 2 , 3 , 4 , 5 , 8
              </p>
              {this.state.mergeSortArrayOutput}
            </a>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
