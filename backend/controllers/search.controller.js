import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson(req, res) {
  const { query } = res.query;
  try {
    const response = fetchFromTMDB(
      `'https://api.themoviedb.org/3/search/person?query=${query}include_adult=false&language=en-US&page=1`,
    );
    if (response.results.length === 0) {
      res.status(404).send(null);
    }
    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson controller: ", error.message);
  }
}

export async function searchMovie(req, res) {}

export async function searchTv(req, res) {}
