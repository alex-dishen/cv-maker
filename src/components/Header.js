function Header() {
    return (
        <header>
            <div className="logo">
                <h2>CV Maker</h2>
                <div>
                    <button>Save</button>
                    <button>Autofill</button>
                </div>
            </div>
            <div className="createdBy">
                Created by <button>
                                <img src="" alt="" />alex-dishen
                            </button>
            </div>
        </header>
    );
}

export default Header;