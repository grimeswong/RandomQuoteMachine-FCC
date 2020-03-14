import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <div id="new-quote">
          <a href="#" id="tweet-quote"></a></div>
        </div>

      </div>
    );
  }
}

export default App;
