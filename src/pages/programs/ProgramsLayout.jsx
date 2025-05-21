import React from 'react';
import ProgramCard from './sections/ProgramCard';
// import './main-script'
import '../../styles/programs.css';
import CTA from './sections/CTA';
const ProgramsLayout = ({ state }) => {
    const { content, loading, error } = state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const programs = content.dynamicContent['programs-ourprograms'];
    const categories = ["All", "Education", "Healthcare", "Empowerment", "Development", "Environment", "Relief"];
    const [activeFilter, setActiveFilter] = React.useState("All");
    const [filteredPrograms, setFilteredPrograms] = React.useState(programs);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        if (category === "All") {
            setFilteredPrograms(programs);
        } else {
            setFilteredPrograms(programs.filter(program => program.category === category));
        }
    };

    return (
        <div className="programs-page">
            <div className="container">
                <div className="filter-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="filter-wrap">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => handleFilterClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row g-4 programs-container">
                    {filteredPrograms.map((program, index) => (
                        <div
                            className="col-md-6 col-lg-4"
                            key={program.id}
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 50)}
                        >
                            <ProgramCard program={program} />
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default ProgramsLayout;