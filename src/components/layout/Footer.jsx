import Button from '../button/Button';
import Icon from '../icon/Icon';
import classes from './Footer.module.css';

const Footer = ({backClickHandler, clickHandler, text}) => {    

    return (
        <footer className={classes.footer}>
            <Button clickHandler = {backClickHandler} styleDescription = {undefined} text = "Back"><Icon name =" fa-chevron-left"/> </Button>
            <Button clickHandler = {clickHandler} styleDescription = "active" text = {text}/>
        </footer>
    )
}

export default Footer