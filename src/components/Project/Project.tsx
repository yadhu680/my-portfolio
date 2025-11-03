import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import musicApp  from "../../assets/projects/sym_music.webp";
import ecomApp  from "../../assets/projects/store.webp";
import imdbApp  from "../../assets/projects/imdb_clone.webp";
import dashboardApp  from "../../assets/projects/saas_dashboard.webp";
import matrimonialApp  from "../../assets/projects/matrimonial.webp";
import chatApp  from "../../assets/projects/chat_app.webp";
import { Flip } from 'react-awesome-reveal';


export function Project() {
  return (
    <Container id="project">
      <h2>My Works</h2>
      <div className="projects">

        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/*<a href="https://github.com/yadhu680/sym-music" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit Github" /></a>*/}
                <a href="https://sym-music.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit SYM Music App" />
                </a> </div>
            </header>
            <div className="body">
              <h3>High Speed and Responsive Music App</h3>
              <p>
                A high speed and responsive music app. User can listen unlimited free music in different languages. User can also search for Music information, Artists, Playlists, Albums and so much more.
              </p>
              <p>
                <img src={musicApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Next.js 15</li> <li>React.js 19</li> <li>Tailwind CSS</li><li>Rest API</li> </ul> </footer>
          </div>
        </Flip>

        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">                
                <a href="https://yadhu680.github.io/figma-homepage-ssr/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit E-commerce Store" />
                </a> </div>
            </header>
            <div className="body">
              <h3>High Conversion E-commerce Landing Page</h3>
              <p>
                Responsive, best peformance and high conversion landing page built on top of Next.js 15 and MUI 7 with 100% Lighthouse score for Performance, Accessibility, Best Practices and SEO.
              </p>
              <p>
                <img src={ecomApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Next.js 15</li> <li>React.js 19</li> <li>MUI 7</li><li>Github</li> <li>Figma</li></ul> </footer>
          </div>
        </Flip>

        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">                
                <a href="https://yadhu680.github.io/imdb-clone-app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit IMDB Clone App" />
                </a> </div>
            </header>
            <div className="body">
              <h3>High speed IMDB Clone App</h3>
              <p>
                A modern, responsive IMDB clone that allows users to seamlessly explore movie and TV show details. It's built with ReactJS and is a demonstration of API integration, dynamic UI rendering, and efficient data handling.
              </p>
              <p>
                <img src={imdbApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js 18</li><li>Redux</li><li>Tailwind CSS</li><li>Rest API</li> <li>Vite</li></ul> </footer>
          </div>
        </Flip>

        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">                
                <a href="https://yadhu680.github.io/saas-dashboard/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit Saas Dashbaord" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Clean and Responsive Saas Dashboard</h3>
              <p>
                Clean, Responsive SaaS dashboards and Admin UIs in Next.js + Tailwind — Pixel-perfect, API-ready, and deployed on Vercel.
              </p>
              <p>
                <img src={dashboardApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Next.js 15</li><li>React.js 19</li><li>Tailwind CSS</li><li>Rest API</li> <li>Vercel</li></ul> </footer>
          </div>
        </Flip>
        
        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">                
                <a href="https://elegant.page.gd/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit Matrimonial Site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>High Speed Indian Matrimonial Website</h3>
              <p>
                A high speed and responsive Indian matrimonial website. Customer can register and join the community to find their perfect partner in seconds.
              </p>
              <p>
                <img src={matrimonialApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>PHP 8</li><li>Tailwind CSS</li><li>Rest API</li> <li>MySQL</li><li>Github</li></ul> </footer>
          </div>
        </Flip>

        <Flip direction="horizontal">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">                
                <a href="https://chat-frontend-delta-ten.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>WhatsApp Clone Chat App</h3>
              <p>
                A WhatsApp clone app where user can login to chat room and chit chat. User can chat with members online/offline publicly or privately.
              </p>
              <p>
                <img src={chatApp} style={{width:'100%', borderRadius:'6px'}} alt="Music App"/>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Next.js 19</li><li>Node.js</li><li>Tailwind CSS</li><li>Socket.io</li> <li>Vercel</li></ul> </footer>
          </div>
        </Flip>

      </div>
    </Container>
  );
}