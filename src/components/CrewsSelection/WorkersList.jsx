// WorkersList.jsx
import React, { useState, useEffect } from "react";
import WorkerCard from "./WorkerCard";
import FilterBar from "./FilterBar";

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    // Імітація фетчингу даних з бекенду
    const fetchedWorkers = [
      {
        name: "BobbyDick's Crew",
        location: "Kyiv, Ukraine",
        rate: "$25-50/hour",
        rating: 4.8,
        reviews: 100,
        skills: [
          "Carpentry",
          "Renovation",
          "Electrical",
          "Construction",
          "Plumbing",
          "Painting",
        ],
      },
      {
        name: "Diamond Dudes",
        location: "Florida, USA",
        rate: "$30-60/hour",
        rating: 4.5,
        reviews: 60,
        skills: [
          "Plumbing",
          "Renovation",
          "Construction",
          "Electrical",
          "Carpentry",
          "Painting",
        ],
      },
      {
        name: "Thor Group",
        location: "Germany",
        rate: "$20-40/hour",
        rating: 4.7,
        reviews: 120,
        skills: [
          "Renovation",
          "Construction",
          "Plumbing",
          "Painting",
          "Electrical",
          "Carpentry",
        ],
      },
    ];

    setWorkers(fetchedWorkers);
    setFilteredWorkers(fetchedWorkers); // Ініціалізуємо фільтрований список
  }, []);

  const handleFilterChange = (filterType, value) => {
    let updatedWorkers = [...workers];
    if (filterType === "search") {
      updatedWorkers = workers.filter((worker) =>
        worker.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    if (filterType === "sort") {
      if (value === "date") {
        // Сортування за датою, можна добавити відповідні поля
      } else if (value === "rating") {
        updatedWorkers.sort((a, b) => b.rating - a.rating);
      }
    }
    setFilteredWorkers(updatedWorkers);
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="workers-grid">
        {filteredWorkers.map((worker) => (
          <WorkerCard key={worker.name} {...worker} />
        ))}
      </div>
    </div>
  );
};

export default WorkersList;
