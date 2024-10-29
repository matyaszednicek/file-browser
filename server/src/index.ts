import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/*", (req, res) => {
  const decodedPath = decodeURIComponent(req.path);
  const filePath = path.resolve("/", decodedPath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      return res.status(404).send("Path not found");
    }

    if (stats.isDirectory()) {
      fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
        if (err) {
          return res.status(500).send("Error reading directory");
        }

        const contents = files.map((file) => ({
          name: file.name,
          isDirectory: file.isDirectory(),
        }));
        res.json(contents);
      });
    } else {
      res.download(filePath, (err) => {
        if (err) {
          return res.status(500).send("Error downloading file");
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
