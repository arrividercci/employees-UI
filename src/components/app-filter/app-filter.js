import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "All Emoloyees"}, 
        {name: "rise", label: "On increasing"},
        {name: "moreThen1000", label: "Salary more than 1000$"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active? "btn btn-light" : "btn btn-outline-light";
        return (
            <button key={name} className={clazz} type="button" onClick={() => props.onFilterChange(name)}>{label}</button> 
        );
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;