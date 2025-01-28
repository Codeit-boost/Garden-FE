import React from 'react';
import '../../styles/MyBestFlower.css';
import leafIcon from '../../assets/icons/완성꽃.png'; 

const MyBestFlower = () => {
  const bestPlant = {
    name: '해바라기',
    image: require('../../assets/flowers/해바라기.png'),
    meaning: '열정, 추억',
    count: 10, 
  };

  return (
    <div className="mybestflower" style={{ width: '100%' }}>
      
        <h2>많이 심은 꽃</h2>
        <div className="flower-content">
         
          <div className="flower-image-container">
            <img src={bestPlant.image} alt={bestPlant.name} className="flower-image" />
          </div>

         
          <div className="flower-info">
            <p className="flower-name">{bestPlant.name}의</p>
            <p className="flower-meaning">"{bestPlant.meaning}"</p>
            <div className="flower-count">
            <img src={leafIcon} alt="Leaf Icon" className="leaf-icon" />
              <span>{bestPlant.count}회</span>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyBestFlower;