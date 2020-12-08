import React, { useState } from 'react'
import './SignIn.css'
import { Row, Container, Col, Form, Button, Media, Modal, FormGroup } from "react-bootstrap";
import axios from "axios"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:8080/backend/index.php', {
            email,
            password
        })
            .then(function (response) {
                console.log(response);
            })
            .then(res => {

                setEmail("");
                setPassword("");
            })
            
    }

    return (
        <>
<Container>
    <Row>
        <Col> </Col>
        <Col lg={6} md={12} sm={6}>
        <Media className="p-5" style={{justifyContent:"center"}}>
                <img
                    width={90}
                    height={90}
                    src="eduicon.png"
                    alt="img"
                />
        </Media>
        <div className="p-5">
        <div className="form">
            <Form method="post" id="LoginForm" className="mt-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Text className="signin">
                        Sign In
                    </Form.Text>
                    <Form.Control className="inputfield" type="email" name="email" placeholder="UserID"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">

                    <Form.Control className="inputfield" type="password" name="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                </Form.Group>
                    <>
                <Form.Group style={{ alignItems: "left" }}>

                <Button variant="link" onClick={handleShow} style={{float:"right"}}>
                    Forgot Password?
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>Enter Registered Email <Form.Control type="email" name="email" placeholder="abc@xyz.com" />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
                </Modal>
                </Form.Group>
                <br/>
                <br/>
                <FormGroup style={{paddingLeft:"85px"}}>
                <Button variant="primary" type="submit" size="lg" active
                    onClick={onSubmit} name="onSubmit" disabled={!validateForm()}>
                    Submit
                </Button> {' '}
                <Button variant="light" type="submit" size="lg" active>
                    Cancel
                </Button>
                </FormGroup>
                    </>
                </Form>
                </div>
            </div>
        </Col>
        <Col> </Col>
    </Row>
</Container>

</>
    )
}

export default SignIn;