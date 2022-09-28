import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  let isMounted = true;

  useEffect(() => {
    const Posts = async () => {
      try {
        setloading(true)
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsers(response.data);
        setloading(false)
        
      } catch (error) {
        console.log(error);
      }
    };

    if (isMounted) Posts();

    return () => {
      isMounted = false;
    };
  }, []);
  // console.log(users);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '70vh'}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <Loading/> :
            users.map((item, index) => (
              
                <tr key={index}>
                  <th scope="row"><Link className="linkk" to={`/user/${item.id}`}>{item.id}</Link></th>
                  <td><Link className="linkk" to={`/user/${item.id}`}>{item.name}</Link></td>
                  <td><Link className="linkk" to={`/user/${item.id}`}>{item.username}</Link></td>
                  <td><Link className="linkk" to={`/user/${item.id}`}>{item.email}</Link></td>
                </tr>
              
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
