import classes from './Button.module.css';

const Button = (props) => {
    return(
        <button className={props.styleDescription}>{props.children}{props.text}</button>
    )
}

export default Button