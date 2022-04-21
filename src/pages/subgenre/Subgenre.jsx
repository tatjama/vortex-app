import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Buttons from '../../components/button/Buttons';

const Subgenre = () => {

    const [ activeButton, setActiveButton ] = useState(null);
    const [ subgenre, setSubgenre ] = useState(null);
    const addNewButton = {name: "Add new", id:"addNew" };

    const history = useHistory();
    
    const genreCtx = useContext(GenreContext);
    const subgenres = [...genreCtx.subgenreList, addNewButton];

    const handleClick = () => {
        if(subgenre){
            genreCtx.selectSubgenre(subgenre);
            history.push('/information');
        }else{
            if(activeButton === 'addNew'){
                 genreCtx.isAddSubgenre();
                history.push('/addSubgenre');
            }
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
                        items = {subgenres} 
                        setItem = {setSubgenre} 
                        activeButton = {activeButton} 
                        setActiveButton = {setActiveButton}
                    />  
                    <Footer backClickHandler = {handleBackClick}  clickHandler = {handleClick} text="Next"/>
                </Main>            
        </>
    )
}

export default Subgenre