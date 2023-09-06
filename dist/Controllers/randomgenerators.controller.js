"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quotes = require("../../quotes.json");
const RandomGeneratorController = {
    generateRandomNumber: (req, res) => {
        const { min, max } = { min: req.min, max: req.max };
        // Generate and send random number
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        ;
        console.log(`RANDNUM ${randomNumber}`);
        res.status(200).send({ "number": randomNumber });
    },
    generateRandomQuote: (req, res) => {
        res.send(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]);
    }
};
exports.default = RandomGeneratorController;
//# sourceMappingURL=randomgenerators.controller.js.map