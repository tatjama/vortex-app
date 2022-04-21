import classes from './Form.module.css';

const Form = (props) => {
    return(
        <form>
            <fieldset className={classes.fieldset}>{props.children}</fieldset>
        </form>
    )
}

export default Form