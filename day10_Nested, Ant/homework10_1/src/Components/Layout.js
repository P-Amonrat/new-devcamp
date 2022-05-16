import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import TableComponent from './Table';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
    let menu = ["Home", "Portfolio", "Contact", "About Us"]
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items= {menu.map((x) => {
                        return {key : x, label : x}
                      })}
                />
            </Header>
            <Content style={{ padding: '100px 50px' }}>
                <div className="site-layout-content"><TableComponent /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant UED</Footer>
        </Layout>
    )
}

export default LayoutComponent;