import React, { useEffect, useState } from 'react'
import TeamCompleteDetails from '../../../components/ui/TeamCompleteDetails';

const TeamDetails = () => {
    
    return (
        <>
            <div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">{details.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <TeamCompleteDetails details={details} />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default TeamDetails