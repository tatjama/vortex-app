import Button from '../button/Button';
import Chevron from '../chevron/Chevron';
import classes from './Footer.module.css';

const Footer = () => {    

    return (
        <footer className={classes.footer}>
            <Button styleDescription = {classes.btn} text = "Back"><Chevron/> </Button>
            <Button styleDescription = {classes.btn_active} text = "Next"/>
        </footer>
    )
}

export default Footer