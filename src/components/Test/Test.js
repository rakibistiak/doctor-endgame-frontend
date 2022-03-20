import React, { useEffect, useState } from 'react';
import './Test.css';
import ReactPaginate from 'react-paginate';
import { Card, Button } from 'react-bootstrap';


const Test = () => {
    const [tests, setTests] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const testPerPage = 5;
    const pageVisited = pageNumber * testPerPage;
    useEffect(() => {
        fetch('/test.json')
            .then(response => response.json())
            .then(data => setTests(data))
    }, []);
    const pageCount = Math.ceil(tests.length / testPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <div className="test-row">
            {(tests.slice(pageVisited, pageVisited + testPerPage)).map(test => {
                return (
                        <Card style={{ width: '18rem' }} className='mx-2'>
                            <Card.Body>
                                <Card.Title>{test?.name}</Card.Title>
                                <Card.Text>
                                {test?.desc}
                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                $ {test?.price}
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                )
            })
            }
            </div>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                activeClassName={'activeBtn'}
                disabledClassName={'disableBtn'}
            />
        </div>
    );
};

export default Test;