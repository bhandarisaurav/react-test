import * as React from "react";
import {Button} from "react-bootstrap";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Button>Test</Button>
                <div>
                    <p>Hello World!</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Test;
