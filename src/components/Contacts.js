import React from "react";
import contacts from '../assets/contacts.svg';

class Contacts extends React.Component {
    render() {
        return (
            <div className="personalData">
                <h2><img src={contacts} alt="passport" />Contacts</h2>
                <form>
                    <input type="text" placeholder="Address"/>
                    <div className="contactsSection">
                        <input type="text" placeholder="E-Mail"/>
                        <input type="number" placeholder="Phone number"/>
                    </div>
                    <input type="link" placeholder="Link to portfolio"/>
                </form>
            </div>
        );
    }
}

export default Contacts;