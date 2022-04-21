import classes from './LabelField.module.css'
const LabelField = (props) => <label className={classes.label} htmlFor={props.name}>{props.title}</label>


export default LabelField