import React from 'react';

const CountsCard = ({ counts }) => {
    return (
        <div className="card counts-card">
            <h3>Counts</h3>
            <div className="counts-grid">
                <div className="count-item">
                    <span className="count-label">1 & 6</span>
                    <span className="count-val">{counts.group16}</span>
                </div>
                <div className="count-item">
                    <span className="count-label">2 & 7</span>
                    <span className="count-val">{counts.group27}</span>
                </div>
                <div className="count-item">
                    <span className="count-label">3 & 8</span>
                    <span className="count-val">{counts.group38}</span>
                </div>
                <div className="count-item">
                    <span className="count-label">4 & 9</span>
                    <span className="count-val">{counts.group49}</span>
                </div>
                <div className="count-item">
                    <span className="count-label">5</span>
                    <span className="count-val">{counts.group5}</span>
                </div>
            </div>
        </div>
    );
};

export default CountsCard;
