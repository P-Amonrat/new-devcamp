import { Row, Col } from 'antd';
import FormComponent from './Form';
// import './Content.css'
import TableComponent from './Table';


const ContentComponent = () => {
    return (
        <>
            <div>
                <Row className='row1'>
                    <Col span={12}>
                        <TableComponent />
                    </Col>
                </Row>
                <Row className='row2'>
                    <Col span={8}>
                        <FormComponent />
                    </Col>
                </Row>
                <Row className='row3'>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        </>

    )
}

export default ContentComponent;