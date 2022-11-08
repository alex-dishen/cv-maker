import React from "react";

class PersonalData extends React.Component {
    render() {
        return (
            <div>
                <p>Personal Data</p>
                <form>
                    <div>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <input type="text" placeholder="Your Address"/>
                    <input type="text" placeholder="Your Website"/>
                    <div>
                        <input type="text" placeholder="Your E-Mail"/>
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalData;