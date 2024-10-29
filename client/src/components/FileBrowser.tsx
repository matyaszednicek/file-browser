import React from "react";
import { Link } from "@tanstack/react-router";
import { FcFile, FcFolder } from "react-icons/fc";
import { FileItem } from "../queries/fetchFiles";

type FileBrowserProps = {
  files: FileItem[];
  currentPath: string;
};

export const FileBrowser: React.FC<FileBrowserProps> = ({
  files,
  currentPath,
}) => {
  const upPath = currentPath.split("/").slice(0, -1).join("/");

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full">
      <ul className="grid grid-cols-3 gap-4">
        <Link
          to="/$"
          params={{ _splat: upPath }}
          disabled={currentPath === "/"}
          className={
            currentPath === "/" ? "pointer-events-none text-gray-400" : ""
          }
        >
          <li className="bg-white hover:bg-gray-200 rounded-lg p-2 shadow-sm">
            <button className="flex items-center text-left w-full">
              <span className="mr-2 text-xl">..</span>
            </button>
          </li>
        </Link>
        {files.map((item) => (
          <BrowserItem key={item.name} item={item} currentPath={currentPath} />
        ))}
      </ul>
    </div>
  );
};

type BrowserItemProps = {
  item: FileItem;
  currentPath: string;
};

const BrowserItem: React.FC<BrowserItemProps> = ({ item, currentPath }) => {
  const handleFileClick = (e: React.MouseEvent) => {
    if (item.isDirectory) {
      return;
    }
    e.preventDefault();

    const fileUrl = `${import.meta.env.VITE_API_URL}${currentPath}/${item.name}`;
    window.open(fileUrl, "_blank");
  };

  return (
    <Link
      to="/$"
      params={{ _splat: `${currentPath}/${item.name}` }}
      onClick={handleFileClick}
    >
      <li className="bg-white hover:bg-gray-200 rounded-lg p-2 shadow-sm">
        <button className="flex items-center text-left w-full">
          <span className="mr-2 text-xl">
            {item.isDirectory ? <FcFolder /> : <FcFile />}
          </span>
          <span className="font-medium text-gray-700 truncate">
            {item.name}
          </span>
        </button>
      </li>
    </Link>
  );
};
