import React from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const ListUser = ({ dataUser }) => {
  console.log(dataUser);
  return dataUser.map(item => {
    console.log(item);
    return <Menu.Item key={item.name}>{item.name}</Menu.Item>;
  });
};

export default ListUser;
