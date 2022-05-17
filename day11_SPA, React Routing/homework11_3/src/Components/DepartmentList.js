import { useLocation, useNavigate } from "react-router-dom"
import 'antd/dist/antd.css';
import { Table, Button, Space } from 'antd';
import employee from "./information";



const DepartmentList = () => {

    const key = "department";

    const department = [
      ...new Map(employee.map((item) => [item[key], item])).values(),
    ];

    let departmentData = [];
    employee.map((x) => {
      !departmentData.find((y) => y === x.department) &&
        departmentData.push(x.department);
    });
     
    let navigate = useNavigate();


    const employeeListFunc = (e, department) => {
        e.preventDefault();
        navigate(`/employee/${department.department}`);
      };    
    
    
    const columns = [
        {
            title: 'Department Name',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Department Employee',
            key: 'departmentEmployee',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={(e) => employeeListFunc(e, record)}>List of Employees </Button>
                </Space>
            ),
        },

    ];


    return (
        <>
            <h2>Department List</h2>
            <Table columns={columns} dataSource={department} />
        </>
    )
}

export default DepartmentList ;

