import React from 'react'
import dash_img from "../images/programs/dashboard.png"

const Programs = () => {
    return (
        <div>
            <div className='w-100' style={{ position: "relative" }}>
                <img className='w-100' style={{ height: "32rem" }} src={dash_img} alt={dash_img} />
                <h1 className='text-white' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>About US</h1>
            </div>


            <div className='container'>
                <h1>Welcome to Our Corporate Leaders Wellness Program</h1>
                <p>Introduction</p>
                <p>As a corporate leader, your well-being is crucial not only for your own success but also for the success of your organization. Our Wellness Advocacy Program is designed to support you in managing stress, enhancing your mental and physical health, and fostering a balanced lifestyle.
                    Our Wellness Advocacy Programs aimed at Corporate Leaders should focus on specific areas that resonate with their responsibilities, stress levels, and the high-pressure environment they navigate.</p>

                <p>"Leaders and people, they manage must be in excellent health. The irony is that "health is the real wealth" is the most well-known yet uncommon practice in our way of life".</p>
            </div>

            <div className='container'>
                <h1>Wellness Advocacy Programs</h1>
                <h4>Overview</h4>
                <p>Our Wellness Advocacy Programs are meticulously crafted to cater to the unique needs of corporate leaders and employees in India. These programs aim to foster a holistic approach to well-being, ensuring that leaders and their team are not only at their peak performance but also embody wellness practices that inspire their teams.</p>
            </div>

            <div className='container'>
                <h2>Program Types</h2>
                <div>
                    { }
                </div>
            </div>

        </div>
    )
}

export default Programs
