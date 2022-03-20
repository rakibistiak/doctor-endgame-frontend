import React, { useEffect } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TakingInfo.css';
import { useForm } from "react-hook-form";
const TakingInfo = () => {

    //change the title when change the route
    useEffect(() => {
        document.title = 'User info';
    }, []);

    // Store info of patient

    const { name } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
            <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center mb-4 info-title'> Fill up this form </h1>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control style={{ fontWeight: '700', color: 'cadetblue' }} plaintext readOnly defaultValue={name} />
                        </Col>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label >Name</Form.Label>
                            <Form.Control {...register("name")} type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label >Time</Form.Label>
                            <Form.Select {...register("time")} defaultValue="Choose...">
                                <option>10am</option>
                                <option>2pm</option>
                                <option>8pm</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control {...register("address")} placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label >City</Form.Label>
                            <Form.Control {...register("city")} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label >State</Form.Label>
                            <Form.Select {...register("state")} defaultValue="Choose...">
                                <option>Mirpur</option>
                                <option>Dhanmondi</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label >Zip</Form.Label>
                            <Form.Control  {...register("zip")}/>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
    );
};

export default TakingInfo;