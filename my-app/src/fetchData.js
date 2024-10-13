import { useEffect, useState } from "react";

const FetchData = () => {
    const[data, setData] =  useState();
    const apiUrl = "https://swapi.dev/api/people";
    const fetchData = async() => {
        const response =  await fetch(apiUrl)
        const responseData = await response.json();
        console.log("Resppp==",responseData.results)
        setData(responseData.results)
    }
    useEffect(() => {fetchData()},[])
    return (
        <div><h1>Component to Call the API and fetch the Data</h1>
            <ul>
            {
                  data && data.map(
                    (item, index) => <li>{item.name}</li> 
                  )  
            }
            </ul>
        
        </div>
        
    )
}

export default FetchData