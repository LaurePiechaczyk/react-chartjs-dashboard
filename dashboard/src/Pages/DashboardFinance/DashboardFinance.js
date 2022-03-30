import React, { useState, useContext } from "react";
import "./DashboardFinance.css";
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart";
import { DashboardContext } from "../../context/DashboardContext";

export default function DashboardFinance() {

  const { dataChart, changeYear, yearData } = useContext(DashboardContext);


  return (
    <div className="global-container">
        <h1>years results : 2020</h1>

        <form>
            <label htmlFor="year">Choose a year</label>
            <select onChange={changeYear} id="{yearData}">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </form>

        <div className="dashboard-container">
            <BarChart data={dataChart.chart1} name="dummy data set1" />
            <LineChart
              data={dataChart.chart2}
              name={"dummy data set2"}
            />
            <LineChart
              data={dataChart.chart3}
              name={"dummy data set3"}
            />
            <BarChart data={dataChart.chart4} name="dummy data set4" />
        </div>
    </div>
  )
}
