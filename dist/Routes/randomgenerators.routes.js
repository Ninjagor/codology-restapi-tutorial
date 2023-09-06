"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const randomnumberguard_middleware_1 = __importDefault(require("../Middlewares/randomnumberguard.middleware"));
const randomgenerators_controller_1 = __importDefault(require("../Controllers/randomgenerators.controller"));
const router = (0, express_1.Router)();
router.get('/random/number', randomnumberguard_middleware_1.default, randomgenerators_controller_1.default.generateRandomNumber);
router.get('/random/quote', randomgenerators_controller_1.default.generateRandomQuote);
exports.default = router;
//# sourceMappingURL=randomgenerators.routes.js.map