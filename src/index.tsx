import { render } from 'react-dom'

import { App } from './App'
import { GenresProvider } from './hooks/useSelectGenres'

render(
  <GenresProvider>
  <App />
  </GenresProvider>
  , document.getElementById('root'))