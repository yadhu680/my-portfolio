import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'

export function Footer() {
  return (
    <Container className="footer">
      <p>@2025 All rights reserved </p>
      <div>
      {/*<a href="https://yadhunadh.net" className="logo">
        <span>www.yadhu</span>
        <span>nadh.net</span>
      </a>*/}
        <p>
          This website was made with <img src={reactIcon} alt="React" />
        </p>      
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/yadhunadh-chemmarassery"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/yadhu680/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B917736043657&text=Hello+Yadhunadh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>        
        
      </div>
    </Container>
  )
}
