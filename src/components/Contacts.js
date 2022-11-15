import contacts from '../assets/contacts.svg';

function Contacts({ outputInputValue }) {
    return (
        <div className="personalData">
            <h2><img src={contacts} alt="passport" />Contacts</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Address"
                    maxLength='80'
                    autoComplete="off"
                    onChange={outputInputValue}/>
                <div className="contactsSection">
                    <input 
                        type="text"
                        placeholder="E-Mail"
                        maxLength='80'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                    <input 
                        type="tel"
                        placeholder="Phone number"
                        maxLength='15'
                        autoComplete="off"
                        onChange={outputInputValue}/>
                </div>
                <input 
                    type="link"
                    placeholder="Link to portfolio"
                    maxLength='80'
                    autoComplete="off"
                    onChange={outputInputValue}/>
            </form>
        </div>
    );
}

export default Contacts;