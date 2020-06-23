import React from "react";
import {Link} from "react-router-dom";


export default class ClubMemberListComponent extends React.Component {

    state = {
        members: []
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/users`)
            .then(response => response.json())
            .then(userList => {
                if (userList) {
                    this.setState({
                        users: userList,
                    })
                }
            })
    }


    render() {
        return (
            <div className="table table-striped ">
                {console.log(this.state.users)}
                <h2>Members</h2>
                <ul className="list-group">

                    {this.state.users.map(user =>
                        <li className="list-group-item">
                            <Link to={`/profile/${this.user.id}`}>{user.username}</Link>
                        </li>
                    )


                    }
                </ul>

            </div>
        );
    }
}