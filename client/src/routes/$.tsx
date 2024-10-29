import { createFileRoute, Navigate } from "@tanstack/react-router";
import { FileBrowser } from "../components/FileBrowser";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../queries/fetchFiles";
import Loading from "../components/Loading";

export const Route = createFileRoute("/$")({
  component: IndexRoute,
});

function IndexRoute() {
  const { _splat: path } = Route.useParams();
  const currentPath = React.useMemo(() => path || "/", [path]);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["files", currentPath],
    queryFn: () => fetchFiles(currentPath),
    retry: 1,
  });

  return (
    <div className="container flex flex-col items-center justify-center my-20">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">File Browser</h1>
        <p className="text-sm text-gray-600">
          Current Path:
          <span className="font-mono text-blue-600"> {currentPath}</span>
        </p>
      </div>

      {isFetching && <Loading />}
      {isError && <Navigate to="/not-found" />}
      {data && <FileBrowser files={data.files} currentPath={currentPath} />}
    </div>
  );
}
