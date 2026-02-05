/**
 * Computes the recursive sum of digits until a single digit 1-9 is reached.
 * Example: 2004 -> 6; 29 -> 11 -> 2.
 * @param {number} n 
 * @returns {number} 1-9
 */
function reduceToDigit(n) {
    if (n === 0) return 0; // 0 remains 0
    let sum = Math.abs(n);
    while (sum > 9) {
        let currentString = sum.toString();
        sum = 0;
        for (let char of currentString) {
            sum += parseInt(char, 10);
        }
    }
    return sum;
}

/**
 * Parses coordinates from a date string DD/MM/YYYY
 * Returns zeros if dateStr is empty/invalid
 * @param {string} dateStr 
 */
function parseDateParts(dateStr) {
    if (!dateStr || !dateStr.includes('/')) {
        return { dd: 0, mm: 0, y1: 0, y2: 0 };
    }
    const [d, m, y] = dateStr.split('/');
    const dd = reduceToDigit(parseInt(d, 10));
    const mm = reduceToDigit(parseInt(m, 10));
    const y1 = reduceToDigit(parseInt(y.substring(0, 2), 10)); // Century
    const y2 = reduceToDigit(parseInt(y.substring(2, 4), 10)); // Year
    return { dd, mm, y1, y2 };
}

/**
 * Calculates the 'Mystical Triangle' values
 * @param {string[]} dates - Array of up to 3 date strings "DD/MM/YYYY"
 */
function calculateTriangle(dates) {
    // Ensure we process 3 items, filling missing ones with empty strings
    const safeDates = [...dates];
    while (safeDates.length < 3) safeDates.push("");

    const p1 = parseDateParts(safeDates[0]);
    const p2 = parseDateParts(safeDates[1]);
    const p3 = parseDateParts(safeDates[2]);

    // COMPUTE A, B, C, D
    const A = reduceToDigit(p1.dd + p2.dd + p3.dd);
    const B = reduceToDigit(p1.mm + p2.mm + p3.mm);
    const C = reduceToDigit(p1.y1 + p2.y1 + p3.y1);
    const D = reduceToDigit(p1.y2 + p2.y2 + p3.y2);

    // COMPUTE E..R
    const E = reduceToDigit(A + B);
    const F = reduceToDigit(C + D);
    const G = reduceToDigit(E + F);

    const I = reduceToDigit(A + E);
    const J = reduceToDigit(B + E);
    const K = reduceToDigit(C + F);
    const L = reduceToDigit(D + F);

    const H = reduceToDigit(I + J);
    const M = reduceToDigit(K + L);

    const N = reduceToDigit(F + G);
    const O = reduceToDigit(E + G);
    const P = reduceToDigit(N + O);
    const Q = reduceToDigit(O + P);
    const R = reduceToDigit(N + P);

    // Extras
    const EGN = reduceToDigit(E + G + N);
    const FGO = reduceToDigit(F + G + O);

    // Has 7 in NOQR?
    const noqr = [N, O, Q, R];
    const has7 = noqr.includes(7);

    // Counts on [H, I, J, K, L, M]
    const middle = [H, I, J, K, L, M];
    const counts = {
        group16: 0,
        group27: 0,
        group38: 0,
        group49: 0,
        group5: 0
    };

    middle.forEach(val => {
        if (val === 1 || val === 6) counts.group16++;
        else if (val === 2 || val === 7) counts.group27++;
        else if (val === 3 || val === 8) counts.group38++;
        else if (val === 4 || val === 9) counts.group49++;
        else if (val === 5) counts.group5++;
    });

    return {
        breakdown: [p1, p2, p3],
        values: { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R },
        extras: { EGN, FGO, has7 },
        counts
    };
}

module.exports = { reduceToDigit, calculateTriangle };
