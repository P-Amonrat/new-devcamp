import 'antd/dist/antd.css'
import './App.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ContentComponent from './Components/Content';


const { Header, Content, Footer } = Layout;
function App() {
  let menu = ["Home", "Portfolio", "Contact", "About Us"]
  const LayoutComp = () => (
    <Layout className="layout">
      <Header>
          <img className='logo' src='https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png' />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items= {menu.map((x) => {
            return {key : x, label : x}
          })} 
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"><ContentComponent /></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant UED</Footer>
    </Layout>
  );
  return (
    <LayoutComp/>
    
  )
}




export default App;
