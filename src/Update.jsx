import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  // const [values, setValues] = useState({
  //   firstName: '',
  //   lastName: '',
  //   age: '',
  //   photo: '',
  // });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    // axios
    //   .get('https://contact.herokuapp.com/contact/' + id)

    //   .then((res) => {
    //     setValues(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
    const getData = async () => {
      const dataUser = await axios.get(`https://contact.herokuapp.com/contact/` + id);
      const data = dataUser.data.data;

      const { firstName, lastName, photo, age } = data;
      setFirstName(firstName);
      setLastName(lastName);
      setAge(age);
      setPhoto(photo);
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    try {
      const sentData = async () => {
        const result = await axios.put('https://contact.herokuapp.com/contact/' + id, {
          firstName: firstName,
          lastName: lastName,
          photo: photo,
          age: age,
        });
      };
      sentData();
    } catch (error) {
      console.log(error);
    }
    navigate('/');
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Contact</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter First Name"
              value={firstName}
              // onChange={(e) => setValues({ ...values, firstName: e.target.value })}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
              value={lastName}
              // onChange={(e) => setValues({ ...values, lastName: e.target.value })}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="photo">Photo:</label>
            <input
              type="text"
              name="photo"
              className="form-control"
              placeholder="Enter Url Photo"
              value={photo}
              // onChange={(e) => setValues({ ...values, photo: e.target.value })}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              // onChange={(e) => setValues({ ...values, age: e.target.value })}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
