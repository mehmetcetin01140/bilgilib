import React,{useState} from 'react'
import {Container} from 'react-bootstrap'
import logo from "../default.svg"

export default function AboutUs() {
    const [buttonText,setButtonText] = useState("Adresi Kopyala")
    const copyToClipboard = () =>{
            var copyText = "iletisim@bilgilib.com"
            navigator.clipboard.writeText(copyText); 
            setButtonText("Kopyalandı.")
    }

  return (
   <Container className='aboutUs'>
        <h1>Hakkımızda</h1>
        <p>Bilgilib, 2022 yılında <b>Mehmet Çetin</b> tarafından oluşturulmuş bir bilgi paylaşım platformudur. Amacımız büyük bir bilgi havuzu
        oluşturup bu bilgileri insanlığın hizmetine sunmak ve aynı zamanda yaşamdan içeriklerle okuyucularımızın keyifli vakit geçirmelerini sağlamaktır.
        </p>
        <h1 className="mt-4">Bize Ulaşın</h1>
        <p>Önerileriniz, görüşleriniz, reklam ve işbirliği teklifleriniz gibi konularda bizimle iletişime geçmek isterseniz, aşağıdaki mail adresinden iletişim sağlayabilirsiniz. </p>
        <b>E-Mail : iletisim@bilgilib.com</b>
        <br></br>
        <button onClick={copyToClipboard} className="aboutUsButton btn rounded-3 btn-sm mt-3 text-white">{buttonText}</button>
        <div className="aboutUsLogo w-100 mt-5">
        <img src={logo} />
            </div>
    </Container>
  )
}
