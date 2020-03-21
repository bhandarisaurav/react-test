import * as React from "react";
import {Link} from "react-router-dom";

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1><br/>

                    <div className="row text-center text-lg-left">

                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/M185_qYH8vg/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/sesveuG_rNo/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/2gYsZUmockw/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/EMSDtjVHdQ8/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/8mUEy0ABdNE/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/aJeH0KcFkuc/400x300" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <Link to="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;
