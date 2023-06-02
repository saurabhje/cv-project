import React , {Component} from "react";
class PrintAll extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
               <h2> personal Info </h2> 
                <p> {this.props.name} </p>
            </>
        )
    }
}
export default PrintAll;
