import LabelField from './LabelField';
import Error from './Error';
import classes from './Field.module.css';

const Textarea = (props) => {
   
    return(
        <>
            <LabelField {...props} />
            <textarea className={classes.textarea} {...props} id = {props.name} ></textarea>
            {props.required && <Error error={props.error}/>}
        </>
    )
}
export default Textarea;