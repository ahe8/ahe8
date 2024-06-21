import experience from "../../data/experience"

export default function Experience() {
    const experienceArray = experience.map((exp) => 
        <div key={exp.id}>
            <img src={exp.image} alt={exp.company + "--logo"} loading="lazy"></img>
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.from} - {exp.to}</p>
        </div>
    )

    return (
        <div className="content--container" id="experience">
            <div className="experience">
                <h1>Experience</h1>
                <div className="experience--container">
                    {experienceArray}
                </div>
            </div>
        </div>
    )
}