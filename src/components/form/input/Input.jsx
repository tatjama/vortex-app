import InputField from "./InputField"
import LabelField from './LabelField';

const Input = (props) => {
    return(
        <>
            <LabelField {...props}/>
            <InputField {...props}/>
        </>
    )
}

export default Input