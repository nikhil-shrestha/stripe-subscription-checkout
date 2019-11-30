import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Header from '../../components/header/header.component';

const { Group, Label, Control } = Form;

const ForgotPassword = props => {
  return (
    <>
      <Header
        brand={<h5 className="title">Forget Password</h5>}
        route={
          <Link to="/" className="link-r">
            Login
          </Link>
        }
      />
      <Container>
        <Row>
          <Col md="6" className="mx-auto py-4 px-3">
            <Form>
              <Group controlId="formBasicEmail">
                <Label>Email</Label>
                <Control type="email" placeholder="Enter email" />
              </Group>
              <Group>
                <Button variant="info" type="submit" block>
                  Submit
                </Button>
              </Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
