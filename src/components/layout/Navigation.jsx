import { useContext, useState, useEffect } from 'react';
import Li from './Li';
import GenreContext from '../../store/genre-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const [isFourthDisabled, setIsFourthDisabled] = useState(true);
  const genreCtx = useContext(GenreContext);
  const genre = genreCtx.selectedGenre;
  const subgenre = genreCtx.selectedSubgenre;
  const isAddSubgenreShow = genreCtx.isAddSubgenreShow;

  const handleFourthClick = (e) => {
    (isFourthDisabled || (!genre || !subgenre)) && e.preventDefault();     
  }

  const handleSecondClick = (e) => {
    !genre && e.preventDefault();
     isAddSubgenreShow && genreCtx.isAddSubgenre();
  }

  const handleFirstClick = (e) => {
    genreCtx.resetContext();
  }

  useEffect(() => {
    ((genre && subgenre) || (genre && isAddSubgenreShow)) && setIsFourthDisabled(false);  
  }, [genre, subgenre, isAddSubgenreShow])

  const renderContent = () => (((genre && subgenre) || (genre && isAddSubgenreShow)))? `4`: '...';

  const renderSubtitle = () => (((genre && subgenre) || (genre && isAddSubgenreShow)))
              ? <span className={classes.span}>Information</span> : null
  
    return (
        <nav className={classes.nav}>
            <ul className={classes.navigation}>
                <Li clickHandler = {handleFirstClick} path = '/' mark = '1' title = 'Genre'/>
                <Li clickHandler = {handleSecondClick} path = '/subgenre' mark = '2' title = 'Subgenre'/>
                {isAddSubgenreShow && 
                <Li path = '/addSubgenre' mark = '3' title = 'Add new Subgenre'/>}
                <Li clickHandler = {handleFourthClick} path ='/information' mark = {renderContent()} title = {renderSubtitle()}/> 
            </ul>            
        </nav>
    )
}

export default Navigation