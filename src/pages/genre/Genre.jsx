import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import GenreContext from '../../store/genre-context';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Buttons from '../../components/button/Buttons';

const Genre = () => {

    const [activeButton, setActiveButton] = useState(null);
    const [ genre, setGenre ] = useState(null);
    
    const history = useHistory();
    const genreCtx = useContext(GenreContext);
    const genres = genreCtx.genreList;

    const url = process.env.REACT_APP_URL + '/genres';
    const { data, error, apiFetch } = useFetch();

    useEffect(() => {
       apiFetch(url, {});        
    }, []);

    useEffect(() => {
        genreCtx.genreList.length < 1 &&   genreCtx.setGenreList(data);
    }, [data, genreCtx]);
    

    const handleClick = () => {
        if(genre){
            genreCtx.selectGenre(genre);
            history.push('/subgenre');
        } 
    }

    const handleBackClick = () => {
        history.goBack();
    }

    return(
        <>
            <Header/>
                <Main>
                    <Buttons 
                        items = {genres} 
                        setItem = {setGenre} 
                        activeButton = {activeButton} 
                        setActiveButton = {setActiveButton}
                    />                      
                    <Footer backClickHandler = {handleBackClick} clickHandler = {handleClick} text="Next"/>               
                </Main>
        </>
    )
}

export default Genre;