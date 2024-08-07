import React from 'react';
import dash_img from "../images/contact-us/dashboard.png"

const Contact = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={dash_img} alt={dash_img} />

      <div className='container d-flex gap-5' style={{ marginTop: "8rem", color: "gray" }}>
        <div className='d-flex flex-column'>
          <h2 style={{ color: "#65A29D" }}>Get In Touch</h2>
          <h4 style={{ color: "#D67D9D" }}> Information</h4>
          <p>For more information about the Wellness Advocacy Programme and how to get started, please contact us at:</p>
          <p>    <b>Landline</b>: +91-11- 46039314</p>
          <p><b>Email</b>: info@avkwellness.com</p>
          <p><b>Website</b>: www.avkwellness.com</p>
          <p><b>Address</b>: A-3/11, Shop No-01, Trehan Complex, Janakpuri , New Delhi- 110058</p>
          <p> <b>AVK WELLNESS PRIVATE LIMITED</b></p>
          <p><b>CIN</b>:   U55101DL2024PTC427842</p>
          <p> <b>PAN</b>:  ABACA2928H</p>
          <p><b>TAN</b>:  DELA76303Ds</p>
          <div className='d-flex gap-2'><hr style={{ width: "1.6rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#d67d9d" }}> Follow Us</h2></div>
          <div className='d-flex gap-4 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <path fill="#22222266" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <g fill="none" stroke="#22222266" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <path fill="#22222266" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
              <path fill="#22222266" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
            </svg>
          </div>
        </div>

        <div className='card d-flex flex-column p-5' style={{ background: "#f5f5f5", color: "gray" }}>
          <h4 style={{ color: "#D67D9D" }}>Send Us Message</h4>
          <p>Join us in advocating for wellnwss and making positive difference in lives of employees across india!</p>
          <form action="#" className='d-flex flex-column gap-3'>
            <input type="text" className='form-control' name="name" id="name" placeholder="Full Name" />
            <input type="text" className='form-control' name="name" id="name" placeholder="Email Address" />
            <textarea name="message" id="message" style={{ height: "8rem", padding: "1rem" }} placeholder='Message'></textarea>
            <div>
              <button type="button" class="btn" style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", paddingBottom: "0", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >Send Message </p> <span className='fw-bold'>{'>'}</span></button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
