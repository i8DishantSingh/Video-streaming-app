import express from 'express';
import { getTrendingMovie, getMovieTrailer } from '../controllers/movie.controller.js';


const router = express.Router();


router.get('/trending', getTrendingMovie);
router.get('/:id/trailer', getMovieTrailer);

export default router; 