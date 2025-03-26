import React from "react";
import UserClass from "./UserClass"; 

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("parent componentDidMount");
    }

    render() {
        console.log("parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is Namaste React About page</h2>
                <UserClass name={"First"} location={"Florida"} />
            </div>
        );
    }
}

export default About;
