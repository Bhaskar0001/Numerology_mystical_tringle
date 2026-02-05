import React, { useState } from 'react';
import './DateInput.css';

const DateInput = ({ onGenerate }) => {
    const [dates, setDates] = useState(['', '', '']);
    const [errors, setErrors] = useState([null, null, null]);

    const handleChange = (index, value) => {
        const newDates = [...dates];
        newDates[index] = value;
        setDates(newDates);

        // Clear error when typing
        if (errors[index]) {
            const newErrors = [...errors];
            newErrors[index] = null;
            setErrors(newErrors);
        }
    };

    const validate = () => {
        const newErrors = [...errors];
        let isValid = true;
        let hasAtLeastOneDate = false;
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

        dates.forEach((date, i) => {
            if (!date || !date.trim()) {
                // Empty is allowed now, just don't count it as a filled date
                newErrors[i] = null;
            } else if (!dateRegex.test(date)) {
                newErrors[i] = "Format: DD/MM/YYYY";
                isValid = false;
            } else {
                newErrors[i] = null;
                hasAtLeastOneDate = true;
            }
        });

        if (!hasAtLeastOneDate) {
            newErrors[0] = "Enter at least one date"; // Show error on first field
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onGenerate(dates);
        }
    };

    return (
        <form className="date-input-form" onSubmit={handleSubmit}>
            <div className="inputs-container">
                {dates.map((date, i) => (
                    <div key={i} className="input-group">
                        <label>Date {i + 1} {i > 0 && "(Optional)"}</label>
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            value={date}
                            maxLength={10}
                            onChange={(e) => handleChange(i, e.target.value)}
                            className={errors[i] ? 'error' : ''}
                        />
                        {errors[i] && <span className="error-msg">{errors[i]}</span>}
                    </div>
                ))}
            </div>
            <button type="submit" className="generate-btn">Generate Triangle</button>
        </form>
    );
};

export default DateInput;
