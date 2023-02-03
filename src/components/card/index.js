import React from "react";

import './index.css'

export default function Card( {monster} ){
    const { name, id, email } = monster
    return (
        <div className="card-conteiner" key={id}>
            <img 
                alt={`Robot ${name}`}
                src={`https://robohash.org/bgset_bg2/${id}?size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}