import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState("hello from react");
  const [val, setVal] = useState("Upload image to predict")

  useEffect(() => {
    fetch("http://localhost:5000").then(
      res => res.json()
    ).then(data => {
      console.log(data)
      setData(data.message)
    }
    )
  }, [])
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      axios.post('http://localhost:5000/upload', formData).then(
        (res) =>{
          console.log(res.data.message)
          setVal(res.data.message)
        }
      );
      alert('File uploaded successfully');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {data}
    <form onSubmit={handleSubmit}>
      
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    <button className="btn-primary" type="submit">Upload</button>
    <br/>
    {val}
    </form>
    </>
  );
}

export default App;
