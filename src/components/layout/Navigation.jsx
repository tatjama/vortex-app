import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  const handleSecondClick = () => {
    genreCtx.isAddSubgenreShow && genreCtx.isAddSubgenre();
  }

  const handleFirstClick = (e) => {
    genreCtx.resetContext();
  }

  useEffect(() => {
    ((genre && subgenre) || (genre && isAddSubgenreShow)) && setIsFourthDisabled(false);  
  }, [genre, subgenre, isAddSubgenreShow])

    return (
        <nav className={classes.nav}>
            <ul className={classes.navigation}>
                <li>
                    <NavLink onClick={handleFirstClick} exact={true}  style={(isActive) => ({
                            backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                            color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={`/`}>1
                        <span className={classes.span}>Genre</span>
                    </NavLink>                
                </li>

                <li>
                    {
                      genre?<NavLink onClick={handleSecondClick}  style={(isActive) => ({
                              backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                              color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                          })}  to={`/subgenre`}>2
                          <span className={classes.span}>Subgenre</span>
                      </NavLink>: <NavLink exact={true}  style={(isActive) => ({
                            backgroundColor:  "rgb(222, 222, 238)",
                            color: "rgb(123, 124, 180)"
                        })}  to={`#`}>2
                        <span className={classes.span}>Genre</span>
                    </NavLink> 
                    }                
                </li>

                {isAddSubgenreShow && <li>
                    <NavLink  style={(isActive) => ({
                            backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                            color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={`/addSubgenre`}>3
                        <span className={classes.span}>Add new Subgenre</span>
                    </NavLink>                
                </li>}

                <li>
                    <NavLink onClick = {handleFourthClick} style={(isActive) => ({
                            backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                            color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={ `/information`}> { 
                              ((genre && subgenre) || (genre && isAddSubgenreShow))? '4': '...'
                              }
                        <span className={classes.span}>{ 
                              ((genre && subgenre) || (genre && isAddSubgenreShow)) && 'Information'
                            }</span>
                    </NavLink>                
                </li>
                {/*<li>
                    <NavLink  style={(isActive) => ({
                            backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                            color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={((genre && subgenre) || (genre && isAddSubgenreShow))? `/information`: '#'}> { 
                              ((genre && subgenre) || (genre && isAddSubgenreShow))? '4': '...'
                              }
                        <span className={classes.span}>{ 
                              ((genre && subgenre) || (genre && isAddSubgenreShow)) && 'Information'
                            }</span>
                    </NavLink>                
                          </li>*/}

            </ul>
            
        </nav>
    )
}

export default Navigation