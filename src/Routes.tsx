import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { Menu, Nav } from './components/Menu';
import { Content } from './components/Content';
import { MyApps } from './pages/MyApps'
import { Reports } from './pages/Reports';
import { Docs } from './pages/Docs';
import { Download } from './pages/Download';
import { MyProfile } from './pages/MyProfile';


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
      <Route path='/my_apps'><MyApps /></Route>
      <Route path='/reports'><Reports /></Route>
      <Route path='/docs'><Docs /></Route>
      <Route path='/download'><Download /></Route>
      <Route path='/my_profile'><MyProfile /></Route>
    </Content>
  </Router>
)
