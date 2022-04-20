import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Button from '../../components/button/Button';

const Subgenre = () => {

    const [ activeButton, setActiveButton ] = useState(null);
    const [ subgenre, setSubgenre ] = useState(null);

    const history = useHistory();
    
    const genreCtx = useContext(GenreContext);
    const subgenres = genreCtx.subgenreList;

    const handleChooseSubgenre = (id) => {
        setActiveButton(id);
        if(id === 'addNew'){
        
            /**open page 3 */
        }else{
            const chosenSubgenre = subgenres.filter(item => item.id === id); 
            setSubgenre(chosenSubgenre[0]);
        }
    }

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
        history.push('/');
    }
    
    return(
        <>
            <Header/>
                <Main>
                    {
                        subgenres.map((subgenre) => {
                            return <Button 
                                styleDescription = { (activeButton === subgenre.id)? 'btn_active': "btn"} 
                                clickHandler = {() => handleChooseSubgenre(subgenre.id)} 
                                text = {subgenre.name}
                                id = {subgenre.id}
                                key = {subgenre.id}
                            />
                        })
                    }
                            <Button 
                                styleDescription = { (activeButton === "addNew")? 'btn_active': "btn"} 
                                clickHandler = {() => handleChooseSubgenre("addNew")} 
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