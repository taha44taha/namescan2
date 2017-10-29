import React from 'react';
import pubsub from 'pubsub-js';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';

import DashboardRun from './Dashboard.run';
import RippleRun from '../Ripple/Ripple.run';

class Dashboard extends React.Component {

    componentWillMount() {
        pubsub.publish('setPageTitle', this.constructor.name);
    }

    componentDidMount() {
        DashboardRun();
        RippleRun();
    }

    render() {
        return (
            <section>
                <div className="content-heading bg-white">
                    <Row>
                        <Col sm={9}>
                            <h4 className="m0 text-thin">
                            <span data-localize="WELCOME">Welcome to </span>
                            Centric dashboard</h4><small>Bootstrap admin dashboard template</small>
                        </Col>
                        <Col sm={3} className="text-right hidden-xs">
                            <button type="button" className="mt-sm btn btn-labeled btn-default ripple">Apps<span className="btn-label btn-label-right"><i className="ion-plus-round"></i></span></button>
                        </Col>
                    </Row>
                </div>                
            </section>
        );
    }
}

export default Dashboard;
