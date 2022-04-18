import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Button from '../../components/button/Button';

const Subgenre = () => {

    const [ activeButton, setActiveButton ] = useState(null);
    const [ subgenre, setSubgenre ] = useState(null);

    const history = useHistory();

    const handleChooseGenre = (id) => {
        console.log('clicked' + id)
        setActiveButton(id);
        if(id === 'addNew'){
            /**open page 3 */
        }else{
            setSubgenre(subgenres[id])
        }
    }

    const handleClick = () => {
        if(subgenre){
            history.push('/information');
        }else{
            if(activeButton === 'addNew'){
                history.push('/addSubgenre')
            }
        }
    }

    const handleBackClick = () => {
        history.push('/');
    }

    const subgenres = ['Subgenre 1', 'Subgenre 2', 'Subgenre 3', 'Subgenre 4', 'Subgenre 5', 'Subgenre 6', 
    'Subgenre 7', ]

    return(
        <>
            <Header/>
                <Main>
                    {
                        subgenres.map((button, index) => {
                            return <Button 
                                styleDescription = { (activeButton === index)? 'btn_active': "btn"} 
                                clickHandler = {() => handleChooseGenre(index)} 
                                text = {button}
                                id = {index}
                                key = {index}
                            />
                        })
                    }
                            <Button 
                                styleDescription = { (activeButton === "addNew")? 'btn_active': "btn"} 
                                clickHandler = {() => handleChooseGenre("addNew")} 
                                text = "Add new"
                                id = "addNew"
                                key = "addNew"
                            />
                    <Footer backClickHandler = {handleBackClick}  clickHandler = {handleClick} text="Next"/>
                </Main>            
        </>
    )
}

export default Subgenre