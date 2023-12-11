import React from 'react';
import './stats.css'; 

const StatsComponent = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-number">200+</div>
        <div className="stat-text">Coding Problems Solved</div>
      </div>
      <div className="stat-item">
        <svg className="leetcode-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          {/* Insert your LeetCode SVG path here */}
        </svg>
        <div className="stat-text">LeetCode Profile</div>
      </div>
      <div className="stat-item">
        <div className="stat-text">GfG Profile</div>
      </div>
    </div>
  );
};

export default StatsComponent;
