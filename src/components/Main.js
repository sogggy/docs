import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css';
import { Row, Col } from 'react-bootstrap'
import TopBar from './TopBar'
import SideBar from './SideBar';
import RenderMarkdown from './RenderMarkdown'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as routesJSON from '../data/routes.json'
import * as topbarHeadersJSON from '../data/topbarheaders.json'
import * as sideBarItemsJSON from '../data/sidebaritems.json'
import * as topbarlinksJSON from '../data/topbarlinks.json'

const routes = routesJSON.default
const topbarHeaders = topbarHeadersJSON.default
const sideBarItems = sideBarItemsJSON.default
const topbarLinks = topbarlinksJSON.default

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideBarItems: 
      {
        url: '/',
        sideLinks: []
      }, 
      currentLocation: ''
    }
    this.handleClickLink = this.handleClickLink.bind(this)
  }

  handleClickLink(location, file) {
    const targetSideBar = sideBarItems.filter((sidebar) => (
      sidebar.url === location
    ))
    if (targetSideBar.length === 0 || location === this.state.currentLocation) {

    } else {
      this.setState({
        sideBarItems: targetSideBar[0],
        currentLocation: targetSideBar[0].url
      })
    }
  }

  render() {
    return (
      <Router>
        <TopBar topbarDropDownHeaders={topbarHeaders} topbarLinks={topbarLinks}></TopBar>
          <Row>
            <Col xs={9}>
              <Switch>
                {routes.map((route, index) => (
                  <Route 
                    key={index}
                    path={route.path}
                    exact
                    component={() => (<RenderMarkdown file={route.path} components={route.component} onRender={this.handleClickLink}/>)}
                  />
                ))}
              </Switch>
            </Col>
            <Col xs={3}>
              <SideBar items={this.state.sideBarItems}/>
            </Col>
          </Row>
      </Router>
    );
  }
}

export default Main;
