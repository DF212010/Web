import React from 'react'

const Hero = () => {
    return (
        <div className='hero-section container-fluid py-5 text-center'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <i className="fas fa-users hero-icon mb-4"></i>
                        <h1 className="hero-title mb-4">Meet Our Team</h1>
                        <p className="lead hero-subtitle mb-4">
                            Passionate professionals dedicated to delivering excellence and innovation in everything we do
                        </p>
                        <div className="hero-divider mx-auto mb-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero