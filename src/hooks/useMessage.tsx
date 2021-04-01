import React, {useState, createContext, useContext} from 'react';
import MessageModal from '../components/MessageModal';

interface MessageContextData {
  message: string;
  setMessage: (message: string) => void;
  title: string;
  setTitle: (title: string) => void;
}

const MessageContext = createContext<MessageContextData>(
  {} as MessageContextData,
);

export const MessageProvider: React.FunctionComponent = ({children}) => {
  const [title, setTitle] = useState('Ops!');
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        title,
        setTitle,
      }}>
      {children}
      <MessageModal
        title={title}
        message={message}
        onClose={() => {
          setMessage('');
        }}
      />
    </MessageContext.Provider>
  );
};

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useModal não pode ser usado sem o próprio contexto');
  }
  return context;
}
