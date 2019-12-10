import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Menu } from './components/Menu/Menu';
import { Nav } from './components/Menu/Nav';
import { Content } from './components/Content/Content';

const MyApps = () => { return <h2>MyApps</h2> }
const Reports = () => { return <h2>Reports</h2> }
const Docs = () => { return <h2>Docs</h2> }
const Download = () => { return <h2>Download</h2> }
const MyProfile = () => { return <h2>MyProfile</h2> }

export const Routes: React.FC = () => (
  <Router>
    <Redirect exact from="/" to="/my_apps" />
    <Menu>
      <Nav to='/my_apps' icon='window-maximize' label='My Apps' />
      <Nav to='/reports' icon='pie-chart' label='Reports' />
      <Nav to='/docs' icon='file' label='Docs' />
      <Nav to='/download' icon='download' label='Download' />
      <Nav to='/my_profile' icon='user' label='My Profile' />
    </Menu>

    <Content>
      <Switch>
        <Route path='/my_apps'><MyApps /></Route>
        <Route path='/reports'><Reports /></Route>
        <Route path='/docs'><Docs /></Route>
        <Route path='/download'><Download /></Route>
        <Route path='/my_profile'><MyProfile /></Route>
      </Switch>
    </Content>
  </Router>
)
