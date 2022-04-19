import LabelField from './LabelField';
import classes from './Field.module.css';

const Textarea = (props) => {
   
    return(
        <>
            <LabelField {...props} />
            <textarea className={classes.textarea} {...props} id = {props.name} ></textarea>
        </>
    )
}
export default Textarea;