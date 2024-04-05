import React from 'react';

class Footer extends React.Component {
  render() {
    return (
<footer className="mainfooter" role="contentinfo" style={{ 
  backgroundImage: `url('../src/assets/o.jpg')`,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  backgroundBlendMode: 'multiply'
}}>
  {/* Content of the footer */}


        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 style={{ color: "white" }}>Rural-Remedies</h4>
                  <img style={{ width: "60px" }} src="..\src\assets\icon 2.jpg" alt="" srcSet="" />
                  <p style={{ color: "white" }}>"Our rural remedies: Time-tested solutions rooted in tradition for common health needs, promoting natural wellness with simplicity."</p>
                  <img style={{ width: "40px", margin: 10 }} className="linkedinImg" src="..\src\assets\linkedin_socialnetwork_17441.png" alt="" srcSet="" />
                  <img style={{ width: "40px", margin: 10}} src="..\src\assets\twitter-icone.png" alt="" srcSet="" />
                  <img style={{ width: "40px", margin: 10}} src="..\src\assets\FB.png" alt="" srcSet="" />

                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 style={{ color: "white" }}>Popular Remedies</h4>
                  <img style={{ width: "100px" }} src="..\src\assets\th (2).jpeg" alt="" srcSet="" />
                  <p style={{ color: "white" }}>Ashwagandha: Stress relief, energy boost, immune support, cognitive enhancement..</p>
                  <img style={{ width: "100px" }} src="..\src\assets\turmeric.jpg" alt="" srcSet="" />
                  <p style={{ color: "white" }}>Turmeric: Anti-inflammatory, antioxidant, digestive aid, wound healer, respiratory support.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 style={{ color: "white" }}>Get In Touch</h4>
                  <img style={{ width: "30px" }} src="..\src\assets\email_PNG100751.PNG" alt="" srcSet="" />
                  <p style={{ color: "white" }}>mail@gmail.com</p>
                  <img style={{ width: "30px" }} src="..\src\assets\R (1).png" alt="" srcSet="" />
                  <p style={{ color: "white" }}>+1-123-456-7890</p>
                  <img style={{ width: "30px" }} src="..\src\assets\adress-logo-clipart-7.jpg" alt="" srcSet="" />
                  <p style={{ color: "white" }}>123 Rural-Remedies pure street, city, country</p>
                </div>
              </div>
              <div className="col-md-3">
                <h4 style={{ color: "white" }}>Subscribe</h4>
                <p style={{ color: "white" }}>Get our latest remedies, updates, enter your email and subscribe to our newsletter</p>
                <form>
                  <input type="email" placeholder="enter your email" />
                  <span><input type="submit" value="submit" /></span>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p style={{ color: "white" }} className="text-center">&copy; Copyright 2024 - Company Name. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
