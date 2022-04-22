import InputField from "./InputField"
import LabelField from './LabelField';
import Error from './Error';

const Input = (props) => {
    return(
        <>
            <LabelField {...props}/>
            <InputField {...props}/>
            <Error error = {props.error} />            
        </>
    )
}

export default Input