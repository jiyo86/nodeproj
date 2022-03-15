import React, { useState } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [userList, setUserList] = useState([
    {
      fname: "Jiyo",
      lname: "Mathew",
      email: "jiyo@jiyo.com",
    },
  ]);

  return (
    <>
      <h1>User List</h1>
      {userList.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user?.fname}</td>
                  <td>{user?.lname}</td>
                  <td>{user?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>User List is not available</h3>
      )}
      <button className="btn btn-primary">
        <Link to="/add-user">Add New user</Link>
      </button>
    </>
  );
};
