import React from 'react';

const Error = () => {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
            Layout Not Found.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry , we couldn't find the layout you were looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
