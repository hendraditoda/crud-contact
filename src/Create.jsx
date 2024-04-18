// import React from 'react';

import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://contact.herokuapp.com/contact', values)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a new contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter First Name"
              onChange={(e) => setValues({ ...values, firstName: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="photo">Photo:</label>
            <input
              type="text"
              name="photo"
              className="form-control"
              placeholder="Enter Url Photo"
              onChange={(e) => setValues({ ...values, photo: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="Enter Age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
