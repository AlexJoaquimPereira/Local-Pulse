import Button from 'react-bootstrap/Button';import React from 'react';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = () => {
    const title = "Teapot"; // Product title
    const rating = 4.1; // Product rating

    return (
        <Container className="py-4 text-center">
            <Row className="align-items-stretch">
                <Col xs={12} md={3} className="p-3">
                    <Image src="image.png" rounded fluid className="border" alt={title} />
                    <div className="d-flex justify-content-between mt-2">
                        <Button variant="warning" className="flex-fill me-1">🛒 Add to cart</Button>
                        <Button variant="danger" className="flex-fill ms-1">⚡ Buy Now</Button>
                    </div>
                </Col>
                <Col xs={12} md={7} className="border p-3 text-start d-flex flex-column justify-content-between">
                    <div>
                        <h5>
                            <Badge bg="success">⭐ {rating}</Badge>
                        </h5>
                        <h2>{title}</h2>
                        <p>Very nice teapot</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage;
