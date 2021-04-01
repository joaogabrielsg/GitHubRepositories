import React from 'react';
import {LoadingProvider} from './useLoading';
import {MessageProvider} from './useMessage';

const AppProviderContext = ({children}) => (
  <MessageProvider>
    <LoadingProvider>{children}</LoadingProvider>
  </MessageProvider>
);

export default AppProviderContext;
