"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomnumberGuard(req, res, next) {
    const min = parseInt(req.query.min);
    const max = parseInt(req.query.max);
    if (isNaN(min) || isNaN(max)) {
        return res.status(400).send("Invalid requet");
    }
    // Add min and max to req. Allowed because of the CustomRequest interface.
    req.min = min;
    req.max = max;
    // Proceed to next function (which in this case is generating and returning number)
    next();
}
exports.default = randomnumberGuard;
//# sourceMappingURL=randomnumberguard.middleware.js.map