import { Request, Response } from "express";
import { CustomRequest } from "../Interfaces";
const quotes = require("../../quotes.json");

const RandomGeneratorController = {
  generateRandomNumber: (req: CustomRequest, res: Response) => {
    const { min, max }: { min: number, max: number } = { min: req.min, max: req.max }
    // Generate and send random number
    const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;;
    res.status(200).send({ "number": randomNumber });
  },
  generateRandomQuote: (req: Request, res: Response) => {
    res.send(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)])
  }
}


export default RandomGeneratorController;
