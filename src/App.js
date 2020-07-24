import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Table from "./components/Table";
import Footer from "./components/Footer";
import API from "./utils/API"

function App(){
  console.log( `Lets start the app`)

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
    <div>
    </div>
  );
}


export default App;
