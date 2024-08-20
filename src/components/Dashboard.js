import React, { useState } from 'react';
import AddWidgetModal from './AddWidgetModal';
import CloudAccounts from './CloudAccounts';
import RiskAssessment from './RiskAssessment';
import ImageRiskAssessment from './ImageRiskAssessment';
import NamespaceSpecificAlerts from './NamespaceSpecificAlerts';
import WorkloadAlerts from './WorkloadAlerts';

const initialData = {
    categories: [
        {
            name: 'CSPM Executive Dashboard',
            widgets: [
                { id: 'widget1', name: 'Cloud Accounts', component: <CloudAccounts /> },
                { id: 'widget2', name: 'Cloud Account Risk Assessment', component: <RiskAssessment /> }
            ]
        },
        {
            name: 'CWPP Dashboard',
            widgets: [
                { id: 'widget3', name: 'Top 5 Namespace Specific Alerts', component: <NamespaceSpecificAlerts /> },
                { id: 'widget4', name: 'Workload Alerts', component: <WorkloadAlerts /> }
            ]
        },
        {
            name: 'Registry Scan',
            widgets: [
                { id: 'widget5', name: 'Image Risk Assessment', component: <ImageRiskAssessment /> },
                { id: 'widget6', name: 'Image Security Issues', text: 'Total Images: 2' }
            ]
        }
    ]
};

const Dashboard = () => {
    const [data, setData] = useState(initialData);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addWidget = (widget) => {
        const updatedCategories = data.categories.map(category => {
            if (category.name === selectedCategory) {
                return { ...category, widgets: [...category.widgets, widget] };
            }
            return category;
        });
        setData({ categories: updatedCategories });
        setShowModal(false);
        setSelectedCategory(null); // Reset selected category
    };

    const openModal = (categoryName) => {
        setSelectedCategory(categoryName);
        setShowModal(true);
    };

    const renderWidgets = (widgets, categoryName) => {
        const widgetRows = [];
        for (let i = 0; i < widgets.length; i += 3) {
            const rowWidgets = widgets.slice(i, i + 3);
            widgetRows.push(
                <div className="widget-row" key={i}>
                    {rowWidgets.map((widget) => (
                        <div className="widget" key={widget.id}>
                            <h3>{widget.name}</h3> {/* Add the widget name as a heading */}
                            {widget.component ? widget.component : <div className="empty-widget">Empty Widget</div>}
                        </div>
                    ))}
                    {rowWidgets.length < 3 && (
                        <div className="empty-widget center-widget">
                            <button className="add-widget-button" onClick={() => openModal(categoryName)}>Add Widgets +</button>
                        </div>
                    )}
                </div>
            );
        }
        return widgetRows;
    };

    return (
        <div>
            <h1>CNAPP Dashboard</h1>
            <div className='widge-button'>
                <button onClick={() => openModal(null)}>Add Widget +</button>
            </div>
            <div className="dashboard">
                {data.categories.map(category => (
                    <div key={category.name} className="category">
                        <h2>{category.name}</h2>
                        {renderWidgets(category.widgets, category.name)}
                    </div>
                ))}
            </div>
            {showModal && <AddWidgetModal addWidget={addWidget} closeModal={() => setShowModal(false)} selectedCategory={selectedCategory} />}
        </div>
    );
};

export default Dashboard;
