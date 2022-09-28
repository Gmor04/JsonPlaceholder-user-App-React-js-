import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);

  let isMounted = true;

  useEffect(() => {
    const Posts = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${uid}`
        );
        setUser(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (isMounted) Posts();

    return () => {
      isMounted = false;
    };
  }, []);
//   console.log(user);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '50vh'}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  return ( <div>
    { loading ? <Loading/> :  <div className="container pt-5">
        <h1 className="text-uppercase">{user.name}</h1>
        <div className="row pt-3">
          <div className="col-md-4 fs-6 fw-semibold">NAME</div>
          <div className="col-md-4 fs-6 fw-semibold">USERNAME</div>
          <div className="col-md-4 fs-6 fw-semibold">EMAIL ADDRESS</div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.name}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.username}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.email}
          </div>
          <div className="col-md-4 fs-6 fw-semibold">ADDRESS</div>
          <div className="col-md-4 fs-6 fw-semibold">ZIPCODE</div>
          <div className="col-md-4 fs-6 fw-semibold">GEO</div>
         <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.address?.suite} {user.address?.street} {user.address?.city}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.address?.zipcode}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            Latitude:{user.address?.geo?.lat} Longitude: {user.address?.geo?.lng}
          </div>
          <div className="col-md-4 fs-6 fw-semibold">PHONE</div>
          <div className="col-md-4 fs-6 fw-semibold">WEBSITE</div>
          <div className="col-md-4 fs-6 fw-semibold">COMPANY</div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.phone}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.website}
          </div>
          <div className="col-md-4 border border-1" style={{ height: "4vh" }}>
            {user.company?.name}
          </div>
        </div>
      </div> }
  </div>
     
      
    
  );
}

export default UserDetails;
