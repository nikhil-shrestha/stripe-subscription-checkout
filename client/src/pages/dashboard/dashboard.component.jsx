import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import NavHeader from '../../components/header/header.component';

const { Body, Title, Text, Footer } = Card;

const Dashboard = props => {
  return (
    <>
      <NavHeader
        brand={
          <h5 className="title">
            <i class="fa fa-chevron-left"></i> Back
          </h5>
        }
        isAuthenticated
      />
      <Container>
        <Row>
          <Col md="6" className="mx-auto py-4 px-3">
            <h5>Email</h5>
            <label>nikhil.shrestha1995@gmail.com</label>
            <Button variant="primary" type="submit" block>
              Change Email
            </Button>
            <hr />
            <h5>Subscriptions</h5>
            <Card>
              <Body>
                <Row>
                  <Col>
                    <Text>listenonrepeat.com</Text>
                  </Col>
                  <Col>
                    <Button variant="link" className="float-right">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Body>
              <Footer>
                <small class="text-muted">Email Subscription</small>
              </Footer>
            </Card>
            <hr />
            <h5>Payment Methods</h5>
            <label>You don't have payment method yet.</label>
            <Button variant="primary" type="submit" block>
              Add Payment Method
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
