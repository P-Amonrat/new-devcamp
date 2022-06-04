import React, { useState, createContext, useContext, useRef } from 'react';
// import './form.css';

function FormComp() {

    const firstname = useRef();
    const lastname = useRef();
    const gender = useRef();

    const [maleList, setMaleList] = useState([]);
    const [femaleList, setFemaleList] = useState([]);
    const [naList, setNAList] = useState([]);


    function onClickFunc() {
        console.log(firstname.current.value);
        console.log(lastname.current.value);
        console.log(gender.current.value);

        if (gender.current.value === "male") {
            setMaleList(`${firstname.current.value}  ${lastname.current.value}`)
            let maleGender = [...maleList]
            maleGender.push(` ${firstname.current.value}  ${lastname.current.value},`)
            setMaleList(maleGender);
        }
        else if (gender.current.value === "female") {
            setFemaleList(`${firstname.current.value}  ${lastname.current.value}`)
            let femaleGender = [...femaleList]
            femaleGender.push(` ${firstname.current.value}  ${lastname.current.value},`)
            setMaleList(femaleGender);
        }
        else {
            setNAList(`${firstname.current.value}  ${lastname.current.value}`)
            let naGender = [...naList]
            naGender.push(` ${firstname.current.value}  ${lastname.current.value},`)
            setMaleList(naGender);
        }
        console.log(maleList.length)
    }

    return (
        <div>
            <div>
                <h4>First Name : <input type="text" ref={firstname} /></h4>
                <h4>Last Name : <input type="text" ref={lastname} /></h4>
                <h4 for="cars">Gender :
                    <select ref={gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="na">NA</option>
                    </select>
                </h4>
                <input type="button" value="Submit" onClick={onClickFunc} />
                <hr />
            </div>

            <div className='list'>
                <h2>MaleList : </h2> <ol>{maleList}</ol>
                <p>Total: {maleList.length}</p>

                <h2>FemaleList : </h2> <ol>{femaleList}</ol>
                <p>Total: {femaleList.length}</p>

                <h2>NaList : </h2><ol>{naList}</ol>
                <p>Total: {naList.length}</p>
            </div>
        </div>
    )

}

export default FormComp;