

function Contact() {
  return (
    <>
      <div className="main">
        <div className="Log">
          <form action="/" method="post" className="login-container">
            <div className="login-header">
              <div>Contact-us</div>
            </div>
            <input
              type="text"
              className="login-input"
              name="name"
              id="username"
            />
            <input
              type="password"
              className="login-input"
              name="password"
              id="password"
              maxLength={10}
              minLength={5}
            />
            <textarea name="" id="" cols="42" rows="2"></textarea>
            <button className="login-button" id="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.609790004078!2d77.51978227482896!3d23.18443771026931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41b3bbba4b9f%3A0x9d9c1059c6c2b645!2sSAGE%20University%20Bhopal%20Admin%20Block!5e0!3m2!1sen!2sin!4v1711618363648!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contact;
