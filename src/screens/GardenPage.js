import React, { useState, useEffect } from 'react';
import './GardenPage.css'; // CSS 파일 추가
import MyGarden from '../components/garden/MyGarden'; // MyGarden 컴포넌트
import GardenHeader from '../components/garden/GardenHeader'; // GardenHeader 컴포넌트
import  MyBarChart  from '../components/garden/MyBarChart';
import MyPieChart from '../components/garden/MyPieChart';
const GardenPage = () => {
  return (
    <div>
      <GardenHeader />
        <div className="my-garden">
        <MyGarden />
        </div>
        <div className="chart-container">
        <MyBarChart />
      </div>
      <div className="chart-container">
        <MyPieChart />
      </div>
    </div>
  );
};

export default GardenPage;