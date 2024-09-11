// WorkerCard.jsx
import React from "react";

const WorkerCard = ({ name, location, rate, rating, reviews, skills }) => {
  return (
    <div className="worker-card">
      <div className="worker-image-placeholder">
        {/* Тут буде зображення */}
      </div>
      <div className="worker-info">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>Rate: {rate}</p>
        <p>
          Rating: {rating} ⭐ ({reviews}+ reviews)
        </p>
        <div className="worker-skills">
          {skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
