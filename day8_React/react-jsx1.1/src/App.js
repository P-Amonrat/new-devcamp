import './App.css';
import React from 'react';
import HeaderComponent from './Components/Header';
import ContentComponent from './Components/Content';
import FooterComponent from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }

}

export default App;
