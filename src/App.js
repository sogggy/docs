import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import SideBar from './components/SideBar'
//import options from './data/sidebar.json'
import { Container, Row, Col } from 'react-bootstrap'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar';
import RenderMarkdown from './components/RenderMarkdown'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const routes = [
  {'path': '/', 'component': 'Home'},
  {'path': '/user-manual', 'component': 'Auth User Manual'},
  {'path': '/admin/features', 'component': 'Multilang Feature'},
  {'path': '/services/botbuilder', 'component': 'BotBuilder Service'}, 
  {'path': '/services/webhook', 'component': 'Webhook Service'},
  {'path': '/services/new-infra', 'component': 'New-Infra Service'},
  {'path': '/components', 'component': 'Components'},
  {'path': '/sdk/android', 'component': 'Android SDK'},
  {'path': '/sdk/ios', 'component': 'iOS SDK'},
  {'path': '/sdk/web', 'component': 'Web SDK'},
  {'path': '/api/widget', 'component': 'Vouch API'},
  {'path': '/engineering/run-botbuilder', 'component': 'Run Botbuilder'},
  {'path': '/engineering/run-widget', 'component': 'Run Widget'},
  {'path': '/engineering/run-catalogue-fe', 'component': 'Run Catalogue-FE'}
]

const topbarHeaders = [
  {
    title: 'User Manual',
    dropdownOptions: [
      {
        name:'BotBuilder Auth',
        link:'/user-manual'
      },
      {
        name:'Multilang',
        link:'/admin/features'
      }
    ]
  },
  {
    title: 'Services',
    dropdownOptions: [
      {
        name:'BotBuilder',
        link:'/services/botbuilder'
      },
      {
        name:'Webhook',
        link:'/services/webhook'
      },
      {
        name:'New Infra',
        link:'/services/new-infra'
      }
    ]
  },
  {
    title: 'SDK',
    dropdownOptions: [
      {
        name:'Android',
        link:'/sdk/android'
      },
      {
        name:'iOS',
        link:'/sdk/ios'
      },
      {
        name:'Web',
        link:'/sdk/web'
      }
    ]
  },
  {
    title: 'Engineering',
    dropdownOptions: [
      {
        name:'Run Botbuilder',
        link:'/engineering/run-botbuilder'
      },
      {
        name:'Run Widget',
        link:'/engineering/run-widget'
      },
      {
        name:'Run Catalogue Frontend',
        link:'/engineering/run-catalogue-fe'
      }
    ]
  }
]

const sideBarItems = [
  {
    url: '/',
    sideLinks: [
      { name:'Text Card', link:'#text-card' },
      { name:'Botbuilder', link:'/services/botbuilder' }
    ]
  },
  {
    url: '/services/botbuilder', 
    sideLinks: [
      { name:'How Bot Works', link:'#how-bot-works', subItems: [
        { name:'Channels', link:'#channels'},
        { name:'NLP', link:'#nlp'}
      ]},
      { name:'Intents', link:'#intents', subItems: [
        { name:'Entities', link:'#entities'}
      ]},
      { name:'Blocks', link:'#blocks'},
      { name:'Cards', link:'#cards', subItems:[
        { name:'Outgoing Message Cards', link:'#outgoing-message-cards', subItems:[
          { name:'Text Card', link:'#text-card', subItems:[
            { name:'Truncate Text Option', link:'#truncate-text-option'}
          ]},
          { name:'Gallery Card', link:'#gallery-card', subItems:[
            { name:'Dynamic Gallery', link:'#dynamic-gallery'}
          ]},
          { name:'List', link:'#list'},
          { name:'Media Card', link:'#media-card'},
          { name:'Buttons', link:'#buttons'},
          { name:'Quick Replies', link:'#quick-replies'},
          { name:'Yes/No Quick Replies', link:'#yes-no-quick-replies'},
          { name:'Suggest Intent', link:'#suggest-intent'},
        ]},
      ]},
    ]
  },
  {
    url: '/admin/features/localisation.html',
    sideLinks: [
      { name:'test3', link:'/' },
      { name:'test4', link:'/services/botbuilder' }
    ]
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideBarItems: 
      {
        url: '/',
        sideLinks: [
          {
            name:'Home',
            link:'/'
          },
          {
            name:'Botbuilder',
            link:'/services/botbuilder'
          }
        ]
      }, 
      currentLocation: '/'
    }
    this.handleClickLink = this.handleClickLink.bind(this)
  }

  handleClickLink(location, file) {
    const targetSideBar = sideBarItems.filter((sidebar, index) => (
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
        <TopBar topbarDropdownHeaders={topbarHeaders}></TopBar>
        <Container fluid>
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
        </Container>
      </Router>
    );
  }
}

export default App;
