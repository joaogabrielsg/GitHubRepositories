import React from 'react';
import {LoadingProvider} from './useLoading';
import {MessageProvider} from './useMessage';

const AppProviderContext = ({children}) => (
  <LoadingProvider>
    <MessageProvider>{children}</MessageProvider>
  </LoadingProvider>
);

export default AppProviderContext;
