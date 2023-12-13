import React from 'react';
import './stats.css'; 
import leet from '../../asset/leetcodesvg.svg'
import gfg from '../../asset/gfgsvg.svg'

const StatsComponent = () => {
  return (
    <div className="container">
    <div>
        <span className="number">200+</span>
        <div className="text">Coding Problem Solved</div>
    </div>
    <div className="center">
        <img className = "iconcenter" src={leet} alt="Leetcode" />
        <div className="text">Leetcode Profile</div>
    </div>
    <div className="right">
        <img className = "iconleft" src={gfg} alt="gfg" />
        <div className="text">gfg Profile</div>
    </div>
</div>


  );
};

export default StatsComponent;
