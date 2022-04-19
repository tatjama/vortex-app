const DataListField = (props) => {
    return(
        <datalist id = {props.list}>
                {
                    props.arr.map((item, index) =>{
                        return (
                            <option key={index} id={index} value={item}/>
                        )
                    })
                }               
            </datalist>
    )
}

export default DataListField;