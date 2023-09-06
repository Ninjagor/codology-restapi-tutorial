import { Request } from "express";

export interface CustomRequest extends Request {
  min: number;
  max: number;
}
