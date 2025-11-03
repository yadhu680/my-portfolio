import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/YADHUNADH-CHEMMARASSERY-FRONTEND.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Yadhunadh "}</span>
          <span>{" Chemmarassery />"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Intro
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            Who Am I?
          </NavHashLink>          
          <NavHashLink smooth to="#certificate" onClick={closeMenu}>
            Certifications
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            My Works
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Connect Me
          </NavHashLink>
          <a href={Resume} target="_blank" rel="noreferrer" className="button">
            View My CV
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
