import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState("hello from react");

  useEffect(() => {
    fetch("http://localhost:5000").then(
      res => res.json()
    ).then(data => {
      console.log(data)
      setData(data.message)
    }
    )
  }, [])
  return (
    <>
      {data}
    <form action="http://localhost:5000/upload" method="POST" encType="multipart/form-data">
      
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name="file" />
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    <button className="btn-primary" type="submit">Upload</button>
    </form>
    </>
  );
}

export default App;
