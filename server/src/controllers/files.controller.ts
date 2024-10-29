import { Request, Response } from "express";
import { getFileContents } from "../services/files.service";

export const getFileOrDirectoryContents = async (
  req: Request,
  res: Response
): Promise<void> => {
  const decodedPath = decodeURIComponent(req.path);

  try {
    const contents = await getFileContents(decodedPath);
    res.json(contents);
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      if (error.code === "ENOENT") {
        res.status(404).json({ error: "Path not found" });
      } else if (error.code === "EISDIR") {
        res.status(500).json({ error: "Error reading directory" });
      }
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
