import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GenreContext from '../../store/genre-context';
import Button from './../../components/button/Button';
import Icon from './../../components/icon/Icon';
import classes from './Success.module.css';

const Success = () => {
    
    const history = useHistory();
    const genreCtx = useContext(GenreContext);

    const handleClick = () => {
        genreCtx.resetContext();
        history.push('/');
    }
    
    return(
        <div className={classes.success}>
            <Icon name="fa-check"/>
            <h1>Book added successfully</h1>
            <Button 
                styleDescription = "btn_active" 
                text="Add another book"
                clickHandler = {handleClick}
            />
        </div>
        
    )
}

export default Success;