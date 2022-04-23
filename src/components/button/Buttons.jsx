import Button from './Button';
import classes from './Buttons.module.css';

const Buttons= ({items, setItem, activeButton, setActiveButton}) => {
        
    const handleChooseSubgenre = (id) => {
        setActiveButton(id);
        if(id !== 'addNew'){
            const chosenButton = items.filter(item => item.id === id); 
            setItem(chosenButton[0]);
        }
    }

    return(
        <section className={classes.buttons}>
            {
                items.map((item) => {
                    return <Button 
                              styleDescription = { (activeButton === item.id) && "active"} 
                              clickHandler = {() => handleChooseSubgenre(item.id)} 
                              text = {item.name}
                              id = {item.id}
                              key = {item.id}
                            />
                        })
            }
        </section>
    )
}

export default Buttons;