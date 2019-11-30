import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import NavHeader from '../../components/header/header.component';

const { Body, Title, Text, Footer } = Card;
const {} = Form;

const Subscription = props => {
  const [cardActive, setCardActive] = useState();
  const selectCard = offerId => {
    setCardActive(offerId);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    props.history.push(`/checkout/${cardActive}`);
  };
  return (
    <>
      <NavHeader
        brand={<h5 className="title">Subscription</h5>}
        isAuthenticated
      />
      <Container>
        <Row>
          <Col md="6" className="mx-auto py-4 px-3">
            <h5>Select a Subscription</h5>
            <Form onSubmit={onSubmitHandler}>
              <Card
                onClick={() => selectCard('radio1')}
                className={`${
                  'radio1' === cardActive ? 'card-active' : ''
                } mb-3 `}
                style={{ cursor: 'pointer' }}
              >
                <Body>
                  <Row>
                    <Col>
                      <Text>Monthly</Text>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        checked={'radio1' === cardActive}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                    </Col>
                  </Row>
                </Body>
              </Card>
              <Card
                onClick={() => selectCard('radio2')}
                className={`${
                  'radio2' === cardActive ? 'card-active' : ''
                } mb-3 `}
                style={{ cursor: 'pointer' }}
              >
                <Body>
                  <Row>
                    <Col>
                      <Text>Yearly</Text>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        checked={'radio2' === cardActive}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Row>
                </Body>
              </Card>

              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Subscription.propTypes = {};

export default Subscription;
