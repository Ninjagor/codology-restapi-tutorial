import { Router } from "express";
import randomnumberGuard from "../Middlewares/randomnumberguard.middleware"
import RandomGeneratorController from "../Controllers/randomgenerators.controller";


const router = Router();

router.get('/random/number', randomnumberGuard, RandomGeneratorController.generateRandomNumber);
router.get('/random/quote', RandomGeneratorController.generateRandomQuote);


export default router;
