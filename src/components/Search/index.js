import React from "react";
import "./style.css";
import Table from "../Table"

function Search(){
    console.log( `This is Search!`);
    return(
        <div className="searchBar text-center">
            <input type="search"></input>
            <br></br>
            <i>Click on carrots to filter by categories or Use search bar above.</i>
        </div>
    );
}

export default Search;