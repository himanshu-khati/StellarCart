import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for might be in another castle.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
