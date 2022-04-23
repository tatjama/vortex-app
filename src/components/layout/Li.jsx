import { NavLink } from 'react-router-dom';
import classes from './Li.module.css';

const Li = ({clickHandler, disabled, path, mark, title}) => {
    return(
        <li className={classes.li}>
             <NavLink onClick={clickHandler} exact={true} className = {disabled} style={(isActive) => ({
                      backgroundColor: isActive ? "rgb(54, 54, 85)" : "rgb(222, 222, 238)",
                      color: isActive ? "rgb(187, 188, 243)" : "rgb(123, 124, 180)"
                        })}  to={path}>{mark}
                        <span className={classes.span}>{title}</span>
                    </NavLink>                
                </li>
    )
}

export default Li