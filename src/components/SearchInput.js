import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {search} from "../actions"
import { useNavigate } from 'react-router-dom';
 function SearchInput(props) {
    const [inputData,setInputData] = useState("")
    const navigate = useNavigate()
    const submit = (e) =>{
        e.preventDefault()
        props.search(inputData)
        setInputData("")
        navigate("/search")
        
      }
  return (
    <Form className="d-flex" onSubmit={submit} >  
    <div className="flexbox me-3">
   <div className="search">
     <div>
       <input type="text" placeholder="Ara..." required value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
     </div>
   </div>
 </div>              
    </Form>
  )
}
export default connect(null,{search})(SearchInput)