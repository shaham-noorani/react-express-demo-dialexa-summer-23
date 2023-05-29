import { Request, Response } from "express";
import {
  getAllBreweries,
  getBreweriesByCity,
} from "../services/breweries.service";

export const allBreweries = (req: Request, res: Response) => {
  const breweries = getAllBreweries();
  res.status(200).json(breweries);
};

export const breweriesByCity = (req: Request, res: Response) => {
  const city: string = req.params.city;
  const breweries = getBreweriesByCity(city);
  console.log(breweries[0]);
  res.status(200).json(breweries);
};
