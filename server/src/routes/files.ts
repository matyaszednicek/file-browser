import express from "express";
import { getFileOrDirectoryContents } from "../controllers/files.controller";

const router = express.Router();

router.get("/*", getFileOrDirectoryContents);

export default router;
