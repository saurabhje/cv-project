import React, {Component} from "react";

class Experience extends Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div className="form">
                <h1 className="header">Experience </h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="inputfield">Position</label>
                        <input name="position" className="inputfield" type="text"/>
                    </div>
                    <div> 
                        <label htmlFor="inputfield">Company Name</label>
                        <input name="compname" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">City</label>
                        <input name="unicity" className="inputfield" type="text"/>
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

export default Experience;