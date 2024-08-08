import React, { useState } from 'react';
import logo from "../images/logo.jpeg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };


    const [menu_open, setMenuOpen] = useState(false);

    const handleMenubar = () => {
        setMenuOpen(!menu_open)
    }


    return (
        <>
            <nav className='nav_laptop'>
                <div className='py-1' style={{ background: "black", color: "white", display: "flex", justifyContent: "end", alignItems: "center" }}>
                    <p style={{ paddingRight: "20%", margin: '0' }}>info@avkwellness.com</p>
                </div>
                <div style={{ background: '#d67d9d', padding: ".5rem 0" }}>
                    <div className='container w-100' style={{ display: "flex", alignItems: "center" }}>
                        <NavLink to="/" className='w-25' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img style={{ width: "5rem", height: "2.5rem" }} src={logo} alt="" />
                        </NavLink>
                        <ul className='w-75' style={{ display: "flex", listStyle: "none", justifyContent: "space-evenly", fontWeight: "400", alignItems: "center", height: "100%", margin: 0, padding: 0 }}>
                            {["HOME", "ABOUT US", "PROGRAM", "OUR TEAM", "SERVICES", "CONTACT US"].map((item, index) => (
                                <NavLink
                                    to={item === "HOME" ? "/" : item.replace(" ", "-").toLowerCase()}
                                    key={index}
                                    className={`p-2 nav_heading ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    {item}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>




            <nav className='navTablet' style={{ position: "relative" }}>
                <div className='bg-black'>
                    <div className='container text-white d-flex justify-content-end'>
                        <p className='m-0'>info@avkwellness.com</p>
                    </div>
                </div>

                <div style={{ background: "#d67d9d" }}>
                    <div className='p-2 d-flex gap-5 p'>
                        <div className='px-3' style={{ cursor: "pointer" }} onClick={handleMenubar}>
                            {
                                menu_open ? (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <g fill="black">
                                        <path d="M16.396 7.757a1 1 0 0 1 0 1.415l-2.982 2.981l2.676 2.675a1 1 0 1 1-1.415 1.415L12 13.567l-2.675 2.676a1 1 0 0 1-1.415-1.415l2.676-2.675l-2.982-2.981A1 1 0 1 1 9.02 7.757L12 10.74l2.981-2.982a1 1 0 0 1 1.415 0" />
                                        <path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd" />
                                    </g>
                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                                    <path fill="black" fill-rule="evenodd" d="M15 2H0V1h15zm0 4H0V5h15zm0 4H0V9h15zm0 4H0v-1h15z" clip-rule="evenodd" />
                                </svg>)
                            }
                        </div>
                        <div style={{ width: "3rem" }}>
                            <img className='w-100' src={logo} alt={logo} />
                        </div>
                    </div>
                </div>

                {menu_open ? (
                    <div className='w-100 d-flex justify-content-center p-2' style={{ position: "absolute", top: "3rem", zIndex: 100 }}>
                        <div className='col-10 bg-white p-4' style={{ lineHeight: "2px" }}>
                            <NavLink to="/" className="text-decoration-none text-black">HOME</NavLink>
                            <hr />
                            <NavLink to="about-us" className="text-decoration-none text-black">ABOUT US</NavLink>
                            <hr />
                            <NavLink to="program" className="text-decoration-none text-black">PROGRAM</NavLink>
                            <hr />
                            <NavLink to="our-team" className="text-decoration-none text-black">OUR TEAM</NavLink>
                            <hr />
                            <NavLink to="services" className="text-decoration-none text-black">SERVICES</NavLink>
                            <hr />
                            <NavLink to="contact-us" className="text-decoration-none text-black">CONTACT US</NavLink>

                        </div>
                    </div>
                ) : ""}
            </nav>



            <nav className='nav_Phone' style={{ position: "relative" }}>
                <div className='bg-black'>
                    <div className='container text-white d-flex justify-content-end'>
                        <p className='m-0' style={{fontSize:".8rem"}}>info@avkwellness.com</p>
                    </div>
                </div>

                <div style={{ background: "#d67d9d" }}>
                    <div className='p-2 d-flex gap-5 justify-content-between'>

                        <div style={{ width: "4rem" }}>
                            <img className='w-100' src={logo} alt={logo} />
                        </div>
                        <div className='px-3' style={{ cursor: "pointer" }} onClick={handleMenubar}>
                            {
                                menu_open ? (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <g fill="black">
                                        <path d="M16.396 7.757a1 1 0 0 1 0 1.415l-2.982 2.981l2.676 2.675a1 1 0 1 1-1.415 1.415L12 13.567l-2.675 2.676a1 1 0 0 1-1.415-1.415l2.676-2.675l-2.982-2.981A1 1 0 1 1 9.02 7.757L12 10.74l2.981-2.982a1 1 0 0 1 1.415 0" />
                                        <path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd" />
                                    </g>
                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                                    <path fill="black" fill-rule="evenodd" d="M15 2H0V1h15zm0 4H0V5h15zm0 4H0V9h15zm0 4H0v-1h15z" clip-rule="evenodd" />
                                </svg>)
                            }
                        </div>
                    </div>
                </div>

                {menu_open ? (
                    <div className='w-100 d-flex justify-content-center p-2' style={{ position: "absolute", top: "3rem", zIndex: 100 }}>
                        <div className='col-12 bg-white p-4' style={{ lineHeight: "2px" }}>
                            <NavLink to="/" className="text-decoration-none text-black">HOME</NavLink>
                            <hr />
                            <NavLink to="about-us" className="text-decoration-none text-black">ABOUT US</NavLink>
                            <hr />
                            <NavLink to="program" className="text-decoration-none text-black">PROGRAM</NavLink>
                            <hr />
                            <NavLink to="our-team" className="text-decoration-none text-black">OUR TEAM</NavLink>
                            <hr />
                            <NavLink to="services" className="text-decoration-none text-black">SERVICES</NavLink>
                            <hr />
                            <NavLink to="contact-us" className="text-decoration-none text-black">CONTACT US</NavLink>

                        </div>
                    </div>
                ) : ""}
            </nav>

        </>
    );
}

export default Navbar;
