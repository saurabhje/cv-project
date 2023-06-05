import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="form">  
                <h1 className="header">Education</h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="inputfield">institution Name</label>
                        <input name="uniname" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">City</label>
                        <input name="unicity" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Degree</label>
                        <input name="degree" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">Specialization</label>
                        <input name="subject" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                    <label htmlFor="inputfield">From</label>
                    <input name="unistart" placeholder="dd/mm/yy" className="inputfield" type="text"onChange={this.props.handleChange}/>
                    </div>
                    <div>
                    <label htmlFor="inputfield">To</label>
                    <input name="uniend" placeholder="dd/mm/yy" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;