export type FileItem = {
  name: string;
  isDirectory: boolean;
};

export const fetchFiles = async (
  path: string
): Promise<{ files: FileItem[] }> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${path}`);
  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }
  const files = await res.json();
  return { files };
};
