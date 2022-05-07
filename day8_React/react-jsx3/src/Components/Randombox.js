import React from "react";

function RandomboxComponents() {
    let data = ['red', 'blue', 'green', 'purple', 'pink']

    let box = Math.floor(Math.random() * (400 - 200) + 200);

    function color() {
        return Math.floor(Math.random() * (5 - 0) + 0);
    }

    return (
        <div>
            <div style={{ background: data[color()], width: box, height: box }}>
                <p style={{fontSize: 30, margin: "auto"}} >Random Box</p>

            </div>
        </div>

    )

}

export default RandomboxComponents;