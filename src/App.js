import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Avatar, Menu,  } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import LaTabla from './components/table'
class App extends React.Component {

  render() {
    const { Header,Footer,Sider,Content } = Layout;
    return (
      <div className="App">
          <Layout>
            
              
          <Avatar src='./hotel.png' style={{float:'right'}}/>
          
          <Header style={{color:'white',}} >Hotel Oasis</Header>
          
          <Title style={{color:'Red'}} level={3}>Jaaaa</Title>
          <Layout>
        <Sider style={{background:'blue'}}>Menu
        <Menu style={{color:'blueligth'}}>
          <Menu.Item>
            Nosotros
          </Menu.Item>
          <SubMenu title="Servicios" >
          <Menu.Item>Catering</Menu.Item>
          <Menu.Item>Alquiler de Salones</Menu.Item>
          <Menu.Item>Habitacion</Menu.Item>
          </SubMenu>
          <SubMenu title="Habitacion">
            <Menu.Item>Individual</Menu.Item>
            <Menu.Item>Matrimonial</Menu.Item>
            <Menu.Item>Mixta</Menu.Item>
          </SubMenu>
        </Menu>
        </Sider>
        </Layout>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      
      Contenido
      <div className="site-layout-content"></div>
      <LaTabla/>      
    </Content>
        <Footer></Footer>
      </Layout>
    </Layout>

      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));