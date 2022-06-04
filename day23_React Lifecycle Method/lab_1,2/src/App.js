import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <Data name="THIS IS TEST" />
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { value: 1 }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return props
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.value < 10 ? true : false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 'UPDATE'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    console.log(this.state);
    return <>
            <h1>{this.props.name}</h1>
              <h3>{this.state.value}</h3>
              <input type="button" value="click" onClick={() => this.setState({ value: this.state.value + 1})} />
          </>
  }
}


export default App;
