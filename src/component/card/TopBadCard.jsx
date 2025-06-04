import { BadRealisasiChart, TopRealisasiChart } from "../chart/TopBadKebun";
import { Col, Card } from "antd";
export function TopRealisasi() {
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
        title={"Chart Progress Pekerjaan"}
        style={{
          marginTop:"2vh",
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
        <TopRealisasiChart />
      </Card>
    </Col>
  );
}


export function BadRealisasi() {
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
        title={"Chart Progress Pekerjaan"}
        style={{
          marginTop:"2vh",
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
        <BadRealisasiChart />
      </Card>
    </Col>
  );
}
