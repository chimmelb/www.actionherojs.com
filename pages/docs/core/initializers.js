import DocsPageWithNav from './../../../pageClasses/docsPageWithSideNav.js'
import { Row, Col } from 'react-bootstrap'
import DocsPage from './../../../components/layouts/docsPage.js'

import Code from './../../../components/code.js'

const Format =
`// initializers/stuffInit.js

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.myObject = {};

    next();
  },
  start: function(api, next){
    // connect to server
    next();
  },
  stop: function(api, next){
    // disconnect from server
    next();
  }
}
`

export default class extends DocsPageWithNav {
  constructor (props) {
    super(props)

    this.state = {
      titleSection: {
        title: 'Core > Initializers',
        icon: '/static/images/internet-of-things.svg'
      },
      sections: {
        'overview': 'Overview',
        'format': 'Format',
        'errors': 'Errors'
      },
      links: [
        {link: '/docs/core/cli', title: '» Core > CLI'},
        {link: '/docs/core/middleware', title: '« Core > Middleware'}
      ]
    }
  }

  render () {
    return (
      <DocsPage sideNav={this.state.sections} titleSection={this.state.titleSection} links={this.state.links} currentSection={this.state.currentSection}>
        <Row>
          <Col md={12}>
            { this.section('overview',
              <div>
                <p>Initializers are the main way you expand your ActionHero server.  This is where you connect to databases, modify the global <code>api</code> object with new classes and helper methods, and set up your <a href='/docs/core/middleware'>middleware</a>.</p>
                <p>Initializers run in 3 phases coinciding with the lifecycles of the application: <code>init</code>, <code>start</code>, and <code>stop</code>.  All <code>init</code> steps happen before all <code>start</code> steps.  Initializers can define both methods and priorities which will happen at each phase of the server's lifecycle.</p>
                <p>System initializers (like setting up redis and the cache) have priority levels in the 100 to 1000 level range.  Application initializers should run with a priority level of over 1000 to use methods created by the system.  You can of course set priority levels lower than 1000 in your application (perhaps you connect to a database).  The priority level split is purely convention.</p>
                <p>In general, <code>initialize()</code> methods should create prototypes and new objects, and <code>start()</code> should boot things or connect to external resources.</p>
              </div>
            )}

            { this.section('format',
              <div>
                <Code>{Format}</Code>
                <p>To use a custom initializer, create a <code>initializers</code> directory in your project. Export an object with at least one of <code>start</code>, <code>stop</code> or <code>initialize</code> and specify your priorities.</p>
                <p>You can generate a file of this type with <code>actionhero generate initializer --name=stuffInit</code></p>
              </div>
            )}

            { this.section('errors',
              <div>
                <p>You can pass an error to the callback of any step in the initializer.  Doing so will cause ActionHero to log the error and stop the server.  For example, you might throw an error if you cannot connect to an external service at boot, <a href='https://github.com/actionhero/ah-sequelize-plugin/blob/master/initializers/sequelize.js'>like a database</a>.</p>
              </div>
            )}
          </Col>
        </Row>
      </DocsPage>
    )
  }
}
