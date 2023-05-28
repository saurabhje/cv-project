import React, {Component} from "react";

class Education extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="form">  
                <h1 className="header">Education</h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="inputfield">institution Name</label>
                        <input name="uniname" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">City</label>
                        <input name="unicity" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Degree</label>
                        <input name="degree" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Specialization</label>
                        <input name="subject" className="inputfield" type="text"/>
                    </div>
                    <div>
                    <label htmlFor="inputfield">From</label>
                    <input name="startyear" className="inputfield" type="date"/>
                    </div>
                    <div>
                    <label htmlFor="inputfield">To</label>
                    <input name="endyear" className="inputfield" type="date"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;