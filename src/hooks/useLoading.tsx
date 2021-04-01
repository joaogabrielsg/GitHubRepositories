import React, {useState, createContext, useContext} from 'react';
import LoadingModal from '../components/LoadingModal';

const LoadingContext = createContext({});

export const LoadingProvider = ({children}) => {
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
