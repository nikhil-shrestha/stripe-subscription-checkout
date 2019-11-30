import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const { Header, Body } = Card;
const { Group, Label, Control } = Form;

const ForgotPassword = props => {
  return (
    <Card>
      <Header>
        <h5 class="title">Forgot Password</h5>
        <Link to="/" class="link-r">
          Login
        </Link>
      </Header>
      <Body>
        <Form>
          <Group controlId="formBasicEmail">
            <Label>Email</Label>
            <Control type="email" placeholder="Enter email" />
          </Group>

          <Group>
            <Button variant="info" type="submit" block>
              Send Verification Code
            </Button>
          </Group>
        </Form>
      </Body>
    </Card>
  );
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
