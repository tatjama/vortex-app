import { useContext } from 'react';
import GenreContext from '../store/genre-context';

const useGenreContext = () => useContext(GenreContext);

export default useGenreContext