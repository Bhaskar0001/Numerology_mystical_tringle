/**
 * Validates the input array of dates.
 * @param {string[]} dates 
 * @returns {string|null} Error message or null if valid
 */
function validateDates(dates) {
    if (!Array.isArray(dates)) {
        return "Invalid input format.";
    }

    // Filter out empty strings to check if we have at least one date
    const filledDates = dates.filter(d => d && d.trim() !== "");

    if (filledDates.length === 0) {
        return "Please provide at least one date.";
    }

    if (filledDates.length > 3) {
        return "Maximum 3 dates allowed.";
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    for (let i = 0; i < dates.length; i++) {
        const dateStr = dates[i];

        // Skip validation for empty fields (will be treated as 0s in calculation)
        if (!dateStr || dateStr.trim() === "") continue;

        if (!dateRegex.test(dateStr)) {
            return `Date ${i + 1} must be in DD/MM/YYYY format.`;
        }

        const [d, m, y] = dateStr.split('/').map(Number);

        // Basic validity check
        if (m < 1 || m > 12) return `Date ${i + 1} has invalid month.`;
        if (d < 1 || d > 31) return `Date ${i + 1} has invalid day.`;

        const dateObj = new Date(y, m - 1, d);
        if (dateObj.getFullYear() !== y || dateObj.getMonth() + 1 !== m || dateObj.getDate() !== d) {
            return `Date ${i + 1} is not a valid calendar date.`;
        }
    }

    return null;
}

module.exports = { validateDates };
