import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import StreamSkeleton from './StreamSkeleton'
import {Container,Card} from "react-bootstrap"
import {Link} from "react-router-dom"
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
       .then(data=>setSearchData(data)+console.log(data))
    
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