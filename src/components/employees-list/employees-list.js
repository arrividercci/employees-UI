import EmploeeListItem from '../emploees-list-item/emploees-list-item';
import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const elements = data.map(item => {     
        const {id, ...itemProps} = item;
        return (
            <EmploeeListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)} 
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;