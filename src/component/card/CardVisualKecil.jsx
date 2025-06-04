import { Row, Col, Card, Button, Drawer } from "antd";
import ChartKebun from "../chart/ChartKebun";
import ModalDetailChart from "../modal/ModalDetailChart";
import { useState } from "react";
import "../../assets/css/card/CardVisualKecil.css";
import CardRealisasiEstimasi from "./CardRealisasiEstimasi";
import { CardLineChart, CardBarchart } from "./CardChart";
import { TopRealisasi, BadRealisasi } from "./TopBadCard";

export default function CardVisualKecil() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const dataPekerjaan = [
    {
      nama: "Buat Jalan Baru",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Membangun Teras dan Tapak Individu",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Memupuk Lubang",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Pemberantasan Hama dan Penyakit",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Mengatur Jarak dan Gali Lobang Tanam",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Pengangkutan Pupuk dan Bibit",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    { nama: "Mobilisasi Alat Berat", data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1] },
    { nama: "Membuat Parit", data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1] },
    { nama: "Rehab Parit", data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1] },
  ];

  const dataPekerjaanBesar = [
    {
      nama: "Ecer dan Tanam Bibit",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Penanaman dan Membangun LCC Mucuna Bracteata ( Rotasi 1 Bulan )",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Alat daan Bahan",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
    {
      nama: "Persiapan Lahan dan Pengolahan Lahan",
      data: [5, 4, 6, 7, 8, 4, 3, 4, 5, 1],
    },
  ];

  // Kelompokkan data per 2 untuk 1 row 2 kolom
  const groupedData = [];
  for (let i = 0; i < dataPekerjaan.length; i += 3) {
    groupedData.push(dataPekerjaan.slice(i, i + 3));
  }
  const groupedDataBesar = [];
  for (let i = 0; i < dataPekerjaanBesar.length; i += 2) {
    groupedDataBesar.push(dataPekerjaanBesar.slice(i, i + 2));
  }

  return (
    <div>
      <Button
        type="primary"
        shape="circle"
        icon={<span>📊</span>}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          zIndex: 1000, // agar di atas semua elemen lain
          backgroundColor: "#5BA87F",
          border: "none",
          width: "50px",
          height: "50px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
        onClick={openDrawer}
      />
      <div>
        <CardRealisasiEstimasi />
      </div>
      <div>
        <Row gutter={[16, 16]} key={2}>
          <CardLineChart />
          <CardBarchart />
        </Row>
      </div>
      <div>
        <Row gutter={[16, 16]} key={2}>
          <TopRealisasi />
          <BadRealisasi />
        </Row>
      </div>

      {/* Modal Detail */}
      {isModalOpen && (
        <ModalDetailChart
          showModal={isModalOpen}
          selectedItem={selectedItem}
          closeModal={handleCancel}
        />
      )}
      <Drawer
        forceRender
        className="custom-drawer"
        title="Chart Objek Pekerjaan"
        placement="right"
        width="100%"
        onClose={closeDrawer}
        open={isDrawerOpen}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        {groupedDataBesar.map((row, rowIndex) => (
          <Row gutter={[16, 16]} key={rowIndex}>
            {row.map((item, index) => (
              <Col
                span={12}
                key={index}
                style={{ width: "43.75%", marginTop: "10vh" }}
              >
                <Card
                  className="hover-card"
                  style={{
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                  bodyStyle={{ padding: "16px" }}
                  variant="borderless"
                >
                  <div className="hover-content">
                    <div
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#3C2E20",
                        padding: "8px 0",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.nama}
                    </div>

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
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ))}

        {groupedData.map((row, rowIndex) => (
          <Row gutter={[16, 16]} key={rowIndex}>
            {row.map((item, index) => (
              <Col span={8} key={index} style={{ marginTop: "10vh" }}>
                <Card
                  className="hover-card"
                  style={{
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                  bodyStyle={{ padding: "16px" }}
                  variant="borderless"
                >
                  <div className="hover-content">
                    <div
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#3C2E20",
                        padding: "8px 0",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.nama}
                    </div>

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
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Drawer>
    </div>
  );
}
