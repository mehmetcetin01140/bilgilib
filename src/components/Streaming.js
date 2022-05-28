import React from 'react'
import { useState , useEffect } from 'react';
import {Container,Card} from "react-bootstrap"
import { useLocation , Link} from "react-router-dom"
import StreamSkeleton from "./StreamSkeleton"
import InfiniteScroll from "react-infinite-scroll-component";
export default function Streaming() {
   const [items,setItems] = useState([])
   const [counterData,setCounterData] = useState(15)
  const getData = () =>{
    setCounterData(counterData + 5)
    console.log(counterData)
    const formData = new FormData()
    formData.append('countData',counterData)
    formData.append('action','getStream')
   fetch(`${process.env.REACT_APP_ENDPOINT}`,{
     method: 'POST',
     body: formData
   })
   .then(res => res.json())
   .then(data=>setItems(data))
  }

  useEffect(()=>{
    getData()
  },[])


    const cardMap = () =>{
        return(  
          <InfiniteScroll
          dataLength={items.length}
          next={getData}
          hasMore={true}
          scrollThreshold={0.95}
          className="infiniteScroll"
        >
          {items.map((i, index) => (
            <div>

            { i ? <div key={index } >
          
               <Link to={`/konu/${i.routepath}`} style={{ textDecoration: 'none' }}>
                <Card className="text-center streamingCards border-0 " >
            <div className="d-flex">
            <Card.Img src={i.Image} alt="Card image" style={{width:"160px",height:"160px"}}  />
            <Card.Title  className="d-flex align-items-center text-align-center ms-1 cardTitle">{i.Title}</Card.Title>
            </div>
            <Card.Footer className="text-muted cardFooter "><i class="fa-solid fa-calendar-days me-2"></i>{new Date(i.Datelog.slice(0,11)).toLocaleDateString()}</Card.Footer>
            </Card>   
            </Link>
            </div>
            
            : <div className='d-flex justify-content-center'><StreamSkeleton/></div>
          }
               </div>
          ))}
        </InfiniteScroll>
            
        )
    }

  return (
    <Container>
        <div className='streamingTitle'>
        <h4>Yayın Akışı</h4><i class="fa-solid fa-rss connectionIcon"></i>
        </div>
        <div>
          {cardMap()}
        </div>
    </Container>
  )
}
