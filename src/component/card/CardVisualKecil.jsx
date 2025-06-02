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
    { nama: "Persiapan Lahan dan Pengolahan Lahan", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Buat Jalan Baru & Rehap Jalan", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Membangun Teras dan Tapak Individu", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Membuat dan Rehab Parit", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Mengatur Jarak dan Gali Lobang Tanam", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Ecer dan Tanam Bibit", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Pengangkutan Pupuk dan Bibit", data: [5,4,6,7,8,4,3,4,5,1] },
    { nama: "Memupuk Lubang", data: [5,4,6,7,8,4,3,4,5,1] },
  ];

  const groupedData = [];
  for (let i = 0; i < dataKebun.length; i += 2) {
    groupedData.push(dataKebun.slice(i, i + 2));
  }

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <DatePicker onChange={handleDateChange} />
      </div>

      {/* Kartu Data */}
      {groupedData.map((row, rowIndex) => (
        <div>
          {row.map((item, index) => (
            <Col span={21} key={index} style={{marginTop:"10vh"}}>
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
        </div>
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
