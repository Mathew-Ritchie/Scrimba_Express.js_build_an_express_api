import { startups } from "../data/data.js";

export const getAllData = (req, res) => {
  let filteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query;

  if (industry) {
    filteredData = filteredData.filter(
      (startUp) => startUp.industry.toLowerCase() === industry.toLowerCase()
    );
  }
  if (country) {
    filteredData = filteredData.filter(
      (startUp) => startUp.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (continent) {
    filteredData = filteredData.filter(
      (startUp) => startUp.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  if (is_seeking_funding) {
    filteredData = filteredData.filter(
      (startUp) => startUp.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    );
  }
  if (has_mvp) {
    filteredData = filteredData.filter(
      (startUp) => startUp.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.json(filteredData);
};
