import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccounts = () => {
    const data = {
        labels: ['Connected', 'Not Connected'],
        datasets: [
            {
                data: [2, 2],
                backgroundColor: ['#dcdaea','#4633ff'],
                hoverBackgroundColor: ['#dcdaea','#4633ff']
            }
        ]
    };

    return (
        <div >
            <div className="chart-container">
            <Doughnut data={data} />
            </div>
            <p>Total: 2, Connected: 2, Not Connected: 2</p>
        </div>
    );
};

export default CloudAccounts;
