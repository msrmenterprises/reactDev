import { useEffect, useState } from "react";
import SearchName from "./searchName";

const FetchData = () => {
    const[data, setData] =  useState();
    const[searchName, setSearchName] = useState("Luke");
    console.log("searchName===",searchName)
    const apiUrl = "https://swapi.dev/api/people";
    const fetchData = async() => {
        const response =  await fetch(apiUrl)
        const responseData = await response.json();
        console.log("Resppp==",responseData.results)
        const filteresResult = responseData.results.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
        console.log("filteresResult==",filteresResult)
        setData(filteresResult)
    }
    useEffect(() => {
        fetchData()
    },[searchName])
    return (
        <div><h1>Component to Call the API and fetch the Data</h1>
        <SearchName setSearchName={setSearchName}/>
            <ul>
            {
                  data && data.map(
                    (item, index) => <li key={index}>{item.name}</li> 
                  )  
            }
            </ul>
        
        </div>
        
    )
}

export default FetchData