import * as React from "react";
import {Button} from "react-bootstrap";

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Button>Gallery</Button>
                <div>
                    <p>Hello World!</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;
