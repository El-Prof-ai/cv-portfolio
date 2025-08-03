import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pin from '../../assets/icons/pin.svg';
import phone from '../../assets/icons/phone-call.svg';
import mail from '../../assets/icons/mail.svg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const TitleStyle = styled.h6`
  display: inline-block;
  color: var(--cinder-light, #656d72);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  line-height: 8.303px;
  letter-spacing: 5.595px;
`;

const TiretDisign = styled.div`
  display: inline-block;
  width: 10.536px;
  height: 3.692px;
  background: var(--light-4, #d9d9d9);
  margin-right: 10px;
`;

const TitleCustom = styled.h1`
  color: var(--cinder, #232e35);
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-weight: 50px;
  margin-top: auto;
`;

function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [good, setGood] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/save-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setValidated(true);
      setGood(false);
    } else {
      setGood(true);
    }
  };

  return (
    <section className="my-5 py-5" id="contact">
      <Container>
        <div className="">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>CONTACT</TitleStyle>
          </div>
        </div>
        <div className="mb-5 mb-md-5 pb-md-5">
          <TitleCustom className="text-secondary">Contact details</TitleCustom>
        </div>
        <Row className="align-items-center justify-content-center gy-3 gx-3">
          <Col sm={12} md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Form.ControlInput1">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.ControlInput2">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="message"
                  rows={5}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: '#7E74F1' }}
              >
                Submit form
              </Button>
            </Form>
            {good ? (
              <p
                className="btn btn-danger w-100"
                style={{ pointerEvents: 'none' }}
              >
                Unavailable, express yourself via my channels below
              </p>
            ) : null}
          </Col>
          <Col md={{ offset: 1 }}>
            <div className="my-4">
              <img
                src={pin}
                alt="localisation"
                width={50}
                className="bg-light rounded-4"
                style={{ marginLeft: '24px' }}
              />
              <span
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  marginLeft: '24px',
                }}
              >
                <h5
                  className="mb-0 mt-1"
                  style={{
                    color: '#6C759F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '16px',
                  }}
                >
                  Address
                </h5>
                <Link
                  data-toggle="tooltip"
                  title="view on map"
                  to="https://maps.app.goo.gl/k68kDJ4BH5LbQEat5?g_st=iw "
                >
                  <h6
                    style={{
                      color: '#6C757D',
                      fontSize: '9px',
                    }}
                    className="mt-0"
                  >
                    Cameroon-Yaounde, Melen, near NASEY
                  </h6>
                </Link>
              </span>
            </div>
            <div className="my-4">
              <img
                src={phone}
                alt="localisation"
                width={50}
                className="bg-light rounded-4"
                style={{ marginLeft: '24px' }}
              />
              <span
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  marginLeft: '24px',
                }}
              >
                <h5
                  style={{
                    color: '#6C759F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '16px',
                  }}
                  className="mb-0 mt-1"
                >
                  Contact
                </h5>
                <Link
                  data-toggle="tooltip"
                  title="appeler +237 620 26 39 11"
                  to="tel:+237620263911"
                >
                  <h6
                    style={{
                      color: '#6C757D',
                      fontSize: '9px',
                    }}
                    className="mt-0"
                  >
                    +237 620 26 39 11 / +237 6 91 87 37 20
                  </h6>
                </Link>
              </span>
            </div>
            <div className="my-4">
              <img
                src={mail}
                alt="localisation"
                width={50}
                className="bg-light rounded-4"
                style={{ marginLeft: '24px' }}
              />
              <span
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  marginLeft: '24px',
                }}
              >
                <h5
                  style={{
                    color: '#6C759F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '16px',
                  }}
                  className="mb-0 mt-1"
                >
                  E-mail
                </h5>
                <Link
                  data-toggle="tooltip"
                  title="mail"
                  to="mailto:mboumelae@gmail.com?subject=Need more informations"
                >
                  <h6
                    style={{
                      color: '#6C757D',
                      fontSize: '9px',
                    }}
                    className="my-0"
                  >
                    mboumelae@gmail.com
                  </h6>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
