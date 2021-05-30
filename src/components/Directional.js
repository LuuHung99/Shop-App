import React from 'react';
import './css/style.css';
import {Link, useRouteMatch} from 'react-router-dom';

function Directional(props) {
    const match = useRouteMatch();
    const name = match.path;
    return (
        <div className="directional">   
            <h1>
               <Link to="/" style={{color: '#ab7a5f'}}>Home / </Link> <span style={{textTransform: "capitalize"}}>{name.split("/")[1]}</span> 
            </h1>
        </div>
    );
}

export default React.memo(Directional);