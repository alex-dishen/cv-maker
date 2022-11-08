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
                    <input type="text" placeholder="Your Portfolio"/>
                    <input type="text" placeholder="Yur Niche: Font-End Developer"/>
                    <div>
                        <input type="text" placeholder="Your E-Mail"/>
                        <input type="number" placeholder="Your phone number"/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalData;