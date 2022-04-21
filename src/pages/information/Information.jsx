import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';
import Input from '../../components/form/input/Input';
import DataList from '../../components/form/input/DataList';
import Textarea from '../../components/form/input/Textarea';
import Form from '../../components/form/Form';
import { maxDate } from '../../util/helper';
import validateForm from '../../util/validateForm';
import classes from './Information.module.css';

const initialValues = {    
    title: '',
    author: '', 
    isbn: '',
    publisher: '', 
    published: '',
    pagesNumber: '',
    format: '',
    edition: '',
    language: '',
    description: '',
}

const initItems = {
    authors: ['Branko Copic', 'Ivo Andric', 'Erich Marija Remark', 'Umberto Eko'],
    publishers: ['Laguna', 'Vulkan', 'Klet', 'Logos'],
    formats: ['Format 1', 'Format 2', 'Format 3'],
    languages: ['English', 'Serbian', 'Russian'],    
}

const Information = () => {    
   
    const history = useHistory();
    const genreCtx = useContext(GenreContext);
    const selectedSubgenre = genreCtx.selectedSubgenre;
    const selectedGenre = genreCtx.selectedGenre;  

    const initValues = {    
        genre: selectedGenre.name,
        subgenre: selectedSubgenre.name,        
        descriptionIsRequired: selectedSubgenre.isDescriptionRequired,
        ...initialValues    
}

const [values, setValues] = useState(initValues);
const [items, setItems] = useState(initItems);    
const [errors, setErrors] = useState({});   

    
    const handleClear = (e) => {
        const {name} = e.target;
        const newValues = {...values, [name]:""};
        setValues(values => (newValues));
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        const newValues = {...values, [name]: value};
        setErrors(validateForm(newValues));
        setValues(values =>(newValues));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(values));
        if(Object.keys(errors).length === 0 || 
        (Object.keys(errors).length === 1 && !values.descriptionIsRequired && Object.keys(errors)[0] === "description")){
        postBook(values);
        history.push('/success');        
        }else{
            alert("you have errors")
            console.log(errors);
        }
        
    }
    const url = 'http://localhost:8000/books';

    const postBook = async (book) => {
        try {
            const res = await fetch(url, { 
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json',}
        })
        const data = await res.json();
        console.log(book);
        console.log('Book is added...');    
        } catch (error) {
        }        
        
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <>
            <Header/>
                <Main>                
                    <Form>
                        <Input
                            title = 'Book title'
                            type = 'text'
                            name = 'title'
                            value = {values.title}
                            onChange = {handleChange}
                        />
                        {errors.title && <p className = {classes.warning}>{errors.title}</p>}
                        <DataList
                            title = 'Author'
                            type = 'input'
                            name = 'author'
                            list = 'authors'
                            value = {values.author}
                            arr = {items.authors}
                            onChange = {handleChange}
                            onClick={handleClear}
                            onFocus={handleClear}                            
                        />
                        {errors.author && <p className = {classes.warning}>{errors.author}</p>}
                        <Input
                            title = 'ISBN'
                            type = 'text'
                            name = 'isbn'
                            value = {values.isbn}
                            onChange = {handleChange}
                        />
                        {errors.isbn && <p className = {classes.warning}>{errors.isbn}</p>}
                        <DataList
                            title = 'Publisher'
                            type = 'input'
                            name = 'publisher'
                            list = 'publishers'
                            value = {values.publisher}
                            arr = {items.publishers}
                            onChange = {handleChange}
                            onClick={handleClear}
                            onFocus={handleClear}
                        />  
                        {errors.publisher && <p className = {classes.warning}>{errors.publisher}</p>}
                        <Input
                            title="Date published"
                            type="date"
                            id="published"
                            name="published"
                            value={values.published}
                            max={maxDate()}
                            onChange = {handleChange} 
                        />
                        {errors.published && <p className = {classes.warning}>{errors.published}</p>}
                        <Input
                            title = 'Number of pages'
                            type = 'number'
                            name = 'pagesNumber'
                            min = '1'
                            value = {values.pagesNumber}
                            onChange = {handleChange}
                        />
                        {errors.pagesNumber && <p className = {classes.warning}>{errors.pagesNumber}</p>}
                        <DataList
                            title = 'Format'
                            type = 'input'
                            name = 'format'
                            list = 'formats'
                            value = {values.format}
                            arr = {items.formats}
                            onChange = {handleChange}
                            onClick={handleClear}
                            onFocus={handleClear}
                        />
                        {errors.format && <p className = {classes.warning}>{errors.format}</p>}    
                        <div className={classes.edition_container}>
                            <div>
                                <Input
                                    title = 'Edition'
                                    type = 'number'
                                    name = 'edition'
                                    min = '1'
                                    value = {values.edition}
                                    onChange = {handleChange}
                                /> 
                                {errors.edition && <p className = {classes.warning}>{errors.edition}</p>}                  
                            </div>
                            <div>
                                <DataList
                                    title = 'Language'
                                    type = 'input'
                                    name = 'language'
                                    list = 'languages'
                                    value = {values.language}
                                    arr = {items.languages}
                                    onChange = {handleChange}
                                    onClick={handleClear}
                                    onFocus={handleClear}
                                />  
                                {errors.language && <p className = {classes.warning}>{errors.language}</p>}                                    
                            </div>    
                        </div> 
                        <Textarea
                            name="description"
                            title="Description"
                            placeholder="Type the description..."
                            rows = '3'
                            value = {values.description}
                            onChange = {handleChange}
                        />
                        {errors.description && values.descriptionIsRequired && <p className = {classes.warning}>{errors.description}</p>}
                    </Form>
                    <Footer backClickHandler = {handleBackClick}  clickHandler = {handleSubmit} text = "Add"/>
        
                </Main>
        </>
    )
}

export default Information


/**ISBN:
 * EAN prefix 978 ili 979
 * group       92 (1-5 digits)
 * registrant  95055 (max-7 digits)
 * publication   02 (max-6 digits)
 * check digit   5
 * 978-92-95055-02-5
 * 16-26
 */