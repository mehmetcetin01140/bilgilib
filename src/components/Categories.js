import React from 'react'
import StreamSkeleton from "./StreamSkeleton"
import { connect } from "react-redux";
import { searchGifs} from "../actions";
import { useLocation , Link ,useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';
import {Container,Card} from "react-bootstrap"
import ReactPaginate from "react-paginate"
 function Categories(props) {
     const [categoryStream,setCategoryStream] = useState([])
     const [categoryTitle,setCategoryTitle] = useState("")
     const [iconHolder,setIconHolder] = useState("")
     const [nameHolder,setNameHolder] = useState("")
     const [colorHolder,setColorHolder] = useState("")
     const [currentPage, setCurrentPage] = useState(0)
     const history = useNavigate();
     const location=useLocation()
     const locationHolder=location.pathname
     const PER_PAGE = 10;
     const offset = currentPage * PER_PAGE;
     const currentPageData = categoryStream
         .slice(offset, offset + PER_PAGE)
         .map(category => (
          <div>
          { category ?
      <Link to={`/deneme/${category.routepath}`} style={{ textDecoration: 'none' }}>
 <Card className="streamingCards text-center border-0 ">
     <div className="d-flex ">
 <Card.Img src={category.Image} alt="Card image" style={{width:"160px",height:"160px"}}  />
<Card.Title className="d-flex align-items-center ms-1 cardTitle">{category.Title}</Card.Title>
     </div>
<Card.Footer className="text-muted cardFooter"><i class="fa-solid fa-calendar-days me-2"></i>{category.Datelog}</Card.Footer>
</Card>   
          </Link>
          : <div className='d-flex justify-content-center'><StreamSkeleton/></div>
          }
          </div>
         ));
         useEffect(()=>{
           let getLocation = (locationHolder.replace("/","").replace("/","").replace("kategoriler","").split('/')[0]);
           setCategoryTitle(getLocation)
           const formData = new FormData()
           formData.append('currentPage',getLocation)
           formData.append('action','getCategory')
           fetch(`${process.env.REACT_APP_ENDPOINT}`,{
             method: 'POST',
             body: formData
            })
            .then(res => res.json())
            .then(data=>setCategoryStream(data))
            console.log(getLocation);
          },[locationHolder])
          const pageCount = Math.ceil(categoryStream.length / PER_PAGE);
          function handlePageClick({ selected: selectedPage }) {
            setCurrentPage(selectedPage);
            
          }
           const navigator = ({ selected: selectedPage }) =>{
             let route = `${locationHolder}=${selectedPage}`
             history(route)
         
           }
      useEffect(()=>{
        switch (categoryTitle) {
          case "bilim":
            setIconHolder("fa-solid fa-atom ms-2");
            setNameHolder("Bilim");
            setColorHolder("rgba(16, 40, 163, 0.845)")
          break;
            case "teknoloji":
              setIconHolder("fa-solid fa-microchip ms-2");
              setNameHolder("Teknoloji");
              setColorHolder("rgb(105, 96, 96)")
              break;
              case "yasam":
                setIconHolder("fa-solid fa-earth-americas ms-2");
                setNameHolder("Yaşam");
                setColorHolder("rgb(36, 56, 150)")
                break;
                case "kriptovarliklar":
                  setIconHolder("fa-brands fa-bitcoin ms-2");
                  setNameHolder("Kripto Varlıklar");
                  setColorHolder("rgb(225, 179, 11)")
                  break;
                  case "oyun":
                    setIconHolder("fa-solid fa-gamepad ms-2");
                    setNameHolder("Oyun");
                    setColorHolder("rgb(225, 86, 11)")
                    break;
                    case "askeriteknoloji":
                      setIconHolder("fa-solid fa-jet-fighter ms-2");
                      setNameHolder("Askeri Teknoloji");
                      setColorHolder("rgb(92, 123, 38)")
                      break;
                      case "hesaplamaaraclari":
                        setIconHolder("fa-solid fa-calculator ms-2");
                        setNameHolder("Hesaplama Araçları");
                        setColorHolder("rgb(123, 111, 140)")
                        break;
                        case "testler":
                          setIconHolder("fa-solid fa-pen-to-square ms-2");
                          setNameHolder("Testler");
                          setColorHolder("rgb(36, 150, 137)")
                          break;
                          case "biyografi":
                            setIconHolder("fa-solid fa-book-open-reader ms-2");
                            setNameHolder("Biyografi");
                            setColorHolder("rgb(95, 24, 24)")
                            break;
          default:
            break;
        }
      
    },[categoryTitle])

     return (
         <Container>
           <div className='categoryTitle mb-5 d-flex'>
             <h1>{nameHolder}</h1><i class={iconHolder} style={{color:colorHolder}}></i>
           </div>
      {currentPageData}
              <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        onClick={navigator}
        
      />
   
  </Container>
   
         )
        }
        const mapStateToProps = (state) => {
          return {
              Categories: state.Categories,
          };}
export default connect(mapStateToProps,{searchGifs})(Categories)