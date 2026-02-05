const { calculateTriangle } = require('../utils/numerology');
const { validateDates } = require('../utils/validate');

exports.generateTriangle = (req, res) => {
    try {
        const { dates } = req.body;

        const error = validateDates(dates);
        if (error) {
            return res.status(400).json({ error });
        }

        const result = calculateTriangle(dates);
        res.json(result);

    } catch (err) {
        console.error("Error generating triangle:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
