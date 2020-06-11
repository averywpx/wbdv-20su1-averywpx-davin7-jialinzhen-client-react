import React from "react";
import '../css/ClubListComponent.css'

export default class ClubListComponent extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                        <div className="col-1">
                            <i className="fa fa-bars white-icon" aria-hidden="true"></i>
                        </div>

                        <div className="col-2">
                            <a className="navbar-brand">Club List</a>
                        </div>

                    </div>

                    <div className="col-6">
                        <input className="form-control mr-sm-2" type="search"
                               placeholder="search club"
                               aria-label="Search"/>
                    </div>
                    <div className="col-3">
                        <button className="btn white-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </nav>


                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>Title</th>
                        <th className="d-none d-lg-block">Category</th>
                        <th>President</th>
                        <th>
                            <i className="fa fa-sort-alpha-asc"></i>
                            <i className="fa fa-th"></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="../club-page/club-page.template.client.html">
                            <i className="fa  fa-file-text blue-file-icon"></i>
                            Club 1
                        </a></td>
                        <td className="d-none d-lg-block"><a
                            href="../club-page/club-page.template.client.html">
                            Computer Science
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            Someone
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            <button className="btn btn-danger btn-sm">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="../club-page/club-page.template.client.html">
                            <i className="fa  fa-file-text blue-file-icon"></i>
                            Club 2
                        </a></td>
                        <td className="d-none d-lg-block"><a
                            href="../club-page/club-page.template.client.html">
                            Computer Science
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            Someone
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            <button className="btn btn-danger btn-sm">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="../club-page/club-page.template.client.html">
                            <i className="fa  fa-file-text blue-file-icon"></i>
                            Club 3
                        </a></td>
                        <td className="d-none d-lg-block"><a
                            href="../club-page/club-page.template.client.html">
                            Computer Science
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            Someone
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            <button className="btn btn-danger btn-sm">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </a></td>
                    </tr>


                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>

                <button className="bottom-right-10px btn btn-danger">
                    <i className="fa fa-plus"></i>
                </button>

            </div>
        );
    }
}
