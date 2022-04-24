export default function validateForm(values) {
    let errors = {};
    
    Object.keys(values).forEach(value => (values[value] === '') 
    &&( errors[value] = value + " is required"))

    return errors;
}