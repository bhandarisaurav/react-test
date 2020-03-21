import * as React from "react";

class ApiCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos").then(results => {
            return results.json();
        }).then(data => {
                let pictures = data.map((pic) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-6">
                            <span className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src={pic.url} alt=""/>
                            </span>
                        </div>
                    );
                });
                this.setState({pictures: pictures});
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">5000 Images</h1><br/>
                    <div className="row text-center text-lg-left">
                        {this.state.pictures}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ApiCall;
