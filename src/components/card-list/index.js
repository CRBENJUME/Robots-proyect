import React from "react";
import './index.css'
import Card from "../card";

export default function CardList( {monster} ) {
    console.log(monster)

    return (
        <div className="card-list">
        {
            monster.map((monsters) => {
                return(
                    <Card monster={monsters}/>
                )
            })
        }
        </div>   
    )
}


