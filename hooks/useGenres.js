import listOfGenres from '../constants/listOfGenres';

export default function useGenres(ids) {
  let str = '';

  ids.map((id, index) => {
    listOfGenres.map((genre) => (id === genre.id ? (str += `${genre.name}`) : null));
    index !== ids.length - 1 ? (str += ', ') : null;
  });

  return str;
}
