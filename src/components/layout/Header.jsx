import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h2 className={classes.title}>Add book - New book</h2>
            <Navigation/>
        </header>
    )
}

export default Header