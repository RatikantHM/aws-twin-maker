import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';

import { ReactComponent as CarSVG } from '../../assets/images/car_adobe_express.svg';
import './ItemInfo.css';

class ItemInfo extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        document.querySelectorAll('[data-clickable="true"]').forEach((el) => {
            el.addEventListener('click', () => this.handleClickEvent(el));
        });
    }

    handleClickEvent = _.debounce((el: any) => {
        console.log(`DOTO: Fetch data for the current component ${el.getAttribute('data-id')} and show it.`);
    }, 100);

    render(): React.ReactNode {
        const id = window.location.pathname.split('/').pop() || '';
        return (
            <Container>
                <Row>
                    <Col className='col-span-2'>
                        <NavLink to="/">Go back to listing page</NavLink>
                    </Col>
                    <Col className='col-span-2'>
                        <NavLink to={`/items/${id}`}>Go back to details page</NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CarSVG />
                    </Col>
                </Row>
            </Container>
        );
    }

    componentWillMount() {
        document.querySelectorAll('[data-clickable="true"]').forEach((el) => {
            el.removeEventListener('click', this.handleClickEvent);
        });
    }
}

export default ItemInfo;
