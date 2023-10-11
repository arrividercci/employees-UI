import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/emploees-add-form';
import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "John. C" , salary:1100, increase:false, rise:false, id:1},
                {name: "Alex M.", salary:700, increase:true, rise:false, id:2},
                {name: "Carl K.", salary:600, increase:true, rise:false, id:3},
                {name: "Jimmy B.", salary:900, increase:false, rise:false, id:4}
            ],
            term: "",
            filter: "all"
        };
        this.maxid = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newItem = {
                name: name, 
                salary: salary,
                increase:false, 
                rise: false,
                id: this.maxid++
            }
            return {
                data: [...data, newItem]
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;


        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    
    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) 
                    return {...item, increase: !item.increase}
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) 
                    return {...item, rise: !item.rise}
                return item;
            })
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    } 

    filterPost = (items, filter) => {
        switch(filter){
            case "rise":
                return items.filter(item => item.rise);
            case "moreThen1000":
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    
    onFilterChange = (filter) => {
        this.setState({filter});
    } 

    render(){
        const emploees = this.state.data.length;
        const emploeesIncreased = this.state.data.filter(item => item.increase).length;
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo 
                    emploees={emploees} 
                    emploeesIncreased={emploeesIncreased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleIncrease={this.onToggleIncrease} 
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;