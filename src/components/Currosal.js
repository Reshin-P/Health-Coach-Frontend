import React from 'react'
import {Carousel, Container,Row,Col} from 'react-bootstrap'
const Currosal = () => {
  return (
 <Container fluid style={{width:"80%"}} className="my-5">
   <Row>
     <Col lg={12} md={12}>
     <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="/images/banner.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="/images/banner2.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/banner.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
     </Col>
   </Row>
       
 </Container>
  )
}

export default Currosal
