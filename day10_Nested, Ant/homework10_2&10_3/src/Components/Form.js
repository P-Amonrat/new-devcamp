import React from 'react';
import 'antd/dist/antd.css';
import { Form, Modal } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const FormComponent = (props) => {
    const onFinish = async (values) => {
        console.log(values);
        console.log(values.user.name);
        console.log(values.user.age);
        console.log(values.gender);
        console.log(values.address);
        if (values.other !== undefined) {
            console.log(values.other);
        }
        console.log(`${values.user.calendar[0]._d} to ${values.user.calendar[1]._d}`);
        for (let i in values.skills) {
            console.log(values.skills[i]);
        }
        console.log(values.accept);

        let allSkills = values.skills.map((x) => x);
        let skillsInModal = allSkills.join(", ");
        console.log(allSkills);

        Modal.confirm({
            title: 'Register Information', 
            width: '1000px',
            content: (
                <pre>
                    First Name: {values.user.name}
                    <br />
                    Age: {values.user.age}
                    <br />
                    Gender: {values.gender}
                    <br />
                    Address: {values.address}
                    <br />
                    Abroad: {values.other !== undefined ? values.other : "no information"}
                    <br />
                    Member Period: {`${values.user.calendar[0]._d} to ${values.user.calendar[1]._d}`}
                    <br />
                    Skills: {skillsInModal}
                </pre>
            )
        })
    }


    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

            <props.name />
            <props.age />
            <props.gender />
            <props.province />
            <props.calendar />
            <props.skill />
            <props.accept />
            <props.submit />

        </Form>
    );
};


export default FormComponent;

