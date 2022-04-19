import Input from './Input';
import DataListField from './DataListField';

const DataList = (props) => {
    return(
        <>            
            <Input {...props}/>
            <DataListField {...props}/>
        </>
    )
}

export default DataList;