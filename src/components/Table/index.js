import React, {useState, useEffect} from "react";
import API from "../../utils/API"
import "./style.css"

function Table(){

    async function getRandomUsers() {
        try {
          const response = await API.search();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }
    
    useEffect( ()=>{
        getRandomUsers()
    }, [])

    return(
        <table class="container table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img src="https://ninjaplans.com/images/profile/none.png" alt="unknown"></img></th>
                    <td>Anna Jeon</td>
                    <td>647 111 1111</td>
                    <td>test@test.com</td>
                    <td>0000.10.10</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;