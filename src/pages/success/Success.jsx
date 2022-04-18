import Button from './../../components/button/Button';
import Icon from './../../components/icon/Icon';
import classes from './Success.module.css';

const Success = () => {
    
    return(
        <div className={classes.success}>
            <Icon name="fa-check"/>
            <h1>Book added successfully</h1>
            <Button styleDescription = "btn_active" text="Add another book"/>
        </div>
        
    )
}

export default Success;