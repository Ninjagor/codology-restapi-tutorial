// // Importing express and express types
// import express from "express";
// import { Request, Response, NextFunction } from "express";
//
// // Interface which extends on Request typing from express.
// interface CustomRequest extends Request {
//   min: number;
//   max: number;
// }
//
// // Creating app and port, importing quotes from JSON
// const quotes = require("../quotes.json");
// const app = express();
// const port = 8080;
//
// // Guard middleware to filter requests
// function routeGuard(req: CustomRequest, res: Response, next: NextFunction) {
//   const min = parseInt(req.query.min as string);
//   const max = parseInt(req.query.max as string);
//   if (isNaN(min) || isNaN(max)) {
//     return res.status(400).send("Invalid requet")
//   }
//   // Add min and max to req. Allowed because of the CustomRequest interface.
//   req.min = min;
//   req.max = max;
//   // Proceed to next function (which in this case is generating and returning number)
//   next()
// }
// // Route for random number, 
// app.get("/random/number", routeGuard, (req: CustomRequest, res: Response) => {
//   // Get min and max from req
//   const { min, max }: { min: number, max: number } = { min: req.min, max: req.max }
//   // Generate and send random number
//   const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;;
//   res.send(randomNumber);
// })
//
// app.get('/random/quote', async (req: Request, res: Response) => {
//   res.send(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)])
// });
//
// // Init server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });
//
//
import app from "./app";

const port: number = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})




