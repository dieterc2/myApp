import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Runt</a>
            <ul>
              <li>ajd</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

class Content extends React.Component{
    render() {
      return (
        <div>
          <h2>Contentd</h2>
          <p>here we go</p>
        </div>
      );
    }
}

export default App;
