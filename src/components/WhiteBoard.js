import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ClubListComponent from "./club-list/ClubListComponent";
import ClubHomePageComponent from "./club-home-page/ClubHomePageComponent";
import ClubLoginComponent from "./login/ClubLoginComponent";
import RegisterComponent from "./register/RegisterComponent";
import MemberListComponent from "./member-list/MemberListComponent";


class WhiteBoard extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="container-fluid">

                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}
                    />

                    <Route
                        path='/login'
                        exact={true}
                        component={ClubLoginComponent}/>

                    <Route
                        path='/register'
                        exact={true}
                        component={RegisterComponent}/>

                    <Route
                        path='/club-list'
                        exact={true}
                        component={ClubListComponent}/>

                    <Route
                        path='/club-home-page'
                        exact={true}
                        component={ClubHomePageComponent}/>

                    <Route
                        path='/member-list'
                        exact={true}
                        component={MemberListComponent}/>


                </div>
            </BrowserRouter>
        )
    }
}

export default WhiteBoard