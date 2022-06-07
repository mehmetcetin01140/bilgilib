import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import StreamSkeleton from './StreamSkeleton'
import {Container,Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import Icons from "./Icons"
function SearchResults(props) {
    const [searchData,setSearchData] = useState([])
    const dataLength = searchData.length
    let param = props.SearchParam
    const getData=()=>{
        const formData = new FormData()
        formData.append('searchParam',param)
        formData.append('action','getSearchData')
       fetch(`${process.env.REACT_APP_ENDPOINT}`,{
         method: 'POST',
         body: formData
       })
       .then(res => res.json())
       .then(data=>setSearchData(data))
    
    }
   
    useEffect(()=>{
        if(param){
            getData()
        }
        },[param])

        const cardMap = () =>{
            return(  
           <>
              {searchData.map((i, index) => (
                <div key={index}>
                { i ? <div key={index } >
              
                   <Link to={`/konu/${i.routepath}`} style={{ textDecoration: 'none' }}>
                    <Card className="text-center streamingCards border-0 " >
                <div className="d-flex">
                <div className="categoryIcons">{Icons(i.Category.replaceAll(" ","").replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ı","i").replaceAll("ö","o").replaceAll("ü","u").toLowerCase())}</div>
                <Card.Img src={`${process.env.REACT_APP_ENDPOINT}/images/${i.Image}`} alt={i.Title} className="responsiveOpacity" style={{width:"160px",height:"160px"}}  />
                <Card.Title  className="d-flex align-items-center text-align-center ms-2 cardTitle"><span className="titleSize">{i.Title}</span></Card.Title>
                </div>
                <Card.Footer className="text-muted cardFooter "><i className="fa-solid fa-calendar-days me-2"></i>{new Date(i.Datelog.replace(/-/g, '/').slice(0,11)).toLocaleDateString()}</Card.Footer>
                </Card>   
                </Link>
                </div>
                
                : <div className='d-flex justify-content-center'><StreamSkeleton/></div>
              }
                   </div>
              ))}
              </>
                
            )
        }
    
  return (
      <Container className='searchResults'>
          <h5 className='text-center'>Yapılan aramada <span>{dataLength}</span> sonuç bulundu.</h5>
          <div>{cardMap()}</div>
      </Container>
  )
}


const mapStateToProps = (state) => {
    return {
        SearchParam: state.SearchParam
    };}
export default connect(mapStateToProps)(SearchResults)