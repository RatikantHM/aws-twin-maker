import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import './ItemDetails.css';
import { ItemInfo } from '../../models/ItemInfo';
import { getItem, updateItem } from '../../services/item-details.service';

interface IItemDetailsState extends ItemInfo {
  showToast: boolean;
}

class ItemDetails extends React.Component<{}, IItemDetailsState> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    getItem(1).then((resp) => {
      this.setState({ ...resp.data });
    });
  }

  submitForm(data: ItemInfo) {
    updateItem(1, data).then((resp) => {
      this.setState({
        showToast: true
      });
    });
  }

  render(): React.ReactNode {
    return (
      <Form>
        <Container >
          <ToastContainer position="top-end" className="p-3">
            <Toast className="d-inline-block m-1" bg="light"
              onClose={() => this.setState({ showToast: false })} show={!!this.state?.showToast} delay={3000} autohide>
              <Toast.Body>Data has been updated successfully!</Toast.Body>
            </Toast>
          </ToastContainer>
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
                  <BootstrapSwitchButton checked={this.state?.headLight} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ headLight: checked })
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Bonnet is open
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={this.state?.bonet} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ bonet: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Boot is open
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={this.state?.boot} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ boot: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Wiper
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={this.state?.wiper} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ wiper: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Petrol fuel tank lid
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={this.state?.petrolFuelTankLid} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ petrolFuelTankLid: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Handbrake
                </Form.Label>
                <Col sm={4}>
                  <BootstrapSwitchButton checked={this.state?.handBreak} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ handBreak: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Left/Right indicator
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.letfIndicator} width={90} height={25}
                    onlabel="L On" offlabel="L Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ letfIndicator: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.rightIndicator} width={90} height={25}
                    onlabel="R On" offlabel="R Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ rightIndicator: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Door open
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.frontLeftDoor} width={90} height={25}
                    onlabel="FL On" offlabel="FL Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ frontLeftDoor: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.frontRightDoor} width={90} height={25}
                    onlabel="FR On" offlabel="FR Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ frontRightDoor: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.rearLeftDoor} width={90} height={25}
                    onlabel="RL On" offlabel="RL Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ rearLeftDoor: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.rearRightDoor} width={90} height={25}
                    onlabel="RR On" offlabel="RR Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ rearRightDoor: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Window open
                </Form.Label>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.frontLeftWindow} width={90} height={25}
                    onlabel="FL On" offlabel="FL Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ frontLeftWindow: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.frontRightWindow} width={90} height={25}
                    onlabel="FR On" offlabel="FR Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ frontRightWindow: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.rearLeftWindow} width={90} height={25}
                    onlabel="RL On" offlabel="RL Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ rearLeftWindow: checked })
                    }} />
                </Col>
                <Col sm={2}>
                  <BootstrapSwitchButton checked={this.state?.rearRightWindow} width={90} height={25}
                    onlabel="RR On" offlabel="RR Off" onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ rearRightWindow: checked })
                    }} />
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
                  <BootstrapSwitchButton checked={this.state?.music} width={90} height={25} onstyle="info" offstyle="dark"
                    onChange={(checked: boolean) => {
                      this.setState({ music: checked })
                    }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Break fulid level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={this.state?.breakFluidLevel}
                      onChange={(e) => {
                        this.setState({
                          breakFluidLevel: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Coolant level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={this.state?.coolantLevel}
                      onChange={(e) => {
                        this.setState({
                          coolantLevel: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Fuel level
                </Form.Label>
                <Col sm={4}>
                  <InputGroup className="mb-3">
                    <Form.Control value={this.state?.fuelLevel}
                      onChange={(e) => {
                        this.setState({
                          fuelLevel: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
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
                    <Form.Control placeholder="FL Pressure" value={this.state?.frontLeftPressure}
                      onChange={(e) => {
                        this.setState({
                          frontLeftPressure: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">FR</InputGroup.Text>
                    <Form.Control placeholder="FR Pressure" value={this.state?.frontRightTyrePressure}
                      onChange={(e) => {
                        this.setState({
                          frontRightTyrePressure: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">RL</InputGroup.Text>
                    <Form.Control placeholder="RL Pressure" value={this.state?.rearLeftPressure}
                      onChange={(e) => {
                        this.setState({
                          rearLeftPressure: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
                <Col sm={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">RR</InputGroup.Text>
                    <Form.Control placeholder="RR Pressure" value={this.state?.rearRightPressure}
                      onChange={(e) => {
                        this.setState({
                          rearRightPressure: parseInt(e.currentTarget.value, 10)
                        })
                      }} />
                  </InputGroup>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Row} className="mt-5">
                <Col sm={{ span: 4, offset: 4 }}>
                  <Button className='submit-button' type="button" onClick={() => this.submitForm(this.state)}>Submit</Button>
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
