import React from 'react'
import {Card} from "react-bootstrap"
import { useEffect , useState } from 'react';
import {Link} from "react-router-dom"
import RecomSkeleton from "./RecomSkeleton"
export default function Recommendation(props) {
    const [recomHolder,setRecomHolder] = useState([])
    const category = props.category
    const id = props.id
    useEffect(()=>{
          const formData = new FormData()
          formData.append('category',category)
          formData.append('id',id)
          formData.append('action','getRecommendation')
         fetch(`${process.env.REACT_APP_ENDPOINT}`,{
           method: 'POST',
           body: formData
         })
         .then(res => res.json())
         .then(data=>setRecomHolder(data))
        },[category,id])
  
  return (
      
    <div className="recommendationArea mt-5">
                    <h5 className='d-flex justify-content-center'>
                        İlgini Çekebilir..
                    </h5>
                 {
                     recomHolder.map(recom=>(
             <div>
                       { recom ? 
                        <Link to={`/deneme/${recom.routepath}`} style={{ textDecoration: 'none' }}>
                    <Card className="text-center entryViewCards" style={{display:recom.id===id?"none":""}}>
                    <Card.Img src="https://cdn1.ntv.com.tr/gorsel/eQWCDkMfNUOkhrUYCtBUWw.jpg?width=1200&height=675&mode=crop&scale=both&v=1649150527773&meta=rectanglee" alt="Card image"  />
                <Card.ImgOverlay >
                <Card.Body>
                  <Card.Title>{recom.Title}</Card.Title>
                </Card.Body>
                  </Card.ImgOverlay>
                <Card.Footer className="text-muted">{new Date(recom.Datelog.slice(0,11)).toLocaleDateString()}</Card.Footer>
              </Card> 
              </Link>
               : <div><RecomSkeleton/></div>
                       
                       } 
                       
            </div>
                     ))
                 }
                    
              </div>
  )
}
