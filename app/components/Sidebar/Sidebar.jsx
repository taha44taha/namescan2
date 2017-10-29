import React from 'react';
import { Link } from 'react-router'

import './Sidebar.scss';

import SidebarRun from './Sidebar.run';
import {initSvgReplace} from '../Utils/Utils';

class Sidebar extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    SidebarRun();
    initSvgReplace();
  }

  routeActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    for (let p in paths) {
      if (this.context.router.isActive(''+paths[p]) === true)
        return 'active';
    }
    return '';
  }

  render() {
    return (
      <aside className="sidebar-container">
        <div className="sidebar-header">
          <div className="pull-right pt-lg text-muted hidden"><em className="ion-close-round"></em></div>
          <a href="#" className="sidebar-header-logo"><img src="img/logo.png" data-svg-replace="img/logo.svg" alt="Logo" /><span className="sidebar-header-logo-text">Centric</span></a>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-toolbar text-center">
            <a href=""><img src="img/user/01.jpg" alt="Profile" className="img-circle thumb64" /></a>
            <div className="mt">Welcome, Willie Webb</div>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li className={this.routeActive('/home') ? 'active':''}>
                <Link to="home" className="ripple">
                  <span className="nav-icon">
                  <img src="" data-svg-replace="img/icons/aperture.svg" alt="MenuItem" className="hidden" /></span>
                  <span>Home</span>
                </Link>
              </li>
              <li className={this.routeActive(['personscan/profile'])}>
                <a href="#" className="ripple">
                  <span className="pull-right nav-caret"><em className="ion-ios-arrow-right"></em></span><span className="pull-right nav-label"></span><span className="nav-icon">
                  <img src="" data-svg-replace="img/icons/connection-bars.svg" alt="MenuItem" className="hidden" /></span>
                  <span>PersonScan</span>
                </a>
                <ul className="sidebar-subnav">
                  <li className={this.routeActive(['charts/flot'])}>
                    <Link to='/personscan/profile' className="ripple">
                    <span className="pull-right nav-label"></span><span>Profile</span></Link>
                  </li>                  
                </ul>
              </li>
              <li>
                <a href="#" className="ripple">
                  <span className="pull-right nav-caret"><em className="ion-ios-arrow-right"></em></span><span className="pull-right nav-label"></span><span className="nav-icon">
                  <img src="" data-svg-replace="img/icons/person-stalker.svg" alt="MenuItem" className="hidden" /></span>
                  <span>User</span>
                </a>
                <ul id="user" className="sidebar-subnav">
                    <li>
                        <Link to="login" className="ripple">
                            <span className="pull-right nav-label"></span><span>Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="signup" className="ripple">
                            <span className="pull-right nav-label"></span><span>Signup</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="lock" className="ripple">
                            <span className="pull-right nav-label"></span><span>Lock</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="recover" className="ripple">
                            <span className="pull-right nav-label"></span><span>Recover</span>
                        </Link>
                    </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

Sidebar.contextTypes = {
    router: React.PropTypes.object
};

export default Sidebar;
