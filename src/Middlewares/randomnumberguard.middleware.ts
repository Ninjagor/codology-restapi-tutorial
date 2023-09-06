import { Response, NextFunction } from "express";
import { CustomRequest } from "../Interfaces";

function randomnumberGuard(req: CustomRequest, res: Response, next: NextFunction) {
  const min = parseInt(req.query.min as string);
  const max = parseInt(req.query.max as string);
  if (isNaN(min) || isNaN(max)) {
    return res.status(400).send("Invalid requet")
  }
  // Add min and max to req. Allowed because of the CustomRequest interface.
  req.min = min;
  req.max = max;
  // Proceed to next function (which in this case is generating and returning number)
  next()
}

export default randomnumberGuard;
