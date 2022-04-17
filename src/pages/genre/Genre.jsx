import { useState } from 'react';
import classes from './Genre.module.css'; 

import Button from '../../components/button/Button';

const Genre = () => {

    const [styleDescription, setStyleDescription] = useState('btn');
    const [activeButton, setActiveButton] = useState(null);
    const handleChooseGenre = (id) => {
        console.log('clicked' + id)
        //setStyleDescription('btn_active');
        setActiveButton(id);
    }

    const arrayOfButtons = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 
    'Genre 7', 'Genre 8',]

    return(
        <>
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
        </>
    )
}

export default Genre