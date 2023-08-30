import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <NavLink to="/">GURLEEN</NavLink>
        </h1>
      </nav>
    </header>
  );
};
