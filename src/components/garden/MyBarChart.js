import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/MyBarChart.css'
export default class MyBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-event-mmwz85';

  state = {
    data: [
      {
        name: '4-6',
        time:100
      },
      {
        name: '6-9',
        time:10
      },
      {
        name: '9-11',
        time:80
      },
      {
        name: '11-14',
        time:70
      },
      {
        name: '14-16',
        time:80
      },
      {
        name: '16-18',
        time:100
      },
      {
        name: '18-21',
        time:150
      },
      {
        name: '21-24',
        time:50
      },
      {
        name: '24-4',
        time:120
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    

    return (
      <div className="my-barchart" style={{ width: '100%' }}>
        <h2>집중 시간 분포</h2>
        <div className="custom-bar-chart" >
        <ResponsiveContainer width="100%" height={200}>
        
          <BarChart width={20} margin={5} height={40} data={data} barCategoryGap="5px">
          <XAxis dataKey="name" tick={{ fontSize: 9 }} />
          <YAxis tick={{ fontSize:10 }} />
            <Bar dataKey="time" barSize={20.87} onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#00A806' : '#D6F1D7'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </div>
         </div>
    );
  }
}
