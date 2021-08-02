  
import { useGenres } from "../hooks/useSelectGenres"
import { Button } from "./Button"
import { GenreResponseProps } from '../App'

interface sideBarProps {
  handleClickButton: (id: number) => void,
  genres: GenreResponseProps[]
}

export function SideBar({ genres, handleClickButton }: sideBarProps) {
  const { selectedGenreId, changeSelectedGenreId } = useGenres()
  
  return (  
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}