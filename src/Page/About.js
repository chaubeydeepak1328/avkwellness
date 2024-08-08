import React from 'react';
import dash_img from "../images/About/a1.jpg"
import img1 from "../images/About/a2.png";
import img3 from "../images/About/a3.png";
import { Team } from '../config/Api';

import { motion } from 'framer-motion';


const floatUP = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.05 * index,
        }
    })
};


const floatRight = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05,
        }
    }
}

const floatLeft = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            delay: 0.05
        }
    }
}

const Grow = {
    initial: {
        opacity: 0,
        scale: .6,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .5,
            delay: 0.05
        }
    }
}








const About = () => {
    return (
        <>
            <div className='w-100' style={{ position: "relative" }}>
                <img className='w-100' src={dash_img} alt={dash_img} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}></div>
                <motion.h1 variants={floatUP} initial="initial" whileInView="animate" viewport={{ once: true }} className='text-white' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>About US</motion.h1>
            </div>



            <div className='w-100 d-flex justify-content-center px-5' style={{ marginTop: "5rem" }}>
                <div className='d-flex gap-5 justify-content-center flex-wrap'>
                    <div className='col-12 col-lg-5'>
                        <motion.div variants={floatRight} initial="initial" whileInView="animate" viewport={{ once: true }} className='d-flex gap-2'><hr style={{ width: "1.6rem", height: "3px", color: "#d67d9d", backgroundColor: "#d67d9d", }} /> <h2 style={{ fontSize: "1.4rem", color: "#65a29d" }}>ABOUT US</h2></motion.div>
                        <motion.h1 variants={floatUP} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ color: "#d67d9d" }}>Empowering Your Health and Well-being</motion.h1>
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }}>At our Wellness Advocacy Programme, we understand that a healthy employee is a happy and productive one. We are to promote a holistic approach to well-being, encompassing physical, mental, and emotional health. We provide corporate employees with the resources and support they need to thrive both personally and professionally through our advocacy programmes. This initiative aims to create a healthier, more productive, and engaged workforce by providing comprehensive wellness solutions tailored to the unique needs of each organization.</motion.p>

                    </div>
                    <motion.img variants={floatLeft} initial="initial" whileInView="animate" viewport={{ once: true }} className='w-100 rounded-1' style={{ maxWidth: "20rem" }} src={img1} alt={img1} />
                </div>
            </div>


            <div className='container d-flex flex-column align-items-center justify-content-center w-100' style={{ marginTop: "5rem" }}>
                <div className='w-100'><h1 className='px-lg-5 mx-lg-5'>Our Mission</h1></div>
                <div class="card d-flex flex-lg-row col-12 col-lg-10">
                    <motion.div variants={floatUP} initial="initial" whileInView="animate" viewport={{ once: true }} className='py-lg-5 col-lg-5' >
                        <img class="card-img-top" src={img3} alt={img3} />
                    </motion.div>
                    <div class="card-body  d-flex justify-content-center align-items-center">
                        <motion.p variants={Grow} initial="initial" whileInView="animate" viewport={{ once: true }} class="card-text">To empower corporate leaders and employees with the tools and knowledge to achieve optimal wellness, enabling them to lead with clarity, resilience, and vitality.
                            <br /><br />
                            Our mission is to foster a culture of well-being and resilience among employees, promoting a balanced lifestyle that enhances both personal and professional growth. We are committed to delivering high-quality wellness services that empower employees to lead healthier lives and achieve their full potential.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className='w-100' style={{ marginTop: "5rem" }}>
                <h1 className='text-center py-4'>Our Team</h1>
                <div className='d-flex justify-content-center flex-wrap gap-5'>
                    {Team.map((curElm, index) => {
                        return (
                            <motion.div variants={floatUP} initial="initial" whileInView="animate" custom={index} viewport={{ once: true }} className='card col-11 col-lg-3' key={index}>
                                <img class="card-img-top w-100" src={curElm.img} alt={curElm.img} />
                                <div className='card-body'>
                                    <h6 className='card-text' style={{ fontSize: "1.4rem" }}>{curElm.name}</h6>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default About
