/*!
 *
 * Centric - Bootstrap Admin App + ReactJS
 *
 * Version: 1.8
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history'

import Core from './components/Core/Core';
import Bootstrap from './components/Bootstrap/Bootstrap';
import Common from './components/Common/Common';
import Colors from './components/Colors/Colors';
import FloatButton from './components/FloatButton/FloatButton';
import Translate from './components/Translate/Translate';

import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Forms from './components/Forms/Forms';
import Elements from './components/Elements/Elements';
import Tables from './components/Tables/Tables';
import Layouts from './components/Layouts/Layouts';

import Maps from './components/Maps/Maps';
import Pages from './components/Pages/Pages';
import User from './components/User/User';
import Utils from './components/Utils/Utils';

// ----- NameScan -----
import Home from './components/NameScan/Home';
import Quickcheck from './components/NameScan/Quickcheck'
import ScanHistory from './components/NameScan/Quickcheck/ScanHistory'
import Profile from './components/NameScan/PersonScan/Profile'

Translate();

$(() => {
    // prevent page reload when using dummy anchors
    $(document).on('click', '[href=""],[href="#"]', () => {
        return false;
    })

    // Support for float labels on inputs
    $(document).on('change', '.mda-form-control > input', function() {
        $(this)[this.value.length ? 'addClass' : 'removeClass']('has-value');
    });

})

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })

// Declare routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Core}>
            {/* Default route*/}
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />

            <Route path="quickcheck" component={Quickcheck}>
              <Route path="scanhistory" component={ScanHistory} />
            </Route>
            <Route path="personscan">
              <Route path="profile" component={Profile} />
            </Route>

        </Route>

        {/* User Pages */}
        <Route path="/" component={User.Layout}>
            <Route path="login" component={User.Login}/>
            <Route path="signup" component={User.Signup}/>
            <Route path="recover" component={User.Recover}/>
            <Route path="lock" component={User.Lock}/>
        </Route>

    </Router>,
    document.getElementById('app')
);

// Auto close sidebar on route changes
browserHistory.listen(function(ev) {
  $('.sidebar-visible').removeClass('sidebar-visible');
});
