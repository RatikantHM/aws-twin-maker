import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import _ from 'lodash';

import { ReactComponent as CarSVG } from '../../assets/images/car_adobe_express.svg';
import './ItemInfo.css';

interface IInfoState {
    show: boolean;
    target: any;
}

class ItemInfo extends React.Component<{}, IInfoState> {

    constructor(props: any) {
        super(props);
        this.state = {
            show: false,
            target: ''
        }
    }

    componentDidMount() {
        document.querySelectorAll('[data-clickable="true"]').forEach((el) => {
            el.addEventListener('click', () => this.handleClickEvent(el));
        });
        document.addEventListener('click', this.handleClose);
    }

    handleClickEvent = _.debounce((el: any) => {
        this.setState({
            show: true,
            target: el
        });
    }, 100);

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    render(): React.ReactNode {
        const id = window.location.pathname.split('/').pop() || '';
        const { show, target } = this.state;
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
                    <Col className='component'>
                        <CarSVG />
                    </Col>
                </Row>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Header as="h3">Component Information</Popover.Header>
                        <Popover.Body>
                            Fetch the information for the current component and show it here.
                        </Popover.Body>
                    </Popover>
                </Overlay>
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
