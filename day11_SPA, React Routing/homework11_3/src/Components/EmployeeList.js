import { useLocation, useNavigate, useParams } from "react-router-dom"
import 'antd/dist/antd.css';
import { Table, Button, Space } from 'antd';
import employeeData from "./information";

const EmployeeList = () => {
    let data = employeeData
    let navigate = useNavigate();
    let param = useParams();

    let renderData = [];
    if (param.department) {
        renderData = employeeData.filter((x) => x.department === param.department);
    } else {
        renderData = employeeData;
    }
    console.log(renderData);

    const employeeFunc = (e, i) => {
        e.preventDefault();
        navigate("/employee-detail", { replace: true, state: employeeData[i] });
    };

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Detail',
            key: 'detail',
            render: (t, r) => (
                <Space size="middle">
                    <Button onClick={(e) => employeeFunc(e, employeeData.indexOf(r))}>Detail </Button>
                </Space>
            ),
        },

    ];

    return (
        <>
            <h2>Employee List</h2>
            <Table dataSource={renderData} columns={columns} pagination={false} />
        </>
    )
}



export default EmployeeList;

