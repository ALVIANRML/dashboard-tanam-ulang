import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ModalPekerjaan from "../component/modal/ModalPekerjaan";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const data = [
  { id: 1, title: "Parilitta Ripper (Dengan D8)", icon: "🚜" },
  { id: 2, title: "Bongkar, Cipping, Menutup Lobang Kelapa sawit", icon: "🛠️" },
  { id: 3, title: "BER 1", icon: "🔧" },
  { id: 4, title: "BER 2", icon: "🧰" },
];

const koordinatLokasi = [
  {
    id: 1,
    posisi: [2.9874700802609673, 99.20528676629459],
    namaKebun: "BAH JAMBI",
    jumlahPaket: 2,
    luas: "150 Ha",
    vendor: "PT. Perkebunan Maju",
    paket: ["Parilitta Ripper (Dengan D8)", "BER 1"],
  },
  {
    id: 2,
    posisi: [3.561194955022389, 98.94381600301699],
    namaKebun: "Lokasi B",
    jumlahPaket: 1,
    luas: "80 Ha",
    vendor: "PT. Sawit Subur",
    paket: ["BER 2"],
  },
  {
    id: 3,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
  {
    id: 4,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
  {
    id: 5,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
  {
    id: 6,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
  {
    id: 7,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
  {
    id: 8,
    posisi: [3.5407072042432937, 99.02651966610456],
    namaKebun: "Lokasi C",
    jumlahPaket: 3,
    luas: "200 Ha",
    vendor: "PT. Hijau Lestari",
    paket: ["BER 1", "BER 2", "Parilitta Ripper (Dengan D8)"],
  },
];
const DashboardUtama = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk mendapatkan item dengan infinite loop
  const getItemAtIndex = (index) => {
    const normalizedIndex = ((index % data.length) + data.length) % data.length;
    return { ...data[normalizedIndex], displayIndex: index };
  };

  const getVisibleCards = () => {
    return [
      getItemAtIndex(currentIndex - 2),
      getItemAtIndex(currentIndex - 1),
      getItemAtIndex(currentIndex),
      getItemAtIndex(currentIndex + 1),
      getItemAtIndex(currentIndex + 2),
    ];
  };

  const goLeft = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goRight = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCardClick = (item, isCenter) => {
    if (isCenter) {
      setSelectedItem(item);
      setShowModal(true);
    } else {
      // Klik pada card samping, pindah ke center
      const itemIndex = data.findIndex((dataItem) => dataItem.id === item.id);
      setCurrentIndex(itemIndex);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const visibleCards = getVisibleCards();

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-2.3, 99.2]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>, Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
        />
        {koordinatLokasi.map((lokasi) => (
          <Marker key={lokasi.id} position={lokasi.posisi}>
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
            >
              <div style={{ fontSize: "12px", lineHeight: "1.4" }}>
                <strong>Nama Kebun:</strong> {lokasi.namaKebun} <br />
                <strong>Jumlah Paket:</strong> {lokasi.jumlahPaket} <br />
                <strong>Luas:</strong> {lokasi.luas} <br />
                <strong>Vendor:</strong> {lokasi.vendor} <br />
                <strong>Paket:</strong>
                <ul style={{ margin: 0, paddingLeft: "16px" }}>
                  {lokasi.paket.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Card Slider */}
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          left: "45%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        {/* Tombol kiri */}
        <button
          onClick={goLeft}
          style={{
            marginRight: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <ChevronLeft size={24} color="#333" />
        </button>

        {/* Cards */}
        <div style={{ display: "flex", gap: "20px" }}>
          {visibleCards.map((item, index) => {
            const isCenter = index === 2;
            return (
              <div
                key={`${item.id}-${item.displayIndex}`}
                style={{
                  backgroundColor: isCenter
                    ? "#c7d7b5"
                    : "rgba(255, 255, 255, 0.8)",
                  padding: "20px",
                  borderRadius: "16px",
                  width: "180px",
                  height: "160px",
                  boxShadow: isCenter
                    ? "0 8px 24px rgba(0,0,0,0.2)"
                    : "0 4px 12px rgba(0,0,0,0.1)",
                  opacity: isCenter ? 1 : 0.6,
                  transform: isCenter ? "scale(1.05)" : "scale(0.95)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: isCenter
                    ? "2px solid #a8c688"
                    : "1px solid rgba(255,255,255,0.3)",
                }}
                onClick={() => handleCardClick(item, isCenter)}
                onMouseEnter={(e) => {
                  if (!isCenter) {
                    e.target.style.opacity = "0.8";
                    e.target.style.transform = "scale(1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCenter) {
                    e.target.style.opacity = "0.6";
                    e.target.style.transform = "scale(0.95)";
                  }
                }}
              >
                <div style={{ fontSize: "45px", marginBottom: "10px" }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    margin: "0",
                    fontWeight: isCenter ? "bold" : "500",
                    fontSize: isCenter ? "14px" : "13px",
                    color: isCenter ? "#2c5530" : "#555",
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tombol kanan */}
        <button
          onClick={goRight}
          style={{
            marginLeft: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <ChevronRight size={24} color="#333" />
        </button>
      </div>

      {/* Indicator dots */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "45%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 1000,
        }}
      >
        {data.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                ((currentIndex % data.length) + data.length) % data.length ===
                index
                  ? "#c7d7b5"
                  : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border:
                ((currentIndex % data.length) + data.length) % data.length ===
                index
                  ? "2px solid #a8c688"
                  : "2px solid rgba(255, 255, 255, 0.3)",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Modal Pekerjaan */}
      <ModalPekerjaan
        showModal={showModal}
        selectedItem={selectedItem}
        closeModal={closeModal}
      />
    </div>
  );
};

export default DashboardUtama;
