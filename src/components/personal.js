import React, {Component} from "react";
import uniqid from 'uniqid';
import PrintAll from "./renderAll";

class Personal extends Component{
    constructor(){
        super();
        this.state = {
            inputs:{
              text: '',
              id: uniqid(),
            },
            inputfields: [],
          }
    }

    handleChange = (e) =>{
      this.setState({
        inputs:{
          text: e.target.value,
          id:this.state.id,
        }
      })
    }

    onSumbitbtn = (e) =>{
        e.preventDefault();
    
        const { inputfields, inputs } = this.state;
    
        this.setState({
          inputfields: inputfields.concat(inputs),
          inputs:{
            text: '',
            id: uniqid(),
          }
        })
      }

    render(){
        return (
            <>
            <div className="form">
                <h1 className="header">Personal Info</h1>
                <div className="inputs" onChange={this.handleChange}>
                    <div>
                        <label htmlFor="inputfield">Name</label>
                        <input name="firstname" className="inputfield" type="text"  />
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
                        <input name="phone" className="inputfield" type="phone" />
                    </div>
                    <div>
                        <label htmlFor="inputfield">Email</label>
                        <input name="email" className="inputfield" type="email"/>
                    </div>
                </div>
            </div>
            <button className="subbtn" type="submit" onClick={this.onSumbitbtn}>Submit</button>
            <PrintAll inputfields = {this.state.inputfields}/>
            </>
        );
    }
}

export default Personal;