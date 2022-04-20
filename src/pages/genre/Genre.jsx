import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

import Button from '../../components/button/Button';

const Genre = () => {

    const [activeButton, setActiveButton] = useState(null);
    const [ genre, setGenre ] = useState(null);

    const history = useHistory();
    const genreCtx = useContext(GenreContext);
    const genres = genreCtx.genreList;
    console.log(genreCtx)
    
    const handleChooseGenre = (id) => {
        setActiveButton(id);
        const chosenGenre =  genres.filter(item => item.id === id);
        setGenre(chosenGenre[0]);
    }

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
                    {
                        genres.map((genre) => {
                        return <Button 
                                    styleDescription = { (activeButton === genre.id)? 'btn_active': "btn"} 
                                    clickHandler = {() => handleChooseGenre(genre.id)} 
                                    text = {genre.name}
                                    id = {genre.id}
                                    key = {genre.id}
                                />
                        })
                    }
                    <Footer backClickHandler = {handleBackClick} clickHandler = {handleClick} text="Next"/>               
                </Main>
        </>
    )
}

export default Genre;