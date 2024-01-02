import React from "react";
import MovieLogo from "./Assets/MovieLogo.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div className="flex pl-10 pt-10  border py-10 bg-white">
        <img className="w-12 pr-2" src={MovieLogo} alt="movie-logo" />
        <Link to="/" className="pr-10 text-blue-400 pl-10 pt-2">Movies</Link>
        <Link to="/WatchList" className="text-blue-400 pt-2">WatchList</Link>
      </div>

      
    </div>
  );
}

export default Navbar;
