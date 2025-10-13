import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Connect Me</h2>
        <p>Ready to get started? </p>
        <p>Contact me for your dreams come to reality.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:yadhu680@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:yadhu680@gmail.com">yadhu680@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918943200360"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918943200360">(+91) 8943 200 360</a>
        </div>  
      </div>
      {/*<Form></Form>*/}
    </Container>
  )
}