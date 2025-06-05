import React, { useEffect, useState } from 'react'
import './test.css'
const Test = ({ state }) => {
   return (
      // <div className="volunteer-container">
         <div className="main-card mx-auto">
            <div className="position-relative" style={{ zIndex: 1 }}>
               <img
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt="Volunteer Profile"
                  className="profile-image d-block mx-auto mb-4"
               />

               <div className="row g-4 mb-4">
                  <div className="col-md-6">
                     <h3 className="section-header">EDUCATION</h3>
                     <p className="section-content mb-0">B.A. in Psychology</p>
                  </div>
                  <div className="col-md-6">
                     <h3 className="section-header">ROLE</h3>
                     <p className="section-content mb-0">Event Coordinator</p>
                  </div>
               </div>

               <div className="mb-4">
                  <h3 className="section-header">ABOUT</h3>
                  <p className="about-text mb-0">
                     Experienced in organizing charity events and fundraisers. Dedicated and passionate about making a difference in the community.
                  </p>
               </div>

               <div className="d-flex justify-content-center gap-4 mt-4">
                  <div className="social-icon">
                     <span className="icon-text">in</span>
                  </div>

                  <div className="social-icon">
                     <span className="icon-text" style={{ fontWeight: 'normal' }}>🐦</span>
                  </div>

                  <div className="social-icon">
                     <span className="icon-text">f</span>
                  </div>
               </div>
            </div>
         </div>
      // </div>
   )
}

export default Test