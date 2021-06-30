import React, { Component } from 'react'
import '/styles/admin/AdminDashboard.css';

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
export default class AdminDashboard extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }

        this.go=this.go.bind(this);


    }
    go(){
        this.props.history.push('go/');

    }
    render() {
        return (

            <div >
                <div>
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* Brand Logo */}

                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">

                                </div>
                                <div className="info">
                                    <a className="d-block">AF Conference</a>
                                </div>
                            </div>
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                                    <li className="nav-item has-treeview menu-open">
                                        <a href="#" className="nav-link active">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p>
                                                Conference
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a  className="nav-link active">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Workshops</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a  className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Dates</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a  className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Webinars</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-th" />
                                            <p>
                                                Recent Conferences
                                                <span className="right badge badge-danger">New</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a  className="nav-link">
                                            <i className="nav-icon fas fa-copy" />
                                            <p>
                                                New Conferences
                                                <i className="fas fa-angle-left right" />
                                                <span className="badge badge-info right">6</span>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/layout/top-nav.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Top Navigation</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/boxed.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Boxed</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Fixed Sidebar</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Fixed Navbar</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/fixed-footer.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Fixed Footer</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Collapsed Sidebar</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-chart-pie" />
                                            <p>
                                                Requests
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/charts/chartjs.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>ChartJS</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/charts/flot.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Flot</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/charts/inline.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Inline</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-tree" />
                                            <p>
                                                Approvals
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/UI/general.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>General</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/icons.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Icons</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/buttons.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Buttons</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/sliders.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Sliders</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/modals.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Modals &amp; Alerts</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/navbar.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Navbar &amp; Tabs</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/timeline.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Timeline</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/UI/ribbons.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Ribbons</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-edit" />
                                            <p>
                                               Pending
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/forms/general.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>General Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/advanced.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Advanced Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/editors.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Editors</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-table" />
                                            <p>
                                                Rejected
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/tables/simple.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Simple Tables</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/tables/data.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>DataTables</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>jsGrid</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-header">More</li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="nav-icon far fa-calendar-alt" />
                                            <p>
                                                Calendar
                                                <span className="badge badge-info right">2</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-header">Exit</li>
                                    <li className="nav-item">

                                    </li>





                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                </div>


                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Admin Dashboard</h1>
                                    <br></br>
                                    <button className="btn btn-primary" onClick={this.go}>Admin Requests</button>
                                </div>{/* /.col */}

                                <div className="col-sm-6">

                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">


                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>06</h3>
                                            <p>New Conferences</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                            <p>Active conferences</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>65</h3>
                                            <p>Unique Visitors</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                            </div>
                        </div>
                        {/* TO DO List */}
                        <div >
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="ion ion-clipboard mr-1" />
                                    Upcoming Conferences
                                </h3>
                                <div className="card-tools">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item"><a href="#" className="page-link">«</a></li>
                                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                                        <li className="page-item"><a href="#" className="page-link">»</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <ul className="todo-list" data-widget="todo-list">
                                    <li>
                                        {/* drag handle */}
                                        <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        {/* checkbox */}
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                                            <label htmlFor="todoCheck1" />
                                        </div>
                                        {/* todo text */}
                                        <span className="text">Introduction to Application Frameworks</span>
                                        {/* Emphasis label */}
                                        <small className="badge badge-danger"><i className="far fa-clock" /> 2 Days</small>
                                        {/* General tools such as edit or delete*/}
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                                            <label htmlFor="todoCheck2" />
                                        </div>
                                        <span className="text">MERN Stack Webinar</span>
                                        <small className="badge badge-info"><i className="far fa-clock" /> 4 Days</small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                                            <label htmlFor="todoCheck3" />
                                        </div>
                                        <span className="text">Koa js Webinar</span>
                                        <small className="badge badge-warning"><i className="far fa-clock" /> 6 Days</small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                                            <label htmlFor="todoCheck4" />
                                        </div>
                                        <span className="text">Spring boot webinar</span>
                                        <small className="badge badge-success"><i className="far fa-clock" /> 6 days</small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                                            <label htmlFor="todoCheck5" />
                                        </div>
                                        <span className="text">React js Workshop</span>
                                        <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                                        <div className="icheck-primary d-inline ml-2">
                                            <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                                            <label htmlFor="todoCheck6" />
                                        </div>
                                        <span className="text">Vue js </span>
                                        <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                                        <div className="tools">
                                            <i className="fas fa-edit" />
                                            <i className="fas fa-trash-o" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer clearfix">

                            </div>
                        </div>
                        {/* /.card */}


                    </section>
                    {/* /.content */}

                </div>

            </div>


        )

    }
}