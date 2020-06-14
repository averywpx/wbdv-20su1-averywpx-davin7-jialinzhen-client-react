import React from "react";

export default class MemberListComponent extends React.Component{
    render() {
        return (
            <div className="table table-striped ">
                <h1>Club Name</h1>
                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>
                            <i className="fa fa-sort-alpha-asc"></i>
                            <i className="fa fa-th"></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="#">
                            <i className="fa  fa-file-text blue-file-icon"></i>
                            Alice
                        </a></td>
                        <td className="d-none d-lg-block"><a
                            href="#">
                            Whatever
                        </a></td>
                        <td><a
                            href="#">
                            <button className="btn btn-danger btn-sm">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </a></td>
                    </tr>

                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>

            </div>
        );
    }
}