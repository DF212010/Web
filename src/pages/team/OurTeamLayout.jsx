import React, { useEffect, useState } from 'react'
import TeamIdentity from '../../components/ui/TeamIdentity'
import '../../styles/ourteam.css'
const OurTeamLayout = ({ state }) => {
    const { content, loading, error } = state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const [team, setTeam] = useState(null)
    const [teamType, setTeamType] = useState('founders')
    const handleChangeTeam = (teamType) => {
        if (teamType === 'volunteers') setTeam(content.dynamicContent["volunteers-global"])
        else if (teamType === 'directors') setTeam(content.dynamicContent["board-members-global"])
        else if (teamType === 'founders') setTeam(content.dynamicContent["founders-global"])
    }
    useEffect(() => {
        handleChangeTeam(teamType)
    }, [teamType])
    return (
        <>
            <div className="team-box">
                <div className='team-filter-btn-box'>
                    <button className={`team-filter-btn ${teamType === 'founders' ? 'active' : ''}`} onClick={() => setTeamType('founders')}>
                        Founder
                    </button>
                    <button className={`team-filter-btn ${teamType === 'directors' ? 'active' : ''}`} onClick={() => setTeamType('directors')}>
                        Board Of Directors
                    </button>
                    <button className={`team-filter-btn ${teamType === 'volunteers' ? 'active' : ''}`} onClick={() => setTeamType('volunteers')}>
                        Volunteers
                    </button>
                </div>
                <div className="team-card-box">
                    {
                        team !== null && team.map((elem, index) => {
                            return <TeamIdentity details={elem} key={index} />
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default OurTeamLayout