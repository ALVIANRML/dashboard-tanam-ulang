import { Row, Col, Card, Button, DatePicker } from "antd";
import ChartKebun from "../chart/ChartKebun";
import ModalDetailChart from "../modal/ModalDetailChart";
import { useState } from "react";
import "../../assets/css/card/CardVisualKecil.css";

export default function CardVisualKecil() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // 🆕

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString); // format string seperti "2025-05-30"
    // Kalau mau filter data berdasarkan tanggal, tambahkan logika di sini
    console.log("Tanggal dipilih:", dateString);
  };

  const dataKebun = [
    { nama: "BAH JAMBI", data: [3, 5, 2] },
    { nama: "ADOLINA", data: [4, 2, 6] },
    { nama: "LOKASI C", data: [1, 3, 4] },
    { nama: "KEBUN D", data: [2, 7, 3] },
    { nama: "KEBUN E", data: [2, 7, 3] },
  ];

  const groupedData = [];
  for (let i = 0; i < dataKebun.length; i += 2) {
    groupedData.push(dataKebun.slice(i, i + 2));
  }

  return (
    <div>
      {/* 🗓️ Date Filter */}
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <DatePicker onChange={handleDateChange} />
      </div>

      {/* Kartu Data */}
      {groupedData.map((row, rowIndex) => (
        <Row gutter={20} key={rowIndex} style={{ marginBottom: "5vh" }}>
          {row.map((item, index) => (
            <Col span={10} key={index}>
              <Card
                style={{
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
                bodyStyle={{ padding: "16px" }}
                headStyle={{
                  backgroundColor: "white",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#3C2E20",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
                title={item.nama}
                variant="borderless"
              >
                <ChartKebun data={item.data} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px",
                  }}
                >
                  <Button
                    className="custom-button"
                    type="primary"
                    style={{
                      width: "90%",
                      height: "5vh",
                      backgroundColor: "#5BA87F",
                      fontSize: "1.3rem",
                      marginBottom: 30,
                      border: "none",
                    }}
                    onClick={() => showModal({ title: item.nama })}
                  >
                    Lihat Detail
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      {isModalOpen && (
        <ModalDetailChart
          showModal={isModalOpen}
          selectedItem={selectedItem}
          closeModal={handleCancel}
        />
      )}
    </div>
  );
}
