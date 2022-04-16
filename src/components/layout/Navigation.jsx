import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

    return (
        <nav className={classes.nav}>
            <ul className={classes.navigation}>
                <li>
                    <NavLink exact={true}  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(7, 8, 49)" : "rgb(187, 188, 243)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/`}>1</NavLink>
                </li>
                <li>
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(7, 8, 49)" : "rgb(187, 188, 243)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/subgenre`}>2</NavLink>
                </li>
                <li>
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(7, 8, 49)" : "rgb(187, 188, 243)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/addSubgenre`}>3</NavLink>
                </li>
                <li>
                    <NavLink  style={(isActive) => ({
                backgroundColor: isActive ? "rgb(7, 8, 49)" : "rgb(187, 188, 243)",
                color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
              })}  to={`/information`}>4</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navigation