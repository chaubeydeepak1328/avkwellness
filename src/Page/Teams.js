import React from 'react';
import dash_img from "../images/Our-teams/dashboard.png"
import { teamMembers } from '../config/Api';

const Teams = () => {
    return (
        <div>
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
                <h1 className='text-white' style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>Our Teams</h1>
            </div>

            <div className='w-100' style={{ background: '#f5f5f5' }}>
                <div className='mt-5 d-flex flex-wrap gap-5 justify-content-center col-12'>
                    {teamMembers.map((curElm, index) => {
                        return (
                            <>
                                <div key={index} class="card d-flex flex-column flex-lg-row gap-4 col-11 col-md-11" style={{ maxWidth: "60rem", }}>

                                    <div className='col-12 col-lg-6'>
                                        <img class="card-img-top w-100" src={curElm.img} alt={curElm.img} />
                                    </div>

                                    <div class="card-body cpl-12 col-lg-6 d-flex flex-column justify-content-center">
                                        <div className='col-12 teamCardDetails'>
                                            <h5 class="card-title">{curElm.name}</h5>
                                            <div className='d-flex gap-2'><hr style={{ width: "8rem", height: "2px", backgroundColor: "red", }} /> <h2 style={{ fontSize: "1.4rem" }}>{curElm.title}</h2></div>
                                            <div className='d-flex gap-4 py-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="#22222266" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="#22222266" stroke-width="1.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                                                        <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                                                    </g>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="#22222266" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="#22222266" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p class="card-text">{curElm.description}</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ transform: "scaleY(-1)", transformOrigin: "center" }}>
                                    <path className="elementor-shape-fill" fill="white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                                </svg>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Teams
