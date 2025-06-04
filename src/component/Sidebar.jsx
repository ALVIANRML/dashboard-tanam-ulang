import React, { useContext } from 'react';
import {
  AppstoreOutlined,
  FileDoneOutlined,
  FileImageOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { AppContext } from '../context/AppContext';
import { Layout, Menu } from 'antd';
import '../assets/css//sider/SideBar.css';

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const { handleRoute, route } = useContext(AppContext);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: '#2F5D50', // Sage green
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 1200,
      }}
      width="12vw"
      collapsedWidth={80}
      breakpoint="lg"
      theme="light">
      

      <Menu
        className="custom-sidebar-menu"
        style={{
          height: '100%',
          backgroundColor: '#2F5D50',
          padding: 10,
          width: '100%',
          fontSize: 17,
          color: 'white',
        }}
        theme="dark"
        mode="inline"
        onClick={(e) => handleRoute(e.key)}
        defaultSelectedKeys={[route]}
        selectedKeys={[route]}
        items={[
          {
            key: 'dashboard',
            icon: <FileImageOutlined />,
            label: 'Dashboard Utama',
          },
          {
            key: 'map',
            icon: <AppstoreOutlined />,
            label: 'Map',
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
