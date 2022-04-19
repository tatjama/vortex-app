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

import classes from './Information.module.css';

const Information = () => {

    const [ title, setTitle ] = useState('');
    const [ authors, setAuthors ] = useState(['Branko Copic', 'Ivo Andric', 'Erich Marija Remark', 'Umberto Eko']);
    const [ author, setAuthor ] = useState('');
    const [ isbn, setIsbn ] = useState('');
    const [ publishers, setPublishers ] = useState(['Laguna', 'Vulkan', 'Klet', 'Logos']);
    const [ publisher, setPublisher ] = useState('');    
    const [ published, setPublished ] = useState('');
    const [ pagesNumber, setPagesNumber ] = useState('');
    const [ formats, setFormats ] = useState(['Format 1', 'Format 2', 'Format 3']);
    const [ format, setFormat ] = useState('');
    const [ edition, setEdition ] = useState('');
    const [ languages, setLanguages ] = useState(['English', 'Serbian', 'Russian']);
    const [ language, setLanguage ] = useState('');
    const [ description, setDescription ] = useState('');    

    const history = useHistory();
    const genreCtx = useContext(GenreContext);
    const selectedSubgenre = genreCtx.selectedSubgenre;
    const selectedGenre = genreCtx.selectedGenre;  

    const addNewAuthor = () => {        
        if(author !== '' && authors.indexOf(author) === -1){
            const newAuthors = [...authors, author];
            setAuthors(newAuthors);
        }
    }
    
    const addNewPublisher = () => {        
        if(publisher !== '' && publishers.indexOf(publisher) === -1){        
            const newPublishers = [...publishers, publisher];
            setPublishers(newPublishers);
        }
    }

    const addNewFormat = () => {        
        if(format !== '' && formats.indexOf(format) === -1){        
            const newFormats = [...formats, format];
            setFormats(newFormats);
        }
    }

    const addNewLanguage = () => {        
        if(language !== '' && languages.indexOf(language) === -1){        
            const newLanguages = [...languages, language];
            setLanguages(newLanguages);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /**check if empty fields validation */
        const book = {
            genre: selectedGenre.name,
            subgenre: selectedSubgenre.name,
            title: title,
            author: author, 
            isbn: isbn,
            publisher: publisher, 
            published: published,
            pagesNumber: pagesNumber,
            format: format,
            edition: edition,
            language: language,
            description: description,
            descriptionIsRequired: selectedSubgenre.isDescriptionRequired       
        }
        console.log(book);
        history.push('/success');
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        history.push('/subgenre');
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
                            value = {title}
                            onChange = {(e) => {setTitle(e.target.value)}}
                        />
                        <DataList
                            title = 'Author'
                            type = 'input'
                            name = 'author'
                            list = 'authors'
                            value = {author}
                            arr = {authors}
                            onChange = {(e) => {setAuthor(e.target.value)}}
                            onClick={() => {setAuthor('')}}
                            onFocus={() => {setAuthor('')}}
                            onBlur = {addNewAuthor}
                        />
                        <Input
                            title = 'ISBN'
                            type = 'text'
                            name = 'isbn'
                            value = {isbn}
                            onChange = {(e) => {setIsbn(e.target.value)}}
                        />
                        <DataList
                            title = 'Publisher'
                            type = 'input'
                            name = 'publisher'
                            list = 'publishers'
                            value = {publisher}
                            arr = {publishers}
                            onChange = {(e) => {setPublisher(e.target.value)}}
                            onClick={() => {setPublisher('')}}
                            onFocus={() => {setPublisher('')}}
                            onBlur = {addNewPublisher}
                        />  
                        <Input
                            title="Date published"
                            type="date"
                            id="published"
                            name="published"
                            value={published}
                            max={maxDate()}
                            onChange = {(e) => setPublished(e.target.value)} 
                        />
                        <Input
                            title = 'Number of pages'
                            type = 'number'
                            name = 'pagesNumber'
                            min = '1'
                            value = {pagesNumber}
                            onChange = {(e) => {setPagesNumber(e.target.value)}}
                        />
                        <DataList
                            title = 'Format'
                            type = 'input'
                            name = 'format'
                            list = 'formats'
                            value = {format}
                            arr = {formats}
                            onChange = {(e) => {setFormat(e.target.value)}}
                            onClick={() => {setFormat('')}}
                            onFocus={() => {setFormat('')}}
                            onBlur = {addNewFormat}
                        />    
                        <div className={classes.edition_container}>
                            <div>
                                <Input
                                    title = 'Edition'
                                    type = 'number'
                                    name = 'edition'
                                    min = '1'
                                    value = {edition}
                                    onChange = {(e) => {setEdition(e.target.value)}}
                                />                   
                            </div>
                            <div>
                                <DataList
                                    title = 'Language'
                                    type = 'input'
                                    name = 'language'
                                    list = 'languages'
                                    value = {language}
                                    arr = {languages}
                                    onChange = {(e) => {setLanguage(e.target.value)}}
                                    onClick={() => {setLanguage('')}}
                                    onFocus={() => {setLanguage('')}}
                                    onBlur = {addNewLanguage}
                                />                                      
                            </div>    
                        </div> 
                        <Textarea
                            name="description"
                            title="Description"
                            placeholder="Type the description..."
                            rows = '3'
                            value = {description}
                            onChange = {(e) => setDescription(e.target.value)}
                        />
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