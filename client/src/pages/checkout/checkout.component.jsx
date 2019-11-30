import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import NavHeader from '../../components/header/header.component';
import StripeCardElement from '../../components/card-element/card-element.component';

const { Body, Title, Text, Footer } = Card;
const {} = Form;

const Checkout = props => {
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

            <StripeCardElement />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Checkout.propTypes = {};

export default Checkout;
