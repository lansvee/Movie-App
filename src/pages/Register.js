// src/pages/Register.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // Import Notyf's CSS
import "./Register.css";

function Register() {
  
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");

  const navigate = useNavigate();
  const notyf = new Notyf(); // Instantiate Notyf

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://movieapp-api-lms1.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Registration success
        notyf.success(data.message || "Registration successful!");
        // Optionally redirect to login or wherever you want
        navigate("/login");
      } else {
        // Registration failed (e.g., email in use, validation error, etc.)
        notyf.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      notyf.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Container fluid className="register-container">
      <Row
        className="align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <Col xs={12} sm={10} md={8} lg={5} xl={4}>
          <div className="register-card p-4">
            <h2 className="register-title text-center mb-4">Register</h2>

            <Form onSubmit={handleSubmit}>

              {/* Email */}
              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="register-btn w-100">
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
