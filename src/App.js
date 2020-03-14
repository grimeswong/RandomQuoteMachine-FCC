import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      quote: "",
      author: ""
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    fetch(`https://api.quotable.io/random`)
    .then((response) => {
        if(response.status === 200) {
          return response.json();
        }
    }).then(data => {
      this.setState({
        quote: data.content,
        author: data.author
      })
    })
    .catch((err) => {
      console.log(`Error to fetch: ${err}`);
    });
  }

  render() {
    let tweetLink = `https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">{this.state.quote}</div>
          <div id="author">{this.state.author}</div>
          <button id="new-quote" onClick={this.getQuote}>Get New Quote</button>
          <a href={tweetLink} id="tweet-quote" target="_blank">Tweet Quote</a>

        </div>

      </div>
    );
  }
}

export default App;
