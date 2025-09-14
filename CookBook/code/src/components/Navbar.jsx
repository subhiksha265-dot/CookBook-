import React from 'react';
import '../styles/Navbar.css';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = React.useState('');

  const handleSearch = async () => {
    if (!search.trim()) return; // prevent empty search

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      if (response.data.meals && response.data.meals.length > 0) {
        setSearch('');
        navigate(`/recipe/${response.data.meals[0].idMeal}`); // fixed typo
      } else {
        setSearch('');
        alert('No such recipe found!!');
      }
    } catch (error) {
      setSearch('');
      alert('Something went wrong. Try again!');
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='Navbar'>
      <h3 onClick={() => navigate('/')}>Delish Diary... </h3>
      <div className='nav-options'>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          {location.pathname === "/" ? (
            <a href="#popular"><li>Popular</li></a>
          ) : (
            <Link to="/#popular"><li>Popular</li></Link>
          )}
        </ul>
        <div className="nav-search">
          <span>
            <IoSearch className='nav-search-icon' />
            <input
              type="text"
              placeholder="Type something.."
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              value={search}
            />
          </span>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
