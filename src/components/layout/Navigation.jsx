import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

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
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/subgenre`}>2
              <span className={classes.span}>Subgenre</span>
              </NavLink>
                
                </li>
                <li>
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/addSubgenre`}>3
              <span className={classes.span}>Add new Subgenre</span>
              </NavLink>               
                
                </li>
                <li>
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/information`}>4
              <span className={classes.span}>Information</span>
              </NavLink>
                
                
                </li>
            </ul>
            
        </nav>
    )
}

export default Navigation