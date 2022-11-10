import save from '../assets/save.svg';
import autofill from '../assets/autofill.svg';
import gitHub from '../assets/github.svg'

function Header() {
    return (
        <header>
            <div className="logo">
                <h2>CV Maker</h2>
                <div>
                    <button><img src={save} alt="Save" /> Save</button>
                    <button><img src={autofill} alt="Autofill" /> Autofill</button>
                </div>
            </div>
            <div className="createdBy">
                Created by <button>
                                <img src={gitHub} alt="" />alex-dishen
                            </button>
            </div>
        </header>
    );
}

export default Header;