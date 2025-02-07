import React from 'react';
import '../../styles/MyGarden.css';


const MyGarden = ({ myGarden }) => { 
  return (
    <div className="mygarden" style={{ width: '100%' }}>
      <h2>나의 정원</h2>
      <div className='garden-plants'>
        {myGarden?.length > 0 ? (
          myGarden.map((plant, index) => (
            <div key={index} className="plant">
              <img
                src={require(`../../assets/flowers/${plant.name}.png`)}
                alt={plant.name}
                className="flower-image"
              />
              <p>{plant.name}</p>
             
            </div>
          ))
        ) : (
          <div className="plant" style={{
            boxShadow: '0px 0.5px 3px 0px #0000001A',
            borderRadius: '8px'
          }}>  <p> 비어있음</p>
            </div>
        )}
      </div>
    </div>
  );
};
export default MyGarden;