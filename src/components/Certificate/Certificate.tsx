import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import reactCert from "../../assets/reactjs_certificate.png"
import magentoCert from "../../assets/magento_certificate.png"
import shopifyCert from "../../assets/shopify_certificate.png"
import ScrollAnimation from "react-animate-on-scroll";

export function Certificate() {
  const imageStyle = { width: '100%', height: '260px' };
  return (
    <Container id="certificate">
      <h2>My Certifications</h2>
      <div className="certificates">

        <ScrollAnimation animateIn="flipInX">
          <div className="certificate">
            <header>              
              <div className="certificate-links">                
                <a href="https://tinyurl.com/yb73xpv4" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit ReactJS Certification" />
                </a> 
                </div>
            </header>
            <div className="body">
              <h3>ReactJS - Certificate of Excellence</h3>
              <p> 
                <a href="https://tinyurl.com/yb73xpv4" target="_blank" rel="noreferrer">
                  <img src={reactCert} style={imageStyle} alt="ReactJS Certification" /> 
                </a> 
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>JavaScript</li> <li>ReactJS</li> <li>Redux</li><li>Context</li><li>TailwindCSS...</li> </ul> </footer>
          </div>
        </ScrollAnimation> 

        <ScrollAnimation animateIn="flipInX">
          <div className="certificate">
            <header>              
              <div className="certificate-links">                
                <a href="https://www.credly.com/badges/a236e29d-68be-42b8-bc6a-c487b1729efa/public_url" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit Adobe Certified Expert Certification" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Adobe Certified Expert</h3>
              <p> 
                <a href="https://www.credly.com/badges/a236e29d-68be-42b8-bc6a-c487b1729efa/public_url" target="_blank" rel="noreferrer">
                  <img src={magentoCert} style={imageStyle} alt="Adobe Certified Expert Certification" />  
                </a>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Magento</li> <li>JavaScript</li><li>Knockout</li><li>HTML5</li><li>CSS3...</li> </ul> </footer>
          </div>
        </ScrollAnimation> 

        <ScrollAnimation animateIn="flipInX">
          <div className="certificate">
            <header>              
              <div className="certificate-links">                
                <a href="https://www.shopifyacademy.com/page/badges" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit Shopify Theme Development Certification" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Theme Development Certification</h3>
              <p> 
                <a href="https://www.shopifyacademy.com/page/badges" target="_blank" rel="noreferrer">
                  <img src={shopifyCert} style={imageStyle} alt="Shopify Theme Development Certification" />  
                </a>
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>JavaScript</li> <li>Liquid</li><li>HTML5</li><li>jQuery</li><li>Theme</li><li>CSS3...</li> </ul> </footer>
          </div>
        </ScrollAnimation>                

      </div>
    </Container>
  );
}