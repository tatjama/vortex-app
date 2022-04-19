import LabelField from './LabelField';

const Textarea = (props) => {
   
    return(
        <>
            <LabelField {...props} />
            <textarea {...props} id = {props.name} ></textarea>
        </>
    )
}
export default Textarea;