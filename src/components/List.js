import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <ul>
      <li>
        <a href="https://www.twitter.com/alilynnet">Twitter</a>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
};

export default List;
