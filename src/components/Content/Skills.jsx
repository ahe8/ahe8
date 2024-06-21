import skills from "../../data/skills.json"

export default function Skills() {
    const skillsArray = skills.map((skill, i) => <li key={"skill" + i}>{skill}</li>);

    return (
        <div className="skills" id="skills">
            <h3>My Tech Stack, Skills and Tools</h3>
            <ul>
                {skillsArray}
            </ul>
        </div>
    )
}