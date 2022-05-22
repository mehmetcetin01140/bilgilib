import React from 'react'
import { useState,useEffect } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function LatestEntries() {
  const [dataHolder,setDataHolder] = useState([])
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
       <Row>
         <Col md={4}>
          <Link to={`deneme/${firstHolder.routepath}`}>
          
<Card className="bg-dark text-white border-0 mb-2" >
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
<Card.ImgOverlay >
<Card.Title>{firstHolder.Title}</Card.Title>
<Card.Text>
{firstHolder.Content}
</Card.Text>
<Card.Text>{firstHolder.Datelog}</Card.Text>
</Card.ImgOverlay>
</Card>
</Link>
</Col>

<Col md={4}>
  <Link to={`deneme/${secondHolder.routepath}`}>
<Card className="bg-dark text-white border-0 mb-2">
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
<Card.ImgOverlay>
<Card.Title>{secondHolder.Title}</Card.Title>
<Card.Text>
{secondHolder.Content}
</Card.Text>
<Card.Text>{secondHolder.Datelog}</Card.Text>
</Card.ImgOverlay>
</Card>
</Link>
</Col>
<Col md={4} >
  <Col md={12} className="entriesCardLayout" >
  <Link to={`deneme/${thirdHolder.routepath}`}>
  <Card className="bg-dark text-white border-0 mb-2">
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
<Card.ImgOverlay >
<Card.Title>{thirdHolder.Title}</Card.Title>
<Card.Text>
{thirdHolder.Content}
</Card.Text>
<Card.Text>{thirdHolder.Datelog}</Card.Text>
</Card.ImgOverlay>
</Card>
</Link>
  </Col>
  <Col md={12} className="entriesCardLayout ">
  <Link to={`deneme/${fourthHolder.routepath}`}>
  <Card className="bg-dark text-white border-0 mb-2">
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image" />
<Card.ImgOverlay>
<Card.Title>{fourthHolder.Title}</Card.Title>
<Card.Text>
{fourthHolder.Content}
</Card.Text>
<Card.Text>{fourthHolder.Datelog}</Card.Text>
</Card.ImgOverlay>
</Card>
</Link>
  </Col>

</Col> 
          

      
      
       </Row>
   </Container>
  )
}
