import React from "react";

interface LoadingComponentProps {}

export const LoadingComponent: React.FC<LoadingComponentProps> = React.memo(
  () => {
    return <h1>Loading...</h1>;
  }
);
