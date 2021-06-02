import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { NavLink } from 'react-router-dom';
import operationAuth from '../../redux/operation/authorization';
//componets Form
import ChatTextArea from './ChatTextArea';
import { connect } from 'react-redux';


import { Layout, Menu, Breadcrumb,Avatar, Image } from 'antd';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider, } = Layout;
const { SubMenu } = Menu;

const ENDPOINT = 'http://localhost:8888';
const socket = io(ENDPOINT)
const FormChat = ({ infoUserState,logOutUser }) => {

  const {name}= infoUserState;
  const [state, setState]= useState(false)
  const [users, setUsers]= useState([])


  const onCollapse = ({collapsed}) => {
    logOutUser({ name });
    console.log('collapsed',collapsed)
  };

  useEffect(() => {
    socket.connect()
    socket.emit('join', name)

  },[]);

  const dataNames = [{ name: 'Dima' }, { name: 'Bill' }, { name: 'Tomy' }];
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={state} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            {dataNames.map(item => {
             return <Menu.Item key={item.name}>{item.name}</Menu.Item>;
          })}      
         </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
         <Header className="header">
            <div className="logo" />
            <div style={{display:'flex', justifyContent:'flex-end',alignItems:'center'}}>
              <p style={{padding:0, margin:'0 16px 0 0', color:'#fff'}}> {name} </p>
            <Avatar>{name.slice(0,1).toUpperCase()}</Avatar>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {/* to do  area  massage */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              hello Man
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> 
          {/* this to do form area text from messagel  */}
           </Footer>
        </Layout>
      </Layout>
  
  );
};

const mapStateToProps = state => ({
  infoUserState: state.user.userInfo,
});
const mapDispatchToProps = {
  logOutUser: operationAuth.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormChat);
