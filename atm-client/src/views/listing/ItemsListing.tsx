import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import './ItemsListing.css';
import { getItems } from '../../services/items-listing.service';
import { ItemInfo } from '../../models/ItemInfo';

interface IItemListingState {
    items: ItemInfo[];
}

class ItemsListing extends React.Component<{}, IItemListingState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        getItems().then((resp) => {
            this.setState({
                items: resp.data,
            });
        });
    }

    render(): React.ReactNode {
        const { items } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col sm={10} className='mt-2 mb-2 offset-1'>
                        <span><b>Note: </b>Below is the list of items, please click on details link to see the detailed Information:</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} className='offset-1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Car ID</th>
                                    <th>Car Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item: ItemInfo) => {
                                    return (
                                        <tr key={item.carId}>
                                            <td>{item.carId}</td>
                                            <td>{item.carId}</td>
                                            <td><Link to={'/items/' + item.carId}>detail</Link></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ItemsListing;
