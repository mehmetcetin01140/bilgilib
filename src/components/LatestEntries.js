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
     <h5>Son Eklenenler</h5>
       <Row>
         <Col md={4}>
          <Link to={`konu/${firstHolder.routepath}`}>  
<Card className="bg-dark text-white border-0 mb-2" >
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
<Card.ImgOverlay >
<Card.Title style={{fontSize:"2rem"}}>{firstHolder.Title}</Card.Title>
<Card.Text>
{firstHolder.Content ? firstHolder.Content.substr(0,80) : ""}...
</Card.Text>

</Card.ImgOverlay>
</Card>
</Link>
</Col>

<Col md={4}>
  <Link to={`konu/${secondHolder.routepath}`}>
<Card className="bg-dark text-white border-0 mb-2">
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
<Card.ImgOverlay>
<Card.Title style={{fontSize:"2rem"}}>{secondHolder.Title}</Card.Title>
<Card.Text>
{secondHolder.Content ? secondHolder.Content.substr(0,80) : "..."}...
</Card.Text>

</Card.ImgOverlay>
</Card>
</Link>
</Col>
<Col md={4} >
  <Col md={12} className="entriesCardLayout" >
  <Link to={`konu/${thirdHolder.routepath}`}>
  <Card className="bg-dark text-white border-0 mb-2">
<Card.Img src={thirdHolder.Image} alt="Card image"   />
<Card.ImgOverlay >
<Card.Title style={{fontSize:"2rem"}}>{thirdHolder.Title}</Card.Title>
<Card.Text>
{thirdHolder.Content ? thirdHolder.Content.substr(0,60) : "..."}...
</Card.Text>

</Card.ImgOverlay>
</Card>
</Link>
  </Col>
  <Col md={12} className="entriesCardLayout ">
  <Link to={`konu/${fourthHolder.routepath}`}>
  <Card className="bg-dark text-white border-0 mb-2">
<Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image" />
<Card.ImgOverlay>
<Card.Title style={{fontSize:"2rem"}}>{fourthHolder.Title}</Card.Title>
<Card.Text >
{fourthHolder.Content}
</Card.Text>

</Card.ImgOverlay>
</Card>
</Link>
  </Col>

</Col> 
          

      
      
       </Row>
   </Container>
  )
}
