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
    fetch(`https://api.quotable.io/random`)
    .then((response) => {
        if(response.status === 200) {
          console.log(response);
          return response.json();
        }
    }).then(data => {
      console.log(data)
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
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">{this.state.quote}</div>
          <div id="author">{this.state.author}</div>
          <div id="new-quote">
          <a href="#" id="tweet-quote"></a></div>
        </div>

      </div>
    );
  }
}

export default App;
