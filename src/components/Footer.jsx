import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-row">
          <div id="about" className="col-lg-4 col-md-6 col-sm">
            <h3>About Rural-Remedies</h3>
            <p>Rural Remedies is dedicated to providing natural remedies for rural communities.</p>
            <ul className="list-unstyled">
              <li><a href="#">Work With Us</a></li>
              <li><a href="#">Report Fraud</a></li>
              <li><a href="#">First Aid Kit</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
          <div id="connect" className="col-lg-4 col-md-6 col-sm-12">
            <h3>Connect With Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div id="help" className="col-lg-4 col-md-12 col-sm-12">
            <h3>Let Us Help You</h3>
            <ul className="list-unstyled">
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms And Conditions</a></li>
              <li><a href="#">Collaboration</a></li>
            </ul>
            <p>Have questions or need assistance? <a href="#">Contact us</a>.</p>
          </div>
        </div>
        <div id="footer-row-bottom" className="row">
          <div id="footer-bottom" className="col-md-12">
            <hr />
            <p className="text-center">&copy; {new Date().getFullYear()} By continuing past this page, you agree to our <a href="#">Terms of Service</a>, <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a>, and <a href="#">Content Policies</a>. All trademarks are properties of their respective owners. © Rural-Remedies™ Ltd. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
