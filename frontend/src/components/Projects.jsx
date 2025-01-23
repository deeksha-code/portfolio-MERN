import { useState } from "react"
import projects from "../data/projects"

import Carousel from "./Carousel"
export default function Projects() {
    const [currentProjIndex, setCurrentProjIndex] = useState(0)

    return (
        <section id="projects" className="projects">
            <div className="main-container">
                <h2 className="heading-secondary">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">Here you will find some of the personal projects that I have created</span>
                </h2>

                <div className="projects__content" >
                    {projects.map((project, index) => <Carousel length={projects.length} index={index} currIndex={currentProjIndex} setCurrentProjIndex={setCurrentProjIndex} key={index} project={project} />)}
                </div>
            </div>
        </section >
    )
}