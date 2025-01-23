
function Carousel({ length, project, index, currIndex, setCurrentProjIndex }) {

    const { name, description, link, github } = project

    function handleRightArrowClick() {
        if (currIndex === length - 1)
            setCurrentProjIndex(0)
        else
            setCurrentProjIndex(prev => prev + 1)
    }

    function handleLeftArrowClick() {
        if (currIndex === 0)
            setCurrentProjIndex(length - 1)
        else
            setCurrentProjIndex(prev => prev - 1)
    }

    return (
        <div className={`${index !== currIndex ? "projects__row-content" : "projects__row-content--active"}`}>
            <h3 className="projects__row-content-title">{name}</h3>
            <p className="projects__row-content-desc">{description}</p>
            <div className="projects__row-content-links">
                <a className="btn btn--med" href={link} target="_blank" rel="noreferrer">Link</a>
                <a className="btn btn--med" href={github} target="_blank" rel="noreferrer">Github</a>
            </div>
            <button className="btn arrow-btn right-arrow-btn" onClick={handleRightArrowClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                    stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button className="btn arrow-btn left-arrow-btn" onClick={handleLeftArrowClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                    stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Carousel
