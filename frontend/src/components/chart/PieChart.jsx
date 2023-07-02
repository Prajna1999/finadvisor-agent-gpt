import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart() {
  const data = {
    labels: ['Savings', 'Shopping', 'Food', 'Other', 'Entertainment'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#70d4b4',
          '#ab82ff'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#70d4b4',
          '#ab82ff'
        ]
      }
    ]
  };

  const options = {
    // responsive: true,
    title: {
      display: true,
      text: 'Your Financial Distribution',
      fontSize: 20
    },
    legend: {
      position: 'bottom',
    }
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
