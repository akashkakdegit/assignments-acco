import React from 'react';
// import noDataImage from '../public/images/noDataImage.png';
const WorkloadAlerts = () => {
    const dataAvailable = false; // Replace with actual data check

    return (
        <div>
            <div className="chart-container">
                {dataAvailable ? (
                    <p>Chart will be displayed here.</p> // Replace with actual chart component
                ) : (
                    <img src="images/noDataImage.png" alt="No Graph Data Available" />
                )}
            </div>
            <p>No Graph data available!</p>
        </div>
    );
};

export default WorkloadAlerts;