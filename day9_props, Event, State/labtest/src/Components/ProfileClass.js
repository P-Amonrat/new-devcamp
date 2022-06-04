import React from "react";

class ProfileClassComp extends React.Component {
    render() {
        return (<><p>Firstname : {this.props.firstname}</p>
            <p>Lastname : {this.props.lastname}</p>
            <div>{this.props.children}</div></>)
    }
}

export default ProfileClassComp;