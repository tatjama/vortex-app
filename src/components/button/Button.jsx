import classes from './Button.module.css';

const Button = (props) => {
    return(
        <button 
            className={props.styleDescription === 'active'? classes.active: classes.inactive} 
            onClick = {props.clickHandler}
            id = {props.id}
            >
                {props.children}{props.text}
        </button>
    )
}

export default Button