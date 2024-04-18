// import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get('https://contact.herokuapp.com/contact/' + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Contact</h3>
        <div className="mb-2">
          {/* <strong>Photo: {data.data?.photo}</strong> */}
          <img src={data.data?.photo} width={50} height={50} />
        </div>
        <div className="mb-2">
          <strong>First Name: {data.data?.firstName}</strong>
        </div>
        <div className="mb-2">
          <strong>Last Name: {data.data?.lastName}</strong>
        </div>
        <div className="mb-3">
          <strong>age: {data.data?.age}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
