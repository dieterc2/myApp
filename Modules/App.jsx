import React from 'react';
import {Button, Icon, Navbar, NavItem, Slider, Slide, Col, CardPanel, Row} from 'react-materialize';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='oneyy' right>
          <NavItem href='/#/About'>About</NavItem>
        </Navbar>
      </div>
    );
  }
}

class Content extends React.Component{
    render() {
      return (
        <div>
          <Slider>
            <Slide
              src="http://lorempixel.com/580/250/nature/1"
              title="This is our big Tagline!">
              Here's our small slogan.
            </Slide>
            <Slide
              src="http://lorempixel.com/580/250/nature/2"
              title="Left aligned Caption"
              placement="left">
              Here's our small slogan.
            </Slide>
            <Slide
              src="http://lorempixel.com/580/250/nature/3"
              title="Right aligned Caption"
              placement="right">
              Here's our small slogan.
            </Slide>
          </Slider>
          <Row>
            <Col s={6} m={5}>
                <CardPanel className="teal lighten-4 black-text">
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </CardPanel>
            </Col>
            <Col s={6} m={7}>
                For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
            </Col>
          </Row>
        </div>
      );
    }
}

export default App;
