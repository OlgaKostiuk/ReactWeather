import 'bootstrap/dist/css/bootstrap.css';
// import './App.scss';
import { Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
// import Tasks from '../Tasks/Tasks';
import WeatherDisplay from './WeatherDisplay';

const city = [
    {
        name: 'Palo Alto',
        zip: '12345'
    },
    {
        name: 'San Jpse',
        zip: '94088'
    },
    {
        name: 'Santa Cruz',
        zip: '62008'
    },
    {
        name: 'Hamolulu',
        zip: '78754'
    }
];

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activePlace: 0
        };
    }
    render () {
        const activePlace = this.state.activePlace;
        return (
            <div className='App'>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React Simple Weather App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select city</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => { this.setState({ activePlace: index }) }}>
                                {city.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={city[activePlace].zip} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
