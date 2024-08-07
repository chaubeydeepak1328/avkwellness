import React from 'react';
import dash_img from "../images/Our-teams/dashboard.png"

const Teams = () => {
    return (
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
                }}>Our Teams</h1>
            </div>

            <div className='container'>

            </div>
        </div>
    )
}

export default Teams
