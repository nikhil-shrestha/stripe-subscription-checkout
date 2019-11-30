import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Header from '../../components/header/header.component';

const { Group, Label, Control } = Form;

const Signin = props => {
  const onSubmitHandler = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };
  return (
    <>
      <Header
        brand={<h5 className="title">Login</h5>}
        route={
          <Link to="/register" className="link-r">
            Sign up
          </Link>
        }
      />
      <Container>
        <Row>
          <Col md="6" className="mx-auto py-4 px-3">
            <Form onSubmit={onSubmitHandler}>
              <Group controlId="formBasicEmail">
                <Label>Email</Label>
                <Control type="email" placeholder="Enter email" />
              </Group>

              <Group className="item-pq" controlId="formBasicPassword">
                <Label>Password</Label>
                <Control type="password" placeholder="Password" />
              </Group>

              <Row className="pb-2">
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

Signin.propTypes = {};

export default Signin;
