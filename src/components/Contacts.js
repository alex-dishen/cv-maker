import contacts from '../assets/contacts.svg';

function Contacts({ outputInputValue }) {
    return (
        <div className="personalData">
            <h2><img src={contacts} alt="passport" />Contacts</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Address"
                    onChange={outputInputValue}
                    maxLength='80'/>
                <div className="contactsSection">
                    <input 
                        type="text"
                        placeholder="E-Mail"
                        onChange={outputInputValue}
                        maxLength='80'/>
                    <input 
                        type="tel"
                        placeholder="Phone number"
                        onChange={outputInputValue}
                        maxLength='15'/>
                </div>
                <input 
                    type="link"
                    placeholder="Link to portfolio"
                    onChange={outputInputValue}
                    maxLength='80'/>
            </form>
        </div>
    );
}

export default Contacts;