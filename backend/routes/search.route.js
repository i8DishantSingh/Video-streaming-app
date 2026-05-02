import express from "express";
import {
  searchMovie,
  searchPerson,
  searchTv,
  getSearchHisory,
  removeItemFromSearchHistory,
} from "../controllers/search.controller.js";
const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHisory);
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;
