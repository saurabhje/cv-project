import React, {Component} from "react";

class Experience extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="form">
                <h1 className="header">Experience </h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="inputfield">Position</label>
                        <input name="position" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div> 
                        <label htmlFor="inputfield">Company Name</label>
                        <input name="compname" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">City</label>
                        <input name="compcity" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">From</label>
                        <input name="startyear" placeholder="dd/mm/yy" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="inputfield">To</label>
                        <input name="endyear" placeholder="dd/mm/yy" className="inputfield" type="text" onChange={this.props.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;