import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './MyPieChart.css';
const data = [
  { name: '공부', value: 150, color: '#015000' },  
  { name: '운동', value: 120, color: '#2E7D32' }, 
  { name: '독서', value: 45, color: '#388E3C' },   
  { name: '게임', value: 30, color: '#81C784' }  
];

const totalMinutes = data.reduce((sum, item) => sum + item.value, 0);


const formattedData = data.map(item => ({
  ...item,
  percentage: ((item.value / totalMinutes) * 100).toFixed(2), 
  hours: Math.floor(item.value / 60), 
  minutes: item.value % 60 
}));
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white"  fontSize="10" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class MyPieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <div className="my-piechart" style={{ width: '100%' }}>
        <h2>카테고리 분석</h2>
        <div className="custom-pie-chart" >
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            
            dataKey="value"
          >
            {formattedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="legend-container">
          {formattedData.map((entry, index) => (
            <div key={index} className="legend-item">
              <span className="color-dot" style={{ backgroundColor: entry.color }}></span>
              <span className="lang-name"> {entry.name }  </span>
              <span className="percent">{entry.percentage}%</span>
              <span className="time">  {entry.hours}시간 {entry.minutes}분</span>
              
 
            </div>
          ))}
        </div>
      </div>
    );
  }
}
