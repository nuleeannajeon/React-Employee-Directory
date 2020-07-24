import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App(){
  console.log( `Lets start the app`);

  return(
    <div>
      <Navbar />
      <Search />
      <Table />
      <Footer />
    </div>
  );
}


export default App;
