import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/MyPieChart.css';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" style={{ fontSize: '13px' }}>
      {percent ? `${(percent * 100).toFixed(0)}%` : ''} 
    </text>
  );
};


const getCategoryColor = (() => {
  const greenShades = ['#015000', '#2E7D32', '#388E3C', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7'];
  const categoryColorMap = {}; 

  return (category) => {
    if (!categoryColorMap[category]) {
      categoryColorMap[category] = greenShades[Object.keys(categoryColorMap).length % greenShades.length];
    }
    return categoryColorMap[category];
  };
})();

export default class MyPieChart extends PureComponent {
  render() {
    const { categoryAnalysis } = this.props;

   
    const defaultData = [{ name: "데이터 없음", value: 0, color: "#D3D3D3" }];
    const hasData = categoryAnalysis && categoryAnalysis.length > 0;

    const totalMinutes = hasData ? categoryAnalysis.reduce((sum, item) => sum + item.time, 0) : 1;
    const formattedData = hasData
      ? categoryAnalysis.map(item => ({
          name: item.category,
          value: item.time,
          percentage: ((item.time / totalMinutes) * 100).toFixed(2),
          hours: Math.floor(item.time / 60),
          minutes: item.time % 60,
          color: getCategoryColor(item.category),
        }))
      : defaultData;

    return (
      <div className="my-piechart" style={{ width: '100%' }}>
        <h2>카테고리 분석</h2>
        <div className="custom-pie-chart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={200} height={200}>
              <Pie
                data={formattedData}
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
          {hasData ? (
            formattedData.map((entry, index) => (
              <div key={index} className="legend-item">
                <span className="color-dot" style={{ backgroundColor: entry.color }}></span>
                <span className="lang-name">{entry.name}</span> 
                <span className="percent">{entry.percentage}%</span>
                <span className="time">{entry.hours}시간 {entry.minutes}분</span>
              </div>
            ))
          ) : (
            <div className="legend-item">
              <span className="color-dot" style={{ backgroundColor: "#D3D3D3" }}></span>
              <span className="lang-name">데이터 없음</span>
              <span className="percent">-</span>
              <span className="time">-</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

