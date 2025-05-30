import React, { useContext } from "react";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  FileImageOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import LogoPtpn from "../assets/img/PTPN-4.png";
import "../assets/css//sider/SideBar.css";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: "#2F5D50", // Sage green
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        zIndex: 1200,
      }}
      width="12vw"
      collapsedWidth={80}
      breakpoint="lg"
      theme="light"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "start",
          padding: "16px",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <img
          src={LogoPtpn}
          alt="Company Logo"
          style={{
            width: "70px",
            height: "70px",
            marginBottom: "8px",
          }}
        />
        {!collapsed && (
          <h3
            style={{
              color: "white", // teks hijau gelap
              fontSize: "1rem",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Dashboard <br />
            Tanaman Ulang
          </h3>
        )}
      </div>

      <Menu
        className="custom-sidebar-menu"
        style={{
          height: "100%",
          backgroundColor: "#2F5D50",
          padding: 10,
          width: "100%",
          fontSize: 17,
          color: "white",
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboardUtama"]}
        items={[
          {
            key: "dashboardUtama",
            icon: <AppstoreOutlined />,
            label: "Dashboard Utama",
          },
          {
            key: "visualisasi",
            icon: <FileImageOutlined />,
            label: "Visualisasi",
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
