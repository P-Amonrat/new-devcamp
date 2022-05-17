import { useParams, useLocation } from "react-router-dom";

function EmployeeDetail() {
    const location = useLocation();
    console.log(location)
    let employeeDetail = location.state;
    console.log(employeeDetail)
    return (
        <>
            <h3>Employee Detail</h3>
            <ul>
                <li>ID : {employeeDetail.id}</li>
                <li>firstname : {employeeDetail.firstname}</li>
                <li>lastname : {employeeDetail.lastname}</li>
                <li>age : {employeeDetail.age}</li>
                <li>department : {employeeDetail.department}</li>
                <li>salary : {employeeDetail.salary}</li>
            </ul>
        </>
    );
}

export default EmployeeDetail;