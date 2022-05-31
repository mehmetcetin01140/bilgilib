import React from 'react'
import {Carousel} from 'react-bootstrap';
import {Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import Bilim from "../svg/bilgilibbilim.png"
import Oyun from "../svg/bilgiliboyun.png"
import Yasam from "../svg/bilgilibyasam.png"
export default function SliderComp() {
  return (
    <Container fluid>
    <Carousel variant="dark" className="carouselItems">
    <Carousel.Item className="carouselItems" >
      <Link to="/kategoriler/bilim">
      <img
        src={Bilim}
        alt="Bilgilib Bilim"
        className='item'
      />
    </Link>
    </Carousel.Item>
    <Carousel.Item className="carouselItems">
      <img
        src={Oyun}
        alt="Bilgilib Oyun"
        className='item'
      />
    </Carousel.Item>
    <Carousel.Item className="carouselItems">
      <img
        src={Yasam}
        alt="Bilgilib Yaşam"
        className='item'
      />
    </Carousel.Item>
  </Carousel> 
  </Container>
  )
}
