import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

export function DoughnutGraph({ score, focus, patience, memory, hyperactivity }) {
  // Dynamically update the data based on the score prop
  const total = 40 - score + focus + patience + memory - hyperactivity;
  const data = {
    labels: ['Quiz', 'Focus', 'Patience', 'Memory', 'Hyperactivity'],
    datasets: [
      {
        label: '',
        data: [20 - score, focus, patience, memory, 20 - hyperactivity, 100 - total],
        backgroundColor: [
          '#fff',       // White
          '#ebd07e',    // Light Gold
          '#846815',    // Dark Gold
          '#ae913d',    // Bronze
          '#dfb846',    // Yellow Gold
          '#64057e',    // Deep Purple
        ],
        borderColor: [
          '#fff', // White border for all segments
          '#fff',
          '#fff',
          '#fff',
          '#fff',
          '#fff',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '50%', // Doughnut cutout size
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
    maintainAspectRatio: false, // Allow responsive resizing
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {/* Doughnut Chart */}
      <div style={{ height: '300px' }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div
        style={{
          marginTop: '20px',
          color: 'white',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', // Wrap items to fit within the available space
          gap: '10px', // Add spacing between legend items
        }}
      >
        <div><span style={{ color: '#fff', fontWeight: 'bold' }}>⬤</span> Quiz</div>
        <div><span style={{ color: '#ebd07e', fontWeight: 'bold' }}>⬤</span> Focus</div>
        <div><span style={{ color: '#846815', fontWeight: 'bold' }}>⬤</span> Patience</div>
        <div><span style={{ color: '#ae913d', fontWeight: 'bold' }}>⬤</span> Memory</div>
        <div><span style={{ color: '#dfb846', fontWeight: 'bold' }}>⬤</span> Hyperactivity</div>
        <div><span style={{ color: '#64057e', fontWeight: 'bold' }}>⬤</span> Total</div>
      </div>
    </div>
  );
}
