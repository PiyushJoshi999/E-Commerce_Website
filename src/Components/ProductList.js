import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


const ProductList = ({ products, addToCart }) => {
   
    return (
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  

  export default ProductList;