import React from "react";

const LoadingState = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="lg:w-1/2 sm:w-3/4 w-full bg-blue grid place-content-center">
        <div className="flex w-9 justify-between h-8 relative">
          <div className="w-2 h-8 bg-white bar-1 rounded-sm absolute bottom-0 left-1"></div>
          <div className="w-2 h-8 bg-white bar-2 rounded-sm absolute bottom-0 left-4"></div>
          <div className="w-2 h-8 bg-white bar-3 rounded-sm absolute bottom-0 left-7"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
