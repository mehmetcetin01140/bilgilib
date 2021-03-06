import React from 'react'
import { useState , useEffect } from 'react';
import {Container,Card} from "react-bootstrap"
import { useLocation , Link} from "react-router-dom"
import StreamSkeleton from "./StreamSkeleton"
import InfiniteScroll from "react-infinite-scroll-component";
import Icons from "./Icons"
export default function Streaming() {
   const [items,setItems] = useState([])
   const [counterData,setCounterData] = useState(15)
  const getData = () =>{
    setCounterData(counterData + 5)
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
            <div key={index}>

            { i ? <div>
          
               <Link to={`/konu/${i.routepath}`} style={{ textDecoration: 'none' }}>
                <Card className="text-center streamingCards border-0 " >  
            <div className="d-flex">
                  <div className="categoryIcons">{Icons(i.Category.replaceAll(" ","").replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ı","i").replaceAll("ö","o").replaceAll("ü","u").toLowerCase())}</div>
            <Card.Img src={`${process.env.REACT_APP_ENDPOINT}/images/${i.Image}`} alt={i.Title} className="responsiveOpacity" style={{width:"160px",height:"160px"}}  />
            <Card.Title  className="d-flex align-items-center text-align-center ms-1 cardTitle"><span className='ms-1 titleSize'>{i.Title}</span></Card.Title>
            </div>
            <Card.Footer className="text-muted cardFooter "><i className="fa-solid fa-calendar-days me-2"></i>{new Date(i.Datelog.replace(/-/g, '/').slice(0,11)).toLocaleDateString()}</Card.Footer>
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
        <h4>Yayın Akışı</h4><i className="fa-solid fa-rss connectionIcon"></i>
        </div>
        <div>
          {cardMap()}
        </div>
    </Container>
  )
}
