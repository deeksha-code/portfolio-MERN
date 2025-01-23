import skills from "../data/skills"


export default function About() {
    return (
        <section id="about" className="about">
            <div className="main-container">
                <h2 className="heading-secondary">
                    <span className="heading-sec__main">About Me</span>
                    <span className="heading-sec__sub">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
                </h2>

                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">Get to know me!</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">I&#39;m a MERN Stack Developer building the Front-end, Back-end and databases of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                            <p className="about__content-details-para">I&#39;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        </div>
                        <a href='#contact' className="btn btn--med">Contact</a>
                    </div>
                    <div className="about__content-skills">
                        <h3 className="about__content-title">My Skills</h3>
                        <div className="skills">
                            {skills.map((skill, index) => <div key={index} className="skills__skill">{skill.name}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}