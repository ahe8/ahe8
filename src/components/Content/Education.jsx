import education from "../../data/education"

export default function Education() {
    const educationArray = education.map((school) =>
        <div key={school.id} className="school">
            <img id="school--img" src={school.image} alt={school.name + "--logo"} loading="lazy"></img>
            <h3 id="school--name">{school.name}</h3>
            <p id="school--date">{school.from} - {school.to}</p>
            <p id="school--program">{school.program}, {school.concentration}</p>
            <i id="school--honors">{school.honors}</i>
        </div>
    )

    return (
        <div className="content--container" id="education">
            <div className="education">
                <h1>Education</h1>
                <div className="education--container">
                    {educationArray}
                </div>
            </div>
        </div>
    )
}