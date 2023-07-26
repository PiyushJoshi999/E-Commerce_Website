import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            email: email,
            phone: phone
        }

        fetch('https://e-commerce-app-d57c8-default-rtdb.firebaseio.com/userData.json', {
            method: 'POST',
            body: JSON.stringify(userData),
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Data has been successfully submitted
            console.log('Data has been successfully submitted:', data);
            // Show the message "Thanks for contacting us"
            setSubmitted(true);
        })
        .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
        });

        // Reset the form to its default state
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Contact Us</h1>
                    {submitted ? (
                        <p>Thanks for contacting us.</p>
                    ) : (
                        <Form onSubmit={formSubmitHandler} a >
                            <Form.Group controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name} // Use 'value' attribute to bind the state
                                    onChange={nameChangeHandler}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email} // Use 'value' attribute to bind the state
                                    onChange={emailChangeHandler}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="phone">
                                <Form.Label>Phone Number:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    value={phone} // Use 'value' attribute to bind the state
                                    onChange={phoneChangeHandler}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
