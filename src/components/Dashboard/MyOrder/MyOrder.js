import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useAuth();
    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:5000/myOrder?email=${user?.email}`)
            .then(data => {
                setMyOrders(data.data);
                setIsLoading(false)
            })
    }, [user?.email]);
    //change the title when change the route
    useEffect(() => {
        document.title = 'My Apointment';
    }, []);
    //If user login is not finished
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ paddingTop: '100px' }} animation="grow" variant="warning" />
            </div>
        )
    }
    
    return (
        <Container>
            <Row className='g-4' style={{ marginTop: '100px' }}>
                {
                    myOrders.map(order => {
                        const { _id, email, status, phone, address } = order || {};
                        const { name, price, modelYear, category } = order.carInfo || {};
                        return (
                            <Col key={_id} xs={12} md={6} lg={4}>
                                <div className='order-card'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='order-email'>{email}</p>
                                        <p className={status === 'Pending' ? 'pending' : 'shipped'}>{status}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='order-price'>${price}</p>
                                        <address className='order-address'>{address}</address>
                                    </div>
                                    <div>
                                        <h5 className='car-name'>{name}</h5>
                                    </div>
                                    <hr style={{ color: '#fff' }} />
                                    <div className='d-flex justify-content-between'>
                                        <p className='model-year order-model-year'>{modelYear}</p>
                                        <p className='order-buttom'>{phone}</p>
                                        <p className='order-buttom'>{category}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default MyOrder;