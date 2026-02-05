import React from 'react';

const ExtrasCard = ({ extras, values }) => {
    // If values not passed (for some reason), we fallback or just show extras
    // But assuming values are passed now from App.js

    const { E, G, N, F, O } = values || {};

    return (
        <div className="card extras-card">
            <h3>Extras</h3>
            <div className="extras-grid">
                <div className="extra-item">
                    <span className="extra-label">E G N</span>
                    <span className="extra-val param-seq">
                        <span>{E}</span>
                        <span>{G}</span>
                        <span>{N}</span>
                    </span>
                </div>
                <div className="extra-item">
                    <span className="extra-label">F G O</span>
                    <span className="extra-val param-seq">
                        <span>{F}</span>
                        <span>{G}</span>
                        <span>{O}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExtrasCard;
