import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import Header from './components/header/Header';
import ItemDetails from './views/details/ItemDetails';
import ItemsListing from './views/listing/ItemsListing';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
          <Router>
            <Routes>
              <Route path="/items" element={<ItemsListing />}>
              </Route>
              <Route path="/items/:id" element={<ItemDetails />}>
              </Route>
              <Route path="/" element={<ItemsListing />}>
              </Route>
            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
