import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { useParams } from "react-router-dom";
import {Mock} from "../Json/Mock";
import Test from "../Test";
import "./TestContainer.css";



const TestContainer =()=>{
    
    const {mayus} = useContext(Context);
    const {nombre} = useParams();

    
    const test = Mock.find(i => i.cliente === nombre);
    
    
    
    return(
        <div className="d-flex flex-column align-items-center body">
            <h2 className="m-3">{mayus(test.cliente)}</h2>
            <h3>Test: Test de usabilidad de sitio web</h3>
            <h4>Testeador 1</h4>
            
            <iframe  title="Video de muestra" className="m-3 col-md-6"  height="500" src={test.linkVideo}> </iframe>
            <div className="transcrip m-5"  dangerouslySetInnerHTML={{__html: test.transcripcion}}></div>
            <p className="m-3 fs-3 align-self-start fw-bold">Escenario: {test.escenario}</p>
             <Test test = {test.preguntas}></Test>
        </div>
    )
}

export default TestContainer;
/* {test.preguntas.map(p => <Test   key={p.texto} tarea={p.texto} tiempo={p.tiempo} posicion={p}/> )} */