import React from 'react';
import {LoadingProvider} from './useLoading';

const AppProviderContext = ({children}) => (
  <LoadingProvider>{children}</LoadingProvider>
);

export default AppProviderContext;
