import education from '../assets/education.svg';

function Education({ outputInputValue }) {
    return (
        <div className="education">
            <h2><img src={education} alt="Education" />Education</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="School"
                    onChange={outputInputValue}
                    maxLength='66'/>
                <input 
                    type="text" 
                    placeholder="Degree"
                    onChange={outputInputValue}
                    maxLength='150'/>
            </form>
        </div>
    );
}

export default Education;