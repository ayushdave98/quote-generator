import React from 'react';
import logo from './logo.svg';
import Button from './Button.js';
import './App.css';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      error: null,
      isLoading: true
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }
  

  fetchQuote() {
    //URL from which we are fetching data
    //fetch("https://api.quotable.io/random")
    fetch("http://quotes.stormconsultancy.co.uk/random.json")

    //We get the API response and receive data in JSON format
    .then(response => response.json())

    //This function uses that data to update the user states
    .then(data =>
      this.setState( {
        quote: data.quote,
        author: data.author,
        isLoading: false,
      })
      )

    //Catch errors and update app if necessary
    .catch(error => this.setState({error, isLoading: false }));
  }

  render() {
    return (
      <div id="main">
        <h1> Random Technical Quote Generator </h1>
        <hr id="line"/>
          <div id="quote-box">
            <p id="quote">"{this.state.quote}"</p>
            <p id="author">~{this.state.author}</p>
          </div>
            <div id="buttons">
              <button id="new-button" onClick={this.fetchQuote}>New Quote!</button>
              <a href={'https://twitter.com/intent/tweet?text="'+this.state.quote+'" ~'+this.state.author} target="_blank"> <button id="share-button"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/> Share Quote!</button></a>
            </div>
      </div>
      );
  }
}


export default App;
