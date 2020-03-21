import * as React from "react";
import {Button} from "react-bootstrap";

class   Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Button>Home</Button>
                <div>
                    <p>Hello World!</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
