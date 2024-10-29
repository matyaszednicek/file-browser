import fs from "fs/promises";
import path from "path";

interface FileContent {
  name: string;
  isDirectory: boolean;
}

export const getFileContents = async (
  decodedPath: string
): Promise<FileContent[] | Buffer> => {
  const filePath = path.resolve("/", decodedPath);

  const stats = await fs.stat(filePath);

  if (stats.isDirectory()) {
    const files = await fs.readdir(filePath, { withFileTypes: true });
    return files.map((file) => ({
      name: file.name,
      isDirectory: file.isDirectory(),
    }));
  } else {
    return await fs.readFile(filePath);
  }
};
