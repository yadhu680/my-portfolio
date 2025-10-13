import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { Fade } from 'react-awesome-reveal';
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="up">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </Fade>
        <Fade direction="up" delay={0.2 * 1000}>
          <h1>Yadhunadh Chemmarassery</h1>
        </Fade>
        <Fade direction="up" delay={0.4 * 1000}>
          <h3>Lead UI Developer</h3>
        </Fade>
        <Fade direction="up" delay={0.6 * 1000}>
          <p className="small-resume">With over a decade (12 years) of professional experience.</p>
        </Fade>
        <Fade direction="up" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#about" className="button">Who Am I?</NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade direction="up" delay={1 * 1000}>
      <div className="social-media"><a
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
        </Fade>
      </div>
      <div className="hero-image">
        <Fade direction="right" delay={1 * 1000}>
          <img src={Illustration} alt="Yadhunadh Chemmarassery - A UI/fullstack developer" />
        </Fade>
      </div>
    </Container>
  )
}