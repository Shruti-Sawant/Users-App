import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import LoadingSpinner from './components/LoadingSpinner';
function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(' https://602e7c2c4410730017c50b9d.mockapi.io/users ');
        setData(response.data);
        // console.log(response.data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <h1 style={{backgroundColor:"grey", textAlign:"center"}}>Users</h1>
      {loading && <LoadingSpinner />}
      {!loading && data.map((user) => (
        <Users key={user.id} user={user} />
      ))
      }


    </>
  )
}

export default App
