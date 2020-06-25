import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import SideBar from './components/SideBar'
//import options from './data/sidebar.json'
import { Row, Col } from 'react-bootstrap'
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
  { title: 'User Manual',
    dropdownOptions: [
      { name:'BotBuilder Auth', link:'/user-manual' },
      { name:'Multilang', link:'/admin/features' }
    ]
  },
  { title: 'Services',
    dropdownOptions: [
      { name:'BotBuilder', link:'/services/botbuilder' },
      { name:'Webhook', link:'/services/webhook' },
      { name:'New Infra', link:'/services/new-infra' }
    ]
  },
  { title: 'SDK', dropdownOptions: [
      { name:'Android', link:'/sdk/android' },
      { name:'iOS', link:'/sdk/ios' },
      { name:'Web', link:'/sdk/web' }
    ]
  },
  { title: 'Engineering', dropdownOptions: [
      { name:'Run Botbuilder', link:'/engineering/run-botbuilder' },
      { name:'Run Widget', link:'/engineering/run-widget' },
      { name:'Run Catalogue Frontend', link:'/engineering/run-catalogue-fe' }
    ]
  }
]

const sideBarItems = [
  {
    url: '/',
    sideLinks: [
      { name:'Set-Up', link:'#set-up' },
      { name:'Botbuilder', link:'#botbuilder' , subItems: [
        { name:'Using Advanced Search', link:'#advanced-search' },
        { name:'Block Referral Code', link:'#block-referral-code' },
      ]},
      { name:'Dashboard', link:'#dashboard' },
      { name:'Copy Editor', link:'#copy-editor' },
      { name:'Social Bots', link:'#social-bots' },
      { name:'A.I. Settings', link:'#ai-settings' },
      { name:'Database', link:'#database' },
      { name:'Broadcast', link:'#broadcast' },
      { name:'Customers', link:'#customers' },
      { name:'Conversations', link:'#conversations' },
      { name:'Tickets', link:'#tickets' },
      { name:'Service', link:'#service' }
    ]
  },
  { 
    url: '/user-manual',
    sideLinks: []
  },
  {
    url: '/admin/features',
    sideLinks: [
      { name:'Requirements', link:'#requirements' },
      { name:'How it Works', link:'#how-it-works', subItems: [
        {name:'Knowledge Base Prefix', link:'kb-prefix'},
        {name:'Entities Prefix', link:'entities-prefix'}
      ]},
      { name:'Enabling Feature', link:'#enabling-feature' },
      { name:'Localised Blocks', link:'#localised-blocks' },
      { name:'Localised Knowledge Bases', link:'#localised-kb', subItems: [
        {name: '__local Prefix', link: '#kb-local-prefix'}
      ]},
      { name:'Localised Entities', link:'#localised-entities' , subItems: [
        {name: '__local Prefix', link: '#entities-local-prefix'}
      ]},
      { name:'CheckList', link:'#checklist' }
    ]
  },
  {
    url: '/services/webhook',
    sideLinks: [
      { name:'How it Works', link:'#how-it-works' },
      { name:'Setup', link:'#setup' , subItems: [
        { name:'Mapping (Webhook Admin)', link:'#mapping' },
        { name:'Register Webhook Job (Bot Builder)', link:'#register-botbuilder' },
      ]},
      { name:'Registering Webhook URL to External System', link:'#register' },
    ]
  },
  {
    url: '/services/new-infra',
    sideLinks: [
      { name:"What's New Infra?", link:'#whats-new-infra' },
      { name:'Migration', link:'#migration' , subItems: [
        { name:'Login Setup', link:'#login-setup' },
        { name:'Widget Setup', link:'#widget-setup' },
        { name:'Channel Settings', link:'#channel-settings' }
      ]}
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
          { name:'Send Email', link:'#send-email'},
          { name:'Slack Alert', link:'#slack-alert'},
          { name:'Connect Channel', link:'#connect-channel'}
        ]},
        { name:'Bot Flow Cards', link:'#bot-flow-cards', subItems:[
          { name:'IF & END IF Card', link:'#if---end-if-card' },
          { name:'Developer Comment', link:'#developer-comment' },
          { name:'Go To Block Card', link:'#goto-block-card'},
          { name:'Execute Block Card', link:'#execute-block-card'},
          { name:'Scheduled Execute Block Card', link:'#scheduled-execute-block-card'},
          { name:'Delete Scheduled Execute Block Card', link:'#delete-scheduled-execute-block-card'},
          { name:'Reset Unwind Queue', link:'#reset-unwind-queue'},
          { name:'Insert Unwind Queue (STB & New Infra)', link:'#insert-unwind-queue--stb---new-infra-'},
          { name:'Clear Entity', link:'#clear-entity'}
        ]},
        { name:'Data Cards', link:'#data-cards', subItems:[
          { name:'API Call Card', link:'#api-call-card' },
          { name:'Save User Attribute Card', link:'#save-user-attribute-card' },
          { name:'Save Merchant Attribute Card', link:'#save-merchant-attribute-card'},
          { name:'Project Attribute Card', link:'#project-attribute-card'},
          { name:'User Input Card', link:'#user-input-card'},
          { name:'Live Chat Card', link:'#live-chat-card'},
          { name:'Bot Switch Card', link:'#bot-switch-card'},
          { name:'Action Card', link:'#action-card'},
          { name:'Delete Customer Card', link:'#delete-customer-card'},
          { name:'RSS Call Card', link:'#rss-call-card'},
          { name:'XML/SOAP API Call Card', link:'#xml-soap-api-call-card'},
          { name:'Knowledge Base Insert Card', link:'#knowledge-base-insert-card'},
          { name:'Knowledge Base Retrieve Card', link:'#knowledge-base-retrieve-card'},
          { name:'Knowledge Base Edit Card', link:'#knowledge-base-edit-card'},
          { name:'Knowledge Base Delete Card', link:'#knowledge-base-delete-card'},
          { name:'Create Ticket', link:'#create-ticket'},
          { name:'Get Ticket', link:'#get-ticket'},
          { name:'Edit Ticket', link:'#edit-ticket'},
        ]},
        { name: 'Other Cards', link: '#other-cards', subItems: [
            { name: 'Webhook Cards', link: '#webhook-cards'}
        ]},
        { name:'Inline Functions', link:'#inline_func', subItems:[
          { name:'HTML Strip', link:'#htmlstrip' },
          { name:'Random Number Generator', link:'#randnumgen' },
          { name:'Image Resize', link:'#imgresize'},
          { name:'Which One', link:'#whichone'},
          { name:'Length', link:'#length'},
          { name:'To MD5', link:'#tomd5'}
        ]},
      ]},
      { name: 'Card Conditions', link:'#card-conditions'}
    ]
  },
  {
    url: '/sdk/android',
    sideLinks: [
      { name:"Android", link:'#android' , subItems: [
        { name:'Requirements', link:'#requirements' },
        { name:'Installation Setup', link:'#installation-setup' },
        { name:'Using VouchSDK Core', link:'#usage' }
      ]}
    ]
  },
  {
    url: '/sdk/ios',
    sideLinks: [
      { name:"iOS", link:'#ios' , subItems: [
        { name:'Requirements', link:'#requirements' },
        { name:'Installation Setup', link:'#installation-setup' },
        { name:'Using VouchSDKViewController', link:'#usage' }
      ]}
    ]
  },
  {
    url: '/sdk/web',
    sideLinks: [
      { name:"Credential", link:'#credential' },
      { name:'Trigger a Flow', link:'#trigger-a-flow' },
      { name:'Flow Parameter', link:'#flow-parameter' },
      { name:'Attribute Preload', link:'#attribute-preload' }
    ]
  },
  {
    url: '/engineering/run-botbuilder',
    sideLinks: [
      { name:"Backend", link:'#backend' },
      { name:'Frontend', link:'#frontend' },
      { name:'Branches', link:'#branches', subItems:[
        { name:'Backend', link:'#backend-branch' },
        { name:'Frontend', link:'#frontend-branch' }
      ]}
    ]
  }
]

const topbarLinks = [
  {
      link:'http://doc.vouch.sg/widget/',
      name:'APIs'
  }
]

class App extends Component {
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

export default App;
