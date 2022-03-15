import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/add-user">Add User</Link>
    </nav>
  );
};
