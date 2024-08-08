import React from 'react'
import dash_img from "../images/pannelImage.png";
import qualites_img from "../images/qualites.jpg";

import { Benefits_section, Progrm_section, testmonial } from '../config/Api';

const Home = () => {
    return (
        <>
            <div className='w-100'>
                <img className='w-100' src={dash_img} alt={dash_img} />
            </div>



            {/* About Us */}
            <div className='container d-flex flex-wrap-reverse justify-content-between pt-5 w-100' style={{ marginTop: "5rem" }}>
                <div className='col-12 col-lg-5'>
                    <div className='d-flex gap-2'><hr style={{ width: "1.6rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>ABOUT US</h2></div>
                    <h1 style={{ color: "#d67d9d" }}>Learn About Our wellness Advocacy Programs</h1>
                    <p>At our Wellness Advocacy Programs, we understand that a healthy employee is a happy and productive one. We are to promote a holistic approach to well-being, encompassing physical, mental, and emotional health. We provide corporate employees with the resources and support they need to thrive both personally and professionally through our advocacy programs. This initiative aims to create a healthier, more productive, and engaged workforce by providing comprehensive wellness solutions tailored to the unique needs of each organization.</p>
                    <button type="button" class="btn" style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", paddingBottom: "0", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >Learn More </p> <span className='fw-bold'>{'>'}</span></button>
                </div>
                <div className='col-12 col-lg-5'>
                    <img className='w-100' src={qualites_img} alt={qualites_img} />
                </div>
            </div>

            {/* Program */}
            <div className='px-4 w-100' style={{ marginTop: '5rem' }}>
                <div className='d-flex flex-row justify-content-between px-lg-5 mx-lg-5'>
                    <div>
                        <div className='d-flex gap-2'><hr style={{ width: "2.4rem", height: "2px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>PROGRAMS</h2></div>
                        <h1 style={{ color: "#d67d9d" }}>Wellness Advocacy Programs</h1>
                    </div>
                    <button type="button" className="btn homeDetailsBtn" style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", height: "fit-content", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >Details </p> <span className='fw-bold'>{'>'}</span></button>
                </div>
                <div className='d-flex flex-wrap gap-5 justify-content-center'>
                    {Progrm_section.map((curElm, index) => {
                        return (
                            <div key={index} class="card col-12 col-lg-3">
                                <img class="card-img-top" src={curElm.img} alt={curElm.img} />
                                <div class="card-body">
                                    <h5 class="card-title">{curElm.title}</h5>
                                    <p class="card-text">{curElm.description}</p>
                                </div>
                                <div className='d-flex justify-content-center pb-4'>
                                    <button type="button" class="btn" style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", paddingBottom: "0", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >Learn More </p> <span className='fw-bold'>{'>'}</span></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="button" class="btn mt-4" style={{ background: "#d67d9d", color: "white", display: "flex", flexDirection: "row", paddingBottom: "0", gap: "1rem", alignItems: "center" }}> <p className='p-0 m-1' >View Services </p> <span className='fw-bold'>{'>'}</span></button>
                </div>
            </div>


            {/* Benefits */}
            <div className='row d-flex justify-content-center w-100' style={{ marginTop: "10rem" }}>
                <div className='d-flex flex-row justify-content-between col-12 px-lg-5 mx-lg-5 px-5'>
                    <div className='px-lg-5 mx-lg-5'>
                        <div className='d-flex gap-2'>
                            <hr style={{ width: "4rem", height: "2px", color: "#d67d9d", backgroundColor: "#d67d9d" }} />
                            <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>BENEFITS</h2>
                        </div>
                        <h1>Benefits of the Program</h1>
                    </div>
                </div>
                <div className='d-flex flex-wrap gap-5 justify-content-center'>
                    {Benefits_section.map((curElm, index) => (
                        <div key={index} className='card benefit_card d-flex  flex-lg-row col-11 col-lg-5 col-xxl-3'>
                            <div className='col-12 col-lg-5'>
                                <img className='card-img-top' src={curElm.img} alt={curElm.img} />
                            </div>
                            <div className='card-body w-100'>
                                <h5 className='card-title'>{curElm.title}</h5>
                                <p className='card-text'>{curElm.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Testmonial */}
            <div className='mt-5 px-5' style={{ marginTop: "5rem" }}>
                <div className='w-100 d-flex justify-content-center'> <h1 style={{ color: "#d67d9d", }}>Testimonials</h1></div>
                <div className=' d-flex flex-row flex-wrap justify-content-evenly mt-5 gap-5' >
                    {
                        testmonial.map((curElm, index) => {
                            return (
                                <div key={index} className='d-flex flex-column align-items-center px-1 col-12 col-lg-3' style={{ background: "#d67d9d", color: "white", position: "relative" }}>
                                    <div style={{ height: "2rem", position: "absolute", top: "0" }}><h1 style={{ fontSize: "4rem", }}>“</h1></div>
                                    <p className='text-center pt-5'>{curElm.description}</p>
                                    <img src={curElm.img} alt={curElm.img} style={{ width: "5rem", }} />
                                    <div className=' pt-4 d-flex flex-column align-items-center justify-content-center' style={{ lineHeight: "5px" }}>
                                        <p>{curElm.name}</p>
                                        <p>{curElm.title}</p>
                                        {curElm.position && <p>{curElm.position}</p>}
                                        <p>{curElm.experience}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
