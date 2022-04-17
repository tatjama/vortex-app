import classes from './Button.module.css';

const Button = (props) => {
    return(
        <button 
            className={props.styleDescription} 
            onClick = {props.handleChooseGenre}
            id = {props.id}
            >
                {props.children}{props.text}
        </button>
    )
}

export default Button