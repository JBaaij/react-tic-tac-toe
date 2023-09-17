import {
  createContext,
  FC,
  ReactComponentElement,
  ReactElement,
  useState,
} from 'react';

const AppStateContext = createContext<{
  selectedChoice: 1 | 2 | null;
  setSelectedChoice: (choice: 1 | 2 | null) => void;
  userName: string;
}>({
  selectedChoice: null,
  setSelectedChoice: () => {},
  userName: '',
});

const AppStateProvider = ({
  children,
}: {
  children: ReactComponentElement<any>;
}) => {
  const [selectedChoice, setSelectedChoice] = useState<1 | 2 | null>(null);
  const [userName, setUserName] = useState('');

  return (
    <AppStateContext.Provider
      value={{ selectedChoice, setSelectedChoice, userName }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
