import React from 'react'
import dash_img from "../images/programs/dashboard.png"
import { keyComp, ProgramTypes } from '../config/Api';
import yoga from "../images/programs/yoga.jpg";

const Programs = () => {
    return (
        <>
            <div>
                <div className='w-100' style={{ position: "relative" }}>
                    <img className='w-100' style={{ height: "32rem" }} src={dash_img} alt={dash_img} />
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }}></div>
                    <h1 className='text-white' style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>About US</h1>
                </div>


                <div className='container mt-5'>
                    <h1 style={{ color: "#65A29D" }}>Welcome to Our Corporate Leaders Wellness Program</h1>
                    <p style={{ color: "#D67D9D", fontSize: "1.2rem" }}>Introduction</p>
                    <p>As a corporate leader, your well-being is crucial not only for your own success but also for the success of your organization. Our Wellness Advocacy Program is designed to support you in managing stress, enhancing your mental and physical health, and fostering a balanced lifestyle.
                        Our Wellness Advocacy Programs aimed at Corporate Leaders should focus on specific areas that resonate with their responsibilities, stress levels, and the high-pressure environment they navigate.</p>

                    <p className='px-3  px-lg-5 mx-lg-5' style={{ color: "#D67D9D" }}>"Leaders and people, they manage must be in excellent health. The irony is that "health is the real wealth" is the most well-known yet uncommon practice in our way of life".</p>
                </div>

                <div className='container mt-5'>
                    <h1 className='text-center' style={{ color: "#65A29D" }}>Wellness Advocacy Programs</h1>
                    <h4 className='text-center' style={{ color: "#D67D9D", fontWeight: "600" }}>Overview</h4>
                    <p>Our Wellness Advocacy Programs are meticulously crafted to cater to the unique needs of corporate leaders and employees in India. These programs aim to foster a holistic approach to well-being, ensuring that leaders and their team are not only at their peak performance but also embody wellness practices that inspire their teams.</p>
                </div>

                <div className='container mt-5'>
                    <h2 className='text-center' style={{ color: "#D67D9D", }}>Program Types</h2>
                    <div className='d-flex flex-wrap gap-5 justify-content-center' style={{ marginTop: "5rem" }}>
                        {ProgramTypes.map((curElm, index) => {
                            return (
                                <div className="card col-12 col-lg-5 p-5" style={{ background: "#D67D9D", color: "white" }} key={index}>

                                    <img className='card-img-top' src={curElm.img} alt={curElm.img} />

                                    <div className='card-body'>
                                        <h4 className='card-title text-black'>{curElm.title}</h4>
                                        <p className='card-text'>{curElm.description}</p>
                                    </div>
                                    <h6 className='text-black'>Key Features</h6>
                                    <div>
                                        <ul>
                                            {curElm.key_features.map((feature, index) => {
                                                return (
                                                    <li key={index}>{feature}</li>
                                                )
                                            })}
                                        </ul>

                                    </div>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <button type="button" class="btn" style={{ background: "#65A29D", color: "white", display: "flex", flexDirection: "row", gap: ".6rem", alignItems: "center" }}> <p className='p-0 m-1' >contact Us </p> <span className='fw-bold'>{'>'}</span></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div style={{ background: "#f5f5f5" }}>
                <div className='container d-flex flex-column ' style={{ marginTop: "5rem", paddingTop: "5rem" }}>
                    <h2 className='text-center mb-5' style={{ color: "#65A29D" }}>Key Components</h2>
                    <div className='d-flex flex-wrap gap-5 justify-content-lg-aroud justify-content-center'>
                        {keyComp.map((curElm, index) => {
                            return (
                                <div className='card col-12 col-lg-3' key={index}>
                                    <img className='card-img-top' src={curElm.img} alt={curElm.img} />
                                    <div className='card-body'>
                                        <h3 className='card-title text-center' style={{ color: "#65A29D" }}>{curElm.title}</h3>
                                        <ol>
                                            {curElm.prescsiption.map((precep, index) => {
                                                return (
                                                    <li key={index}>{precep}</li>
                                                );
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="elementor-shape-fill" fill="#f5f5f5" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
            </svg>



            <div className='px-2 px-lg-5 d-flex flex-wrap gap-5 justify-content-center'>
                <div className='col-12 col-lg-5'>
                    <div className='d-flex gap-2'><hr style={{ width: "5rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h6 style={{ fontSize: "1.4rem", color: "#65a29d" }}>HELP</h6></div>
                    <h1 style={{ color: "#d67d9d" }}>Join the Wellness Advocacy Program</h1>
                    <p>We invite all corporate and government organizations to join us in this transformative journey towards better health and well-being. Together, we can create a healthier, happier, and more productive workforce for a brighter future</p>
                    <div className='d-flex justify-content-center'>
                        <button type="button" class="btn " style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", paddingBottom: "0", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >Contact Us</p> <span className='fw-bold'>{'>'}</span></button>
                    </div>
                </div>
                <div className='col-12 col-lg-5'>
                    <img className='w-100' src={yoga} alt={yoga} />
                </div>
            </div>

        </>
    )
}

export default Programs
