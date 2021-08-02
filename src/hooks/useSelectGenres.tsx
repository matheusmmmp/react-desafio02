import { createContext, ReactNode, useContext, useState} from 'react';

interface TransactionProviderProps {
  children: ReactNode
}

interface GenresContextProps {
  selectedGenreId: number;
  changeSelectedGenreId: (id: number) => void;
}

const GenresContext = createContext<GenresContextProps>({} as GenresContextProps);

export function GenresProvider({ children }: TransactionProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function changeSelectedGenreId(id: number) {
    setSelectedGenreId(id)
  }

  return (
  <GenresContext.Provider value={{selectedGenreId, changeSelectedGenreId}}>
    {children}
  </GenresContext.Provider>
  )
}

export function useGenres() {
  const context = useContext(GenresContext);

  return context
}