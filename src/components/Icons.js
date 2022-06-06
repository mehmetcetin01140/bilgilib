import React from 'react'

export default function Icons(Icon) {
    switch (Icon) {
        case "bilim":
        return <i className='fa-solid fa-atom iconDesign' style={{color:"#56BBF1"}}></i>
      case "teknoloji":
        return <i className='fa-solid fa-microchip iconDesign' style={{color:"rgb(105, 96, 96)"}}></i>
        case "yasam":
        return <i className='fa-solid fa-earth-americas iconDesign' style={{color:"#005477"}}></i>
        case "oyun":
          return <i className='fa-solid fa-gamepad iconDesign' style={{color:"rgb(225, 86, 11)"}}></i>
          case "askeriteknoloji":
            return <i className='fa-solid fa-jet-fighter iconDesign' style={{color:"#41533B"}}></i>
           
        default:
          break;
      }
}
