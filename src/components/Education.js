import education from '../assets/education.svg';

function Education({ outputInputValue }) {
    return (
        <div className="education">
            <h2><img src={education} alt="Education" />Education</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="School"
                    maxLength='66'
                    autoComplete="off"
                    onChange={outputInputValue}/>
                <input 
                    type="text" 
                    placeholder="Degree"
                    maxLength='150'
                    autoComplete="off"
                    onChange={outputInputValue}/>
            </form>
        </div>
    );
}

export default Education;