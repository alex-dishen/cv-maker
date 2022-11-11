import save from '../assets/save.svg';
import autofill from '../assets/autofill.svg';
import gitHub from '../assets/github.svg'

function Header() {
    return (
        <header>
            <div className="head">
                <h1>CV Maker</h1>
                <div className='buttonSection'>
                    <button><img src={save} alt="Save" /> <span>Save</span></button>
                    <button><img src={autofill} alt="Autofill" /> <span>Autofill</span></button>
                </div>
            </div>
            <div className="createdBy">
                Created by <span>
                                <a href="https://github.com/alex-dishen" target='_blank'>
                                    <img src={gitHub} alt="" />alex-dishen
                                </a>
                            </span>
            </div>
        </header>
    );
}

export default Header;