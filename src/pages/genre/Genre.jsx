import { useState } from 'react';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

import Button from '../../components/button/Button';

const Genre = () => {

    const [activeButton, setActiveButton] = useState(null);
    const handleChooseGenre = (id) => {
        console.log('clicked' + id)
        setActiveButton(id);
    }

    const arrayOfButtons = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 
    'Genre 7', 'Genre 8',]

    return(
        <>
            <Header/>
                <Main>
                    {
                        arrayOfButtons.map((button, index) => {
                        return <Button 
                                    styleDescription = { (activeButton === index)? 'btn_active': "btn"} 
                                    handleChooseGenre = {() => handleChooseGenre(index)} 
                                    text = {button}
                                    id = {index}
                                    key = {index}
                                />
                        })
                    }
                    <Footer/>               
                </Main>
        </>
    )
}

export default Genre;