import { Brewery } from "../models/breweries.model";
import breweries from "../database/breweries.json";

export const getAllBreweries = () => {
  return breweries as Brewery[];
};

export const getBreweriesByCity = (city: string): Brewery[] => {
  return breweries.filter((brewery: Brewery) => brewery.city === city);
};
