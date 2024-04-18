// import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [fetchStatusGame, setFetchStatusGame] = useState(false);
  // const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://contact.herokuapp.com/contact/${id}`);
      setDeleted(!deleted);
      setFetchStatusGame(true);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await axios.get('https://contact.herokuapp.com/contact');
        const fetchData = fetch.data;

        setData(fetchData);
        setFetchStatusGame(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [fetchStatusGame]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Contacts</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-stipend">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.age}</td>
                <td>
                  <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">
                    Read
                  </Link>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
