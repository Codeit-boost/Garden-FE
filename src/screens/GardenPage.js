import React, { useEffect, useState } from "react";
import api from "../api/api";
import "../styles/GardenPage.css";
import MyGarden from "../components/garden/MyGarden";
import GardenHeader from "../components/garden/GardenHeader";
import MyBarChart from "../components/garden/MyBarChart";
import MyPieChart from "../components/garden/MyPieChart";
import MyBestFlower from "../components/garden/MyBestFlower";
import BottomBar from "../components/BottomBar";

const GardenPage = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("일");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getFormattedDate = (date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });

  const getWeekNumber = (date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return Math.ceil((date.getDate() + firstDayOfMonth.getDay()) / 7);
  };

  const fetchStatistics = async () => {
    setLoading(true);

    const { year, month, day } = getFormattedDate(selectedDate);
    const queryParams = {
      type: period === "일" ? "daily" : period === "주" ? "weekly" : "monthly",
      year,
      ...(period !== "연" && { month }),
      ...(period === "일" && { day }),
      ...(period === "주" && { week: getWeekNumber(selectedDate) }),
    };

    try {
      const response = await api.get("/api/statistic", { params: queryParams });
      console.log("📊 API 응답 데이터:", response.data);
      setStatistics(response.data);
    } catch (error) {
      console.error("❌ API 요청 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [period, selectedDate]);

  return (
    <div className="garden-page">
      <div className="garden-header">
        <GardenHeader onSelectPeriod={setPeriod} onSelectDate={setSelectedDate} /> 
      </div>
      <div className="my-garden">
        <MyGarden />
      </div>

      {loading ? (
        <p></p>
      ) : (
        <>
          <div className="chart-container">
            <MyBarChart timeDistribution={statistics?.timeDistribution} />
          </div>
          <div className="chart-container">
            <MyPieChart categoryAnalysis={statistics?.categoryAnalysis} />
          </div>
          <div className="my-best-flower">
            <MyBestFlower flowerAnalysis={statistics?.flowerAnalysis} />
          </div>
        </>
      )}

      <BottomBar />
    </div>
  );
};

export default GardenPage;
