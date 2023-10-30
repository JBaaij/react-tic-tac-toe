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
  playerScore: number;
  setPlayerScore: (score: number) => void;
  endScore: number;
  setEndScore: (score: number) => void;
}

const AppStateContext = createContext<AppStateContext>({
  selectedChoice: 1,
  setSelectedChoice: () => {},
  userName: '',
  setUserName: () => {},
  playerVsPlayer: false,
  setPlayerVsPlayer: () => {},
  playerScore: 0,
  setPlayerScore: () => {},
  endScore: 0,
  setEndScore: () => {},
});

const AppStateProvider = ({
  children,
}: {
  children: ReactComponentElement<any>;
}) => {
  const [selectedChoice, setSelectedChoice] = useState<1 | 2>(1);
  const [userName, setUserName] = useState('');
  const [playerVsPlayer, setPlayerVsPlayer] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [endScore, setEndScore] = useState<number>(0);
  return (
    <AppStateContext.Provider
      value={{
        selectedChoice,
        setSelectedChoice,
        userName,
        setUserName,
        playerVsPlayer,
        setPlayerVsPlayer,
        playerScore,
        setPlayerScore,
        endScore,
        setEndScore,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
