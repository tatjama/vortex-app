import Button from '../button/Button';
import Icon from '../icon/Icon';
import classes from './Footer.module.css';

const Footer = () => {    

    return (
        <footer className={classes.footer}>
            <Button styleDescription = "btn" text = "Back"><Icon name =" fa-chevron-left"/> </Button>
            <Button styleDescription = "btn_active" text = "Next"/>
        </footer>
    )
}

export default Footer