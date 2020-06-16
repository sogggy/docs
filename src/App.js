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
  {
    'path': '/',
    'component': 'Home'
  },
  {
    'path': '/user-manual/auth',
    'component': 'AuthUserManual'
  },
  {
    'path': '/admin/features/localisation.html',
    'component': 'MultilangFeature'
  },
  {
    'path': '/services/botbuilder',
    'component': 'BotBuilderService'
  }, 
  {
    'path': '/services/webhook',
    'component': 'WebhookService'
  },
  {
    'path': '/services/new-infra',
    'component': 'NewInfraService'
  },
  {
    'path': '/components',
    'component': 'Components'
  },
  {
    'path': '/sdk/android',
    'component': 'AndroidSDK'
  },
  {
    'path': '/sdk/ios',
    'component': 'IOSSDK'
  },
  {
    'path': '/sdk/web',
    'component': 'WebSDK'
  },
  {
    'path': '/api/widget',
    'component': 'VouchAPI'
  },
  {
    'path': '/engineering/run-botbuilder',
    'component': 'RunBotbuilder'
  },
  {
    'path': '/engineering/run-widget',
    'component': 'RunWidget'
  },
  {
    'path': '/engineering/run-catalogue-fe',
    'component': 'RunCatalogueFE'
  }
]

const topbarHeaders = [
  {
    title: 'User Manual',
    dropdownOptions: [
      {
        name:'BotBuilder Auth',
        link:'/user-manual/auth'
      },
      {
        name:'Multilang',
        link:'/admin/features/localisation.html'
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
  {
    url: '/services/botbuilder',
    sideLinks: [
      {
        name:'test1',
        link:'/'
      },
      {
        name:'test2',
        link:'/services/botbuilder'
      }
    ]
  },
  {
    url: '/admin/features/localisation.html',
    sideLinks: [
      {
        name:'test3',
        link:'/'
      },
      {
        name:'test4',
        link:'/services/botbuilder'
      }
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
                    component={() => (<RenderMarkdown file={route.path} onRender={this.handleClickLink}/>)}
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
