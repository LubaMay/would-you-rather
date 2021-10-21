import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">
        <button className="btn not-found">Return Home</button>
      </Link>
    </div>
  );
}
