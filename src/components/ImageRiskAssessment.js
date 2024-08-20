import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ImageRiskAssessment = () => {
    const data = {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        datasets: [
            {
                label: 'Total Vulnerabilities',
                data: [10, 20, 30, 40], 
                backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0']
            }
        ]
    };

    return (
        <div>
            <div className="chart-container">
                <Bar data={data} />
            </div>
            <p>Total Vulnerabilities: 1470</p>
        </div>
    );
};

export default ImageRiskAssessment;
