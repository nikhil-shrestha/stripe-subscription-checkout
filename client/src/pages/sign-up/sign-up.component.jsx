import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const { Header, Body } = Card;
const { Group, Label, Control, Check } = Form;

const Signup = props => {
  return (
    <Card>
      <Header>
        <h5 class="title">Create an account</h5>
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

          <Group controlId="formBasicPassword">
            <Label>Password</Label>
            <Control type="password" placeholder="Password" />
          </Group>

          <Group>
            <Button variant="info" type="submit" block>
              Continue to Payment Info
            </Button>
          </Group>
        </Form>
        <div class="hint-text text-center">
          Don't have an account?{' '}
          <Link to="/" class="link-r">
            Login
          </Link>
        </div>
        <div class="or-seperator">
          <span>or</span>
        </div>
        <div class="text-center social-btn-sb">
          <Button variant="primary" type="button" block>
            <i class="fa fa-facebook"></i> Sign in with <b>Facebook</b>
          </Button>
          <Button variant="danger" type="button" block>
            <i class="fa fa-google"></i> Sign in with <b>Google</b>
          </Button>
        </div>
      </Body>
    </Card>
  );
};

Signup.propTypes = {};

export default Signup;
