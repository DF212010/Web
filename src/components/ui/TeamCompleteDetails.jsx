import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from "../../hooks/iconmap";
import React, { useEffect, useRef, useState } from 'react'

const TeamCompleteDetails = () => {
    const [completeDetails, setCompleteDetails] = useState(null);
    const teamModalRef = useRef(null);
    useEffect(() => {
        const exampleModal = teamModalRef.current;
        if (!exampleModal) return;

        const handleShow = (event) => {
            const button = event.relatedTarget;
            const data = button?.getAttribute("data-whatever");
            setCompleteDetails(JSON.parse(data));
            console.log("Details (from event):", data);
        };

        exampleModal.addEventListener("show.bs.modal", handleShow);

        return () => {
            exampleModal.removeEventListener("show.bs.modal", handleShow);
        };
    }, []);
    return (
        <div className="modal fade bd-example-modal-lg" id="myModal" tabIndex="-1" ref={teamModalRef}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body p-0" >
                        {completeDetails !== null ? (<div className="volunteer-container">
                            <span
                                data-bs-dismiss="modal"
                                className="custom-close-icon"
                                role="button"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={iconMap["xmark"]} />
                            </span>

                            <div className="main-card mx-auto">
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <img
                                        src={completeDetails.image}
                                        alt={completeDetails.name}
                                        className="profile-image d-block mx-auto mb-4"
                                    />

                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <h3 className="section-header">EDUCATION</h3>
                                            <p className="section-content mb-0">
                                                {completeDetails.education.map(elem => elem)}
                                            </p>

                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="section-header">ROLE</h3>
                                            <p className="section-content mb-0">Event Coordinator</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="section-header">ABOUT</h3>
                                        <p className="about-text mb-0">
                                            {completeDetails.bio.breif}
                                        </p>
                                    </div>
                                    <div className="social-links d-flex justify-content-center gap-3 mt-auto">
                                        {completeDetails.social.map((platform) => (
                                            <a
                                                key={platform}
                                                href="#"
                                                className="text-decoration-none"
                                                aria-label={`${completeDetails.name}'s ${platform}`}
                                            >
                                                <FontAwesomeIcon icon={iconMap[platform]} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>) : ''}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeamCompleteDetails

