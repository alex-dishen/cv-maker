import passport from '../assets/passport.svg';

function PersonalData({ outputInputValue }) {
    return (
        <div className="personalData">
            <h2><img src={passport} alt="passport" />Personal Data</h2>
            <form>
                <div className="namesSection">
                    <input 
                        type="text" 
                        placeholder="First Name"
                        onChange={outputInputValue}
                        maxLength='15'/>
                    <input 
                        type="text"
                        placeholder="Last Name"
                        onChange={outputInputValue}
                        maxLength='13'/>
                </div>
                <input 
                    type="text"
                    placeholder="Niche: Font-End Developer"
                    onChange={outputInputValue}
                    maxLength='26'/>
                <textarea 
                    placeholder="Tell something about yourself to stand out
                                 from other candidates"
                    onChange={outputInputValue}
                    maxLength='520'>
                </textarea>
            </form>
        </div>
    );
}

export default PersonalData;