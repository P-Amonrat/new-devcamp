import React, { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios';

export let UserContext = createContext(null);

function UserContextProvider (props){
    const [isModalVisibleCreate, setIsModalVisibleCreate] = useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);

    const [isLogin, setIsLogin] = useState(false); //ยังไม่ login
    let token = localStorage.getItem("token")

    const [data, setData] = useState([]);
    useEffect(() => {
      const userData = async () => {
        let response = await axios('/api/product');
        console.log(response);
        let information = response.data
        console.log(information)
        setData(information);
      }
      userData();
    }, [])

    return (
        <UserContext.Provider value={{isModalVisibleEdit, setIsModalVisibleEdit, isModalVisibleCreate, 
        setIsModalVisibleCreate, data, setData, isLogin, setIsLogin, token}}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;
