import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import './ItemDetails.css';
import { ItemInfo } from '../../models/ItemInfo';
import { getItem } from '../../services/item-details.service';

interface IItemDetailsState {
  item: ItemInfo | null;
}

class ItemDetails extends React.Component<{}, IItemDetailsState> {

  constructor(props: any) {
    super(props);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    getItem(1).then((resp) => {
      this.setState({
        item: resp.data,
      });
    });
  }

  render(): React.ReactNode {
    const { item } = this.state;
    console.log('item:', item)
    return (
      <Form>
        <Container >
          <Row>
            <Col>
              <Form.Label column className="pt-3 pb-3">
                <span className='p-info'>Physical Information:</span>
              </Form.Label>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  HeadLight
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.headLight} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Bonnet is open
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.bonet} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Boot is open
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.boot} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Wiper
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.wiper} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Petrol fuel tank lid
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.petrolFuelTankLid} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Handbrake
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.handBreak} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Left/Right indicator
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.letfIndicator} width={90} height={25} onlabel="L On" offlabel="L Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.rightIndicator} width={90} height={25} onlabel="R On" offlabel="R Off" onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Door open
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.frontLeftDoor} width={90} height={25} onlabel="FL On" offlabel="FL Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.frontRightDoor} width={90} height={25} onlabel="FR On" offlabel="FR Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.rearLeftDoor} width={90} height={25} onlabel="RL On" offlabel="RL Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.frontRightWindow} width={90} height={25} onlabel="RR On" offlabel="RR Off" onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Window open
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.frontLeftWindow} width={90} height={25} onlabel="FL On" offlabel="FL Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.frontRightWindow} width={90} height={25} onlabel="FR On" offlabel="FR Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.rearLeftWindow} width={90} height={25} onlabel="RL On" offlabel="RL Off" onstyle="info" offstyle="dark" />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={item?.rearRightWindow} width={90} height={25} onlabel="RR On" offlabel="RR Off" onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
            </Col>
            <Col className='s-info'>
              <Form.Label column className="pt-3 pb-3">
                <span className='p-info'>Software Information:</span>
              </Form.Label>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Music
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={item?.music} width={90} height={25} onstyle="info" offstyle="dark" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Break fulid level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={item?.breakFluidLevel} />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Coolant level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={item?.coolantLevel} />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Fuel level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={item?.fuelLevel} />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Tyre pressure
                </Form.Label>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">FL</InputGroup.Text>
                    <Form.Control placeholder="FL Pressure" value={item?.frontLeftPressure} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">FR</InputGroup.Text>
                    <Form.Control placeholder="FR Pressure" value={item?.frontRightTyrePressure} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">RL</InputGroup.Text>
                    <Form.Control placeholder="RL Pressure" value={item?.rearLeftPressure} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">RR</InputGroup.Text>
                    <Form.Control placeholder="RR Pressure" value={item?.rearRightPressure} />
                  </InputGroup>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Row} className="mt-5">
                <Col sm={{ span: 4, offset: 4 }}>
                  <Button className='submit-button' type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default ItemDetails;
