import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

// COMPONENT IMPORTS FOR ROUTING
import Dashboard from './components/Dashboard/Dashboard';
import Messages from './components/Messages/Messages';
import Buy from './components/Buy/Buy';
import Sell from './components/Sell/Sell';
import BrowseAll from './components/BrowseAll/BrowseAll';


export default (
    <Switch>
        {/*<Route component={ Dashboard } exact path='/dashboard' />*/}
        <Route name="Messages" component={ Messages } path="/home/messages" />
        <Route name="Buy" component={ Buy } path="/home/buy" />
        <Route name="Sell" component={ Sell } path="/home/sell" />
        <Route name="Browse-All" component={ BrowseAll } path="/home/browse-all" />

        {/*<Route component={ ContenderProfile } path="/profile/:id" />*/}
    </Switch>
)