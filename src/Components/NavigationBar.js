import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Test from "./Test/Test";
import Gallery from "./Gallery/Gallery";
import ApiCall from "./ApiCall/ApiCall";
import Home from "./Home/Home";
import Login from "./Login/Login";


class NavigationBar extends React.Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-dark navbar-expand bg-dark ">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" href="#">React Test</Link>
                        <button className="navbar-toggler" type="button"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home <span
                                        className="sr-only">(current)</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/test" className="nav-link">Test Component</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/gallery" className="nav-link">View Gallery</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/api-call" className="nav-link">5000 Images</Link>
                                </li>

                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <Link to="/login">
                                    <button className="btn btn-outline-success my-2 my-sm-0">User Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/test">
                        <Test/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/api-call">
                        <ApiCall/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default NavigationBar;
