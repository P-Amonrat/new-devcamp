import 'antd/dist/antd.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Form } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import InputNameComponents from './InputName';
import InputNumberComponent from './InputNumber';
import GenderComponent from './Gender';
import ProvinceComponent from './Province';
import CalendarComponent from './Calendar';
import ButtonComponent from './Submit';
import AcceptTermComponent from './AcceptTerm';
import SubmitComponent from './Submit';
import SkillComponent from './Skill';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const LayoutComponents = (props) => {

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 10,
                            minHeight: 280,
                        }}
                    >
                        <props.form
                            name={InputNameComponents}
                            age={InputNumberComponent}
                            gender={GenderComponent}
                            province={ProvinceComponent}
                            calendar={CalendarComponent}
                            skill={SkillComponent}
                            accept={AcceptTermComponent}
                            submit={SubmitComponent}
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutComponents;
