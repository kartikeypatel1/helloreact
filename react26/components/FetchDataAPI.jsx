import React, { useState, useEffect } from 'react'

function FetchDataAPI() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchDataFromAPI=async()=>{
            try {
                const response=await fetch('https://jsonplaceholder.typicode.com/posts');
                const data=await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }   
        }
        fetchDataFromAPI();
      }, []);
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      ) }
    </div>
  )
}

export default FetchDataAPI
