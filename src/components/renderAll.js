import React , {Component} from "react";
import style from "./render.css";

class PrintAll extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <> 
                <div className="header1">
                    <h1 id="name"> {this.props.name}&nbsp;{this.props.lsname} </h1>
                </div>
                <div className="personalarea">
                    <p className="personalinfo"> Address: {this.props.Address}</p>
                    <p className="personalinfo"> Phone: {this.props.phone}</p>
                    <p className="personalinfo">Email: {this.props.email}</p>
                </div>

                <div className="educationarea">
                    <h2 className="subhead" id="eduhead">Education</h2>
                    <h3 className="eduinfo">{this.props.uni}</h3>
                    <p className="eduinfo">{this.props.unicity}</p>
                    <p className="eduinfo">{this.props.degree}</p>
                    <p className="eduinfo" >{this.props.unisub}</p>
                    <p className="eduinfo">{this.props.unistart} - {this.props.uniend}</p>

                </div>

                <div className="experiencearea">
                    <h2 className="subhead" id="exphead">Experience</h2>
                    <p className="expinfo">{this.props.position}</p>
                    <p className="expinfo">{this.props.compname}</p>
                    <p className="expinfo">{this.props.compcity}</p>
                    <p className="expinfo">{this.props.startyear}</p>
                    <p className="expinfo">{this.props.endyear}</p>
                </div>
            </>
        )
    }
}
export default PrintAll;
