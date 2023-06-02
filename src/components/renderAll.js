import React , {Component} from "react";
class PrintAll extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <> 
                <h1 id="name"> {this.props.name}&nbsp;{this.props.lsname} </h1>
            </>
        )
    }
}
export default PrintAll;
