import React, {Component} from "react";

class Personal extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="form">
                <h1 className="header">Personal Info</h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="inputfield">Name</label>
                        <input name="firstname" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Lastname</label>
                        <input name="lastname" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Address</label>
                        <input name="address" className="inputfield" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Phone</label>
                        <input name="phone" className="inputfield" type="phone"/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Email</label>
                        <input name="email" className="inputfield" type="email"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;