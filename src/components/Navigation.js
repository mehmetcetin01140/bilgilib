import React,{useState} from 'react'
import SearchInput from './SearchInput';
import { connect } from "react-redux";
import {NavLink,Link} from "react-router-dom"
import {useSpeechSynthesis} from 'react-speech-kit'
import { useLocation} from "react-router-dom"
import {Container,Navbar,Offcanvas,Nav,NavDropdown} from 'react-bootstrap'
import { useEffect } from 'react';
import logo from "../default.svg"
 function Navigation(props) {
  const location=useLocation()
  const {cancel} = useSpeechSynthesis();
  useEffect(() => {
    cancel()
    handleClose()
  }, [location]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {['lg', ].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3 shadow-md Navigation ">
        <Container fluid>
          <Navbar.Brand className="logo"><Link to="/"><img src={logo} alt="bilgilib" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  onClick={handleShow}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show===true||false ? show : undefined}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton className='offcanvasHeader'>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <div className='offcanvasLogo'><img src={logo} alt="bilgilib" /></div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvasBody">
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/" ><span>Anasayfa</span></Nav.Link>
                <Nav.Link as={NavLink} to="/hakkimizda"><span>Hakkımızda</span></Nav.Link>
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