import React from "react";
import '../css/ClubListComponent.css'
import ClubRowComponent from "./ClubRowComponent";
import ClubService from "../../services/ClubService";
import {connect} from "react-redux";


export default class ClubListComponent extends React.Component {
    state = {
        clubs: [],
        newClubName: '',
        newClubCategory: '',
        newClubPresident: 'Someone'
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
        this.props.findAllClubs()
        console.log(this.props)
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevProps)
    //     console.log(this.props)
    //     console.log(prevProps.params !== this.props.params)
    //     if (prevProps.params !== this.props.params) {
    //         this.props.findAllClubs()
    //     }
    // }


    // componentDidMount() {
    //     ClubService.findAllClubs()
    //         .then(actualArrayOfClubs =>
    //             this.setState({
    //                 clubs: actualArrayOfClubs
    //             }))
    // }


    render() {
        return (
            <div className="container-fluid">

                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>Club Name</th>
                        <th className="d-none d-lg-block">Category</th>
                        <th>President</th>
                        <th><i className="fa fa-pencil" aria-hidden="true"></i></th>
                    </tr>
                    </thead>


                    <tbody>

                    {
                        this.props.clubs.map(club =>
                            <ClubRowComponent
                                // deleteclub={this.props.deleteclub}
                                key={club.id}
                                club={club}
                                deleteClub={this.props.deleteClub}
                                updateClub={this.props.updateClub}/>
                        )}
                    <tr>
                        <td>
                            <input
                                onChange={(event) => this.setState({
                                    newClubName: event.target.value
                                })}
                                className="form-control font-italic"
                                value={this.state.newClubName}
                                placeholder="New Name"/>
                        </td>
                        <td className="d-none d-lg-block">
                            <input
                                onChange={(event) => this.setState({
                                    newClubCategory: event.target.value
                                })}
                                className="form-control font-italic"
                                value={this.state.newClubCategory}
                                placeholder="New Category"/>
                        </td>
                        <td>
                            <input
                                className="add-margin3"
                                onChange={(event) => this.setState({
                                    newClubPresident: 'Someone'
                                })}
                                className="form-control font-italic"
                                value={this.state.newClubPresident}
                                placeholder="New Category"/>
                        </td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={() => {
                                        this.props.createClub(
                                            {
                                                name: this.state.newClubName,
                                                category: this.state.newClubCategory,
                                                president: this.state.newClubPresident,

                                            });
                                        this.props.findAllClubs();
                                    }
                                    }>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </td>

                    </tr>
                    </tbody>
                </table>


            </div>
        );
    }
}




