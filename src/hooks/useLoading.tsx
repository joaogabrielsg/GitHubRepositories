import React, {useState, createContext, useContext} from 'react';
import LoadingModal from '../components/LoadingModal';

interface LoadingContextData {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FunctionComponent = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}>
      {children}
      <LoadingModal isLoading={isLoading} />
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useModal não pode ser usado sem o próprio contexto');
  }
  return context;
}
