// Define routes for searches.
import express from "express";
import { getCompanyDetails, getFilterdSearch } from "../controllers/company.js";

const router = express.Router();

// Route to get companies by keywork entered.
router.get("/filtered-search", getFilterdSearch);

// Route to get details of a company.
router.get("/getcomapnydetails/:id", getCompanyDetails);

export { router as companyRoutes };
