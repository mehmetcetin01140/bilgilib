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
                     recomHolder.map((recom,index)=>(
             <div key={index}>
                       { recom ? 
                        <Link to={`/konu/${recom.routepath}`} style={{ textDecoration: 'none' }}>
                    <Card className="text-center entryViewCards" style={{display:recom.id === id ? "none" : ""}}>
                    <Card.Img src={`${process.env.REACT_APP_ENDPOINT}/images/${recom.Image}`} alt="Card image" className="recomImage"  />
                <Card.ImgOverlay >
                <Card.Body>
                  <Card.Title><span className="respTitle">{recom.Title}</span></Card.Title>
                </Card.Body>
                  </Card.ImgOverlay>
                <Card.Footer className="text-muted recomFooter"><i className="fa-solid fa-calendar-days me-2 "></i><span>{new Date(recom.Datelog.slice(0,11)).toLocaleDateString()}</span></Card.Footer>
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
