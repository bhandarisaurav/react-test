import * as React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron container-fluid">
                    <div className="container">
                        <h1 className="display-3">Hello, world!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large
                            callout called a
                            jumbotron and three supporting pieces of content. Use it as a starting point to create
                            something more unique.</p>
                        <p><Link className="btn btn-primary btn-lg" to="#" role="button">Learn more &raquo;</Link></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
                                magna mollis euismod. Donec
                                sed odio dui. </p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details &raquo;</Link></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
                                magna mollis euismod. Donec
                                sed odio dui. </p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details &raquo;</Link></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Vestibulum id ligula porta
                                felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum
                                massa justo sit amet risus.</p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details &raquo;</Link></p>
                        </div>
                    </div>

                    <hr/>

                </div>
                {/*Container*/}

            </React.Fragment>
        );
    }
}

export default Home;
