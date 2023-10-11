import './app-info.css';

const AppInfo = ({emploees, emploeesIncreased}) => {
    return (
        <div className="app-info">
            <h1>Employees managment in company</h1>
            <h2>Number of Employees: {emploees}</h2>
            <h2>Bonus salary for: {emploeesIncreased}</h2>
        </div>
    );
}

export default AppInfo;