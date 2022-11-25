import React from "react";
import {Mock} from "../Json/Mock";
import { Link } from "react-router-dom";
import "./Home.css";
import { Context } from "../Context/Context";
import { useContext } from "react";


const Home = ()=>{
  
    const {mayus} = useContext(Context);
    
     return(
        <div className="text-center d-flex justify-content-evenly header">
            {Mock.map(p => <Link to={"/cliente/" + p.cliente} key={p.cliente}><h1>{mayus(p.cliente)}</h1></Link> )}
        </div>
    )
}


export default Home;