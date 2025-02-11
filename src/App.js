import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Komponen tambahan untuk header
const Header = () => {
  return (
    <div className="Header">
      <h2>Welcome to My React App</h2>
      <p>Explore the features and enjoy the journey!</p>
    </div>
  );
};

// Komponen tombol interaktif
class InteractiveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Click Me!",
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      buttonText: this.state.isClicked ? "Click Me!" : "You Clicked Me!",
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <button className="interactive-button" onClick={this.handleClick}>
        {this.state.buttonText}
      </button>
    );
  }
}

// Komponen footer
const Footer = () => {
  return (
    <div className="Footer">
      <p>React is Awesome! Learn and build amazing things.</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Menambahkan Header komponen */}
        <Header />
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {/* Menambahkan bagian intro */}
        <div className="App-intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <p>Try clicking the button below!</p>
          
          {/* Menambahkan komponen interaktif */}
          <InteractiveButton />
        </div>

        {/* Menambahkan Footer komponen */}
        <Footer />
      </div>
    );
  }
}

export default App;
