import React from "react";
import Personal from "./personal";


const PrintAll = (props) =>{
    const {inputfields} = props;

    return(
        <ul>
            {inputfields.map((inputs)=>{
                return< React.Fragment key={inputs.id}> 
                    <li className="elements">
                        <p>
                            {inputs.text}
                        </p>
                    </li>
                </React.Fragment>
            })
        }
        </ul>
    )
}
export default PrintAll;