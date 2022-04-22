import classes from './Field.module.css';

const Error = ({error}) => error && (<p className = {classes.warning}>{error}</p>)

export default Error;