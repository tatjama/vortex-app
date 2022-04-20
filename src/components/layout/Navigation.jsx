import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const genreCtx = useContext(GenreContext);
  const genre = genreCtx.selectedGenre;
  const subgenre = genreCtx.selectedSubgenre;
  const isAddSubgenreShow = genreCtx.isAddSubgenreShow;

    return (
        <nav className={classes.nav}>
            <ul className={classes.navigation}>
                <li>
                    <NavLink exact={true}  style={(isActive) => ({
                            backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                            color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={`/`}>1
                        <span className={classes.span}>Genre</span>
                    </NavLink>                
                </li>

                <li>
                    {
                      genre?<NavLink  style={(isActive) => ({
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
                    <NavLink  style={(isActive) => ({
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