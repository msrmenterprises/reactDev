import { useCallback, useEffect, useMemo, useState } from "react";

const fetchData = () => {

        
    console.log("Fetching data...");
    return [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" },
      { id: 4, name: "Date" },
      { id: 5, name: "Elderberry" },
    ];
  };
const PerformanceMemoCallback = () => {
    const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchedData = fetchData();
    setData(fetchedData);
  }, []);

  // Memoize the filtered data to avoid recalculating it on every render
  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    return data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [data, searchTerm]);

  // Memoize the search handler to avoid recreating it on every render
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default PerformanceMemoCallback