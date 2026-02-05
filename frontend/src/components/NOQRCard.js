import React from 'react';

const NOQRCard = ({ values, has7 }) => {
    const { N, O, Q, R } = values;

    return (
        <div className="card noqr-card">
            <h3>NOQR</h3>
            <div className="noqr-values">
                <div className="val-box"><span>N</span> {N}</div>
                <div className="val-box"><span>O</span> {O}</div>
                <div className="val-box"><span>Q</span> {Q}</div>
                <div className="val-box"><span>R</span> {R}</div>
            </div>
            <div className={`has7-status ${has7 ? 'yes' : 'no'}`}>
                7 Present? <strong>{has7 ? 'YES' : 'NO'}</strong>
            </div>
        </div>
    );
};

export default NOQRCard;
