import React from 'react';

interface FetchWrapperProps {
  fetchError: any;
  fetchLoading: boolean;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  children: () => any;
}

const FetchWrapper: React.FC<FetchWrapperProps> = ({
  loadingComponent = <div>Loading...</div>,
  errorComponent = <div>Error occurred</div>,
  children,
  fetchError,
  fetchLoading,
}) => {
  if (fetchLoading) {
    return <>{loadingComponent}</>;
  }

  if (fetchError) {
    return <>{errorComponent}</>;
  }

  return <>{children}</>;
};

export default FetchWrapper;
