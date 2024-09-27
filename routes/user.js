// Define routes for user and history.
import express from 'express';
import { getHistory, saveCookie, updateHistory } from '../controllers/user.js';

const router = express.Router();

// Route to add new user.
router.post("/saveCookie", saveCookie);

// Route to get history of the saved user.
router.get('/getHistory', getHistory);

// Route to update the history of the saved user.
router.get('/updateHistory', updateHistory);

export { router as userRoutes };