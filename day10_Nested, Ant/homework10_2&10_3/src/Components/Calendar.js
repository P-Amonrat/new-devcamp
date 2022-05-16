import React from 'react';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import moment from 'moment';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day").subtract(1, "days");
  }

const CalendarComponent = () => {
    return (
        <Form.Item 
            label="Member Period"
            name={['user', 'calendar']}
            rules={
                [
                    {
                        required: true,
                    },
                ]}
        >
        <RangePicker disabledDate={disabledDate} />
      </Form.Item>
    )
}

export default CalendarComponent;