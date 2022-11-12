import gears from '../assets/gears.svg';
import bin from '../assets/bin.svg';

function Skills({ skills, addNewSkill, removeSkill }) {
    return (
        <div className="skills">
            <h2><img src={gears} alt="Skills" />Skills</h2>
            <form>
                {skills.map((skill, index) => {
                    return (
                        <div className="skill" key={skill.id}>
                            <input 
                                type="text" 
                                placeholder="Language or Technology"/>

                            {skills.length > 1 && 
                                <button 
                                    type="button" 
                                    className="imgHolder"
                                    onClick={() => removeSkill(index)}>
                                    <img src={bin} alt="Bin" />
                                </button>
                            }
                        </div>
                    )
                })}
            </form>
            {skills.length < 15 && 
                <button 
                    type='submit'
                    className="newBtn" 
                    onClick={addNewSkill}>
                        + New
                </button>
            }
        </div>
    );
}

export default Skills;