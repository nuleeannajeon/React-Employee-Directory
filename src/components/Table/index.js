import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import "./style.css";

function Table(){
    const [ results, setResults ] = useState( [] );
    const [ sortedField, setSortedField ] = useState(null);

    async function getRandomUsers() {
        try {
          const response = await API.search();
          console.log(response);
          setResults( response.data.results )
        } catch (error) {
          console.error(error);
        }
    };

    useEffect( ()=>{
        getRandomUsers()
    }, [])

    let sortedResults = [...results];
    console.log(sortedResults);

    if (sortedField !== null){
        if (sortedField == 'name'){
            sortedResults = [...results.map(result=>result)]
            sortedResults.sort((a,b) =>{
                if (a.name.first < b.name.first) {
                    return -1;
                  }
                  if (a.name.first > b.name.first) {
                    return 1;
                  }
                  return 0;
                })
        }
        if (sortedField == 'age'){
            sortedResults = [...results.map(result=>result)]
            sortedResults.sort((a,b) =>{
                if (a.dob.date < b.dob.date) {
                    return -1;
                  }
                  if (a.dob.date > b.dob.date) {
                    return 1;
                  }
                  return 0;
                })
        }
        sortedResults.sort((a, b) => {
          if (a[sortedField] < b[sortedField]) {
            return -1;
          }
          if (a[sortedField] > b[sortedField]) {
            return 1;
          }
          return 0;
        })
        console.log(sortedResults);
    };

    return(
        // <div>
        // <div className="searchBar text-center">
        //     <input type="search" onsearch={() => setSortedField('inputSearch')}></input>
        //     <br></br>
        //     <i>Click on carrots to filter by categories or Use search bar above.</i>
        // </div>
        <table class="container table table-striped">
            <thead>
                <tr>
                <th scope="col">
                    Image
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('name')}>Name</button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('cell')}>Phone</button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('email')}>Email</button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('age')}>Age</button>   
                </th>
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
                {sortedResults.map(result => (
                    <tr>
                        <th scope="row"><img src={result.picture.thumbnail} alt="unknown"></img></th>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.cell}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.substring(0,10)}</td>
                    </tr> 
                ))}
                
            </tbody>
        </table>
        // </div>
    );
}

export default Table;