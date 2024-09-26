import { ReactComponent as Search } from '../../images/Search.svg';
import { ReactComponent as Send } from '../../images/send.svg';
import { ReactComponent as Location } from '../../images/location.svg';
import React, { useState, useRef, useEffect } from 'react';
import './crewmenu.scss';

const CrewMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Закриття меню при кліку поза його межами
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="main_search-block">
        <div className="main_search-country_choose">
          <div className="dropdown" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`dropdown-button ${isOpen ? 'open' : ''}`}
            >
              <Location />
              <span className="material-icons">Country</span>
              <i className="arrow down"></i>
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <span className="dropdown-menu_element">
                  <li>Ukraine</li>
                </span>
                <span className="dropdown-menu_element">
                  <li>Poland</li>
                </span>
                <span className="dropdown-menu_element">
                  <li>Germany</li>
                </span>
              </ul>
            )}
          </div>
        </div>
        <div className="main_search-search ">
          <div className="Search_cont srch">
            <div className="srch_block-1">
              <Search className="srch-ico" />
              <input
                className="search_inp "
                placeholder="Search..."
                type="text"
              />
            </div>
            <div className="srch_block-2">
              <Send />
            </div>
          </div>
        </div>
      </div>
      <div className="crew-title_block">
        <h1>
          Discover best <span>kitchen</span> works from best crews.
        </h1>
      </div>
    </div>
  );
};

export default CrewMenu;
