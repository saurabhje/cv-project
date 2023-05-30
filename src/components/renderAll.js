import React from "react";
import Personal from "./personal";


const PrintAll = (props) =>{
    const {inputfields} = props;

    return(
        <>
            {inputfields.map((inputs)=>{
                console.log(inputs)
                return< React.Fragment key={inputs.id}> 
                    <span className="elements">
                        <p>
                            {inputs.firstname}
                        </p>
                        <p>
                            {inputs.lastname}
                        </p>
                        <p>
                            {inputs.address}
                        </p>
                        <p>
                            {inputs.phone}
                        </p>
                        <p>
                            {inputs.email}
                        </p>
                    </span>
                </React.Fragment>
            })
        }
        </>
    )
}
export default PrintAll;