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
            {/* Product Summary */}
            <div className="ProductSummary">
              <span>Subscribe to Monthly plan</span>
              <div className="ProductSummaryTotalAmount">
                <div className="mr-2 flex-item width-fixed">
                  <span className="Text-fontWeight--600 Text-fontSize-28">
                    $5.00
                  </span>
                </div>
                <div className="flex-item width-fixed">
                  <span className="TextColor-Grey Text-fontSize-14"></span>
                </div>
              </div>
            </div>
            <hr />
            <StripeCardElement />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Checkout.propTypes = {};

export default Checkout;
