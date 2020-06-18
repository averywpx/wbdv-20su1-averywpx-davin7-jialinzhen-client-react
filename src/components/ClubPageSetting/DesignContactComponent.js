import React from "react";

export default class DesignContactComponent extends React.Component {
    state = {
        flag: true
    }

//email phone number, twitter, address
    render() {

        return (
            <div>
            {this.state.flag === true &&
        <div className="contain-fluid">
            <div className="row">
                <label htmlFor="email"> Email </label>
                <input className="form-control"
                       type="email"
                       id="email"
                       placeholder="example@gmail.com"/>
            </div>

        </div>
    }
            </div>
        );
    }

}