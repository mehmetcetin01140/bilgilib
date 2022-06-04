import React from 'react'
import { useState,useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function LatestEntries() {
  const [firstHolder,setFirstHolder]=useState({})
  const [secondHolder,setSecondHolder]=useState({})
  const [thirdHolder,setThirdHolder]=useState({})
  const [fourthHolder,setFourthHolder]=useState({})
  const getData = () =>{
    const formData = new FormData()
    formData.append('action','getLatest')
   fetch(`${process.env.REACT_APP_ENDPOINT}`,{
     method: 'POST',
     body: formData
   })
   .then(res => res.json())
   .then(data=>{
    const [First,Second,Third,Fourth] = data[0]
    setFirstHolder(First)
    setSecondHolder(Second)
    setThirdHolder(Third)
    setFourthHolder(Fourth)
   })

  }
      useEffect(()=>{
    getData()
      },[])
      return (
       <Container fluid className="mt-3 latestContainer">
         <h5>Son Eklenenler</h5>
           <Row>
             <Col lg={4} md={12}>
              <Link to={`/konu/${firstHolder.routepath}`}>  
    <Card className="bg-dark text-white border-0 mb-2" >
    <Card.Img src={firstHolder.Image} alt="Card image"  />
    <Card.ImgOverlay >
    <Card.Title style={{fontSize:"2rem"}}>{firstHolder.Title}</Card.Title>    
    </Card.ImgOverlay>
    </Card>
    </Link>
    </Col>
      
    <Col lg={4} md={12}>
      <Link to={`/konu/${secondHolder.routepath}`}>
    <Card className="bg-dark text-white border-0 mb-2">
    <Card.Img src={secondHolder.Image} />
    <Card.ImgOverlay>
    <Card.Title style={{fontSize:"2rem"}}>{secondHolder.Title}</Card.Title>
      
    </Card.ImgOverlay>
    </Card>
    </Link>
    </Col>
    <Col lg={4} md={12}>
      <Col lg={12} md={12} className="entriesCardLayout" >
      <Link to={`/konu/${thirdHolder.routepath}`}>
      <Card className="bg-dark text-white border-0 mb-2">
    <Card.Img src={thirdHolder.Image} alt="Card image"   />
    <Card.ImgOverlay >
    <Card.Title style={{fontSize:"2rem"}}><span>{thirdHolder.Title}</span></Card.Title>
  
      
    </Card.ImgOverlay>
    </Card>
    </Link>
      </Col>
      <Col lg={12} md={12} className="entriesCardLayout ">
      <Link to={`/konu/${fourthHolder.routepath}`}>
      <Card className="bg-dark text-white border-0 mb-2">
    <Card.Img src={fourthHolder.Image} alt="Card image" />
    <Card.ImgOverlay>
    <Card.Title style={{fontSize:"2rem"}}><span>{fourthHolder.Title}</span></Card.Title>
      
    </Card.ImgOverlay>
    </Card>
    </Link>
      </Col>
      
    </Col> 

           </Row>
       </Container>
      )
    }
