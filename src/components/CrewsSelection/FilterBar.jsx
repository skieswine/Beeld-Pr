// FilterBar.jsx
import React from "react";

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      <select onChange={(e) => onFilterChange("sort", e.target.value)}>
        <option value="relevancy">Relevancy</option>
        <option value="date">Date</option>
        <option value="rating">Rating</option>
      </select>
      <button onClick={() => onFilterChange("construction")}>
        Construction
      </button>
      <button onClick={() => onFilterChange("renovation")}>Renovation</button>
      <button onClick={() => onFilterChange("plumbing")}>Plumbing</button>
      {/* Можна добавити більше фільтрів */}
    </div>
  );
};

export default FilterBar;
