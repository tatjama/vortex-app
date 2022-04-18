import { useState } from 'react';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

import classes from './AddSubgenre.module.css';

const AddSubgenre = () => {

    const [ subgenreName, setSubgenreName ] = useState('');
    const [ isDescription, setIsDescription ] = useState(false);

    /*const handleChange = (event) => {
        console.log(event.target.value);
        setSubgenreName(event.target.value);
    }*/
 
    return (
        <>
        <Header/>
            <Main>
                <form className={classes.form}>            
                    <input 
                        type = "text" 
                        placeholder = "Subgenre name" 
                        name = "subgenreName" 
                        value = {subgenreName} 
                        onChange={(e) => {setSubgenreName(e.target.value)}}
                    />            
                    <label className={classes.checkbox_container}>
                        Description is required for this subgenre
                        <input type = "checkbox" checked = {isDescription} onChange = {() => setIsDescription(!isDescription)}/>
                        <span className={classes.checkmark}></span>
                    </label>
                    <Footer/>            
                </form>
            </Main>
        </>
    )
}

export default AddSubgenre;