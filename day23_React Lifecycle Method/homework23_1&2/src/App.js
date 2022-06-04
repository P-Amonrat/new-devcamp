import React from "react";

class App extends React.Component {
    constructor() {
        super();
        console.log("constructor")
        let name = prompt("Please input your name!!")
        this.state = {
            username: name ? name : "Unknow User!!",
            history: [],
            date: new Date()
        }
        console.log(name)
        console.log(this.state.history)
        console.log(this.state.Date)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state)
        console.log(nextState)

        if (nextState.username === this.state.username) {
            alert("ชื่อซ้ำ!!")
        }
        else if (nextState.username === '') {
            alert("คุณไม่ได้กรอกชื่อ!!")
        }
        else {
            return (nextState)
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.username}</h1>
                <input type="text" id="ip"></input>
                <button
                    onClick={() => {
                        let name = document.getElementById("ip").value;
                        this.setState({
                            username: name ? name : "Unknow User!!",
                            history: [...this.state.history, { current: [this.state.username], next: name ? name : "Unknown User!!" }]
                        })
                    }}>
                    Chang Your Name
                </button>
                <ul>
                    {this.state.history.map(x => {
                        return (
                            <>
                                <li>
                                    <b>Name:</b> {x.current} <br></br>
                                    <b>New Name:</b> {x.next} <br></br>
                                    <b>Time:</b> {this.state.date.toLocaleTimeString()} <br></br>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </>
        )

    }
}



export default App;

