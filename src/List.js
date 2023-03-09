import Listofbooks from './listofbooks.json'
import './List.css';
import { useEffect, useState } from 'react';

function List() {

  const [data, setData] = useState([]);  
  const [search, setSearch] = useState(' ');
    

    
     data.sort(function(a,b){
        if (a.author.toLowerCase() > b.author.toLowerCase()
        ) return 1;
        if (a.author.toLowerCase() < b.author.toLowerCase()
        ) return -1;
        return 0;
     });   
     useEffect(() => {
      setData(Listofbooks);
     },[Listofbooks]);

     const handleChange = (event) => {
      setSearch(event.target.value);
     };

     const handleClick = () => {
      let filtered = data.filter((item) => {
        if (search.toLowerCase() === "") {
          item();
        } else {
          return item.author.toLowerCase().includes(search);
        };
      });
      setData(filtered);
     }


  return (
    <div>
      <div className='anadiv'>
        
        <input onChange={(event)=> handleChange(event)} placeholder='Search' className='input' type="search" />
        <button onClick={handleClick} className='btn'>search</button>
        </div  >
       {
         data.map((item) => (
           <div className='app-container'>
           <div key={item.author} className="container" >
                <h1>Author: {item.author}</h1>
                <h2>Title: {item.title}</h2>
                <h3>Genre: {item.genre}</h3>
            </div>
            </div>
        ))
      } 
    </div>
  )
}

export default List
