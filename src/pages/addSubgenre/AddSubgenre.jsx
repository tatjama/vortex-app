import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useGenreContext from '../../hooks/useGenreCtx';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import InputField from '../../components/form/input/InputField';
import Form from '../../components/form/Form';
import classes from './AddSubgenre.module.css';

const AddSubgenre = () => {

    const [ name, setName ] = useState('');
    const [ isDescriptionRequired, setIsDescriptionRequired ] = useState(false);

    const history = useHistory();
    const genreCtx = useGenreContext();
    
    const handleBackClick = (e) => {
        e.preventDefault();
        genreCtx.isAddSubgenre();
        history.goBack();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== ''){
            const subgenre = {
                name: name,
                isDescriptionRequired: isDescriptionRequired
            }
            genreCtx.addSubgenre(subgenre);
            genreCtx.selectSubgenre(subgenre);
            history.push('/information');
        }
        
    }
 
    return (
        <>
        <Header/>
            <Main>
                <Form>          
                    <InputField
                        title = 'Subgenre name'
                        type = 'text'
                        name = 'subgenreName'
                        value = {name}
                        onChange = {(e) => {setName(e.target.value)}}
                    />            
                        <label className={classes.checkbox_container}>
                            Description is required for this subgenre
                            <InputField 
                                type = "checkbox" 
                                value = {isDescriptionRequired} 
                                onChange = {() => setIsDescriptionRequired(!isDescriptionRequired)}/>
                            <span className={classes.checkmark}></span>
                        </label>
                    </Form>
                    <Footer backClickHandler = {handleBackClick}  clickHandler = {handleSubmit} text="Next"/>               
            </Main>
        </>
    )
}

export default AddSubgenre;