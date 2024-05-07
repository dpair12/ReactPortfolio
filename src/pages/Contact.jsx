import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../components/GeneralPageSetUp/index.css';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = () => {
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();

    if (!message.trim()) {
      setMessageError(true);
      return;
    }

    // Handle form submission or other actions here
  };

  return (
    <div className='pagebackground'>
      <div className='formatpage'>
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Contact</h1>
        <Form style={{ width: "70%", marginTop: "40px", margin: "auto" }} onSubmit={handleSubmit}>
          <Form.Group style={{ marginBottom: "20px" }} controlId="name">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group style={{ marginBottom: "20px" }} controlId="email">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <Alert variant="danger">Email address invalid</Alert>}
          </Form.Group>

          <Form.Group style={{ marginBottom: "20px" }} controlId="message">
            <Form.Label style={{ color: "white" }}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={12}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && <Alert variant="danger">A message is required</Alert>}
          </Form.Group>

          <Button style={{ marginBottom: "40px" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;