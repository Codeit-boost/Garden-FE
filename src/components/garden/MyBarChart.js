import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import "../../styles/MyBarChart.css";

export default class MyBarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.formatData(props.timeDistribution),
      activeIndex: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timeDistribution !== this.props.timeDistribution) {
      this.setState({ data: this.formatData(this.props.timeDistribution) });
    }
  }

  formatData = (timeDistribution) => {
    if (!timeDistribution || Object.keys(timeDistribution).length === 0) {
      return [{ name: "", time: 0 }]; // 기본값 추가
    }

    return Object.entries(timeDistribution).map(([key, value]) => ({
      name: `${key}`,
      time: value,    
    }));
  };
  handleClick = (data, index) => {
    this.setState({ activeIndex: index });
  };

  
  getYAxisDomain = () => {
    const { periodType } = this.props; 
    if (periodType === "daily") return [0, 150];
    if (periodType === "weekly") return [0, 50];
    if (periodType === "monthly") return [0, 250];
    return [0, "auto"]; 
  };

  
  getYAxisTicks = () => {
    const { periodType } = this.props;
    if (periodType === "daily") return [0, 30, 60, 90, 120,150];
    if (periodType === "weekly") return [0, 10, 20, 30, 40, 50];
    if (periodType === "monthly") return [0, 50, 100, 150, 200, 250];
    return undefined; 
  };

  render() {
    const { activeIndex, data } = this.state;

    return (
      <div className="my-barchart" style={{ width: "100%" }}>
        <h2>집중 시간 분포</h2>
        <div className="custom-bar-chart">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart width={20} margin={5} height={40} data={data} barCategoryGap="5px">
              <XAxis dataKey="name" tick={{ fontSize: 9 }} />
              <YAxis 
                tick={{ fontSize: 10 }} 
                domain={this.getYAxisDomain()} 
                ticks={this.getYAxisTicks()} 
              />
              <Bar dataKey="time" barSize={20.87} onClick={this.handleClick}>
                {data.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={index === activeIndex ? "#00A806" : "#D6F1D7"}
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
