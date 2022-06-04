import React from 'react'
import StreamSkeleton from "./StreamSkeleton"
import { connect } from "react-redux";
import { useLocation , Link ,useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';
import {Container,Card} from "react-bootstrap"
import ReactPaginate from "react-paginate"
import previous from "../svg/previous.svg"
import next from "../svg/next.svg"
import {Helmet} from "react-helmet";
 function Categories(props) {
     const [categoryStream,setCategoryStream] = useState([])
     const [categoryTitle,setCategoryTitle] = useState("")
     const [iconHolder,setIconHolder] = useState("")
     const [nameHolder,setNameHolder] = useState("")
     const [colorHolder,setColorHolder] = useState("")
     const [currentPage, setCurrentPage] = useState(0)
     const navigate= useNavigate();
     const location=useLocation()
     const locationHolder=location.pathname
     const PER_PAGE = 5;
     const pageCount = Math.ceil(categoryStream.length / PER_PAGE);
     const offset = currentPage * PER_PAGE;
     const currentPageData = categoryStream
         .slice(offset, offset + PER_PAGE)
         .map((category,index) => (
          <div key={index}>
          { category ?
              <Link to={`/konu/${category.routepath}`} style={{ textDecoration: 'none' }}>
         <Card className="streamingCards text-center border-0 ">
             <div className="d-flex ">
         <Card.Img src={category.Image} alt="Card image" className='responsiveOpacity' style={{width:"160px",height:"160px"}}  />
        <Card.Title className="d-flex align-items-center ms-1 cardTitle"><span className='categorySpan'>{category.Title}</span></Card.Title>
             </div>
        <Card.Footer className="text-muted cardFooter"><i className="fa-solid fa-calendar-days me-2"></i>{new Date(category.Datelog.slice(0,11)).toLocaleDateString()}</Card.Footer>
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
          
          },[locationHolder])
          // ----------------------
          function handlePageClick({ selected: countId}) {
            setCurrentPage(countId);
            navigate(`/kategoriler/${categoryTitle}${countId===0?"":"/"}${countId===0 ? countId="":countId+1}`)
          }
          useEffect(() => {
            let idChecker = Number(locationHolder.replace("/","").replace("/","").replace("kategoriler","").replace(`${categoryTitle}`,"").replace("/",""))
              setCurrentPage(idChecker>0 ? idChecker-1 : idChecker)
       
            }, [locationHolder,categoryTitle]);
            
            const hrefCreator = (href) =>{
              return href===1 ? href=`/kategoriler/${categoryTitle}/` : `/kategoriler/${categoryTitle}/${href}`
            }
           
      const forcePage = () =>{
      let idChecker = Number(locationHolder.replace("/","").replace("/","").replace("kategoriler","").replace(`${categoryTitle}`,"").replace("/",""))
      let check = idChecker>0 ? idChecker-1 : idChecker
      return check

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
                setColorHolder("#005477")
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
                          
          default:
            break;
        }
      
    },[categoryTitle])
   
     return (
       <>
        <Helmet>
        <title data-react-helmet={true}>{"Bilgilib Kategoriler"}</title>
        <meta name="description" content={"Bilgilib Kategoriler"}  data-react-helmet={true}/>
        </Helmet>
         <Container>
           <div className='categoryTitle mb-5 d-flex'>
             <h1>{nameHolder}</h1><i className={iconHolder} style={{color:colorHolder}}></i>
           </div>
      {currentPageData}

      <ReactPaginate
        previousLabel={<div className='previousSvg'><img src={previous} height="30" alt='previous'/></div>}
        nextLabel={<div className='nextSvg'><img src={next} height="30" alt='next'/></div>}
        pageCount={pageCount}
        pageClassName={"pages row mx-1"}
        onPageChange={handlePageClick}
        containerClassName={"pagination container d-flex justify-content-center mt-3"}
        previousLinkClassName={"pagination__linkPrevious"}
        nextLinkClassName={"pagination__linkNext"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        hrefAllControls={true}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        hrefBuilder={hrefCreator}
        forcePage={forcePage()!==currentPage?"":forcePage()}/>
      
  </Container>
   
         </>
         )
        }
        const mapStateToProps = (state) => {
          return {
              Categories: state.Categories,
          };}
export default connect(mapStateToProps)(Categories)