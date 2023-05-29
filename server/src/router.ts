import { Router } from "express";
import {
  allBreweries,
  breweriesByCity,
} from "./controllers/breweries.controller";

export const router = Router();

router.get("/allBreweries", allBreweries);

router.get("/breweriesByCity/:city", breweriesByCity);
