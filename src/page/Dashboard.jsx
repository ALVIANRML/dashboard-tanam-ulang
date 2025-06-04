import { useState, useEffect, useContext } from "react";
import { Layout, DatePicker, Menu, Dropdown, Select } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import Routes from "../routes/Routes";
import "../App.css";
import { AppContext } from "../context/AppContext";
import LogoPtpn from "../component/LogoPtpn";

const { RangePicker } = DatePicker;
const { Header, Content } = Layout;

const Dashboard = () => {
  const { userLoged } = useContext(AppContext);
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

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString); // format string seperti "2025-05-30"
    // Kalau mau filter data berdasarkan tanggal, tambahkan logika di sini
    console.log("Tanggal dipilih:", dateString);
  };

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

  const [selectedKebun, setSelectedKebun] = useState("all");

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
      <Layout>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            padding: 0,
            backgroundColor: "tranparent",
            // alignContent:"center",
            border: "1px solid black",
          }}
        >
          <div
            className="header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 24px",
              background: "transparent",
            }}
          >
            {/* Logo di kiri */}
            <LogoPtpn />

            {/* Dropdown dan Profile di kanan */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {/* Dropdown Filter */}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "5px 8px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Select
                  mode="multiple"
                  value={selectedKebun}
                  onChange={handleFilterChange}
                  options={kebunOptions.filter((item) => item.value !== "all")}
                  placeholder="Filter Kebun"
                  bordered={false}
                  style={{
                    width: 180,
                    height: "100%",
                    display: "flex",
                    alignItems: "start",
                  }}
                  suffixIcon={<span style={{ color: "green" }}>▼</span>}
                />
              </div>

              {/* Tombol Profile */}
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <button className="profile">
                  <UserOutlined />
                  <p className="username">{userLoged?.FULL_NAME ?? "Admin"}</p>
                </button>
              </Dropdown>
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
              // marginLeft: collapsed ? 80 : "11.5vw",
              transition: "margin-left 0.3s ease, width 0.3s ease",
              minHeight: 1000,
              marginTop: 50,
              width: "102vw",
              backgroundColor: "#FBFFF5",
            }}
          >
            {/* View*/}
            <Routes />
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
