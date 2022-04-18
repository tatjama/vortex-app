import { useState } from 'react';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Button from '../../components/button/Button';

const Subgenre = () => {

    const [activeButton, setActiveButton] = useState(null);
    const handleChooseGenre = (id) => {
        console.log('clicked' + id)
        setActiveButton(id);
    }

    const arrayOfButtons = ['Subgenre 1', 'Subgenre 2', 'Subgenre 3', 'Subgenre 4', 'Subgenre 5', 'Subgenre 6', 
    'Subgenre 7', 'Subgenre 8',]

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
                            <Button 
                                styleDescription = { (activeButton === "addNew")? 'btn_active': "btn"} 
                                handleChooseGenre = {() => handleChooseGenre("addNew")} 
                                text = "Add new"
                                id = "addNew"
                                key = "addNew"
                            />
                    <Footer/>
                </Main>            
        </>
    )
}

export default Subgenre