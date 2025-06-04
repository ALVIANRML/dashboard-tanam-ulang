import { useState } from "react";
import { Card, Row, Col } from "antd";
import { Bold } from "lucide-react";

// Fungsi format rupiah singkat
function formatRupiahSingkat(nominal) {
  if (nominal >= 1_000_000_000_000) {
    return (
      (nominal / 1_000_000_000_000).toFixed(1).replace(".0", "") + " triliun"
    );
  } else if (nominal >= 1_000_000_000) {
    return (nominal / 1_000_000_000).toFixed(1).replace(".0", "") + " milyar";
  } else if (nominal >= 1_000_000) {
    return (nominal / 1_000_000).toFixed(1).replace(".0", "") + " juta";
  } else if (nominal >= 1_000) {
    return (nominal / 1_000).toFixed(1).replace(".0", "") + " ribu";
  } else {
    return nominal.toString();
  }
}

export default function CardRealisasiEstimasi() {
  const [displayType, setDisplayType] = useState("persentase");

  const formatValue = (item) => {
    if (displayType === "persentase") {
      return `${item.persen}%`;
    } else if (displayType === "angka") {
      return item.angka.toLocaleString("id-ID");
    } else if (displayType === "nomina") {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(item.nominal);
    }
  };
  const data = [
    {
      title: "Realisasi VS Estimasi (Rp)",
      fungsi: "Fisik",
      Persen: 20,
    },
  ];

  function formatRupiahSingkat(nilai) {
    const satuan = [
      { angka: 1_000_000_000_000, label: "triliun" },
      { angka: 1_000_000_000, label: "miliar" },
      { angka: 1_000_000, label: "juta" },
      { angka: 1_000, label: "ribu" },
    ];

    for (let s of satuan) {
      if (nilai >= s.angka) {
        let hasil = (nilai / s.angka).toFixed(1);
        // Hilangkan .0 jika hasil bulat
        if (hasil.endsWith(".0")) hasil = hasil.slice(0, -2);
        return `Rp${hasil} ${s.label}`;
      }
    }

    return `Rp${nilai}`;
  }

  return (
    <Row
      gutter={[14, 14]}
      style={{ padding: "24px", transform: "translateX(-30px)" }}
    >
      {/* Realisasi VS Estimasi */}
      {data.map((item, index) => (
        <Col key={1} xs={24} sm={24} md={5} lg={6}>
          <Card
            title={"Estimasi VS Realisasi (Rp)"}
            style={{
              borderRadius: 12,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "95%",
              transition: "transform 0.2s ease",
            }}
            headStyle={{
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#F6FFED",
              color: "#389E0D",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
            bodyStyle={{
              padding: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
            }}
            className="hoverable-card"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                width: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  borderRight: "1px solid #e0e0e0",
                  paddingRight: 8,
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "#666",
                    fontWeight: "bold",
                  }}
                >
                  Realsasi
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#3C2E20",
                  }}
                >
                  {formatRupiahSingkat(100000000)}
                </p>
              </div>
              <div style={{ flex: 1, paddingLeft: 8 }}>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "#666",
                    fontWeight: "bold",
                  }}
                >
                  Estimasi
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#3C2E20",
                  }}
                >
                  {formatRupiahSingkat(100000000)}
                </p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
      <Col key={1} xs={24} sm={24} md={5} lg={6}>
        <Card
          title={"Estimasi (%)"}
          style={{
            borderRadius: 12,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            height: "95%",
            transition: "transform 0.2s ease",
          }}
          headStyle={{
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#F6FFED",
            color: "#389E0D",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          bodyStyle={{
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
          className="hoverable-card"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #e0e0e0",
                paddingRight: 8,
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "#666",
                  fontWeight: "bold",
                }}
              ></p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#3C2E20",
                }}
              >
                Persentase
              </p>
            </div>
            <div style={{ flex: 1, paddingLeft: 8 }}>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "#666",
                  fontWeight: "bold",
                }}
              ></p>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#3C2E20",
                }}
              >
                {25} %
              </p>
            </div>
          </div>
        </Card>
      </Col>
      {/* Estimasi vs realisasi persen */}
      <Col key={1} xs={24} sm={24} md={5} lg={6}>
        <Card
          title={"Rp/Ha"}
          style={{
            borderRadius: 12,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            height: "95%",
            transition: "transform 0.2s ease",
          }}
          headStyle={{
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#F6FFED",
            color: "#389E0D",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          bodyStyle={{
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
          className="hoverable-card"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #e0e0e0",
                paddingRight: 8,
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "#666",
                  fontWeight: "bold",
                }}
              >
                Nominal
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#3C2E20",
                }}
              >
                {formatRupiahSingkat(100000000)}/Ha
              </p>
            </div>
            <div style={{ flex: 1, paddingLeft: 8 }}>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "#666",
                  fontWeight: "bold",
                }}
              >
                Luas Ha
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#3C2E20",
                }}
              >
                {200000} Ha
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
