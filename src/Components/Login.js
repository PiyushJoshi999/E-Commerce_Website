// src/components/Login.js

import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSignUp, setShowSignUp] = useState(true);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

 

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      navigate("/store"); 
      //authCtx.isLoggedIn(true);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    setShowSignUp(false);

  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div>{showSignUp && <h4>Sign UP</h4>}</div>
          <div>{!showSignUp && <h4>Login</h4>}</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            {showSignUp ? (
              <Button variant="primary" type="submit" onClick={handleSignup}> {/* Add onClick to call handleSignup */}
                Sign Up
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Login
              </Button>
            )}

            {/* Show the login button only when the signup button is hidden */}
            {showSignUp === false && (
              <Button variant="secondary" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
