import React from 'react';
import '../../styles/MyGarden.css';

const MyGarden = () => {
  const gardenPlants = [
    {name : '장미', image: require('../../assets/flowers/장미.png')},
    {name : '능소화', image: require('../../assets/flowers/능소화.png')},
    {name : '라일락', image: require('../../assets/flowers/라일락.png')},
    {name : '메리골드', image: require('../../assets/flowers/메리골드.png')},
    {name : '물망초',image: require('../../assets/flowers/물망초.png')},
    {name : '수선화', image: require('../../assets/flowers/수선화.png')},
  ];

return (
  <div className="mygarden">
      <h2>나의 정원</h2>
      <div className='garden-plants'>
        {gardenPlants.map((plant, index) => (
          <div key={index} className="plant">
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyGarden;