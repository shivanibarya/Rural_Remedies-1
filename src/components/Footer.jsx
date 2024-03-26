import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h3>About Rural-Remedies</h3>
            <p>Rural Remedies is dedicated to providing natural remedies for rural communities.</p>
            <p>Work With Us</p>
            <p>Report Fraud</p>
            <p>Firstaid Kit</p>
            <p>Contact Us</p>
            <p>Feedback</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <h3>Connect With Us</h3>
            <ul>
            import facebook from './images/facebook.png'
            <img src={facebook} height='50' width='50'/>
            import instagram from './images/instragram.jpeg'
            <img src={instagram} height='50' width='50'/>
            import twitter from './images/twitter.png'
            <img src={twitter} height='50' width='50'/>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Security</p>
            <p>Term And Condition</p>
            <p>Collaboration</p>
            <p>Have questions or need assistance? <a href="#">Contact us</a>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p>&copy; {new Date().getFullYear()} By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. © Rural-Remedies™ Ltd. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
