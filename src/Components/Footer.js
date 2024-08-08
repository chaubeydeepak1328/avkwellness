import React from 'react';
import logo from "../images/logo.jpeg";

const Footer = () => {
    return (
        <div className='mt-5' style={{ background: "black", color: "white" }}>
            <div className='d-flex flex-wrap justify-content-center py-5 gap-2'>
                <div className='col-8 col-lg-2 d-flex justify-content-center align-items-center'>
                    <img className='w-100' src={logo} alt={logo} />
                </div>
                <div className='d-flex flex-column text-center col-12 col-lg-3'>
                    <h2>Quick Menu</h2>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Programs</p>
                    <p>Our teams</p>
                </div>
                <div className='d-flex flex-column align-items-center text-center col-12 col-lg-3 gap-2'>
                    <h2>Get In Touch</h2>
                    <div className='d-flex gap-1'> <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                        <path fill="pink" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.98.98 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99" />
                    </svg><a style={{ textDecoration: "none", color: "white" }} href='tel:011-46039314'>011-46039314</a></div>
                    <div className='d-flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fill="pink" d="M3 5v-.5a.5.5 0 0 0-.5.5zm18 0h.5a.5.5 0 0 0-.5-.5zM3 5.5h18v-1H3zM20.5 5v12h1V5zM19 18.5H5v1h14zM3.5 17V5h-1v12zM5 18.5A1.5 1.5 0 0 1 3.5 17h-1A2.5 2.5 0 0 0 5 19.5zM20.5 17a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5z" />
                                <path stroke="pink" stroke-linecap="round" stroke-linejoin="round" d="m3 5l9 9l9-9" />
                            </g>
                        </svg><a style={{ textDecoration: "none", color: "white" }} href='email:info@avkwellness.com'>info@avkwellness.com</a></div>
                    <div className='d-flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                            <path fill="pink" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                        </svg>
                        <p>Address: A-3/11, Shop No-01, Trehan Complex, Janakpuri , New Delhi- 110058</p>
                    </div>
                    <div>
                        <h4>Follow Us</h4>

                        <div className='d-flex gap-1 justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <g fill="none" stroke="#ffffff" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column text-center align-items-center col-12 col-lg-3'>
                    <h2>Map</h2>
                    <iframe
                        title='companyLocation'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.010837080505!2d77.0605958871582!3d28.62968089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf7f6ae361%3A0x88c15da012435142!2sWestend%20Mall%20Janakpuri%20West%20Delhi!5e0!3m2!1sen!2sin!4v1722917749577!5m2!1sen!2sin"
                        
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
            <hr />
            <div className='py-2 d-flex justify-content-center text-center'><p>Copyright©2024 AVK Wellness Private Limited. All rights reserved.</p></div>
        </div>
    )
}

export default Footer
