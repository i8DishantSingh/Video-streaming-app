import { fetchFromTMDB } from "../services/tmdb.service.js";
import { urlsList } from "../urls/urls.tmdb.js";

export async function getTrendingTvShow(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    );
    const randomTvShow =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({ success: true, TvShow: randomTvShow });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
export async function getTvShowTrailer(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    );
    res.send({ sucess: true, trailer: data });
  } catch (error) {
    if (error.response || error.response.status === 404) {
      res.status(404).json({ success: false, message: "TvShow not found" });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getTvShowDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    );
    res.status(200).json({ sucess: true, details: data });
  } catch (error) {
    if (error.response || error.response.status === 404) {
      res.status(404).json({ success: false, message: "TvShow not found" });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getSimilarTvShows(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
    );
    res.status(200).json({
      success: true,
      similar: data,
    });
  } catch (error) {
    if (error.response || error.response.status === 404) {
      res.status(404).json({ success: false, message: "TvShow not found" });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getTvShowsByCategory(req, res) {
  const { category } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`,
    );
    res.status(200).json({ sucess: true, content: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
