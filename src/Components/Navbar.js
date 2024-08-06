import React, { useState } from 'react';
import logo from "../images/logo.jpeg";

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <nav>
                <div className='py-1' style={{ background: "black", color: "white", display: "flex", justifyContent: "end", alignItems: "center" }}>
                    <p style={{ paddingRight: "20%", margin: '0' }}>info@avkwellness.com</p>
                </div>
                <div style={{ background: 'pink', padding: ".5rem 0" }}>
                    <div className='container w-100' style={{ display: "flex", alignItems: "center" }}>
                        <div className='w-25' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img style={{ width: "4rem", height: "2.5rem" }} src={logo} alt="" />
                        </div>
                        <ul className='w-75' style={{ display: "flex", listStyle: "none", justifyContent: "space-evenly", fontWeight: "400", alignItems: "center", height: "100%", margin: 0, padding: 0 }}>
                            {["HOME", "ABOUT US", "PROGRAM", "OUR TEAM", "SERVICES", "CONTACT US"].map((item, index) => (
                                <li
                                    key={index}
                                    className={`p-2 nav_heading ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
