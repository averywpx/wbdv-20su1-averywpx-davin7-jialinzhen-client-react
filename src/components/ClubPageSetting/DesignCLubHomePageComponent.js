import React from "react";
import ClubMemberListComponent from "../club-page/ClubMemberListComponent";
import DesignAboutComponent from "./DesignAboutComponent";
import {Link} from "react-router-dom";
import DesignContactComponent from "./DesignContactComponent";
import '../css/DesignClubHomPageComponent.css'


//todo: use a container instead?

export default class DesignCLubHomePageComponent extends React.Component{
    state = {
        tabs: this.props.match.params.tabs,
    }

    setTabs = (tabs) => {
        this.props.history.push(`/${tabs}/setting`);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.tabs !== this.props.match.params.tabs) {
            this.setState({
                tabs: this.props.match.params.tabs
            })
        }
    }


    render() {

        return (
            <div>
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
                            Club Setting</a>

                    </div>

                    <div className="collapse navbar-collapse col-8" id="navbarTogglerDemo03">

                        <ul className="navbar-nav mr-auto float-right">
                            <li className="nav-item active">
                                {
                                    <div>
                                        <a
                                            className={this.state.tabs === "member-list" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('member-list', true)}>
                                            Member List
                                        </a>
                                    </div>
                                }


                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CLub Calendar </a>
                            </li>
                            <li className="nav-item">
                                {

                                    <div>
                                        <a
                                            className={this.state.tabs === "about" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('about',true)}>
                                            About
                                        </a>

                                    </div>
                                }
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                                {
                                    <div>
                                        <a
                                            className={this.state.tabs === "contact" ? 'nav-link active' : 'nav-link mouse-pointer'}
                                            onClick={() =>
                                                this.setTabs('contact')}>
                                            Contact
                                        </a>
                                    </div>
                                }

                            </li>
                        </ul>


                    </div>


                    <div className="col-1 float-right">
                        <Link to={`/leader-worksite`}>Back to Worksite</Link>
                    </div>


                </nav>

                {this.state.tabs === 'member-list' &&
                <div>
                    <ClubMemberListComponent/>
                </div>}

                {this.state.tabs === 'about' &&
                <div>
                    <DesignAboutComponent/>
                </div>}

                {this.state.tabs === 'contact' &&
                <div>
                    <DesignContactComponent/>
                </div>}





            </div>
        );
    }

}