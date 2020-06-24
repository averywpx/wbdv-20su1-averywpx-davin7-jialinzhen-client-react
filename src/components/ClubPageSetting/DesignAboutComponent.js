import React from "react";

export default class DesignAboutComponent extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <h2>Edit Club Introduction</h2>
                <br/>
                <input
                    type="text"
                    className="form-control"
                    placeholder="fetch introduction from server"
                />
            </div>
        );
    }

}