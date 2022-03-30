import React from 'react';
import {Bar} from 'react-chartjs-2';
import fulldata from "../../context/fulldata";

export default function BarChart() {
    console.log(fulldata)


  return (
    <div className="chart-container">
    
    <Bar />
    </div>
  )
}
