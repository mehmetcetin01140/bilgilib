import React from 'react'
import {Container,Row,Col,Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap';
export default function SliderComp() {
  return (
    <Container>
      <Row>
        <Col>
        <Carousel variant="dark" className="test">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://d.sisligazetesi.com.tr/news/11796.jpg"
        alt="First slide"
        height={500}
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee"
        alt="Second slide"
        height={500}
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://iaftm.tmgrup.com.tr/e547c9/1200/627/71/0/877/421?u=https://iftm.tmgrup.com.tr/2022/01/19/eyt-son-dakika-emeklilikte-yasa-takilanlar-icin-iyi-haber-1642578234333.jpg"
        alt="Third slide"
        height={500}
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        </Col>
      </Row>
    </Container>
      
  )
}
