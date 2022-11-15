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
                        maxLength='15'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                    <input 
                        type="text"
                        placeholder="Last Name"
                        maxLength='13'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                </div>
                <input 
                    type="text"
                    placeholder="Niche: Font-End Developer"
                    maxLength='26'
                    autoComplete="off"
                    onChange={outputInputValue}/>
                <textarea 
                    placeholder="Tell something about yourself to stand out
                                 from other candidates"
                    maxLength='520'
                    autoComplete="off"
                    onChange={outputInputValue}/>
            </form>
        </div>
    );
}

export default PersonalData;