import logo from './logo.svg';
import './App.css';
import React, { useState, createContext, useContext } from 'react'

let ProfileContext = createContext();

function App() {
  return (
    <ProfileContextProvider>
      <InformationPage />
      <ChangeValuePage />
      <Data />
    </ProfileContextProvider>
  );
}

function ProfileContextProvider(props) {
  console.log(props);
  let [firstname, setFirstName] = useState('Steve');
  let [lastname, setLastname] = useState('Roger');
  let setName = (firstname, lastname) => {
    setFirstName(firstname);
    setLastname(lastname)
  };
  return (
    <ProfileContext.Provider value={{ firstname, lastname, setName }}>
      {props.children}
    </ProfileContext.Provider>
  )
}

function InformationPage() {
  let profile = useContext(ProfileContext);
  return (
    <>
      <h1>Profile</h1>
      <h3>First Name: {profile.firstname}</h3>
      <h3>Last Name: {profile.lastname}</h3>
    </>
  )
}

function ChangeValuePage() {
  let profile = useContext(ProfileContext);
  return (
    <input type='button' value='Set Ironman' onClick={() => profile.setName('Tony', 'Stark')} />
  )
}

function Data() {
  let profile = useContext(ProfileContext);
  return (<h2>First Name!!! : {profile.firstname}</h2>)
}


export default App;
