import React from "react";
import {Link} from "react-router-dom";

export default class ClubRowComponent extends React.Component {

    state = {
        editing: false,
        club: this.props.club
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

    render() {
        return (

            <tr>
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
                    <a
                    href="../club-page/club-page.template.client.html">
                    Someone
                </a>

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
                        !this.state.editing &&
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