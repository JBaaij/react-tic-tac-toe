import {
  createContext,
  FC,
  ReactComponentElement,
  ReactElement,
  useState,
} from 'react';
interface AppStateContext {
  selectedChoice: 1 | 2;
  setSelectedChoice: (choice: 1 | 2) => void;
  userName: string;
  setUserName: (name: string) => void;
  playerVsPlayer: boolean;
  setPlayerVsPlayer: (value: boolean) => void;
}

const AppStateContext = createContext<AppStateContext>({
  selectedChoice: 1,
  setSelectedChoice: () => {},
  userName: '',
  setUserName: () => {},
  playerVsPlayer: false,
  setPlayerVsPlayer: () => {},
});

const AppStateProvider = ({
  children,
}: {
  children: ReactComponentElement<any>;
}) => {
  const [selectedChoice, setSelectedChoice] = useState<1 | 2>(1);
  const [userName, setUserName] = useState('');
  const [playerVsPlayer, setPlayerVsPlayer] = useState<boolean>(false);
  return (
    <AppStateContext.Provider
      value={{
        selectedChoice,
        setSelectedChoice,
        userName,
        setUserName,
        playerVsPlayer,
        setPlayerVsPlayer,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
