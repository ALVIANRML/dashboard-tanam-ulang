import LogoPtpnImg from "../assets/img/PTPN-4.png";

export default function LogoPtpn() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "16px",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <img
        src={LogoPtpnImg}
        alt="Company Logo"
        style={{
          width: "70px",
          height: "70px",
          marginBottom: "8px",
        }}
      />
      <h3
        style={{
          color: "green",
          fontSize: "1rem",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <span style={{ display: "block", lineHeight: "1.2" }}>Dashboard</span>
        <span style={{ display: "block", lineHeight: "1.2" }}>
          Tanaman Ulang
        </span>
      </h3> 
    </div>
  );
}
