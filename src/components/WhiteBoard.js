import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import OriginHomeComponent from "./OriginHomeComponent";
import ClubListComponent from "./home/ClubListComponent";
import ClubPageComponent from "./club-page/ClubPageComponent";
import ClubLoginComponent from "./login/ClubLoginComponent";
import RegisterComponent from "./register/RegisterComponent";
import ClubMemberListComponent from "./club-page/ClubMemberListComponent";
import LeaderWorksiteComponent from "./worksite/LeaderWorksiteComponent";
import DesignCLubHomePageComponent from "./ClubPageSetting/DesignCLubHomePageComponent";
import HomeComponent from "./home/HomeComponent";
import ProfileComponent from "./profile/ProfileComponent";


class WhiteBoard extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="container-fluid">

                    <Route
                        path='/'
                        exact={true}
                        component={OriginHomeComponent}
                    />

                    <Route
                        path='/home/:tab'
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

                    {/*<Route*/}
                    {/*    path='/club-list'*/}
                    {/*    exact={true}*/}
                    {/*    component={ClubListComponent}/>*/}

                    <Route
                        path='/club-page/:tab'
                        exact={true}
                        component={ClubPageComponent}/>

                    <Route
                        path='/profile'
                        exact={true}
                        component={ProfileComponent}/>

                    {/*<Route*/}
                    {/*    path='/member-list'*/}
                    {/*    exact={true}*/}
                    {/*    component={ClubMemberListComponent}/>*/}

                    {/*<Route*/}
                    {/*    path='/leader-worksite'*/}
                    {/*    exact={true}*/}
                    {/*    component={LeaderWorksiteComponent}/>*/}

                    <Route
                        path='/:tabs/setting'
                        exact={true}
                        component={DesignCLubHomePageComponent}/>


                </div>
            </BrowserRouter>
        )
    }
}

export default WhiteBoard