import { useState } from 'react';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

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

    const maxDate = new Date().toLocaleDateString('en').split('/');
    const max = maxDate[2] + '-' + maxDate[0].padStart(2, '0') + '-' + maxDate[1].padStart(2, '0');
    
    const handleSelectAuthor = (e) => {
        setAuthor(e.target.value);       
    }
    
    const addNewAuthor = () => {        
        if(author !== '' && authors.indexOf(author) === -1){
            const newAuthors = [...authors, author];
            setAuthors(newAuthors);
        }
    }

    const handleSelectPublisher = (e) => {
        setPublisher(e.target.value);       
    }

    const addNewPublisher = () => {        
        if(publisher !== '' && publishers.indexOf(publisher) === -1){        
            const newPublishers = [...publishers, publisher];
            setPublishers(newPublishers);
        }
    }

    const handlePublished = (e) =>{
    //    const d = new Date(e.target.value);
     //   let text = d.toUTCString( )
        setPublished(e.target.value);
    }

    const handlePagesNumber = (e) => {
        setPagesNumber(e.target.value)
    }

    const handleSelectFormat = (e) => {
        setFormat(e.target.value);       
    }

    const addNewFormat = () => {        
        if(format !== '' && formats.indexOf(format) === -1){        
            const newFormats = [...formats, format];
            setFormats(newFormats);
        }
    }

    const handleEdition = (e) => {
        setEdition(e.target.value)
    }

    const handleSelectLanguage = (e) => {
        setLanguage(e.target.value);       
    }

    const addNewLanguage = () => {        
        if(language !== '' && languages.indexOf(language) === -1){        
            const newLanguages = [...languages, language];
            setLanguages(newLanguages);
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            title: title,
            author: author, 
            isbn: isbn,
            publisher: publisher, 
            published: published,
            pagesNumber: pagesNumber,
            format: format,
            edition: edition,
            language: language,
            description: description       
        }
        console.log(book);
    }

    return (
        <>
            <Header/>
                <Main>

                
        <form onSubmit = {handleSubmit}>
            <label htmlFor="title">Book title</label>
            <input 
                type="text" 
                id="title"
                name="title" 
                placeholder="Book title"
                value={title}
                onChange = {(e) => {setTitle(e.target.value)}}                
                />
            <label htmlFor="author">Author</label>  
            <input 
                type="input"
                list="authors"
                name="author" 
                placeholder="Author"
                value={author}
                onClick={() => {setAuthor('')}}
                onFocus={() => {setAuthor('')}}
                onChange = {handleSelectAuthor}
                onBlur = {addNewAuthor}
                />
            <datalist id = "authors">
                {
                    authors.map((author, index) =>{
                        return (
                            <option key={index} id={index} value={author}/>
                        )
                    })
                }               
            </datalist>
            <label htmlFor="isbn">ISBN</label>
            <input 
                type="text" 
                id="isbn"
                name="isbn" 
                placeholder="ISBN"
                value={isbn}
                minLength="16"
                maxLength="26"
                onChange = {(e) => {setIsbn(e.target.value)}}
                />
            <label htmlFor="publisher">Publisher</label>  
            <input 
                type="input"
                list="publishers"
                name="publisher" 
                placeholder="Publisher"
                value={publisher}
                onClick={(e) => {setPublisher('')}}
                onFocus={(e) => {setPublisher('')}}
                onChange = {handleSelectPublisher}
                onBlur = {addNewPublisher}
                />
            <datalist id="publishers">
                {
                    publishers.map((publisher, index) =>{
                        return (
                            <option key={index} id={index} value={publisher}/>
                        )
                    })
                }               
            </datalist>
            <label htmlFor="published">Date published</label>
            <input 
                type="date" 
                id="published" 
                name="published" 
                placeholder="dd-mm-yyyy" 
                value={published}
                format="dd-MM-yyyy"                
                max={max}
                onClick={(e) => {setPublisher('')}}
                onFocus={(e) => {setPublisher('')}}
                onChange = {handlePublished}                
            />
            <label htmlFor="pagesNumber">Number of pages</label>
            <input 
                type="number" 
                id="pagesNumber" 
                name="pagesNumber" 
                placeholder="Number of pages" 
                value={pagesNumber}
                min = '0'
                step='1'
                onChange = {handlePagesNumber}
            />
            <label htmlFor="format">Format</label>  
            <input 
                type="input"
                list="formats"
                name="format" 
                placeholder="Format"
                value={format}
                onClick={(e) => {setFormat('')}}
                onFocus={(e) => {setFormat('')}}
                onChange = {handleSelectFormat}
                onBlur = {addNewFormat}
                />
            <datalist id="formats">
                {
                    formats.map((format, index) =>{
                        return (
                            <option key={index} id={index} value={format}/>
                        )
                    })
                }               
            </datalist>
            <div className={classes.edition_container}>
                <div>
                    <label htmlFor="edition">Edition</label>
                    <br/>
                    <input 
                        type="number" 
                        id="edition" 
                        name="edition" 
                        value={edition} 
                        placeholder="Edition"
                        min='0'
                        onChange = {handleEdition}
                    />
                </div>
                <div>
                    <label htmlFor="language">Edition language</label>  
                    <br/>
                    <input 
                        type="input"
                        list="languages"
                        name="language" 
                        placeholder="Language"
                        value={language}
                        onClick={(e) => {setLanguage('')}}
                        onFocus={(e) => {setLanguage('')}}
                        onChange = {handleSelectLanguage}
                        onBlur = {addNewLanguage}
                    />
                    <datalist id="languages">
                        {
                            languages.map((language, index) =>{
                                return (
                                    <option key={index} id={index} value={language}/>
                                )
                            })
                        }               
                    </datalist>
                </div>    
            </div> 
            <label htmlFor="description">Description</label>
            <textarea 
                id="description" 
                name="description" 
                value={description}
                placeholder="Type the description ..."
                rows='3'
                onChange = {handleDescription}
            >
            </textarea>
            <button type = 'submit' onSubmit = {handleSubmit}>Submit</button>   
        <Footer/>
        </form>
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
 */