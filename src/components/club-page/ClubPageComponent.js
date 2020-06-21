import React from "react";
import HomeAboutComponent from "../home/HomeAboutComponent";
import ClubEventListComponent from "./ClubEventListComponent";
import ClubMemberListComponent from "./ClubMemberListComponent";
import ClubSongListComponent from "./ClubSongListComponent";
import ClubAboutComponent from "./ClubAboutComponent";
import CLubContactComponent from "./CLubContactComponent";
import EventListContainer from "../../containers/EventListContainer";


export default class ClubPageComponent extends React.Component{

    state = {
        president: false,
        tab: this.props.match.params.tab  //events member-list song-list about contact
    }

    setTabs = (tab) => {
        //console.log(this.props.match.params.tab)
        this.props.history.push(`/club-page/${tab}`);
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if (prevProps.match.params.tab !== this.props.match.params.tab) {
            this.setState({
                tab: this.props.match.params.tab
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">


                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col-3">

                        <a className="navbar-brand">
                            Club Name</a>

                    </div>

                    <div className="collapse navbar-collapse col-9" id="navbarTogglerDemo03">

                        <ul className="navbar-nav mr-auto float-right">
                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tab === "events" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('events')}
                                        >
                                            Events
                                        </a>

                                    </div>
                                }
                            </li>

                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tab === "member-list" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('member-list')}
                                        >
                                            Member List
                                        </a>

                                    </div>
                                }
                            </li>

                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tab === "song-list" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('song-list')}
                                        >
                                            Songs
                                        </a>

                                    </div>
                                }

                            </li>
                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tab === "about" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('about')}
                                        >
                                            About
                                        </a>

                                    </div>
                                }
                            </li>
                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tab === "contact" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('contact')}
                                        >
                                            Contact
                                        </a>

                                    </div>
                                }
                            </li>
                        </ul>


                    </div>


                </nav>


                {this.state.tab === 'events' &&
                <div>
                    <EventListContainer
                        match={this.props.match}
                        history={this.props.history}
                    />
                </div>}

                {this.state.tab === 'member-list' &&
                <div>
                    <ClubMemberListComponent/>
                </div>}

                {this.state.tab === 'song-list' &&
                <div>
                    <ClubSongListComponent/>
                </div>}

                {this.state.tab === 'about' &&
                <div>
                    <ClubAboutComponent/>
                </div>}

                {this.state.tab === 'contact' &&
                <div>
                    <CLubContactComponent/>
                </div>}




            </div>


        )


    }
}