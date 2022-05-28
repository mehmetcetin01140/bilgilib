import React from 'react'
import SearchInput from './SearchInput';
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import {useSpeechSynthesis} from 'react-speech-kit'
import { useLocation} from "react-router-dom"
import {Container,Navbar,Offcanvas,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { useEffect } from 'react';
import sevege from "../default.svg"
 function Navigation(props) {
  const location=useLocation()
  const {cancel} = useSpeechSynthesis();
  useEffect(() => {
    cancel()
  }, [location]);

  return (
    <>
    {['lg', ].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3 shadow-md Navigation ">
        <Container fluid>
          <Navbar.Brand href="#" className="logo"> <img src={sevege} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">Anasayfa</Nav.Link>
                <Nav.Link as={NavLink} to="/hakkimizda">Hakkımızda</Nav.Link>
                <NavDropdown
                  title="Kategoriler"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className='dropdownLinks'
                >
                  {
                      props.Categories.map((category,index)=>(
                       <NavDropdown.Item as={NavLink} to={`/kategoriler/${category.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ı","i").replaceAll("ç","c").replaceAll("ö","o").replaceAll("ü","u").replaceAll("ö","o")}`} key={index}>{category}</NavDropdown.Item>
                             )
                      )
                  }
                </NavDropdown>
              </Nav>

             <SearchInput/>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
 
  </>
  )
}
const mapStateToProps = (state) => {
  return {
      Categories: state.Categories,
  };}
export default connect(mapStateToProps)(Navigation)