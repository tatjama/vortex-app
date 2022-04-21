import classes from './Field.module.css';

const InputField = (props) =>  <input className={classes.input}  {...props} placeholder={props.title}/>
    
export default InputField