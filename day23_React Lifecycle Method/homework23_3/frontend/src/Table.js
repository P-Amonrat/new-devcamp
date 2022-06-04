import React, { useState } from 'react';
import axios from "axios";
import 'antd/dist/antd.css';
import { Table, Tag, Modal, Button } from 'antd';

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
    },
    {
        title: 'Movie',
        dataIndex: 'movie',
        key: 'movie',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Button type="primary"onClick={showModal}>Edit</Button>
        ),
    },
];

class TableComp extends React.Component {
    constructor() {
        super();
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.persons} />
        )
    }
}

export default TableComp;