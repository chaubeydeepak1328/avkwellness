import React from 'react';
import dash_img from "../images/Services/dashboard.png";
import { services } from '../config/Api';

const Services = () => {
  return (
    <div>
      <img className='w-100' src={dash_img} alt={dash_img} />

      <div className='container gap-5 mt-5 d-flex flex-wrap justify-content-center'>
        {services.map((curElm, index) => {
          return (
            <>
              <div key={index} className="card p-4 col-12 col-md-5 col-lg-3" style={{ minWidth: "1rem", background: `${curElm.card_style.card_bg}`, color: `${curElm.card_style.card_color}` }}>
                <h1 className="card-title text-center" style={{ fontWeight: "900" }} >{curElm.name}</h1>
                <div className='d-flex justify-content-center'>
                  <button type="button" class="btn btn-outline-dark my-4" style={{ fontSize: "1rem", background: `${curElm.card_style.btn_bg}`, color: `${curElm.card_style.btn_color}`, display: "flex", flexDirection: "row", paddingBottom: "0", gap: ".5rem", alignItems: "center", cursor: "pointer" }}> <p className='p-0 m-1' >{curElm.contact}</p> <span className='fw-bold'>{'>'}</span></button>
                </div>
                <h4>{curElm.targetAudience}</h4>
                <p style={{ color: `${curElm.card_style.incl_color}` }}>-includes</p>

                <div>
                  <ul>
                    {curElm.includes.map((item, index) => {
                      return (
                        <li key={index}>{item}</li>
                      )
                    })}
                  </ul>
                </div>

              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Services
