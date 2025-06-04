import { useState } from "react";
import { Card, Select, Col } from "antd";
import { Bold, LineChart } from "lucide-react";
import LineChartPekerjaan from "../chart/LineChartPekerjaan";
import ChartPerbandingan from "../chart/ChartPerbandingan";

export function CardLineChart() {
  return (
    <Col
      key={1}
      xs={24}
      sm={24}
      md={5}
      lg={12} // Pakai 12 sebagai acuan
      style={{ flexBasis: "48.4%", maxWidth: "48.4%" }} // Setara dengan 11.5/24
    >
      <Card
        title={"Chart Progress Pekerjaan"}
        style={{
          borderRadius: 12,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          height: "100%",
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
        <LineChartPekerjaan />
      </Card>
    </Col>
  );
}


const { Option } = Select;

// Dummy data kebun dan nilainya
const kebunData = {
  "Kebun A": 65,
  "Kebun B": 80,
  "Kebun C": 55,
  "Kebun D": 90,
  "Kebun E": 70,
};

export function CardBarchart() {
  const [kebunA, setKebunA] = useState("Kebun A");
  const [kebunB, setKebunB] = useState("Kebun B");

  return (
    <Col
      key={1}
      xs={24}
      sm={24}
      md={5}
      lg={12}
      style={{ flexBasis: "48.4%", maxWidth: "48.4%" }}
    >
      <Card
        title={"Perbandingan Pekerjaan 2 Kebun"}
        style={{
          borderRadius: 12,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          height: "100%",
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
        }}
        className="hoverable-card"
      >

        <ChartPerbandingan
          kebunA={{ name: kebunA, value: kebunData[kebunA] }}
          kebunB={{ name: kebunB, value: kebunData[kebunB] }}
        />
      </Card>
    </Col>
  );
}
