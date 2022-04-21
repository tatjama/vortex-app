import Button from './Button';

const Buttons= ({items, setItem, activeButton, setActiveButton}) => {
        
    const handleChooseSubgenre = (id) => {
        setActiveButton(id);
        if(id !== 'addNew'){
            const chosenButton = items.filter(item => item.id === id); 
            setItem(chosenButton[0]);
        }
    }

    return(
        <>
            {
                items.map((item) => {
                    return <Button 
                              styleDescription = { (activeButton === item.id)? 'btn_active': "btn"} 
                              clickHandler = {() => handleChooseSubgenre(item.id)} 
                              text = {item.name}
                              id = {item.id}
                              key = {item.id}
                            />
                        })
            }
        </>
    )
}

export default Buttons;