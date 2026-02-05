import React from 'react';
import './TriangleCard.css';

const TriangleCard = ({ values }) => {
    const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R } = values;

    // Helper to render a node with optional label
    const Node = ({ val, label, type = 'std' }) => (
        <div className={`t-node ${type}`} title={label ? `${label}: ${val}` : val}>
            <span className="val">{val}</span>
            {label && <span className="lbl">{label}</span>}
        </div>
    );

    return (
        <div className="card triangle-card-container">
            <h3>Mystical Pattern</h3>

            <div className="mystic-grid">
                {/* Row 1: A B C D */}
                <div className="row row-top">
                    <Node val={A} label="A" />
                    <Node val={B} label="B" />
                    <Node val={C} label="C" />
                    <Node val={D} label="D" />
                </div>

                {/* Row 2: E F */}
                <div className="row row-upper-mid">
                    <Node val={E} label="E" type="secondary" />
                    <Node val={F} label="F" type="secondary" />
                </div>

                {/* Row 3: G */}
                <div className="row row-center">
                    <Node val={G} label="G" type="primary" />
                </div>

                {/* Row 4: Wings and Center Line */}
                <div className="row row-wings">
                    <div className="wing-left">
                        <Node val={H} label="H" type="small" />
                        <Node val={I} label="I" type="small" />
                        <Node val={J} label="J" type="small" />
                    </div>

                    <div className="wing-spacer"></div>

                    <div className="wing-right">
                        <Node val={K} label="K" type="small" />
                        <Node val={L} label="L" type="small" />
                        <Node val={M} label="M" type="small" />
                    </div>
                </div>

                {/* Row 5: N O */}
                <div className="row row-lower-mid">
                    <Node val={N} label="N" type="secondary" />
                    <Node val={O} label="O" type="secondary" />
                </div>

                {/* Row 6: P */}
                <div className="row row-bottom-1">
                    <Node val={P} label="P" type="primary" />
                </div>

                {/* Row 7: Q R */}
                <div className="row row-bottom-2">
                    <Node val={Q} label="Q" type="std" />
                    <Node val={R} label="R" type="std" />
                </div>

            </div>
        </div>
    );
};

export default TriangleCard;
