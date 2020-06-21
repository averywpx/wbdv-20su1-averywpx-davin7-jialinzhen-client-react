import React from "react";
import ClubMemberListComponent from "../club-page/ClubMemberListComponent";
import HomeAboutComponent from "./HomeAboutComponent";
import ClubListComponent from "./ClubListComponent";
import ClubTabsComponent from "./ClubTabsComponent";
import ClubTaskListComponent from "./ClubTaskListComponent";
import {Link} from "react-router-dom";
import ClubListContainer from "../../containers/ClubListContainer";

export default class HomeComponent extends React.Component{

    state = {
        userType: '',
        user: {},
        tab: this.props.match.params.tab  //introduction clublist tasks clublpage search
    }

    setTabs = (tab) => {
        //console.log(this.props.match.params.tab)
        this.props.history.push(`/home/${tab}`);
    }


    componentDidMount() {
        // courseService.findAllCourses()
        //     .then(actualArrayOfCourses =>
        //         this.setState({
        //             courses: actualArrayOfCourses
        //         }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.tab !== this.props.match.params.tab) {
            this.setState({
                tab: this.props.match.params.tab
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.userType === '' &&

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
                                Home</a>

                        </div>

                        <div className="collapse navbar-collapse col-7" id="navbarTogglerDemo03">

                            <ul className="navbar-nav mr-auto float-right">
                                <li className="nav-item active">

                                    {

                                        <div>
                                            <a
                                                className={this.state.tab === "introduction" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                                onClick={() =>
                                                    this.setTabs('introduction')}
                                                >
                                                Introduction
                                            </a>

                                        </div>
                                    }

                                </li>
                                <li className="nav-item">
                                    {
                                        <div>
                                            <a
                                                className={this.state.tab === "clublist" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                                onClick={() =>
                                                    this.setTabs('clublist')}
                                            >
                                                Club List
                                            </a>

                                        </div>
                                    }
                                </li>

                            </ul>

                        </div>

                        <div className="col-1 float-right">
                            <button className="float-left btn btn-sm btn-secondary">
                                Login
                            </button>
                        </div>
                        <div className="col-1 float-right">
                            <button className="float-right btn btn-sm btn-secondary">
                                Register
                            </button>
                        </div>
                    </nav>
                </div>
                }

                {(this.state.userType === 'member' || this.state.userType === 'president') &&
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
                                Home </a>

                        </div>

                        <div className="collapse navbar-collapse col-8" id="navbarTogglerDemo03">

                            <ul className="navbar-nav mr-auto float-right">
                                <li className="nav-item active">
                                    {
                                        <div>
                                            <a
                                                className={this.state.tab === "tasks" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                                onClick={() =>
                                                    this.setTabs('tasks')}
                                            >
                                                Tasks
                                            </a>

                                        </div>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        <div>
                                            <a
                                                className={this.state.tab === "clubpage" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                                onClick={() =>
                                                    this.setTabs('clubpage')}
                                            >
                                                Club Page
                                            </a>

                                        </div>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        <div>
                                            <a
                                                className={this.state.tab === "search" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                                onClick={() =>
                                                    this.setTabs('search')}
                                            >
                                                Search Song
                                            </a>

                                        </div>
                                    }

                                </li>

                            </ul>


                        </div>


                        <div className="col-1 float-right">

                            <Link to='/profile'>
                                <button className="float-right btn btn-lg btn-secondary">
                                    <i className="fa fa-user white-icon" aria-hidden="true"></i>
                                </button>
                            </Link>

                        </div>


                    </nav>



                </div>
                }

                {this.state.tab === 'introduction' &&
                <div>
                    <HomeAboutComponent/>
                </div>}

                {(this.state.tab === 'clublist' || this.state.tab === 'clubpage')&&
                <div>
                    {/*<ClubListComponent/>*/}
                    {/*<ClubListContainer {...match}/>*/}
                    <ClubListContainer/>
                </div>}

                {this.state.tab === 'tasks' &&
                <div>
                    <ClubTabsComponent/>
                    <ClubTaskListComponent/>
                </div>}








            </div>
        );
    }

}