import tools from '../assets/experience.svg';
import bin from '../assets/bin.svg'

function Experience({ experiences, addNewExperience, removeExperience}) {
    return (
        <div className="experience">
            <h2><img src={tools} alt="Experience" />Work Experience</h2>

            {experiences.map((experience, index) => {
                return (
                    <div key={experience.id}>
                        {experiences.length > 1 &&
                            <div className='experience-quantity'>
                                <h3>Experience #{index + 1}</h3>
                                <button 
                                    className='imgHolder' 
                                    onClick={() => removeExperience(index)}>
                                        <img src={bin} alt="Bin" />
                                </button>
                            </div>
                        }

                        <form>
                            <input type="text" placeholder="Company"/>
                            <input type="text" placeholder="Position"/>
                            <input type="text" placeholder="Start date of employment"/>
                            <input type="text" placeholder="End date of employment"/>
                            <textarea placeholder="Your main occupation, daily tasks and work field"></textarea>
                        </form>
                    </div>
                );
            })}

            {experiences.length < 2 && 
                <button 
                    className="newBtn"
                    onClick={addNewExperience}>
                        + New
                </button>
            }
        </div>
    );
}

export default Experience;