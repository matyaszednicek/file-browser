import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/not-found")({
  component: NotFound,
});

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        404 - Directory Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The directory you are looking for does not exist.
      </p>
      <Link to="/$">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-950">
          Go Back to Home "/"
        </button>
      </Link>
    </div>
  );
}
