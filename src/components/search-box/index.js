import React from "react";
import './index.css'

export default function SearchBox( {onChangeHandler} ) {
    return (
        <input 
        className='search-box' 
        placeholder='Search Robots...' 
        type='search' 
        onChange={ onChangeHandler }/>
    )
    
}