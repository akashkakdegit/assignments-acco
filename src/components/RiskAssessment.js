import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RiskAssessment = () => {
    const data = {
        labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
        datasets: [
            {
                data: [9659 - (1689 + 681 + 30), 30,681,1689 ],
                backgroundColor: ['#09bb0b', '#dcdaea', '#f9e839', '#C70039'],
                hoverBackgroundColor: ['#09bb0b', '#dcdaea', '#f9e839', '#C70039']
            }
        ]
    };

    return (
        <div>
            <div className="chart-container"> 
                <Doughnut data={data} />
            </div>
            <p>Total: 9659, Failed: 1689, Warning: 681</p>
        </div>
    );
};

export default RiskAssessment;
