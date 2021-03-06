import { createContext, useState } from 'react';
//import { DUMMY_DATA } from '../util/data';

const GenreContext = createContext({
    genreList: [],
    subgenreList: [],
    selectedGenre: null,
    selectedSubgenre: null,
    selectGenre: (genre) => {},
    selectSubgenre: (subgenre) => {},
    addSubgenre: (subgenre) => {},
    subgenreId: 24,
    isAddSubgenreShow: false,
    isAddSubgenre: () => {},
    resetContext: () => {},
    setGenreList: () => {},    
});

export const GenreContextProvider = (props) => {
    
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedSubgenre, setSelectedSubgenre] = useState(null);
    const [subgenreList, setSubgenreList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [subgenreId, setSubgenreId] = useState(24);
    const [isAddSubgenreShow, setIsAddSubgenreShow] = useState(false);
    
    const selectGenreHandler = (genre) => {
        const oneGenre = genreList.filter(item => item.name === genre.name)
        const list = oneGenre[0].subgenres;
        setSubgenreList(list)
        setSelectedGenre(genre)
    }

    const selectSubgenreHandler = (subgenre) => {
        setSelectedSubgenre(subgenre)
    }

    const addSubgenreHandler = (subgenre) => {
        subgenre.id = subgenreId + 1;
        const listOfSubgenres = [...subgenreList, subgenre];
        setSubgenreList(listOfSubgenres);
        const genre = {...selectedGenre};
        genre.subgenres = listOfSubgenres;
        const genres = genreList.filter(item => item.name !==genre.name);
        const list = [...genres, genre]; 
        list.sort((a,b) => a.id-b.id)
        setSubgenreId(subgenre.id);
        setGenreList(list);
    }
    
    const isAddSubgenreHandler = () => {
        setIsAddSubgenreShow(!isAddSubgenreShow);
    }

    const resetContextHandler = () => {
        setSelectedGenre(null);
        setSelectedSubgenre(null);
        setSubgenreList([]);
        setIsAddSubgenreShow(false);    
    }

    const context = {
        genreList: genreList,
        subgenreList: subgenreList,
        selectedGenre: selectedGenre,
        selectedSubgenre: selectedSubgenre,
        selectGenre: selectGenreHandler,
        selectSubgenre: selectSubgenreHandler,
        addSubgenre: addSubgenreHandler,
        subgenreId: subgenreId,
        isAddSubgenreShow: isAddSubgenreShow, 
        isAddSubgenre: isAddSubgenreHandler,
        resetContext: resetContextHandler,  
        setGenreList: setGenreList,     
    };

    return <GenreContext.Provider value={context}>
        {props.children}
    </GenreContext.Provider>;
}

export default GenreContext;