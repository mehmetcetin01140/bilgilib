import React from 'react'
import LatestEntries from './LatestEntries'
import Recommendation from './Recommendation'
import {Container,Row,Col,Image} from "react-bootstrap"
import { useLocation , useNavigate} from "react-router-dom"
import { useEffect , useState } from 'react';
import {useSpeechSynthesis} from 'react-speech-kit'
import {Helmet} from "react-helmet";
export default function EntryView() {
     const [contentData,setContentData] = useState([])
     const [categoryHolder,setCategoryHolder] = useState()
     const [idHolder,setIdHolder] = useState()
     const location=useLocation()
     const locationHolder=location.pathname
     const fullHref = window.location.href
     const navigate = useNavigate();
     const [isActive,setIsActive] = useState(true)
     const [fontSizeHolder,setFontSizeHolder] = useState(1.125)
     const {speak,cancel} = useSpeechSynthesis();
     
    useEffect(()=>{
      let getLocation = (locationHolder.replaceAll("/","").replace("konu",""));
        const formData = new FormData()
        formData.append('currentPage',getLocation)
        formData.append('action','getContent')
       fetch(`${process.env.REACT_APP_ENDPOINT}`,{
         method: 'POST',
         body: formData
       })
       .then(res => res.json())
       .then(data=>[setContentData(data),setCategoryHolder(data[0].Category),setIdHolder(data[0].id)])
       
      },[locationHolder])

      const startSpeech = () =>{
        speak({ text: contentData[0].Content, lang:"tr-TR" })
      
      }
      const stopSpeech = () =>{
        cancel()
      }
      const speechChecker = () =>{
        isActive===false ? setIsActive(true) : setIsActive(false)
         isActive===false ? stopSpeech() : startSpeech()
    
      }
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <Container className="entryView">
       <Row>
           <Col md={12} lg={10}>
           <div className='goBack'>
           <i className="fa-solid fa-arrow-left goBackIcon" onClick={() => navigate(-1)}></i><span>Bir önceki sayfa</span>
           <div className='socialMedia'>
           <a href={`https://twitter.com/intent/tweet?text=${fullHref}`}><i className="fa-brands fa-twitter twitterButton"></i></a>
           <a href={`https://web.whatsapp.com/send?text=${fullHref}`}><i className="fa-brands fa-whatsapp whatsappButton"></i></a>
           <a href={`https://www.facebook.com/sharer/sharer.php?u=${fullHref}`}><i className="fa-brands fa-facebook facebookButton"></i></a>
           </div>
           </div>
              {contentData.map((content,index)=>(
            <div key={index}>
        <Helmet>
        <title>{`${content.Title}`}</title>
        <meta name="description" content={`${content.Title}`} />
        <meta property="og:title" content={`${content.Title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${content.Image}`} />
        <meta property="og:site_name" content="Bilgilib"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Bilgilib" />
        <meta name="twitter:title" content={`${content.Title}`} />
        <meta name="twitter:description" content={`${content.Title}`} />
        <meta name="twitter:image" content={`${content.Image}`} />
        </Helmet>
                <div className="titleArea mt-2 mb-1" key={index}>
                     <h1>{content.Title}</h1>
                     <span>Yayınlanma tarihi : {new Date(content.Datelog.slice(0,11)).toLocaleDateString()}</span><span className="ms-2">Kategori : {content.Category}</span>
                  </div>
                  <div className='zoomArea'>
                  <span>+</span> <i className="fa-solid fa-magnifying-glass me-2 zoomIn " onClick={()=>fontSizeHolder <= 1.3 ? setFontSizeHolder(fontSizeHolder+0.1):""}></i>
                  <span>-</span> <i className="fa-solid fa-magnifying-glass zoomOut" onClick={()=>fontSizeHolder > 1.125 ? setFontSizeHolder(fontSizeHolder-0.1):""}></i>
                 <i className={isActive ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high"} style={{float:"right" ,color: isActive ? "gray" : "green"}} onClick={speechChecker}></i>
                  </div>
                  <div className='contentArea mt-2'>
                 <span style={{fontSize:fontSizeHolder+"em"}}>{content.Content}</span>
  <div className="mt-3">
  <Image fluid src={content.Image} className='w-100'/>
  </div>
                </div>
                <div className="keywords mt-5">
                    <span>Anahtar Kelimeler : {content.Keywords}</span>
                </div>
               </div>
                  ))}
           </Col>
           <Col lg={2} md={12}>
            <Recommendation category={categoryHolder === undefined ? "" : categoryHolder.replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ı","i").replaceAll("ö","o").replaceAll("ü","u").toLowerCase()} id={idHolder}/>
           </Col>
          <div className='latestEntries-EntryView mt-5'>
          <LatestEntries></LatestEntries>
          </div>
       </Row>
   </Container>
   </>
  )
}
