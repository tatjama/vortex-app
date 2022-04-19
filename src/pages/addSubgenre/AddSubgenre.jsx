import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

    const handleBackClick = (e) => {
        e.preventDefault();
        /**close page 3 */
        history.push('/subgenre');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== ''){
            const subgenre = {
                name: name,
                isDescriptionRequired: isDescriptionRequired
            }
            console.log(subgenre);
            /**add new subgenre in subgenreList */
            /**close page 3 */
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