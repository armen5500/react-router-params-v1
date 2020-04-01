import React, { useEffect, useState } from "react";

// import { NavLink } from 'react-router-dom';

import "./style.scss";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [data, setDate] = useState([]);
  // console.log(data)

  const fetchUsers = async () => {
    const request = await fetch("https://api.github.com/users");
    const response = await request.json();
    // console.log("response" , response)
    setDate(response);
  };
  console.log(fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Dashboard">
      Dashboard
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="pages">Pages</div>

          <ul className="dashboard">
            <li>
              Users
              <ul>
                {data.map(({ login, id }) => (
                  <li key={id}>
                    <NavLink exact to={`/user/${id}`}>
                      {login}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
