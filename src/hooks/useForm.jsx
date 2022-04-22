import { useState } from 'react'

const useForm = (initValues, initItems, validateForm) => {

    const [values, setValues] = useState(initValues);
    const [items, setItems] = useState(initItems); 
    const [errors, setErrors] = useState({});  

    const addNewItem = (e) => { 
        const{name, value} = e.target
        if(value !== '' && items[name + 's'].indexOf(value) === -1){     
            const newList = [...items[name + 's'], value];
            const newItems = {...items, [name + 's']:newList};
            setItems(newItems);
        }
}  
    const handleClear = (e) => {
        const {name} = e.target;
        const newValues = {...values, [name]:""};
        setValues(newValues);
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        const newValues = {...values, [name]: value};
        setErrors(validateForm(newValues));
        setValues(newValues);
      };


    return{addNewItem, handleClear, handleChange, errors, setErrors, items, values}
}

export default useForm