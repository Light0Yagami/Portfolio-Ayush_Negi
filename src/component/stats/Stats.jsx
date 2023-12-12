import React from 'react';
import './stats.css'; 
import leet from '../../asset/leetcodesvg.svg'
import gfg from '../../asset/gfgsvg.svg'

const StatsComponent = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-number">200+</div>
        <div className="stat-text">Coding Problems Solved</div>
      </div>
      <div className="stat-item">
        <div className="stat-text">
        <img src={leet} alt="leetcode icon" /> LeetCode Profile</div>
      </div>
      <div className="stat-item">
        <div className="stat-text">
        <img src={gfg} alt="gfg icon" />  GfG Profile</div>
      </div>
    </div>
  );
};

export default StatsComponent;
