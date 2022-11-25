import React from "react";


const Test = ({test})=>{

    console.log(test);
    const data = [];
    
    for(let i = 0; i< test.length; i++){
        data.push(
            <div key={i}>
            <h3>Tarea {i + 1}</h3>
                <p>{test[i].texto}</p>
                <p className="text-danger">Duracion de la tarea: {test[i].tiempo}</p>
                <hr />
        </div>
        )
        
    }
    return(
        <div className="col-md-4 m-3 align-self-start mx-5">
            {data}
        </div>
    )
}

export default Test;