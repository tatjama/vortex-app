import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

import Button from '../../components/button/Button';

const Genre = () => {

    const [activeButton, setActiveButton] = useState(null);
    const [ genre, setGenre ] = useState(null);

    const history = useHistory();

    const handleChooseGenre = (id) => {
        console.log('clicked' + id)
        setActiveButton(id);
        setGenre(genres[id]);
    }

    const handleClick = () => {
        genre && history.push('/subgenre');
    }

    const genres = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 
    'Genre 7', 'Genre 8',]
    
    return(
        <>
            <Header/>
                <Main>
                    {
                        genres.map((button, index) => {
                        return <Button 
                                    styleDescription = { (activeButton === index)? 'btn_active': "btn"} 
                                    clickHandler = {() => handleChooseGenre(index)} 
                                    text = {button}
                                    id = {index}
                                    key = {index}
                                />
                        })
                    }
                    <Footer clickHandler = {handleClick} text="Next"/>               
                </Main>
        </>
    )
}

export default Genre;