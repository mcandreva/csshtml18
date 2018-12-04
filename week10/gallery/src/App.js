import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 10
    };
    this.updateClicks = this.updateClicks.bind(this);
  }

  updateClicks() {
    console.log("clicked");
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div className="App">
       <h1 onClick={this.updateClicks}>Times I have been clicked - {this.state.clicks}</h1>
      </div>
    );
  }
}

export default App;
