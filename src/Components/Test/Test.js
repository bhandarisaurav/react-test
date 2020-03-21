import * as React from "react";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: ['JAVA', 'PYTHON', 'GRAILS', 'GO-LANG'],
            students: [
                {id: 11, name: 'Dr Nice'},
                {id: 12, name: 'Narco'},
                {id: 13, name: 'Bombasto'},
                {id: 14, name: 'Celeritas'},
                {id: 15, name: 'Magneta'},
                {id: 16, name: 'RubberMan'},
                {id: 17, name: 'Dynama'},
                {id: 18, name: 'Dr IQ'},
                {id: 19, name: 'Magma'},
                {id: 20, name: 'Tornado'}
            ],
            userList: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(results => {
            return results.json();
        }).then(results => {
            let userList = results.map((data) => {
                console.log(data);
                return (
                    <tr>
                        <td>{data.userId}</td>
                        <td>{data.title}</td>
                    </tr>
                );
            });
            this.setState({userList: userList});
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid pl-5 pr-5 mt-4">
                    <ul className="row jumbotron font-weight-bold">
                        {this.state.courses.map((course) => (
                            <li className="col-md-3">{course}</li>
                        ))}
                    </ul>

                    <table className="table table-striped table-bordered table-sm table-dark">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.students.map((student) => (
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.userList
                        }
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    }
}

export default Test;
