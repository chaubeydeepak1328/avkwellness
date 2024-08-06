import React from 'react';
import dash_img from "../images/About/a1.jpg"
import img1 from "../images/About/a2.png";
import img3 from "../images/About/a3.png";
import { Team } from '../config/Api';



const About = () => {
    return (
        <div>
            <div className='w-100' style={{ position: "relative" }}>
                <img className='w-100' src={dash_img} alt={dash_img} />
                <h1 className='text-white' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>About US</h1>
            </div>



            <div className='container' style={{ marginTop: "5rem" }}>
                <div className='d-flex gap-5 justify-content-center'>
                    <div style={{ width: "40%" }}>
                        <div className='d-flex gap-2'><hr style={{ width: "1.6rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>ABOUT US</h2></div>
                        <h1 style={{ color: "#d67d9d" }}>Empowering Your Health and Well-being</h1>
                        <p>At our Wellness Advocacy Programme, we understand that a healthy employee is a happy and productive one. We are to promote a holistic approach to well-being, encompassing physical, mental, and emotional health. We provide corporate employees with the resources and support they need to thrive both personally and professionally through our advocacy programmes. This initiative aims to create a healthier, more productive, and engaged workforce by providing comprehensive wellness solutions tailored to the unique needs of each organization.</p>

                    </div>
                    <img style={{ width: "20rem" }} src={img1} alt={img1} />
                </div>
            </div>


            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ marginTop: "5rem" }}>
                <div className='w-100'><h1>Our Mission</h1></div>
                <div class="card d-flex flex-row " style={{ width: "80rem" }}>
                    <div className='w-50 py-5' >
                        <img class="card-img-top" src={img3} alt={img3} />
                    </div>
                    <div class="card-body w-50 d-flex justify-content-center align-items-center">
                        <p class="card-text">To empower corporate leaders and employees with the tools and knowledge to achieve optimal wellness, enabling them to lead with clarity, resilience, and vitality.
                            <br /><br />
                            Our mission is to foster a culture of well-being and resilience among employees, promoting a balanced lifestyle that enhances both personal and professional growth. We are committed to delivering high-quality wellness services that empower employees to lead healthier lives and achieve their full potential.
                        </p>
                    </div>
                </div>
            </div>


            <div className='container ' style={{ marginTop: "5rem" }}>
                <h1 className='text-center py-4'>Our Team</h1>
                <div className='d-flex justify-content-evenly'>
                    {Team.map((curElm, index) => {
                        return (
                            <div className='card' key={index} style={{ width: "24rem" }}>
                                <img class="card-img-top" src={curElm.img} alt={curElm.img} />
                                <div className='card-body'>
                                    <p style={{ fontSize: "1.4rem" }}>{curElm.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
