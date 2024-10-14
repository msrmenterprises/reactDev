const SearchName = ({setSearchName}) => {
return (
    <div>
        <h2>Search by Your Name</h2>
        <input type="text" name="search" onChange={(e)=>setSearchName(e.target.value)}/>

    </div>
)

}

export default SearchName