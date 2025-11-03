import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import qrCode from "../../assets/projects/qr_code.png";

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Connect Me</h2>
        <p>Ready to get started? </p><br />
        <p>CONTACT ME TO TAKE YOUR BUISNESS ONLINE.</p>
      </header>
      
      <div style={{display: "grid", alignItems: "center", justifyContent: "center", margin: "20px"  }}>
        <p style={{ marginBottom: "10px", fontSize: "1.3rem", textAlign: "center" }}>Scan QR Code for a Quick Connect</p>
        <img src={qrCode} alt="QR Code" />
      </div>    
      <p style={{ marginBottom: "10px", fontSize: "2rem", textAlign: "center" }}>OR</p>
      <div className="contacts">
        <div>
          <a href="mailto:symtechands@gmail.com"><img src={emailIcon} alt="Email" /></a> 
            <a href="mailto:symtechands@gmail.com">symtechands@gmail.com</a>
          </div>
        <div>
          <a href="tel:+917736043657"><img src={phoneIcon} alt="Mobile Number" /></a>
            <a href="tel:+917736043657">(+91) 77360 43657</a>
        </div>  
        
      </div>  
    </Container>
  )
}