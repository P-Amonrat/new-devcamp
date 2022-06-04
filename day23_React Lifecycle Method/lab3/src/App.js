import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.log('App_constructor');
    this.state = { showComponent: true }
  }

  render() {
    console.log("App_render")
    return (
      <>
        <input type="button" value="SHOW / HIDE"
          onClick={() => this.setState({ showComponent: !this.state.showComponent })} />
        {this.state.showComponent ? <Data name="THIS IS TEST" /> : <h1>Component is HIDE</h1>}
      </>
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    console.log('constructor_start');
    this.state = { value: 1 }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps : รับค่าเพื่อไปแสดง(ทั้ง mounting และ updatting:กดปุ่ม)');
    return props
  }

  componentDidMount() {
    console.log('componentDidMount(mount แล้ว!!! เกิดแค่ครั้งเดียวก่อนอัพเดต!!)');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate : รับค่าที่อัพเดตมาจาก getDerivedStateFromProps ');
    console.log(nextState);//{value : 2, name : THIS IS TEST}
    console.log(nextProps); //{name : THIS IS TEST}
    return nextState.value < 10 ? true : false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate : รับค่าก่อน update ขึ้น DOM');
    console.log(prevProps); //{name : THIS IS TEST}
    console.log(prevState); //{value : 1, name : THIS IS TEST}
    return 'UPDATE'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log('componentDidUpdate : เกิดขึ้นหลังจากอัพเดตขึ้น DOM แล้ว');
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {
    console.log('render');
    return <>
      <h1>{this.props.name}</h1>
      <h3>{this.state.value}</h3>
      <input type="button" value="click" onClick={() => this.setState({ value: this.state.value + 1 })} />
    </>
  }
}


export default App;
