import express from 'express';
import { getPosts } from "../controllers/posts.js";

const router = express.Router();
// setup the starting path for all routes from this file, that is localhost:5000/posts
router.get("/", getPosts);

export default router;