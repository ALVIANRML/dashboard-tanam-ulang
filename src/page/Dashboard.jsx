import { useState, useEffect } from "react";
import { Layout, theme, DatePicker, Menu, Dropdown, Select } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import SideBar from "../component/Sidebar";
import DashboardUtama from "../view/DashboardUtama";
import "../App.css";
import Visualisasi from "../view/Visualisasi";

const { RangePicker } = DatePicker;
const { Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => console.log("Logout clicked")}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const kebunOptions = [
    { label: "Semua Kebun", value: "all" },
    { label: "BAH JAMBI", value: "bah-jambi" },
    { label: "Lokasi B", value: "lokasi-b" },
    { label: "Lokasi C", value: "lokasi-c" },
  ];

  useEffect(() => {
    // Lakukan filtering data di sini kalau perlu
    console.log("Filter awal:", selectedKebun);
  }, []);

  const handleRangeChange = (dates, dateStrings) => {
    const [startDate, endDate] = dateStrings;
    console.log("Start:", startDate, "End:", endDate);
  };

  const [selectedKebun, setSelectedKebun] = useState(
    kebunOptions
      .filter((item) => item.value !== "all")
      .map((item) => item.value)
  );

  const handleFilterChange = (values) => {
    if (values.includes("all")) {
      const allValues = kebunOptions
        .filter((item) => item.value !== "all")
        .map((item) => item.value);
      setSelectedKebun(allValues);
      console.log("Semua kebun dipilih:", allValues);
    } else {
      setSelectedKebun(values);
      console.log("Kebun dipilih:", values);
    }
  };

  return (
    <Layout>
      <SideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        style={{ transition: "width 5.9s ease;" }}
      />
      <Layout>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            padding: 0,
            backgroundColor: "transparent",
          }}
        >
          <div
            className="header"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
              padding: "12px 24px",
              background: "transparent",
            }}
          >
            {/* Filter kebun */}

            {/* Dropdown profil */}
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
            >
              <button className="profile">
                <UserOutlined />
                <p className="username">Wak leman</p>
              </button>
            </Dropdown>
            <div className="filter">
              <Select
                mode="multiple"
                value={selectedKebun}
                onChange={handleFilterChange}
                options={kebunOptions.filter((item) => item.value !== "all")}
                placeholder="Filter Kebun"
                bordered={false}
                style={{
                  width: 280,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  padding: "4px 8px",
                  backdropFilter: "blur(6px)",
                  border: "1px solid #8FAE7B",
                  color: "#4E342E",
                }}
                maxTagCount="responsive"
                maxTagPlaceholder={(omittedValues) =>
                  `+ ${omittedValues.length} lainnya`
                }
                tagRender={(props) => {
                  const { label, closable, onClose } = props;
                  return (
                    <span
                      style={{
                        backgroundColor: "rgba(255,255,255,0.6)",
                        border: "1px solid #8FAE7B",
                        borderRadius: "20px",
                        padding: "2px 10px",
                        marginRight: 4,
                        fontSize: 13,
                        color: "#4E342E",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      {label}
                      {closable && (
                        <span
                          onClick={onClose}
                          style={{
                            marginLeft: 6,
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                        >
                          ×
                        </span>
                      )}
                    </span>
                  );
                }}
                suffixIcon={
                  <span style={{ color: "#4E342E", fontSize: "14px" }}>▼</span>
                }
              />
            </div>
          </div>
        </Header>
        <Content
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              marginLeft: collapsed ? 80 : "11.5vw",
              transition: "margin-left 0.3s ease, width 0.3s ease",
              minHeight: 1000,
              width: collapsed ? "109vw" : "100vw",
              backgroundColor: "#FBFFF5",
            }}
          >
            <DashboardUtama />
            {/* <Visualisasi/> */}
          </div>
          <div
            style={{
              zIndex: 10000,
            }}
          ></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
