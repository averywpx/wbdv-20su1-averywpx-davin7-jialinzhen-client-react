import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile} from "../../services/UserServer";

export default class ClubRowComponent extends React.Component {

    state = {
        editing: false,
        club: this.props.club,
        isPresident: false,
        user: {},
        username: ''
        // newClubTitle: 'New Club',
        // editingClub: {}
    }

    updateClubName = (newName) =>
        this.setState(prevState => ({
            club: {
                ...prevState.club,
                name: newName
            }
        }))

    updateClubCategory = (newCategory) =>
        this.setState(prevState => ({
            club: {
                ...prevState.club,
                category: newCategory
            }
        }))

    updateClubPresident = (newPresident) =>
        this.setState(prevState => ({
            club: {
                ...prevState.club,
                president: newPresident
            }
        }))

    componentDidMount() {
        fetchProfile()
            .catch(e => {
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({
                        user: currentUser,
                        username: currentUser.username,
                        isPresident: this.props.club.president === currentUser.username
                    })
                }
            })
    }

// {console.log(this.props.user.username === this.props.club.president)}

    render() {
        return (

            <tr>
                {/*{console.log(this.state.username)}*/}
                {/*{console.log(this.state.isPresident)}*/}
                <td>
                    {
                        !this.state.editing &&
                        <Link to={`/club-page/${this.state.club.id}/events`}>
                            {this.state.club.name}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => this.updateClubName(event.target.value)}
                            defaultValue={this.state.club.name}/>
                    }
                </td>
                <td className="d-none d-lg-block">
                    {
                        !this.state.editing &&
                        <Link to={`/club-page/${this.state.club.id}/events`}>
                            {this.state.club.category}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => this.updateClubCategory(event.target.value)}
                            defaultValue={this.state.club.category}/>
                    }

                </td>
                <td>
                    {/*<a*/}
                    {/*href="../club-page/club-page.template.client.html">*/}
                    {/*    defaultValue={this.state.club.president}*/}

                        {
                            !this.state.editing &&
                            <Link to={`/club-page/${this.state.club.id}/events`}>
                                {this.props.club.president}
                            </Link>
                        }
                        {
                            this.state.editing &&
                            <input
                                className="form-control"
                                onChange={(event) => this.updateClubPresident(event.target.value)}
                                defaultValue={this.props.club.president}/>
                        }
                {/*</a>*/}

                {/*    {*/}
                {/*        !this.state.editing &&*/}
                {/*        <Link to={`/club-page/${this.state.club.id}/events`}>*/}
                {/*            {this.state.club.president}*/}
                {/*        </Link>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        this.state.editing &&*/}
                {/*        <input*/}
                {/*            className="form-control"*/}

                {/*            value={this.state.club.president}/>*/}
                {/*    }*/}
                </td>
                <td>
                    {
                        !this.state.editing && this.state.isPresident &&
                        // (this.props.user.username === this.props.club.president) &&
                        <button
                            className="btn btn-primary"
                            onClick={() => this.setState({editing: true})}>
                            Edit
                        </button>
                    }
                    {this.state.editing &&
                    <div className={`nav-link active`}>

                        <button className="btn btn-success add-margin3"
                                onClick={() => {
                                    this.props.updateClub(this.state.club.id, this.state.club)
                                    this.setState({editing: false})
                                }}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger"
                                onClick={() => this.props.deleteClub(this.state.club.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </div>
                    }
                </td>
            </tr>
        );
    }

}

// in onClick: this.props.updateClub(this.state.editingClub._id, this.state.editingClub)
// onClick={() => this.props.deleteClub(Club._id)}
// update name: onChange={(event) => this.updateCourseTitle(event.target.value)}