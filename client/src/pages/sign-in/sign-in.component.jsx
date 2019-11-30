import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

const { Header, Body } = Card;
const { Group, Label, Control, Check } = Form;

const Signin = props => {
  return (
    <Container>
      <Header>
        <h5 className="title">Login</h5>
        <Link to="/register" className="link-r">
          Sign up
        </Link>
      </Header>
      <Body>
        <Form>
          <Group controlId="formBasicEmail">
            <Label>Email</Label>
            <Control type="email" placeholder="Enter email" />
          </Group>

          <Group className="item-pq" controlId="formBasicPassword">
            <Label>Password</Label>
            <Control type="password" placeholder="Password" />
          </Group>

          <Row>
            <Col>
              <Group controlId="formBasicCheckbox">
                <Check type="checkbox" label="Remember me" />
              </Group>
            </Col>
            <Col>
              <Link to="/forgot-password" className="float-right link-r">
                Forgot Password?
              </Link>
            </Col>
          </Row>
          <Group>
            <Button variant="info" type="submit" block>
              Submit
            </Button>
          </Group>
        </Form>
        <div class="hint-text text-center">
          Don't have an account?{' '}
          <Link to="/register" class="link-r">
            Sign up
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
    </Container>
  );
};

Signin.propTypes = {};

export default Signin;
