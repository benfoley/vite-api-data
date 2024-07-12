import { useEffect, useState } from 'react'
import axios from 'axios';
import {Titles} from "./titles";
import './App.css'

function App() {
  
  // data will be stored in state
  const [data, setData] = useState({})

  useEffect(() => {
    // async fetch
    axios('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      App...
      <Titles data={data} />
    </>
  )
}

export default App
